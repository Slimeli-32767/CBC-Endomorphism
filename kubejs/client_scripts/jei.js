JEIEvents.information(event => {
    event.addItem("kubejs:unknown_prototype", [
        Text.translate('kubejs.jei_info.unknown_prototype.1'),
        Text.translate('kubejs.jei_info.unknown_prototype.2'),
        Text.translate('kubejs.jei_info.unknown_prototype.3'),
        Text.translate('kubejs.jei_info.unknown_prototype.4')
    ])
})
JEIEvents.information(event => {
    event.addFluid("kubejs:drilling_fluid", [
        Text.translate('kubejs.jei_info.drilling_fluid.1'),
        Text.translate('kubejs.jei_info.drilling_fluid.2')
    ])
    event.addItem("kubejs:drilling_fluid_bucket", [
        Text.translate('kubejs.jei_info.drilling_fluid.1'),
        Text.translate('kubejs.jei_info.drilling_fluid.2')
    ])
})
JEIEvents.hideItems(event => {
    event.hide([
        "createaddition:bioethanol_bucket"
    ])
    event.hide([
        "create_sa:andesite_exoskeleton",
        "create_sa:andesite_jetpack",
        "create_sa:copper_exoskeleton",
        "create_sa:copper_jetpack",
        "create_sa:small_fueling_tank",
        "create_sa:medium_fueling_tank",
        "create_sa:large_fueling_tank",
        "create_sa:small_filling_tank",
        "create_sa:medium_filling_tank",
        "create_sa:large_filling_tank",
        'createdieselgenerators:plant_oil_bucket'
    ])
})
JEIEvents.hideFluids(event => {
    event.hide([
        "createaddition:bioethanol"
    ])
})
JEIEvents.addFluids(event => {
    event.add([
        "vintageimprovements:sulfur_dioxide",
        "vintageimprovements:sulfur_trioxide"
    ])
})
JEIEvents.addItems(event => {
    event.add([
        "kubejs:unknown_prototype",
        "create:copper_nugget",
        "create:iron_sheet"
    ])
})
JEIEvents.removeRecipes(event => {
    event.remove('create:item_application',
        [
            "dut_create:blaze_mycoplasma/blaze_burner_manual_only",
            "dut_create:deploying/crushing_wheel"
        ]
    )
    event.remove('create:emptying',
        [
            "create:empty_createaddition_bioethanol_bucket_of_createaddition_bioethanol"
        ]
    )
    event.remove('create:filling',
        [
            "create:fill_minecraft_bucket_with_createaddition_bioethanol"
        ]
    )
})
JEIEvents.removeCategories(event=>{
    event.remove("waystones:warp_plate")
    event.remove("ad_astra:compressing")
    event.remove("ad_astra:alloying")
    event.remove("ad_astra:oxygen_loading")
    event.remove("ad_astra:refining")
    event.remove("ad_astra:cryo_freezing")
    event.remove("ad_astra:nasa_workbench")
    event.remove("ad_astra:space_station_recipe")
    event.remove("vintageimprovements:leaves_vibrating")
    event.remove("vintageimprovements:auto_smithing")
    event.remove("vintageimprovements:auto_upgrade")
})