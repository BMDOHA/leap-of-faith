player.onChat("\"lof\"", function (num1) {
    blocks.fill(
    DIORITE,
    pos(-1, 3, -1),
    pos(-1, -1, -1),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(-1, 128, -1),
    pos(1, 128, 1),
    FillOperation.Replace
    )
    player.teleport(pos(0, 130, 0))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(NEAREST_PLAYER)
    )
})
