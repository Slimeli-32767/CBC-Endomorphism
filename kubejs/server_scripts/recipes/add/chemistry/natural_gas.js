ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //合成天然气
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "superheated",
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 1000 },
      { "fluid": "minecraft:water", "amount": 500 },
      { "item": "kubejs:crushed_coal" },
      { "item": "kubejs:crushed_coal" }
    ],
    "results": [
      { "fluid": "kubejs:natural_gas", "amount": 500 },
      { "fluid": "minecraft:water", "amount": 500 }
    ],
    "processingTime": 45
  }).id('dut_create:natural_gas_from_coal')
  //合成天然气
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "secondaryFluidOutput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      { "fluidTag": "forge:hydrogen", "amount": 1000 },
      { "fluid": "kubejs:carbon_dioxide", "amount": 250 }
    ],
    "results": [
      { "fluid": "minecraft:water", "amount": 500 },
      { "fluid": "kubejs:natural_gas", "amount": 250 }
    ],
    "processingTime": 15
  }).id('dut_create:natural_gas_from_co2')
})