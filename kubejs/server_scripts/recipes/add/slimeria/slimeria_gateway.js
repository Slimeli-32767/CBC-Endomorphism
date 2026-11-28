ServerEvents.recipes(event => {
  const gatewayStructure = {
    "type": "custommachinery:general_structure",
    "id": "opengate"
  }
  const gatewayWorkingStructure = {
    "type": "custommachinery:general_structure",
    "id": "work"
  }
  const emptySound = {
    "type": "custommachinery:sound",
    "phase": "starting",
    "sound": "ad_astra:gravity_normalizer_idle",
    "pos": [0, -5, 0],
    "volume": 0.8,
    "pitch": 1.6,
    "minVolume": 0.6,
    "chance": 0.75
  }
  const fillSound1 = {
    "type": "custommachinery:sound",
    "phase": "ending",
    "sound": "minecraft:block.enchantment_table.use",
    "pos": [0, -7, 0],
    "volume": 1,
    "pitch": 1,
    "radius": 32,
    "minVolume": 0.8
  }
  const fillSound2 = {
    "type": "custommachinery:sound",
    "phase": "starting",
    "sound": "minecraft:music_disc.relic",
    "pos": [0, -7, 0],
    "volume": 0.8,
    "radius": 48
  }
  const fillSound3 = {
    "type": "custommachinery:sound",
    "phase": "crafting_tickable",
    "sound": "minecraft:block.end_portal_frame.fill",
    "pos": [0, -7, 0],
    "chance": 0.1,
    "radius": -1
  }
  const emptyParticle = {
    "type": "custommachinery:command",
    "phase": "starting",
    "command": "/summon marker ~ ~ ~ {Tags:[\"dut_ring_electric\",\"dut_ring\"]}",
    "log": false,
    "permissionlevel": 5
  }
  const emptyParticle1 = {
    "type": "custommachinery:command",
    "phase": "starting",
    "command": "/summon marker ~ ~ ~ {Tags:[\"dut_ring_end\",\"dut_ring\"]}",
    "log": false,
    "permissionlevel": 5
  }
  const teleportParticle = {
    "type": "custommachinery:command",
    "phase": "starting",
    "command": "/summon marker ~ ~-7 ~ {Tags:[\"dut_connect_line\"]}",
    "log": false,
    "permissionlevel": 5
  }
  const fillParticle1 = {
    "type": "custommachinery:particle",
    "phase": "ending",
    "particle": "createbigcannons:spark 20 20 20",
    "pos": [0, -7, 0],
    "delta": [0.75, 0.75, 0.75],
    "speed": 0.8,
    "count": 128,
    "force": true
  }
  const fillParticle2 = {
    "type": "custommachinery:particle",
    "phase": "starting",
    "particle": "create:cube 200 25 25 1 30 false",
    "pos": [0, -7, 0],
    "force": true
  }
  const fillParticle3 = {
    "type": "custommachinery:particle",
    "phase": "starting",
    "particle": "create:cube 50 25 25 0.75 30 false",
    "pos": [0, -7, 0],
    "force": true
  }
  const fillParticle4 = {
    "type": "custommachinery:particle",
    "phase": "crafting_tickable",
    "particle": "create:cube 180 200 25 1 30 false",
    "chance": 0.25,
    "pos": [0, -7, 0],
    "force": true
  }
  const fillParticle5 = {
    "type": "custommachinery:particle",
    "phase": "starting",
    "particle": "create:cube 40 50 25 0.75 30 false",
    "pos": [0, -7, 0],
    "force": true
  }
  const fillParticle6 = {
    "type": "custommachinery:particle",
    "phase": "crafting_tickable",
    "particle": "minecraft:sculk_soul",
    "pos": [0, -7, 0],
    "delta": [7, 7, 7],
    "count": 4,
    "force": true
  }
  const fillParticle7 = {
    "type": "custommachinery:particle",
    "phase": "crafting_tickable",
    "particle": "createbigcannons:spark 20 20 20",
    "pos": [0, -7, 0],
    "delta": [0.25, 0.25, 0.25],
    "speed": 1.25,
    "count": 6,
    "force": true
  }
  const fillParticle8 = {
    "type": "custommachinery:particle",
    "phase": "crafting_tickable",
    "particle": "create:cube 160 180 25 0.875 30 false",
    "chance": 0.25,
    "pos": [0, -7, 0],
    "force": true
  }
  const gateOpened = {
    "type": "custommachinery:block",
    "mode": "output",
    "action": "replace_destroy",
    "amount": 3,
    "pos": [0, -6, 0, 0, -8, 0],
    "filter": "minecraft:end_gateway",
    "whitelist": true,
    "block": "minecraft:air"
  }
  const gateClosed = {
    "type": "custommachinery:block",
    "mode": "input",
    "action": "check",
    "amount": 3,
    "pos": [0, -6, 0, 0, -8, 0],
    "filter": "minecraft:end_gateway",
    "whitelist": false
  }
  function gatewayItem(item, amount, mode) {
    return ({
      "type": "custommachinery:item",
      "mode": mode,
      "item": item,
      "amount": amount
    })
  }
  function gatewayFluid(amount, mode, tank) {
    return ({
      "type": "custommachinery:fluid",
      "mode": mode,
      "fluid": "kubejs:covariant_heat",
      "amount": amount,
      "tank": tank
    })
  }
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:slimeria_gateway",
    "time": 20,
    "hidden": true,
    "error": false,
    "requirements": [
      gatewayStructure,
      emptyParticle,
      emptySound,
      gateClosed
    ]
  }).id("dut_create:slimeria_gateway/empty")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:slimeria_gateway",
    "time": 20,
    "hidden": true,
    "error": false,
    "requirements": [
      gatewayWorkingStructure,
      emptyParticle1,
      emptySound,
      gateOpened
    ]
  }).id("dut_create:slimeria_gateway/empty_1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:slimeria_gateway",
    "time": 40,
    "hidden": true,
    "error": false,
    "priority": 100,
    "requirements": [
      gateClosed,
      gatewayStructure,
      emptyParticle,
      fillParticle1,
      fillParticle2,
      fillParticle3,
      fillSound1,
      gatewayItem("kubejs:electro_hydro_capacitor", 64, "input"),
      gatewayItem("kubejs:steel_parts_box", 64, "input"),
      gatewayFluid(1000, "output", "heat1")
    ]
  }).id("dut_create:slimeria_gateway/input_stage_1")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:slimeria_gateway",
    "time": 40,
    "hidden": true,
    "error": false,
    "priority": 10,
    "requirements": [
      gateClosed,
      gatewayStructure,
      emptyParticle1,
      fillParticle1,
      fillParticle4,
      fillParticle5,
      fillParticle6,
      fillSound1,
      emptySound,
      gatewayItem("kubejs:electro_hydro_capacitor", 64, "input"),
      gatewayItem("kubejs:steel_parts_box", 64, "input"),
      gatewayFluid(3000, "output", "heat2")
    ]
  }).id("dut_create:slimeria_gateway/input_stage_2")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:slimeria_gateway",
    "time": 160,
    "hidden": true,
    "error": false,
    "priority": 20,
    "requirements": [
      gatewayStructure,
      emptyParticle1,
      fillParticle6,
      fillParticle7,
      fillParticle8,
      fillSound3,
      fillSound2,
      {
        "type": "custommachinery:command",
        "phase": "ending",
        "command": "/function dut:particle/gateway_open",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/weather clear",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "crafting_tickable",
        "command": "/time add 40",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "crafting_tickable",
        "command": "/summon lightning_bolt ~ ~ ~",
        "log": false,
        "permissionlevel": 5,
        "chance": 0.05
      },
      gatewayFluid(6000, "input", "heat1"),
      gatewayFluid(6000, "input", "heat2"),
      gatewayItem("kubejs:unsteady_electro_hydro", 1, "output"),
    ]
  }).id("dut_create:slimeria_gateway/opengate")
  event.custom({
    "type": "custommachinery:custom_machine",
    "machine": "dut:slimeria_gateway",
    "time": 240,
    "hidden": true,
    "error": false,
    "priority": 200,
    "requirements": [
      gateOpened,
      gatewayWorkingStructure,
      emptyParticle1,
      teleportParticle,
      fillSound3,
      fillParticle1,
      fillParticle7,
      {
        "type": "custommachinery:command",
        "phase": "starting",
        "command": "/weather clear",
        "log": false,
        "permissionlevel": 5
      },
      {
        "type": "custommachinery:command",
        "phase": "crafting_tickable",
        "command": "/time add 40",
        "log": false,
        "permissionlevel": 5
      },
      gatewayItem("kubejs:unsteady_electro_hydro", 1, "input"),
    ]
  }).id("dut_create:slimeria_gateway/teleport")
})