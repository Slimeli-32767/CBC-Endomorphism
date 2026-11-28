JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'infinite_fluids');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:hose_pulley'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'infinite_fluids');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({});
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:infinite_fluids', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.infinite_fluids.title'));

    // 添加上方小图标
    category.icon(guiHelper.createDrawableItemStack(Item.of('create:hose_pulley')));

    category.setWidth(187);
    category.setHeight(150);
    category.background(guiHelper.createBlankDrawable(0, 0));

    const slotX = 135;
    const slotY = 50;
    const infFluidList = ['minecraft:water', 'minecraft:lava', 'kubejs:saline_water', 'kubejs:cryogen'];

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      for (let i = 0; i < infFluidList.length; i++) {
        // 2 row 2 column
        let x = slotX + (i % 2) * 20;
        let y = slotY + Math.floor(i / 2) * 20;
        layoutBuilder
          .addSlot($RecipeIngredientRole.OUTPUT, x, y)
          .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
          .setFluidRenderer(1000, false, 16, 16) // Capacity, show capacity, width, height
          .addFluidStack(infFluidList[i]);

        layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT).addFluidStack(infFluidList[i]);
      }
    });

    const blockRenderer = new BlockRenderer();
    const hosePulleyRenderer = new HosePulleyRenderer();
    const pumpRenderer = new PumpRenderer();

    hosePulleyRenderer.setSpeedCallback(() => {
      return 0;
    });
    hosePulleyRenderer.setOffsetCallback((_, speed, pt) => {
      return 4;
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const bufferSource = graphics.bufferSource();

      const matrixStack = graphics.pose();

      // 下箭头
      $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 140, 20);

      drawCenteredString(graphics, Client.font, Text.literal('≥ 512'), 153, 120, 0xffffff, true);

      const scale = 25;

      const render = (state, x, y, z) => {
        matrixStack.pushPose();
        matrixStack.translate(x, y, z);
        $UIRenderHelper.flipForGuiRender(matrixStack);
        blockRenderer.render(
          new StructureBlockInfo(new BlockPos(x, y, z), state, null),
          $AnimationTickHolder.getPartialTicks(),
          matrixStack,
          bufferSource
        );
        matrixStack.popPose();
      };

      matrixStack.pushPose();

      // 渲染像素偏移
      matrixStack.translate(50, 32, 100);

      // 渲染轴旋转
      matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
      matrixStack.mulPose($Axis.YP.rotationDegrees(22.5));
      matrixStack.scale(scale, scale, scale);

      const lighting = $AnimatedKinetics.DEFAULT_LIGHTING;

      blockRenderer.beforeRender(matrixStack, lighting);
      const index = JavaMath['floorDiv(int,int)'](
        $AnimationTickHolder.getRenderTime() % (infFluidList.length * 20),
        20
      );

      const renderPulley = (state, x, y, z) => {
        matrixStack.pushPose();
        matrixStack.translate(x, y, z);
        $UIRenderHelper.flipForGuiRender(matrixStack);
        let info = new StructureBlockInfo(new BlockPos(x, y, z), state, null);
        BlockRenderer.renderBlockState(state, matrixStack, bufferSource);
        hosePulleyRenderer.render(info, $AnimationTickHolder.getPartialTicks(), matrixStack, bufferSource);
        matrixStack.popPose();
      };

      renderPulley(
        $AllBlocks.HOSE_PULLEY.getDefaultState().setValue(BlockProperties.HORIZONTAL_FACING, Direction.SOUTH),
        0,
        0,
        0
      );

      const renderPump = (state, x, y, z) => {
        matrixStack.pushPose();
        matrixStack.translate(x, y, z);
        $UIRenderHelper.flipForGuiRender(matrixStack);
        let info = new StructureBlockInfo(new BlockPos(x, y, z), state, null);
        BlockRenderer.renderBlockState(state, matrixStack, bufferSource);
        pumpRenderer.render(info, $AnimationTickHolder.getPartialTicks(), matrixStack, bufferSource);
        matrixStack.popPose();
      };

      renderPump(
        $AllBlocks.MECHANICAL_PUMP.getDefaultState().setValue(BlockProperties.FACING, Direction.EAST),
        1,
        0,
        0
      );

      const fluidBlock = Block.getBlock(infFluidList[index]);

      for (let x = -1; x <= 1; x++) {
        for (let y = 2; y <= 4; y++) {
          for (let z = 1; z >= -1; z--) {
            render(fluidBlock.defaultBlockState(), x, y, z);
          }
        }
      }
      blockRenderer.afterRender(matrixStack, lighting);

      matrixStack.popPose();
    });
  });
});
