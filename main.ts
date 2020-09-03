input.onButtonPressed(Button.A, function () {
    if (地鼠.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
let 地鼠: game.LedSprite = null
地鼠 = game.createSprite(2, 2)
let 地鼠移動速度 = 250
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    地鼠.move(1)
    地鼠.ifOnEdgeBounce()
})
