ServerEvents.recipes(event => {
  event.remove({ id: 'createaddition:mixing/biomass_from_honeycomb' })
  event.remove({ id: 'createaddition:mixing/biomass_from_leaves' })
  event.remove({ id: 'createaddition:mixing/biomass_from_plant_foods' })
  event.remove({ id: 'createaddition:mixing/biomass_from_plants' })
  event.remove({ id: 'createaddition:mixing/biomass_from_crops' })
  event.remove({ id: 'createaddition:mixing/biomass_from_saplings' })
  event.remove({ id: 'createaddition:mixing/biomass_from_sticks' })
  event.remove({ id: 'createaddition:mixing/biomass_from_flowers' })
  event.remove({ id: 'createaddition:mixing/biomass_from_plant_foods' })
  event.remove({ id: 'createaddition:crafting/biomass_pellet' })
  event.remove({ id: 'createaddition:crafting/biomass_pellet_block' })
  event.remove({ id: 'createaddition:compacting/biomass_pellet' })
  event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' })
  event.remove({ id: "createaddition:crushing/diamond" })
  event.remove({ id: 'createaddition:liquid_burning/biofuel' })
  event.remove({ id: 'createaddition:crafting/electrum_amulet' })
  event.remove({ id: 'createaddition:crafting/electrum_ingot' })
  event.remove({ id: 'createaddition:crafting/electrum_nugget' })
  event.remove({ id: 'createaddition:crafting/electrum_spool' })
  event.remove({ id: 'createaddition:crafting/large_connector_electrum' })
  event.remove({ id: 'createaddition:crafting/festive_spool' })
  event.remove({ id: "createaddition:rolling/electrum_ingot" })
  event.remove({ id: "createaddition:rolling/electrum_plate" })
  event.remove({ id: "createaddition:rolling/straw" })
  //移除生物乙醇
  event.remove({ id: 'createaddition:mixing/bioethanol' })
  //电量销毁
  event.custom({
    "type": "createaddition:charging",
    "input": { "item": "minecraft:terracotta" },
    "result": { "item": "minecraft:terracotta" },
    "energy": 24000000,
    "maxChargeRate":24000
  }).id("dut_create:charging/terracota")
  //轧机
  event.replaceInput({ input: 'create:andesite_alloy', id: 'createaddition:crafting/rolling_mill' }, 'create:andesite_alloy', 'kubejs:bearing')
  //地狱岩
  event.remove({ id: 'createaddition:mixing/netherrack' })
  //蓄电池
  event.remove({ id: 'createaddition:crafting/modular_accumulator_electrum' })
  event.remove({ id: 'createaddition:crafting/modular_accumulator_gold' })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "tag": "forge:storage_blocks/copper" },
    "loops": 1,
    "results": [{ "item": "createaddition:modular_accumulator" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "tag": "forge:storage_blocks/gold" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "amount": 500, "fluid": "vintageimprovements:sulfuric_acid" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "amount": 500, "fluid": "vintageimprovements:sulfuric_acid" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
        { "tag": "forge:storage_blocks/brass" }],
        "results": [{ "item": "kubejs:incomplete_copper_box" }]
      }
    ],
    "transitionalItem": { "item": "kubejs:incomplete_copper_box" }
  }).id("dut_create:modular_accumulator")
  //发电机
  event.remove({ id: 'createaddition:mechanical_crafting/alternator' })
  //电动马达
  event.remove({ id: 'createaddition:mechanical_crafting/electric_motor' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": "kubejs:polymer_ingot" },
      "B": { "item": "createaddition:copper_spool" },
      "C": { "item": "create:precision_mechanism" },
      "D": { "item": "kubejs:electric_gear" }
    },
    "pattern": [
      "BBB",
      "DCD",
      "ADA"
    ],
    "result": { "item": "createaddition:electric_motor" },
    "show_notification": true
  }).id("dut_create:electric_motor")
  //特斯拉线圈
  event.remove({ id: 'createaddition:mechanical_crafting/tesla_coil' })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": { "item": "kubejs:polymer_ingot" },
      "B": { "item": "createaddition:copper_spool" },
      "C": { "item": "kubejs:circuit_board" },
      "D": { "item": "create:brass_casing" },
      "E": { "item": "kubejs:electric_gear" }
    },
    "pattern": [
      "BBB",
      "ACA",
      "EDE"
    ],
    "result": { "item": "createaddition:tesla_coil" },
    "show_notification": true
  }).id("dut_create:tesla_coil")
  //电容
  event.remove({ id: 'createaddition:crafting/capacitor_1' })
  event.remove({ id: 'createaddition:crafting/capacitor_2' })
  //生物质高速产出
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "dut_create:microbio" },
      { "tag": "dut_create:microbio" },
      { "tag": "dut_create:microbio" },
      { "tag": "dut_create:microbio" },
      { "fluidTag": "dut_create:plantoil", "amount": 400 }
    ],
    "results": [
      { "item": "createaddition:biomass", "count": 4 }
    ],
    "heatRequirement": "heated"
  }).id("dut_create:efficient_biomass_from_microbio")
})