ServerEvents.recipes(event => {
    //
    function AUMBlock(block) {
        return ({
            "type": "custommachinery:structure",
            "pattern": [
                ["m"],
                ["A"]
            ],
            "keys": {
                "A": block
            },
            "jei": true
        })
    }
    function AUMItem(item, amount, mode) {
        return ({
            "type": "custommachinery:item",
            "mode": mode,
            "item": item,
            "amount": amount
        })
    }
    function AUMFluid(fluid, amount, type) {
        return ({
            "type": "custommachinery:fluid",
            "mode": type,
            "fluid": fluid,
            "amount": amount
        })
    }
    function AUMDimension(dimension) {
        return ({
            "type": "custommachinery:dimension",
            "filter": dimension,
            "blacklist": false
        })
    }
    function AUMBiome(biome) {
        return ({
            "type": "custommachinery:biome",
            "filter": biome,
            "blacklist": false
        })
    }
    function AUMRecipe(Requirements, block, time, id) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "dut:andesite_universal_machine",
            "time": time,
            "error": true,
            "hidden": true,
            "requirements": [
                AUMBlock(block)
            ].concat(Requirements)
        }).id("dut_create:andesite_universal_machine/" + id)
    }
    AUMRecipe([
        AUMItem("create:crimsite", 4, "output")
    ], "minecraft:magma_block", 60, "crimsite")
    AUMRecipe([
        AUMItem("createdieselgenerators:wood_chip", 16, "output")
    ], "#minecraft:logs", 80, "wood_chip")
    AUMRecipe([
        AUMItem('minecraft:amethyst_shard', 8, "output")
    ], "minecraft:packed_ice", 80, "cry_to_crystal")
    AUMRecipe([
        AUMItem('#forge:ingots/iron', 12, "input"),
        AUMItem('create:andesite_alloy', 12, "output")
    ], "minecraft:andesite", 60, "andesite_alloy")
})