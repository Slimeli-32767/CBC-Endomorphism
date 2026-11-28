particle minecraft:end_rod ^ ^1 ^1.75 0.05 0.05 0.05 0.0 1 force
particle minecraft:end_rod ^ ^1 ^-1.75 0.05 0.05 0.05 0.0 1 force
particle minecraft:end_rod ^ ^-1 ^1.75 0.05 0.05 0.05 0.0 1 force
particle minecraft:end_rod ^ ^-1 ^-1.75 0.05 0.05 0.05 0.0 1 force
execute as @s at @s run tp @s ~ ~ ~ ~9 ~
kill @s[scores={dut_time=40..}]