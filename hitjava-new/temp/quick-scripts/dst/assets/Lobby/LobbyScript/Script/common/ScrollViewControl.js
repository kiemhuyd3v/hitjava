
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/ScrollViewControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c0f81ZUYBCS4Ju2b8WBhoL', 'ScrollViewControl');
// Lobby/LobbyScript/Script/common/ScrollViewControl.ts

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
var DIRECTION = cc.Enum({
    HORIZONTAL: 1,
    VERTICAL: 2,
});
var ScrollViewControl = /** @class */ (function (_super) {
    __extends(ScrollViewControl, _super);
    function ScrollViewControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.direction = DIRECTION.VERTICAL;
        _this.itemTemplate = null;
        _this.itemNodeTemplate = null;
        _this.scrollView = null;
        _this.itemHeight = 80;
        _this.itemWidth = 80;
        _this.spacing = 5; // space between each item
        _this.totalCount = 0; // how many items we need for the whole list
        _this.initCount = 20;
        _this.bufferZone = 500; // when item is away from bufferZone, we relocate it
        _this.isLazyInit = false;
        _this.items = [];
        _this.updateTimer = 0;
        _this.updateInterval = 0.05;
        _this.lastContentPosY = 0;
        _this.lastContentPosX = 0;
        _this.initHeight = 0;
        _this.listItemRemove = [];
        _this.idKeys = [];
        _this.updateCallback = null;
        _this.setDataCb = null;
        _this.listItemData = [];
        return _this;
    }
    // use this for initialization
    ScrollViewControl.prototype.onLoad = function () {
        if (this.direction == DIRECTION.HORIZONTAL) {
            // this.initCount = Math.floor((this.scrollView.node.width + this.scrollView.node.width / 2) * (cc.winSize.width / 1560) / this.itemWidth);
            this.initCount = Math.floor(this.initCount * (cc.winSize.width / 1560));
        }
        this.initialize();
        if (this.itemNodeTemplate) {
            this.itemHeight = this.itemNodeTemplate.height;
            this.itemWidth = this.itemNodeTemplate.width;
        }
    };
    ScrollViewControl.prototype.start = function () {
    };
    ScrollViewControl.prototype.setDataList = function (_updateCallback, _listItemData) {
        var _this = this;
        this.setDataCb = function () {
            _this.setDataList(_updateCallback, _listItemData);
        };
        this.updateCallback = _updateCallback;
        this.listItemData = _listItemData;
        this.totalCount = this.listItemData.length;
        if (this.direction == DIRECTION.VERTICAL) {
            this.scrollView.content.height = this.totalCount * (this.itemHeight + this.spacing) + this.spacing; // get total content height
        }
        else {
            this.scrollView.content.width = this.totalCount * (this.itemWidth + this.spacing) + this.spacing; // get total content height
        }
        if (this.totalCount === 0 || this.totalCount <= this.items.length) {
            for (var i = this.totalCount; i < this.items.length; i++) {
                this.listItemRemove.push(this.items[i]);
                this.items[i].parent = null;
                this.items.splice(i, 1);
                i--;
            }
        }
        else {
            for (var i = 0; i < this.listItemRemove.length; i++) {
                this.items.push(this.listItemRemove[i]);
                this.listItemRemove[i].parent = this.scrollView.content;
                this.listItemRemove.splice(i, 1);
                i--;
            }
        }
        if (this.direction == DIRECTION.VERTICAL) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].setPosition(0, -this.items[i].height * (0.5 + i) - this.spacing * (i + 1));
                this.items[i].itemID = i;
                if (this.updateCallback !== null && i < this.listItemData.length) {
                    this.listItemData[i]['index'] = i;
                    this.updateCallback(this.items[i], this.listItemData[i]);
                }
            }
        }
        else {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].setPosition(this.items[i].width * (0.5 + i) + this.spacing * (i + 1), 0);
                this.items[i].itemID = i;
                if (this.updateCallback !== null && this.listItemData[i] != null) {
                    this.updateCallback(this.items[i], this.listItemData[i]);
                }
            }
        }
    };
    ScrollViewControl.prototype.updateDataList = function (_listItemData) {
        this.listItemData = _listItemData;
        this.totalCount = this.listItemData.length;
        if (this.direction == DIRECTION.VERTICAL) {
            this.scrollView.content.height = this.totalCount * (this.itemHeight + this.spacing) + this.spacing; // get total content height
        }
        else {
            this.scrollView.content.width = this.totalCount * (this.itemWidth + this.spacing) + this.spacing; // get total content height
        }
    };
    ScrollViewControl.prototype.initialize = function () {
        if (this.direction == DIRECTION.VERTICAL) {
            this.scrollView.content.height = this.totalCount * (this.itemHeight + this.spacing) + this.spacing; // get total content height
        }
        else {
            this.scrollView.content.width = this.totalCount * (this.itemWidth + this.spacing) + this.spacing; // get total content height
        }
        for (var i = 0; i < this.initCount; ++i) { // spawn items, we only need to do this once
            var item = void 0;
            if (cc.isValid(this.itemTemplate)) {
                item = cc.instantiate(this.itemTemplate);
                this.scrollView.content.addChild(item);
            }
            else {
                if (i == 0) {
                    item = this.itemNodeTemplate;
                }
                else {
                    if (cc.isValid(this.scrollView.content.children[i])) {
                        item = this.scrollView.content.children[i];
                    }
                    else {
                        item = cc.instantiate(this.itemNodeTemplate);
                        this.scrollView.content.addChild(item);
                    }
                }
            }
            if (this.direction == DIRECTION.VERTICAL) {
                item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1));
            }
            else {
                item.setPosition(item.width * (0.5 + i) + this.spacing * (i + 1), 0);
            }
            item['itemID'] = i;
            this.items.push(item);
        }
        if (this.listItemData.length > 0) {
            this.setDataCb();
        }
    };
    ScrollViewControl.prototype.getPositionInView = function (item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.getPosition());
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };
    ScrollViewControl.prototype.update = function (dt) {
        if (this.listItemData.length <= this.initCount)
            return;
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval)
            return; // we don't need to do the math every frame
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isDown = false;
        var offset;
        if (this.direction == DIRECTION.VERTICAL) {
            isDown = this.scrollView.content.y < this.lastContentPosY; // scrolling direction
            offset = (this.itemHeight + this.spacing) * items.length;
        }
        else {
            isDown = this.scrollView.content.x > this.lastContentPosX; // scrolling direction
            offset = (this.itemWidth + this.spacing) * items.length;
        }
        for (var i = 0; i < items.length; ++i) {
            var viewPos = this.getPositionInView(items[i]);
            if (isDown) {
                if (this.direction == DIRECTION.VERTICAL) {
                    if (viewPos.y < -buffer && items[i].y + offset < 0) {
                        items[i].y = items[i].y + offset;
                        var itemId = items[i].itemID - items.length; // update item id
                        items[i].itemID = itemId;
                        if (this.updateCallback !== null) {
                            this.updateCallback(items[i], this.listItemData[itemId]);
                        }
                    }
                }
                else {
                    if (viewPos.x > buffer && items[i].x - offset > 0) {
                        items[i].x = items[i].x - offset;
                        var itemId = items[i].itemID - items.length; // update item id
                        items[i].itemID = itemId;
                        if (this.updateCallback !== null)
                            this.updateCallback(items[i], this.listItemData[itemId]);
                    }
                }
                // if away from buffer zone and not reaching top of content
            }
            else {
                // if away from buffer zone and not reaching bottom of content
                if (this.direction === DIRECTION.VERTICAL) {
                    if (viewPos.y > buffer && items[i].y - offset > -this.scrollView.content.height) {
                        items[i].y = items[i].y - offset;
                        var itemId = items[i].itemID + items.length;
                        items[i].itemID = itemId;
                        if (this.updateCallback !== null) {
                            this.updateCallback(items[i], this.listItemData[itemId]);
                        }
                    }
                }
                else {
                    if (viewPos.x < -buffer && items[i].x + offset < this.scrollView.content.width) {
                        items[i].x = items[i].x + offset;
                        var itemId = items[i].itemID + items.length;
                        items[i].itemID = itemId;
                        if (this.updateCallback !== null)
                            this.updateCallback(items[i], this.listItemData[itemId]);
                    }
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.scrollView.content.y;
        this.lastContentPosX = this.scrollView.content.x;
    };
    ScrollViewControl.prototype.setStateItem = function (state) {
        this.scrollView.content.children.forEach(function (item) {
            item.active = state;
        });
    };
    __decorate([
        property({ type: DIRECTION })
    ], ScrollViewControl.prototype, "direction", void 0);
    __decorate([
        property(cc.Prefab)
    ], ScrollViewControl.prototype, "itemTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], ScrollViewControl.prototype, "itemNodeTemplate", void 0);
    __decorate([
        property(cc.ScrollView)
    ], ScrollViewControl.prototype, "scrollView", void 0);
    __decorate([
        property
    ], ScrollViewControl.prototype, "itemHeight", void 0);
    __decorate([
        property
    ], ScrollViewControl.prototype, "itemWidth", void 0);
    __decorate([
        property
    ], ScrollViewControl.prototype, "spacing", void 0);
    __decorate([
        property
    ], ScrollViewControl.prototype, "initCount", void 0);
    __decorate([
        property
    ], ScrollViewControl.prototype, "bufferZone", void 0);
    __decorate([
        property
    ], ScrollViewControl.prototype, "isLazyInit", void 0);
    ScrollViewControl = __decorate([
        ccclass
    ], ScrollViewControl);
    return ScrollViewControl;
}(cc.Component));
exports.default = ScrollViewControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcU2Nyb2xsVmlld0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNwQixVQUFVLEVBQUUsQ0FBQztJQUNiLFFBQVEsRUFBRSxDQUFDO0NBQ2QsQ0FBQyxDQUFDO0FBR0g7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUF5T0M7UUF2T0csZUFBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFFL0Isa0JBQVksR0FBYyxJQUFJLENBQUE7UUFHOUIsc0JBQWdCLEdBQVksSUFBSSxDQUFBO1FBR2hDLGdCQUFVLEdBQWtCLElBQUksQ0FBQTtRQUVoQyxnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsYUFBTyxHQUFHLENBQUMsQ0FBQSxDQUFDLDBCQUEwQjtRQUV0QyxnQkFBVSxHQUFHLENBQUMsQ0FBQSxDQUFDLDRDQUE0QztRQUUzRCxlQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsZ0JBQVUsR0FBRyxHQUFHLENBQUEsQ0FBQyxvREFBb0Q7UUFHckUsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsV0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNWLGlCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2Ysb0JBQWMsR0FBRyxJQUFJLENBQUE7UUFDckIscUJBQWUsR0FBRyxDQUFDLENBQUE7UUFDbkIscUJBQWUsR0FBRyxDQUFDLENBQUE7UUFDbkIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixvQkFBYyxHQUFHLEVBQUUsQ0FBQTtRQUNuQixZQUFNLEdBQUcsRUFBRSxDQUFB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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7eURBQ1E7SUFFaEM7UUFEQyxRQUFRO3lEQUNPO0lBRWhCO1FBREMsUUFBUTt3REFDTTtJQUVmO1FBREMsUUFBUTtzREFDRTtJQUlYO1FBREMsUUFBUTt3REFDTTtJQUVmO1FBREMsUUFBUTt5REFDTztJQUdoQjtRQURDLFFBQVE7eURBQ21CO0lBekJYLGlCQUFpQjtRQUZyQyxPQUFPO09BRWEsaUJBQWlCLENBeU9yQztJQUFELHdCQUFDO0NBek9ELEFBeU9DLENBek84QyxFQUFFLENBQUMsU0FBUyxHQXlPMUQ7a0JBek9vQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgRElSRUNUSU9OID0gY2MuRW51bSh7XG4gICAgSE9SSVpPTlRBTDogMSxcbiAgICBWRVJUSUNBTDogMixcbn0pO1xuQGNjY2xhc3NcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVmlld0NvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IERJUkVDVElPTiB9KVxuICAgIGRpcmVjdGlvbiA9IERJUkVDVElPTi5WRVJUSUNBTDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuUHJlZmFiID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbU5vZGVUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsXG4gICAgQHByb3BlcnR5XG4gICAgaXRlbUhlaWdodCA9IDgwO1xuICAgIEBwcm9wZXJ0eVxuICAgIGl0ZW1XaWR0aCA9IDgwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHNwYWNpbmcgPSA1IC8vIHNwYWNlIGJldHdlZW4gZWFjaCBpdGVtXG5cbiAgICB0b3RhbENvdW50ID0gMCAvLyBob3cgbWFueSBpdGVtcyB3ZSBuZWVkIGZvciB0aGUgd2hvbGUgbGlzdFxuICAgIEBwcm9wZXJ0eVxuICAgIGluaXRDb3VudCA9IDIwO1xuICAgIEBwcm9wZXJ0eVxuICAgIGJ1ZmZlclpvbmUgPSA1MDAgLy8gd2hlbiBpdGVtIGlzIGF3YXkgZnJvbSBidWZmZXJab25lLCB3ZSByZWxvY2F0ZSBpdFxuXG4gICAgQHByb3BlcnR5XG4gICAgaXNMYXp5SW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaXRlbXMgPSBbXVxuICAgIHVwZGF0ZVRpbWVyID0gMFxuICAgIHVwZGF0ZUludGVydmFsID0gMC4wNVxuICAgIGxhc3RDb250ZW50UG9zWSA9IDBcbiAgICBsYXN0Q29udGVudFBvc1ggPSAwXG4gICAgaW5pdEhlaWdodCA9IDA7XG5cbiAgICBsaXN0SXRlbVJlbW92ZSA9IFtdXG4gICAgaWRLZXlzID0gW11cblxuICAgIHVwZGF0ZUNhbGxiYWNrID0gbnVsbFxuICAgIHNldERhdGFDYiA9IG51bGw7XG4gICAgbGlzdEl0ZW1EYXRhID0gW11cblxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gRElSRUNUSU9OLkhPUklaT05UQUwpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW5pdENvdW50ID0gTWF0aC5mbG9vcigodGhpcy5zY3JvbGxWaWV3Lm5vZGUud2lkdGggKyB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aCAvIDIpICogKGNjLndpblNpemUud2lkdGggLyAxNTYwKSAvIHRoaXMuaXRlbVdpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdENvdW50ID0gTWF0aC5mbG9vcih0aGlzLmluaXRDb3VudCAqIChjYy53aW5TaXplLndpZHRoIC8gMTU2MCkpO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIGlmICh0aGlzLml0ZW1Ob2RlVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbUhlaWdodCA9IHRoaXMuaXRlbU5vZGVUZW1wbGF0ZS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuaXRlbU5vZGVUZW1wbGF0ZS53aWR0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICBcbiAgICB9XG5cbiAgICBzZXREYXRhTGlzdChfdXBkYXRlQ2FsbGJhY2ssIF9saXN0SXRlbURhdGEpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhQ2IgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGFMaXN0KF91cGRhdGVDYWxsYmFjaywgX2xpc3RJdGVtRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFjayA9IF91cGRhdGVDYWxsYmFja1xuICAgICAgICB0aGlzLmxpc3RJdGVtRGF0YSA9IF9saXN0SXRlbURhdGFcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdGhpcy5saXN0SXRlbURhdGEubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gRElSRUNUSU9OLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5oZWlnaHQgPSB0aGlzLnRvdGFsQ291bnQgKiAodGhpcy5pdGVtSGVpZ2h0ICsgdGhpcy5zcGFjaW5nKSArIHRoaXMuc3BhY2luZzsgLy8gZ2V0IHRvdGFsIGNvbnRlbnQgaGVpZ2h0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC53aWR0aCA9IHRoaXMudG90YWxDb3VudCAqICh0aGlzLml0ZW1XaWR0aCArIHRoaXMuc3BhY2luZykgKyB0aGlzLnNwYWNpbmc7IC8vIGdldCB0b3RhbCBjb250ZW50IGhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCA9PT0gMCB8fCB0aGlzLnRvdGFsQ291bnQgPD0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnRvdGFsQ291bnQ7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SXRlbVJlbW92ZS5wdXNoKHRoaXMuaXRlbXNbaV0pXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5wYXJlbnQgPSBudWxsXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJdGVtUmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5saXN0SXRlbVJlbW92ZVtpXSlcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RJdGVtUmVtb3ZlW2ldLnBhcmVudCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50O1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1SZW1vdmUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gRElSRUNUSU9OLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnNldFBvc2l0aW9uKDAsIC10aGlzLml0ZW1zW2ldLmhlaWdodCAqICgwLjUgKyBpKSAtIHRoaXMuc3BhY2luZyAqIChpICsgMSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uaXRlbUlEID0gaTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGRhdGVDYWxsYmFjayAhPT0gbnVsbCAmJiBpIDwgdGhpcy5saXN0SXRlbURhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1EYXRhW2ldWydpbmRleCddID0gaTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFjayh0aGlzLml0ZW1zW2ldLCB0aGlzLmxpc3RJdGVtRGF0YVtpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnNldFBvc2l0aW9uKHRoaXMuaXRlbXNbaV0ud2lkdGggKiAoMC41ICsgaSkgKyB0aGlzLnNwYWNpbmcgKiAoaSArIDEpLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLml0ZW1JRCA9IGk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBkYXRlQ2FsbGJhY2sgIT09IG51bGwgJiYgdGhpcy5saXN0SXRlbURhdGFbaV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrKHRoaXMuaXRlbXNbaV0sIHRoaXMubGlzdEl0ZW1EYXRhW2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHVwZGF0ZURhdGFMaXN0KF9saXN0SXRlbURhdGEpIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbURhdGEgPSBfbGlzdEl0ZW1EYXRhO1xuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLmxpc3RJdGVtRGF0YS5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBESVJFQ1RJT04uVkVSVElDQUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmhlaWdodCA9IHRoaXMudG90YWxDb3VudCAqICh0aGlzLml0ZW1IZWlnaHQgKyB0aGlzLnNwYWNpbmcpICsgdGhpcy5zcGFjaW5nOyAvLyBnZXQgdG90YWwgY29udGVudCBoZWlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LndpZHRoID0gdGhpcy50b3RhbENvdW50ICogKHRoaXMuaXRlbVdpZHRoICsgdGhpcy5zcGFjaW5nKSArIHRoaXMuc3BhY2luZzsgLy8gZ2V0IHRvdGFsIGNvbnRlbnQgaGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IERJUkVDVElPTi5WRVJUSUNBTCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0ID0gdGhpcy50b3RhbENvdW50ICogKHRoaXMuaXRlbUhlaWdodCArIHRoaXMuc3BhY2luZykgKyB0aGlzLnNwYWNpbmc7IC8vIGdldCB0b3RhbCBjb250ZW50IGhlaWdodFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGggPSB0aGlzLnRvdGFsQ291bnQgKiAodGhpcy5pdGVtV2lkdGggKyB0aGlzLnNwYWNpbmcpICsgdGhpcy5zcGFjaW5nOyAvLyBnZXQgdG90YWwgY29udGVudCBoZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbml0Q291bnQ7ICsraSkgeyAvLyBzcGF3biBpdGVtcywgd2Ugb25seSBuZWVkIHRvIGRvIHRoaXMgb25jZVxuICAgICAgICAgICAgbGV0IGl0ZW07XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLml0ZW1UZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1Ob2RlVGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuY2hpbGRyZW5baV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtTm9kZVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IERJUkVDVElPTi5WRVJUSUNBTCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24oMCwgLWl0ZW0uaGVpZ2h0ICogKDAuNSArIGkpIC0gdGhpcy5zcGFjaW5nICogKGkgKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24oaXRlbS53aWR0aCAqICgwLjUgKyBpKSArIHRoaXMuc3BhY2luZyAqIChpICsgMSksIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVsnaXRlbUlEJ10gPSBpO1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxpc3RJdGVtRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGFDYigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb25JblZpZXcoaXRlbSkgeyAvLyBnZXQgaXRlbSBwb3NpdGlvbiBpbiBzY3JvbGx2aWV3J3Mgbm9kZSBzcGFjZVxuICAgICAgICBsZXQgd29ybGRQb3MgPSBpdGVtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaXRlbS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgbGV0IHZpZXdQb3MgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgIHJldHVybiB2aWV3UG9zO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdEl0ZW1EYXRhLmxlbmd0aCA8PSB0aGlzLmluaXRDb3VudCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVRpbWVyIDwgdGhpcy51cGRhdGVJbnRlcnZhbCkgcmV0dXJuOyAvLyB3ZSBkb24ndCBuZWVkIHRvIGRvIHRoZSBtYXRoIGV2ZXJ5IGZyYW1lXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgPSAwO1xuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBsZXQgYnVmZmVyID0gdGhpcy5idWZmZXJab25lO1xuICAgICAgICBsZXQgaXNEb3duID0gZmFsc2U7XG4gICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBESVJFQ1RJT04uVkVSVElDQUwpIHtcbiAgICAgICAgICAgIGlzRG93biA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkgPCB0aGlzLmxhc3RDb250ZW50UG9zWTsgLy8gc2Nyb2xsaW5nIGRpcmVjdGlvblxuICAgICAgICAgICAgb2Zmc2V0ID0gKHRoaXMuaXRlbUhlaWdodCArIHRoaXMuc3BhY2luZykgKiBpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzRG93biA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnggPiB0aGlzLmxhc3RDb250ZW50UG9zWDsgLy8gc2Nyb2xsaW5nIGRpcmVjdGlvblxuICAgICAgICAgICAgb2Zmc2V0ID0gKHRoaXMuaXRlbVdpZHRoICsgdGhpcy5zcGFjaW5nKSAqIGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgdmlld1BvcyA9IHRoaXMuZ2V0UG9zaXRpb25JblZpZXcoaXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBESVJFQ1RJT04uVkVSVElDQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueSA8IC1idWZmZXIgJiYgaXRlbXNbaV0ueSArIG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnkgPSBpdGVtc1tpXS55ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW1zW2ldLml0ZW1JRCAtIGl0ZW1zLmxlbmd0aDsgLy8gdXBkYXRlIGl0ZW0gaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLml0ZW1JRCA9IGl0ZW1JZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZUNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFjayhpdGVtc1tpXSwgdGhpcy5saXN0SXRlbURhdGFbaXRlbUlkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnggPiBidWZmZXIgJiYgaXRlbXNbaV0ueCAtIG9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnggPSBpdGVtc1tpXS54IC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW1zW2ldLml0ZW1JRCAtIGl0ZW1zLmxlbmd0aDsgLy8gdXBkYXRlIGl0ZW0gaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLml0ZW1JRCA9IGl0ZW1JZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZUNhbGxiYWNrICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2soaXRlbXNbaV0sIHRoaXMubGlzdEl0ZW1EYXRhW2l0ZW1JZF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgYXdheSBmcm9tIGJ1ZmZlciB6b25lIGFuZCBub3QgcmVhY2hpbmcgdG9wIG9mIGNvbnRlbnRcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBhd2F5IGZyb20gYnVmZmVyIHpvbmUgYW5kIG5vdCByZWFjaGluZyBib3R0b20gb2YgY29udGVudFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgPiBidWZmZXIgJiYgaXRlbXNbaV0ueSAtIG9mZnNldCA+IC10aGlzLnNjcm9sbFZpZXcuY29udGVudC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnkgPSBpdGVtc1tpXS55IC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW1zW2ldLml0ZW1JRCArIGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLml0ZW1JRCA9IGl0ZW1JZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZUNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFjayhpdGVtc1tpXSwgdGhpcy5saXN0SXRlbURhdGFbaXRlbUlkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueCA8IC1idWZmZXIgJiYgaXRlbXNbaV0ueCArIG9mZnNldCA8IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS54ID0gaXRlbXNbaV0ueCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSWQgPSBpdGVtc1tpXS5pdGVtSUQgKyBpdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5pdGVtSUQgPSBpdGVtSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51cGRhdGVDYWxsYmFjayAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrKGl0ZW1zW2ldLCB0aGlzLmxpc3RJdGVtRGF0YVtpdGVtSWRdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIGxhc3RDb250ZW50UG9zWVxuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50Lnk7XG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NYID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueDtcbiAgICB9XG4gICAgc2V0U3RhdGVJdGVtKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gc3RhdGU7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19