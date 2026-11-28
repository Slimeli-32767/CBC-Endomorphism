NetworkEvents.dataReceived("scannerVeinType", event => {
  let p = event.player
  let d = event.data
  let scanner = p.mainHandItem
  if (scanner.id != "kubejs:scanner") {
    return
  }
  scanner.setNbt(d)
  p.tell(Text.translate("kubejs.message.vein_selected_to").color(Color.GREEN).append(Text.translate(scanner.nbt?.display || "NONE").color(Color.YELLOW)))
})
const $OreVeinGenerator = Java.loadClass("com.tom.createores.OreVeinGenerator")
const $OreVeinAtlasItem = Java.loadClass("com.tom.createores.item.OreVeinAtlasItem")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
const $RandomSource = Java.loadClass("net.minecraft.util.RandomSource")

ItemEvents.rightClicked("kubejs:scanner", e => {
  const { player, level, server } = e
  if (player.cooldowns.isOnCooldown(e.item.item))
    return
  let TargetVein = e.item.nbt?.vein_id || "NONE"

  server.runCommandSilent(`/execute as ${player.getUsername()} at @s run function dut:particle/scan_set`)
  player.addItemCooldown(e.item.item, 60)
  const LocalTime = Math.floor((level.time % 24000) * 3.6)
  player.tell(Text.translate("kubejs.message.satellite").color(Color.YELLOW).append(Math.floor((LocalTime / 3600)) + ':' + Math.floor((LocalTime / 60)) % 60 + ':' + Math.floor(LocalTime % 60)))
  player.tell(Text.translate("kubejs.message.vein_selected_to").append(Text.translate(e.item.nbt?.display || "NONE")))

  if ([
    'dut:thalassgel',
    'dut:chromatic_agros',
    'dut:spore_jungle',
    'dut:nitrolithic_shore'
  ].some(i => i == TargetVein)) {

    let serverLevelChunkSource = e.server.getLevel(e.level.dimension).getChunkSource()
    let generator = serverLevelChunkSource.getGenerator()
    let biomeSource = generator.getBiomeSource()

    let x = Math.floor(player.x)
    let y = Math.floor(player.y)
    let z = Math.floor(player.z)

    let result = biomeSource.findBiomeHorizontal(
      x, y, z,
      6400,
      8,
      (biomeHolder) => biomeHolder.is($ResourceKey.create($Registries.BIOME, Utils.id(TargetVein)).location()),
      $RandomSource.create(),
      true,
      serverLevelChunkSource.randomState().sampler()
    )
    if (result != null) {
      let targetPos = result.getFirst()
      let distance = Math.floor(Math.sqrt(
        Math.pow(targetPos.getX() - x, 2)
        + Math.pow(targetPos.getZ() - z, 2)
      ))
      player.tell(Text.translate("kubejs.message.pos").color(Color.GREEN).append(targetPos.getX() + ' ' + targetPos.getZ()))
      player.tell(Text.translate("kubejs.message.distance").color(Color.GREEN).append(distance))
      level.playSound(null, player.x, player.y, player.z, "minecraft:block.note_block.bell", "players", 1, 0.4)
      return
    } else {
      player.tell(Text.translate("kubejs.message.vein_not_found"))
      level.playSound(null, player.x, player.y, player.z, "minecraft:block.note_block.bell", "players", 1, 0.1)
      return
    }

  } else {

    //以下代码修改自JSI Production Team
    try {
      let blockPosition = player.blockPosition()
      let { first: pos, second: info } = $OreVeinGenerator.getPicker(level).locate(
        blockPosition,
        level,
        6400,// 最大搜索距离
        (vein) => vein.getId() == TargetVein
      )
      let distance = Math.floor(Math.sqrt(
        Math.pow(blockPosition.x - pos.x, 2)
        + Math.pow(blockPosition.z - pos.z, 2)
      ))
      player.tell(Text.translate("kubejs.message.pos").color(Color.GREEN).append(pos.x + ' ' + pos.z))
      player.tell(Text.translate("kubejs.message.distance").color(Color.GREEN).append(distance))
      level.playSound(null, player.x, player.y, player.z, "minecraft:block.note_block.bell", "players", 1, 0.4)
      return
    } catch (error) {
      player.tell(Text.translate("kubejs.message.vein_not_found"))
      level.playSound(null, player.x, player.y, player.z, "minecraft:block.note_block.bell", "players", 1, 0.1)
      return
    }

    //以上代码修改自JSI Production Team
  }

})
