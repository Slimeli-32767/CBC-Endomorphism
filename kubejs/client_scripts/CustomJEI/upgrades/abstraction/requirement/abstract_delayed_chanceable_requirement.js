// priority: 2045

/**
 * 抽象类，请勿实例化该类
 * @abstract
 * @param {RequirementIOMode} mode
 */
function AbstractDelayedChanceableRequirement(mode) {
  AbstractDelayedRequirement.call(this, mode);
  this.chance = 1.0;
}

// 先设置原型链，再添加方法，避免方法被覆盖
inheritPrototype(AbstractDelayedChanceableRequirement, AbstractDelayedRequirement);

/**
 * @returns {number}
 */
AbstractDelayedChanceableRequirement.prototype.getChance = function () {
  return this.chance;
};

/**
 * @param {number} chance
 */
AbstractDelayedChanceableRequirement.prototype.setChance = function (chance) {
  this.chance = clamp(chance, 0, 1);
};

/**
 * @param {CraftingContext} context
 */
AbstractDelayedChanceableRequirement.prototype.shouldSkip = function (context) {
  const chance = context.getModifiedValue(this.chance, this, 'chance');
  return chance < Math.random();
};
