"use strict";
cc._RF.push(module, '06c935DvwpCJ5nCCvhzAwFf', 'Loading');
// Loading/src/Loading.ts

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
var Http_1 = require("../../Loading/src/Http");
var BundleControl_1 = require("./BundleControl");
var Configs_1 = require("./Configs");
var Global_1 = require("./Global");
var UtilsNative_1 = require("./UtilsNative");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblStatus = null;
        _this.lbTips = null;
        _this.nodeSlider = null;
        // @property(cc.Slider)
        // slider :cc.Slider = null;
        _this.spriteProgress = null;
        _this.listSkeData = [];
        _this.listTips = [
            {
                vi: "Đừng quên đăng nhập hàng ngày để nhận thưởng Điểm Danh bạn nhé!",
                en: "Dont forget login every day to get free attendance bonus!"
            },
            {
                vi: "Tiến Lên Miền Nam: Chống gian lận,an toàn tuyệt đối",
                en: "Killer 13: Anti cheating,absolute safety"
            },
            {
                vi: "Nạp đầu nhận thưởng lên tới 790K",
                en: "First cash-in can receive bonus up to 790K"
            },
            {
                vi: "Bộ phận chăm sóc khách hàng luôn online 24/24 bạn nhé!",
                en: "Customer care team support online 24/24!"
            },
            {
                vi: "Vianne nạp rút nhanh chóng và an toàn!",
                en: "Vianne quick cashin,cashout and alway safety!"
            },
        ];
        return _this;
        // update (dt) {}
    }
    Loading.prototype.start = function () {
        cc.assetManager.downloader.maxConcurrency = 20;
        cc.assetManager.downloader.maxRequestsPerFrame = 6;
        this.showTips();
    };
    Loading.prototype.startGame = function () {
        var _this = this;
        this.lblStatus.string = "Loading...";
        this.spriteProgress.fillRange = 0;
        this.nodeSlider.progress = 0;
        if (Configs_1.default.App.IS_LOCAL == false) {
            Http_1.default.get("https://res.FANVIN.wIN/assets/AssetBundleVersion.json", {}, function (err, data) {
                BundleControl_1.default.init(data);
                _this.loadLobby();
            });
        }
        else {
            this.loadLobby();
        }
        UtilsNative_1.default.getDeviceId();
    };
    Loading.prototype.loadScriptCore = function () {
        var _this = this;
        BundleControl_1.default.loadBundle("ScriptCore", function (bundle) {
            _this.loadLobby();
        });
    };
    Loading.prototype.loadLobby = function () {
        var _this = this;
        var self = this;
        var time = new Date().getTime();
        BundleControl_1.default.loadBundle("Lobby", function (bundle) {
            Global_1.Global.BundleLobby = bundle;
            var size = _this.listSkeData.length;
            for (var i = 0; i < size; i++) {
                var path = _this.listSkeData[i];
                bundle.load(path, sp.SkeletonData, function (err, asset) {
                    if (err) {
                        //  cc.log("err load ske:", err);
                        return;
                    }
                    // cc.log("load Success Ske Data:" + path);
                });
            }
            bundle.loadScene('Lobby', function (finish, total, item) {
                self.lblStatus.string = "Loading: " + parseInt((finish / total) * 100) + "%";
                self.spriteProgress.fillRange = (finish / total);
                self.nodeSlider.progress = self.spriteProgress.fillRange;
            }, function (err1, scene) {
                if (err1 != null) {
                    //  cc.log("Error Load Scene Lobby:", JSON.stringify(err1));
                }
                cc.sys.localStorage.setItem("SceneLobby", scene);
                cc.director.runScene(scene);
                var time2 = new Date().getTime();
                //  cc.log("Time Delta=" + ((time2 - time) / 1000));
            });
            bundle.loadDir("PrefabPopup", cc.Prefab, function (err, arrPrefab) {
                if (err) {
                    //  cc.log("Error Bundle LoadDir PrefabPopup!");
                    return;
                }
            });
        });
    };
    Loading.prototype.showTips = function () {
        var _this = this;
        this.schedule(function () {
            _this.lbTips.string = _this.getStrTips();
        }, 3.0, cc.macro.REPEAT_FOREVER, 0.1);
    };
    Loading.prototype.getStrTips = function () {
        var langCode = cc.sys.localStorage.getItem("langCode");
        if (langCode == null) {
            langCode = "vi";
        }
        var strTip = this.listTips[this.randomRangeInt(0, this.listTips.length)];
        return strTip[langCode];
    };
    Loading.prototype.randomRangeInt = function (min, max) {
        //Returns a random number between min (inclusive) and max (inclusive)
        //Math.floor(Math.random() * (max - min + 1)) + min;
        //Returns a random number between min (inclusive) and max (exclusive)
        return Math.floor(Math.random() * (max - min)) + min;
    };
    __decorate([
        property(cc.Label)
    ], Loading.prototype, "lblStatus", void 0);
    __decorate([
        property(cc.Label)
    ], Loading.prototype, "lbTips", void 0);
    __decorate([
        property(cc.Slider)
    ], Loading.prototype, "nodeSlider", void 0);
    __decorate([
        property(cc.Sprite)
    ], Loading.prototype, "spriteProgress", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

cc._RF.pop();