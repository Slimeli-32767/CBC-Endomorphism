//$WorldPath = Utils.server.getWorldPath($LevelResource.ROOT).getParent()
ServerEvents.commandRegistry(event => {
    //explode
    event.dispatcher.register(event.commands.literal('explode')
        .requires(source => source.hasPermission(1))
        .then(event.commands.argument('pos', event.arguments.BLOCK_POS.create(event))
            .then(event.commands.argument('strength', event.arguments.INTEGER.create(event))
                .executes(result => {
                    /**@type {Internal.Level} */
                    let level = result.source.level
                    let targetPos = event.arguments.BLOCK_POS.getResult(result, "pos")
                    let strength = event.arguments.INTEGER.getResult(result, "strength")
                    if (level == null) { return 0 }
                    try {
                        level.createExplosion(targetPos.x, targetPos.y, targetPos.z).explosionMode("block").strength(strength).explode()
                        return 1
                    } catch (e) {
                        console.error(e)
                        return 0
                    }

                })
            )
        )
    )

})