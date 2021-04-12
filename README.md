# Cup of Suffering

Adds in a number of (extremely difficult) modded arena cup rounds, filled with suffering. (Emphasis on the extremely difficult part.) (Inspired by Autumn's Genesis, which can be found at https://github.com/Hsifnus/autumns-genesis.)

# Prerequisites

CCLoader is required, which may be downloaded here: https://github.com/CCDirectLink/CCLoader.

# Notes

Though the arena cup is level 80, it is recommended that you raise your level to at least 95 and have corresponding DLC equips. To facilitate leveling up, all Hedgehags and Old Hedgehags have had their level buffed to 110 when booster is enabled. (If you wish to change the boosted level, you can go to assets/data/enemies/hedgehog.json.patch and hedgehog-alt.json.patch, and change 110 to whatever you want.)

## (Round 1) Bossa Nova

As you might expect, putting 13 bosses in a single map causes some rather interesting interactions. (For example, things like bombs, tesla extenders, and bosses can and will land on other bosses.) If something round-breaking happens, do report it. (If it not round-breaking but is especially interesting, you may also report it.)

To prevent bosses from accidentally falling off the edge, the top of the map is surrounded by orange walls, while all the other parts of the border are surrounded by invisible walls. (There is a small gap in the walls to allow you to attack Driller. You probably can get bosses to jump through there, but it's more trouble than it's worth.)

Since doing parkour while fighting this many bosses at the same time is difficult, Ti'im's pillar has been modified to go down once Ti'im's minions have been defeated. (This also means that second phase pillar animation is a bit off, but hopefully no one will notice...)

Pinzo'jrahrrran has the tendency to hide if you don't interact with it or go a certain distance away from it (I'm not entirely sure which), which makes it impossible to kill. Unfortunately, this means you will have to restart the round.

There is only one elemental pole, so Master Magmoth will just stick around that pole, even after 2nd and 3rd phase breaks. Also, for obvious reasons, there is no lava. (She still drops bubbles though, so be careful!)

There are no walls you can hide behind (besides Ti'im's pillar and perhaps Whale, Turret, and Pinzo'jrahrrran) so Frobbit in phase 2 ice mode is a bit difficult to deal with. (A fire dash art should hopefully give enough i-frames.)

Sephisloth's suck action (the one where it pulls you in towards the center of the map in the regular fight, in order to prepare for the box attack) has been modified to center on the player. (It can be tricked with a wave decoy.) Since Moth can push Sephisloth while they are both in the air (which would normally softlock Lea until she restarts or is pummeled to a pulp), a max wait time of 5 seconds has been added to the suck action. Also, since Sephisloth's circle attack has been modified to circle around the player, going near the edge can cause it to pass through the arena walls and get stuck inside and below the arena. (The electric box should also help deter players from doing this.)

Whale's phases are based on global hp breaks, which means hp breaks from any boss (not just whale or ape) will cause whale's phase to move. (There may also be an interaction with the regular whale arena fight which makes whale harder to break, though I am not entirely sure if it actually exists or if my memory is poor.)
