export function ParticleText(canvas, config) {
    const { text, radius, color, size, gap, textX, textY, fontSize, speed } = config;
    const ctx = canvas.getContext("2d");
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    var particles = [];
    // var mouse = { x: 0, y: 0 };

    // 当前时间
    let now = Date.now();
    // 计算激活时间线，流沙效果
    const timePerPixel = 5000 / WIDTH

    function Particle(x, y, at) {
        this.dest = { x, y };
        this.r = size;
        // 初始位置
        this.x = x;
        this.y = 0;
        // 初始速度
        this.vx = 0;
        this.vy = Math.random() * speed;
        // 初始加速度
        this.accX = 0;
        this.accY = 0;
        // 摩擦，速度的保留比例
        this.friction = 0.93;
        this.color = color;
        // 激活时间
        this.activeTime = at;
    }

    Particle.prototype.render = function () {
        // 还没激活就老实呆着
        if (this.activeTime > now) return;

        // 加速度正比于到终点的距离，越靠近终点加速度越慢
        this.accX = (this.dest.x - this.x) / 500;
        this.accY = (this.dest.y - this.y) / 500;
        // 调整运动速度
        this.vx += this.accX;
        this.vy += this.accY;
        // 运动速度损耗后的保留，最后会停下来
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        ctx.fill();

        // 远离鼠标
        // var mx = this.x - mouse.x;
        // var my = this.y - mouse.y;

        // var distance = Math.sqrt(mx * mx + my * my);
        // if (distance < radius) {
        //     this.accX = (this.x - mouse.x) / 500;
        //     this.accY = (this.y - mouse.y) / 500;
        //     this.vx += this.accX;
        //     this.vy += this.accY;
        // }
    };

    // canvas.addEventListener("mousemove", (e) => {
    //     mouse.x = e.offsetX;
    //     mouse.y = e.offsetY;
    // });

    // canvas.addEventListener("touchmove", (e) => {
    //     if (e.touches.length > 0) {
    //         mouse.x = e.touches[0].offsetX;
    //         mouse.y = e.touches[0].offsetY;
    //     }
    // });

    // canvas.addEventListener("touchend", (e) => {
    //     mouse.x = -9999;
    //     mouse.y = -9999;
    // });

    function initParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillText(text, textX, textY + fontSize);
        
        var data = ctx.getImageData(0, 0, WIDTH, HEIGHT).data;
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.globalCompositeOperation = "screen";

        // 设置每个粒子的终点
        particles = [];
        // gap：采样间距
        for (var x = 0; x < WIDTH; x += gap) {
            for (var y = 0; y < HEIGHT; y += gap) {
                if (data[(x + y * WIDTH) * 4 + 3] > 150) {
                    particles.push(new Particle(x, y, countActiveTime(x)));
                }
            }
        }

        console.info(`粒子数 ${particles.length}`)
    }

    function countActiveTime(x) {
        // 从左到右
        return now + x * timePerPixel
        // 从中间向两边散开
        // return now + Math.abs(x - WIDTH / 2) * timePerPixel
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
