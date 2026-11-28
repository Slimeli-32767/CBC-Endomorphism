/*
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
const $RandomSource = Java.loadClass("net.minecraft.util.RandomSource")

ItemEvents.rightClicked("compass", event => {
    let p = event.player
    let serverLevelChunkSource = event.server.getLevel(event.level.dimension).getChunkSource()

    let generator = serverLevelChunkSource.getGenerator()
    let biomeSource = generator.getBiomeSource()

    let x = Math.floor(p.x)
    let y = Math.floor(p.y)
    let z = Math.floor(p.z)

    let result = biomeSource.findBiomeHorizontal(
        x, y, z,
        6400,
        4,
        (biomeHolder) => biomeHolder.is($ResourceKey.create($Registries.BIOME, Utils.id("minecraft:plains")).location()),
        $RandomSource.create(),
        true,
        serverLevelChunkSource.randomState().sampler()
    )
    if (result != null) {
        let targetPos = result.getFirst()
        let displayName = Text.translate(result.getSecond().unwrapKey().orElse(null).location().toLanguageKey("biome"))
        p.tell(`找到生物群系${displayName}于：${targetPos.getX()}, ${targetPos.getY()}, ${targetPos.getZ()}`)
    } else {
        p.tell(`在半径 ${searchRadius} 内未找到生物群系 ${displayName}`)
    }
})
    */