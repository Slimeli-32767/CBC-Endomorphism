Ponder.registry((event) => {
  event
    .create(["createandesiteabound:fluid_vessel"])
    .tag("kubejs:machine_and_multiblock")
    .scene(
      "kubejs:use_cartridge_canister",
      "定装液罐的使用",
      "kubejs:cartridge_canister",
      (scene, utils) => {
        scene.scaleSceneView(1);
        scene.configureBasePlate(0, 0, 9);
        scene.showStructure(0);
        scene.world.showIndependentSectionImmediately([4, 1, 4])
        scene.idle(20);
        scene.addKeyframe();
        scene.text(60, "定装液罐是一种比桶更加好用的流体潜影盒，它可以随意放出收起！");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(80, "首先，它能与储罐、分液池、注液器等设备直接交互");
        scene.world.showSection([6, 1, 6, 6, 3, 6], Direction.down)
        scene.idle(10);
        scene.world.showSection([4, 1, 6], Direction.down)
        scene.idle(10);
        scene.world.showSection([2, 1, 6, 2, 3, 6], Direction.down)
        scene.overlay.showOutline("green", { "glue": true }, [6, 3, 6], 15);
        scene.showControls(20, [6, 3.5, 6], "down").withItem(Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:16000,FluidName:"kubejs:saline_water"}}')).rightClick()
        scene.world.modifyTileNBT([6, 1, 6], (nbt) => {
          nbt.TankContent = { Amount: 16000, FluidName: "kubejs:saline_water" }
        }, true)
        scene.idle(30);
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 6], 15);
        scene.showControls(20, [4, 2.5, 6], "down").withItem(Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:1000,FluidName:"create_things_and_misc:slime"}}')).rightClick()
        scene.world.modifyTileNBT([4, 1, 6], (nbt) => {
          nbt.Tanks = [{ Level: { Speed: 0.25, Target: 1.0, Value: 0.75 }, TankContent: { Amount: 1000, FluidName: "create_things_and_misc:slime" } }]
        }, true)
        scene.idle(30);
        scene.overlay.showOutline("green", { "glue": true }, [2, 3, 6], 15);
        scene.showControls(20, [2, 4, 6], "down").withItem(Item.of('createandesiteabound:fluid_vessel', '{Content:{Amount:2000,FluidName:"create:honey"}}')).rightClick()
        scene.world.modifyTileNBT([2, 3, 6], (nbt) => {
          nbt.Tanks = [{ Level: { Speed: 0.25, Target: 1.0, Value: 0.75 }, TankContent: { Amount: 2000, FluidName: "create:honey" } }]
        }, true)
        scene.world.modifyTileNBT([2, 3, 6], (nbt) => {
          nbt.ProcessingTicks = 20
        }, true)
        scene.idle(20);
        scene.world.modifyTileNBT([2, 3, 6], (nbt) => {
          nbt.Tanks = [{ Level: { Speed: 0.25, Target: 0.5, Value: 0.75 }, TankContent: { Amount: 1000, FluidName: "create:honey" } }]
        }, true)
        scene.world.removeItemsFromBelt([2, 1, 6])
        scene.world.createItemOnBeltLike([2, 1, 6], Direction.down, 'create:honey_bucket')
        scene.idle(10);
        scene.addKeyframe();
        scene.text(60, "当它被放置在地上时，它是一个开放容器——因而工作盆、传送带可以向其自动输出！");
        scene.world.showSection([5, 2, 4], Direction.down)
        scene.idle(80);
        scene.addKeyframe();
        scene.text(80, "最后，装有岩浆的定装液罐可以销毁放入其中的物品或流体！");
        scene.world.showSection([4, 1, 2], Direction.down)
        scene.idle(10);
        scene.overlay.showOutline("green", { "glue": true }, [4, 1, 2], 15);
        scene.showControls(20, [4.5, 2, 2.5], "down").withItem('minecraft:lava_bucket').rightClick()
        scene.world.modifyTileNBT([4, 1, 2], (nbt) => {
          nbt.Tanks = [{ Level: { Speed: 0.25, Target: 0.0625, Value: 0.0625 }, TankContent: { Amount: 1000, FluidName: "minecraft:lava" } }]
        }, true)
        scene.idle(30);
        scene.world.showSection([5, 1, 2, 7, 2, 2], Direction.down)
        scene.idle(20);
        scene.world.createItemOnBelt([6, 1, 2], Direction.down, Item.of('minecraft:player_head', '{SkullOwner:{Name:"Slimeli_",Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTc0Nzk4NzQzMzcyNCwKICAicHJvZmlsZUlkIiA6ICI1MTgyMDY2N2I3MzQ0M2M0YTlkNDM0YjcxMzIyYmJiOCIsCiAgInByb2ZpbGVOYW1lIiA6ICJTbGltZWxpXyIsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9kYTNiYjQ5NjUyZDkzMDgzZDY3NzI4ODc2YWRiZTVmOWU1OTI3ZTAxNzUzNmU4YTFkYzA2MGQ5NDI3ZjBlODc0IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0sCiAgICAiQ0FQRSIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvY2Q5ZDgyYWIxN2ZkOTIwMjJkYmQ0YTg2Y2RlNGMzODJhNzU0MGUxMTdmYWU3YjlhMjg1MzY1ODUwNWE4MDYyNSIKICAgIH0KICB9Cn0="}]}}}'))
        scene.idle(10);
        scene.world.removeItemsFromBelt([5, 1, 2])
        scene.world.createItemOnBelt([6, 1, 2], Direction.down, 'minecraft:bone')
        scene.idle(10);
        scene.world.removeItemsFromBelt([5, 1, 2])
        scene.world.createItemOnBelt([6, 1, 2], Direction.down, 'minecraft:rotten_flesh')
        scene.idle(10);
        scene.world.removeItemsFromBelt([5, 1, 2])
        scene.world.createItemOnBelt([6, 1, 2], Direction.down, 'kubejs:productivity_module_3')
        scene.idle(10);
        scene.world.removeItemsFromBelt([5, 1, 2])
        scene.idle(20);

      }
    );
});