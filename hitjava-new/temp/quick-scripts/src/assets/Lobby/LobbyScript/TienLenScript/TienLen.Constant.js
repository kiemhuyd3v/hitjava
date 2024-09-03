"use strict";
cc._RF.push(module, '0f7d1OQxSZGDLP7T8ukp1Tu', 'TienLen.Constant');
// Lobby/LobbyScript/TienLenScript/TienLen.Constant.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TienLenConstant = void 0;
var TienLenConstant;
(function (TienLenConstant) {
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
    TienLenConstant.GameState = GameState;
    var Config = /** @class */ (function () {
        function Config() {
        }
        Config.MAX_PLAYER = 4;
        Config.MAX_CARDS = 13;
        return Config;
    }());
    TienLenConstant.Config = Config;
    var SortType = /** @class */ (function () {
        function SortType() {
        }
        SortType.kSortTangDan = 0;
        SortType.kSortGroup = 1;
        SortType.kSortUnkown = 2;
        return SortType;
    }());
    TienLenConstant.SortType = SortType;
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
    TienLenConstant.PlayerType = PlayerType;
})(TienLenConstant = exports.TienLenConstant || (exports.TienLenConstant = {}));
exports.default = TienLenConstant;

cc._RF.pop();