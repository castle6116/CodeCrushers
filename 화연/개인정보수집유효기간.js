/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150370
 * @author HwaYeon
 * @param {*} today 
 * @param {*} terms 
 * @param {*} privacies 
 * @returns 
 */
function solution(today, terms, privacies) {
    let answer = [];
    let priTypes = {}
    for(let i = 0; i < terms.length; i++) {
        const [type, valiDate] = terms[i].split(' ');
        if(priTypes[type] === undefined) {
            priTypes[type] = valiDate === '0'? 0 : valiDate * 28 - 1;
        }
    }
    for(let i = 0; i < privacies.length; i++) {
        const [date, type] = privacies[i].split(' ');
        const [addYear, addMonth, addDate] = date.split('.').map((a) => a = Number(a));
        const valiDate = priTypes[type];
        const newDate = valiDate%28 + addDate > 28 ? 
              valiDate%28 + addDate - 28 : valiDate%28 + addDate;
        let newMonth = Math.floor(valiDate/28) + addMonth;
        const newYear = Math.floor(newMonth/12) + addYear;
        newMonth = valiDate%28 + addDate > 28 ?
            newMonth + 1 : newMonth;
        newMonth = newMonth > 12 ? 
            (newMonth%12 === 0? 12 : newMonth%12) : newMonth;
        
        const newDay = String(newYear) + 
              String(newMonth).padStart(2, '0') + 
              String(newDate).padStart(2, '0');
        const toDay = today.replaceAll('.', '');
        if(Number(newDay) < Number(toDay)) {
            answer.push(i + 1);
        }
    }
    return answer;
}