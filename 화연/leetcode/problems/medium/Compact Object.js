/**
 * https://leetcode.com/problems/compact-object/description/
 * falsy value, typeof
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
  let answer;
  if(Array.isArray(obj)) {
    answer = [];
    for(let i = 0; i < obj.length; i++) {
      const value = obj[i];
      if(value !== null && value !== 0 && value !== false && value !== "") {
        let secondVal = value;
        if(typeof value === 'object') {
          secondVal = compactObject(obj[i]);
        } 
        answer.push(secondVal);
      }
    }
  } else {
    answer = {};
    for(const key in obj) {
      const value = obj[key];
      if(value !== null && value !== 0 && value !== false && value !== "") {
        let secondVal = value;
        if(typeof value === 'object') {
          secondVal = compactObject(obj[key]);
        } 
        answer[key] = secondVal;
      }
    }
  }

  return answer;
};




/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.reduce((acc, cur) => {
      let value = compactObject(cur);
      if (value) {
        acc.push(value);
      }
      return acc;
    }, [])
  }
  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      let value = compactObject(obj[key]);
      if (value) {
        acc[key] = value;
      }
      return acc
    }, {});
  }

  return obj || null;
};




var compactObject = function(obj) {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;

  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);
    if (Boolean(value)) compacted[key] = value;
  }

  return compacted;
};