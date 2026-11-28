const DimensionToPlanetWithOrbit = {
    "minecraft:overworld": "earth",
    "ad_astra:earth_orbit": "earth_orbit",
    "ad_astra:moon": "moon",
    "ad_astra:moon_orbit": "moon_orbit",
    "dut:slimeria": "slimeria",
    "dut:slimeria_orbit": "slimeria_orbit",
}
const navigateDataToPlanet = {
    'kubejs:navigate_data_slimeria': "dut:slimeria",
    'kubejs:navigate_data_slimeria_orbit': "dut:slimeria_orbit",
    'kubejs:navigate_data_earth': "minecraft:overworld",
    'kubejs:navigate_data_earth_orbit': "ad_astra:earth_orbit",
    'kubejs:navigate_data_moon': "ad_astra:moon",
    'kubejs:navigate_data_moon_orbit': "ad_astra:moon_orbit"
}
const PlanetNameKey = {
    "dut:slimeria": "planet.dut.slimeria",
    "dut:slimeria_orbit": "planet.dut.slimeria_orbit",
    "minecraft:overworld": "planet.dut.earth",
    "ad_astra:earth_orbit": "planet.dut.earth_orbit",
    "ad_astra:moon": "planet.dut.moon",
    "ad_astra:moon_orbit": "planet.dut.moon_orbit"
}
const Orbit = ["ad_astra:earth_orbit", "ad_astra:moon_orbit", "dut:slimeria_orbit"]
const GalaxyNameKey = ["solar_system.dut.solar_system", "solar_system.dut.233b_system"]


let has233BMap = false
let handlingRocket = false
let rocketTarget = ""
let allowToLaunchRocket = false
//火箭面板
function OpenRocketScene(p) {
    if (handlingRocket == false) { return }
    let allowedDimensions = []
    let BasicPlanet = [
        Item.of('kubejs:navigate_data_earth').withName(Text.translate("planet.dut.earth")),
        Item.of('kubejs:navigate_data_earth_orbit').withName(Text.translate("planet.dut.earth_orbit")),
        Item.of('kubejs:navigate_data_moon').withName(Text.translate("planet.dut.moon")),
        Item.of('kubejs:navigate_data_moon_orbit').withName(Text.translate("planet.dut.moon_orbit"))
    ]
    let _233BDimensions = [
        Item.of('kubejs:navigate_data_slimeria').withName(Text.translate("planet.dut.slimeria")),
        Item.of('kubejs:navigate_data_slimeria_orbit').withName(Text.translate("planet.dut.slimeria_orbit"))
    ]
    if (has233BMap == true) {
        allowedDimensions = BasicPlanet.concat(_233BDimensions)
    } else {
        allowedDimensions = BasicPlanet
    }
    $ScreenOpener.open(
        new $RadialMenu(allowedDimensions, (slot) => {
            if (slot == -1) {
                rocketTarget = ""
                allowToLaunchRocket = false
            }
            else {
                let i = allowedDimensions[slot].id.toString()
                rocketTarget = navigateDataToPlanet[i]
                p.tell(
                    Text.translate("kubejs.message.rocket_target")
                        .append(
                            Text.translate(PlanetNameKey[rocketTarget]).color(Color.GOLD)
                        )
                )
                if (Orbit.some(k => k == rocketTarget)) {
                    p.tell(Text.translate("kubejs.message.hand_control_rocket_orbit"))
                }
                allowToLaunchRocket = true
            }
        })
    )
}
//开始操纵火箭
NetworkEvents.dataReceived("handleRocket", event => {
    let p = event.player
    has233BMap = event.data.has233BMap || false
    handlingRocket = true
    p.tell(Text.translate("kubejs.message.hand_control_rocket", global.RocketPad.getKey().getDisplayName().getString()))
    Client.options.cameraType = $CameraType.THIRD_PERSON_BACK
})
//停止操纵火箭
NetworkEvents.dataReceived("disHandleRocket", event => {
    has233BMap = false
    handlingRocket = false
    rocketTarget = ""
    allowToLaunchRocket = false
    Client.options.cameraType = $CameraType.FIRST_PERSON
})
//面板逻辑
PlayerEvents.tick(event => {
    if (!handlingRocket) { return }
    let p = event.player
    if (allowToLaunchRocket) {
        p.setStatusMessage(Text.translate("kubejs.message.hand_control_rocket_launch"))
    }
    if (global.RocketPad.isDown()) {
        OpenRocketScene(p)
        return
    }
    //发射
    if (allowToLaunchRocket && Client.isAltDown()) {
        if (Orbit.some(i => i == rocketTarget) && p.offHandItem.id === 'kubejs:emergency_industrial_platform_space') {
            p.sendData("handleRocketLaunch", { "spacestation": true, "target": rocketTarget })
        } else {
            p.sendData("handleRocketLaunch", { "spacestation": false, "target": rocketTarget })
        }
        has233BMap = false
        handlingRocket = false
        rocketTarget = ""
        allowToLaunchRocket = false
        Client.options.cameraType = $CameraType.THIRD_PERSON_BACK
    }
})
