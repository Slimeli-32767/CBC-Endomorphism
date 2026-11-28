if (Platform.isClientEnvironment()) {
    let $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
    let $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");
    let $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry")
    /**@type {Internal.KeyMapping} */
    global.FreeCam = new $KeyMapping(
        "key.kubejs.freecam",//按键名
        $GLFWkey.GLFW_KEY_F4,//具体按键名字
        "key.keybinding.brass_concerto"//按键类名
    )
    global.RocketPad = new $KeyMapping(
        "key.kubejs.rocket_pad",
        $GLFWkey.GLFW_KEY_J,
        "key.keybinding.brass_concerto"
    )
    global.SwitchUp = new $KeyMapping(
        "key.kubejs.switch_up",
        $GLFWkey.GLFW_KEY_UP,
        "key.keybinding.brass_concerto"
    )
    global.SwitchDown = new $KeyMapping(
        "key.kubejs.switch_down",
        $GLFWkey.GLFW_KEY_DOWN,
        "key.keybinding.brass_concerto"
    )
    global.SwitchLeft = new $KeyMapping(
        "key.kubejs.switch_left",
        $GLFWkey.GLFW_KEY_LEFT,
        "key.keybinding.brass_concerto"
    )
    global.SwitchRight = new $KeyMapping(
        "key.kubejs.switch_right",
        $GLFWkey.GLFW_KEY_RIGHT,
        "key.keybinding.brass_concerto"
    )
    global.SwitchParts = new $KeyMapping(
        "key.kubejs.switch_parts",
        $GLFWkey.GLFW_KEY_R,
        "key.keybinding.brass_concerto"
    )
    global.SwitchPartsPrevious = new $KeyMapping(
        "key.kubejs.switch_parts_previous",
        $GLFWkey.GLFW_KEY_C,
        "key.keybinding.brass_concerto"
    )
    global.SwitchPartsNext = new $KeyMapping(
        "key.kubejs.switch_parts_next",
        $GLFWkey.GLFW_KEY_V,
        "key.keybinding.brass_concerto"
    )
    //客户端初始化时注册按键
    ClientEvents.init(() => {
        $KeyMappingRegistry.register(global.SwitchPartsPrevious)
        $KeyMappingRegistry.register(global.SwitchPartsNext)
        $KeyMappingRegistry.register(global.SwitchParts)
        $KeyMappingRegistry.register(global.RocketPad)
        $KeyMappingRegistry.register(global.FreeCam)
        $KeyMappingRegistry.register(global.SwitchUp)
        $KeyMappingRegistry.register(global.SwitchDown)
        $KeyMappingRegistry.register(global.SwitchLeft)
        $KeyMappingRegistry.register(global.SwitchRight)
    })
}