"use strict";
cc._RF.push(module, '1140fJ0WcxGeb+cOSwh7NU0', 'Loto.Cmd');
// Loto/Loto_Script/Loto.Cmd.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd = void 0;
var ccclass = cc._decorator.ccclass;
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.currentChannel = 0;
        Code.LOTO_LOCATION = {
            MienBac: 0,
            MienTrung: 1,
            MienNam: 2
        };
        Code.LOTO_CHANNEL = {
            NONE: 0,
            MIEN_BAC: 1,
        };
        Code.LOTO_CHANNEL_NAME = [
            "NONE",
            "Miền Bắc",
        ];
        Code.LOTO_GAME_MODE = {
            None: 0,
            BaoLo2So: 1,
            BaoLo3So: 2,
            LoXien2: 3,
            LoXien3: 4,
            LoXien4: 5,
            Dau: 6,
            Duoi: 7,
            DeDau: 8,
            DeDacBiet: 9,
            DanhDauDuoi: 10,
            BaCang: 11,
            BaCangDau: 12,
            BaCangDuoi: 13,
            BaCangDauDuoi: 14,
            LoTruotXien4: 15,
            LoTruotXien8: 16,
            LoTruotXien10: 17,
            XiuChuDau: 18,
            XiuChuDuoi: 19,
            XiuChuDauDuoi: 20,
            Da2: 21,
            Da3: 22,
            Da4: 23,
            LoTruotXien14: 24,
            LoTruotXien12: 25,
        };
        Code.LOTO_GAME_MODE_NAME = [
            "NONE",
            "Bao Lô 2",
            "Bao Lô 3",
            "Lô Xiên 2",
            "Lô Xiên 3",
            "Lô Xiên 4",
            "Đầu",
            "Đuôi",
            "Đề Đầu",
            "Đề Đặc Biệt",
            "Đánh Đầu Đuôi",
            "Ba Càng",
            "Ba Càng Đầu",
            "Ba Càng Đuôi",
            "Ba Càng Đầu Đuôi",
            "Lô Trượt Xiên 4",
            "Lô Trượt Xiên 8",
            "Lô Trượt Xiên 10",
            "Xỉu Chủ Đầu",
            "Xỉu Chủ Đuôi",
            "Xỉu Chủ Đầu Đuôi",
            "Đá 2",
            "Đá 3",
            "Đá 4",
            "Lô Trượt Xiên 14",
            "Lô Trượt Xiên 12",
        ];
        // Luong so can gui len k phai so chu so
        Code.LOTO_GAME_MODE_NUM_REQUIRE = [
            0,
            1,
            1,
            2,
            3,
            4,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            4,
            8,
            10,
            1,
            1,
            1,
            2,
            3,
            4,
            14,
            12,
        ];
        // Group Id available at Location
        Code.LOTO_GROUP_BAC = [1, 2, 4, 5, 6];
        Code.LOTO_GROUP_TRUNG = [1, 2, 3, 4, 5, 6];
        Code.LOTO_GROUP_NAM = [1, 3, 4, 6, 7, 8];
        // Mode Id available at Location
        Code.LOTO_MODE_BAC = [1, 2, 3, 4, 5, 9, 11, 16, 17, 24, 25];
        Code.LOTO_MODE_TRUNG = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17];
        Code.LOTO_MODE_NAM = [1, 2, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        // Channel Id available at Location
        Code.LOTO_CHANNEL_BAC = [1];
        Code.LOTO_CHANNEL_TRUNG = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        Code.LOTO_CHANNEL_NAM = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        return Code;
    }());
    cmd.Code = Code;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

cc._RF.pop();