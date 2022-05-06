export function ParticleText(canvas, config) {
  const { text, radius, color, size } = config;
  const ctx = canvas.getContext("2d");
  const ww = canvas.width;
  const wh = canvas.height;
  const gap = size * 2; // 从采样画布像素生成粒子时的间距

  var particles = [];
  var mouse = { x: 0, y: 0 };
  
  // 当前时间
  let now = Date.now();
  // 计算激活时间线，流沙效果
  const timePerPixel = 5000 / ww

  function Particle(x, y, at) {
    this.dest = { x, y };
    this.r = size;
    // 初始位置
    this.x = x;
    this.y = 0;
    // 初始速度
    this.vx = 0;
    this.vy = (Math.random() - 0.5) * 20;
    // 初始加速度
    this.accX = 0;
    this.accY = 0;
    // 摩擦，速度的保留比例
    this.friction = Math.random() * 0.05 + 0.92;
    this.color = color;
    // 激活时间
    this.activeTime = at;
  }

  Particle.prototype.render = function () {
    // 还没激活就老实呆着
    if (this.activeTime > now) return;

    // 加速度正比于到终点的距离
    this.accX = (this.dest.x - this.x) / 500;
    this.accY = (this.dest.y - this.y) / 500;
    // 调整运动速度
    this.vx += this.accX;
    this.vy += this.accY;
    // 运动速度的损耗，最后会停下来
    this.vx *= this.friction;
    this.vy *= this.friction;
    
    this.x += this.vx;
    this.y += this.vy;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();

    // 远离鼠标
    var mx = this.x - mouse.x;
    var my = this.y - mouse.y;

    var distance = Math.sqrt(mx * mx + my * my);
    if (distance < radius) {
      this.accX = (this.x - mouse.x) / 500;
      this.accY = (this.y - mouse.y) / 500;
      this.vx += this.accX;
      this.vy += this.accY;
    }
  };

  canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
  });

  canvas.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].offsetX;
      mouse.y = e.touches[0].offsetY;
    }
  });

  canvas.addEventListener("touchend", (e) => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  function initParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold " + ww / 10 + "px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(text, ww / 2, wh / 2);

    var data = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.globalCompositeOperation = "screen";

    // 设置每个粒子的终点
    particles = [];
    for (var i = 0; i < ww; i += gap) {
      for (var j = 0; j < wh; j += gap) {
        if (data[(i + j * ww) * 4 + 3] > 150) {
          particles.push(new Particle(i, j, countActiveTime(i)));
        }
      }
    }

    console.info(`粒子数 ${particles.length}`)
  }

  function countActiveTime(x) {
    // 从左到右
    return now + x * timePerPixel
    // 从中间向两边散开
    // return now + Math.abs(x - ww / 2) * timePerPixel
  }

  function render(a) {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    now = Date.now();
    particles.map((p) => p.render())
  }

  return {
    init: function () {
      initParticles();
      requestAnimationFrame(render);
    },
  };
}
