ServerEvents.recipes(event => {
    //
    function FarmingStationBlock(block1, block2) {
        return ({
            "type": "custommachinery:block",
            "mode": "input",
            "action": "replace_destroy",
            "amount": 24,
            "pos": [2, 0, 2, -2, 0, -2],
            "filter": block1,
            "whitelist": true,
            "block": block2
        })
    }
    function FarmingStationBlockSingle(block1, block2) {
        return ({
            "type": "custommachinery:block",
            "mode": "input",
            "action": "replace_destroy",
            "amount": 1,
            "pos": [2, 0, 2, -2, 0, -2],
            "filter": block1,
            "whitelist": true,
            "block": block2
        })
    }
    function FarmingStationItem(item, amount, mode) {
        return ({
            "type": "custommachinery:item",
            "mode": mode,
            "item": item,
            "amount": amount
        })
    }
    function FarmingStationPlantType(id) {
        return ({
            "type": "custommachinery:general_structure",
            "id": id
        })
    }
    const FarmingStationGrowingParticle = {
        "type": "custommachinery:particle",
        "phase": "starting",
        "particle": "minecraft:rain",
        "pos": [0, 0, 0],
        "delta": [1.5, 0.25, 1.5],
        "speed": 0.5,
        "count": 64
    }
    const FarmingStationHaverstParticle = {
        "type": "custommachinery:particle",
        "phase": "starting",
        "particle": "minecraft:composter",
        "pos": [0, 0, 0],
        "delta": [1.5, 0.25, 1.5],
        "speed": 0.05,
        "count": 32
    }
    function FarmingStationFluid(fluid, amount, type) {
        return ({
            "type": "custommachinery:fluid",
            "mode": type,
            "fluid": fluid,
            "amount": amount
        })
    }
    function FarmingStationDimension(dimension) {
        return ({
            "type": "custommachinery:dimension",
            "filter": dimension,
            "blacklist": false
        })
    }
    function FarmingStationBiome(biome) {
        return ({
            "type": "custommachinery:biome",
            "filter": biome,
            "blacklist": false
        })
    }
    function FarmingStationRecipeGrow(Requirements, plant, block1, block2, id) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:farming_station",
            "priority": 10,
            "time": 40,
            "error": true,
            "hidden": true,
            "requirements": [
                FarmingStationGrowingParticle,
                FarmingStationBlock(block1, block2),
                FarmingStationPlantType(plant)
            ].concat(Requirements)
        }).id("dut_create:farming_station/grow/" + id)
    }
    function FarmingStationRecipeGrowWithChip(Requirements, plant, block1, block2, id) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:farming_station",
            "priority": 5,
            "time": 320,
            "error": true,
            "hidden": true,
            "requirements": [
                FarmingStationGrowingParticle,
                FarmingStationBlock(block1, block2),
                FarmingStationPlantType(plant)
            ].concat(Requirements)
        }).id("dut_create:farming_station/grow/withwater/" + id)
    }
    function FarmingStationRecipeHarvest(Requirements, plant, block1, block2, id) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:farming_station",
            "priority": 10,
            "time": 40,
            "error": true,
            "hidden": true,
            "requirements": [
                FarmingStationHaverstParticle,
                FarmingStationBlock(block1, block2),
                FarmingStationPlantType(plant)
            ].concat(Requirements)
        }).id("dut_create:farming_station/harvest/" + id)
    }
    function FarmingStationRecipeReset(plant, block1, block2, id) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:farming_station",
            "priority": 0,
            "time": 1,
            "error": true,
            "hidden": true,
            "requirements": [
                FarmingStationBlockSingle(block1, block2),
                FarmingStationPlantType(plant)
            ]
        }).id("dut_create:farming_station/reset/" + id)
    }
    //土豆
    FarmingStationRecipeReset("potatoes", [
        "minecraft:potatoes[age=1]",
        "minecraft:potatoes[age=2]",
        "minecraft:potatoes[age=3]",
        "minecraft:potatoes[age=4]",
        "minecraft:potatoes[age=5]",
        "minecraft:potatoes[age=6]",
        "minecraft:potatoes[age=7]",
    ], "minecraft:potatoes[age=0]", "potatoes")

    FarmingStationRecipeGrowWithChip([
        FarmingStationItem("createdieselgenerators:wood_chip", 8, "input")
    ], "potatoes", "minecraft:potatoes[age=0]", "minecraft:potatoes[age=2]", "withwater/potatoes/1")
    FarmingStationRecipeGrowWithChip([
        FarmingStationItem("createdieselgenerators:wood_chip", 8, "input")
    ], "potatoes", "minecraft:potatoes[age=2]", "minecraft:potatoes[age=4]", "withwater/potatoes/2")
    FarmingStationRecipeGrowWithChip([
        FarmingStationItem("createdieselgenerators:wood_chip", 16, "input")
    ], "potatoes", "minecraft:potatoes[age=4]", "minecraft:potatoes[age=7]", "withwater/potatoes/3")

    FarmingStationRecipeGrow([
        FarmingStationItem('minecraft:bone_meal', 8, "input")
    ], "potatoes", "minecraft:potatoes[age=0]", "minecraft:potatoes[age=2]", "potatoes/1")
    FarmingStationRecipeGrow([
        FarmingStationItem('minecraft:bone_meal', 8, "input")
    ], "potatoes", "minecraft:potatoes[age=2]", "minecraft:potatoes[age=4]", "potatoes/2")
    FarmingStationRecipeGrow([
        FarmingStationItem('minecraft:bone_meal', 8, "input")
    ], "potatoes", "minecraft:potatoes[age=4]", "minecraft:potatoes[age=7]", "potatoes/3")

    FarmingStationRecipeHarvest([
        FarmingStationItem('minecraft:potato', 72, "output")
    ], "potatoes", "minecraft:potatoes[age=7]", "minecraft:potatoes[age=0]", "potatoes")
    //小麦
    FarmingStationRecipeReset("wheat", [
        "minecraft:wheat[age=1]",
        "minecraft:wheat[age=2]",
        "minecraft:wheat[age=3]",
        "minecraft:wheat[age=4]",
        "minecraft:wheat[age=5]",
        "minecraft:wheat[age=6]",
        "minecraft:wheat[age=7]",
    ], "minecraft:wheat[age=0]", "wheat")

    FarmingStationRecipeGrowWithChip([
        FarmingStationItem("createdieselgenerators:wood_chip", 8, "input")
    ], "wheat", "minecraft:wheat[age=0]", "minecraft:wheat[age=2]", "withwater/wheat/1")
    FarmingStationRecipeGrowWithChip([
        FarmingStationItem("createdieselgenerators:wood_chip", 8, "input")
    ], "wheat", "minecraft:wheat[age=2]", "minecraft:wheat[age=5]", "withwater/wheat/2")
    FarmingStationRecipeGrowWithChip([
        FarmingStationItem("createdieselgenerators:wood_chip", 16, "input")
    ], "wheat", "minecraft:wheat[age=5]", "minecraft:wheat[age=7]", "withwater/wheat/3")

    FarmingStationRecipeGrow([
        FarmingStationItem('minecraft:bone_meal', 8, "input")
    ], "wheat", "minecraft:wheat[age=0]", "minecraft:wheat[age=2]", "wheat/1")
    FarmingStationRecipeGrow([
        FarmingStationItem('minecraft:bone_meal', 8, "input")
    ], "wheat", "minecraft:wheat[age=2]", "minecraft:wheat[age=5]", "wheat/2")
    FarmingStationRecipeGrow([
        FarmingStationItem('minecraft:bone_meal', 8, "input")
    ], "wheat", "minecraft:wheat[age=5]", "minecraft:wheat[age=7]", "wheat/3")

    FarmingStationRecipeHarvest([
        FarmingStationItem('minecraft:wheat', 24, "output")
    ], "wheat", "minecraft:wheat[age=7]", "minecraft:wheat[age=0]", "wheat")
})
