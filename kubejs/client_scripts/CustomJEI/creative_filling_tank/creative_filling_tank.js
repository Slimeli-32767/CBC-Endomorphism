JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'create_filling_tank_show');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:spout'),
    recipeType
  );
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('create:deployer'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'create_filling_tank_show');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({});
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:create_filling_tank_show', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.create_filling_tank_show.title'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return guiHelper.createDrawableItemStack(Item.of('create_sa:creative_filling_tank'));
    });

    category.setWidth(200);
    category.setHeight(155);
    category.background(guiHelper.createBlankDrawable(0, 0));

    const inputX = 10;
    const inputY = 10;

    const ingredientX = category.getWidth() / 2 - 80;
    const ingredientY = 40;

    const outputX = 60;
    const outputY = 10;

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      // 储罐输入槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, inputX, inputY)
        .setBackground(guiHelper.getSlotDrawable(), -1, -1)
        .addItemStack(Item.of('create_sa:large_filling_tank'));

      // 原料输入槽
      global.RandomRecipeListOrign.forEach((entry, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;
        const coorX = ingredientX + col * 18;
        const coorY = ingredientY + row * 18;
        const input = entry.input;

        if (entry.type === 'create:filling') {
          layoutBuilder
            .addSlot($RecipeIngredientRole.INPUT, coorX, coorY)
            .setBackground(guiHelper.getSlotDrawable(), -1, -1)
            .setFluidRenderer(input.amount, false, 16, 16)
            .addTooltipCallback((slotView, tooltip) => {
              tooltip.add(1, Text.translate('kubejs.jeiaddition.category.create_filling_tank_show.by_spout'));
            })
            .addFluidStack(input.fluid, input.amount);
        } else {
          layoutBuilder
            .addSlot($RecipeIngredientRole.INPUT, coorX, coorY)
            .setBackground(guiHelper.getSlotDrawable(), -1, -1)
            .addTooltipCallback((slotView, tooltip) => {
              tooltip.add(
                1,
                Text.translate('kubejs.jeiaddition.category.create_filling_tank_show.by_deployer')
              );
            })
            .addItemStack(Item.of(input.item));
        }
      });

      // 产物输出槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, outputX, outputY)
        .setBackground(guiHelper.getSlotDrawable(), -1, -1)
        .addItemStack(Item.of('create_sa:creative_filling_tank'));
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      guiHelper.recipeArrowFilled.draw(
        graphics,
        (inputX + 17 + outputX) / 2 - guiHelper.recipeArrowFilled.getWidth() / 2,
        inputY + 8 - guiHelper.recipeArrowFilled.getHeight() / 2
      );

      // 处理步骤数
      drawWordWrap(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.category.create_filling_tank_show.step_count'),
        10,
        103,
        500,
        Color.WHITE.argbJS,
        true
      );

      // 装配循环数
      $AllIcons.I_SEQ_REPEAT.render(graphics, 5, 115);
      drawWordWrap(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.category.create_filling_tank_show.loop_count'),
        25,
        119,
        500,
        Color.WHITE.argbJS,
        true
      );

      // 随机提示
      drawCenteredString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.category.server_refresh.tip'),
        category.getWidth() / 2,
        140,
        Color.WHITE.argbJS,
        true
      );
    });

    const tooltip = new StaticRectengularTooltip(10, 120, 160, 20);
    tooltip.addLiteral('1: 15/26').addLiteral('2-6: 1/13').addLiteral('7: 1/26');

    category.setTooltipHandlerOverride((tooltipBuilder, recipe, recipeSlotsView, mouseX, mouseY) => {
      tooltip.handleTooltip(tooltipBuilder, mouseX, mouseY);
    });
  });
});
