JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'dragon_line');
  const recipeType = jeiHelpers.getRecipeType(typeId).get();

  // 添加左侧边栏
  data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
    Item.of('kubejs:alloy_furnace'),
    recipeType
  );
});

JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'dragon_line');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  [
    {
      index: 0,
      input: 'kubejs:dragonscales_red',
      output1: 'kubejs:fire_dragon_heart',
      output2: 'kubejs:fire_dragon_flesh',
    },
    {
      index: 1,
      input: 'kubejs:fire_dragon_heart',
      output1: 'kubejs:fire_dragon_flesh',
      output2: 'kubejs:fire_dragon_blood',
    },
    {
      index: 2,
      input: 'kubejs:fire_dragon_flesh',
      output1: 'kubejs:fire_dragon_blood',
      output2: 'kubejs:dragonscales_red',
    },
    {
      index: 3,
      input: 'kubejs:fire_dragon_blood',
      output1: 'kubejs:dragonscales_red',
      output2: 'kubejs:fire_dragon_heart',
    },
  ].forEach((recipe) => recipeBuilder.add(recipe));
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:dragon_line', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.dragon_line.title'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return guiHelper.createDrawableItemStack(Item.of('kubejs:fire_dragon_heart'));
    });

    category.setWidth(200);
    category.setHeight(45);
    category.background(guiHelper.createBlankDrawable(0, 0));

    const inputX = 10;
    const inputY = 10;

    const recipeArrow = guiHelper.createAnimatedRecipeArrow(20);
    const recipeArrowX = inputX + 18 + 10;
    const recipeArrowY = inputY + 8 - recipeArrow.getHeight() / 2;

    const outputX = recipeArrowX + recipeArrow.getWidth() + 10;
    const outputY = inputY;

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      /** @type {{index: number, input: string, output1: string, output2: string}} */
      const data = recipe.recipeData;

      // 输入槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, inputX, inputY)
        .setBackground(guiHelper.getSlotDrawable(), -1, -1)
        .addItemStack(Item.of(data.input, 12));

      // 流体输出槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, outputX, outputY)
        .setFluidRenderer(1000, false, 16, 16)
        .addFluidStack('vintageimprovements:sulfuric_acid', 1000);

      // 输出槽1
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, outputX + 18, outputY)
        .setBackground(guiHelper.getSlotDrawable(), -1, -1)
        .addTooltipCallback((slotView, tooltip) => {
          tooltip.add(
            1,
            Text.translate('kubejs.jeiaddition.count', '#n = ' + global.dragon_info[data.index][0])
          );
          tooltip.add(2, Text.translate('kubejs.jeiaddition.probability', '75'));
        })
        .addItemStack(Item.of(data.output1, global.dragon_info[data.index][0]));

      // 输出槽2
      layoutBuilder
        .addSlot($RecipeIngredientRole.OUTPUT, outputX + 36, outputY)
        .setBackground(guiHelper.getSlotDrawable(), -1, -1)
        .addTooltipCallback((slotView, tooltip) => {
          tooltip.add(
            1,
            Text.translate(
              'kubejs.jeiaddition.count',
              '#m - #n = ' +
                (global.dragon_info[data.index][1] +
                  ' - ' +
                  global.dragon_info[data.index][0] +
                  ' = ' +
                  (global.dragon_info[data.index][1] - global.dragon_info[data.index][0]))
            )
          );
          tooltip.add(2, Text.translate('kubejs.jeiaddition.probability', '25'));
        })
        .addItemStack(
          Item.of(data.output2, global.dragon_info[data.index][1] - global.dragon_info[data.index][0])
        );
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      recipeArrow.draw(graphics, recipeArrowX, recipeArrowY);

      // 流体槽背景渲染
      drawFluidSlotBackground(graphics, outputX, outputY);

      drawWordWrap(
        graphics,
        Client.font,
        Text.literal('#n ∈ [9, 12]'),
        130,
        9,
        1000,
        Color.WHITE.argbJS,
        true
      );
      drawWordWrap(
        graphics,
        Client.font,
        Text.literal('#m ∈ [20, 24]'),
        130,
        19,
        1000,
        Color.WHITE.argbJS,
        true
      );
      drawCenteredString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.category.server_refresh.tip'),
        category.getWidth() / 2,
        33,
        Color.WHITE.argbJS,
        true
      );
    });
  });
});
