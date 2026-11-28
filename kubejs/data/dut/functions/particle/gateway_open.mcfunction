fill ~ ~-6 ~ ~ ~-8 ~ minecraft:end_gateway
particle minecraft:flash ~ ~-7 ~ 0.0 0.0 0.0 0 1 force
particle minecraft:soul_fire_flame ~ ~-7 ~ 0.5 0.5 0.5 1.2 128
execute as @a at @s run playsound block.end_portal.spawn block @a ~ ~ ~
title @a actionbar {"translate":"kubejs.message.opengate"}
