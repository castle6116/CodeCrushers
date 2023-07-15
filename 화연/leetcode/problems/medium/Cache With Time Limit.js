/**
 * https://leetcode.com/problems/cache-with-time-limit/description/
 * 캐시 타이머 만들기
 */
var TimeLimitedCache = function() {
  this.caches = {};
  this.timeouts = {};
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
  let cacheTime;
  let isExist = false;
  if(this.timeouts[key]) {
      clearTimeout(this.timeouts[key]);
      isExist = true;
  }
  this.caches[key] = value;
  cacheTime = setTimeout(() => {
      delete this.caches[key];
      delete this.timeouts[key];
      clearTimeout(cacheTime);
  }, duration);
  this.timeouts[key] = cacheTime;
  return isExist;
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  if(this.caches[key] === undefined) {
      return -1;
  } else {
      return this.caches[key];
  }
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  return Object.keys(this.caches).length;
};

/**
* Your TimeLimitedCache object will be instantiated and called as such:
* var obj = new TimeLimitedCache()
* obj.set(1, 42, 1000); // false
* obj.get(1) // 42
* obj.count() // 1
*/




/**
 * 한 object에 몰아넣기
 */
var TimeLimitedCache = function() {
  this.cache = {};
};

/** 
* @param {number} key
* @param {number} value
* @param {number} time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
if (this.cache[key] && this.cache[key].timer) {
  clearTimeout(this.cache[key].timer);
  this.cache[key].value = value;
  this.cache[key].timer = setTimeout(() => {
    this.remove(key);
  }, duration);
  return true;
} else {
  this.cache[key] = {
    value: value,
    timer: setTimeout(() => {
      this.remove(key);
    }, duration)
  };
  return false;
}
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  if (this.cache[key] && this.cache[key].timer) {
    return this.cache[key].value;
  } else {
    return -1;
  }
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  let count = 0;
  for (const key in this.cache) {
    if (this.cache[key].timer) {
      count++;
    }
  }
  return count;
};

TimeLimitedCache.prototype.remove = function(key) {
  delete this.cache[key];
};
