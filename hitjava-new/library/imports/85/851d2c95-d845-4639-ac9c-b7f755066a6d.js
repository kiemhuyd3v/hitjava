"use strict";
cc._RF.push(module, '851d2yV2EVGOayct/dVBmpt', 'Network.InPacket');
// Lobby/LobbyScript/Script/networks/Network.InPacket.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InPacket = /** @class */ (function () {
    function InPacket(data) {
        this._pos = 0;
        this._data = new Uint8Array(0);
        this._length = 0;
        this._controllerId = 0;
        this._cmdId = 0;
        this._error = 0;
        this.init(data);
    }
    InPacket.prototype.init = function (data) {
        this._pos = 0;
        this._data = data;
        this._length = data.length;
        this._controllerId = this.parseByte();
        this._cmdId = this.getShort();
        this._error = this.parseByte();
    };
    InPacket.prototype.getCmdId = function () {
        return this._cmdId;
    };
    InPacket.prototype.getControllerId = function () {
        return this._controllerId;
    };
    InPacket.prototype.getError = function () {
        return this._error;
    };
    InPacket.prototype.parseByte = function () {
        // cc.error(this._pos < this._length, "parseByte:IndexOutOfBoundsException");
        return this._data[this._pos++];
    };
    InPacket.prototype.getByte = function () {
        return this.parseByte();
    };
    InPacket.prototype.getBool = function () {
        // cc.error(this._pos < this._length, "getByte:IndexOutOfBoundsException ", this._pos, ",", this._length);
        return 0 < this._data[this._pos++];
    };
    InPacket.prototype.getBytes = function (a) {
        // cc.error(this._pos + a <= this._length, "getBytes:IndexOutOfBoundsException");
        for (var b = [], c = 0; c < a; c++)
            b.push(this.parseByte());
        return b;
    };
    InPacket.prototype.getShort = function () {
        // cc.error(this._pos + 2 <= this._length, "getShort:IndexOutOfBoundsException");
        if (this._pos + 2 > this._length)
            return 0;
        var a = (this.parseByte() << 8) + (this.parseByte() & 255);
        return 32767 < a ? a - 65536 :
            a;
    };
    InPacket.prototype.getUnsignedShort = function () {
        // cc.error(this._pos + 2 <= this._length, "getUnsignedShort:IndexOutOfBoundsException");
        var a = (this.parseByte() & 255) << 8, b = (this.parseByte() & 255) << 0;
        return a + b;
    };
    InPacket.prototype.getInt = function () {
        // cc.error(this._pos + 4 <= this._length, "getInt:IndexOutOfBoundsException");
        return ((this.parseByte() & 255) << 24) + ((this.parseByte() & 255) << 16) + ((this.parseByte() & 255) << 8) + ((this.parseByte() & 255) << 0);
    };
    InPacket.prototype.byteArrayToLong = function (a) {
        var b = true, c = 0, d = 0;
        255 == a[0] && (b = false);
        if (b)
            for (d = 0; 8 > d; d++)
                c = 256 * c + a[d];
        else {
            for (d = c = 1; 7 >= d; d++)
                c = 256 * c - a[d];
            c = -c;
        }
        return c;
    };
    InPacket.prototype.getLong = function () {
        // cc.error(this._pos + 8 <= this._length, "getLong:IndexOutOfBoundsException");
        for (var a = [], b = 0; 8 > b; b++)
            a[b] = this.parseByte();
        return this.byteArrayToLong(a);
    };
    InPacket.prototype.getDouble = function () {
        // cc.error(this._pos + 8 <= this._length, "getDouble:IndexOutOfBoundsException");
        for (var a = new ArrayBuffer(8), b = new Uint8Array(a), c = 7; 0 <= c; c--)
            b[7 - c] = this.parseByte();
        return (new DataView(a)).getFloat64(0);
    };
    InPacket.prototype.getCharArray = function () {
        var a = this.getUnsignedShort();
        return this.getBytes(a);
    };
    InPacket.prototype.getString = function () {
        var a = this.getCharArray();
        var b = new Uint8Array(a.length);
        for (var c = 0; c < a.length; c++) {
            b[c] = parseInt(a[c], 10);
        }
        var s = String.fromCharCode.apply(null, b);
        return decodeURIComponent(escape(s));
    };
    InPacket.prototype.clean = function () {
    };
    return InPacket;
}());
exports.default = InPacket;

cc._RF.pop();