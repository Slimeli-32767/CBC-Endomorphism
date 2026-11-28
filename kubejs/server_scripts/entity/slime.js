EntityEvents.spawned("minecraft:slime", event => {
    if (event.entity.getSpawnType() != "NATURAL") { return }
    if (event.entity.level.isDay() && event.entity.block.dimension == "dut:slimeria") {
        event.entity.discard()
        event.cancel()
    }
})
EntityEvents.spawned("minecraft:magma_cube", event => {
    if (event.entity.getSpawnType() != "NATURAL") { return }
    if (event.entity.level.isDay() && event.entity.block.dimension == "dut:slimeria") {
        event.entity.discard()
        event.cancel()
    }
})
NativeEvents.onEvent($LivingTick, event => {
    /**@type {Internal.Entity} */
    let e = event.entity
    if ((e.type != "minecraft:slime" && e.type != "minecraft:magma_cube") || e.age % 20 != 0) { return }
    if (e.block.id == "kubejs:saline_water" && e.level.dimension == "dut:slimeria") {
        e.level.spawnParticles("minecraft:poof", false, e.x, e.y, e.z, 0.3, 0.3, 0.3, 6, 0.02)
        e.level.playSound(null, e.x, e.y, e.z, 'minecraft:block.brewing_stand.brew', 'voice', 0.5, 1)

        let randomNum = Math.random()
        if (randomNum > 0.975) {
            e.block.popItem('kubejs:myxomycetes_halophila')
        } else if (0.94 > randomNum && randomNum > 0.915) {
            e.block.popItem('kubejs:mycetozoan')
        }
        e.discard()
    }
})
EntityEvents.spawned("item", event => {
    let e = event.entity
    if (e.nbt.Item?.id != "kubejs:unsteady_electro_hydro") { return }
    else {
        let l = e.level
        l.spawnParticles("createbigcannons:spark 20 20 20", false, e.x, e.y, e.z, 3.0, 3.0, 3.0, 6400, 2)
        l.createEntity
        l.createExplosion(e.x, e.y+8, e.z).explosionMode("block").strength(96).explode()
        l.createExplosion(e.x+8, e.y, e.z+8).explosionMode("block").strength(96).explode()
        l.createExplosion(e.x+8, e.y, e.z-8).explosionMode("block").strength(96).explode()
        l.createExplosion(e.x-8, e.y, e.z+8).explosionMode("block").strength(96).explode()
        l.createExplosion(e.x-8, e.y, e.z-8).explosionMode("block").strength(96).explode()
        l.rainLevel = 1
        l.thunderLevel = 1
        l.runCommandSilent("/clear @a kubejs:unsteady_electro_hydro")
        l.runCommandSilent("/kill @e[type=item]")


        e.discard()
        event.cancel()
    }
})