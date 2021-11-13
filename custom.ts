/**
 * Custom blocks
 */
//%block="购物的故事"
//% weight=100 color=#0fbc11 icon=""
namespace custom {

    function 创建商品() {
        let 生成草莓数量 = randint(1, 4)
        for (let index = 0; index < 生成草莓数量; index++) {
            let 草莓 = sprites.create(img`
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 8 6 6 . . . 6 8 . . 
            . . . e e e 8 8 6 6 . 6 7 8 . . 
            . . e 2 2 2 2 e 8 6 6 7 6 . . . 
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
            e 2 2 2 2 2 2 2 4 e 2 e e c . . 
            e e 2 e 2 2 4 2 2 e e e c . . . 
            e e e e 2 e 2 2 e e e c . . . . 
            e e e 2 e e c e c c c . . . . . 
            . c c c c c c c . . . . . . . . 
            `, SpriteKind.草莓类型)
            tiles.placeOnRandomTile(草莓, sprites.dungeon.floorLight2)
        }
        let 生成甜甜圈数量 = randint(1, 4)
        for (let index = 0; index < 生成甜甜圈数量; index++) {
            let 甜甜圈 = sprites.create(img`
            . . . . . . b b b b a a . . . . 
            . . . . b b d d d 3 3 3 a a . . 
            . . . b d d d 3 3 3 3 3 3 a a . 
            . . b d d 3 3 3 3 3 3 3 3 3 a . 
            . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
            . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
            b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
            b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
            b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
            a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
            a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
            a a 3 3 3 d d d a a 4 4 4 e e . 
            . e a a a a a a 4 4 4 4 e e . . 
            . . e e b b 4 4 4 4 b e e . . . 
            . . . e e e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.甜甜圈类型)
            tiles.placeOnRandomTile(甜甜圈, sprites.dungeon.floorLight2)
        }
        sprites.onOverlap(SpriteKind.草莓类型, SpriteKind.草莓类型, function(sprite:Sprite, otherSprite:Sprite){
            tiles.placeOnRandomTile(otherSprite, sprites.dungeon.floorLight2)
        })
        sprites.onOverlap(SpriteKind.草莓类型, SpriteKind.甜甜圈类型, function (sprite: Sprite, otherSprite: Sprite) {
            tiles.placeOnRandomTile(otherSprite, sprites.dungeon.floorLight2)
        })
        sprites.onOverlap(SpriteKind.甜甜圈类型, SpriteKind.甜甜圈类型, function (sprite: Sprite, otherSprite: Sprite) {
            tiles.placeOnRandomTile(otherSprite, sprites.dungeon.floorLight2)
        })

    }

    //%blockid=customprepareshop block="建好商店"
    export function prepareShop() {
        tiles.setTilemap(tilemap`级别1`)
    }

    //%blockid=custompreparegoods block="准备商品"
    export function prepareGoods() {
        创建商品()
    }

    //%blockid=custompreparepricetag block="放好价格表"
    export function preparePriceTag() {
        let 价格表 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . c c c c c c c c c c c c . . . 
    c 1 1 1 1 1 1 1 1 1 1 1 1 c . . 
    c d d d d d d d d d d d d c . . 
    c d c c c c c c c c c c d c . . 
    c d 8 1 8 8 1 1 1 1 8 8 d c . . 
    c d 8 8 8 8 8 8 8 8 8 8 d c . . 
    c d 8 8 8 8 8 8 8 8 8 8 d c . . 
    c d 8 1 8 8 1 1 1 1 8 8 d c . . 
    c 1 8 8 8 8 8 8 8 8 8 8 1 c . . 
    c 1 1 d 1 1 d 1 1 d 1 1 1 c . . 
    c 1 d d d d d d d d d d 1 c . . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 c . . 
    c b b b b b b b b b b b b c . . 
    c c c c c c c c c c c c c c . . 
    `, SpriteKind.价格表类型)
        tiles.placeOnTile(价格表, tiles.getTileLocation(1, 3))
    }

    //%blockid=customprepareCustomer block="迎接购物大妈"
    export function prepareCustomer() {
        let 购物大妈 = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.购物大妈类型)
        tiles.placeOnTile(购物大妈, tiles.getTileLocation(1, 1))
        controller.moveSprite(购物大妈)
    }

    //%blockid=custompreparecashier block="收银员上班"
    export function prepareCashier() {
        let 收银员 = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . f 6 2 5 5 6 f . . . . . 
    . . . f 6 6 6 6 1 6 6 f . . . . 
    . . . f 6 6 6 6 6 1 6 f . . . . 
    . . . f d f d 6 6 6 1 f . . . . 
    . . . f d f d 6 6 6 6 f f . . . 
    . . . f d 3 d d 6 6 6 f 6 f . . 
    . . . . f d d d f f 6 f f . . . 
    . . . . . f f 5 3 f 6 6 6 f . . 
    . . . . f 5 3 3 f f f f f . . . 
    . . . . f 3 3 f d f . . . . . . 
    . . . . . f 3 f d f . . . . . . 
    . . . . f 3 5 3 f d f . . . . . 
    . . . . f f 3 3 f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.收银员类型)
        tiles.placeOnTile(收银员, tiles.getTileLocation(8, 5))
    }

}
