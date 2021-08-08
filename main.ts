function BGMenu () {
    if (BGChoosing == 1) {
        if (controller.left.isPressed()) {
            BGcursor.vx = -75
        } else if (controller.right.isPressed()) {
            BGcursor.vx = 75
        } else {
            BGcursor.vx = 0
        }
        if (BGcursor.overlapsWith(Boy)) {
            textSprite.setText("Choose Boy?")
            textSprite.setPosition(77, 33)
            if (controller.A.isPressed()) {
                BGChoosen = 0
                StartGame()
            }
        } else if (BGcursor.overlapsWith(Girl)) {
            textSprite.setText("Choose Girl?")
            textSprite.setPosition(77, 33)
            if (controller.A.isPressed()) {
                BGChoosen = 1
                StartGame()
            }
        } else {
            textSprite.setText("")
            textSprite.setPosition(73, 33)
        }
    }
}
function StartGame () {
    textSprite.setText("")
    BGcursor.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Girl.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Boy.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (BGChoosen == 0) {
        ZooPlayer = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 5 . . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . 5 f d d f 5 . . . . . 
            . . . . . 5 d f f d 5 . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . 6 6 6 d d 6 6 6 . . . . 
            . d d d 6 6 6 6 6 6 6 6 d d d . 
            . d d d 6 6 6 6 6 6 6 6 d d d . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . . e e e e e e e e . . . . 
            . . . . e e e e e e e e . . . . 
            . . . . e e . . . . e e . . . . 
            . . . . e e . . . . e e . . . . 
            . . . . e e . . . . e e . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    } else if (BGChoosen == 1) {
        ZooPlayer = sprites.create(img`
            . . . . . . b b e e . . . . . . 
            . . . . . b e e e e e . . . . . 
            . . . e e e 4 4 4 4 e e e . . . 
            . . . . . 4 f b b f 4 . . . . . 
            . . . . . 5 d f f d 5 . . . . . 
            . . . . . 5 5 d d 5 5 . . . . . 
            . . . . 3 3 3 d d 3 3 3 . . . . 
            . d d d 3 3 3 3 3 3 3 3 d d d . 
            . d d d 3 3 3 3 3 3 3 3 d d d . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . . e e e e e e e e . . . . 
            . . . . e e e e e e e e . . . . 
            . . . . e e . . . . e e . . . . 
            . . . . e e . . . . e e . . . . 
            . . . . e e . . . . e e . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    }
    tiles.setTilemap(tilemap`level3`)
}
function start () {
    textSprite = textsprite.create("")
    BGcursor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b b b b . . . . 
        . . . . . . b 1 1 1 1 b . . . . 
        . . . . . b 1 1 1 1 1 b . . . . 
        . . . . . . b 1 1 1 1 b . . . . 
        . . . . . . b 1 1 1 1 b . . . . 
        . . . . . b 1 b b 1 b . . . . . 
        . . . . b 1 b . . b . . . . . . 
        . . . . b b . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Boy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 5 . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 f d d f 5 . . . . . 
        . . . . . 5 d f f d 5 . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . 6 6 6 d d 6 6 6 . . . . 
        . d d d 6 6 6 6 6 6 6 6 d d d . 
        . d d d 6 6 6 6 6 6 6 6 d d d . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Girl = sprites.create(img`
        . . . . . . b b e e . . . . . . 
        . . . . . b e e e e e . . . . . 
        . . . e e e 4 4 4 4 e e e . . . 
        . . . . . 4 f b b f 4 . . . . . 
        . . . . . 5 d f f d 5 . . . . . 
        . . . . . 5 5 d d 5 5 . . . . . 
        . . . . 3 3 3 d d 3 3 3 . . . . 
        . d d d 3 3 3 3 3 3 3 3 d d d . 
        . d d d 3 3 3 3 3 3 3 3 d d d . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . e e . . . . e e . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Boy.x = 20
    Girl.x = 140
    BGChoosing = 1
}
let ZooPlayer: Sprite = null
let BGChoosen = 0
let textSprite: TextSprite = null
let Girl: Sprite = null
let Boy: Sprite = null
let BGcursor: Sprite = null
let BGChoosing = 0
start()
game.onUpdate(function () {
    BGMenu()
})
