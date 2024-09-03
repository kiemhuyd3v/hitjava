
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuSieuToc/Scripts/TaiXiuSieuToc.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1U2lldVRvY1xcU2NyaXB0c1xcVGFpWGl1U2lldVRvYy5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBaUIsR0FBRyxDQTBCbkI7QUExQkQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBZ0JBLENBQUM7UUFmVSxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUMzQixXQUFDO0tBaEJELEFBZ0JDLElBQUE7SUFoQlksUUFBSSxPQWdCaEIsQ0FBQTtJQUNEO1FBQUE7UUFPQSxDQUFDO1FBTlUsU0FBSyxHQUFHLFdBQVcsQ0FBQztRQUNwQixNQUFFLEdBQUcscUJBQXFCLENBQUM7UUFDM0IsUUFBSSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hCLGNBQVUsR0FBRyxtQkFBbUIsQ0FBQztRQUNqQyxRQUFJLEdBQUcsY0FBYyxDQUFBO1FBQ3JCLGVBQVcsR0FBRyxtQkFBbUIsQ0FBQztRQUM3QyxVQUFDO0tBUEQsQUFPQyxJQUFBO0lBUFksT0FBRyxNQU9mLENBQUE7QUFDTCxDQUFDLEVBMUJnQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUEwQm5CO0FBQ0Qsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBuYW1lc3BhY2UgY21kIHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBDTURfNTFTID0gNTtcbiAgICAgICAgc3RhdGljIENNRF81MFMgPSAxO1xuICAgICAgICBzdGF0aWMgQ01EXzE0UyA9IDI7XG4gICAgICAgIHN0YXRpYyBDTURfQkVUID0gMztcbiAgICAgICAgc3RhdGljIENNRF9XSU5fVVNFUiA9IDQ7XG4gICAgICAgIHN0YXRpYyBDTURfUkVGVU5EX1VTRVIgPSA3O1xuICAgICAgICBzdGF0aWMgQ01EX0hJU1RPUlkgPSA2O1xuICAgICAgICBzdGF0aWMgQ01EX1RYUkVDT1JEX0hJU1RPUlkgPSA4O1xuICAgICAgICBzdGF0aWMgQ01EX1RIT05HS0VfUEhJRU4gPSA5O1xuICAgICAgICBzdGF0aWMgQ01EX0NIQVQgPSAxMDtcbiAgICAgICAgc3RhdGljIENNRF9DSEFUX0FMTCA9IDExO1xuICAgICAgICBzdGF0aWMgQ01EX01BSU5UQUlOID0gMTI7XG4gICAgICAgIHN0YXRpYyBDTURfVVNFUl9CRVQgPSAxMztcbiAgICAgICAgc3RhdGljIENNRF9UT1BfSE9OT1IgPSAxNDtcbiAgICAgICAgc3RhdGljIENNRF9ESVNfVFggPSAyMDtcbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIEFQSSB7XG4gICAgICAgIHN0YXRpYyBMT0dJTiA9IFwiYXBpL2xvZ2luXCI7XG4gICAgICAgIHN0YXRpYyBXUyA9IFwid2Vic29ja2V0L3dzLXRhaXhpdVwiO1xuICAgICAgICBzdGF0aWMgVVNFUiA9IFwiL3VzZXIvcXVldWUvdHhcIjtcbiAgICAgICAgc3RhdGljIERJU0NPTk5FQ1QgPSBcIi9xdWV1ZS9kaXNjb25uZWN0XCI7XG4gICAgICAgIHN0YXRpYyBDSEFUID0gXCIvdG9waWMvY2hhdHNcIlxuICAgICAgICBzdGF0aWMgSElTVE9SWV9CRVQgPSAnYXBpL3R4L2xpY2hzdWN1b2MnO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNtZDtcbiJdfQ==