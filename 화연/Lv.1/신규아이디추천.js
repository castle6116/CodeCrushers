/**
 * 아이디의 길이는 3자 이상 15자 이하여야 합니다.
 * 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
 * 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
 * 
 * 신규 유저가 입력한 아이디가 new_id 라고 한다면,
 * 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
 * 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
 * 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
 * 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
 * 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
 * 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
 *      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
 * 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
 * 
 * Q. 신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.
 * e. new_id는 길이 1 이상 1,000 이하인 문자열입니다.
 * new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
 * new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.
 * 
 * @param {*} new_id 
 * @returns 
 */
function 신규아이디추천(new_id) {
    const confirmLastDot = (id) => {
        if(id.at(id.length - 1) === '.') {
            id = id.slice(0, id.length - 1);
        }
        return id;
    }
    const step7 = (id) => {
        const lastAlpa = id.at(id.length - 1);
        if(id.length <= 2) {
            id += lastAlpa.repeat(3 - id.length);
        }
        return id;
    };
    const step6 = (id) => {
        if(id.length > 15) {
            id = id.slice(0, 15);
            id = confirmLastDot(id);
        }
        return step7(id);
    };
    const step5 = (id) => {
        id = id.length < 1 ? 'a' : id;
        return step6(id);
    };
    const step4 = (id) => {
        id = confirmLastDot(id);
        if(id.at(0) === '.') {
            id = id.slice(1);
        }
        return step5(id);
    };
    const step3 = (id) => {
        if(id.includes('..')) {
            id = id.replaceAll('..', '.');
            return step3(id);
        } else {
            return step4(id);
        }
    };
    const step2 = (id) => {
        id = [...id].filter((a) => (a.charCodeAt(0) > 96 && a.charCodeAt(0) < 123) ||
                      (a.charCodeAt(0) > 47 && a.charCodeAt(0) < 58) ||
                      a.charCodeAt(0) === 45 || 
                      a.charCodeAt(0) === 46 || 
                      a.charCodeAt(0) === 95).join('');
        return step3(id);
    };
    const step1 = (id) => {
        id = [...id].map((a) => a.charCodeAt(0) > 64 && a.charCodeAt(0) < 91 ? 
                         a.toLowerCase() : a).join('');
        return step2(id);
    };
    return step1(new_id);
}

// 알파벳 대문자와 소문자의 아스키코드는 외워두는 게 좋을 듯
// 소문자 a~z : 95~122
// 대문자 A~Z : 63~90