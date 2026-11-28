// priority: 2046

/**
 * 抽象类，请勿实例化该类
 * @abstract
 * @param {RequirementIOMode} mode
 */
function AbstractDelayedRequirement(mode) {
  AbstractRequirement.call(this, mode);
  this.delay = 0.0;
}

// 先设置原型链，再添加方法，避免方法被覆盖
inheritPrototype(AbstractDelayedRequirement, AbstractRequirement);

/**
 * @returns {number}
 */
AbstractDelayedRequirement.prototype.getDelay = function () {
  return this.delay;
};

/**
 * @param {number} delay
 */
AbstractDelayedRequirement.prototype.setDelay = function (delay) {
  this.delay = clamp(delay, 0, 1);
};

/**
 * @returns {boolean}
 */
AbstractDelayedRequirement.prototype.isDelayed = function () {
  return this.delay != 0.0;
};
