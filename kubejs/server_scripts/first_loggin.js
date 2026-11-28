// priority: 512
PlayerEvents.loggedIn(event => {
    let p = event.player
    if (p.tags.contains("dut_has_logged")) { return }
    else {
        p.setMainHandItem(Item.of('create:lime_toolbox', '{Inventory:{Compartments:[{Count:1b,id:"createdieselgenerators:lighter",tag:{Fluid:{Amount:185,FluidName:"createdieselgenerators:gasoline"},Type:0}},{Count:1b,id:"minecraft:potato"},{Count:1b,id:"minecraft:cactus"},{Count:1b,id:"createandesiteabound:fluid_vessel",tag:{Content:{Amount:16000,FluidName:"minecraft:lava"}}},{Count:1b,id:"kubejs:slime_cola_can"},{Count:1b,id:"createandesiteabound:fluid_vessel",tag:{Content:{Amount:16000,FluidName:"minecraft:water"}}},{Count:1b,id:"create_sa:brass_axe",tag:{Damage:0,Unbreakable:1b}},{Count:1b,id:"kubejs:unknown_prototype"}],Items:[{Count:1b,Slot:0,id:"createdieselgenerators:lighter",tag:{Fluid:{Amount:185,FluidName:"createdieselgenerators:gasoline"},Type:0}},{Count:3b,Slot:4,id:"minecraft:potato"},{Count:1b,Slot:8,id:"minecraft:cactus"},{Count:1b,Slot:12,id:"createandesiteabound:fluid_vessel",tag:{Content:{Amount:16000,FluidName:"minecraft:lava"}}},{Count:1b,Slot:16,id:"kubejs:slime_cola_can"},{Count:1b,Slot:20,id:"createandesiteabound:fluid_vessel",tag:{Content:{Amount:16000,FluidName:"minecraft:water"}}},{Count:1b,Slot:24,id:"create_sa:brass_axe",tag:{Damage:0,Unbreakable:1b}},{Count:8b,Slot:28,id:"kubejs:unknown_prototype"}],Size:32}}'))
        event.server.runCommandSilent(`/curios replace head 0 ${p.uuid.toString()} with create:goggles`)
        p.tags.add("dut_has_logged")
    }
})