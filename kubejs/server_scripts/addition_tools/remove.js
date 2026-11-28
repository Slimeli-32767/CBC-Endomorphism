ServerEvents.recipes(event => {
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_pickaxe" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_axe" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_sword" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_hoe" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_shovel" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_helmet" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_chestplate" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_leggings" })
    event.remove({ type: "minecraft:blasting", input: "create_sa:brass_boots" })

    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_pickaxe" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_axe" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_sword" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_hoe" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_shovel" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_helmet" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_chestplate" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_leggings" })
    event.remove({ type: "minecraft:smoking", input: "create_sa:brass_boots" })

    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_pickaxe" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_axe" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_sword" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_hoe" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_shovel" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_helmet" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_chestplate" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_leggings" })
    event.remove({ type: "minecraft:smelting", input: "create_sa:brass_boots" })

    event.remove({ id: "minecraft:wooden_hoe" })
    event.remove({ id: "minecraft:wooden_shovel" })
    event.remove({ id: "minecraft:wooden_sword" })

    event.remove({ id: "minecraft:golden_axe" })
    event.remove({ id: "minecraft:golden_pickaxe" })
    event.remove({ id: "minecraft:golden_hoe" })
    event.remove({ id: "minecraft:golden_shovel" })
    event.remove({ id: "minecraft:golden_sword" })
    event.remove({ id: "minecraft:golden_helmet" })
    event.remove({ id: "minecraft:golden_chestplate" })
    event.remove({ id: "minecraft:golden_leggings" })
    event.remove({ id: "minecraft:golden_boots" })

    event.remove({ id: "minecraft:iron_axe" })
    event.remove({ id: "minecraft:iron_pickaxe" })
    event.remove({ id: "minecraft:iron_hoe" })
    event.remove({ id: "minecraft:iron_shovel" })
    event.remove({ id: "minecraft:iron_sword" })
    event.remove({ id: "minecraft:iron_helmet" })
    event.remove({ id: "minecraft:iron_chestplate" })
    event.remove({ id: "minecraft:iron_leggings" })
    event.remove({ id: "minecraft:iron_boots" })

    event.remove({ id: "minecraft:stone_axe" })
    event.remove({ id: "minecraft:stone_pickaxe" })
    event.remove({ id: "minecraft:stone_hoe" })
    event.remove({ id: "minecraft:stone_shovel" })
    event.remove({ id: "minecraft:stone_sword" })

    event.remove({ id: "minecraft:leather_helmet" })
    event.remove({ id: "minecraft:leather_chestplate" })
    event.remove({ id: "minecraft:leather_leggings" })
    event.remove({ id: "minecraft:leather_boots" })

    event.remove({ id: "minecraft:chainmail_helmet" })
    event.remove({ id: "minecraft:chainmail_chestplate" })
    event.remove({ id: "minecraft:chainmail_leggings" })
    event.remove({ id: "minecraft:chainmail_boots" })

    event.remove({ id: "minecraft:diamond_axe" })
    event.remove({ id: "minecraft:diamond_pickaxe" })
    event.remove({ id: "minecraft:diamond_hoe" })
    event.remove({ id: "minecraft:diamond_shovel" })
    event.remove({ id: "minecraft:diamond_sword" })
    event.remove({ id: "minecraft:diamond_helmet" })
    event.remove({ id: "minecraft:diamond_chestplate" })
    event.remove({ id: "minecraft:diamond_leggings" })
    event.remove({ id: "minecraft:diamond_boots" })
})
const UseableDrawersList = [
    "storagedrawers:spruce_full_drawers_1", "storagedrawers:spruce_full_drawers_2", "storagedrawers:spruce_full_drawers_4", "storagedrawers:framed_compacting_drawers_3", "storagedrawers:framed_compacting_drawers_2", "storagedrawers:compacting_drawers_3", "storagedrawers:compacting_drawers_2", "storagedrawers:framed_full_drawers_1", "storagedrawers:framed_full_drawers_2", "storagedrawers:framed_full_drawers_4"
]
for (let i of UseableDrawersList) {
    BlockEvents.broken(i, event => {
        if (!event.player.shiftKeyDown) {
            event.player.setStatusMessage(Text.translate("kubejs.message.drawers1"))
            event.cancel()
        }
    })
}
