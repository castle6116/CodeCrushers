/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/161990
 * 
 * @author HwaYeon
 * @param {*} wallpaper 
 * @returns 
 */
function solution(wallpaper) {    
    const positions = wallpaper.map((wall, i) => {
        if(wall.includes('#')) {
            const firstIndex = wall.indexOf('#');
            const lastIndex = wall.lastIndexOf('#');
            wall = [i, firstIndex, lastIndex];
        } else {
            wall = false;
        }
        return wall;
    }).filter((wall) => wall !== false);

    let vers = [];
    let hols = [];
    for(let i = 0; i < positions.length; i++) {
        vers.push(positions[i][0]);
        hols.push(positions[i][1]);
        hols.push(positions[i][2]);
    }
    
    const answer = [Math.min(...vers), Math.min(...hols), Math.max(...vers) + 1, Math.max(...hols) + 1];
    return answer;
}