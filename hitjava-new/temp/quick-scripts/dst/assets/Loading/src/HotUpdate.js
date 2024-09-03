
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/HotUpdate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ffa0G2dXNOEK/nOzR1EEZB', 'HotUpdate');
// Loading/src/HotUpdate.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HotUpdate = /** @class */ (function (_super) {
    __extends(HotUpdate, _super);
    function HotUpdate() {
        // @property(cc.Asset)
        // manifestUrl: cc.Asset = null;
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.manifestUrl = null;
        _this_1.loadingNode = null;
        _this_1.bgSplash = [];
        _this_1.loadingBar = null;
        _this_1.listSprBg = [];
        _this_1.lb_Info = null;
        _this_1._updating = false;
        _this_1._failCount = 0;
        _this_1._canRetry = false;
        _this_1._storagePath = '';
        _this_1._updateListener = null;
        _this_1._am = null;
        _this_1._checkListener = null;
        _this_1.versionCompareHandle = null;
        _this_1.gameSceneName = "main";
        _this_1.loadingGameComp = null;
        return _this_1;
        // update (dt) {}
    }
    HotUpdate.prototype.checkCb = function (event) {
        //  cc.log('Code CheckCb: ' + event.getEventCode());
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.loadGame();
                //  cc.log("No local manifest!");
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                //  cc.log("Error Parse/Download manifest!");
                this.loadGame();
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                //  cc.log("Up To Date!");
                this.loadGame();
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                this.lb_Info.node.active = true;
                this.lb_Info.string = "Đang tải bản cập nhật...";
                //  cc.log("new version found");
                this.loadingBar.fillRange = 0;
                this.hotUpdate();
                break;
            default:
                //  cc.log('Code: ' + event.getEventCode());
                return;
        }
        this._am.setEventCallback(null);
        //  cc.log("CheckCB:setEventCallback=null");
        this._checkListener = null;
        this._updating = false;
    };
    HotUpdate.prototype.updateCb = function (event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                //  cc.log("============Update CB===============ERROR_NO_LOCAL_MANIFEST")
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                var msg = event.getMessage();
                //  cc.log("UPDATE_PROGRESSION:", JSON.stringify(msg));
                if (msg) {
                    //  cc.log("Progress" + event.getPercent() / 100 + '% : ' + msg);
                }
                this.lb_Info.string = "Updating: " + Math.floor(event.getPercent() * 100) + '%';
                this.loadingBar.fillRange = event.getPercent();
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                //  cc.log("============Update CB===============ERROR_PARSE_MANIFEST,ERROR_DOWNLOAD_MANIFEST")
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                //  cc.log("============Update CB===============ALREADY_UP_TO_DATE")
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                //  cc.log("============Update CB===============UPDATE_FINISHED")
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                //  cc.log("============Update CB===============UPDATE_FAILED")
                this._am.downloadFailedAssets();
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                //  cc.log("============Update CB===============UPDATE_FAILED" + "Asset update error:" + event.getAssetId() + ', ' + event.getMessage());
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                //  cc.log("============Update CB===============ERROR_DECOMPRESS");
                break;
            default:
                //  cc.log('Code: ' + event.getEventCode());
                //  cc.log("============Update CB===============default hotupdate ");
                break;
        }
        if (failed) {
            //  cc.log("Update Failed");
            this._am.setEventCallback(null);
            this._updateListener = null;
            this._updating = false;
            this.loadGame();
        }
        if (needRestart) {
            this._am.setEventCallback(null);
            this._updateListener = null;
            // Prepend the manifest's search path
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            //  cc.log("newPaths==" + JSON.stringify(newPaths));
            //  cc.log("searchPaths==" + JSON.stringify(searchPaths));
            Array.prototype.unshift.apply(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            cc.audioEngine.stopAll();
            cc.game.restart();
        }
    };
    HotUpdate.prototype.checkUpdate = function () {
        //  cc.log("Chay vao hot update");
        if (this._updating) {
            this.lb_Info.string = 'Checking or updating ...';
            return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            // Resolve md5 url
            var url = this.manifestUrl.nativeUrl;
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            this._am.loadLocalManifest(url);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            //this.panel.info.string = 'Failed to load local manifest ...';
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));
        // cc.log("Check Update");
        this._am.checkUpdate();
        this._updating = true;
    };
    HotUpdate.prototype.hotUpdate = function () {
        if (this._am && !this._updating) {
            //  cc.log("setEventCallback updateCB");
            this._am.setEventCallback(this.updateCb.bind(this));
            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                // Resolve md5 url
                var url = this.manifestUrl.nativeUrl;
                if (cc.loader.md5Pipe) {
                    url = cc.loader.md5Pipe.transformURL(url);
                }
                this._am.loadLocalManifest(url);
            }
            this._failCount = 0;
            this._am.update();
            //  cc.log("HotUpdate deee");
            this._updating = true;
        }
        else {
            var _this = this;
            this.scheduleOnce(function () {
                _this.hotUpdate();
            }, 0.5);
        }
    };
    HotUpdate.prototype.onLoad = function () {
        this.loadingGameComp = this.loadingNode.getComponent("Loading");
        // Hot update is only available in Native build
        if (!cc.sys.isNative && cc.sys.isBrowser || cc.sys.os === cc.sys.OS_OSX) {
            this.loadGame();
            return;
        }
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'lote88-remote-asset');
        //  cc.log('Storage path for remote asset : ' + this._storagePath);
        // Setup your own version compare handler, versionA and B is versions in string
        // if the return value greater than 0, versionA is greater than B,
        // if the return value equals 0, versionA equals to B,
        // if the return value smaller than 0, versionA is smaller than B.
        this.versionCompareHandle = function (versionA, versionB) {
            // cc.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || 0);
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };
        // Init with empty manifest url for testing custom manifest
        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);
        // Setup the verification callback, but we don't have md5 check function yet, so only print some message
        // Return true if the verification passed, otherwise return false
        this._am.setVerifyCallback(function (path, asset) {
            // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var compressed = asset.compressed;
            // Retrieve the correct md5 value.
            var expectedMD5 = asset.md5;
            // asset.path is relative path and path is absolute.
            var relativePath = asset.path;
            // The size of asset file, but this value could be absent.
            var size = asset.size;
            if (compressed) {
                //  cc.log("Verification passed : " + relativePath);
                return true;
            }
            else {
                //  cc.log("Verification passed : " + relativePath + ' (' + expectedMD5 + ')');
                return true;
            }
        });
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            // Some Android device may slow down the download process when concurrent tasks is too much.
            // The value may not be accurate, please do more test and find what's most suitable for your game.
            this._am.setMaxConcurrentTask(10);
        }
        this.checkUpdate();
    };
    HotUpdate.prototype.start = function () {
        // Utils.getGetDeviceId();
        if (cc.sys.isBrowser) {
            // Global.loadTextConfig();
            // LoadConfig.getInstance().pushDataEco();
        }
    };
    HotUpdate.prototype.loadGame = function () {
        this.loadingGameComp.startGame();
    };
    HotUpdate.prototype.onDestroy = function () {
        if (this._updateListener) {
            this._am.setEventCallback(null);
            this._updateListener = null;
        }
    };
    __decorate([
        property({
            type: cc.Asset,
        })
    ], HotUpdate.prototype, "manifestUrl", void 0);
    __decorate([
        property(cc.Node)
    ], HotUpdate.prototype, "loadingNode", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], HotUpdate.prototype, "bgSplash", void 0);
    __decorate([
        property(cc.Sprite)
    ], HotUpdate.prototype, "loadingBar", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], HotUpdate.prototype, "listSprBg", void 0);
    __decorate([
        property(cc.Label)
    ], HotUpdate.prototype, "lb_Info", void 0);
    HotUpdate = __decorate([
        ccclass
    ], HotUpdate);
    return HotUpdate;
}(cc.Component));
exports.default = HotUpdate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxIb3RVcGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFFSSxzQkFBc0I7UUFDdEIsZ0NBQWdDO1FBSHBDLHVFQTZSQztRQXJSRyxtQkFBVyxHQUFHLElBQUksQ0FBQztRQUduQixtQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixnQkFBUSxHQUFxQixFQUFFLENBQUM7UUFHaEMsa0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsaUJBQVMsR0FBcUIsRUFBRSxDQUFDO1FBR2pDLGVBQU8sR0FBYSxJQUFJLENBQUM7UUFDekIsaUJBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixvQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQix1QkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixXQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsc0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsNEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLHFCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLHVCQUFlLEdBQVEsSUFBSSxDQUFDOztRQTJQNUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF0UEcsMkJBQU8sR0FBUCxVQUFRLEtBQUs7UUFDVCxvREFBb0Q7UUFDcEQsUUFBUSxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDMUIsS0FBSyxHQUFHLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCO2dCQUMvQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLGlDQUFpQztnQkFDakMsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDO1lBQ3BELEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQjtnQkFDNUMsNkNBQTZDO2dCQUM3QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0I7Z0JBQzFDLDBCQUEwQjtnQkFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixNQUFNO1lBQ1YsS0FBSyxHQUFHLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRywwQkFBMEIsQ0FBQTtnQkFDaEQsZ0NBQWdDO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFakIsTUFBTTtZQUNWO2dCQUNJLDRDQUE0QztnQkFDNUMsT0FBTztTQUNkO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELDRCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixRQUFRLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUMxQixLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUI7Z0JBQy9DLHlFQUF5RTtnQkFDekUsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDZCxNQUFNO1lBQ1YsS0FBSyxHQUFHLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCO2dCQUMxQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzdCLHVEQUF1RDtnQkFDdkQsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsaUVBQWlFO2lCQUNwRTtnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQy9DLE1BQU07WUFDVixLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwRCxLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0I7Z0JBQzVDLDhGQUE4RjtnQkFDOUYsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDZCxNQUFNO1lBQ1YsS0FBSyxHQUFHLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCO2dCQUMxQyxvRUFBb0U7Z0JBQ3BFLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2QsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLGVBQWU7Z0JBQ3ZDLGlFQUFpRTtnQkFDakUsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLGFBQWE7Z0JBQ3JDLCtEQUErRDtnQkFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjO2dCQUN0Qyx5SUFBeUk7Z0JBQ3pJLE1BQU07WUFDVixLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0I7Z0JBQ3hDLG1FQUFtRTtnQkFDbkUsTUFBTTtZQUNWO2dCQUNJLDRDQUE0QztnQkFDNUMscUVBQXFFO2dCQUNyRSxNQUFNO1NBQ2I7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNSLDRCQUE0QjtZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUVuQjtRQUVELElBQUksV0FBVyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixxQ0FBcUM7WUFDckMsSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNqRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDNUQsb0RBQW9EO1lBQ3BELDBEQUEwRDtZQUMxRCxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELDRGQUE0RjtZQUM1RiwrREFBK0Q7WUFDL0Qsc0dBQXNHO1lBQ3RHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakYsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3JCO0lBRUwsQ0FBQztJQUNELCtCQUFXLEdBQVg7UUFDSSxrQ0FBa0M7UUFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLDBCQUEwQixDQUFDO1lBQ2pELE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDMUQsa0JBQWtCO1lBQ2xCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQ3JDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0M7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN6RSwrREFBK0Q7WUFDL0QsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25ELDBCQUEwQjtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFDRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM3Qix3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXBELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQzFELGtCQUFrQjtnQkFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzdDO2dCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkM7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjthQUNJO1lBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUNWO0lBQ0wsQ0FBQztJQUNELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLCtDQUErQztRQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDckUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHFCQUFxQixDQUFDLENBQUM7UUFDdEcsbUVBQW1FO1FBQ25FLCtFQUErRTtRQUMvRSxrRUFBa0U7UUFDbEUsc0RBQXNEO1FBQ3RELGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxRQUFRLEVBQUUsUUFBUTtZQUNwRCxnR0FBZ0c7WUFDaEcsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDVCxTQUFTO2lCQUNaO3FCQUNJO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEI7YUFDSjtZQUNELElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFO2dCQUN2QixPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2I7aUJBQ0k7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7YUFDWjtRQUNMLENBQUMsQ0FBQztRQUVGLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVuRix3R0FBd0c7UUFDeEcsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxJQUFJLEVBQUUsS0FBSztZQUM1QyxnR0FBZ0c7WUFDaEcsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNsQyxrQ0FBa0M7WUFDbEMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM1QixvREFBb0Q7WUFDcEQsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUM5QiwwREFBMEQ7WUFDMUQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLFVBQVUsRUFBRTtnQkFDWixvREFBb0Q7Z0JBQ3BELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQ0k7Z0JBQ0QsK0VBQStFO2dCQUMvRSxPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQ2pDLDRGQUE0RjtZQUM1RixrR0FBa0c7WUFDbEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBQ0QseUJBQUssR0FBTDtRQUNJLDBCQUEwQjtRQUMxQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1lBRWxCLDJCQUEyQjtZQUMzQiwwQ0FBMEM7U0FDN0M7SUFFTCxDQUFDO0lBQ0QsNEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFckMsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFuUkQ7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7U0FDakIsQ0FBQztrREFDaUI7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzsrQ0FDSztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dEQUNNO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ007SUF2QlIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTZSN0I7SUFBRCxnQkFBQztDQTdSRCxBQTZSQyxDQTdSc0MsRUFBRSxDQUFDLFNBQVMsR0E2UmxEO2tCQTdSb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90VXBkYXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5Bc3NldClcbiAgICAvLyBtYW5pZmVzdFVybDogY2MuQXNzZXQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQXNzZXQsXG4gICAgfSlcbiAgICBtYW5pZmVzdFVybCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkaW5nTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBiZ1NwbGFzaDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBsb2FkaW5nQmFyOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgbGlzdFNwckJnOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJfSW5mbzogY2MuTGFiZWwgPSBudWxsO1xuICAgIF91cGRhdGluZzogQm9vbGVhbiA9IGZhbHNlO1xuICAgIF9mYWlsQ291bnQgPSAwO1xuICAgIF9jYW5SZXRyeTogQm9vbGVhbiA9IGZhbHNlO1xuICAgIF9zdG9yYWdlUGF0aDogc3RyaW5nID0gJyc7XG4gICAgX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcbiAgICBfYW0gPSBudWxsO1xuICAgIF9jaGVja0xpc3RlbmVyID0gbnVsbDtcbiAgICB2ZXJzaW9uQ29tcGFyZUhhbmRsZSA9IG51bGw7XG4gICAgZ2FtZVNjZW5lTmFtZSA9IFwibWFpblwiO1xuICAgIGxvYWRpbmdHYW1lQ29tcDogYW55ID0gbnVsbDtcblxuXG5cblxuXG4gICAgY2hlY2tDYihldmVudCkge1xuICAgICAgICAvLyAgY2MubG9nKCdDb2RlIENoZWNrQ2I6ICcgKyBldmVudC5nZXRFdmVudENvZGUoKSk7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZ2V0RXZlbnRDb2RlKCkpIHtcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9OT19MT0NBTF9NQU5JRkVTVDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRHYW1lKCk7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk5vIGxvY2FsIG1hbmlmZXN0IVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9ET1dOTE9BRF9NQU5JRkVTVDpcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9QQVJTRV9NQU5JRkVTVDpcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiRXJyb3IgUGFyc2UvRG93bmxvYWQgbWFuaWZlc3QhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEdhbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5BTFJFQURZX1VQX1RPX0RBVEU6XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlVwIFRvIERhdGUhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEdhbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5ORVdfVkVSU0lPTl9GT1VORDpcbiAgICAgICAgICAgICAgICB0aGlzLmxiX0luZm8ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGJfSW5mby5zdHJpbmcgPSBcIsSQYW5nIHThuqNpIGLhuqNuIGPhuq1wIG5o4bqtdC4uLlwiXG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIm5ldyB2ZXJzaW9uIGZvdW5kXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0Jhci5maWxsUmFuZ2UgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaG90VXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZygnQ29kZTogJyArIGV2ZW50LmdldEV2ZW50Q29kZSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xuICAgICAgICAvLyAgY2MubG9nKFwiQ2hlY2tDQjpzZXRFdmVudENhbGxiYWNrPW51bGxcIik7XG4gICAgICAgIHRoaXMuX2NoZWNrTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVDYihldmVudCkge1xuICAgICAgICB2YXIgbmVlZFJlc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZhaWxlZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmdldEV2ZW50Q29kZSgpKSB7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfTk9fTE9DQUxfTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIj09PT09PT09PT09PVVwZGF0ZSBDQj09PT09PT09PT09PT09PUVSUk9SX05PX0xPQ0FMX01BTklGRVNUXCIpXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5VUERBVEVfUFJPR1JFU1NJT046XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IGV2ZW50LmdldE1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiVVBEQVRFX1BST0dSRVNTSU9OOlwiLCBKU09OLnN0cmluZ2lmeShtc2cpKTtcbiAgICAgICAgICAgICAgICBpZiAobXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQcm9ncmVzc1wiICsgZXZlbnQuZ2V0UGVyY2VudCgpIC8gMTAwICsgJyUgOiAnICsgbXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sYl9JbmZvLnN0cmluZyA9IFwiVXBkYXRpbmc6IFwiICsgTWF0aC5mbG9vcihldmVudC5nZXRQZXJjZW50KCkgKiAxMDApICsgJyUnO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0Jhci5maWxsUmFuZ2UgPSBldmVudC5nZXRQZXJjZW50KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfRE9XTkxPQURfTUFOSUZFU1Q6XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfUEFSU0VfTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIj09PT09PT09PT09PVVwZGF0ZSBDQj09PT09PT09PT09PT09PUVSUk9SX1BBUlNFX01BTklGRVNULEVSUk9SX0RPV05MT0FEX01BTklGRVNUXCIpXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5BTFJFQURZX1VQX1RPX0RBVEU6XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIj09PT09PT09PT09PVVwZGF0ZSBDQj09PT09PT09PT09PT09PUFMUkVBRFlfVVBfVE9fREFURVwiKVxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX0ZJTklTSEVEOlxuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCI9PT09PT09PT09PT1VcGRhdGUgQ0I9PT09PT09PT09PT09PT1VUERBVEVfRklOSVNIRURcIilcbiAgICAgICAgICAgICAgICBuZWVkUmVzdGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiPT09PT09PT09PT09VXBkYXRlIENCPT09PT09PT09PT09PT09VVBEQVRFX0ZBSUxFRFwiKVxuICAgICAgICAgICAgICAgIHRoaXMuX2FtLmRvd25sb2FkRmFpbGVkQXNzZXRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5SZXRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfVVBEQVRJTkc6XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIj09PT09PT09PT09PVVwZGF0ZSBDQj09PT09PT09PT09PT09PVVQREFURV9GQUlMRURcIiArIFwiQXNzZXQgdXBkYXRlIGVycm9yOlwiICsgZXZlbnQuZ2V0QXNzZXRJZCgpICsgJywgJyArIGV2ZW50LmdldE1lc3NhZ2UoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfREVDT01QUkVTUzpcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiPT09PT09PT09PT09VXBkYXRlIENCPT09PT09PT09PT09PT09RVJST1JfREVDT01QUkVTU1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZygnQ29kZTogJyArIGV2ZW50LmdldEV2ZW50Q29kZSgpKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiPT09PT09PT09PT09VXBkYXRlIENCPT09PT09PT09PT09PT09ZGVmYXVsdCBob3R1cGRhdGUgXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZhaWxlZCkge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlVwZGF0ZSBGYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubG9hZEdhbWUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgLy8gUHJlcGVuZCB0aGUgbWFuaWZlc3QncyBzZWFyY2ggcGF0aFxuICAgICAgICAgICAgdmFyIHNlYXJjaFBhdGhzID0ganNiLmZpbGVVdGlscy5nZXRTZWFyY2hQYXRocygpO1xuICAgICAgICAgICAgdmFyIG5ld1BhdGhzID0gdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpLmdldFNlYXJjaFBhdGhzKCk7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwibmV3UGF0aHM9PVwiICsgSlNPTi5zdHJpbmdpZnkobmV3UGF0aHMpKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJzZWFyY2hQYXRocz09XCIgKyBKU09OLnN0cmluZ2lmeShzZWFyY2hQYXRocykpO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoc2VhcmNoUGF0aHMsIG5ld1BhdGhzKTtcbiAgICAgICAgICAgIC8vIFRoaXMgdmFsdWUgd2lsbCBiZSByZXRyaWV2ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkZWZhdWx0IHNlYXJjaCBwYXRoIGR1cmluZyBnYW1lIHN0YXJ0dXAsXG4gICAgICAgICAgICAvLyBwbGVhc2UgcmVmZXIgdG8gc2FtcGxlcy9qcy10ZXN0cy9tYWluLmpzIGZvciBkZXRhaWxlZCB1c2FnZS5cbiAgICAgICAgICAgIC8vICEhISBSZS1hZGQgdGhlIHNlYXJjaCBwYXRocyBpbiBtYWluLmpzIGlzIHZlcnkgaW1wb3J0YW50LCBvdGhlcndpc2UsIG5ldyBzY3JpcHRzIHdvbid0IHRha2UgZWZmZWN0LlxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIb3RVcGRhdGVTZWFyY2hQYXRocycsIEpTT04uc3RyaW5naWZ5KHNlYXJjaFBhdGhzKSk7XG4gICAgICAgICAgICBqc2IuZmlsZVV0aWxzLnNldFNlYXJjaFBhdGhzKHNlYXJjaFBhdGhzKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIGNjLmdhbWUucmVzdGFydCgpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgY2hlY2tVcGRhdGUoKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJDaGF5IHZhbyBob3QgdXBkYXRlXCIpO1xuICAgICAgICBpZiAodGhpcy5fdXBkYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubGJfSW5mby5zdHJpbmcgPSAnQ2hlY2tpbmcgb3IgdXBkYXRpbmcgLi4uJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYW0uZ2V0U3RhdGUoKSA9PT0ganNiLkFzc2V0c01hbmFnZXIuU3RhdGUuVU5JTklURUQpIHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgbWQ1IHVybFxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMubWFuaWZlc3RVcmwubmF0aXZlVXJsO1xuICAgICAgICAgICAgaWYgKGNjLmxvYWRlci5tZDVQaXBlKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gY2MubG9hZGVyLm1kNVBpcGUudHJhbnNmb3JtVVJMKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hbS5sb2FkTG9jYWxNYW5pZmVzdCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpIHx8ICF0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkuaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgLy90aGlzLnBhbmVsLmluZm8uc3RyaW5nID0gJ0ZhaWxlZCB0byBsb2FkIGxvY2FsIG1hbmlmZXN0IC4uLic7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayh0aGlzLmNoZWNrQ2IuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIGNjLmxvZyhcIkNoZWNrIFVwZGF0ZVwiKTtcbiAgICAgICAgdGhpcy5fYW0uY2hlY2tVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBob3RVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9hbSAmJiAhdGhpcy5fdXBkYXRpbmcpIHtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJzZXRFdmVudENhbGxiYWNrIHVwZGF0ZUNCXCIpO1xuICAgICAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayh0aGlzLnVwZGF0ZUNiLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fYW0uZ2V0U3RhdGUoKSA9PT0ganNiLkFzc2V0c01hbmFnZXIuU3RhdGUuVU5JTklURUQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIG1kNSB1cmxcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5tYW5pZmVzdFVybC5uYXRpdmVVcmw7XG4gICAgICAgICAgICAgICAgaWYgKGNjLmxvYWRlci5tZDVQaXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGNjLmxvYWRlci5tZDVQaXBlLnRyYW5zZm9ybVVSTCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9hbS5sb2FkTG9jYWxNYW5pZmVzdCh1cmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9mYWlsQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5fYW0udXBkYXRlKCk7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiSG90VXBkYXRlIGRlZWVcIik7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhvdFVwZGF0ZSgpO1xuICAgICAgICAgICAgfSwgMC41KVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nR2FtZUNvbXAgPSB0aGlzLmxvYWRpbmdOb2RlLmdldENvbXBvbmVudChcIkxvYWRpbmdcIik7XG4gICAgICAgIC8vIEhvdCB1cGRhdGUgaXMgb25seSBhdmFpbGFibGUgaW4gTmF0aXZlIGJ1aWxkXG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5pc0Jyb3dzZXIgfHwgY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfT1NYKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcmFnZVBhdGggPSAoKGpzYi5maWxlVXRpbHMgPyBqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpIDogJy8nKSArICdsb3RlODgtcmVtb3RlLWFzc2V0Jyk7XG4gICAgICAgIC8vICBjYy5sb2coJ1N0b3JhZ2UgcGF0aCBmb3IgcmVtb3RlIGFzc2V0IDogJyArIHRoaXMuX3N0b3JhZ2VQYXRoKTtcbiAgICAgICAgLy8gU2V0dXAgeW91ciBvd24gdmVyc2lvbiBjb21wYXJlIGhhbmRsZXIsIHZlcnNpb25BIGFuZCBCIGlzIHZlcnNpb25zIGluIHN0cmluZ1xuICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIGdyZWF0ZXIgdGhhbiAwLCB2ZXJzaW9uQSBpcyBncmVhdGVyIHRoYW4gQixcbiAgICAgICAgLy8gaWYgdGhlIHJldHVybiB2YWx1ZSBlcXVhbHMgMCwgdmVyc2lvbkEgZXF1YWxzIHRvIEIsXG4gICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgc21hbGxlciB0aGFuIDAsIHZlcnNpb25BIGlzIHNtYWxsZXIgdGhhbiBCLlxuICAgICAgICB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlID0gZnVuY3Rpb24gKHZlcnNpb25BLCB2ZXJzaW9uQikge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwiSlMgQ3VzdG9tIFZlcnNpb24gQ29tcGFyZTogdmVyc2lvbiBBIGlzIFwiICsgdmVyc2lvbkEgKyAnLCB2ZXJzaW9uIEIgaXMgJyArIHZlcnNpb25CKTtcbiAgICAgICAgICAgIHZhciB2QSA9IHZlcnNpb25BLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICB2YXIgdkIgPSB2ZXJzaW9uQi5zcGxpdCgnLicpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2QS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gcGFyc2VJbnQodkFbaV0pO1xuICAgICAgICAgICAgICAgIHZhciBiID0gcGFyc2VJbnQodkJbaV0gfHwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZCLmxlbmd0aCA+IHZBLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEluaXQgd2l0aCBlbXB0eSBtYW5pZmVzdCB1cmwgZm9yIHRlc3RpbmcgY3VzdG9tIG1hbmlmZXN0XG4gICAgICAgIHRoaXMuX2FtID0gbmV3IGpzYi5Bc3NldHNNYW5hZ2VyKCcnLCB0aGlzLl9zdG9yYWdlUGF0aCwgdGhpcy52ZXJzaW9uQ29tcGFyZUhhbmRsZSk7XG5cbiAgICAgICAgLy8gU2V0dXAgdGhlIHZlcmlmaWNhdGlvbiBjYWxsYmFjaywgYnV0IHdlIGRvbid0IGhhdmUgbWQ1IGNoZWNrIGZ1bmN0aW9uIHlldCwgc28gb25seSBwcmludCBzb21lIG1lc3NhZ2VcbiAgICAgICAgLy8gUmV0dXJuIHRydWUgaWYgdGhlIHZlcmlmaWNhdGlvbiBwYXNzZWQsIG90aGVyd2lzZSByZXR1cm4gZmFsc2VcbiAgICAgICAgdGhpcy5fYW0uc2V0VmVyaWZ5Q2FsbGJhY2soZnVuY3Rpb24gKHBhdGgsIGFzc2V0KSB7XG4gICAgICAgICAgICAvLyBXaGVuIGFzc2V0IGlzIGNvbXByZXNzZWQsIHdlIGRvbid0IG5lZWQgdG8gY2hlY2sgaXRzIG1kNSwgYmVjYXVzZSB6aXAgZmlsZSBoYXZlIGJlZW4gZGVsZXRlZC5cbiAgICAgICAgICAgIHZhciBjb21wcmVzc2VkID0gYXNzZXQuY29tcHJlc3NlZDtcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBjb3JyZWN0IG1kNSB2YWx1ZS5cbiAgICAgICAgICAgIHZhciBleHBlY3RlZE1ENSA9IGFzc2V0Lm1kNTtcbiAgICAgICAgICAgIC8vIGFzc2V0LnBhdGggaXMgcmVsYXRpdmUgcGF0aCBhbmQgcGF0aCBpcyBhYnNvbHV0ZS5cbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVBhdGggPSBhc3NldC5wYXRoO1xuICAgICAgICAgICAgLy8gVGhlIHNpemUgb2YgYXNzZXQgZmlsZSwgYnV0IHRoaXMgdmFsdWUgY291bGQgYmUgYWJzZW50LlxuICAgICAgICAgICAgdmFyIHNpemUgPSBhc3NldC5zaXplO1xuICAgICAgICAgICAgaWYgKGNvbXByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiVmVyaWZpY2F0aW9uIHBhc3NlZCA6IFwiICsgcmVsYXRpdmVQYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJWZXJpZmljYXRpb24gcGFzc2VkIDogXCIgKyByZWxhdGl2ZVBhdGggKyAnICgnICsgZXhwZWN0ZWRNRDUgKyAnKScpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIC8vIFNvbWUgQW5kcm9pZCBkZXZpY2UgbWF5IHNsb3cgZG93biB0aGUgZG93bmxvYWQgcHJvY2VzcyB3aGVuIGNvbmN1cnJlbnQgdGFza3MgaXMgdG9vIG11Y2guXG4gICAgICAgICAgICAvLyBUaGUgdmFsdWUgbWF5IG5vdCBiZSBhY2N1cmF0ZSwgcGxlYXNlIGRvIG1vcmUgdGVzdCBhbmQgZmluZCB3aGF0J3MgbW9zdCBzdWl0YWJsZSBmb3IgeW91ciBnYW1lLlxuICAgICAgICAgICAgdGhpcy5fYW0uc2V0TWF4Q29uY3VycmVudFRhc2soMTApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tVcGRhdGUoKTtcblxuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gVXRpbHMuZ2V0R2V0RGV2aWNlSWQoKTtcbiAgICAgICAgaWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcblxuICAgICAgICAgICAgLy8gR2xvYmFsLmxvYWRUZXh0Q29uZmlnKCk7XG4gICAgICAgICAgICAvLyBMb2FkQ29uZmlnLmdldEluc3RhbmNlKCkucHVzaERhdGFFY28oKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGxvYWRHYW1lKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdHYW1lQ29tcC5zdGFydEdhbWUoKTtcblxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=