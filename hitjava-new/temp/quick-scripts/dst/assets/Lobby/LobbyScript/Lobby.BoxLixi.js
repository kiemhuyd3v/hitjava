
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.BoxLixi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Cb3hMaXhpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCwrQ0FBMEM7QUFDMUMsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBbUZDO1FBaEZHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFDeEIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGNBQVEsR0FBVyxDQUFDLENBQUM7O1FBNkVyQixpQkFBaUI7SUFDckIsQ0FBQztJQTNFRyx3QkFBd0I7SUFFeEIsd0JBQU0sR0FBTjtRQUFBLGlCQWNDO1FBYkQsNkRBQTZEO1FBQzdELCtFQUErRTtRQUMvRSx1RkFBdUY7UUFDdkYsb0NBQW9DO1FBQ3BDLGlDQUFpQztRQUNqQyxXQUFXO1FBQ1gsU0FBUztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUs7WUFDNUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQ3ZDO1lBQ0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLElBQUksYUFBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjthQUFNLElBQUksYUFBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFDRCx5QkFBTyxHQUFQO1FBQUEsaUJBb0JDO1FBbkJHLGNBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDM0gsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsT0FBTzthQUNWO2lCQUFNO2dCQUNILGdCQUFnQjtnQkFDaEIsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUNyQixhQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2pELEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDdkI7cUJBQU0sSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQywwQkFBMEI7b0JBQ2xELEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztvQkFDcEMsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFO3dCQUN6QixhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO3FCQUNsQzt5QkFBTTt3QkFDSCxhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztxQkFDaEQ7aUJBRUo7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELDhCQUFZLEdBQVo7UUFBQSxpQkEwQkM7UUF6QkcsSUFBSSxhQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixJQUFJLGFBQWEsR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDMUMsSUFBSSxhQUFhLEdBQUcsSUFBSSxFQUFFO29CQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQzVILElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDcEosSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUNwSixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDNUU7cUJBQU0sSUFBSSxhQUFhLEdBQUcsRUFBRSxFQUFFO29CQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3BKLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDcEosS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDbkU7cUJBQU0sSUFBSSxhQUFhLElBQUksQ0FBQyxFQUFFO29CQUMzQixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFDOUIsa0JBQWtCO29CQUNsQixhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUNsQztnQkFDRCxhQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekM7YUFBTSxJQUFJLGFBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBRWxDO0lBRUwsQ0FBQztJQTdFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNLO0lBSFAsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQW1GM0I7SUFBRCxjQUFDO0NBbkZELEFBbUZDLENBbkZvQyxFQUFFLENBQUMsU0FBUyxHQW1GaEQ7a0JBbkZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94TGl4aSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUaW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgaXNNb3ZlID0gZmFsc2U7XG4gICAgZGlzdGFuY2U6IG51bWJlciA9IDA7XG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgIC8vICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAodG91Y2gpID0+IHtcbiAgICAvLyAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZCh0b3VjaC5nZXREZWx0YSgpKSk7XG4gICAgLy8gICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gTWF0aC5hYnModG91Y2guZ2V0RGVsdGEoKS54KSArIE1hdGguYWJzKHRvdWNoLmdldERlbHRhKCkueSk7XG4gICAgLy8gICAgICAgIGlmICh0aGlzLmRpc3RhbmNlID49IDcwKSB7XG4gICAgLy8gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG4gICAgLy8gICAgICAgIH1cbiAgICAvLyAgICB9KTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKHRvdWNoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNNb3ZlKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFjdFNob3dQb3B1cFJ1bGVMaXhpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKEFwcC5pbnN0YW5jZS50aW1lTGl4aSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q291bnREb3duKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQXBwLmluc3RhbmNlLnRpbWVMaXhpID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyA9IFwixJBhbmcgZGnhu4VuIHJhXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0SW5mbygpIHtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAyMDM2LCBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIFwiYXRcIjogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiwgXCJhY1wiOiBcInRpbWVcIiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzWydkYXRhJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UudGltZUxpeGkgPSByZXNbJ2RhdGEnXVsnY291bnRUaW1lJ107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q291bnREb3duKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNbJ3N1Y2Nlc3MnXSkgey8vIGRhbmcgdHJvbmcgdGltZSBzdSBraWVuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyA9IFwixJBhbmcgZGnhu4VuIHJhXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJlcnJvckNvZGVcIl0gPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RHZXRFdmVudExpeGkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzWydtZXNzYWdlJ10pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRDb3VudERvd24oKSB7XG4gICAgICAgIGlmIChBcHAuaW5zdGFuY2UudGltZUxpeGkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGltZVJlbWFpblNlYyA9IEFwcC5pbnN0YW5jZS50aW1lTGl4aTtcbiAgICAgICAgICAgICAgICBpZiAodGltZVJlbWFpblNlYyA+IDM2MDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBNYXRoLmZsb29yKHRpbWVSZW1haW5TZWMgLyAzNjAwKSA+IDkgPyBNYXRoLmZsb29yKHRpbWVSZW1haW5TZWMgLyAzNjAwKSA6IFwiMFwiICsgTWF0aC5mbG9vcih0aW1lUmVtYWluU2VjIC8gMzYwMCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZVJlbWFpblNlYyAlIDM2MDApIC8gNjApID4gOSA/IE1hdGguZmxvb3IoKHRpbWVSZW1haW5TZWMgJSAzNjAwKSAvIDYwKSA6IFwiMFwiICsgTWF0aC5mbG9vcigodGltZVJlbWFpblNlYyAlIDM2MDApIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VjY29uZCA9IE1hdGguZmxvb3IoKHRpbWVSZW1haW5TZWMgJSAzNjAwKSAlIDYwKSA+IDkgPyBNYXRoLmZsb29yKCh0aW1lUmVtYWluU2VjICUgMzYwMCkgJSA2MCkgOiBcIjBcIiArIE1hdGguZmxvb3IoKHRpbWVSZW1haW5TZWMgJSAzNjAwKSAlIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nID0gY2MuanMuZm9ybWF0U3RyKFwiJXM6JXM6JXNcIiwgaG91ciwgbWludXRlcywgc2VjY29uZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aW1lUmVtYWluU2VjID4gNjApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lUmVtYWluU2VjICUgMzYwMCkgLyA2MCkgPiA5ID8gTWF0aC5mbG9vcigodGltZVJlbWFpblNlYyAlIDM2MDApIC8gNjApIDogXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lUmVtYWluU2VjICUgMzYwMCkgLyA2MCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWNjb25kID0gTWF0aC5mbG9vcigodGltZVJlbWFpblNlYyAlIDM2MDApICUgNjApID4gOSA/IE1hdGguZmxvb3IoKHRpbWVSZW1haW5TZWMgJSAzNjAwKSAlIDYwKSA6IFwiMFwiICsgTWF0aC5mbG9vcigodGltZVJlbWFpblNlYyAlIDM2MDApICUgNjApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgPSBjYy5qcy5mb3JtYXRTdHIoXCIlczolc1wiLCBtaW51dGVzLCBzZWNjb25kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVSZW1haW5TZWMgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nZXRJbmZvKCk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RHZXRFdmVudExpeGkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnRpbWVMaXhpLS07XG4gICAgICAgICAgICB9LCAxLjAsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwLjEpO1xuICAgICAgICB9IGVsc2UgaWYgKEFwcC5pbnN0YW5jZS50aW1lTGl4aSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RHZXRFdmVudExpeGkoKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19