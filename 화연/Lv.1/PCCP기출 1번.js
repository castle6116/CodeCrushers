/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/250137
 * @param {number[]} bandage
 * @param {number} health
 * @param {number[][]} attacks
 * @returns
 */
function solution(bandage, health, attacks) {
  let life = health;
  let time = 0;
  let [a, b, c] = bandage;
  for (let attack of attacks) {
    const [attackTime, damage] = attack;
    let period = attackTime - time - 1;
    time = attackTime;
    life = life + b * period + Math.floor(period / a) * c;
    if (life >= health) {
      life = health;
    }
    life -= damage;
    if (life <= 0) {
      life = -1;
      break;
    }
  }
  return life;
}
