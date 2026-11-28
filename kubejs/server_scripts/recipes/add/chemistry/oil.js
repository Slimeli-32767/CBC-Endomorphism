ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //汽油裂解
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluidTag": "forge:gasoline", "amount": 400 }],
    "heatRequirement": "heated",
    "processingTime": 90,
    "results": [
      { "fluid": "kubejs:natural_gas", "amount": 800 }
    ]
  }).id('dut_create:gasoline_split')
  //柴油裂化
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluidTag": "forge:diesel", "amount": 200 }],
    "heatRequirement": "heated",
    "processingTime": 90,
    "results": [
      { "fluid": "createdieselgenerators:gasoline", "amount": 300 },
      { "fluid": "kubejs:natural_gas", "amount": 200 }
    ]
  }).id('dut_create:diesel_split')
  event.remove({ id: "createdieselgenerators:distillation/crude_oil" })
  //石油分馏
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{ "fluidTag": "forge:crude_oil", "amount": 300 }],
    "heatRequirement": "heated",
    "processingTime": 90,
    "results": [
      { "fluid": "createdieselgenerators:diesel", "amount": 100 },
      { "fluid": "minecraft:water", "amount": 50 },
      { "fluid": "createdieselgenerators:gasoline", "amount": 100 },
      { "fluid": "kubejs:natural_gas", "amount": 100 }
    ]
  }).id('dut_create:oil_distillation')
})