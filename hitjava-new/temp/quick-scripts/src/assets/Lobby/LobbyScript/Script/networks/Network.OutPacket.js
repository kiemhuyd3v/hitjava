"use strict";
cc._RF.push(module, 'aad90ZGA2pCGbMidoqrmj74', 'Network.OutPacket');
// Lobby/LobbyScript/Script/networks/Network.OutPacket.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PacketHeaderAnalyze_1 = require("./PacketHeaderAnalyze");
var OutPacket = /** @class */ (function () {
    function OutPacket() {
        this._controllerId = 1;
        this._cmdId = 0;
        this._data = new Array();
        this._capacity = new Array();
        this._length = 0;
        this._pos = 0;
        this._isPackedHeader = false;
    }
    OutPacket.prototype.setCmdId = function (cmdId) {
        this._cmdId = cmdId;
    };
    OutPacket.prototype.setControllerId = function (controllerId) {
        this._controllerId = controllerId;
    };
    OutPacket.prototype.initData = function (data) {
        this._data = [data];
        this._capacity = data;
    };
    OutPacket.prototype.reset = function () {
        this._length = this._pos = 0;
        this._isPackedHeader = false;
    };
    OutPacket.prototype.packHeader = function () {
        if (!this._isPackedHeader) {
            this._isPackedHeader = !0;
            var a = PacketHeaderAnalyze_1.default.genHeader(!1, !1);
            this.putByte(a);
            this.putUnsignedShort(this._length);
            this.putByte(this._controllerId);
            this.putShort(this._cmdId);
        }
    };
    OutPacket.prototype.putByte = function (a) {
        this._data[this._pos++] = a;
        this._length = this._pos;
        return this;
    };
    OutPacket.prototype.putByteArray = function (a) {
        this.putShort(a.length);
        this.putBytes(a);
        return this;
    };
    OutPacket.prototype.putBytes = function (a) {
        for (var b = 0; b < a.length; b++)
            this.putByte(a[b]);
        return this;
    };
    OutPacket.prototype.putShort = function (a) {
        this.putByte(a >> 8 & 255);
        this.putByte(a >> 0 & 255);
        return this;
    };
    OutPacket.prototype.putUnsignedShort = function (a) {
        this.putByte(a >> 8);
        this.putByte(a >> 0);
        return this;
    };
    OutPacket.prototype.putInt = function (a) {
        this.putByte(a >> 24 & 255);
        this.putByte(a >> 16 & 255);
        this.putByte(a >> 8 & 255);
        this.putByte(a >> 0 & 255);
        return this;
    };
    OutPacket.prototype.putLong = function (a) {
        0 > a && console.log("Dev");
        for (var b = [], c = 0; 8 > c; c++)
            b[c] = a & 255, a = Math.floor(a / 256);
        for (a = 7; 0 <= a; a--)
            this.putByte(b[a]);
    };
    OutPacket.prototype.putDouble = function (a) {
        this.putByte(a >> 24 & 255);
        this.putByte(a >> 16 & 255);
        this.putByte(a >> 8 & 255);
        this.putByte(a >> 0 & 255);
        this.putByte(a >> 24 & 255);
        this.putByte(a >> 16 & 255);
        this.putByte(a >> 8 & 255);
        this.putByte(a >> 0 & 255);
        return this;
    };
    OutPacket.prototype.putString = function (a) {
        this.putByteArray(this._stringConvertToByteArray(a));
        return this;
    };
    OutPacket.prototype.updateUnsignedShortAtPos = function (a, b) {
        this._data[b] = a >> 8;
        this._data[b + 1] = a >> 0;
    };
    OutPacket.prototype.updateSize = function () {
        this.updateUnsignedShortAtPos(this._length - 3, OutPacket.INDEX_SIZE_PACKET);
    };
    OutPacket.prototype.getData = function () {
        return this._data.slice(0, this._length);
    };
    OutPacket.prototype._stringConvertToByteArray = function (a) {
        if (null == a)
            return null;
        for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++)
            b[c] = a.charCodeAt(c);
        return b;
    };
    OutPacket.prototype.clean = function () {
    };
    OutPacket.INDEX_SIZE_PACKET = 1;
    return OutPacket;
}());
exports.default = OutPacket;

cc._RF.pop();