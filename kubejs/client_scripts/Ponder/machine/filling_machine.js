Ponder.registry((event) => {
  event
    .create(["createandesiteabound:filling_machine", "createandesiteabound:fluid_vessel"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:filling_machine_basic",
      "高速装罐机",
      "kubejs:filling_machine_basic",
      (scene, utils) => {
        scene.scaleSceneView(1);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showIndependentSectionImmediately([4, 2, 4])
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "高速装罐机是一种精确便捷的液体转物品手段！你可以精确配置其液体装罐量(5mB~16B)！");
        scene.idle(60);
        scene.world.showSection([4, 3, 4, 4, 5, 4], Direction.down)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "在接收到红石信号后，它能够快速从上方的容器中提取流体，并凭空产生定装液罐将其封装！");
        scene.idle(20);
        scene.world.showSection([5, 2, 4, 5, 2, 3], Direction.down)
        scene.idle(20);
        scene.overlay.showOutline("red", { "glue": true }, [5, 2, 3], 15);
        scene.showControls(15, [5, 2, 3], "up").rightClick()
        scene.world.modifyBlock([5, 2, 3], state => state.with("powered", "true"), false)
        scene.overlay.showOutline("green", { "glue": true }, [4, 3, 4], 30);
        scene.world.modifyTileNBT([4, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 80000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([4, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 64000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([4, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 48000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([4, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 32000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([4, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 16000, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(5);
        scene.world.modifyTileNBT([4, 3, 4], (nbt) => {
          nbt.TankContent = { Amount: 0, FluidName: "kubejs:slime_colloid" }
        }, true)
        scene.idle(35);
        scene.addKeyframe();
        scene.text(60, "使用漏斗可以每次提取一个定装液罐");
        scene.world.showSection([3, 1, 4, 0, 2, 4], Direction.down)
        scene.idle(20);
        scene.world.createItemOnBelt([3, 1, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([3, 1, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([3, 1, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([3, 1, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([3, 1, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([3, 1, 4], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(15);
        scene.world.hideSection([3, 1, 4, 0, 2, 4], Direction.up)
        scene.world.hideSection([4, 3, 4, 4, 5, 4], Direction.up)
        scene.idle(20);
        let link = scene.world.showIndependentSection([4, 8, 4], Direction.down, 20)
        scene.world.moveSection(link, [0, -5, 0], 20)
        scene.addKeyframe();
        scene.text(60, "除此以外，装罐机还能向后方自动输出定装液罐！(如果有充足空间，能够一次性全部输出)");
        scene.rotateCameraY(-90);
        scene.idle(20);
        scene.world.showSection([4, 2, 5, 4, 3, 8], Direction.down)
        scene.overlay.showOutline("green", { "glue": true }, [4, 2, 5], 30);
        scene.idle(20);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.rotateCameraY(90);
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.idle(5);
        scene.world.createItemOnBelt([4, 2, 5], Direction.down, Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:slime_colloid"}}'))
        scene.overlay.showOutline("red", { "glue": true }, [5, 2, 3], 15);
        scene.showControls(15, [5, 2, 3], "up").rightClick()
        scene.world.modifyBlock([5, 2, 3], state => state.with("powered", "false"), false)
        scene.idle(20);
      }
    );event
    .create(["createandesiteabound:filling_machine", "createandesiteabound:fluid_vessel"])
    .tag("kubejs:create_basic_automatic")
    .scene(
      "kubejs:filling_machine_destroy",
      "利用高速装罐机进行流体销毁",
      "kubejs:filling_machine_destroy",
      (scene, utils) => {
        scene.scaleSceneView(0.8);
        scene.configureBasePlate(0, 0, 9);
        scene.setSceneOffsetY(-1)
        scene.showStructure(0);
        scene.world.showIndependentSectionImmediately([3, 3, 3, 5, 8, 5])
        scene.world.showSection([7, 1, 7], Direction.down)
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "有时你会遇到需要快速销毁大量液体的情况——这时高速装罐机和定装液罐就能派上用场！");
        scene.overlay.showOutline("red", { "glue": true }, [3, 3, 3, 5, 8, 5], 15);
        scene.idle(80);
        scene.addKeyframe();
        scene.text(60, "在储罐下方放置高速装罐机，并让其自动输出口对准一个带有岩浆的定装液罐...");
        scene.world.showSection([3, 2, 3], Direction.down)
        scene.idle(20);
        scene.overlay.showOutline("red", { "glue": true }, [2, 2, 3], 15);
        scene.world.showSection([2, 2, 3], Direction.down)
        scene.idle(20);
        scene.overlay.showOutline("green", { "glue": true }, [2, 2, 3], 15);
        scene.showControls(20, [2.5, 3, 3.5], "down").withItem('minecraft:lava_bucket').rightClick()
        scene.world.modifyTileNBT([2, 2, 3], (nbt) => {
          nbt.Tanks = [{ Level: { Speed: 0.25, Target: 0.0625, Value: 0.0625 }, TankContent: { Amount: 1000, FluidName: "minecraft:lava" } }]
        }, true)
        scene.idle(40);
        scene.addKeyframe();
        scene.text(40, "接下来只需通入红石信号即可持续销毁！");
        scene.idle(60);
        scene.addKeyframe();
        scene.text(60, "如果还需要控制储罐存量的话，你可以使用存量转信器！");
        scene.rotateCameraY(90);
        scene.idle(20);
        scene.overlay.showOutline("green", { "glue": true }, [4, 2, 3], 15);
        scene.world.showSection([4, 2, 3], Direction.up)
        scene.idle(20);
        scene.world.hideSection([4, 2, 3], Direction.down)
        scene.idle(40);
      }
    );
});