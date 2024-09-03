
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/Network.InPacket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxOZXR3b3JrLkluUGFja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFRSSxrQkFBWSxJQUFnQjtRQVBwQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsVUFBSyxHQUFlLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELHVCQUFJLEdBQUosVUFBSyxJQUFnQjtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRUQsa0NBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUM3QixDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLDZFQUE2RTtRQUM3RSxPQUFPLElB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QyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0wsZUFBQztBQUFELENBcEhBLEFBb0hDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBJblBhY2tldCB7XG4gICAgcHJpdmF0ZSBfcG9zID0gMDtcbiAgICBwcml2YXRlIF9kYXRhOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgcHJpdmF0ZSBfbGVuZ3RoID0gMDtcbiAgICBwcml2YXRlIF9jb250cm9sbGVySWQgPSAwO1xuICAgIHByaXZhdGUgX2NtZElkID0gMDtcbiAgICBwcml2YXRlIF9lcnJvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMuaW5pdChkYXRhKTtcbiAgICB9XG5cbiAgICBpbml0KGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5fcG9zID0gMDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVySWQgPSB0aGlzLnBhcnNlQnl0ZSgpO1xuICAgICAgICB0aGlzLl9jbWRJZCA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLnBhcnNlQnl0ZSgpXG4gICAgfVxuICAgIGdldENtZElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY21kSWRcbiAgICB9XG5cbiAgICBnZXRDb250cm9sbGVySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVySWRcbiAgICB9XG5cbiAgICBnZXRFcnJvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yXG4gICAgfVxuXG4gICAgcGFyc2VCeXRlKCkge1xuICAgICAgICAvLyBjYy5lcnJvcih0aGlzLl9wb3MgPCB0aGlzLl9sZW5ndGgsIFwicGFyc2VCeXRlOkluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb25cIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW3RoaXMuX3BvcysrXVxuICAgIH1cblxuICAgIGdldEJ5dGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQnl0ZSgpXG4gICAgfVxuXG4gICAgZ2V0Qm9vbCgpIHtcbiAgICAgICAgLy8gY2MuZXJyb3IodGhpcy5fcG9zIDwgdGhpcy5fbGVuZ3RoLCBcImdldEJ5dGU6SW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiBcIiwgdGhpcy5fcG9zLCBcIixcIiwgdGhpcy5fbGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIDAgPCB0aGlzLl9kYXRhW3RoaXMuX3BvcysrXVxuICAgIH1cblxuICAgIGdldEJ5dGVzKGEpIHtcbiAgICAgICAgLy8gY2MuZXJyb3IodGhpcy5fcG9zICsgYSA8PSB0aGlzLl9sZW5ndGgsIFwiZ2V0Qnl0ZXM6SW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvblwiKTtcbiAgICAgICAgZm9yICh2YXIgYiA9IFtdLCBjID0gMDsgYyA8IGE7IGMrKykgYi5wdXNoKHRoaXMucGFyc2VCeXRlKCkpO1xuICAgICAgICByZXR1cm4gYlxuICAgIH1cblxuICAgIGdldFNob3J0KCkge1xuICAgICAgICAvLyBjYy5lcnJvcih0aGlzLl9wb3MgKyAyIDw9IHRoaXMuX2xlbmd0aCwgXCJnZXRTaG9ydDpJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uXCIpO1xuICAgICAgICBpZiAodGhpcy5fcG9zICsgMiA+IHRoaXMuX2xlbmd0aCkgcmV0dXJuIDA7XG4gICAgICAgIHZhciBhID0gKHRoaXMucGFyc2VCeXRlKCkgPDwgOCkgKyAodGhpcy5wYXJzZUJ5dGUoKSAmIDI1NSk7XG4gICAgICAgIHJldHVybiAzMjc2NyA8IGEgPyBhIC0gNjU1MzYgOlxuICAgICAgICAgICAgYVxuICAgIH1cblxuICAgIGdldFVuc2lnbmVkU2hvcnQoKSB7XG4gICAgICAgIC8vIGNjLmVycm9yKHRoaXMuX3BvcyArIDIgPD0gdGhpcy5fbGVuZ3RoLCBcImdldFVuc2lnbmVkU2hvcnQ6SW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvblwiKTtcbiAgICAgICAgdmFyIGEgPSAodGhpcy5wYXJzZUJ5dGUoKSAmIDI1NSkgPDwgOCxcbiAgICAgICAgICAgIGIgPSAodGhpcy5wYXJzZUJ5dGUoKSAmIDI1NSkgPDwgMDtcbiAgICAgICAgcmV0dXJuIGEgKyBiXG4gICAgfVxuXG4gICAgZ2V0SW50KCkge1xuICAgICAgICAvLyBjYy5lcnJvcih0aGlzLl9wb3MgKyA0IDw9IHRoaXMuX2xlbmd0aCwgXCJnZXRJbnQ6SW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvblwiKTtcbiAgICAgICAgcmV0dXJuICgodGhpcy5wYXJzZUJ5dGUoKSAmIDI1NSkgPDwgMjQpICsgKCh0aGlzLnBhcnNlQnl0ZSgpICYgMjU1KSA8PCAxNikgKyAoKHRoaXMucGFyc2VCeXRlKCkgJiAyNTUpIDw8IDgpICsgKCh0aGlzLnBhcnNlQnl0ZSgpICYgMjU1KSA8PCAwKVxuICAgIH1cblxuICAgIGJ5dGVBcnJheVRvTG9uZyhhOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIHZhciBiID0gdHJ1ZSxcbiAgICAgICAgICAgIGMgPSAwLFxuICAgICAgICAgICAgZCA9IDA7XG4gICAgICAgIDI1NSA9PSBhWzBdICYmIChiID0gZmFsc2UpO1xuICAgICAgICBpZiAoYilcbiAgICAgICAgICAgIGZvciAoZCA9IDA7IDggPiBkOyBkKyspIGMgPSAyNTYgKiBjICsgYVtkXTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGQgPSBjID0gMTsgNyA+PSBkOyBkKyspIGMgPSAyNTYgKiBjIC0gYVtkXTtcbiAgICAgICAgICAgIGMgPSAtYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBnZXRMb25nKCkge1xuICAgICAgICAvLyBjYy5lcnJvcih0aGlzLl9wb3MgKyA4IDw9IHRoaXMuX2xlbmd0aCwgXCJnZXRMb25nOkluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb25cIik7XG4gICAgICAgIGZvciAodmFyIGEgPSBbXSwgYiA9IDA7IDggPiBiOyBiKyspIGFbYl0gPSB0aGlzLnBhcnNlQnl0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5ieXRlQXJyYXlUb0xvbmcoYSk7XG4gICAgfVxuXG4gICAgZ2V0RG91YmxlKCkge1xuICAgICAgICAvLyBjYy5lcnJvcih0aGlzLl9wb3MgKyA4IDw9IHRoaXMuX2xlbmd0aCwgXCJnZXREb3VibGU6SW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvblwiKTtcbiAgICAgICAgZm9yICh2YXIgYSA9IG5ldyBBcnJheUJ1ZmZlcig4KSwgYiA9IG5ldyBVaW50OEFycmF5KGEpLCBjID0gNzsgMCA8PSBjOyBjLS0pIGJbNyAtIGNdID0gdGhpcy5wYXJzZUJ5dGUoKTtcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0YVZpZXcoYSkpLmdldEZsb2F0NjQoMClcbiAgICB9XG5cbiAgICBnZXRDaGFyQXJyYXkoKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRVbnNpZ25lZFNob3J0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ5dGVzKGEpXG4gICAgfVxuXG4gICAgZ2V0U3RyaW5nKCkge1xuICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0Q2hhckFycmF5KCk7XG4gICAgICAgIHZhciBiID0gbmV3IFVpbnQ4QXJyYXkoYS5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGEubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGJbY10gPSBwYXJzZUludChhW2NdLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHM6IHN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYik7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHMpKTtcbiAgICB9XG5cbiAgICBjbGVhbigpIHtcblxuICAgIH1cbn0iXX0=