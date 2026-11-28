
StartupEvents.registry('item', event => {
    event.create('biomass').burnTime(1600).food(food => {
        food.hunger(3)
        food.saturation(1)
        food.effect("minecraft:nausea", 240, 1, 1)
    })
    event.create('yeast')
    event.create('chromatic_protozoa')
    event.create('peat_protozoa')
    event.create('metal_protozoa')
    event.create('resonant_bacteria')
    event.create('useless_bacteria')
    event.create('blaze_chlamydia').burnTime(163840)
    event.create('blaze_mycoplasma').burnTime(1600)
    event.create('blaze_wart')
    event.create('cheese_moonalgae')
    event.create('phantom_fungus')
    event.create('mycetozoan').food(food => {
        food.hunger(3)
        food.saturation(1)
        food.effect("minecraft:unluck", 36000, 4, 1)
    })
    event.create('myxomycetes_halophila')
    event.create('empty_culture_plate')
    event.create('culture_plate')
    event.create('pasteurized_culture_plate')
    event.create('strophar_cap_piece')
    event.create('strophar_stem_piece')
    event.create('aeronos_cap_piece')
    event.create('aeronos_stem_piece')
    event.create('red_mushroom_cap_piece')
    event.create('brown_mushroom_cap_piece')
    event.create('stem_silk')
    
    for (let i of [
        'bronze_skull',
        "dragonegg_red",
        "dragonegg_silver",
        "dragonegg_black"
    ]){
        event.create(i).maxStackSize(16)
    }
    for (let i of [
        "bronze_feather",
        'dragonbone',
        "dragon_meal",

        "dragonscales_red",
        "dragonscales_silver",
        "dragonscales_black",

        'fire_dragon_heart',
        'ice_dragon_heart',
        'lightning_dragon_heart',

        'fire_dragon_flesh',
        'ice_dragon_flesh',
        'lightning_dragon_flesh',

        'fire_dragon_blood',
        'ice_dragon_blood',
        'lightning_dragon_blood'
    ]){
        event.create(i)
    }
    //event.create('culture_plate').texture('kubejs:item/culture_plate')
    //event.create('pasteurized_culture_plate').texture('kubejs:item/pasteurized_culture_plate')
})

