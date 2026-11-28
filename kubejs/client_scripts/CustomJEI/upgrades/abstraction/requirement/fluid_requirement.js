// priority: 2040

/**
 * @param {RequirementIOMode} mode
 * @param {number} amount 整数，表示配方开始需要的、或配方结束产生的流体数
 */
function FluidRequirement(mode, amount) {
  AbstractChanceableRequirement.call(this, mode);
  this.amount = amount;
}

// 先设置原型链，再添加方法，避免方法被覆盖
inheritPrototype(FluidRequirement, AbstractChanceableRequirement);

/**
 * @returns {RequirementType}
 */
FluidRequirement.prototype.getType = function () {
  return RequirementType.FLUID;
};

/**
 * @param {CraftingContext} context
 * @returns {number} 整数，配方开始需要的、或配方结束产生的流体数，经过各种modifier修改后的值
 */
FluidRequirement.prototype.process = function (context) {
  return context.getIntegerModifiedValue(this.amount, this, null);
};

/**
 * @param {CraftingContext} context
 * @param {boolean} useVariable
 * @return {string[]}
 */
FluidRequirement.prototype.processTrace = function (context, useVariable) {
  let functionList = [];
  let formulaList = [];
  context.getIntegerModifiedValueTrace(this.amount, this, null, functionList, formulaList, useVariable);
  return CraftingContext.mergeTrace(functionList, formulaList);
};

/**
 * @returns {string} 单位
 */
FluidRequirement.prototype.getUnit = function () {
  return 'mB';
};
