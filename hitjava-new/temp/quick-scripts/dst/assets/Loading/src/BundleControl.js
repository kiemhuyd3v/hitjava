
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/BundleControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '042a81rvuJLIYsEHYhfH5Th', 'BundleControl');
// Loading/src/BundleControl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("./Configs");
var Global_1 = require("./Global");
var BundleControl = /** @class */ (function () {
    function BundleControl() {
    }
    BundleControl.init = function (data) {
        this.serverVersion = data;
        // let dataTest = '{ "BaCay": { "hash": "6c91c", "url": "https://FANVIN.wIN/assets/BaCay" }, "BackupRes": { "hash": "59f9e", "url": "https://FANVIN.wIN/assets/BackupRes" }, "BaiCao": { "hash": "745af", "url": "https://FANVIN.wIN/assets/BaiCao" }, "BauCua": { "hash": "006b1", "url": "https://FANVIN.wIN/assets/BauCua" }, "CaoThap": { "hash": "74b61", "url": "https://FANVIN.wIN/assets/CaoThap" }, "internal": { "hash": "604e0", "url": "https://FANVIN.wIN/assets/internal" }, "Lieng": { "hash": "e4c86", "url": "https://FANVIN.wIN/assets/Lieng" }, "Lobby": { "hash": "f6fed", "url": "https://FANVIN.wIN/assets/Lobby" }, "Loto": { "hash": "83290", "url": "https://FANVIN.wIN/assets/Loto" }, "main": { "hash": "aa574", "url": "https://FANVIN.wIN/assets/main" }, "MauBinh": { "hash": "9e18d", "url": "https://FANVIN.wIN/assets/MauBinh" }, "migration": { "hash": "205da", "url": "https://FANVIN.wIN/assets/migration" }, "MiniPoker": { "hash": "7ef87", "url": "https://FANVIN.wIN/assets/MiniPoker" }, "OanTuTi": { "hash": "dd67d", "url": "https://FANVIN.wIN/assets/OanTuTi" }, "Poker": { "hash": "bbcc5", "url": "https://FANVIN.wIN/assets/Poker" }, "resources": { "hash": "ce096", "url": "https://FANVIN.wIN/assets/resources" }, "Sam": { "hash": "8853d", "url": "https://FANVIN.wIN/assets/Sam" }, "ScriptCore": { "hash": "6659c", "url": "https://FANVIN.wIN/assets/ScriptCore" }, "ShootFish": { "hash": "f3fee", "url": "https://FANVIN.wIN/assets/ShootFish" }, "Slot1": { "hash": "5a22d", "url": "https://FANVIN.wIN/assets/Slot1" }, "Slot10": { "hash": "bdf81", "url": "https://FANVIN.wIN/assets/Slot10" }, "Slot2": { "hash": "ca374", "url": "https://FANVIN.wIN/assets/Slot2" }, "Slot3": { "hash": "86863", "url": "https://FANVIN.wIN/assets/Slot3" }, "Slot3x3": { "hash": "818af", "url": "https://FANVIN.wIN/assets/Slot3x3" }, "Slot4": { "hash": "c3590", "url": "https://FANVIN.wIN/assets/Slot4" }, "Slot5": { "hash": "cf326", "url": "https://FANVIN.wIN/assets/Slot5" }, "Slot7": { "hash": "c0473", "url": "https://FANVIN.wIN/assets/Slot7" }, "Slot8": { "hash": "deae4", "url": "https://FANVIN.wIN/assets/Slot8" }, "Slot9": { "hash": "11666", "url": "https://FANVIN.wIN/assets/Slot9" }, "TaiXiuDouble": { "hash": "f78ee", "url": "https://FANVIN.wIN/assets/TaiXiuDouble" }, "TienLen": { "hash": "050ad", "url": "https://FANVIN.wIN/assets/TienLen" }, "XiDach": { "hash": "c35d2", "url": "https://FANVIN.wIN/assets/XiDach" }, "XocDia": { "hash": "af76c", "url": "https://FANVIN.wIN/assets/XocDia" }, "FbConfig": { "isShowBtnFb":false } }';
        // this.serverVersion = JSON.parse(dataTest);
    };
    BundleControl.loadSceneGame = function (bundleName, sceneName, callbackProgress, bundleCallback) {
        this.loadBundle(bundleName, function (bundle) {
            bundle.loadScene(sceneName, function (finish, total, item) {
                callbackProgress(finish, total);
            }, function (err1, scene) {
                cc.director.preloadScene(sceneName, function (c, t, item) {
                    callbackProgress(c, t);
                }, function (err, sceneAsset) {
                    cc.director.loadScene(sceneName);
                    bundleCallback();
                });
            });
        });
    };
    BundleControl.loadPrefabGame = function (bundleName, prefabName, callbackProgress, bundleCallback) {
        this.loadBundle(bundleName, function (bundle) {
            bundle.load(prefabName, cc.Prefab, function (finish, total, item) {
                callbackProgress(finish, total);
            }, function (err1, prefab) {
                bundleCallback(prefab, bundle);
            });
        });
    };
    BundleControl.loadBundle = function (bundleName, bundleCallback) {
        if (Configs_1.default.App.IS_LOCAL) {
            var url = bundleName;
            cc.assetManager.loadBundle(url, function (err, bundle) {
                if (err != null) {
                    // errorCallback(err);
                    //  cc.log("Error Donwload bundle:" + JSON.stringify(err));
                    return;
                }
                bundleCallback(bundle);
            });
        }
        else {
            var bundleVersion = this.serverVersion[bundleName];
            var url = bundleName;
            if (cc.sys.isNative) {
                url = bundleVersion.url;
            }
            // url = "http://192.168.100.5:8700/remote/" + bundleName
            cc.assetManager.loadBundle(url, { version: bundleVersion.hash }, function (err, bundle) {
                // cc.assetManager.loadBundle(url, (err, bundle) => {
                if (err != null) {
                    // errorCallback(err);
                    //  cc.log("Error Donwload bundle:" + JSON.stringify(err));
                    return;
                }
                bundleCallback(bundle);
            });
        }
    };
    BundleControl.loadPrefabPopup = function (prefabPath, cb) {
        Global_1.Global.BundleLobby.load(prefabPath, function (err, prefab) {
            if (err) {
                //  cc.log("Err load prefab bundle:", err);
                return;
            }
            else {
                //  cc.log("loadPrefabPopup Success");
                cb(prefab);
            }
        });
    };
    BundleControl.serverVersion = {};
    return BundleControl;
}());
exports.default = BundleControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxCdW5kbGVDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdDO0FBQ2hDLG1DQUFrQztBQUVsQztJQUFBO0lBNEVBLENBQUM7SUF6RVUsa0JBQUksR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixnK0VBQWcrRTtRQUNoK0UsNkNBQTZDO0lBQ2pELENBQUM7SUFFTSwyQkFBYSxHQUFwQixVQUFxQixVQUFVLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGNBQWM7UUFDeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBQSxNQUFNO1lBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJO2dCQUNyRCxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFFLFVBQVUsSUFBSSxFQUFFLEtBQUs7Z0JBQ3BCLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtvQkFDM0MsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEVBQUUsVUFBQyxHQUFHLEVBQUUsVUFBVTtvQkFDZixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDakMsY0FBYyxFQUFFLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSw0QkFBYyxHQUFyQixVQUFzQixVQUFVLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGNBQWM7UUFDMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBQSxNQUFNO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUk7Z0JBQzVELGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUUsVUFBVSxJQUFJLEVBQUUsTUFBTTtnQkFDckIsY0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLHdCQUFVLEdBQWpCLFVBQWtCLFVBQVUsRUFBRSxjQUFjO1FBQ3hDLElBQUksaUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ3RCLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQztZQUNyQixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtnQkFDeEMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO29CQUNiLHNCQUFzQjtvQkFDdEIsMkRBQTJEO29CQUMzRCxPQUFPO2lCQUNWO2dCQUNELGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25ELElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQztZQUNyQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNqQixHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQzthQUMzQjtZQUNELHlEQUF5RDtZQUN6RCxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07Z0JBQ3pFLHFEQUFxRDtnQkFDckQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO29CQUNiLHNCQUFzQjtvQkFDdEIsMkRBQTJEO29CQUMzRCxPQUFPO2lCQUNWO2dCQUNELGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztTQUNOO0lBRUwsQ0FBQztJQUNNLDZCQUFlLEdBQXRCLFVBQXVCLFVBQVUsRUFBRSxFQUFFO1FBQ2pDLGVBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQzVDLElBQUksR0FBRyxFQUFFO2dCQUNMLDJDQUEyQztnQkFDM0MsT0FBTzthQUNWO2lCQUFNO2dCQUNILHNDQUFzQztnQkFDdEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2Q7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6RU0sMkJBQWEsR0FBUSxFQUFFLENBQUM7SUEyRW5DLG9CQUFDO0NBNUVELEFBNEVDLElBQUE7a0JBNUVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4vQ29uZmlnc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vR2xvYmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bmRsZUNvbnRyb2wge1xuICAgIHN0YXRpYyBzZXJ2ZXJWZXJzaW9uOiBhbnkgPSB7fTtcblxuICAgIHN0YXRpYyBpbml0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZXJ2ZXJWZXJzaW9uID0gZGF0YTtcbiAgICAgICAgLy8gbGV0IGRhdGFUZXN0ID0gJ3sgXCJCYUNheVwiOiB7IFwiaGFzaFwiOiBcIjZjOTFjXCIsIFwidXJsXCI6IFwiaHR0cHM6Ly9GQU5WSU4ud0lOL2Fzc2V0cy9CYUNheVwiIH0sIFwiQmFja3VwUmVzXCI6IHsgXCJoYXNoXCI6IFwiNTlmOWVcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL0JhY2t1cFJlc1wiIH0sIFwiQmFpQ2FvXCI6IHsgXCJoYXNoXCI6IFwiNzQ1YWZcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL0JhaUNhb1wiIH0sIFwiQmF1Q3VhXCI6IHsgXCJoYXNoXCI6IFwiMDA2YjFcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL0JhdUN1YVwiIH0sIFwiQ2FvVGhhcFwiOiB7IFwiaGFzaFwiOiBcIjc0YjYxXCIsIFwidXJsXCI6IFwiaHR0cHM6Ly9GQU5WSU4ud0lOL2Fzc2V0cy9DYW9UaGFwXCIgfSwgXCJpbnRlcm5hbFwiOiB7IFwiaGFzaFwiOiBcIjYwNGUwXCIsIFwidXJsXCI6IFwiaHR0cHM6Ly9GQU5WSU4ud0lOL2Fzc2V0cy9pbnRlcm5hbFwiIH0sIFwiTGllbmdcIjogeyBcImhhc2hcIjogXCJlNGM4NlwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvTGllbmdcIiB9LCBcIkxvYmJ5XCI6IHsgXCJoYXNoXCI6IFwiZjZmZWRcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL0xvYmJ5XCIgfSwgXCJMb3RvXCI6IHsgXCJoYXNoXCI6IFwiODMyOTBcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL0xvdG9cIiB9LCBcIm1haW5cIjogeyBcImhhc2hcIjogXCJhYTU3NFwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvbWFpblwiIH0sIFwiTWF1QmluaFwiOiB7IFwiaGFzaFwiOiBcIjllMThkXCIsIFwidXJsXCI6IFwiaHR0cHM6Ly9GQU5WSU4ud0lOL2Fzc2V0cy9NYXVCaW5oXCIgfSwgXCJtaWdyYXRpb25cIjogeyBcImhhc2hcIjogXCIyMDVkYVwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvbWlncmF0aW9uXCIgfSwgXCJNaW5pUG9rZXJcIjogeyBcImhhc2hcIjogXCI3ZWY4N1wiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvTWluaVBva2VyXCIgfSwgXCJPYW5UdVRpXCI6IHsgXCJoYXNoXCI6IFwiZGQ2N2RcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL09hblR1VGlcIiB9LCBcIlBva2VyXCI6IHsgXCJoYXNoXCI6IFwiYmJjYzVcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL1Bva2VyXCIgfSwgXCJyZXNvdXJjZXNcIjogeyBcImhhc2hcIjogXCJjZTA5NlwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvcmVzb3VyY2VzXCIgfSwgXCJTYW1cIjogeyBcImhhc2hcIjogXCI4ODUzZFwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvU2FtXCIgfSwgXCJTY3JpcHRDb3JlXCI6IHsgXCJoYXNoXCI6IFwiNjY1OWNcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL1NjcmlwdENvcmVcIiB9LCBcIlNob290RmlzaFwiOiB7IFwiaGFzaFwiOiBcImYzZmVlXCIsIFwidXJsXCI6IFwiaHR0cHM6Ly9GQU5WSU4ud0lOL2Fzc2V0cy9TaG9vdEZpc2hcIiB9LCBcIlNsb3QxXCI6IHsgXCJoYXNoXCI6IFwiNWEyMmRcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL1Nsb3QxXCIgfSwgXCJTbG90MTBcIjogeyBcImhhc2hcIjogXCJiZGY4MVwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvU2xvdDEwXCIgfSwgXCJTbG90MlwiOiB7IFwiaGFzaFwiOiBcImNhMzc0XCIsIFwidXJsXCI6IFwiaHR0cHM6Ly9GQU5WSU4ud0lOL2Fzc2V0cy9TbG90MlwiIH0sIFwiU2xvdDNcIjogeyBcImhhc2hcIjogXCI4Njg2M1wiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvU2xvdDNcIiB9LCBcIlNsb3QzeDNcIjogeyBcImhhc2hcIjogXCI4MThhZlwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvU2xvdDN4M1wiIH0sIFwiU2xvdDRcIjogeyBcImhhc2hcIjogXCJjMzU5MFwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvU2xvdDRcIiB9LCBcIlNsb3Q1XCI6IHsgXCJoYXNoXCI6IFwiY2YzMjZcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL1Nsb3Q1XCIgfSwgXCJTbG90N1wiOiB7IFwiaGFzaFwiOiBcImMwNDczXCIsIFwidXJsXCI6IFwiaHR0cHM6Ly9GQU5WSU4ud0lOL2Fzc2V0cy9TbG90N1wiIH0sIFwiU2xvdDhcIjogeyBcImhhc2hcIjogXCJkZWFlNFwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvU2xvdDhcIiB9LCBcIlNsb3Q5XCI6IHsgXCJoYXNoXCI6IFwiMTE2NjZcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL1Nsb3Q5XCIgfSwgXCJUYWlYaXVEb3VibGVcIjogeyBcImhhc2hcIjogXCJmNzhlZVwiLCBcInVybFwiOiBcImh0dHBzOi8vRkFOVklOLndJTi9hc3NldHMvVGFpWGl1RG91YmxlXCIgfSwgXCJUaWVuTGVuXCI6IHsgXCJoYXNoXCI6IFwiMDUwYWRcIiwgXCJ1cmxcIjogXCJodHRwczovL0ZBTlZJTi53SU4vYXNzZXRzL1RpZW5MZW5cIiB9LCBcIlhpRGFjaFwiOiB7IFwiaGFzaFwiOiBcImMzNWQyXCIsIFwidXJsXCI6IFwiaHR0cHM6Ly9GQU5WSU4ud0lOL2Fzc2V0cy9YaURhY2hcIiB9LCBcIlhvY0RpYVwiOiB7IFwiaGFzaFwiOiBcImFmNzZjXCIsIFwidXJsXCI6IFwiaHR0cHM6Ly9GQU5WSU4ud0lOL2Fzc2V0cy9Yb2NEaWFcIiB9LCBcIkZiQ29uZmlnXCI6IHsgXCJpc1Nob3dCdG5GYlwiOmZhbHNlIH0gfSc7XG4gICAgICAgIC8vIHRoaXMuc2VydmVyVmVyc2lvbiA9IEpTT04ucGFyc2UoZGF0YVRlc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkU2NlbmVHYW1lKGJ1bmRsZU5hbWUsIHNjZW5lTmFtZSwgY2FsbGJhY2tQcm9ncmVzcywgYnVuZGxlQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5sb2FkQnVuZGxlKGJ1bmRsZU5hbWUsIGJ1bmRsZSA9PiB7XG4gICAgICAgICAgICBidW5kbGUubG9hZFNjZW5lKHNjZW5lTmFtZSwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja1Byb2dyZXNzKGZpbmlzaCwgdG90YWwpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycjEsIHNjZW5lKSB7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHNjZW5lTmFtZSwgKGMsIHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tQcm9ncmVzcyhjLCB0KTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyLCBzY2VuZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBidW5kbGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcmVmYWJHYW1lKGJ1bmRsZU5hbWUsIHByZWZhYk5hbWUsIGNhbGxiYWNrUHJvZ3Jlc3MsIGJ1bmRsZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubG9hZEJ1bmRsZShidW5kbGVOYW1lLCBidW5kbGUgPT4ge1xuICAgICAgICAgICAgYnVuZGxlLmxvYWQocHJlZmFiTmFtZSwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZmluaXNoLCB0b3RhbCwgaXRlbSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrUHJvZ3Jlc3MoZmluaXNoLCB0b3RhbCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyMSwgcHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgYnVuZGxlQ2FsbGJhY2socHJlZmFiLCBidW5kbGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRCdW5kbGUoYnVuZGxlTmFtZSwgYnVuZGxlQ2FsbGJhY2spIHtcbiAgICAgICAgaWYgKENvbmZpZ3MuQXBwLklTX0xPQ0FMKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gYnVuZGxlTmFtZTtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHVybCwgKGVyciwgYnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkVycm9yIERvbndsb2FkIGJ1bmRsZTpcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1bmRsZUNhbGxiYWNrKGJ1bmRsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBidW5kbGVWZXJzaW9uID0gdGhpcy5zZXJ2ZXJWZXJzaW9uW2J1bmRsZU5hbWVdO1xuICAgICAgICAgICAgdmFyIHVybCA9IGJ1bmRsZU5hbWU7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gYnVuZGxlVmVyc2lvbi51cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB1cmwgPSBcImh0dHA6Ly8xOTIuMTY4LjEwMC41Ojg3MDAvcmVtb3RlL1wiICsgYnVuZGxlTmFtZVxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUodXJsLCB7IHZlcnNpb246IGJ1bmRsZVZlcnNpb24uaGFzaCB9LCAoZXJyLCBidW5kbGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZSh1cmwsIChlcnIsIGJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvckNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJFcnJvciBEb253bG9hZCBidW5kbGU6XCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidW5kbGVDYWxsYmFjayhidW5kbGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzdGF0aWMgbG9hZFByZWZhYlBvcHVwKHByZWZhYlBhdGgsIGNiKSB7XG4gICAgICAgIEdsb2JhbC5CdW5kbGVMb2JieS5sb2FkKHByZWZhYlBhdGgsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJFcnIgbG9hZCBwcmVmYWIgYnVuZGxlOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImxvYWRQcmVmYWJQb3B1cCBTdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIGNiKHByZWZhYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufSJdfQ==