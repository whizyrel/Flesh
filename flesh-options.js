/**
 * @module Flesh
 * @see module:./edit-body-parser
 */
/**
 * Transforms weird arrays to key-value-pair Object
 * @class
 * @name Flesh
 * @function work
 */
class Flesh {
  /**
   * @function work
   * @param {Array} array An array to transform
   * @return {Object} this
   */
  work(array) {
    this.options = {};
    const details = array;
    for (const detail of details) {
      this.options[detail.key] = detail.value;
    }
    return this;
  }
  /**
   * @function get
   * @return {Object}
   */
  get get() {
    return this.options;
  }
}
module.exports = new Flesh();
