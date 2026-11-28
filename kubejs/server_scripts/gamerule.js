ServerEvents.loaded(event => {
    event.server.gameRules.set("keepInventory", "true")
    event.server.gameRules.set("mobExplosionDropDecay", "true")
    event.server.gameRules.set("lavaSourceConversion", "true")
    event.server.gameRules.set("drowningDamage", "false")
    event.server.gameRules.set("doTraderSpawning", "false")
    event.server.gameRules.set("doPatrolSpawning", "false")
    event.server.gameRules.set("doInsomnia", "false")
    event.server.gameRules.set("randomTickSpeed", 0)
})
let servertime=1
ServerEvents.tick(event=>{
    servertime+=1
    if (servertime%201==0){
        event.server.gameRules.set("randomTickSpeed", 0)
        servertime=1
    }
})