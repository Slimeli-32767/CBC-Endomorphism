scoreboard players add @s dut_time 1
particle end_rod ~ ~ ~ 0.0 0.0 0.0 0.0 1 force
execute as @s facing entity @e[tag=dut_connect_line,sort=nearest,limit=1] feet run tp @s ^ ^ ^0.5 facing entity @e[tag=dut_connect_line,sort=nearest,limit=1]

execute as @s at @s if entity @e[tag=dut_connect_line,distance=..1.5] run kill @s
kill @s[scores={dut_time=32..}]

execute as @s[scores={dut_time=..31}] at @s unless entity @e[tag=dut_connect_line,distance=..1.5] run function dut:particle/set_line1