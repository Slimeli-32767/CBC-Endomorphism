ServerEvents.recipes(event => {
    //event.remove({output: '',not:{mod:'kubejs'}})
    //event.remove({id: ''})
    //event.remove({input: ''})
    //event.custom()
    //激光切割机
    event.remove({ output: 'vintageimprovements:laser_item', not: { mod: 'kubejs' } })
    event.remove({ output: 'vintageimprovements:laser', not: { mod: 'kubejs' } })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": { "tag": "forge:plates/brass" },
            "B": { "item": "kubejs:planetary_gear" },
            "C": { "item": "createaddition:modular_accumulator" },
            "D": { "item": "kubejs:electric_gear" }
        },
        "pattern": [
            "ABA",
            "ACA",
            "ADA"
        ],
        "result": {
            "item": "vintageimprovements:laser"
        },
        "show_notification": true
    }).id("dut_create:laser")
    //空白标志
    event.custom({
        "type": "vintageimprovements:laser_cutting",
        "ingredients": [
            { "item": "create:andesite_alloy" }
        ],
        "results": [
            { "item": "design_decor:blank_sign", "count": 12 }
        ],
        "energy": 500,
        "maxChargeRate": 80
    }).id("dut_create:laser_cutting/blank_sign")
    //空白字符标志
    event.custom({
        "type": "vintageimprovements:laser_cutting",
        "ingredients": [
            { "tag": "forge:ingots/brass" }
        ],
        "results": [
            { "item": "design_decor:letter_sign", "count": 12 }
        ],
        "energy": 500,
        "maxChargeRate": 80
    }).id("dut_create:laser_cutting/letter_sign")
    //光辉石
    event.custom(
    {
        "type": "vintageimprovements:laser_cutting",
      "ingredients": [
        { "item": "create:shadow_steel" }
      ],
        "energy": 14400,
        "maxChargeRate": 1440,
      "results": [
        { "item": "create:refined_radiance" },
      ]
    }).id("dut_create:laser_cutting/refined_radiance")
})