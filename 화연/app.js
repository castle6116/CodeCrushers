import solution from './empl_exam/madup/coding_test1';

function testCase() {
    let success = false;
    
    const n1 = 5;
    const n2 = 7;
    const trains1 = [[1, 5, 2], [2, 3, 1]];
    const trains2 = [[1, 3, 3], [4, 7, 3]];
    const bookings1 = [[1, 5], [1, 3], [2, 5], [2, 4], [2, 4], [3, 5], [4, 5]];
    const bookings2 = [[1, 3], [2, 5], [3, 7], [4, 7], [5, 6], [6, 7], [5, 7]];

    const result1 = 4;
    const result2 = 5;

    if(solution(n1, trains1, bookings1) === result1
    && solution(n2, trains2, bookings2) === result2) {
        success = true;
    };

    return success;
};

console.log(testCase);