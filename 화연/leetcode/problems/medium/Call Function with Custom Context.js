/**
 * https://leetcode.com/problems/call-function-with-custom-context/description/
 * 개어렵다..!!!!
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    Object.prototype.fn = this;
    return context.fn(...args);
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */