input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        soundExpression.happy.play()
        game.addScore(1)
    } else {
        soundExpression.sad.play()
        game.removeLife(1)
    }
})
input.onButtonPressed(Button.B, function () {
    speed += 100
    if (speed > 500) {
        speed = 100
    }
})
let sprite: game.LedSprite = null
let speed = 0
soundExpression.giggle.play()
speed = 200
game.setLife(3)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(speed)
})
