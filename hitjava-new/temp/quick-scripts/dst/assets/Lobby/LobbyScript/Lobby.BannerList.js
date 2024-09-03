
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.BannerList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8424MEM4xKhYuZO229rdTC', 'Lobby.BannerList');
// Lobby/LobbyScript/Lobby.BannerList.ts

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
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BannerList = /** @class */ (function (_super) {
    __extends(BannerList, _super);
    function BannerList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageView = null;
        _this.itemPage = null;
        // LIFE-CYCLE CALLBACKS:
        _this.intervalBanner = null;
        _this.dataPage = null;
        _this.indexPage = 0;
        return _this;
        // update (dt) {}
    }
    BannerList.prototype.onLoad = function () {
    };
    BannerList.prototype.start = function () {
        this.getBanner();
    };
    BannerList.prototype.getBanner = function () {
        var _this = this;
        var data = {};
        data["c"] = 2020;
        Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
            if (res.success) {
                _this.loadListBanner(res.data);
            }
            else {
                App_1.default.instance.alertDialog.showMsg(res.message);
            }
        });
    };
    BannerList.prototype.loadListBanner = function (data) {
        var self = this;
        var dataBanner = [];
        data.forEach(function (element) {
            if (element.status == 1) {
                dataBanner.push(element);
            }
        });
        if (data.length != 0) {
            this.dataPage = data;
            for (var i = 0; i < dataBanner.length; i++) {
                var item = this.pageView.content.children[i];
                if (!item) {
                    item = cc.instantiate(this.itemPage);
                    this.pageView.addPage(item);
                }
                var url = dataBanner[i].image_path;
                Utils_1.default.loadImgFromUrl(item.getComponent(cc.Sprite), url);
            }
            this.intervalBanner = setInterval(function () {
                self.pageView.scrollToPage(self.indexPage, 0.5);
                self.indexPage++;
                if (self.indexPage >= self.dataPage.length) {
                    self.indexPage = 0;
                }
            }, 2000);
            Global_1.Global.LobbyController.updateSizeListGame(true);
        }
        else {
            Global_1.Global.LobbyController.updateSizeListGame(false);
        }
    };
    BannerList.prototype.onDestroy = function () {
        if (this.intervalBanner != null) {
            clearInterval(this.intervalBanner);
            this.intervalBanner = null;
        }
    };
    __decorate([
        property(cc.PageView)
    ], BannerList.prototype, "pageView", void 0);
    __decorate([
        property(cc.Node)
    ], BannerList.prototype, "itemPage", void 0);
    BannerList = __decorate([
        ccclass
    ], BannerList);
    return BannerList;
}(cc.Component));
exports.default = BannerList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5CYW5uZXJMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCxtREFBa0Q7QUFDbEQsK0NBQTBDO0FBQzFDLDJDQUFzQztBQUN0QywrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF5RUM7UUF0RUcsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6Qix3QkFBd0I7UUFDaEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFTLEdBQUcsQ0FBQyxDQUFDOztRQTZEdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUE3REcsMkJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCw4QkFBUyxHQUFUO1FBQUEsaUJBV0M7UUFWRyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3JDLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDYixLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztpQkFDSTtnQkFDRCxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pEO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsbUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ2hCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDUCxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQjtnQkFDRCxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNuQyxlQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztpQkFDdEI7WUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxlQUFNLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDSCxlQUFNLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BEO0lBRUwsQ0FBQztJQUlELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO1lBQzdCLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBcEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ087SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQU5SLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F5RTlCO0lBQUQsaUJBQUM7Q0F6RUQsQUF5RUMsQ0F6RXVDLEVBQUUsQ0FBQyxTQUFTLEdBeUVuRDtrQkF6RW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9HbG9iYWxcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFubmVyTGlzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUGFnZVZpZXcpXG4gICAgcGFnZVZpZXc6IGNjLlBhZ2VWaWV3ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1QYWdlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIHByaXZhdGUgaW50ZXJ2YWxCYW5uZXIgPSBudWxsO1xuICAgIHByaXZhdGUgZGF0YVBhZ2UgPSBudWxsO1xuICAgIHByaXZhdGUgaW5kZXhQYWdlID0gMDtcbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nZXRCYW5uZXIoKTtcbiAgICB9XG4gICAgZ2V0QmFubmVyKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiY1wiXSA9IDIwMjA7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgZGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRMaXN0QmFubmVyKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRMaXN0QmFubmVyKGRhdGEpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgZGF0YUJhbm5lciA9IFtdO1xuICAgICAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhdGFCYW5uZXIucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFQYWdlID0gZGF0YTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUJhbm5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5wYWdlVmlldy5jb250ZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZVZpZXcuYWRkUGFnZShpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGRhdGFCYW5uZXJbaV0uaW1hZ2VfcGF0aDtcbiAgICAgICAgICAgICAgICBVdGlscy5sb2FkSW1nRnJvbVVybChpdGVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCB1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbEJhbm5lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBhZ2VWaWV3LnNjcm9sbFRvUGFnZShzZWxmLmluZGV4UGFnZSwgMC41KTtcbiAgICAgICAgICAgICAgICBzZWxmLmluZGV4UGFnZSsrO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmluZGV4UGFnZSA+PSBzZWxmLmRhdGFQYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmluZGV4UGFnZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLnVwZGF0ZVNpemVMaXN0R2FtZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIudXBkYXRlU2l6ZUxpc3RHYW1lKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxCYW5uZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsQmFubmVyKTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxCYW5uZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=