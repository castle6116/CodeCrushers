/**
 * stack을 이용한 풀이
 * @param {*} ingredient 
 * @returns 
 */
function 햄버거만들기(ingredient) {
    let count = 0;
    let stack = [];
    
    const getHamberger = (arr) => {
        for(let i = 0; i < arr.length; i++) {
            stack.push(arr[i]);
            if(stack.length < 4) {
                continue;
            }

            if(stack[stack.length - 4] === 1 && 
              stack[stack.length - 3] === 2 &&
              stack[stack.length - 2] === 3 &&
              stack[stack.length - 1] === 1) {
                for(let j = 0; j < 4; j++) {
                    stack.pop();
                }
                count++;
            }
        }
        return count;
    }
    return getHamberger(ingredient);
}


/**
 * 효율은 쫌 떨어지지만 내가 의도한 방법
 * @param {*} ingredient 
 * @returns 
 */
function 햄버거만들기2(ingredient) {
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return count;
}


