execute store result score @s dut_pos_y run data get entity @s Pos[1]
execute unless score @s dut_pos_y matches 30..120 as @s at @s run fill ~-1 65 ~-3 ~1 67 ~2 air
execute unless score @s dut_pos_y matches 30..120 as @s at @s run tp @s ~ 65.5 ~
execute if score @s dut_pos_y matches 30..120 as @s at @s run tp @s ~ ~2 ~
execute as @s at @s run place template dut:space_ship ~-11 ~-13 ~-10
execute as @s at @s run setworldspawn ~0.5 ~ ~0.5
execute as @s at @s run spawnpoint @s ~0.5 ~ ~0.5
data modify storage dut_create spawnpoint_structure set value "has_been_set"