ServerEvents.recipes(event => {
  //龙食
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "forge:bones" },
      { "tag": "forge:bones" },
      { "tag": "forge:bones" },
      { "tag": "forge:bones" },
      { "tag": "dut_create:dragon_food_meat" },
      { "tag": "dut_create:dragon_food_meat" },
      { "tag": "dut_create:dragon_food_meat" }
    ],
    "results": [
      { "item": "kubejs:dragon_meal" },
    ]
  }).id("dut_create:dragon_meal")
})