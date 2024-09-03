"use strict";
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