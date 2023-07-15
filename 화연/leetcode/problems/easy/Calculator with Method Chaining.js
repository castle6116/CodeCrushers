/**
 * https://leetcode.com/problems/calculator-with-method-chaining/description/
 * new Calculator(10).add(5).subtract(7).getResult()
 * 이런식으로 사용하려면 method 안에 return this를 해야하나봄ㅠㅠ
 */
class Calculator {
  /** 
   * @param {number} value
   */
  constructor(value) {
      this.value = value;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
      this.value += value;
      console.log("add", this);
      return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
      this.value -= value;
      console.log("subtract", this);
      return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
      this.value *= value;
      console.log("multiply", this);
      return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
      if(value === 0) {
          throw new Error("Division by zero is not allowed");
      }
      this.value /= value;
      return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
      this.value **= value;
      return this;
  }
    
  /** 
   * @return {number}
   */
  getResult() {
      return this.value;
  }
}