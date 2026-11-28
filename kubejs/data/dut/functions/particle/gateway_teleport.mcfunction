particle minecraft:flash ~ ~ ~ 0.0 0.0 0.0 0 1 force
particle minecraft:soul_fire_flame ~ ~ ~ 0.25 0.25 0.25 0.35 32
particle create:cube 160 250 25 0.75 60 false ~ ~ ~ 0.0 0.0 0.0 0.0 1 force
particle create:cube 25 25 25 0.5 60 false ~ ~ ~ 0.0 0.0 0.0 0.0 1 force

execute as @s at @s in dut:slimeria run tp ~ 600 ~
execute as @s at @s in dut:slimeria run spreadplayers ~ ~ 64 512 false @s
execute as @s at @s in dut:slimeria run tp ~ 600 ~
execute as @s at @s run particle create:cube 160 250 25 0.75 60 false ~ ~ ~ 0.0 0.0 0.0 0.0 1 force
execute as @s at @s run particle create:cube 25 25 25 0.5 60 false ~ ~ ~ 0.0 0.0 0.0 0.0 1 force

execute as @s at @s run playsound block.end_portal.spawn block @a ~ ~-7 ~