ServerEvents.recipes(event => {
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "minecraft:map" },
      { "item": "minecraft:feather" }
    ],
    "result": { "item": "supplementaries:slice_map" }
  }).id("dut_create:slice_map")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "minecraft:snow_block" }
    ],
    "result": { "item": "minecraft:snowball", "count": 4 }
  }).id("dut_create:transform/snow")
  event.remove({ id: "create:filling/redstone" })
  event.remove({ id: "create:filling/glowstone" })
  event.remove({ id: "create:filling/gunpowder" })
  event.remove({ id: "minecraft:sugar_from_sugar_cane" })
  event.remove({ id: "create:milling/sugar_cane" })
  event.remove({ id: "minecraft:sugar_from_honey_bottle" })
  

  //黄铜板
  event.custom({
    "type": "create:compacting",
    "ingredients": [{ "tag": "forge:plates/gold" },
    { "tag": "forge:plates/copper" }],
    "results": [{ "item": "create:brass_sheet", "count": 2 }]
  }).id("dut_create:brass_sheet")
  /*
  //电子管
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "create:polished_rose_quartz" },
      { "amount": 45, "fluid": "kubejs:iron" }
    ],
    "results": [
      { "item": "create:electron_tube" }
    ]
  }).id("dut_create:filling/electron_tube/iron")
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "create:polished_rose_quartz" },
      { "amount": 10, "fluid": "kubejs:industrial_iron" }
    ],
    "results": [
      { "item": "create:electron_tube" }
    ]
  }).id("dut_create:filling/electron_tube/industrial_iron")
  */
  //熔融黄铜
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "amount": 3*IngotFluid, "fluid": "kubejs:copper" },
      { "amount": 3*IngotFluid, "fluid": "kubejs:gold" }
    ],
    "results": [
      { "amount": 6*IngotFluid, "fluid": "kubejs:brass" }
    ]
  }).id("dut_create:molten_brass")
  //羊毛
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      { "tag": "minecraft:wool" }
    ],
    "processingTime": 20,
    "results": [
      { "count": 5, "item": "minecraft:string" },
      { "chance": 0.5, "item": "minecraft:string" }
    ]
  }).id("dut_create:wool")
  event.remove({ id: "create:crushing/wool" })
  //石灰岩
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:calcite" },
      { "item": "minecraft:bone_meal" },
      { "item": "minecraft:clay_ball" }
    ],
    "results": [
      { "item": "create:limestone" }
    ],
    "heatRequirement": "heated"
  }).id("dut_create:limestone")
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "createdieselgenerators:wood_chip" },
      { "item": "createdieselgenerators:wood_chip" },
      { "item": "createdieselgenerators:wood_chip" },
      { "amount": 50, "fluid": "minecraft:water" }
    ],
    "results": [
      { "item": "minecraft:paper" }
    ]
  }).id("dut_create:compacting/paper")
  event.remove({ output: "minecraft:paper" })
  event.remove({ id: "create:compacting/ice" })

  event.remove({ output: "minecraft:sugar", mod: 'create' })
  event.remove({ id: "minecraft:sugar_from_sugar_cane" })
  //泥巴
  event.remove({ id: "create:mixing/mud_by_mixing" })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      [{ "item": "minecraft:dirt" }, { "item": "minecraft:coarse_dirt" }],
      [{ "item": "minecraft:dirt" }, { "item": "minecraft:coarse_dirt" }],
      { "fluid": "minecraft:water", "amount": 250 }
    ],
    "results": [
      { "item": "minecraft:mud", "count": 2 }
    ]
  }).id("dut_create:mixing/mud")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "kubejs:saline_water", "amount": 250 },
      { "fluid": "minecraft:water", "amount": 250 }
    ],
    "results": [
      { "item": "minecraft:mud", "count": 4 }
    ]
  }).id("dut_create:mud_mixing")
  //泥胚
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "minecraft:mud" },
      { "item": "createdieselgenerators:wood_chip" },
      { "item": "createdieselgenerators:wood_chip" },
      { "item": "createdieselgenerators:wood_chip" }
    ],
    "result": { "item": "minecraft:packed_mud" }
  }).id("dut_create:packed_mud")
  event.custom({
    "type": "minecraft:smelting",
    "category": "misc",
    "cookingtime": 200,
    "experience": 0.0,
    "ingredient": {
      "item": "minecraft:packed_mud"
    },
    "result": "minecraft:coarse_dirt"
  }).id("dut_create:packed_mud_dirt")
  //甜菜制糖
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:beetroot" }
    ],
    "results": [
      { "item": "minecraft:sugar" }
    ],
    "heatRequirement": "heated"
  }).id("dut_create:sugar_from_beetroot")
  //滴水石锥
  event.custom({
    "type": "create:haunting",
    "ingredients": [
      { "item": "minecraft:calcite" }
    ],
    "results": [
      { "item": "minecraft:pointed_dripstone" },
      { "item": "minecraft:pointed_dripstone", "chance": 0.75 }
    ]
  }).id("dut_create:haunting/pointed_dripstone")
  //下界岩
  event.custom({
    "type": "create:filling",
    "ingredients": [{ "item": "minecraft:cobblestone" },
    { "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "item": "minecraft:netherrack" }]
  }).id("dut_create:netherrack")
  event.custom({
    "type": "create:filling",
    "ingredients": [{ "item": "create:cinder_flour" },
    { "amount": 250, "fluid": "minecraft:lava" }],
    "results": [{ "item": "minecraft:netherrack" }]
  }).id("dut_create:netherrack1")
  //冰
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:snow_block" },
      { "item": "minecraft:snow_block" },
      { "item": "minecraft:snow_block" },
      { "item": "minecraft:snow_block" },
    ],
    "results": [
      { "item": "minecraft:ice" }
    ]
  }).id("dut_create:ice")
  //泥土
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:coarse_dirt" },
      { "item": "minecraft:coarse_dirt" },
      { "item": "minecraft:coarse_dirt" },
      { "item": "minecraft:coarse_dirt" }
    ],
    "results": [
      { "item": "minecraft:dirt", "count": 4 }
    ]
  }).id("dut_create:dirt")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "item": "minecraft:gravel" },
      { "item": "minecraft:dirt" }
    ],
    "results": [
      { "item": "minecraft:coarse_dirt", "count": 2 }
    ]
  }).id("dut_create:coarse_dirt")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "kubejs:saline_water", "amount": 250 },
      { "fluid": "minecraft:lava", "amount": 250 }
    ],
    "results": [
      { "item": "minecraft:coarse_dirt" }
    ]
  }).id("dut_create:coarse_dirt_mixing")
  //深板岩圆石
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      { "item": "minecraft:cobblestone" },
      { "item": "minecraft:cobblestone" }
    ],
    "results": [
      { "item": "minecraft:cobbled_deepslate" }
    ],
    "heatRequirement": "heated"
  }).id("dut_create:cobbled_deepslate")
  //圆石
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "minecraft:lava", "amount": 125 },
      { "fluid": "minecraft:water", "amount": 125 }
    ],
    "results": [
      { "item": "minecraft:cobblestone", "count": 16 }
    ]
  }).id("dut_create:cobblestone_mixing")
  //鞍
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "T&T"
    ],
    "key": {
      "#": { "item": "minecraft:leather" },
      "&": { "item": "minecraft:string" },
      "T": { "item": "minecraft:tripwire_hook" }
    },
    "result": { "item": "saddle" }
  }).id("dut_create:saddle")
  //线
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "##"
    ],
    "key": {
      "#": { "item": "minecraft:white_carpet" }
    },
    "result": { "item": "string", "count": 4 }
  }).id("dut_create:string")
  //火药
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      [{ "item": "minecraft:redstone" },
      { "item": "minecraft:blaze_powder" },
      { "item": "kubejs:sulphur" }],
      [{ "item": "minecraft:sugar" },
      { "item": "minecraft:bone_meal" }],
      [{ "item": "minecraft:coal" },
      { "item": "minecraft:charcoal" },
      { "item": "kubejs:crushed_coal" }]
    ],
    "result": { "item": "minecraft:gunpowder", "count": 3 }
  }).id("dut_create:gunpowder")
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      { "item": "createbigcannons:nitropowder" }
    ],
    "result": { "item": "minecraft:gunpowder", "count": 3 }
  }).id("dut_create:gunpowder1")
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "fluid": "kubejs:cryogen", "amount": 250 },
      { "fluid": "minecraft:lava", "amount": 250 }
    ],
    "results": [
      { "item": "minecraft:obsidian" }
    ]
  }).id("dut_create:obsidian")
})