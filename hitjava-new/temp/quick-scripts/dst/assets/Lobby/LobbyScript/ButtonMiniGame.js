
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/ButtonMiniGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43933Wy759F+qsbqvxc3BMb', 'ButtonMiniGame');
// Lobby/LobbyScript/ButtonMiniGame.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../Loading/src/Configs");
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var SPUtils_1 = require("./Script/common/SPUtils");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonMiniGame = /** @class */ (function (_super) {
    __extends(ButtonMiniGame, _super);
    function ButtonMiniGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelTime = null;
        _this.labelTimePanel = null;
        _this.button = null;
        _this.buttonAG = null;
        _this.buttonTxSieuToc = null;
        _this.buttonIBC = null;
        _this.buttonWM = null;
        _this.panel = null;
        _this.container = null;
        _this.buttonClicked = true;
        _this.buttonMoved = cc.Vec2.ZERO;
        _this.buttonClickedAG = true;
        _this.buttonMovedAG = cc.Vec2.ZERO;
        _this.buttonClickedIBC = true;
        _this.buttonMovedIBC = cc.Vec2.ZERO;
        _this.buttonClickedWM = true;
        _this.buttonMovedWM = cc.Vec2.ZERO;
        return _this;
    }
    ButtonMiniGame.prototype.onLoad = function () {
        var _this = this;
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            this.buttonTxSieuToc.color = cc.Color.GRAY;
            this.buttonTxSieuToc.getComponent(cc.Button).interactable = false;
        }
        this.panel.active = false;
        this.button.active = false;
        this.labelTime.string = "00";
        this.labelTimePanel.string = "00";
        this.button.x = cc.winSize.width / 2 - 50;
        this.button.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.buttonClicked = true;
            _this.buttonMoved = cc.Vec2.ZERO;
        }, this);
        this.button.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.buttonMoved = _this.buttonMoved.add(event.getDelta());
            if (_this.buttonClicked) {
                if (Math.abs(_this.buttonMoved.x) > 30 || Math.abs(_this.buttonMoved.y) > 30) {
                    var pos = _this.button.position;
                    pos.x += _this.buttonMoved.x;
                    pos.y += _this.buttonMoved.y;
                    _this.button.position = pos;
                    _this.buttonClicked = false;
                }
            }
            else {
                var pos = _this.button.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.button.position = pos;
            }
        }, this);
        this.button.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.buttonClicked) {
                _this.actButton();
            }
            var posX = _this.button.x > 0 ? cc.winSize.width / 2 - 55 : -cc.winSize.width / 2 + 90;
            cc.tween(_this.button).to(0.3, { x: posX }, { easing: cc.easing.sineOut }).start();
        }, this);
        //AG
        this.buttonAG.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.buttonClickedAG = true;
            _this.buttonMovedAG = cc.Vec2.ZERO;
        }, this);
        this.buttonAG.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.buttonMovedAG = _this.buttonMovedAG.add(event.getDelta());
            if (_this.buttonClickedAG) {
                if (Math.abs(_this.buttonMovedAG.x) > 30 || Math.abs(_this.buttonMovedAG.y) > 30) {
                    var pos = _this.buttonAG.position;
                    pos.x += _this.buttonMovedAG.x;
                    pos.y += _this.buttonMovedAG.y;
                    _this.buttonAG.position = pos;
                    _this.buttonClickedAG = false;
                }
            }
            else {
                var pos = _this.buttonAG.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.buttonAG.position = pos;
            }
        }, this);
        this.buttonAG.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.buttonClickedAG) {
                _this.actButtonAG();
            }
        }, this);
        //IBC
        this.buttonIBC.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.buttonClickedIBC = true;
            _this.buttonMovedIBC = cc.Vec2.ZERO;
        }, this);
        this.buttonIBC.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.buttonMovedIBC = _this.buttonMovedIBC.add(event.getDelta());
            if (_this.buttonClickedIBC) {
                if (Math.abs(_this.buttonMovedIBC.x) > 30 || Math.abs(_this.buttonMovedIBC.y) > 30) {
                    var pos = _this.buttonIBC.position;
                    pos.x += _this.buttonMovedIBC.x;
                    pos.y += _this.buttonMovedIBC.y;
                    _this.buttonIBC.position = pos;
                    _this.buttonClickedIBC = false;
                }
            }
            else {
                var pos = _this.buttonIBC.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.buttonIBC.position = pos;
            }
        }, this);
        this.buttonIBC.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.buttonClickedIBC) {
                _this.actButtonIBC();
            }
        }, this);
        //WM
        this.buttonWM.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.buttonClickedWM = true;
            _this.buttonMovedWM = cc.Vec2.ZERO;
        }, this);
        this.buttonWM.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.buttonMovedWM = _this.buttonMovedWM.add(event.getDelta());
            if (_this.buttonClickedWM) {
                if (Math.abs(_this.buttonMovedWM.x) > 30 || Math.abs(_this.buttonMovedWM.y) > 30) {
                    var pos = _this.buttonWM.position;
                    pos.x += _this.buttonMovedWM.x;
                    pos.y += _this.buttonMovedWM.y;
                    _this.buttonWM.position = pos;
                    _this.buttonClickedWM = false;
                }
            }
            else {
                var pos = _this.buttonWM.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.buttonWM.position = pos;
            }
        }, this);
        this.buttonWM.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.buttonClickedWM) {
                _this.actButtonWM();
            }
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.UPDATE_TIME_BUTTON:
                    {
                        var res = new Lobby_Cmd_1.default.ReceiveUpdateTimeButton(data);
                        _this.labelTime.string = res.remainTime > 9 ? res.remainTime.toString() : "0" + res.remainTime;
                        _this.labelTimePanel.string = res.remainTime > 9 ? res.remainTime.toString() : "0" + res.remainTime;
                    }
                    break;
            }
        }, this);
    };
    ButtonMiniGame.prototype.actButtonIBC = function () {
        if (Configs_1.default.Login.CACHE_IBC) {
            SPUtils_1.default.setMusicVolumn(0);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
            App_1.default.instance.cacheWebView["IBC"].position = cc.v3(0, 0, 0);
        }
        else {
            App_1.default.instance.actLoginIBC();
        }
    };
    ButtonMiniGame.prototype.actButtonAG = function () {
        if (Configs_1.default.Login.CACHE_AG) {
            SPUtils_1.default.setMusicVolumn(0);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
            ////Utils.Log("actButtonAG:" + App.instance.cacheWebView["AG"]);
            App_1.default.instance.cacheWebView["AG"].position = cc.v3(0, 0, 0);
        }
        else {
            App_1.default.instance.actLoginAG();
        }
    };
    ButtonMiniGame.prototype.actButtonWM = function () {
        if (Configs_1.default.Login.CACHE_WM) {
            SPUtils_1.default.setMusicVolumn(0);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
            App_1.default.instance.cacheWebView["WM"].position = cc.v3(0, 0, 0);
        }
        else {
            App_1.default.instance.actLoginWM();
        }
    };
    ButtonMiniGame.prototype.show = function () {
        this.panel.active = false;
        this.button.active = true;
        this.labelTime.string = "00";
        this.labelTimePanel.string = "00";
    };
    ButtonMiniGame.prototype.hidden = function () {
        this.panel.active = false;
        this.button.active = false;
    };
    ButtonMiniGame.prototype.showTimeTaiXiu = function (isShow) {
        this.labelTime.node.parent.active = isShow;
    };
    ButtonMiniGame.prototype.actButton = function () {
        this.panel.active = true;
        this.button.active = false;
        cc.tween(this.panel.getChildByName("Container")).set({ angle: -180, scale: 0 }).to(0.3, { scale: 1.0, angle: 0 }, { easing: cc.easing.sineOut }).start();
    };
    ButtonMiniGame.prototype.actHidden = function () {
        var _this = this;
        cc.tween(this.panel.getChildByName("Container")).to(0.3, { angle: -180, scale: 0 }, { easing: cc.easing.sineIn }).call(function () {
            _this.panel.active = false;
            _this.button.active = true;
        }).start();
    };
    ButtonMiniGame.prototype.actTaiXiu = function () {
        App_1.default.instance.openMiniGameTaiXiuDouble("TaiXiuDouble", "TaiXiuDouble");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actTaiXiuMD5 = function () {
        App_1.default.instance.openMiniGameTaiXiuSieuToc("TaiXiuMD5", "TaiXiuMD5");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actMiniPoker = function () {
        App_1.default.instance.openMiniGameMiniPoker("MiniPoker", "MiniPoker");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actSlot3x3 = function () {
        App_1.default.instance.openMiniGameSlot3x3("Slot3x3", "Slot3x3");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actSlot3x3Gem = function () {
        App_1.default.instance.openMiniGameSlot3x3Gem("Slot3x3Gem", "Slot3x3Gem");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actCaoThap = function () {
        App_1.default.instance.openMiniGameCaoThap("CaoThap", "CaoThap");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actBauCua = function () {
        App_1.default.instance.openMiniGameBauCua("BauCua", "BauCua");
        this.actHidden();
    };
    ButtonMiniGame.prototype.actChimDien = function () {
        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_coming_soon"));
        this.actHidden();
    };
    ButtonMiniGame.prototype.actMaintain = function () {
        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_reparing"));
        this.actHidden();
    };
    ButtonMiniGame.prototype.actOanTuTi = function () {
        App_1.default.instance.openMiniGameOneTuTi("OanTuTi", "OanTuTi");
        this.actHidden();
    };
    __decorate([
        property(cc.Label)
    ], ButtonMiniGame.prototype, "labelTime", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonMiniGame.prototype, "labelTimePanel", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "button", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "buttonAG", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "buttonTxSieuToc", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "buttonIBC", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "buttonWM", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "panel", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonMiniGame.prototype, "container", void 0);
    ButtonMiniGame = __decorate([
        ccclass
    ], ButtonMiniGame);
    return ButtonMiniGame;
}(cc.Component));
exports.default = ButtonMiniGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxCdXR0b25NaW5pR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFFaEQseUNBQThCO0FBQzlCLDJDQUFzQztBQUN0Qyx1RUFBa0U7QUFDbEUsbURBQThDO0FBRTlDLGlGQUE0RTtBQUM1RSx1RUFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE0U0M7UUF6U0csZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUdoQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUVsQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixpQkFBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTNCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLG1CQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0Isc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG9CQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFOUIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsbUJBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7SUFxUXpDLENBQUM7SUFuUUcsK0JBQU0sR0FBTjtRQUFBLGlCQStJ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QztJQUNyQixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLGFBQUcsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBeFNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDYTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNRO0lBM0JULGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E0U2xDO0lBQUQscUJBQUM7Q0E1U0QsQUE0U0MsQ0E1UzJDLEVBQUUsQ0FBQyxTQUFTLEdBNFN2RDtrQkE1U29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0dsb2JhbFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9Mb2JieS5DbWRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgU1BVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1NQVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25NaW5pR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxUaW1lOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxUaW1lUGFuZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidXR0b25BRzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidXR0b25UeFNpZXVUb2M6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnV0dG9uSUJDOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ1dHRvbldNOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGJ1dHRvbkNsaWNrZWQgPSB0cnVlO1xuICAgIHByaXZhdGUgYnV0dG9uTW92ZWQgPSBjYy5WZWMyLlpFUk87XG5cbiAgICBwcml2YXRlIGJ1dHRvbkNsaWNrZWRBRyA9IHRydWU7XG4gICAgcHJpdmF0ZSBidXR0b25Nb3ZlZEFHID0gY2MuVmVjMi5aRVJPO1xuXG4gICAgcHJpdmF0ZSBidXR0b25DbGlja2VkSUJDID0gdHJ1ZTtcbiAgICBwcml2YXRlIGJ1dHRvbk1vdmVkSUJDID0gY2MuVmVjMi5aRVJPO1xuXG4gICAgcHJpdmF0ZSBidXR0b25DbGlja2VkV00gPSB0cnVlO1xuICAgIHByaXZhdGUgYnV0dG9uTW92ZWRXTSA9IGNjLlZlYzIuWkVSTztcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25UeFNpZXVUb2MuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuICAgICAgICAgICAgdGhpcy5idXR0b25UeFNpZXVUb2MuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idXR0b24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFiZWxUaW1lLnN0cmluZyA9IFwiMDBcIjtcbiAgICAgICAgdGhpcy5sYWJlbFRpbWVQYW5lbC5zdHJpbmcgPSBcIjAwXCI7XG4gICAgICAgIHRoaXMuYnV0dG9uLnggPSBjYy53aW5TaXplLndpZHRoIC8gMiAtIDUwO1xuICAgICAgICB0aGlzLmJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25Nb3ZlZCA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5idXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbk1vdmVkID0gdGhpcy5idXR0b25Nb3ZlZC5hZGQoZXZlbnQuZ2V0RGVsdGEoKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5idXR0b25DbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuYnV0dG9uTW92ZWQueCkgPiAzMCB8fCBNYXRoLmFicyh0aGlzLmJ1dHRvbk1vdmVkLnkpID4gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYnV0dG9uLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSB0aGlzLmJ1dHRvbk1vdmVkLng7XG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IHRoaXMuYnV0dG9uTW92ZWQueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b24ucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYnV0dG9uLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHBvcy54ICs9IGV2ZW50LmdldERlbHRhWCgpO1xuICAgICAgICAgICAgICAgIHBvcy55ICs9IGV2ZW50LmdldERlbHRhWSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0QnV0dG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcG9zWCA9IHRoaXMuYnV0dG9uLnggPiAwID8gY2Mud2luU2l6ZS53aWR0aCAvIDIgLSA1NSA6IC1jYy53aW5TaXplLndpZHRoIC8gMiArIDkwO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idXR0b24pLnRvKDAuMywgeyB4OiBwb3NYIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KS5zdGFydCgpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvL0FHXG4gICAgICAgIHRoaXMuYnV0dG9uQUcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idXR0b25DbGlja2VkQUcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25Nb3ZlZEFHID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbkFHLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idXR0b25Nb3ZlZEFHID0gdGhpcy5idXR0b25Nb3ZlZEFHLmFkZChldmVudC5nZXREZWx0YSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvbkNsaWNrZWRBRykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmJ1dHRvbk1vdmVkQUcueCkgPiAzMCB8fCBNYXRoLmFicyh0aGlzLmJ1dHRvbk1vdmVkQUcueSkgPiAzMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5idXR0b25BRy5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggKz0gdGhpcy5idXR0b25Nb3ZlZEFHLng7XG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IHRoaXMuYnV0dG9uTW92ZWRBRy55O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkFHLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrZWRBRyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYnV0dG9uQUcucG9zaXRpb247XG4gICAgICAgICAgICAgICAgcG9zLnggKz0gZXZlbnQuZ2V0RGVsdGFYKCk7XG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gZXZlbnQuZ2V0RGVsdGFZKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25BRy5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5idXR0b25BRy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uQ2xpY2tlZEFHKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RCdXR0b25BRygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvL0lCQ1xuICAgICAgICB0aGlzLmJ1dHRvbklCQy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrZWRJQkMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idXR0b25Nb3ZlZElCQyA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5idXR0b25JQkMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbk1vdmVkSUJDID0gdGhpcy5idXR0b25Nb3ZlZElCQy5hZGQoZXZlbnQuZ2V0RGVsdGEoKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5idXR0b25DbGlja2VkSUJDKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuYnV0dG9uTW92ZWRJQkMueCkgPiAzMCB8fCBNYXRoLmFicyh0aGlzLmJ1dHRvbk1vdmVkSUJDLnkpID4gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYnV0dG9uSUJDLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSB0aGlzLmJ1dHRvbk1vdmVkSUJDLng7XG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IHRoaXMuYnV0dG9uTW92ZWRJQkMueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25JQkMucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xpY2tlZElCQyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYnV0dG9uSUJDLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHBvcy54ICs9IGV2ZW50LmdldERlbHRhWCgpO1xuICAgICAgICAgICAgICAgIHBvcy55ICs9IGV2ZW50LmdldERlbHRhWSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uSUJDLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbklCQy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uQ2xpY2tlZElCQykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0QnV0dG9uSUJDKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vV01cbiAgICAgICAgdGhpcy5idXR0b25XTS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrZWRXTSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbk1vdmVkV00gPSBjYy5WZWMyLlpFUk87XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uV00ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbk1vdmVkV00gPSB0aGlzLmJ1dHRvbk1vdmVkV00uYWRkKGV2ZW50LmdldERlbHRhKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uQ2xpY2tlZFdNKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuYnV0dG9uTW92ZWRXTS54KSA+IDMwIHx8IE1hdGguYWJzKHRoaXMuYnV0dG9uTW92ZWRXTS55KSA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmJ1dHRvbldNLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSB0aGlzLmJ1dHRvbk1vdmVkV00ueDtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgKz0gdGhpcy5idXR0b25Nb3ZlZFdNLnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uV00ucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xpY2tlZFdNID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5idXR0b25XTS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBwb3MueCArPSBldmVudC5nZXREZWx0YVgoKTtcbiAgICAgICAgICAgICAgICBwb3MueSArPSBldmVudC5nZXREZWx0YVkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbldNLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbldNLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5idXR0b25DbGlja2VkV00pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdEJ1dHRvbldNKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhOiBVaW50OEFycmF5KSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9USU1FX0JVVFRPTjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZVRpbWVCdXR0b24oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsVGltZS5zdHJpbmcgPSByZXMucmVtYWluVGltZSA+IDkgPyByZXMucmVtYWluVGltZS50b1N0cmluZygpIDogXCIwXCIgKyByZXMucmVtYWluVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxUaW1lUGFuZWwuc3RyaW5nID0gcmVzLnJlbWFpblRpbWUgPiA5ID8gcmVzLnJlbWFpblRpbWUudG9TdHJpbmcoKSA6IFwiMFwiICsgcmVzLnJlbWFpblRpbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIGFjdEJ1dHRvbklCQygpIHtcbiAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ0FDSEVfSUJDKSB7XG4gICAgICAgICAgICBTUFV0aWxzLnNldE11c2ljVm9sdW1uKDApO1xuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5PTl9BVURJT19DSEFOR0VEKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYWNoZVdlYlZpZXdbXCJJQkNcIl0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RMb2dpbklCQygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0QnV0dG9uQUcoKSB7XG4gICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNBQ0hFX0FHKSB7XG4gICAgICAgICAgICBTUFV0aWxzLnNldE11c2ljVm9sdW1uKDApO1xuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5PTl9BVURJT19DSEFOR0VEKTtcbiAgICAgICAgLy8vL1V0aWxzLkxvZyhcImFjdEJ1dHRvbkFHOlwiICsgQXBwLmluc3RhbmNlLmNhY2hlV2ViVmlld1tcIkFHXCJdKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYWNoZVdlYlZpZXdbXCJBR1wiXS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFjdExvZ2luQUcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdEJ1dHRvbldNKCkge1xuICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5DQUNIRV9XTSkge1xuICAgICAgICAgICAgU1BVdGlscy5zZXRNdXNpY1ZvbHVtbigwKTtcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuT05fQVVESU9fQ0hBTkdFRCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FjaGVXZWJWaWV3W1wiV01cIl0ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RMb2dpbldNKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMucGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGFiZWxUaW1lLnN0cmluZyA9IFwiMDBcIjtcbiAgICAgICAgdGhpcy5sYWJlbFRpbWVQYW5lbC5zdHJpbmcgPSBcIjAwXCI7XG4gICAgfVxuXG4gICAgaGlkZGVuKCkge1xuXG4gICAgICAgIHRoaXMucGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xuXG5cblxuICAgIH1cblxuICAgIHNob3dUaW1lVGFpWGl1KGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmxhYmVsVGltZS5ub2RlLnBhcmVudC5hY3RpdmUgPSBpc1Nob3c7XG4gICAgfVxuXG4gICAgYWN0QnV0dG9uKCkge1xuICAgICAgICB0aGlzLnBhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnBhbmVsLmdldENoaWxkQnlOYW1lKFwiQ29udGFpbmVyXCIpKS5zZXQoeyBhbmdsZTogLTE4MCwgc2NhbGU6IDAgfSkudG8oMC4zLCB7IHNjYWxlOiAxLjAsIGFuZ2xlOiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGFjdEhpZGRlbigpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5wYW5lbC5nZXRDaGlsZEJ5TmFtZShcIkNvbnRhaW5lclwiKSkudG8oMC4zLCB7IGFuZ2xlOiAtMTgwLCBzY2FsZTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGFjdFRhaVhpdSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5NaW5pR2FtZVRhaVhpdURvdWJsZShcIlRhaVhpdURvdWJsZVwiLCBcIlRhaVhpdURvdWJsZVwiKTtcbiAgICAgICAgdGhpcy5hY3RIaWRkZW4oKTtcbiAgICB9XG4gICAgYWN0VGFpWGl1TUQ1KCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uub3Blbk1pbmlHYW1lVGFpWGl1U2lldVRvYyhcIlRhaVhpdU1ENVwiLCBcIlRhaVhpdU1ENVwiKTtcbiAgICAgICAgdGhpcy5hY3RIaWRkZW4oKTtcbiAgICB9XG5cbiAgICBhY3RNaW5pUG9rZXIoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuTWluaUdhbWVNaW5pUG9rZXIoXCJNaW5pUG9rZXJcIiwgXCJNaW5pUG9rZXJcIik7XG4gICAgICAgIHRoaXMuYWN0SGlkZGVuKCk7XG4gICAgfVxuXG4gICAgYWN0U2xvdDN4MygpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5NaW5pR2FtZVNsb3QzeDMoXCJTbG90M3gzXCIsIFwiU2xvdDN4M1wiKTtcbiAgICAgICAgdGhpcy5hY3RIaWRkZW4oKTtcbiAgICB9XG4gICAgYWN0U2xvdDN4M0dlbSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5NaW5pR2FtZVNsb3QzeDNHZW0oXCJTbG90M3gzR2VtXCIsIFwiU2xvdDN4M0dlbVwiKTtcbiAgICAgICAgdGhpcy5hY3RIaWRkZW4oKTtcbiAgICB9XG5cbiAgICBhY3RDYW9UaGFwKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uub3Blbk1pbmlHYW1lQ2FvVGhhcChcIkNhb1RoYXBcIiwgXCJDYW9UaGFwXCIpO1xuICAgICAgICB0aGlzLmFjdEhpZGRlbigpO1xuICAgIH1cblxuICAgIGFjdEJhdUN1YSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5NaW5pR2FtZUJhdUN1YShcIkJhdUN1YVwiLCBcIkJhdUN1YVwiKTtcbiAgICAgICAgdGhpcy5hY3RIaWRkZW4oKTtcbiAgICB9XG5cbiAgICBhY3RDaGltRGllbigpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2NvbWluZ19zb29uXCIpKTtcbiAgICAgICAgdGhpcy5hY3RIaWRkZW4oKTtcbiAgICB9XG4gICAgYWN0TWFpbnRhaW4oKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9yZXBhcmluZ1wiKSk7XG4gICAgICAgIHRoaXMuYWN0SGlkZGVuKCk7XG4gICAgfVxuXG4gICAgYWN0T2FuVHVUaSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5NaW5pR2FtZU9uZVR1VGkoXCJPYW5UdVRpXCIsIFwiT2FuVHVUaVwiKTtcbiAgICAgICAgdGhpcy5hY3RIaWRkZW4oKTtcbiAgICB9XG59Il19