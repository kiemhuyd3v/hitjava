"use strict";
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