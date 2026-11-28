ServerEvents.recipes(event => {
    //
    //event.remove({output:'',not:{mod:'kubejs'}})
    //event.remove({id:''})
    //event.remove({input:''})
    //event.custom()
    event.shapeless(Item.of('createandesiteabound:simple_schematic', '{File:"CBC/schematic.train.fluid.nbt",Item:"kubejs:fluid_mechanism"}'),["kubejs:fluid_mechanism","kubejs:differential"]).id("dut_create:fluid_mechanism/fluid_train")
    event.shapeless(Item.of('createandesiteabound:simple_schematic', '{File:"CBC/schematic.train.fluid_carriage.nbt",Item:"create_connected:fluid_vessel"}'),["kubejs:fluid_mechanism","kubejs:planetary_gear"]).id("dut_create:fluid_mechanism/fluid_carriage")
    event.shapeless(Item.of('createandesiteabound:simple_schematic', '{File:"CBC/schematic.train.item.nbt",Item:"kubejs:io_mechanism"}'),["kubejs:io_mechanism","kubejs:differential"]).id("dut_create:io_mechanism/item_train")
    event.shapeless(Item.of('createandesiteabound:simple_schematic', '{File:"CBC/schematic.train.item_carriage.nbt",Item:"create:item_vault"}'),["kubejs:io_mechanism","kubejs:planetary_gear"]).id("dut_create:io_mechanism/item_carriage")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:mechanical_core" },
        "results": [
            { "item": "kubejs:io_mechanism","count":2 }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_andesite_box" },
                    { "item": "kubejs:bearing" }
                ],
                "results": [{ "item": "kubejs:incomplete_andesite_box" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "kubejs:incomplete_andesite_box" },
                { "fluid": "kubejs:industrial_iron", "amount": 1*IngotFluid }],
                "results": [{ "item": "kubejs:incomplete_andesite_box" }]
            }
        ],
        "transitionalItem": { "item": "kubejs:incomplete_andesite_box" }
    }).id("dut_create:sequenced_assembly/io_mechanism")
    function io(item, count) {
        event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": { "item": "kubejs:io_mechanism" },
            "result": item,
            "count": count
        }).id("dut_create:io_mechanism/" + item.split(":")[1])
    }
    function ioShapeless(item1, item2, count) {
        event.custom({
            "type": "minecraft:crafting_shapeless",
            "ingredients": [
                { "item": "kubejs:io_mechanism" },
                { "item": item1 }
            ],
            "result": { "item": item2, "count": count }
        }).id("dut_create:io_mechanism/" + item2.split(":")[1])
    }
    //
    io("supplementaries:faucet", 3)
    io("create:chute", 4)
    io("create:portable_storage_interface", 4)
    io("create:item_vault", 6)
    io("create_connected:item_silo", 6)
    io("design_decor:ornate_grate", 8)
    //机械手
    ioShapeless("create:polished_rose_quartz", "create:deployer", 3)
    ioShapeless("minecraft:clock", "createdieselgenerators:basin_lid", 3)
    ioShapeless("kubejs:industrial_iron_ingot", "create:mechanical_drill", 3)
    ioShapeless("kubejs:industrial_iron_sheet", "create:mechanical_saw", 3)
    ioShapeless("create:industrial_iron_block", "create:mechanical_press", 3)
    ioShapeless("minecraft:stone", "create:millstone", 3)
    ioShapeless("minecraft:netherrack", "create:empty_blaze_burner", 3)
    ioShapeless("kubejs:rubber", "create:andesite_funnel", 8)
    /*
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "AIA",
            " C "
        ],
        "key": {
            "C": { "item": "kubejs:io_mechanism" },
            "A": { "tag": "forge:ingots/industrial_iron" },
            "I": { "tag": "forge:plates/industrial_iron" }
        },
        "result": { "item": "create:mechanical_harvester", "count": 6 }
    }).id("dut_create:io_mechanism/mechanical_harvester")
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "III",
            " C "
        ],
        "key": {
            "C": { "item": "kubejs:io_mechanism" },
            "I": { "tag": "forge:plates/industrial_iron" }
        },
        "result": { "item": "create:mechanical_plough", "count": 6 }
    }).id("dut_create:io_mechanism/mechanical_plough")
    */


    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:io_mechanism" },
        "results": [
            { "item": "kubejs:fluid_mechanism" }
        ],
        "loops": 1,
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_copper_box" },
                    { "item": "kubejs:electric_gear" }
                ],
                "results": [{ "item": "kubejs:incomplete_copper_box" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "kubejs:incomplete_copper_box" },
                    { "item": "kubejs:rubber" }
                ],
                "results": [{ "item": "kubejs:incomplete_copper_box" }]
            },
            {
                "type": "create:filling",
                "ingredients": [{ "item": "kubejs:incomplete_copper_box" },
                { "fluid": "kubejs:copper", "amount": 540 }],
                "results": [{ "item": "kubejs:incomplete_copper_box" }]
            }
        ],
        "transitionalItem": { "item": "kubejs:incomplete_copper_box" }
    }).id("dut_create:sequenced_assembly/fluid_mechanism")
    function fluid(item, count) {
        event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": { "item": "kubejs:fluid_mechanism" },
            "result": item,
            "count": count
        }).id("dut_create:fluid_mechanism/" + item.split(":")[1])
    }
    function fluidShapeless(item1, item2, count) {
        event.custom({
            "type": "minecraft:crafting_shapeless",
            "ingredients": [
                { "item": "kubejs:fluid_mechanism" },
                { "item": item1 }
            ],
            "result": { "item": item2, "count": count }
        }).id("dut_create:fluid_mechanism/" + item2.split(":")[1])
    }
    fluid("create:mechanical_pump", 4)
    fluid("create:smart_fluid_pipe", 4)
    fluid("create_connected:fluid_vessel", 8)
    fluid("create:hose_pulley", 8)
    fluid("create:item_drain", 8)
    fluid("create:spout", 8)
    fluid("create:portable_fluid_interface", 8)
    fluid("create:fluid_tank", 8)
    fluid("create:copper_casing", 24)
    fluid("create:fluid_pipe", 32)
    //精密构件
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "create:sturdy_sheet" },
        "loops": 1,
        "results": [{ "item": "create:precision_mechanism" }
        ],
        "sequence": [
            {
                "type": "create:filling",
                "ingredients": [
                    { "item": "create:incomplete_precision_mechanism" },
                    { "amount": 3*IngotFluid, "fluid": "kubejs:brass" }],
                "results": [
                    { "item": "create:incomplete_precision_mechanism" }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "create:incomplete_precision_mechanism" },
                    { "item": "kubejs:fluid_mechanism" }
                ],
                "results": [
                    { "item": "create:incomplete_precision_mechanism" }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "create:incomplete_precision_mechanism" },
                    { "item": "kubejs:fluid_mechanism" }
                ],
                "results": [
                    { "item": "create:incomplete_precision_mechanism" }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "create:incomplete_precision_mechanism" },
                    { "item": "kubejs:circuit_board" }
                ],
                "results": [
                    { "item": "create:incomplete_precision_mechanism" }
                ]
            }
        ],
        "transitionalItem": { "item": "create:incomplete_precision_mechanism" }
    }).id("dut_create:set/precision_mechanism")
})