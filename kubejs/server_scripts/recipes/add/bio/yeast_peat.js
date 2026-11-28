ServerEvents.recipes(event => {
  //-木屑
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "fluid": "minecraft:water", "amount": 250 },
      { "item": "kubejs:yeast" },
      { "item": "createdieselgenerators:wood_chip" },
      { "item": "createdieselgenerators:wood_chip" }
    ],
    "processingTime": 480,
    "results": [
      { "fluid": "createdieselgenerators:ethanol", "amount": 200 },
      { "item": "kubejs:yeast" }
    ]
  }).id('dut_create:ferment_wood_chip_yeast')
  //泥炭转化
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "heatRequirement": "heated",
    "ingredients": [
      { "item": "minecraft:packed_mud" },
      { "item": "minecraft:packed_mud" },
      { "item": "minecraft:packed_mud" },
      { "item": "minecraft:packed_mud" },
      { "item": "kubejs:peat_protozoa" },
      { "item": "createdieselgenerators:chip_wood_block" },
      { "item": "createdieselgenerators:chip_wood_block" },
      { "item": "createdieselgenerators:chip_wood_block" },
      { "item": "createdieselgenerators:chip_wood_block" }
    ],
    "processingTime": 180,
    "results": [
      { "item": "minecraft:mud", "count": 2 },
      { "item": "minecraft:coal", "count": 4 },
      { "item": "minecraft:coal", "chance": 0.5, "count": 2 },
      { "item": "kubejs:peat_protozoa" }
    ]
  }).id('dut_create:peat_from_charcoal')
  //泥浆转化
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      { "fluid": "minecraft:water", "amount": 250 },
      { "item": "minecraft:mud" },
      { "item": "minecraft:mud" },
      { "item": "minecraft:mud" },
      { "item": "minecraft:mud" },
      { "item": "kubejs:peat_protozoa" }
    ],
    "processingTime": 240,
    "results": [
      { "item": "minecraft:packed_mud", "count": 2 },
      { "item": "minecraft:packed_mud", "count": 2, "chance": 0.8 },
      { "item": "kubejs:peat_protozoa" },
      { "item": "kubejs:peat_protozoa", "chance": 0.25 }
    ]
  }).id('dut_create:packed_mud_from_peat')
  //菌丝发酵
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "heatRequirement": "heated",
    "ingredients": [
      { "item": "kubejs:stem_silk" },
      { "item": "kubejs:stem_silk" },
      { "item": "kubejs:stem_silk" },
      { "item": "kubejs:stem_silk" },
      { "item": "kubejs:peat_protozoa" }
    ],
    "processingTime": 60,
    "results": [
      { "fluid": "kubejs:carbon_dioxide", "amount": 500 },
      { "item": "kubejs:peat_protozoa" }
    ]
  }).id('dut_create:carborn_dioxide')
})