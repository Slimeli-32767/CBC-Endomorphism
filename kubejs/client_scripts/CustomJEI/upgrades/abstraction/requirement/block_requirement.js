// priority: 2040

/**
 * @param {RequirementIOMode} mode
 * @param {number} amount 整数，表示配方开始需要的、或配方结束产生的方块数
 */
function BlockRequirement(mode, amount) {
  AbstractDelayedChanceableRequirement.call(this, mode);
  this.amount = amount;
}

// 先设置原型链，再添加方法，避免方法被覆盖
inheritPrototype(BlockRequirement, AbstractDelayedChanceableRequirement);

/**
 * @returns {RequirementType}
 */
BlockRequirement.prototype.getType = function () {
  return RequirementType.BLOCK;
};

/**
 * @param {CraftingContext} context
 * @returns {number} 整数，配方开始需要的、或配方结束产生的方块数，经过各种modifier修改后的值
 */
BlockRequirement.prototype.process = function (context) {
  return context.getIntegerModifiedValue(this.amount, this, null);
};

/**
 * @param {CraftingContext} context
 * @param {boolean} useVariable
 * @return {string[]}
 */
BlockRequirement.prototype.processTrace = function (context, useVariable) {
  let functionList = [];
  let formulaList = [];
  context.getIntegerModifiedValueTrace(this.amount, this, null, functionList, formulaList, useVariable);
  return CraftingContext.mergeTrace(functionList, formulaList);
};

/**
 * @returns {string} 单位
 */
BlockRequirement.prototype.getUnit = function () {
  return 'block';
};
