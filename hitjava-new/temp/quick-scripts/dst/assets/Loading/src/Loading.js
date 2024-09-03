
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUEwQztBQUMxQyxpREFBNEM7QUFDNUMscUNBQWdDO0FBQ2hDLG1DQUFrQztBQUNsQyw2Q0FBd0M7QUFDbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE4SEM7UUExSEcsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLHVCQUF1QjtRQUN2Qiw0QkFBNEI7UUFHNUIsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFDakMsaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFDaEIsY0FBUSxHQUFHO1lBQ1A7Z0JBQ0ksRUFBRSxFQUFFLGlFQUFpRTtnQkFDckUsRUFBRSxFQUFFLDJEQUEyRDthQUNsRTtZQUNEO2dCQUNJLEVBQUUsRUFBRSxxREFBcUQ7Z0JBQ3pELEVBQUUsRUFBRSwwQ0FBMEM7YUFDakQ7WUFDRDtnQkFDSSxFQUFFLEVBQUUsa0NBQWtDO2dCQUN0QyxFQUFFLEVBQUUsNENBQTRDO2FBQ25EO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLHdEQUF3RDtnQkFDNUQsRUFBRSxFQUFFLDBDQUEwQzthQUNqRDtZQUNEO2dCQUNJLEVBQUUsRUFBRSx3Q0FBd0M7Z0JBQzVDLEVBQUUsRUFBRSwrQ0FBK0M7YUFDdEQ7U0FDSixDQUFBOztRQXdGRCxpQkFBaUI7SUFDckIsQ0FBQztJQXhGRyx1QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUNyRCxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFB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UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1M7SUFNN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDYTtJQWRoQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBOEgzQjtJQUFELGNBQUM7Q0E5SEQsQUE4SEMsQ0E5SG9DLEVBQUUsQ0FBQyxTQUFTLEdBOEhoRDtrQkE5SG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQnVuZGxlQ29udHJvbCBmcm9tIFwiLi9CdW5kbGVDb250cm9sXCI7XG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi9Db25maWdzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9HbG9iYWxcIjtcbmltcG9ydCBVdGlsc05hdGl2ZSBmcm9tIFwiLi9VdGlsc05hdGl2ZVwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsU3RhdHVzOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVGlwczogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TbGlkZXIpXG4gICAgbm9kZVNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5TbGlkZXIpXG4gICAgLy8gc2xpZGVyIDpjYy5TbGlkZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGVQcm9ncmVzczogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBsaXN0U2tlRGF0YSA9IFtdXG4gICAgbGlzdFRpcHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZpOiBcIsSQ4burbmcgcXXDqm4gxJHEg25nIG5o4bqtcCBow6BuZyBuZ8OgeSDEkeG7gyBuaOG6rW4gdGjGsOG7n25nIMSQaeG7g20gRGFuaCBi4bqhbiBuaMOpIVwiLFxuICAgICAgICAgICAgZW46IFwiRG9udCBmb3JnZXQgbG9naW4gZXZlcnkgZGF5IHRvIGdldCBmcmVlIGF0dGVuZGFuY2UgYm9udXMhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmk6IFwiVGnhur9uIEzDqm4gTWnhu4FuIE5hbTogQ2jhu5FuZyBnaWFuIGzhuq1uLGFuIHRvw6BuIHR1eeG7h3QgxJHhu5FpXCIsXG4gICAgICAgICAgICBlbjogXCJLaWxsZXIgMTM6IEFudGkgY2hlYXRpbmcsYWJzb2x1dGUgc2FmZXR5XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmk6IFwiTuG6oXAgxJHhuqd1IG5o4bqtbiB0aMaw4bufbmcgbMOqbiB04bubaSA3OTBLXCIsXG4gICAgICAgICAgICBlbjogXCJGaXJzdCBjYXNoLWluIGNhbiByZWNlaXZlIGJvbnVzIHVwIHRvIDc5MEtcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2aTogXCJC4buZIHBo4bqtbiBjaMSDbSBzw7NjIGtow6FjaCBow6BuZyBsdcO0biBvbmxpbmUgMjQvMjQgYuG6oW4gbmjDqSFcIixcbiAgICAgICAgICAgIGVuOiBcIkN1c3RvbWVyIGNhcmUgdGVhbSBzdXBwb3J0IG9ubGluZSAyNC8yNCFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2aTogXCJWaWFubmUgbuG6oXAgcsO6dCBuaGFuaCBjaMOzbmcgdsOgIGFuIHRvw6BuIVwiLFxuICAgICAgICAgICAgZW46IFwiVmlhbm5lIHF1aWNrIGNhc2hpbixjYXNob3V0IGFuZCBhbHdheSBzYWZldHkhXCJcbiAgICAgICAgfSxcbiAgICBdXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5kb3dubG9hZGVyLm1heENvbmN1cnJlbmN5ID0gMjA7XG5cdFx0Y2MuYXNzZXRNYW5hZ2VyLmRvd25sb2FkZXIubWF4UmVxdWVzdHNQZXJGcmFtZSA9IDY7XG4gICAgICAgIHRoaXMuc2hvd1RpcHMoKTtcbiAgICB9XG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmxibFN0YXR1cy5zdHJpbmcgPSBcIkxvYWRpbmcuLi5cIjtcbiAgICAgICAgdGhpcy5zcHJpdGVQcm9ncmVzcy5maWxsUmFuZ2UgPSAwO1xuICAgICAgICB0aGlzLm5vZGVTbGlkZXIucHJvZ3Jlc3MgPSAwO1xuXG4gICAgICAgIGlmIChDb25maWdzLkFwcC5JU19MT0NBTCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgSHR0cC5nZXQoXCJodHRwczovL3Jlcy5GQU5WSU4ud0lOL2Fzc2V0cy9Bc3NldEJ1bmRsZVZlcnNpb24uanNvblwiLCB7fSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wuaW5pdChkYXRhKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkTG9iYnkoKTsgIFxuICAgICAgICAgICAgfSk7XG5cdFx0XHRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZExvYmJ5KCk7XG4gICAgICAgIH1cbiAgICAgICAgVXRpbHNOYXRpdmUuZ2V0RGV2aWNlSWQoKTtcbiAgICB9XG4gICAgbG9hZFNjcmlwdENvcmUoKSB7XG4gICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZEJ1bmRsZShcIlNjcmlwdENvcmVcIiwgKGJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkTG9iYnkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZExvYmJ5KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZEJ1bmRsZShcIkxvYmJ5XCIsIChidW5kbGUpID0+IHtcbiAgICAgICAgICAgIEdsb2JhbC5CdW5kbGVMb2JieSA9IGJ1bmRsZTtcbiAgICAgICAgICAgIGxldCBzaXplID0gdGhpcy5saXN0U2tlRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gdGhpcy5saXN0U2tlRGF0YVtpXTtcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZChwYXRoLCBzcC5Ta2VsZXRvbkRhdGEsIChlcnIsIGFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJlcnIgbG9hZCBza2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwibG9hZCBTdWNjZXNzIFNrZSBEYXRhOlwiICsgcGF0aCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidW5kbGUubG9hZFNjZW5lKCdMb2JieScsIGZ1bmN0aW9uIChmaW5pc2gsIHRvdGFsLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sYmxTdGF0dXMuc3RyaW5nID0gXCJMb2FkaW5nOiBcIiArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgc2VsZi5zcHJpdGVQcm9ncmVzcy5maWxsUmFuZ2UgPSAoZmluaXNoIC8gdG90YWwpO1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZVNsaWRlci5wcm9ncmVzcyA9IHNlbGYuc3ByaXRlUHJvZ3Jlc3MuZmlsbFJhbmdlO1xuICAgICAgICAgICAgfSwgKGVycjEsIHNjZW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycjEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiRXJyb3IgTG9hZCBTY2VuZSBMb2JieTpcIiwgSlNPTi5zdHJpbmdpZnkoZXJyMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJTY2VuZUxvYmJ5XCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5ydW5TY2VuZShzY2VuZSk7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWUyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlRpbWUgRGVsdGE9XCIgKyAoKHRpbWUyIC0gdGltZSkgLyAxMDAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ1bmRsZS5sb2FkRGlyKFwiUHJlZmFiUG9wdXBcIiwgY2MuUHJlZmFiLCAoZXJyLCBhcnJQcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJFcnJvciBCdW5kbGUgTG9hZERpciBQcmVmYWJQb3B1cCFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBzaG93VGlwcygpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxiVGlwcy5zdHJpbmcgPSB0aGlzLmdldFN0clRpcHMoKTtcbiAgICAgICAgfSwgMy4wLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC4xKVxuICAgIH1cbiAgICBnZXRTdHJUaXBzKCkge1xuICAgICAgICBsZXQgbGFuZ0NvZGUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYW5nQ29kZVwiKTtcbiAgICAgICAgaWYgKGxhbmdDb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGxhbmdDb2RlID0gXCJ2aVwiXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0clRpcCA9IHRoaXMubGlzdFRpcHNbdGhpcy5yYW5kb21SYW5nZUludCgwLCB0aGlzLmxpc3RUaXBzLmxlbmd0aCldO1xuICAgICAgICByZXR1cm4gc3RyVGlwW2xhbmdDb2RlXTtcbiAgICB9XG4gICAgcmFuZG9tUmFuZ2VJbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy9SZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChpbmNsdXNpdmUpXG4gICAgICAgIC8vTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblxuICAgICAgICAvL1JldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19