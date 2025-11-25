scene.setBackgroundColor(14)
game.splash("Welcome To Our Game")
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f e e f f f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f f f d d d d d d f f f . . 
    . . f f d e e e e e e d d f . . 
    . . f d e f f f f f f e d f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f d d f b f e f f . 
    . f e e d 1 f d d f 1 d e e f . 
    . . f e e d d 2 2 d d e e f . . 
    . . . f e e d d d d e e f . . . 
    . . e 4 f e e e e e e f 4 e . . 
    . . 4 d f e e e e e e f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
