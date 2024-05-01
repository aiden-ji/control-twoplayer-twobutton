controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    yellow_speed = 100
    blue_speed = 0
    controller.moveSprite(blue, blue_speed, blue_speed)
    controller.moveSprite(yellow, yellow_speed, yellow_speed)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    yellow_speed = 0
    blue_speed = 100
    controller.moveSprite(blue, blue_speed, blue_speed)
    controller.moveSprite(yellow, yellow_speed, yellow_speed)
})
let blue_speed = 0
let blue: Sprite = null
let yellow: Sprite = null
let yellow_speed = 0
yellow_speed = 100
yellow = sprites.create(assets.image`myImage`, SpriteKind.Player)
yellow.setPosition(120, 30)
blue = sprites.create(assets.image`myImage0`, SpriteKind.Player)
blue.setPosition(120, 80)
controller.moveSprite(yellow, yellow_speed, yellow_speed)
blue.setStayInScreen(true)
yellow.setStayInScreen(true)
let textSprite = textsprite.create("A button to swap objects", 12, 13)
textSprite.setPosition(80, 110)
