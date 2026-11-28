JEIAddedEvents.registerRecipes((event) => {
  // 与 registerCategories 中相同
  const typeId = new ResourceLocation('dut_create', 'misc_wrench');
  const recipeBuilder = event.custom(typeId);

  // 添加配方
  recipeBuilder.add({});
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  event.custom('dut_create:misc_wrench', (category) => {
    // 添加上方标题
    category.title(Text.translate('kubejs.jeiaddition.category.misc_wrench.title'));

    // 添加上方小图标
    category.iconSupplier(() => {
      return guiHelper.createDrawableItemStack(Item.of('create:wrench'));
    });

    category.setWidth(200);
    category.setHeight(85);
    category.background(guiHelper.createBlankDrawable(0, 0));

    const inputX = category.getWidth() / 2 - 8;
    const inputY = 10;

    const outputX = category.getWidth() / 2 - (18 * global.battlewrench_type.length) / 2 + 1;
    const outputY = 40;

    // 设置输入输出槽
    category.handleLookup((layoutBuilder, recipe, focuses) => {
      // 普通扳手输入槽
      layoutBuilder
        .addSlot($RecipeIngredientRole.INPUT, inputX, inputY)
        .setBackground(guiHelper.getOutputSlot(), -5, -5)
        .addItemStack(Item.of('create:wrench'));

      // 战斗扳手输出槽
      global.battlewrench_type.forEach((nbt, index) => {
        layoutBuilder
          .addSlot($RecipeIngredientRole.OUTPUT, outputX + index * 18, outputY)
          .setBackground(guiHelper.getSlotDrawable(), -1, -1)
          .addItemStack(Item.withNBT('create:wrench', nbt));
      });
    });

    category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
      const index = Math.floor(global.battlewrench_choosen);
      graphics.fill(
        outputX + index * 18 - 1,
        outputY + 20,
        outputX + (index + 1) * 18 - 1,
        outputY + 23,
        Color.LIME_DYE.argbJS
      );

      drawCenteredString(
        graphics,
        Client.font,
        Text.translate('kubejs.jeiaddition.category.server_refresh.tip'),
        category.getWidth() / 2,
        70,
        Color.WHITE.argbJS,
        true
      )
    });
  });
});
