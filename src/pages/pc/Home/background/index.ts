import shuffle from "@/utils/shuffle";

const code = "%E5%BC%A0%E4%BA%AE%20%E8%94%A1%E6%A0%8B%E6%A2%81%20%E5%86%AF%E7%90%A6%20%E9%99%88%E9%80%B8%E9%A3%9E%20%E7%8E%8B%E8%89%BA%E8%B1%AA%20%E6%9E%97%E5%8D%9A%E9%9F%AC%20%E8%92%8B%E6%B7%87%E6%B7%87%20%E9%99%B6%E9%9D%99%E6%80%A1%20%E8%B7%AF%E5%B0%8F%E5%87%A1%20%E5%BC%A0%E5%B1%95%E9%B9%8F%20%E9%BB%84%E9%87%91%E8%8D%A3%20%E5%86%89%E6%B4%A5%E8%B1%AA%20%E4%BB%B2%E5%B4%87%E9%B9%8F%20%E6%9C%B1%E5%B0%8A%E9%9B%84%20%E8%B5%B5%E4%BA%91%E6%BD%87%20%E9%99%88%E8%89%BA%E4%B8%B9"

export function main(num: number) {
    let ns = shuffle(decodeURIComponent(code).split(' '))
    let delays = [];
    for (let index = 0; index < num; index++) {
        delays.push(index * 0.5 + Math.random());
    }
    delays = shuffle(delays);

    const names = []
    const styles = []

    for (let index = 0; index < num; index++) {
        names.push(ns[index % ns.length]);
        styles.push({
            animationDelay: `${delays[index % ns.length]}s`
        })
    }

    return {
        names,
        styles
    }
}