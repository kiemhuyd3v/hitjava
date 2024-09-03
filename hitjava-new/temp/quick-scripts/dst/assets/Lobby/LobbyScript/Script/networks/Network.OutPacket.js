
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/Network.OutPacket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxOZXR3b3JrLk91dFBhY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUV4RDtJQUFBO1FBRUksa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQWtCLElBQUksS0FBSyxFQUFVLENBQUM7UUFDM0MsY0FBUyxHQUFrQixJQUFJLEtBQUssRUFBVSxDQUFDO1FBQy9DLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixvQkFBZSxHQUFZLEtBQUssQ0FBQztJQWdIckMsQ0FBQztJQTlHRyw0QkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUN2QixDQUFDO0lBRUQsbUNBQWUsR0FBZixVQUFnQixZQUFvQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztJQUN0QyxDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7SUFDekIsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw4QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyw2QkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxD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Q0FBQyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCw2Q0FBeUIsR0FBekIsVUFBMEIsQ0FBQztRQUN2QixJQUFJLElBQUksSUFBSSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixPQUFPLENBQUMsQ0FBQTtJQUNaLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQXRITSwyQkFBaUIsR0FBRyxDQUFDLENBQUM7SUF1SGpDLGdCQUFDO0NBeEhELEFBd0hDLElBQUE7a0JBeEhvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhY2tldEhlYWRlckFuYWx5emUgZnJvbSBcIi4vUGFja2V0SGVhZGVyQW5hbHl6ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdXRQYWNrZXQge1xuICAgIHN0YXRpYyBJTkRFWF9TSVpFX1BBQ0tFVCA9IDE7XG4gICAgX2NvbnRyb2xsZXJJZDogbnVtYmVyID0gMTtcbiAgICBfY21kSWQ6IG51bWJlciA9IDA7XG4gICAgX2RhdGE6IEFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgIF9jYXBhY2l0eTogQXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgX2xlbmd0aDogbnVtYmVyID0gMDtcbiAgICBfcG9zOiBudW1iZXIgPSAwO1xuICAgIF9pc1BhY2tlZEhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc2V0Q21kSWQoY21kSWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jbWRJZCA9IGNtZElkXG4gICAgfVxuXG4gICAgc2V0Q29udHJvbGxlcklkKGNvbnRyb2xsZXJJZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJJZCA9IGNvbnRyb2xsZXJJZDtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBbZGF0YV07XG4gICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gZGF0YVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9sZW5ndGggPSB0aGlzLl9wb3MgPSAwO1xuICAgICAgICB0aGlzLl9pc1BhY2tlZEhlYWRlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBhY2tIZWFkZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNQYWNrZWRIZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzUGFja2VkSGVhZGVyID0gITA7XG4gICAgICAgICAgICB2YXIgYSA9IFBhY2tldEhlYWRlckFuYWx5emUuZ2VuSGVhZGVyKCExLCAhMSk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSk7XG4gICAgICAgICAgICB0aGlzLnB1dFVuc2lnbmVkU2hvcnQodGhpcy5fbGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZSh0aGlzLl9jb250cm9sbGVySWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydCh0aGlzLl9jbWRJZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1dEJ5dGUoYSkge1xuICAgICAgICB0aGlzLl9kYXRhW3RoaXMuX3BvcysrXSA9IGE7XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IHRoaXMuX3BvcztcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwdXRCeXRlQXJyYXkoYSkge1xuICAgICAgICB0aGlzLnB1dFNob3J0KGEubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5wdXRCeXRlcyhhKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwdXRCeXRlcyhhKSB7XG4gICAgICAgIGZvciAodmFyIGIgPSAwOyBiIDwgYS5sZW5ndGg7IGIrKykgdGhpcy5wdXRCeXRlKGFbYl0pO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHB1dFNob3J0KGEpIHtcbiAgICAgICAgdGhpcy5wdXRCeXRlKGEgPj4gOCAmIDI1NSk7XG4gICAgICAgIHRoaXMucHV0Qnl0ZShhID4+IDAgJiAyNTUpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHB1dFVuc2lnbmVkU2hvcnQoYSkge1xuICAgICAgICB0aGlzLnB1dEJ5dGUoYSA+PiA4KTtcbiAgICAgICAgdGhpcy5wdXRCeXRlKGEgPj4gMCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcHV0SW50KGEpIHtcbiAgICAgICAgdGhpcy5wdXRCeXRlKGEgPj4gMjQgJiAyNTUpO1xuICAgICAgICB0aGlzLnB1dEJ5dGUoYSA+PiAxNiAmIDI1NSk7XG4gICAgICAgIHRoaXMucHV0Qnl0ZShhID4+IDggJiAyNTUpO1xuICAgICAgICB0aGlzLnB1dEJ5dGUoYSA+PiAwICYgMjU1KTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwdXRMb25nKGEpIHtcbiAgICAgICAgMCA+IGEgJiYgY29uc29sZS5sb2coXCJEZXZcIik7XG4gICAgICAgIGZvciAodmFyIGIgPSBbXSwgYyA9IDA7IDggPiBjOyBjKyspIGJbY10gPSBhICYgMjU1LCBhID0gTWF0aC5mbG9vcihhIC8gMjU2KTtcbiAgICAgICAgZm9yIChhID0gNzsgMCA8PSBhOyBhLS0pIHRoaXMucHV0Qnl0ZShiW2FdKVxuICAgIH1cblxuICAgIHB1dERvdWJsZShhKSB7XG4gICAgICAgIHRoaXMucHV0Qnl0ZShhID4+IDI0ICYgMjU1KTtcbiAgICAgICAgdGhpcy5wdXRCeXRlKGEgPj4gMTYgJiAyNTUpO1xuICAgICAgICB0aGlzLnB1dEJ5dGUoYSA+PiA4ICYgMjU1KTtcbiAgICAgICAgdGhpcy5wdXRCeXRlKGEgPj4gMCAmIDI1NSk7XG4gICAgICAgIHRoaXMucHV0Qnl0ZShhID4+IDI0ICYgMjU1KTtcbiAgICAgICAgdGhpcy5wdXRCeXRlKGEgPj4gMTYgJiAyNTUpO1xuICAgICAgICB0aGlzLnB1dEJ5dGUoYSA+PiA4ICYgMjU1KTtcbiAgICAgICAgdGhpcy5wdXRCeXRlKGEgPj4gMCAmIDI1NSk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHB1dFN0cmluZyhhKSB7XG4gICAgICAgIHRoaXMucHV0Qnl0ZUFycmF5KHRoaXMuX3N0cmluZ0NvbnZlcnRUb0J5dGVBcnJheShhKSk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdXBkYXRlVW5zaWduZWRTaG9ydEF0UG9zKGEsIGIpIHtcbiAgICAgICAgdGhpcy5fZGF0YVtiXSA9IGEgPj4gODtcbiAgICAgICAgdGhpcy5fZGF0YVtiICsgMV0gPSBhID4+IDBcbiAgICB9XG5cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVVuc2lnbmVkU2hvcnRBdFBvcyh0aGlzLl9sZW5ndGggLSAzLCBPdXRQYWNrZXQuSU5ERVhfU0laRV9QQUNLRVQpO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNsaWNlKDAsIHRoaXMuX2xlbmd0aClcbiAgICB9XG5cbiAgICBfc3RyaW5nQ29udmVydFRvQnl0ZUFycmF5KGEpIHtcbiAgICAgICAgaWYgKG51bGwgPT0gYSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIGIgPSBuZXcgVWludDhBcnJheShhLmxlbmd0aCksIGMgPSAwOyBjIDwgYS5sZW5ndGg7IGMrKykgYltjXSA9IGEuY2hhckNvZGVBdChjKTtcbiAgICAgICAgcmV0dXJuIGJcbiAgICB9XG5cbiAgICBjbGVhbigpIHtcblxuICAgIH1cbn0iXX0=