NetworkEvents.dataReceived("SwitchParts", event => {
  let p = event.player
  let d = event.data
  let item = p.mainHandItem
  if (item.id != d.item) {
    return
  }
  p.setMainHandItem(Item.of(d.itemTo||d.item,item.count))
  event.level.playSound(null, p.x, p.y, p.z, "entity.item.pickup", "players", 0.4, 1)
})