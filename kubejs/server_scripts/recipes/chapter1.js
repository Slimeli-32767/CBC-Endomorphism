BlockEvents.rightClicked("minecraft:andesite", event => {
    if (event.hand != "MAIN_HAND") { return }
    let p = event.player
    if (p.isFake()) { return }
    let item = p.mainHandItem
    if (item.id == "minecraft:iron_ingot") {
        item.shrink(1)
        event.block.level.spawnParticles("minecraft:block minecraft:andesite", true, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, 0.25, 0.25, 0.25, 12, 0)
        event.block.level.playSound(null, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, "minecraft:block.stone.break", "blocks", 1, 1)
        p.give("create:andesite_alloy")
        p.swing()
    }
})
BlockEvents.rightClicked(["minecraft:iron_ore", "minecraft:deepslate_iron_ore"], event => {
    if (event.hand != "MAIN_HAND") { return }
    let p = event.player
    if (p.isFake()) { return }
    if (!p.mainHandItem.hasTag("minecraft:pickaxes")) { return }
    event.block.level.spawnParticles("minecraft:block minecraft:iron_ore", true, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, 0.25, 0.25, 0.25, 12, 0)
    event.block.level.playSound(null, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, "minecraft:block.stone.break", "blocks", 1, 1)
    p.give("create:crushed_raw_iron")
    p.swing()
    p.addItemCooldown(p.mainHandItem, 10)
})
BlockEvents.rightClicked(["minecraft:coal_ore", "minecraft:deepslate_coal_ore"], event => {
    if (event.hand != "MAIN_HAND") { return }
    let p = event.player
    if (p.isFake()) { return }
    if (!p.mainHandItem.hasTag("minecraft:pickaxes")) { return }
    event.block.level.spawnParticles("minecraft:block minecraft:coal_ore", true, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, 0.25, 0.25, 0.25, 12, 0)
    event.block.level.playSound(null, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, "minecraft:block.stone.break", "blocks", 1, 1)
    p.give("kubejs:crushed_coal")
    p.swing()
    p.addItemCooldown(p.mainHandItem, 40)
})
let AllTheLogs = [
    "minecraft:dark_oak_log",
    "minecraft:oak_log",
    "minecraft:acacia_log",
    "minecraft:birch_log",
    "minecraft:jungle_log",
    "minecraft:spruce_log",
    "minecraft:mangrove_log",
    "minecraft:cherry_log",
    "createdieselgenerators:chip_wood_block",
    "createdieselgenerators:chip_wood_beam",
]
BlockEvents.rightClicked(AllTheLogs, event => {
    if (event.hand != "MAIN_HAND") { return }
    let p = event.player
    if (p.isFake()) { return }
    if (p.mainHandItem.id != "minecraft:air" && p.mainHandItem.id != "createdieselgenerators:wood_chip") { return }
    event.block.level.spawnParticles("minecraft:block createdieselgenerators:chip_wood_block", true, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, 0.25, 0.25, 0.25, 12, 0)
    event.block.level.playSound(null, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, "minecraft:block.wood.break", "blocks", 1, 1)
    p.give("createdieselgenerators:wood_chip")
    p.swing()
})
//基础元件
ServerEvents.recipes(event => {
    //高炉
    event.custom({
        "type": "create:item_application",
        "ingredients": [
            { "item": "minecraft:furnace" },
            { "tag": "forge:ingots/iron" },
        ],
        "results": [{ "item": "minecraft:blast_furnace" }]
    }).id("dut_create:chapter1/deploying/furnace")
    event.custom({
        "type": "minecraft:blasting",
        "ingredient": { "item": "create:crushed_raw_iron" },
        "result": "minecraft:iron_ingot",
        "experience": 0.1,
        "cookingtime": 80
    }).id("dut_create:chapter1/iron/blast")
    //烈焰人燃烧室
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "B": { "item": "create:andesite_alloy" },
            "I": { "item": "minecraft:magma_block" }
        },
        "pattern": [
            " B ",
            "BIB",
            " B "
        ],
        "result": { "item": "create:blaze_burner" },
        "show_notification": true
    }).id("dut_create:chapter1/blaze_burner")
    event.remove({ id: "minecraft:blast_furnace" })
    event.remove({ id: "create:crafting/kinetics/water_wheel" })
    event.remove({ id: "create:crafting/kinetics/large_water_wheel" })

    event.remove({ id: "create:crafting/kinetics/shaft" })
    event.remove({ id: "create:cutting/andesite_alloy" })

    event.remove({ id: "create:crafting/kinetics/cogwheel" })

    event.remove({ id: "create:crafting/kinetics/gearbox" })
    event.remove({ id: "create:crafting/kinetics/vertical_gearbox" })
    event.remove({ id: "create:crafting/kinetics/gearshift" })
    event.remove({ id: "create:crafting/kinetics/item_vault" })

    event.remove({ id: "create:crafting/kinetics/basin" })
    event.remove({ id: "create:crafting/kinetics/depot" })
    event.remove({ id: "createbigcannons:basin_foundry_lid" })
    event.remove({ id: "create:crafting/kinetics/large_cogwheel" })
    event.remove({ id: "create:crafting/kinetics/large_cogwheel_from_little" })
    event.remove({ id: "create:item_application/brass_casing_from_wood" })
    event.remove({ id: "create:item_application/brass_casing_from_log" })
    event.remove({ id: "create:item_application/andesite_casing_from_wood" })
    event.remove({ id: "create:item_application/andesite_casing_from_log" })
    event.remove({ id: "create:item_application/copper_casing_from_wood" })
    event.remove({ id: "create:item_application/copper_casing_from_log" })
    event.remove({ id: "create:crafting/kinetics/empty_blaze_burner" })
    event.remove({ id: "create:crafting/kinetics/whisk" })
    event.remove({ id: "create:crafting/kinetics/encased_fan" })
    event.remove({ id: "create:crafting/kinetics/mechanical_mixer" })
    event.remove({ id: "create:crafting/kinetics/mechanical_harvester" })
    event.remove({ id: "create:crafting/kinetics/mechanical_piston" })
    event.remove({ id: "create:crafting/kinetics/mechanical_drill" })
    event.remove({ id: "create:crafting/kinetics/mechanical_crafter" })
    event.remove({ id: "create:crafting/kinetics/mechanical_press" })
    event.remove({ id: "create:crafting/kinetics/mechanical_pump" })
    event.remove({ id: "create:crafting/kinetics/mechanical_roller" })
    event.remove({ id: "create:crafting/kinetics/mechanical_saw" })
    event.remove({ id: "create:crafting/kinetics/sticky_mechanical_piston" })


})
//机械核心
ServerEvents.recipes(event => {
    event.remove({ id: "create:mixing/andesite_alloy" })
    event.remove({ id: "create:mixing/andesite_alloy_from_zinc" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "mirrored": true,
        "pattern": [
            "BA",
            "AB"
        ],
        "key": {
            "A": { "item": "createdieselgenerators:wood_chip" },
            "B": { "item": "create:andesite_alloy" }
        },
        "result": { "item": "kubejs:mechanical_core" }
    }).id("dut_create:chapter1/mechanical_core_byhand")
    //绯红岩
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            { "amount": 250, "fluid": "minecraft:lava" }
        ],
        "processingTime": 30,
        "results": [{ "item": "create:crimsite", "count": 2 }]
    }).id("dut_create:chapter1/crimsite")
    //铁锭
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "create:crimsite" }
        ],
        "processingTime": 10,
        "results": [{ "item": "minecraft:iron_ingot" }]
    }).id("dut_create:chapter1/iron")
    //机械核心
    event.custom({
        "type": "createbigcannons:melting",
        "ingredients": [
            { "item": "create:andesite_alloy" },
            { "item": "create:andesite_alloy" },
            { "item": "createdieselgenerators:wood_chip" },
            { "item": "createdieselgenerators:wood_chip" }
        ],
        "processingTime": 20,
        "results": [{ "item": "kubejs:mechanical_core" }]
    }).id("dut_create:chapter1/mechanical_core")
    event.replaceInput(
        { input: 'create:andesite_casing', not: { mod: 'kubejs' }, not: { output: "create:depot" } },
        'create:andesite_casing',
        'kubejs:mechanical_core'
    )

})
//农业
ServerEvents.recipes(event => {
    //种子
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            { "item": "minecraft:wheat" }
        ],
        "result": { "item": "minecraft:wheat_seeds", "count": 2 }
    }).id("dut_create:wheat_seeds")
    //生物质
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" }
        ],
        "processingTime": 40,
        "results": [
            { "item": "kubejs:biomass", "count": 6 }
        ],
    }).id("dut_create:chapter1/biomass_from_crops/1/potato")
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "minecraft:wheat" },
            { "item": "minecraft:wheat" },
            { "item": "minecraft:wheat" },
            { "item": "minecraft:wheat" }
        ],
        "processingTime": 40,
        "results": [
            { "item": "kubejs:biomass", "count": 4 }
        ],
    }).id("dut_create:chapter1/biomass_from_crops/2/wheat")
    //平凡的药水
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" },
            { "item": "minecraft:potato" }
        ],
        "processingTime": 40,
        "results": [
            { "fluid": "create:potion", "amount": 500, "nbt": { Bottle: "REGULAR", Potion: "minecraft:mundane" } }
        ],
    }).id("dut_create:chapter1/bone_meal/mundane_potion")
    //骨粉
    event.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" },
            { "fluid": "create:potion", "amount": 500, "nbt": { Bottle: "REGULAR", Potion: "minecraft:mundane" } }
        ],
        "processingTime": 40,
        "results": [
            { "item": "minecraft:bone_meal","count":18 }
        ]
    }).id('dut_create:chapter1/bone_meal')
    //骨粉
    event.remove({ id: "create:milling/bone" })
    event.custom({
        "type": "vintageimprovements:polishing",
        "speedLimits": 3,
        "ingredients": [{ "item": "minecraft:bone" }],
        "results": [
            { "item": "minecraft:bone_meal", "count": 3 }
        ],
        "processingTime": 20
    }).id("dut_create:bone_meal")

    //小麦
    event.custom({
        "type": "vintageimprovements:vibrating",
        "ingredients": [{ "item": "minecraft:wheat" }],
        "results": [{ "item": "minecraft:wheat_seeds", "count": 4 }],
        "processingTime": 5
    }).id("dut_create:chapter1/wheat_seeds")
    event.remove({ id: "create:milling/wheat" })
    //种子油
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            { "tag": "forge:seeds" },
            { "tag": "forge:seeds" },
            { "tag": "forge:seeds" }
        ],
        "results": [
            { "fluid": "createaddition:seed_oil", "amount": 250 }
        ]
    }).id("dut_create:chapter1/seed_oil_mixing")
    event.custom({
        "type": "create:milling",
        "ingredients": [
            { "item": "minecraft:wheat" }
        ],
        "processingTime": 80,
        "results": [
            { "item": "create:wheat_flour", "count": 4 }
        ]
    }).id("dut_create:chapter1/wheat_flour")
})
//黄铜&紫水晶
ServerEvents.recipes(event => {
    //辉绿岩
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "minecraft:amethyst_shard" },
            { "amount": 125, "fluid": "minecraft:water" }
        ],
        "results": [
            { "item": "create:veridium", "count": 1 }
        ]
    }).id("dut_create:chapter1/veridium")
    //黄铜锭
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "create:veridium" },
            { "item": "create:veridium" },
        ],
        "processingTime": 30,
        "results": [{ "item": "create:brass_ingot", "count": 3 }]
    }).id("dut_create:chapter1/brass")

    event.remove({ id: "create:crushing/amethyst_cluster" })
    //紫水晶量产
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            { "item": "minecraft:quartz" }
        ],
        "results": [
            { "item": "minecraft:amethyst_shard", "chance": 0.25 }
        ]
    }).id("dut_create:haunting/amethyst_shard")
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            { "item": "minecraft:amethyst_block" }
        ],
        "results": [
            { "item": "minecraft:budding_amethyst", "chance": 0.25 }
        ]
    }).id("dut_create:budding_amethyst")
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "minecraft:budding_amethyst" },
            { "amount": 75, "fluid": "minecraft:water" }
        ],
        "results": [
            { "item": "minecraft:budding_amethyst" },
            { "item": "minecraft:small_amethyst_bud" },
        ]
    }).id("dut_create:small_amethyst_bud")
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "minecraft:small_amethyst_bud" },
            { "amount": 75, "fluid": "minecraft:water" }
        ],
        "results": [
            { "item": "minecraft:medium_amethyst_bud" },
        ]
    }).id("dut_create:medium_amethyst_bud")
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "minecraft:medium_amethyst_bud" },
            { "amount": 75, "fluid": "minecraft:water" }
        ],
        "results": [
            { "item": "minecraft:large_amethyst_bud" },
        ]
    }).id("dut_create:large_amethyst_bud")
    event.custom({
        "type": "create:filling",
        "ingredients": [
            { "item": "minecraft:large_amethyst_bud" },
            { "amount": 75, "fluid": "minecraft:water" }
        ],
        "results": [
            { "item": "minecraft:amethyst_cluster" },
        ]
    }).id("dut_create:amethyst_cluster")
    event.custom({
        "type": "create:milling",
        "ingredients": [
            { "item": "minecraft:amethyst_cluster" },
        ],
        "results": [
            { "item": "minecraft:amethyst_shard", "count": 12 }
        ],
        "processingTime": 10
    }).id("dut_create:amethyst_shard")
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "secondaryFluidInput": 0,
        "heatRequirement": "heated",
        "ingredients": [
            { "amount": 250, "fluid": "kubejs:saline_water" },
            { "item": "minecraft:budding_amethyst" }
        ],
        "results": [
            { "item": "minecraft:budding_amethyst" },
            { "item": "minecraft:amethyst_cluster" },
            { "item": "minecraft:amethyst_cluster", "chance": 0.25 }
        ],
        "processingTime": 10
    }).id('dut_create:pressurizing/amethyst_cluster')
    event.custom({
        "type": "minecraft:smelting",
        "category": "misc",
        "cookingtime": 200,
        "experience": 0.0,
        "ingredient": {
            "item": "minecraft:amethyst_shard"
        },
        "result": "minecraft:quartz"
    }).id("dut_create:smelting/quartz")
    //水晶簇分解
    event.custom({
        "type": "vintageimprovements:vibrating",
        "ingredients": [
            { "item": "minecraft:amethyst_cluster" }
        ],
        "results": [
            { "item": "minecraft:amethyst_shard", "count": 12 },
            { "item": "minecraft:amethyst_shard", "count": 6, "chance": 0.5 }
        ],
        "processingTime": 10
    }).id("dut_create:vibrating/amethyst_cluster")
    //石英
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            { "item": "minecraft:amethyst_shard" }
        ],
        "results": [
            { "item": "minecraft:purple_dye", "chance": 0.5 },
            { "item": "minecraft:quartz" }
        ],
        "processingTime": 5
    }).id("dut_create:crushing/amethyst_shard")
    //硅板
    event.custom({
        "type": "vintageimprovements:pressurizing",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "minecraft:amethyst_shard" }
        ],
        "results": [{ "item": "kubejs:silicon_plate" }],
        "processingTime": 5
    }).id("dut_create:pressurizing/silicon_plate")
    //橡胶
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "kubejs:biomass" },
            { "item": "kubejs:biomass" }
        ],
        "results": [
            { "item": "kubejs:rubber", "count": 3 }
        ],
    }).id("dut_create:chapter1/rubber_from_biomass")
})
//橡胶
ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            [
                { "item": "minecraft:potato" },
                { "item": "minecraft:wheat" }
            ],
            { "item": "createdieselgenerators:wood_chip" },
            { "item": "createdieselgenerators:wood_chip" },
            { "item": "createdieselgenerators:wood_chip" }
        ],
        "result": { "item": "kubejs:biomass" }
    }).id("dut_create:biomass")
    event.custom({
        "type": "minecraft:blasting",
        "ingredient": [
            { "item": "kubejs:biomass" }
        ],
        "result": "kubejs:rubber",
        "experience": 0.1,
        "cookingtime": 120
    }).id("dut_create:rubber/blast")
    event.remove({ id: "create:crafting/kinetics/belt_connector" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "###",
            "###"
        ],
        "key": { "#": { "tag": "dut_create:belt" } },
        "result": { "item": "create:belt_connector", "count": 4 }
    }).id("dut_create:rubber/belt_connector")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "B": { "item": "kubejs:differential" },
            "C": { "tag": "dut_create:belt" },
            "I": { "item": "kubejs:lime_circuit_board" }
        },
        "pattern": [
            " B ",
            " I ",
            "CCC"
        ],
        "result": { "item": "create:elevator_pulley" },
        "show_notification": true
    }).id("dut_create:elevator_pulley_rubber")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "B": { "item": "create:copper_casing" },
            "C": { "tag": "dut_create:belt" },
            "I": { "tag": "forge:plates/copper" }
        },
        "pattern": [
            " B ",
            "CCC",
            " I "
        ],
        "result": { "item": "create:hose_pulley" },
        "show_notification": true
    }).id("dut_create:hose_pulley_rubber")
    event.remove({ id: "create:crafting/logistics/andesite_funnel" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:andesite_alloy" },
            "B": { "tag": "dut_create:belt" },
        },
        "pattern": [
            "A",
            "B",
        ],
        "result": { "item": "create:andesite_funnel" },
        "show_notification": true
    }).id("dut_create:andesite_funnel")
    event.remove({ id: "create:crafting/logistics/andesite_tunnel" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "item": "create:andesite_alloy" },
            "B": { "tag": "dut_create:belt" },
        },
        "pattern": [
            "AA",
            "BB",
        ],
        "result": { "item": "create:andesite_tunnel", "count": 2 },
        "show_notification": true
    }).id("dut_create:andesite_tunnel")
    //橡胶代替海带
    event.replaceInput({ output: 'create:brass_funnel' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'create:brass_tunnel' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'create:spout' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'create_enchantment_industry:printer' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.replaceInput({ output: 'createdieselgenerators:pumpjack_head' }, 'minecraft:dried_kelp', '#dut_create:belt')
    event.remove({ id: "create_things_and_misc:sprinkler_craft" })
})
//常规配方
ServerEvents.recipes(event => {

    event.remove({ id: "create:milling/calcite" })

    //砂砾
    event.remove({ id: "create:milling/cobblestone" })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            { "item": "minecraft:cobblestone" }
        ],
        "results": [
            { "item": "minecraft:gravel" }
        ],
        "processingTime": 80
    }).id("dut_create:milling/cobblestone")
    event.remove({ id: "create:milling/gravel" })
    event.remove({ id: "create:crushing/gravel" })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            { "item": "minecraft:gravel" }
        ],
        "results": [
            { "item": "minecraft:flint" }
        ],
        "processingTime": 80
    }).id("dut_create:milling/flint")
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            { "item": "minecraft:gravel" }
        ],
        "results": [
            { "item": "minecraft:sand" },
            { "item": "minecraft:flint", "chance": 0.1 },
            { "item": "minecraft:clay_ball", "chance": 0.05 }
        ],
        "processingTime": 80
    }).id("dut_create:crushing/flint")
})

