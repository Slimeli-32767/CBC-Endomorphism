const shaftCasingType = { "create:brass_casing": "create:brass_encased_shaft", "create:andesite_casing": "create:andesite_encased_shaft" }

let $ShaftBlock = Java.loadClass("com.simibubi.create.content.kinetics.simpleRelays.ShaftBlock")
//传动杆连锁套壳
BlockEvents.rightClicked("create:shaft", event => {
    if (event.player == null) { return }
    if (event.player.isShiftKeyDown()) { return }
    if (event.player.persistentData.Alt == false) { return }
    if (beltCasing.some(i => i == event.item.id)) {
        event.player.swing()
        let limit = 64

        let block = event.block
        let BlockStates = block.blockState
        let Axis = BlockStates.getValue($ShaftBlock.AXIS).toString()

        let toEndblock = block
        let toEndBlockStates = 0
        let toEndPos = [0, 0, 0]
        let toEndVec = [0, 0, 0]
        let toStartblock = block
        let toStartBlockStates = 0
        let toStartPos = [0, 0, 0]
        let toStartVec = [0, 0, 0]
        switch (Axis) {
            case 'x':
                toEndVec[0] = 1
                toStartVec[0] = -1
                break
            case 'y':
                toEndVec[1] = 1
                toStartVec[1] = -1
                break
            case 'z':
                toEndVec[2] = 1
                toStartVec[2] = -1
                break
        }
        //遍历至末端
        for (let i = 0; i < limit; i++) {
            toEndPos[0] += toEndVec[0]
            toEndPos[1] += toEndVec[1]
            toEndPos[2] += toEndVec[2]
            toEndblock = block.offset(toEndPos[0], toEndPos[1], toEndPos[2])
            if (toEndblock.id != 'create:shaft' && toEndblock.id != shaftCasingType[event.item.id]) {
                break
            }
            toEndBlockStates = toEndblock.blockState
            if (toEndBlockStates.getValue($ShaftBlock.AXIS).toString() != Axis) {
                break
            }
            event.level.runCommandSilent(`/setblock ${toEndblock.pos.x} ${toEndblock.pos.y} ${toEndblock.pos.z} ${shaftCasingType[event.item.id]}[axis=${Axis.toLowerCase()}]`)
        }

        //遍历至起始端
        for (let i = 0; i < limit; i++) {
            toStartPos[0] += toStartVec[0]
            toStartPos[1] += toStartVec[1]
            toStartPos[2] += toStartVec[2]
            toStartblock = block.offset(toStartPos[0], toStartPos[1], toStartPos[2])
            if (toStartblock.id != 'create:shaft' && toStartblock.id != shaftCasingType[event.item.id]) { break }
            toStartBlockStates = toStartblock.blockState
            if (toStartBlockStates.getValue($ShaftBlock.AXIS).toString() != Axis) { break }
            event.level.runCommandSilent(`/setblock ${toStartblock.pos.x} ${toStartblock.pos.y} ${toStartblock.pos.z} ${shaftCasingType[event.item.id]}[axis=${Axis.toLowerCase()}]`)
        }

    }
})
//传动杆连锁拆壳
BlockEvents.rightClicked("create:brass_encased_shaft", event => {
    if (event.player == null) { return }
    if (!event.player.isShiftKeyDown()) { return }
    if (event.item.id != "create:wrench") { return }
    if (event.player.persistentData.Alt == false) { return }
    event.player.swing()
    let limit = 64

    let block = event.block
    let BlockStates = block.blockState
    let Axis = BlockStates.getValue($ShaftBlock.AXIS).toString()

    let toEndblock = block
    let toEndBlockStates = 0
    let toEndPos = [0, 0, 0]
    let toEndVec = [0, 0, 0]
    let toStartblock = block
    let toStartBlockStates = 0
    let toStartPos = [0, 0, 0]
    let toStartVec = [0, 0, 0]
    switch (Axis.toString()) {
        case 'x':
            toEndVec[0] = 1
            toStartVec[0] = -1
            break
        case 'y':
            toEndVec[1] = 1
            toStartVec[1] = -1
            break
        case 'z':
            toEndVec[2] = 1
            toStartVec[2] = -1
            break
    }
    //遍历至末端
    for (let i = 0; i < limit; i++) {
        toEndPos[0] += toEndVec[0]
        toEndPos[1] += toEndVec[1]
        toEndPos[2] += toEndVec[2]
        toEndblock = block.offset(toEndPos[0], toEndPos[1], toEndPos[2])
        if (toEndblock.id != "create:brass_encased_shaft") {
            break
        }
        toEndBlockStates = toEndblock.blockState
        if (toEndBlockStates.getValue($ShaftBlock.AXIS).toString() != Axis) {
            break
        }
        event.level.runCommandSilent(`/setblock ${toEndblock.pos.x} ${toEndblock.pos.y} ${toEndblock.pos.z} create:shaft[axis=${Axis.toLowerCase()}]`)
    }
    //遍历至起始端
    for (let i = 0; i < limit; i++) {
        toStartPos[0] += toStartVec[0]
        toStartPos[1] += toStartVec[1]
        toStartPos[2] += toStartVec[2]
        toStartblock = block.offset(toStartPos[0], toStartPos[1], toStartPos[2])
        if (toStartblock.id != "create:brass_encased_shaft") { break }
        toStartBlockStates = toStartblock.blockState
        if (toStartBlockStates.getValue($ShaftBlock.AXIS).toString() != Axis) { break }
        event.level.runCommandSilent(`/setblock ${toStartblock.pos.x} ${toStartblock.pos.y} ${toStartblock.pos.z} create:shaft[axis=${Axis.toLowerCase()}]`)
    }
})
BlockEvents.rightClicked("create:andesite_encased_shaft", event => {
    if (event.player == null) { return }
    if (!event.player.isShiftKeyDown()) { return }
    if (event.item.id != "create:wrench") { return }
    if (event.player.persistentData.Alt == false) { return }
    event.player.swing()
    let limit = 64

    let block = event.block
    let BlockStates = block.blockState
    let Axis = BlockStates.getValue($ShaftBlock.AXIS).toString()

    let toEndblock = block
    let toEndBlockStates = 0
    let toEndPos = [0, 0, 0]
    let toEndVec = [0, 0, 0]
    let toStartblock = block
    let toStartBlockStates = 0
    let toStartPos = [0, 0, 0]
    let toStartVec = [0, 0, 0]
    switch (Axis.toString()) {
        case 'x':
            toEndVec[0] = 1
            toStartVec[0] = -1
            break
        case 'y':
            toEndVec[1] = 1
            toStartVec[1] = -1
            break
        case 'z':
            toEndVec[2] = 1
            toStartVec[2] = -1
            break
    }
    //遍历至末端
    for (let i = 0; i < limit; i++) {
        toEndPos[0] += toEndVec[0]
        toEndPos[1] += toEndVec[1]
        toEndPos[2] += toEndVec[2]
        toEndblock = block.offset(toEndPos[0], toEndPos[1], toEndPos[2])
        if (toEndblock.id != "create:andesite_encased_shaft") {
            break
        }
        toEndBlockStates = toEndblock.blockState
        if (toEndBlockStates.getValue($ShaftBlock.AXIS).toString() != Axis) {
            break
        }
        event.level.runCommandSilent(`/setblock ${toEndblock.pos.x} ${toEndblock.pos.y} ${toEndblock.pos.z} create:shaft[axis=${Axis.toLowerCase()}]`)
    }
    //遍历至起始端
    for (let i = 0; i < limit; i++) {
        toStartPos[0] += toStartVec[0]
        toStartPos[1] += toStartVec[1]
        toStartPos[2] += toStartVec[2]
        toStartblock = block.offset(toStartPos[0], toStartPos[1], toStartPos[2])
        if (toStartblock.id != "create:andesite_encased_shaft") { break }
        toStartBlockStates = toStartblock.blockState
        if (toStartBlockStates.getValue($ShaftBlock.AXIS).toString() != Axis) { break }
        event.level.runCommandSilent(`/setblock ${toStartblock.pos.x} ${toStartblock.pos.y} ${toStartblock.pos.z} create:shaft[axis=${Axis.toLowerCase()}]`)
    }
})