namespace SpriteKind {
    export const 购物大妈类型 = SpriteKind.create()
    export const 收银员类型 = SpriteKind.create()
    export const 草莓类型 = SpriteKind.create()
    export const 甜甜圈类型 = SpriteKind.create()
    export const 价格表类型 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.购物大妈类型, SpriteKind.价格表类型, function (sprite, otherSprite) {
    otherSprite.sayText("A", 500, false)
    if (controller.A.isPressed()) {
        game.splash("今日特价")
        game.splash("草莓一个" + "??" + "元")
        game.splash("甜甜圈一个" + "??" + "元")
        pause(500)
    }
})
sprites.onOverlap(SpriteKind.购物大妈类型, SpriteKind.草莓类型, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.购物大妈类型, SpriteKind.甜甜圈类型, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
function 定价 () {
    甜甜圈价格 = randint(1, 4)
    草莓价格 = randint(1, 4)
}
sprites.onOverlap(SpriteKind.购物大妈类型, SpriteKind.收银员类型, function (sprite, otherSprite) {
    game.splash("你购买了" + info.score() + "个东西")
    game.splash("其中" + "草莓" + "?" + "个")
    game.splash("其中" + "甜甜圈" + "?" + "个")
    game.splash("总价是：")
    if (game.askForNumber("", 3) == 0 * 甜甜圈价格 + 0 * 草莓价格) {
        game.over()
    } else {
        game.splash("好像不对，再试一遍")
        tiles.placeOnTile(sprite, tiles.getTileLocation(1, 1))
    }
})
// 挑战：
// 1. 让价格表显示正确的价钱
// 2.让收银员说出购买物品的数目
// 3.完成最后付款的功能
// 
let 草莓价格 = 0
let 甜甜圈价格 = 0
custom.prepareShop()
custom.prepareGoods()
定价()
custom.preparePriceTag()
custom.prepareCashier()
custom.prepareCustomer()
