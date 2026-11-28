const beltCasing = ["create:brass_casing", "create:andesite_casing", "create:wrench"]

const beltCasingType = { "create:brass_casing": 'BRASS', "create:andesite_casing": "ANDESITE", "create:wrench": 'NONE' }
const inversedBeltCasingType = { "BRASS": "create:brass_casing", "ANDESITE": "create:andesite_casing" }


let $KineticBlockEntity = Java.loadClass("com.simibubi.create.content.kinetics.base.KineticBlockEntity")
let $BeltBlock = Java.loadClass("com.simibubi.create.content.kinetics.belt.BeltBlock")
let $BeltBlockEntity = Java.loadClass("com.simibubi.create.content.kinetics.belt.BeltBlockEntity")
//传送带连锁套拆壳
BlockEvents.rightClicked("create:belt", event => {
    if (event.player == null) { return }
    if (event.player.isShiftKeyDown()) { return }
    if (event.player.persistentData.Alt == false) { return }
    if (beltCasing.some(i => i == event.item.id)) {
        event.player.swing()
        let limit = 32

        let block = event.block
        let BlockStates = block.blockState
        let part = BlockStates.getValue($BeltBlock.PART).toString()

        let HorizontalFacing = BlockStates.getValue($BeltBlock.HORIZONTAL_FACING).toString()
        let Slope = BlockStates.getValue($BeltBlock.SLOPE).toString()
        let YAxis = false//水平传送带还是斜传送带
        let YBelt = false//是否是垂直传送带
        let toEndblock = block
        let toEndBlockStates = toEndblock.blockState
        let toEndPos = [0, 0, 0]
        let toEndVec = [0, 0, 0]
        let toStartblock = block
        let toStartBlockStates = toStartblock.blockState
        let toStartPos = [0, 0, 0]
        let toStartVec = [0, 0, 0]
        //event.player.tell(encaseOrNot)
        if (Slope == 'VERTICAL') { YBelt = true }
        if (YBelt) {
            toEndVec[1] = 1
            toStartVec[1] = -1
        }
        else {
            switch (HorizontalFacing) {
                case 'east':
                    toEndVec[0] = 1
                    toStartVec[0] = -1
                    break
                case 'west':
                    toEndVec[0] = -1
                    toStartVec[0] = 1
                    break
                case 'south':
                    toEndVec[2] = 1
                    toStartVec[2] = -1
                    break
                case 'north':
                    toEndVec[2] = -1
                    toStartVec[2] = 1
                    break
            }
            if (Slope != 'HORIZONTAL') { YAxis = true }
            if (YAxis) {
                switch (Slope) {
                    case 'UPWARD':
                        toEndVec[1] = 1
                        toStartVec[1] = -1
                        break
                    case 'DOWNWARD':
                        toEndVec[1] = -1
                        toStartVec[1] = 1
                        break
                }
            }
        }
        //遍历至末端
        if (part != 'END') {
            for (let i = 0; i < limit; i++) {
                toEndPos[0] += toEndVec[0]
                toEndPos[1] += toEndVec[1]
                toEndPos[2] += toEndVec[2]
                toEndblock = block.offset(toEndPos[0], toEndPos[1], toEndPos[2])
                if (toEndblock.id != 'create:belt') { break }
                if (toEndblock.entity instanceof $BeltBlockEntity) {
                    toEndblock.entity.setCasingType(beltCasingType[event.item.id])
                }


                //是否继续
                if (toEndBlockStates.getValue($BeltBlock.PART).toString() == 'END') {
                    break
                }
            }
        }
        //遍历至起始端
        if (part != 'START') {
            for (let i = 0; i < limit; i++) {
                toStartPos[0] += toStartVec[0]
                toStartPos[1] += toStartVec[1]
                toStartPos[2] += toStartVec[2]
                toStartblock = block.offset(toStartPos[0], toStartPos[1], toStartPos[2])
                if (toStartblock.id != 'create:belt') { break }
                if (toStartblock.entity instanceof $BeltBlockEntity) {
                    toStartblock.entity.setCasingType(beltCasingType[event.item.id])
                }
                //是否继续
                if (toStartBlockStates.getValue($BeltBlock.PART).toString() == 'START') {
                    break
                }
            }
        }
    }
})