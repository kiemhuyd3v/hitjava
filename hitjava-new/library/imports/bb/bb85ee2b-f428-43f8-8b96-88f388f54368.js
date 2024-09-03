"use strict";
cc._RF.push(module, 'bb85e4r9ChD+IuWiPOI9UNo', 'TaiXiuSieuToc.Cmd');
// TaiXiuSieuToc/Scripts/TaiXiuSieuToc.Cmd.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd = void 0;
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.CMD_51S = 5;
        Code.CMD_50S = 1;
        Code.CMD_14S = 2;
        Code.CMD_BET = 3;
        Code.CMD_WIN_USER = 4;
        Code.CMD_REFUND_USER = 7;
        Code.CMD_HISTORY = 6;
        Code.CMD_TXRECORD_HISTORY = 8;
        Code.CMD_THONGKE_PHIEN = 9;
        Code.CMD_CHAT = 10;
        Code.CMD_CHAT_ALL = 11;
        Code.CMD_MAINTAIN = 12;
        Code.CMD_USER_BET = 13;
        Code.CMD_TOP_HONOR = 14;
        Code.CMD_DIS_TX = 20;
        return Code;
    }());
    cmd.Code = Code;
    var API = /** @class */ (function () {
        function API() {
        }
        API.LOGIN = "api/login";
        API.WS = "websocket/ws-taixiu";
        API.USER = "/user/queue/tx";
        API.DISCONNECT = "/queue/disconnect";
        API.CHAT = "/topic/chats";
        API.HISTORY_BET = 'api/tx/lichsucuoc';
        return API;
    }());
    cmd.API = API;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

cc._RF.pop();