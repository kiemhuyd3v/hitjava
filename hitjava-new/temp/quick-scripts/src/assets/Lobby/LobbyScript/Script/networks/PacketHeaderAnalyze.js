"use strict";
cc._RF.push(module, '20c46EIfchK67TjWzmS1EFh', 'PacketHeaderAnalyze');
// Lobby/LobbyScript/Script/networks/PacketHeaderAnalyze.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Network;
(function (Network) {
    var PacketHeaderAnalyze = /** @class */ (function () {
        function PacketHeaderAnalyze() {
        }
        PacketHeaderAnalyze.getDataSize = function (a) {
            return this.isBigSize(a) ? this.getIntAt(a, this.BYTE_PACKET_SIZE_INDEX) : this.getUnsignedShortAt(a, this.BYTE_PACKET_SIZE_INDEX);
        };
        PacketHeaderAnalyze.getCmdIdFromData = function (a) {
            return this.getShortAt(a, 1);
        };
        PacketHeaderAnalyze.isBigSize = function (a) {
            return this.getBit(a[0], this.BIT_IS_BIG_SIZE_INDEX);
        };
        PacketHeaderAnalyze.isCompress = function (a) {
            return this.getBit(a[0], this.BIT_IS_COMPRESS_INDEX);
        };
        PacketHeaderAnalyze.getValidSize = function (a) {
            var b = 0, c = 0;
            if (this.isBigSize(a)) {
                if (length < this.BIG_HEADER_SIZE)
                    return -1;
                b = this.getIntAt(a, this.BYTE_PACKET_SIZE_INDEX);
                c = this.BIG_HEADER_SIZE;
            }
            else {
                if (length < this.NORMAL_HEADER_SIZE)
                    return -1;
                b = this.getUnsignedShortAt(a, this.BYTE_PACKET_SIZE_INDEX);
                c = this.NORMAL_HEADER_SIZE;
            }
            return b + c;
        };
        PacketHeaderAnalyze.getBit = function (a, b) {
            return 0 != (a & 1 << b);
        };
        PacketHeaderAnalyze.genHeader = function (a, b) {
            var c;
            c = this.setBit(0, 7, !0);
            c = this.setBit(c, 6, !1);
            c = this.setBit(c, 5, b);
            c = this.setBit(c, 4, !0);
            return c = this.setBit(c, 3, a);
        };
        PacketHeaderAnalyze.setBit = function (a, b, c) {
            return c ? a | 1 << b : a & ~(1 << b);
        };
        PacketHeaderAnalyze.getIntAt = function (a, b) {
            return ((a[b] & 255) << 24) + ((a[b + 1] & 255) << 16) + ((a[b + 2] & 255) << 8) + ((a[b + 3] & 255) << 0);
        };
        PacketHeaderAnalyze.getUnsignedShortAt = function (a, b) {
            return ((a[b] & 255) << 8) + ((a[b + 1] & 255) << 0);
        };
        PacketHeaderAnalyze.getShortAt = function (a, b) {
            return (a[b] << 8) + (a[b + 1] & 255);
        };
        PacketHeaderAnalyze.BIT_IS_BINARY_INDEX = 7;
        PacketHeaderAnalyze.BIT_IS_ENCRYPT_INDEX = 6;
        PacketHeaderAnalyze.BIT_IS_COMPRESS_INDEX = 5;
        PacketHeaderAnalyze.BIT_IS_BLUE_BOXED_INDEX = 4;
        PacketHeaderAnalyze.BIT_IS_BIG_SIZE_INDEX = 3;
        PacketHeaderAnalyze.BYTE_PACKET_SIZE_INDEX = 1;
        PacketHeaderAnalyze.BIG_HEADER_SIZE = 5;
        PacketHeaderAnalyze.NORMAL_HEADER_SIZE = 3;
        return PacketHeaderAnalyze;
    }());
    Network.PacketHeaderAnalyze = PacketHeaderAnalyze;
})(Network || (Network = {}));
exports.default = Network.PacketHeaderAnalyze;

cc._RF.pop();