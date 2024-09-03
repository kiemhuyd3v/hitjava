
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.TopHu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '473e857e/hHZLwIesREZHo4', 'Lobby.TopHu');
// Lobby/LobbyScript/Lobby.TopHu.ts

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
var Lobby_ItemTopHu_1 = require("./Lobby.ItemTopHu");
var HandlerButton_1 = require("./Script/common/HandlerButton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn100 = null;
        _this.btn1000 = null;
        _this.btn10000 = null;
        _this.itemTemplate = null;
        _this.animTopHu = null;
        _this.nodeHu = null;
        _this.listItem = [];
        _this.index = 0;
        _this.listData100 = new Array();
        _this.listData1000 = new Array();
        _this.listData10000 = new Array();
        _this.isMove = false;
        _this.distance = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        this.btn100.node.on('click', this.onBtn100Clicked, this);
        this.btn1000.node.on('click', this.onBtn1000Clicked, this);
        this.btn10000.node.on('click', this.onBtn10000Clicked, this);
        this.index = 2;
        this.animTopHu.on(cc.Node.EventType.TOUCH_START, function (touch) {
            _this.isMove = false;
            _this.distance = 0;
        });
        this.animTopHu.on(cc.Node.EventType.TOUCH_MOVE, function (touch) {
            _this.animTopHu.setPosition(_this.animTopHu.getPosition().add(touch.getDelta()));
            _this.distance += Math.abs(touch.getDelta().x) + Math.abs(touch.getDelta().y);
            if (_this.distance >= 70) {
                _this.isMove = true;
            }
        });
        this.animTopHu.on(cc.Node.EventType.TOUCH_END, function (touch) {
            if (!_this.isMove) {
                _this.onClickTopHu();
            }
            _this.isMove = false;
        });
    };
    NewClass.prototype.onBtn100Clicked = function (event) {
        this.btn100.node.getComponent(HandlerButton_1.default).SetActive(true);
        this.btn1000.node.getComponent(HandlerButton_1.default).SetActive(false);
        this.btn10000.node.getComponent(HandlerButton_1.default).SetActive(false);
        this.Onshow(0);
    };
    NewClass.prototype.onBtn1000Clicked = function (event) {
        this.btn100.node.getComponent(HandlerButton_1.default).SetActive(false);
        this.btn1000.node.getComponent(HandlerButton_1.default).SetActive(true);
        this.btn10000.node.getComponent(HandlerButton_1.default).SetActive(false);
        this.Onshow(1);
    };
    NewClass.prototype.onBtn10000Clicked = function (event) {
        this.btn100.node.getComponent(HandlerButton_1.default).SetActive(false);
        this.btn1000.node.getComponent(HandlerButton_1.default).SetActive(false);
        this.btn10000.node.getComponent(HandlerButton_1.default).SetActive(true);
        this.Onshow(2);
    };
    NewClass.prototype.start = function () {
        this.btn100.node.getComponent(HandlerButton_1.default).SetActive(false);
        this.btn1000.node.getComponent(HandlerButton_1.default).SetActive(false);
        this.btn10000.node.getComponent(HandlerButton_1.default).SetActive(true);
    };
    NewClass.prototype.ShowData = function (listData100, listData1000, listData10000) {
        //  //Utils.Log("ShowData:"+listData100);
        this.listData100 = listData100;
        this.listData1000 = listData1000;
        this.listData10000 = listData10000;
        this.listData100.sort(function (a, b) { return a.value > b.value ? -1 : 1; });
        this.listData1000.sort(function (a, b) { return a.value > b.value ? -1 : 1; });
        this.listData10000.sort(function (a, b) { return a.value > b.value ? -1 : 1; });
        this.Onshow(this.index);
    };
    NewClass.prototype.getItem = function () {
        var item = null;
        for (var i = 0; i < this.itemTemplate.parent.childrenCount; i++) {
            var node = this.itemTemplate.parent.children[i];
            if (node != this.itemTemplate && !node.active) {
                item = node;
                item.active = true;
                break;
            }
        }
        if (item == null) {
            item = cc.instantiate(this.itemTemplate);
            item.parent = this.itemTemplate.parent;
        }
        item.active = true;
        return item;
    };
    NewClass.prototype.Onshow = function (index) {
        var listdata = new Array();
        if (index == 0) {
            listdata = this.listData100;
        }
        else if (index == 1) {
            listdata = this.listData1000;
        }
        else {
            listdata = this.listData10000;
        }
        // // init list
        if (this.listItem.length <= 0) {
            for (var i = 0; i < listdata.length; i++) {
                var item = this.getItem();
                var itemtophu = item.getComponent(Lobby_ItemTopHu_1.default);
                this.listItem.push(itemtophu);
            }
        }
        for (var i = 0; i < listdata.length; i++) {
            this.listItem[i].SetData(listdata[i]);
        }
        this.index = index;
    };
    NewClass.prototype.onClickTopHu = function () {
        this.nodeHu.active = !this.nodeHu.active;
    };
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "btn100", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "btn1000", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "btn10000", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "itemTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "animTopHu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nodeHu", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Ub3BIdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFFdkMsK0RBQTBEO0FBRXBELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0lDO1FBN0hHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBRXhCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsaUJBQVcsR0FBcUIsSUFBSSxLQUFLLEVBQWEsQ0FBQztRQUN2RCxrQkFBWSxHQUFxQixJQUFJLEtBQUssRUFBYSxDQUFDO1FBQ3hELG1CQUFhLEdBQXFCLElBQUksS0FBSyxFQUFhLENBQUM7UUFDekQsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGNBQVEsR0FBWSxDQUFDLENBQUM7O0lBMkcxQixDQUFDO0lBMUdHLHlCQUFNLEdBQU47UUFBQSxpQkF1QkM7UUF0QkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUs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Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFiTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0k1QjtJQUFELGVBQUM7Q0FoSUQsQUFnSUMsQ0FoSXFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0lqRDtrQkFoSW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbUh1IGZyb20gXCIuL0xvYmJ5Lkl0ZW1Ub3BIdVwiO1xuaW1wb3J0IHsgVG9waHVkYXRhIH0gZnJvbSAnLi9Mb2JieS5JdGVtVG9wSHUnO1xuaW1wb3J0IEhhbmRsZXJCdXR0b24gZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9IYW5kbGVyQnV0dG9uXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bjEwMDogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bjEwMDA6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG4xMDAwMDogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFuaW1Ub3BIdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUh1OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBsaXN0SXRlbTogSXRlbUh1W10gPSBbXTtcblxuICAgIGluZGV4OiBudW1iZXIgPSAwO1xuICAgIGxpc3REYXRhMTAwOiBBcnJheTxUb3BodWRhdGE+ID0gbmV3IEFycmF5PFRvcGh1ZGF0YT4oKTtcbiAgICBsaXN0RGF0YTEwMDA6IEFycmF5PFRvcGh1ZGF0YT4gPSBuZXcgQXJyYXk8VG9waHVkYXRhPigpO1xuICAgIGxpc3REYXRhMTAwMDA6IEFycmF5PFRvcGh1ZGF0YT4gPSBuZXcgQXJyYXk8VG9waHVkYXRhPigpO1xuICAgIGlzTW92ZSA9IGZhbHNlO1xuICAgIGRpc3RhbmNlIDogbnVtYmVyID0gMDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYnRuMTAwLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ0bjEwMENsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLmJ0bjEwMDAubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQnRuMTAwMENsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLmJ0bjEwMDAwLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vbkJ0bjEwMDAwQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuaW5kZXggPSAyO1xuICAgICAgICB0aGlzLmFuaW1Ub3BIdS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKHRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDA7XG4gICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltVG9wSHUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKHRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1Ub3BIdS5zZXRQb3NpdGlvbih0aGlzLmFuaW1Ub3BIdS5nZXRQb3NpdGlvbigpLmFkZCh0b3VjaC5nZXREZWx0YSgpKSk7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlICs9IE1hdGguYWJzKHRvdWNoLmdldERlbHRhKCkueCkgKyBNYXRoLmFicyh0b3VjaC5nZXREZWx0YSgpLnkpO1xuICAgICAgICAgICAgaWYodGhpcy5kaXN0YW5jZSA+PSA3MCl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltVG9wSHUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAodG91Y2gpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2tUb3BIdSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25CdG4xMDBDbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYnRuMTAwLm5vZGUuZ2V0Q29tcG9uZW50KEhhbmRsZXJCdXR0b24pLlNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5idG4xMDAwLm5vZGUuZ2V0Q29tcG9uZW50KEhhbmRsZXJCdXR0b24pLlNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYnRuMTAwMDAubm9kZS5nZXRDb21wb25lbnQoSGFuZGxlckJ1dHRvbikuU2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5PbnNob3coMCk7XG4gICAgfVxuICAgIG9uQnRuMTAwMENsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5idG4xMDAubm9kZS5nZXRDb21wb25lbnQoSGFuZGxlckJ1dHRvbikuU2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idG4xMDAwLm5vZGUuZ2V0Q29tcG9uZW50KEhhbmRsZXJCdXR0b24pLlNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5idG4xMDAwMC5ub2RlLmdldENvbXBvbmVudChIYW5kbGVyQnV0dG9uKS5TZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLk9uc2hvdygxKTtcbiAgICB9XG4gICAgb25CdG4xMDAwMENsaWNrZWQoZXZlbnQpIHtcblxuICAgICAgICB0aGlzLmJ0bjEwMC5ub2RlLmdldENvbXBvbmVudChIYW5kbGVyQnV0dG9uKS5TZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLmJ0bjEwMDAubm9kZS5nZXRDb21wb25lbnQoSGFuZGxlckJ1dHRvbikuU2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idG4xMDAwMC5ub2RlLmdldENvbXBvbmVudChIYW5kbGVyQnV0dG9uKS5TZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHRoaXMuT25zaG93KDIpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJ0bjEwMC5ub2RlLmdldENvbXBvbmVudChIYW5kbGVyQnV0dG9uKS5TZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLmJ0bjEwMDAubm9kZS5nZXRDb21wb25lbnQoSGFuZGxlckJ1dHRvbikuU2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5idG4xMDAwMC5ub2RlLmdldENvbXBvbmVudChIYW5kbGVyQnV0dG9uKS5TZXRBY3RpdmUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dEYXRhKGxpc3REYXRhMTAwOiBBcnJheTxUb3BodWRhdGE+LCBsaXN0RGF0YTEwMDA6IEFycmF5PFRvcGh1ZGF0YT4sIGxpc3REYXRhMTAwMDA6IEFycmF5PFRvcGh1ZGF0YT4pIHtcbiAgICAgICAgLy8gIC8vVXRpbHMuTG9nKFwiU2hvd0RhdGE6XCIrbGlzdERhdGExMDApO1xuICAgICAgICB0aGlzLmxpc3REYXRhMTAwID0gbGlzdERhdGExMDA7XG4gICAgICAgIHRoaXMubGlzdERhdGExMDAwID0gbGlzdERhdGExMDAwO1xuICAgICAgICB0aGlzLmxpc3REYXRhMTAwMDAgPSBsaXN0RGF0YTEwMDAwO1xuICAgICAgICB0aGlzLmxpc3REYXRhMTAwLnNvcnQoKGEsIGIpID0+IGEudmFsdWUgPiBiLnZhbHVlID8gLTEgOiAxKTtcbiAgICAgICAgdGhpcy5saXN0RGF0YTEwMDAuc29ydCgoYSwgYikgPT4gYS52YWx1ZSA+IGIudmFsdWUgPyAtMSA6IDEpO1xuICAgICAgICB0aGlzLmxpc3REYXRhMTAwMDAuc29ydCgoYSwgYikgPT4gYS52YWx1ZSA+IGIudmFsdWUgPyAtMSA6IDEpO1xuICAgICAgICB0aGlzLk9uc2hvdyh0aGlzLmluZGV4KVxuICAgIH1cbiAgICBwcml2YXRlIGdldEl0ZW0oKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBpdGVtID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChub2RlICE9IHRoaXMuaXRlbVRlbXBsYXRlICYmICFub2RlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBub2RlO1xuICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcHJpdmF0ZSBPbnNob3coaW5kZXg6IG51bWJlcikge1xuICAgICAgICB2YXIgbGlzdGRhdGEgPSBuZXcgQXJyYXk8VG9waHVkYXRhPigpO1xuICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgbGlzdGRhdGEgPSB0aGlzLmxpc3REYXRhMTAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09IDEpIHtcbiAgICAgICAgICAgIGxpc3RkYXRhID0gdGhpcy5saXN0RGF0YTEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZGF0YSA9IHRoaXMubGlzdERhdGExMDAwMDtcbiAgICAgICAgfVxuICAgICAgICAvLyAvLyBpbml0IGxpc3RcbiAgICAgICAgaWYgKHRoaXMubGlzdEl0ZW0ubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SXRlbSgpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtdG9waHUgPSBpdGVtLmdldENvbXBvbmVudChJdGVtSHUpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW0ucHVzaChpdGVtdG9waHUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1baV0uU2V0RGF0YShsaXN0ZGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIH1cbiAgICBvbkNsaWNrVG9wSHUoKSB7XG4gICAgICAgIHRoaXMubm9kZUh1LmFjdGl2ZSA9ICF0aGlzLm5vZGVIdS5hY3RpdmU7XG4gICAgfVxuXG59XG4iXX0=