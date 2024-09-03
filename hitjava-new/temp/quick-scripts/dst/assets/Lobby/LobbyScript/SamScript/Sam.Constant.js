
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/SamScript/Sam.Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5da32KQnDBClZ6olq3CkQa3', 'Sam.Constant');
// Lobby/LobbyScript/SamScript/Sam.Constant.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamConstant = void 0;
var SamConstant;
(function (SamConstant) {
    var GameState = /** @class */ (function () {
        function GameState() {
        }
        GameState.NONE = -1;
        GameState.AUTOSTART = 0;
        GameState.JOINROOM = 4;
        GameState.FIRSTTURN = 1;
        GameState.CHIABAI = 2;
        GameState.CHANGETURN = 3;
        GameState.USERJOIN = 5;
        GameState.DANHBAI = 6;
        GameState.BOLUOT = 7;
        GameState.QUIT = 8;
        GameState.USERLEAVE = 12;
        GameState.ENDGAME = 13;
        GameState.UPDATEMATH = 14;
        GameState.UPDATEOWNERROOM = 15;
        GameState.PLAYCONTINUE = 16;
        GameState.CHATCHONG = 17;
        GameState.JACKPOT = 18;
        GameState.REASONQUIT = 19;
        GameState.NOTIFYOUTROOM = 20;
        GameState.WAITBONDOITHONG = 21;
        return GameState;
    }());
    SamConstant.GameState = GameState;
    var Config = /** @class */ (function () {
        function Config() {
        }
        Config.MAX_PLAYER = 5;
        Config.MAX_CARDS = 13;
        return Config;
    }());
    SamConstant.Config = Config;
    var SortType = /** @class */ (function () {
        function SortType() {
        }
        SortType.kSortTangDan = 0;
        SortType.kSortGroup = 1;
        SortType.kSortUnkown = 2;
        return SortType;
    }());
    SamConstant.SortType = SortType;
    var PlayerType = /** @class */ (function () {
        function PlayerType() {
        }
        PlayerType.MY = 0;
        PlayerType.ENEMY = 1;
        PlayerType.STATENONE = 0;
        PlayerType.STATEVIEWING = 1;
        PlayerType.STATEBAOSAM = 2;
        return PlayerType;
    }());
    SamConstant.PlayerType = PlayerType;
})(SamConstant = exports.SamConstant || (exports.SamConstant = {}));
exports.default = SamConstant;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTYW1TY3JpcHRcXFNhbS5Db25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFpQixXQUFXLENBMEMzQjtBQTFDRCxXQUFpQixXQUFXO0lBQ3hCO1FBQUE7UUFxQkEsQ0FBQztRQXBCVSxjQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDVixtQkFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGtCQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsbUJBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxpQkFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLG9CQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixpQkFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGdCQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsY0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULG1CQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsaUJBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixvQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQix5QkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixzQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixtQkFBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGlCQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2Isb0JBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsdUJBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIseUJBQWUsR0FBRyxFQUFFLENBQUM7UUFDaEMsZ0JBQUM7S0FyQkQsQUFxQkMsSUFBQTtJQXJCWSxxQkFBUyxZQXFCckIsQ0FBQTtJQUVEO1FBQUE7UUFHQSxDQUFDO1FBRlUsaUJBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBUyxHQUFHLEVBQUUsQ0FBQztRQUMxQixhQUFDO0tBSEQsQUFHQyxJQUFBO0lBSFksa0JBQU0sU0FHbEIsQ0FBQTtJQUVEO1FBQUE7UUFJQSxDQUFDO1FBSFUscUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsbUJBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixvQkFBVyxHQUFHLENBQUMsQ0FBQztRQUMzQixlQUFDO0tBSkQsQUFJQyxJQUFBO0lBSlksb0JBQVEsV0FJcEIsQ0FBQTtJQUVEO1FBQUE7UUFNQSxDQUFDO1FBTFUsYUFBRSxHQUFHLENBQUMsQ0FBQztRQUNQLGdCQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysb0JBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCx1QkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixzQkFBVyxHQUFHLENBQUMsQ0FBQztRQUMzQixpQkFBQztLQU5ELEFBTUMsSUFBQTtJQU5ZLHNCQUFVLGFBTXRCLENBQUE7QUFDTCxDQUFDLEVBMUNnQixXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQTBDM0I7QUFDRCxrQkFBZSxXQUFXLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbmFtZXNwYWNlIFNhbUNvbnN0YW50IHtcbiAgICBleHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcbiAgICAgICAgc3RhdGljIE5PTkUgPSAtMTtcbiAgICAgICAgc3RhdGljIEFVVE9TVEFSVCA9IDA7XG4gICAgICAgIHN0YXRpYyBKT0lOUk9PTSA9IDQ7XG4gICAgICAgIHN0YXRpYyBGSVJTVFRVUk4gPSAxO1xuICAgICAgICBzdGF0aWMgQ0hJQUJBSSA9IDI7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VUVVJOID0gMztcbiAgICAgICAgc3RhdGljIFVTRVJKT0lOID0gNTtcbiAgICAgICAgc3RhdGljIERBTkhCQUkgPSA2O1xuICAgICAgICBzdGF0aWMgQk9MVU9UID0gNztcbiAgICAgICAgc3RhdGljIFFVSVQgPSA4O1xuICAgICAgICBzdGF0aWMgVVNFUkxFQVZFID0gMTI7XG4gICAgICAgIHN0YXRpYyBFTkRHQU1FID0gMTM7XG4gICAgICAgIHN0YXRpYyBVUERBVEVNQVRIID0gMTQ7XG4gICAgICAgIHN0YXRpYyBVUERBVEVPV05FUlJPT00gPSAxNTtcbiAgICAgICAgc3RhdGljIFBMQVlDT05USU5VRSA9IDE2O1xuICAgICAgICBzdGF0aWMgQ0hBVENIT05HID0gMTc7XG4gICAgICAgIHN0YXRpYyBKQUNLUE9UID0gMTg7XG4gICAgICAgIHN0YXRpYyBSRUFTT05RVUlUID0gMTk7XG4gICAgICAgIHN0YXRpYyBOT1RJRllPVVRST09NID0gMjA7XG4gICAgICAgIHN0YXRpYyBXQUlUQk9ORE9JVEhPTkcgPSAyMTtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgICAgICAgc3RhdGljIE1BWF9QTEFZRVIgPSA1O1xuICAgICAgICBzdGF0aWMgTUFYX0NBUkRTID0gMTM7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNvcnRUeXBlIHtcbiAgICAgICAgc3RhdGljIGtTb3J0VGFuZ0RhbiA9IDA7XG4gICAgICAgIHN0YXRpYyBrU29ydEdyb3VwID0gMTtcbiAgICAgICAgc3RhdGljIGtTb3J0VW5rb3duID0gMjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUGxheWVyVHlwZSB7XG4gICAgICAgIHN0YXRpYyBNWSA9IDA7XG4gICAgICAgIHN0YXRpYyBFTkVNWSA9IDE7XG4gICAgICAgIHN0YXRpYyBTVEFURU5PTkUgPSAwO1xuICAgICAgICBzdGF0aWMgU1RBVEVWSUVXSU5HID0gMTtcbiAgICAgICAgc3RhdGljIFNUQVRFQkFPU0FNID0gMjtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBTYW1Db25zdGFudDsiXX0=