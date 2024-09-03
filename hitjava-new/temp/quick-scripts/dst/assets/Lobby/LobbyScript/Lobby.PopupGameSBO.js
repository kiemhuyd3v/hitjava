
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupGameSBO.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84d67q9v0pCMrh+xoewRWz/', 'Lobby.PopupGameSBO');
// Lobby/LobbyScript/Lobby.PopupGameSBO.ts

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
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupGameSBO = /** @class */ (function (_super) {
    __extends(PopupGameSBO, _super);
    function PopupGameSBO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    PopupGameSBO.prototype.onLoad = function () {
        this.node.y = cc.winSize.height;
    };
    PopupGameSBO.prototype.start = function () {
    };
    PopupGameSBO.prototype.show = function () {
        this.node.active = true;
        cc.tween(this.node).to(0.3, { y: 0 }, { easing: cc.easing.sineIn }).call(function () {
        }).start();
    };
    PopupGameSBO.prototype.onClickGame = function (even, data) {
        var gameName = data;
        switch (data) {
            case "SportsBook":
                break;
            case "Casino":
                break;
            case "Games":
                break;
            case "VirtualSports":
                break;
            case "SeamlessGame":
                break;
            case "ThirdPartySportsBook":
                break;
        }
        Http_1.default.get(App_1.default.API_SBO, { t: "Login", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, gc: gameName }, function (err, res) {
            ////Utils.Log("updateInfoSBO:" + JSON.stringify(res));
            App_1.default.instance.showLoading(false);
            if (res["res"] == 0) {
                if (Configs_1.default.App.IS_PRO == true && Configs_1.default.Login.UserType != "2") {
                    var url = "https://mkt.l0030.ig128.com/deposit_processlogin.aspx?lang=vn&token=" + res["data"]["data"];
                    if (cc.sys.isMobile == true) {
                        url = "https://ismart.l0030.ig128.com/deposit_processlogin.aspx?lang=vn&token=" + res["data"]["data"];
                    }
                    cc.sys.openURL(url);
                }
                else {
                    var url = "https:" + res['data'] + "&lang=vi-vn&oddstyle=MY&theme=sbo&device=" + (cc.sys.isNative ? "m" : "d");
                    ////Utils.Log("url=" + url);
                    cc.sys.openURL(url);
                }
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["message"]);
            }
        });
    };
    PopupGameSBO.prototype.onClickBack = function () {
        var _this = this;
        cc.tween(this.node).to(0.3, { y: cc.winSize.height }, { easing: cc.easing.backIn }).call(function () {
            _this.node.active = false;
        }).start();
    };
    __decorate([
        property(cc.Label)
    ], PopupGameSBO.prototype, "label", void 0);
    __decorate([
        property
    ], PopupGameSBO.prototype, "text", void 0);
    PopupGameSBO = __decorate([
        ccclass
    ], PopupGameSBO);
    return PopupGameSBO;
}(cc.Component));
exports.default = PopupGameSBO;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cEdhbWVTQk8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELCtDQUEwQztBQUMxQywyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFvRUM7UUFqRUcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQTZEdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUE1REcsd0JBQXdCO0lBRXhCLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNwQyxDQUFDO0lBRUQsNEJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwyQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRCxrQ0FBVyxHQUFYLFVBQVksSUFBSSxFQUFFLElBQUk7UUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixNQUFNO1lBQ1YsS0FBSyxlQUFlO2dCQUNoQixNQUFNO1lBQ1YsS0FBSyxjQUFjO2dCQUNmLE1BQU07WUFDVixLQUFLLHNCQUFzQjtnQkFDdkIsTUFBTTtTQUNiO1FBQ0QsY0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDbkgsc0RBQXNEO1lBQ3ZELGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakIsSUFBSSxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxHQUFHLEVBQUU7b0JBQzdELElBQUksR0FBRyxHQUFHLHNFQUFzRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7d0JBQ3pCLEdBQUcsR0FBRyx5RUFBeUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3pHO29CQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUV2QjtxQkFDSTtvQkFDRCxJQUFJLEdBQUcsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLDJDQUEyQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlHLDRCQUE0QjtvQkFDN0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3ZCO2FBQ0o7aUJBQ0k7Z0JBQ0QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxrQ0FBVyxHQUFYO1FBQUEsaUJBSUM7UUFIRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBOUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0k7SUFHdkI7UUFEQyxRQUFROzhDQUNjO0lBTk4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW9FaEM7SUFBRCxtQkFBQztDQXBFRCxBQW9FQyxDQXBFeUMsRUFBRSxDQUFDLFNBQVMsR0FvRXJEO2tCQXBFb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwR2FtZVNCTyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnkgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjMsIHsgeTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgb25DbGlja0dhbWUoZXZlbiwgZGF0YSkge1xuICAgICAgICBsZXQgZ2FtZU5hbWUgPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKGRhdGEpIHtcbiAgICAgICAgICAgIGNhc2UgXCJTcG9ydHNCb29rXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ2FzaW5vXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR2FtZXNcIjpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJWaXJ0dWFsU3BvcnRzXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2VhbWxlc3NHYW1lXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVGhpcmRQYXJ0eVNwb3J0c0Jvb2tcIjpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBIdHRwLmdldChBcHAuQVBJX1NCTywgeyB0OiBcIkxvZ2luXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiwgZ2M6IGdhbWVOYW1lIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJ1cGRhdGVJbmZvU0JPOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlc1tcInJlc1wiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKENvbmZpZ3MuQXBwLklTX1BSTyA9PSB0cnVlICYmIENvbmZpZ3MuTG9naW4uVXNlclR5cGUgIT0gXCIyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9ta3QubDAwMzAuaWcxMjguY29tL2RlcG9zaXRfcHJvY2Vzc2xvZ2luLmFzcHg/bGFuZz12biZ0b2tlbj1cIiArIHJlc1tcImRhdGFcIl1bXCJkYXRhXCJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTW9iaWxlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IFwiaHR0cHM6Ly9pc21hcnQubDAwMzAuaWcxMjguY29tL2RlcG9zaXRfcHJvY2Vzc2xvZ2luLmFzcHg/bGFuZz12biZ0b2tlbj1cIiArIHJlc1tcImRhdGFcIl1bXCJkYXRhXCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKHVybCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBcImh0dHBzOlwiICsgcmVzWydkYXRhJ10gKyBcIiZsYW5nPXZpLXZuJm9kZHN0eWxlPU1ZJnRoZW1lPXNibyZkZXZpY2U9XCIgKyAoY2Muc3lzLmlzTmF0aXZlID8gXCJtXCIgOiBcImRcIik7XG4gICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwidXJsPVwiICsgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1tcIm1lc3NhZ2VcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25DbGlja0JhY2soKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCB7IHk6IGNjLndpblNpemUuaGVpZ2h0IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja0luIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=