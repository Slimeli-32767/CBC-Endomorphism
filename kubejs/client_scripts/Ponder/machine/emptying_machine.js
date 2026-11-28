Ponder.registry((event) => {
  event
    .create(["createandesiteabound:emptying_machine", "createandesiteabound:fluid_vessel"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:emptying_machine_basic",
      "高速卸罐机",
      "kubejs:emptying_machine_basic",
      (scene, utils) => {
        scene.scaleSceneView(1);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.setSceneOffsetY(-1)
        let emptying_machine = scene.world.showIndependentSectionImmediately([4, 2, 4])
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "高速卸罐机能够高效地将定装液罐中的流体排出！");
        scene.idle(60);
        scene.world.moveSection(emptying_machine, [0, 2, 0], 20)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "在输入定装液罐后，它会严格按照输入顺序将流体排入下方容器，并销毁多余的定装液罐！")
        let tank = scene.world.showIndependentSection([6, 1, 3, 8, 3, 5], Direction.east, 20)
        scene.world.moveSection(tank, [-3, 0, 0], 20)
        scene.world.showSection([5, 5, 4, 0, 6, 4], Direction.down)
        scene.idle(20);
        scene.overlay.showOutline("green", { "glue": true }, [3, 1, 3, 5, 3, 5], 20);
        scene.idle(5);
        scene.world.createItemOnBelt([0, 5, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:cryogen"}}'))
        scene.idle(5);
        scene.world.removeItemsFromBelt([3, 5, 4])
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 16000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.world.createItemOnBelt([0, 5, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:cryogen"}}'))
        scene.idle(5);
        scene.world.removeItemsFromBelt([3, 5, 4])
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.world.createItemOnBelt([0, 5, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:cryogen"}}'))
        scene.idle(5);
        scene.world.removeItemsFromBelt([3, 5, 4])
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 48000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.world.createItemOnBelt([0, 5, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:cryogen"}}'))
        scene.idle(5);
        scene.world.removeItemsFromBelt([3, 5, 4])
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 64000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.world.createItemOnBelt([0, 5, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:cryogen"}}'))
        scene.idle(5);
        scene.world.removeItemsFromBelt([3, 5, 4])
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 80000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.idle(10);
        scene.world.removeItemsFromBelt([3, 5, 4])
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 96000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.world.hideSection([5, 5, 4, 0, 6, 4], Direction.up)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "使用漏斗等元件每次只能放入一个定装液罐，但卸罐机的自动IO则不然！");
        scene.idle(40);
        scene.rotateCameraY(-90);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "卸罐机可以从背面的容器中自动提取定装液罐，一次可以提取至多9罐！");
        scene.world.showSection([4, 4, 5, 4, 4, 8], Direction.down)
        scene.idle(20);
        scene.overlay.showOutline("green", { "glue": true }, [4, 4, 5], 20);
        scene.idle(5);
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 240000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 384000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 528000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 672000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 816000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([6, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 864000, FluidName: "kubejs:cryogen" }
        }, true)
        scene.idle(10);
        scene.rotateCameraY(90);
        scene.idle(20);
      }
    );
  event
    .create(["createandesiteabound:emptying_machine", "createandesiteabound:filling_machine", "createandesiteabound:fluid_vessel"])
    .tag("kubejs:create_basic_automatic")
    .scene(
      "kubejs:filling_emptying",
      "快速装卸",
      "kubejs:filling_emptying",
      (scene, utils) => {
        scene.scaleSceneView(1);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.setSceneOffsetY(-1)
        scene.addKeyframe();
        scene.text(60, "有时你需要快速转移流体——装卸罐机就可以帮你做到这一点！");
        scene.idle(20);
        scene.world.showSection([3, 3, 4, 2, 5, 5], Direction.down)
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "在输入储罐下方放置一个装罐机")
        scene.overlay.showOutline("red", { "glue": true }, [3, 3, 4, 2, 5, 5], 20);
        scene.idle(20);
        scene.overlay.showOutline("green", { "glue": true }, [3, 2, 4], 30);
        scene.world.showSection([3, 2, 4], Direction.up)
        scene.idle(20);
        scene.rotateCameraY(60);
        scene.idle(40);
        scene.addKeyframe();
        scene.text(60, "接下来，在装罐机背面放置一个卸罐机，让它们“背对背拥抱”！")
        scene.overlay.showOutline("green", { "glue": true }, [4, 2, 4], 20);
        scene.idle(20);
        scene.world.showSection([4, 2, 4], Direction.down)
        scene.idle(20);
        scene.world.showSection([4, 1, 3, 6, 1, 5], Direction.down)
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 3, 6, 1, 5], 20);
        scene.idle(60);
        scene.addKeyframe();
        scene.text(40, "当此机器工作时，装罐机会首先吸取液体并产生定装液罐");
        scene.idle(20);
        scene.overlay.showOutline("red", { "glue": true }, [3, 3, 4, 2, 5, 5], 40);
        scene.idle(20);
        scene.showControls(40, [3.5, 2, 4.5], "up").withItem(Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(20);
        scene.addKeyframe();
        scene.text(40, "接下来，装卸罐机的自动IO会把定装液罐运输至卸罐机中");
        scene.idle(20);
        scene.showControls(60, [4.5, 2.5, 4.5], "down").withItem(Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(40);
        scene.addKeyframe();
        scene.text(40, "然后，液体就将被卸至输出储罐！");
        scene.idle(20);
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 3, 6, 1, 5], 20);
        scene.idle(40);
        scene.world.showSection([2, 2, 4, 2, 2, 3], Direction.south)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(40, "当实际工作时，它看起来是这样的：");
        scene.idle(10);
        scene.overlay.showOutline("red", { "glue": true }, [2, 2, 3], 15);
        scene.showControls(15, [2, 2, 3], "up").rightClick()
        scene.world.modifyBlock([2, 2, 3], state => state.with("powered", "true"), false)
        scene.idle(1);
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 352000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 16000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);

        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 336000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);

        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 320000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 48000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 304000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 64000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 288000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 80000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 272000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 96000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 256000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 112000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 240000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 128000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 224000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 144000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 208000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 160000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 192000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 176000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 176000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 192000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 160000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 208000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 144000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 224000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 128000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 240000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 112000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 256000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 96000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 272000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        scene.world.modifyTileNBT([2, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 80000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.world.modifyTileNBT([4, 1, 3], (nbt) => {
          nbt.TankContent = { Amount: 288000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        
        
        scene.idle(10);
      }
    );
});