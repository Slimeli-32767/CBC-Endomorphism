let itemToVein = {
	"createdieselgenerators:crude_oil_bucket": "createoreexcavation:ore_vein_type/crude_oil",
	"kubejs:refined_oil_bucket": "createoreexcavation:ore_vein_type/refined_oil",
	"minecraft:coal": "createoreexcavation:ore_vein_type/coal",
	"kubejs:aluminite": "createoreexcavation:ore_vein_type/moon/moon_aluminite",
	"ad_astra:moon_desh_ore": "createoreexcavation:ore_vein_type/moon/moon_desh",
	"ad_astra:moon_globe": "createoreexcavation:ore_vein_type/moon/moon_stone",
	"ad_astra:moon_iron_ore": "createoreexcavation:ore_vein_type/moon/moon_iron",
	"kubejs:scrap": "createoreexcavation:ore_vein_type/moon/scrap",
	"kubejs:scrap_1": "createoreexcavation:ore_vein_type/moon/scrap_1",
	"kubejs:raw_sulphur": "createoreexcavation:ore_vein_type/sulphur",
	"minecraft:andesite": "createoreexcavation:ore_vein_type/stone/andesite",
	"minecraft:diorite": "createoreexcavation:ore_vein_type/stone/diorite",
	"minecraft:granite": "createoreexcavation:ore_vein_type/stone/granite",
	"minecraft:tuff": "createoreexcavation:ore_vein_type/stone/tuff",
	"minecraft:calcite": "createoreexcavation:ore_vein_type/stone/calcite",
	"minecraft:lapis_lazuli": "createoreexcavation:ore_vein_type/lapis"
}
let itemToText = {
	"createdieselgenerators:crude_oil_bucket": "kubejs.vein_id.crude_oil",
	"kubejs:refined_oil_bucket": "fluid.kubejs.refined_oil",
	"minecraft:coal": "item.minecraft.coal",
	"kubejs:aluminite": "item.kubejs.aluminite",
	"ad_astra:moon_desh_ore": "kubejs.vein_id.moon_desh",
	"ad_astra:moon_globe": "kubejs.vein_id.moon_stone",
	"ad_astra:moon_iron_ore": "kubejs.vein_id.moon_iron",
	"kubejs:scrap": "item.kubejs.scrap",
	"kubejs:scrap_1": "item.kubejs.scrap_1",
	"kubejs:raw_sulphur": "item.kubejs.raw_sulphur",
	"minecraft:andesite": "block.minecraft.andesite",
	"minecraft:diorite": "block.minecraft.diorite",
	"minecraft:granite": "block.minecraft.granite",
	"minecraft:tuff": "block.minecraft.tuff",
	"minecraft:calcite": "block.minecraft.calcite",
	"minecraft:lapis_lazuli": "item.minecraft.lapis_lazuli",
}
let veinDim = {
	"minecraft:overworld": [
		"createdieselgenerators:crude_oil_bucket",
		"minecraft:coal",
		"kubejs:refined_oil_bucket",
		"kubejs:raw_sulphur",
		"minecraft:lapis_lazuli",
		"minecraft:andesite",
		"minecraft:diorite",
		"minecraft:tuff",
		"minecraft:calcite"
	],
	"minecraft:the_nether": [
		"kubejs:raw_sulphur"
	],
	"ad_astra:moon": [
		"kubejs:aluminite",
		"ad_astra:moon_desh_ore",
		"ad_astra:moon_globe",
		"kubejs:scrap",
		"kubejs:scrap_1",
		"ad_astra:moon_iron_ore",
		"kubejs:raw_sulphur"
	]
}
NativeEvents.onEvent($InputEvent, event => {
	const player = Client.player;
	if (Client.screen != null || player == null || player.isSpectator() ||
		event.getButton() != Client.options.keyAttack.getKey().getValue() || event.getAction() == 0 || player.mainHandItem != "kubejs:scanner")
		return;
	let dim = player.level.dimension.toString()
	//player.tell(dim)
	let localVeinList = []
	let hasVein = Object.keys(veinDim).some(i => i === dim)
	if (hasVein) {
		for (let i of veinDim[dim]) {
			localVeinList.push(Item.of(i).withName(Text.translate(itemToText[i])))
		}
	} else {
		localVeinList = [Item.of("minecraft:barrier").withName(Text.translate("kubejs.message.no_vein"))]
	}
	//console.log(list)
	$ScreenOpener.open(
		new $RadialMenu(localVeinList, (slot) => {
			if (slot == -1)
				return;
			if (hasVein) {
				player.sendData("scannerVeinType", { "veinDim": dim, "item": localVeinList[slot].id, "vein_id": itemToVein[localVeinList[slot].id],"display":localVeinList[slot].displayName.getString() })
			} else {
				player.sendData("scannerVeinType", { "veinDim": "none", "item": "minecraft:barrier", "vein_id": "none","display":"NONE" })
			}
		})
	);

	player.swing(0);
	event.setCanceled(true);
});
