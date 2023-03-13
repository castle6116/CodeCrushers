// 2023-02-18
function 소수찾기(n) {
    const newArr = new Array(n + 1).fill(0).map((num, i) => num += i);

    const getPrimeSize = (arr) => {
        let array = [...arr];
        for (let i = 2; i <= n; i++) {
            if (array[i] === 0) { continue; }
            for (let j = i*2; j <= n; j += i) {
                array[j] = 0
            }
        }
        return array.filter((a) => a !== 0).length - 1;
    }
    
    return getPrimeSize(newArr);
}
// 시간복잡도에 대해서 처음 알게되었다.
// 맙소사!!! 이걸 알아야 효울성이 좋아지는 구나!