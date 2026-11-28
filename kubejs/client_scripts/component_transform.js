// priority: 16
let MechanicalCoreType = [
    "kubejs:mechanical_core",
    "create:andesite_casing",
    "create:shaft",
    "create:cogwheel",
    "create:depot",
    "create:basin",
    "createbigcannons:basin_foundry_lid",
    "create:encased_fan",
    "kubejs:andesite_universal_machine",
    "kubejs:farming_station",
    "create:large_cogwheel",
    "design_decor:industrial_plating_block",
    "design_decor:industrial_gear",
    "design_decor:industrial_gear_large"
]
let WoodType = [
    "createdieselgenerators:chip_wood_beam",
    "minecraft:oak_log",
    "minecraft:spruce_log",
    "minecraft:jungle_log",
    "minecraft:acacia_log",
    "minecraft:dark_oak_log",
    "minecraft:mangrove_log",
    "minecraft:cherry_log",
    "minecraft:birch_log",
    "minecraft:crimson_stem",
    "minecraft:warped_stem"
]
let PlanksType = [
    "createdieselgenerators:chip_wood_block",
    "minecraft:oak_planks",
    "minecraft:spruce_planks",
    "minecraft:jungle_planks",
    "minecraft:acacia_planks",
    "minecraft:dark_oak_planks",
    "minecraft:mangrove_planks",
    "minecraft:cherry_planks",
    "minecraft:birch_planks",
    "minecraft:crimson_planks",
    "minecraft:warped_planks"
]
let StoneType = [
    "minecraft:stone",
    "minecraft:cobblestone",
    "minecraft:magma_block"
]
let DirtType = [
    "minecraft:dirt",
    "minecraft:farmland",
    "minecraft:coarse_dirt"
]
let FanCatalystType = [
    "create_connected:empty_fan_catalyst",
    "create_connected:fan_blasting_catalyst",
    "create_connected:fan_smoking_catalyst",
    "create_connected:fan_splashing_catalyst",
    "create_connected:fan_haunting_catalyst"
]
let EmergencyIndustrialPlatformType = [
    "kubejs:emergency_industrial_platform",
    "kubejs:emergency_industrial_platform_block",
    "kubejs:emergency_industrial_platform_lime",
    "kubejs:emergency_industrial_platform_lime_block",
    "kubejs:emergency_industrial_platform_dark",
    "kubejs:emergency_industrial_platform_dark_block"
]
let FillingMachineType = [
    "createandesiteabound:emptying_machine",
    "createandesiteabound:filling_machine"
]

//MechanicalCoreType.filter(i => i !== item.id)
let SwitchGroups = [
    { list: MechanicalCoreType, channel: "SwitchParts" },
    { list: WoodType, channel: "SwitchParts" },
    { list: PlanksType, channel: "SwitchParts" },
    { list: StoneType, channel: "SwitchParts" },
    { list: DirtType, channel: "SwitchParts" },
    { list: FanCatalystType, channel: "SwitchParts" },
    { list: EmergencyIndustrialPlatformType, channel: "SwitchParts" },
    { list: FillingMachineType, channel: "SwitchParts" },
]
let AllSwitchGroups = []
SwitchGroups.forEach(g => {
    g.list.forEach(id => AllSwitchGroups.push(id))
})

PlayerEvents.tick(event => {
    if (Client.screen != null) return
    let partsClicked = global.SwitchParts.consumeClick()
    let prevClicked = global.SwitchPartsPrevious.consumeClick()
    let nextClicked = global.SwitchPartsNext.consumeClick()
    if (!partsClicked && !prevClicked && !nextClicked) return

    let p = event.player
    let item = p.mainHandItem

    //查找所属组
    let group = SwitchGroups.find(g => g.list.some(i => i == item.id))
    if (!group) return
    if (partsClicked) {
        let items = group.list.map(i => Item.of(i))
        $ScreenOpener.open(new $RadialMenu(items, slot => {
            if (slot === -1) return
            p.sendData(group.channel, {
                item: item.id.toString(),
                itemTo: items[slot].id.toString() || item.id.toString(),
            })
        }))
    } else if (prevClicked) {
        cycleItem(p, group, item, -1)
    } else if (nextClicked) {
        cycleItem(p, group, item, 1)
    }
})

function cycleItem(p, group, item, direction) {
    let list = group.list
    let current = item.id.toString()
    let idx = list.indexOf(current)
    if (idx === -1) return

    // direction = -1 上一个；direction = 1 下一个；取模实现循环
    let nextIdx = (idx + direction + list.length) % list.length
    p.sendData(group.channel, {
        item: current,
        itemTo: list[nextIdx],
    })
}