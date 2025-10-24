//% color="#696969" weight=100 icon="\uf5bc"
namespace カラーセンサー {
    let IR = 0
    let B = 0
    let G = 0
    let R = 0

    //% block="初期化"
    export function init() {
        pins.i2cWriteNumber(
            42,
            139,
            NumberFormat.UInt16BE,
            false
        )
        pins.i2cWriteNumber(
            42,
            11,
            NumberFormat.UInt16BE,
            false
        )
    }

    //% block="赤取得" color="#f00000"
    export function readR(): number{
        pins.i2cWriteNumber(
        42,
        3,
        NumberFormat.UInt8BE,
        false
        )
        R = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        G = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        B = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        IR = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        return R;
    }
    //% block="緑取得" color="#00f000"
    export function readG(): number {
        pins.i2cWriteNumber(
            42,
            3,
            NumberFormat.UInt8BE,
            false
        )
        R = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        G = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        B = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        IR = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        return G;
    }
    //% block="青取得" color="#0000f0"
    export function readB(): number {
        pins.i2cWriteNumber(
            42,
            3,
            NumberFormat.UInt8BE,
            false
        )
        R = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        G = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        B = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        IR = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        return B;
    }
}