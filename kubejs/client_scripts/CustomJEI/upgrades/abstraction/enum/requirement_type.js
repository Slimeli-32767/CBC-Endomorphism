// priority: 4096

/**
 * 枚举类，请使用 RequirementType.xxx 来获取实例
 * @param {string} name
 * @param {string} metric
 */
function RequirementType(name, metric) {
  this.name = name;
  this.metric = metric;
}

/**
 * @return {string}
 */
RequirementType.prototype.toString = function () {
  return this.name;
};

/**
 * @return {string}
 */
RequirementType.prototype.getMetric = function () {
  return this.metric;
};

RequirementType.SPEED = new RequirementType('speed', 'tick');
RequirementType.ENERGY = new RequirementType('energy', 'FE');
RequirementType.ENERGY_PER_TICK = new RequirementType('energy_per_tick', 'FE/t');
RequirementType.FLUID = new RequirementType('fluid', 'mB');
RequirementType.FLUID_PER_TICK = new RequirementType('fluid_per_tick', 'mB/t');
RequirementType.ITEM = new RequirementType('item', 'item');
RequirementType.BLOCK = new RequirementType('block', 'block');

/**
 * @return {RequirementType[]}
 */
RequirementType.values = function () {
  return [
    RequirementType.SPEED,
    RequirementType.ENERGY,
    RequirementType.ENERGY_PER_TICK,
    RequirementType.FLUID,
    RequirementType.FLUID_PER_TICK,
    RequirementType.ITEM,
    RequirementType.BLOCK
  ];
};

/**
 * @param {string} str
 * @return {RequirementType|null}
 */
RequirementType.fromString = function (str) {
  return RequirementType[str.toUpperCase()] || null;
};
