fill ~ ~-1 ~ ~ ~1 ~ air replace minecraft:end_gateway
particle minecraft:flash ~ ~-7 ~ 0.0 0.0 0.0 0 1 force
particle minecraft:soul_fire_flame ~ ~-7 ~ 0.5 0.5 0.5 1.2 128
execute as @a at @s run playsound block.end_portal.spawn block @a ~ ~-7 ~
particle create:cube 160 250 25 1.25 80 false ~ ~ ~ 0.0 0.0 0.0 0.0 1 force
particle create:cube 25 25 25 0.75 80 false ~ ~ ~ 0.0 0.0 0.0 0.0 1 force
