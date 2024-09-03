"use strict";
cc._RF.push(module, 'f6b76VCQGJAYK649/BTz+N/', 'Lobby.BoxLixi');
// Lobby/LobbyScript/Lobby.BoxLixi.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxLixi = /** @class */ (function (_super) {
    __extends(BoxLixi, _super);
    function BoxLixi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbTime = null;
        _this.isMove = false;
        _this.distance = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    BoxLixi.prototype.onLoad = function () {
        var _this = this;
        //    this.node.on(cc.Node.EventType.TOUCH_MOVE, (touch) => {
        //        this.node.setPosition(this.node.getPosition().add(touch.getDelta()));
        //        this.distance += Math.abs(touch.getDelta().x) + Math.abs(touch.getDelta().y);
        //        if (this.distance >= 70) {
        //            this.isMove = true;
        //        }
        //    });
        this.node.on(cc.Node.EventType.TOUCH_END, function (touch) {
            if (!_this.isMove) {
                App_1.default.instance.actShowPopupRuleLixi();
            }
            _this.isMove = false;
        });
    };
    BoxLixi.prototype.start = function () {
        if (App_1.default.instance.timeLixi > 0) {
            this.setCountDown();
        }
        else if (App_1.default.instance.timeLixi == 0) {
            this.lbTime.string = "Đang diễn ra";
        }
    };
    BoxLixi.prototype.getInfo = function () {
        var _this = this;
        Http_1.default.get(Configs_1.default.App.API, { "c": 2036, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "ac": "time" }, function (err, res) {
            if (err) {
                return;
            }
            else {
                //  cc.log(res);
                if (res['data'] != null) {
                    App_1.default.instance.timeLixi = res['data']['countTime'];
                    _this.setCountDown();
                }
                else if (res['success']) { // dang trong time su kien
                    _this.lbTime.string = "Đang diễn ra";
                    if (res["errorCode"] == "0") {
                        App_1.default.instance.actGetEventLixi();
                    }
                    else {
                        App_1.default.instance.ShowAlertDialog(res['message']);
                    }
                }
            }
        });
    };
    BoxLixi.prototype.setCountDown = function () {
        var _this = this;
        if (App_1.default.instance.timeLixi > 0) {
            this.schedule(function () {
                var timeRemainSec = App_1.default.instance.timeLixi;
                if (timeRemainSec > 3600) {
                    var hour = Math.floor(timeRemainSec / 3600) > 9 ? Math.floor(timeRemainSec / 3600) : "0" + Math.floor(timeRemainSec / 3600);
                    var minutes = Math.floor((timeRemainSec % 3600) / 60) > 9 ? Math.floor((timeRemainSec % 3600) / 60) : "0" + Math.floor((timeRemainSec % 3600) / 60);
                    var seccond = Math.floor((timeRemainSec % 3600) % 60) > 9 ? Math.floor((timeRemainSec % 3600) % 60) : "0" + Math.floor((timeRemainSec % 3600) % 60);
                    _this.lbTime.string = cc.js.formatStr("%s:%s:%s", hour, minutes, seccond);
                }
                else if (timeRemainSec > 60) {
                    var minutes = Math.floor((timeRemainSec % 3600) / 60) > 9 ? Math.floor((timeRemainSec % 3600) / 60) : "0" + Math.floor((timeRemainSec % 3600) / 60);
                    var seccond = Math.floor((timeRemainSec % 3600) % 60) > 9 ? Math.floor((timeRemainSec % 3600) % 60) : "0" + Math.floor((timeRemainSec % 3600) % 60);
                    _this.lbTime.string = cc.js.formatStr("%s:%s", minutes, seccond);
                }
                else if (timeRemainSec == 0) {
                    _this.unscheduleAllCallbacks();
                    // this.getInfo();
                    App_1.default.instance.actGetEventLixi();
                }
                App_1.default.instance.timeLixi--;
            }, 1.0, cc.macro.REPEAT_FOREVER, 0.1);
        }
        else if (App_1.default.instance.timeLixi == 0) {
            this.unscheduleAllCallbacks();
            App_1.default.instance.actGetEventLixi();
        }
    };
    __decorate([
        property(cc.Label)
    ], BoxLixi.prototype, "lbTime", void 0);
    BoxLixi = __decorate([
        ccclass
    ], BoxLixi);
    return BoxLixi;
}(cc.Component));
exports.default = BoxLixi;

cc._RF.pop();