const __ENGINE_PREFIX = 'createdieselgenerators:';
const __ENGINE = ['diesel_engine', 'large_diesel_engine', 'huge_diesel_engine'];

JEIAddedEvents.registerRecipeCatalysts((event) => {
  const { data } = event;
  const { jeiHelpers } = data;

  // 添加左侧边栏
  __ENGINE.forEach((engine) => {
    data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
      Item.of(__ENGINE_PREFIX + engine),
      jeiHelpers.getRecipeType(new ResourceLocation('dut_create', engine)).get()
    );
  });
});

JEIAddedEvents.registerRecipes((event) => {
  const builders = __ENGINE.map((engine) => {
    return event.custom(new ResourceLocation('dut_create', engine));
  });

  // 获取配方
  let root = $FMLPaths.GAMEDIR.get();
  let fuelDirectory = $FilePaths.get(
    root.toString(),
    'kubejs/data/createdieselgenerators/diesel_engine_fuel_types'
  );

  try {
    let paths = $Files.list(fuelDirectory).toArray();

    paths.forEach((path) => {
      try {
        if (!$Files.isRegularFile(path) || !path.toString().endsWith('.json')) {
          return;
        }
        let jsonObj = JsonIO.readJson(path).getAsJsonObject();
        let fluid = jsonObj.get('fluid').getAsString();

        let dataObjs = ['normal', 'modular', 'huge'].map((type) => {
          return jsonObj.get(type).getAsJsonObject();
        });

        for (let i = 0; i < 3; ++i) {
          let dataObj = dataObjs[i];
          let recipeBuilder = builders[i];
          // 添加配方
          recipeBuilder.add({
            fuel: fluid,
            burn_rate: dataObj.get('burn_rate').getAsInt(),
            rpm: dataObj.get('speed').getAsDouble(),
            stress: dataObj.get('strength').getAsDouble(),
          });
        }
      } catch (e) {
        console.error('读取燃料数据出错: ' + e + '，位置：' + path.toString());
      }
    });
  } catch (e) {
    console.error('遍历燃料数据出错: ' + e + '，位置：' + fuelDirectory.toString());
  }

  // 彩蛋配方
  for (let i = 0; i < 3; ++i) {
    let recipeBuilder = builders[i];
    // 添加配方
    recipeBuilder.add({
      fuel: 'minecraft:water',
      burn_rate: 1,
      rpm: 16410,
      stress: 19971114,
      special: true,
    });
  }
});

JEIAddedEvents.registerCategories((event) => {
  const { data } = event;
  const { jeiHelpers } = data;
  const { guiHelper } = jeiHelpers;

  /**
   * @param {Internal.GuiGraphics} graphics
   * @param {number} scale
   */
  const drawHugeDieselEngine = (graphics, scale) => {
    const currAngle = $AnimatedKinetics.getCurrentAngle();

    $AnimatedKinetics
      .defaultBlockElement(
        $CDGBlocks.HUGE_DIESEL_ENGINE.getDefaultState().setValue(BlockProperties.FACING, Direction.UP)
      )
      .rotateBlock(0, 90, 0)
      .scale(scale)
      .render(graphics);

    $AnimatedKinetics['defaultBlockElement(com.jozufozu.flywheel.core.PartialModel)'](
      $CDGPartialModels.ENGINE_PISTON_CONNECTOR
    )
      .atLocal(0, -1.25, 0)
      .rotateBlock(-currAngle * 6, 0, 0)
      .scale(scale)
      .render(graphics);
    $AnimatedKinetics['defaultBlockElement(com.jozufozu.flywheel.core.PartialModel)'](
      $CDGPartialModels.ENGINE_PISTON_LINKAGE
    )
      .atLocal(0, JavaMath.cos((currAngle / 30) * JavaMath.PI) / 5 - 1, 0)
      .scale(scale)
      .render(graphics);
    $AnimatedKinetics['defaultBlockElement(com.jozufozu.flywheel.core.PartialModel)'](
      $CDGPartialModels.JEI_ENGINE_PISTON
    )
      .atLocal(0, JavaMath.cos((currAngle / 30) * JavaMath.PI) / 5, 0)
      .scale(scale)
      .render(graphics);
  };

  /**
   * @param {Internal.GuiGraphics} graphics
   * @param {number} scale
   */
  const drawDieselEngine = (graphics, scale) => {
    const currAngle = $AnimatedKinetics.getCurrentAngle();

    let angle = JavaMath.floor((currAngle * 18) % 360) / 36;

    $AnimatedKinetics
      .defaultBlockElement($CDGBlocks.DIESEL_ENGINE.getDefaultState())
      .rotateBlock(0, 90, 0)
      .scale(scale)
      .render(graphics);

    let piston;
    switch (angle) {
      case 5:
      case 6:
        piston = $CDGPartialModels.ENGINE_PISTONS_4;
        break;
      case 4:
      case 7:
        piston = $CDGPartialModels.ENGINE_PISTONS_3;
        break;
      case 3:
      case 8:
        piston = $CDGPartialModels.ENGINE_PISTONS_2;
        break;
      case 2:
      case 9:
        piston = $CDGPartialModels.ENGINE_PISTONS_1;
        break;
      default:
        piston = $CDGPartialModels.ENGINE_PISTONS_0;
        break;
    }
    $AnimatedKinetics['defaultBlockElement(com.jozufozu.flywheel.core.PartialModel)'](piston)
      .rotateBlock(0, 90, 0)
      .scale(scale)
      .render(graphics);
  };

  /**
   * @param {Internal.GuiGraphics} graphics
   * @param {number} scale
   */
  const drawModularDieselEngine = (graphics, scale) => {
    const currAngle = $AnimatedKinetics.getCurrentAngle();

    let angle = JavaMath.floor((currAngle * 18) % 360) / 36;

    $AnimatedKinetics
      .defaultBlockElement($CDGBlocks.MODULAR_DIESEL_ENGINE.getDefaultState())
      .rotateBlock(0, 90, 0)
      .scale(scale)
      .render(graphics);

    let modular_piston;
    switch (angle) {
      case 5:
      case 6:
        modular_piston = $CDGPartialModels.MODULAR_ENGINE_PISTONS_4;
        break;
      case 4:
      case 7:
        modular_piston = $CDGPartialModels.MODULAR_ENGINE_PISTONS_3;
        break;
      case 3:
      case 8:
        modular_piston = $CDGPartialModels.MODULAR_ENGINE_PISTONS_2;
        break;
      case 2:
      case 9:
        modular_piston = $CDGPartialModels.MODULAR_ENGINE_PISTONS_1;
        break;
      default:
        modular_piston = $CDGPartialModels.MODULAR_ENGINE_PISTONS_0;
        break;
    }

    $AnimatedKinetics['defaultBlockElement(com.jozufozu.flywheel.core.PartialModel)'](modular_piston)
      .rotateBlock(0, 90, 0)
      .scale(scale)
      .render(graphics);
  };

  /**
   * @param {Internal.RegisterCategoriesEventJS} event
   * @param {string} engine
   */
  const register = (event, engine) => {
    const itemName = Item.of(__ENGINE_PREFIX + engine).getHoverName();
    const spinButton = new ToggleButton(20, 100, 30, 15, Text.translate('kubejs.jeiaddition.spin'));
    spinButton.setEnableCallback((recipe) => !recipe.recipeData.special);

    event.custom('dut_create:' + engine, (category) => {
      // 添加上方标题
      category.title(
        Text.join([itemName, Text.translate('kubejs.jeiaddition.category.diesel_generator.burn_info')])
      );

      // 添加上方小图标
      category.iconSupplier(() => {
        return guiHelper.createDrawableItemStack(Item.of(__ENGINE_PREFIX + engine));
      });

      category.setWidth(200);
      category.setHeight(125);
      category.background(guiHelper.createBlankDrawable(0, 0));

      const fuelX = 65;
      const fuelY = 38;

      const dataX = 90;
      const dataY = 39;

      const arrowX = dataX + 37;
      const arrowY = dataY + Client.font.lineHeight / 2 - guiHelper.recipeArrowFilled.getHeight() / 2 + 1;

      // 设置输入输出槽
      category.handleLookup((layoutBuilder, recipe, focuses) => {
        /** @type {{fuel: string, burn_rate: number, rpm: number, stress: number}} */
        const data = recipe.recipeData;

        let fuelIngredient;
        if ($String.valueOf(data.fuel).substring(0, 1).equals($String.valueOf('#'))) {
          // tag
          fuelIngredient = $FluidIngredient.fromTag(
            $FluidTags.create(new ResourceLocation(data.fuel.substring(1))),
            data.burn_rate
          );
        } else {
          // 非tag
          fuelIngredient = $FluidIngredient.fromFluid(
            $ForgeRegistries.FLUIDS.getValue(new ResourceLocation(data.fuel)),
            data.burn_rate
          );
        }

        const fluidStacks = fuelIngredient.getMatchingFluidStacks();

        const buckets = fluidStacks
          .stream()
          .filter((e) => e != null)
          .map((e) => Item.of(e.getFluid().getBucket()))
          .toList();

        layoutBuilder
          .addSlot($RecipeIngredientRole.INPUT, fuelX, fuelY)
          .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
          .addItemStacks(buckets);

        layoutBuilder
          .addSlot($RecipeIngredientRole.INPUT, fuelX, fuelY + 20)
          .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
          .setFluidRenderer(data.burn_rate, false, 16, 16)
          .addIngredients($ForgeTypes.FLUID_STACK, fluidStacks);
      });

      category.setDrawHandler(
        (() => {
          /** @type {Map<number, Internal.IDrawableAnimated>} */
          const flameCache = new Map();

          const putWord = (graphics, text, x, y) => {
            drawWordWrap(graphics, Client.font, text, x, y, 200, Color.WHITE.argbJS, true);
          };

          const putWordCenter = (graphics, text, x, y) => {
            drawCenteredString(graphics, Client.font, text, x, y, Color.WHITE.argbJS, true);
          };

          return (recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            /** @type {{fuel: string, burn_rate: number, rpm: number, stress: number}} */
            const data = recipe.recipeData;

            let flame = flameCache.get(data.burn_rate);
            if (flame == null) {
              flame = guiHelper.createAnimatedRecipeFlame(500 / data.burn_rate);
              flameCache.set(data.burn_rate, flame);
            }

            $AllGuiTextures.JEI_SHADOW.render(graphics, 7, 77);

            putWord(graphics, itemName, 10, 10);
            spinButton.draw(recipe, graphics, mouseX, mouseY);
            flame.draw(graphics, fuelX + 8 - flame.getWidth() / 2, fuelY + 41);

            putWord(graphics, Text.literal(data.burn_rate + ' mB/s'), dataX, dataY);
            guiHelper.recipeArrowFilled.draw(graphics, arrowX, arrowY);
            putWord(
              graphics,
              Text.literal(data.stress + ' su'),
              arrowX + guiHelper.recipeArrowFilled.getWidth() + 3,
              dataY
            );

            putWordCenter(
              graphics,
              Text.literal((data.stress / data.burn_rate).toFixed(2).replace(/\.0*$/, '') + ' su*s/mB'),
              arrowX + guiHelper.recipeArrowFilled.getWidth() / 2,
              dataY + 18
            );
            putWordCenter(
              graphics,
              Text.literal('@ ' + data.rpm + ' RPM'),
              arrowX + guiHelper.recipeArrowFilled.getWidth() / 2,
              dataY + 35
            );

            if (data.special) {
              drawRightAlignedString(
                graphics,
                Client.font,
                Text.translate('kubejs.jeiaddition.category.diesel_generator.special'),
                category.getWidth() - 10,
                category.getHeight() - 10 - Client.font.lineHeight,
                Color.GRAY.argbJS,
                false
              );
            }

            const matrixStack = graphics.pose();
            matrixStack.pushPose();
            matrixStack.translate(21, 80, 1000);

            let scale = 25;
            const currAngle = data.special
              ? $AnimatedKinetics.getCurrentAngle() * 5
              : $AnimatedKinetics.getCurrentAngle();

            matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5));
            matrixStack.translate(scale / 2, 0, scale / 2);
            if (data.special) {
              matrixStack.mulPose($Axis.YP.rotationDegrees(22.5 + 90 + currAngle * 2));
            } else {
              matrixStack.mulPose(
                $Axis.YP.rotationDegrees(22.5 + 90 + (spinButton.getState() ? currAngle * 2 : 0))
              );
            }
            matrixStack.translate(-scale / 2, 0, -scale / 2);

            $AnimatedKinetics
              .defaultBlockElement(
                $AllBlocks.SHAFT.getDefaultState().setValue(BlockProperties.AXIS, $Direction.Axis.X)
              )
              .atLocal(0, engine === 'huge_diesel_engine' ? -1.25 : 0, 0)
              .rotateBlock(-currAngle * 6, 0, 0)
              .scale(scale)
              .render(graphics);

            switch (engine) {
              case 'diesel_engine':
                drawDieselEngine(graphics, scale);
                break;
              case 'large_diesel_engine':
                drawModularDieselEngine(graphics, scale);
                break;
              case 'huge_diesel_engine':
                drawHugeDieselEngine(graphics, scale);
                break;
            }

            matrixStack.popPose();
          };
        })()
      );

      category.setInputHandler((recipe, mouseX, mouseY, input) => {
        return spinButton.handleInput(recipe, mouseX, mouseY, input);
      });

      const burnRateTooltip = new StaticRectengularTooltip(dataX, dataY, 30, Client.font.lineHeight);
      const stressTooltip = new StaticRectengularTooltip(arrowX + guiHelper.recipeArrowFilled.getWidth() + 3, dataY, 50, Client.font.lineHeight);
      const efficiencyTooltip = new StaticRectengularTooltip(arrowX + guiHelper.recipeArrowFilled.getWidth() / 2 - 35, dataY + 18, 70, Client.font.lineHeight);
      const rpmTooltip = new StaticRectengularTooltip(arrowX + guiHelper.recipeArrowFilled.getWidth() / 2 - 35, dataY + 35, 70, Client.font.lineHeight);

      burnRateTooltip.addTranslate('kubejs.jeiaddition.category.diesel_generator.burn_rate');
      stressTooltip.addTranslate('kubejs.jeiaddition.category.diesel_generator.stress');
      efficiencyTooltip.addTranslate('kubejs.jeiaddition.category.diesel_generator.efficiency');
      rpmTooltip.addTranslate('kubejs.jeiaddition.category.diesel_generator.speed');

      category.setTooltipHandlerOverride((tooltipBuilder, recipe, recipeSlotsView, mouseX, mouseY) => {
        burnRateTooltip.handleTooltip(tooltipBuilder, mouseX, mouseY);
        stressTooltip.handleTooltip(tooltipBuilder, mouseX, mouseY);
        efficiencyTooltip.handleTooltip(tooltipBuilder, mouseX, mouseY);
        rpmTooltip.handleTooltip(tooltipBuilder, mouseX, mouseY);
      });
    });
  };

  __ENGINE.forEach((engine) => {
    register(event, engine);
  });
});
