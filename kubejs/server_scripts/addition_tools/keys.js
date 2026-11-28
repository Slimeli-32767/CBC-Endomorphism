// priority: 128
NetworkEvents.dataReceived("isPlayerAltDown", event => {
    event.player.persistentData.Alt = event.data.Alt
})