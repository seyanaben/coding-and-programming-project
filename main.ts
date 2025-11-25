scene.setBackgroundColor(14)
game.splash("Welcome To Our Game")
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f b b f f . . . . . 
    . . . . f f b c b b f f . . . . 
    . . . f f b c b b b b f f . . . 
    . . . f b b b b b b b b f . . . 
    . . . f b b f f f f b b f . . . 
    . . . f b f 9 9 9 9 f b f . . . 
    . . f f b f 9 9 9 9 f b f f . . 
    . . f b b b f f f f b b b f . . 
    . . f b b b b b b b c c b f . . 
    . . f f f f f f f f f f f f . . 
    . . . 2 4 5 5 5 5 5 5 4 2 . . . 
    . . . 2 4 5 5 5 5 5 5 4 2 . . . 
    . . 2 2 4 5 5 5 5 5 5 4 2 2 . . 
    . . 2 4 4 5 5 5 5 5 5 4 4 2 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
