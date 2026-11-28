scoreboard players add @s dut_time 1
scoreboard players set @s dut_count 30
scoreboard players operation @s dut_time %= @s dut_count
scoreboard players add @s dut_clear_time 1
#环种类
execute as @s[scores={dut_time=1}] at @s as @a[distance=..16] at @s run function dut:particle/set_line
execute as @s[scores={dut_time=1}] at @s as @e[type=dummmmmmy:target_dummy,distance=..16] at @s run function dut:particle/set_line

execute as @s[scores={dut_clear_time=240..}] at @s as @a[distance=..16] at @s run function dut:particle/gateway_teleport
execute as @s[scores={dut_clear_time=240..}] at @s as @e[type=dummmmmmy:target_dummy,distance=..16] at @s run function dut:particle/gateway_teleport

execute as @s[scores={dut_clear_time=240..}] at @s run function dut:particle/gateway_close
kill @s[scores={dut_clear_time=240..}]


