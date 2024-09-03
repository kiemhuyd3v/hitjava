"use strict";
cc._RF.push(module, '4c73768DrRIEpBrhG+kF/zC', 'DropDown');
// Loading/Add-on/DropDown/Script/DropDown.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DropDownOptionData_1 = require("./DropDownOptionData");
var DropDownItem_1 = require("./DropDownItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DropDown = /** @class */ (function (_super) {
    __extends(DropDown, _super);
    function DropDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.template = undefined;
        _this.labelCaption = undefined;
        _this.spriteCaption = undefined;
        _this.labelItem = undefined;
        _this.spriteItem = undefined;
        _this.optionDatas = [];
        _this.validTemplate = false;
        _this.items = [];
        _this.isShow = false;
        _this._selectedIndex = -1;
        return _this;
    }
    Object.defineProperty(DropDown.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this._selectedIndex = value;
            this.refreshShownValue();
        },
        enumerable: false,
        configurable: true
    });
    DropDown.prototype.addOptionDatas = function (optionDatas) {
        var _this = this;
        optionDatas && optionDatas.forEach(function (data) {
            _this.optionDatas.push(data);
        });
        this.refreshShownValue();
    };
    DropDown.prototype.clearOptionDatas = function () {
        cc.js.clear(this.optionDatas);
        this.optionDatas = new Array();
        this.refreshShownValue();
    };
    DropDown.prototype.show = function () {
        if (!this.validTemplate) {
            this.setUpTemplate();
            if (!this.validTemplate) {
                return;
            }
        }
        this.isShow = true;
        this._dropDown = this.createDropDownList(this.template);
        this._dropDown.name = "DropDown List";
        this._dropDown.active = true;
        this._dropDown.setParent(this.template.parent);
        var itemTemplate = this._dropDown.getComponentInChildren(DropDownItem_1.default);
        var content = itemTemplate.node.parent;
        itemTemplate.node.active = true;
        cc.js.clear(this.items);
        for (var i = 0, len = this.optionDatas.length; i < len; i++) {
            var data = this.optionDatas[i];
            var item = this.addItem(data, i == this.selectedIndex, itemTemplate, this.items);
            if (!item) {
                continue;
            }
            item.toggle.isChecked = i == this.selectedIndex;
            item.toggle.node.on("toggle", this.onSelectedItem, this);
            // if(i == this.selectedIndex){
            //     this.onSelectedItem(item.toggle);
            // }
        }
        itemTemplate.node.active = false;
        content.height = itemTemplate.node.height * this.optionDatas.length;
    };
    DropDown.prototype.addItem = function (data, selected, itemTemplate, dropDownItems) {
        var item = this.createItem(itemTemplate);
        item.node.setParent(itemTemplate.node.parent);
        item.node.active = true;
        item.node.name = "item_" + (this.items.length + data.optionString ? data.optionString : "");
        if (item.toggle) {
            item.toggle.isChecked = false;
        }
        if (item.label) {
            item.label.string = data.optionString;
        }
        if (item.sprite) {
            item.sprite.spriteFrame = data.optionSf;
            item.sprite.enabled = data.optionSf != undefined;
        }
        this.items.push(item);
        return item;
    };
    DropDown.prototype.hide = function () {
        this.isShow = false;
        if (this._dropDown != undefined) {
            this.delayedDestroyDropdownList(0.15);
        }
    };
    DropDown.prototype.delayedDestroyDropdownList = function (delay) {
        return __awaiter(this, void 0, void 0, function () {
            var i, len;
            return __generator(this, function (_a) {
                // await WaitUtil.waitForSeconds(delay);
                // wait delay;
                for (i = 0, len = this.items.length; i < len; i++) {
                    if (this.items[i] != undefined)
                        this.destroyItem(this.items[i]);
                }
                cc.js.clear(this.items);
                if (this._dropDown != undefined)
                    this.destroyDropDownList(this._dropDown);
                this._dropDown = undefined;
                return [2 /*return*/];
            });
        });
    };
    DropDown.prototype.destroyItem = function (item) {
    };
    // 设置模板，方便后面item
    DropDown.prototype.setUpTemplate = function () {
        this.validTemplate = false;
        if (!this.template) {
            cc.error("The dropdown template is not assigned. The template needs to be assigned and must have a child GameObject with a Toggle component serving as the item");
            return;
        }
        this.template.active = true;
        var itemToggle = this.template.getComponentInChildren(cc.Toggle);
        this.validTemplate = true;
        // 一些判断
        if (!itemToggle || itemToggle.node == this.template) {
            this.validTemplate = false;
            cc.error("The dropdown template is not valid. The template must have a child Node with a Toggle component serving as the item.");
        }
        else if (this.labelItem != undefined && !this.labelItem.node.isChildOf(itemToggle.node)) {
            this.validTemplate = false;
            cc.error("The dropdown template is not valid. The Item Label must be on the item Node or children of it.");
        }
        else if (this.spriteItem != undefined && !this.spriteItem.node.isChildOf(itemToggle.node)) {
            this.validTemplate = false;
            cc.error("The dropdown template is not valid. The Item Sprite must be on the item Node or children of it.");
        }
        if (!this.validTemplate) {
            this.template.active = false;
            return;
        }
        var item = itemToggle.node.addComponent(DropDownItem_1.default);
        item.label = this.labelItem;
        item.sprite = this.spriteItem;
        item.toggle = itemToggle;
        item.node = itemToggle.node;
        this.template.active = false;
        this.validTemplate = true;
    };
    // 刷新显示的选中信息
    DropDown.prototype.refreshShownValue = function () {
        if (this.optionDatas.length <= 0) {
            return;
        }
        var data = this.optionDatas[this.clamp(this.selectedIndex, 0, this.optionDatas.length - 1)];
        if (this.labelCaption) {
            if (data && data.optionString) {
                this.labelCaption.string = data.optionString;
            }
            else {
                this.labelCaption.string = "";
            }
        }
        if (this.spriteCaption) {
            if (data && data.optionSf) {
                this.spriteCaption.spriteFrame = data.optionSf;
            }
            else {
                this.spriteCaption.spriteFrame = undefined;
            }
            this.spriteCaption.enabled = this.spriteCaption.spriteFrame != undefined;
        }
    };
    DropDown.prototype.createDropDownList = function (template) {
        return cc.instantiate(template);
    };
    DropDown.prototype.destroyDropDownList = function (dropDownList) {
        dropDownList.destroy();
    };
    DropDown.prototype.createItem = function (itemTemplate) {
        var newItem = cc.instantiate(itemTemplate.node);
        return newItem.getComponent(DropDownItem_1.default);
    };
    /** 当toggle被选中 */
    DropDown.prototype.onSelectedItem = function (toggle) {
        var parent = toggle.node.parent;
        for (var i = 0; i < parent.childrenCount; i++) {
            if (parent.children[i] == toggle.node) {
                // Subtract one to account for template child.
                this.selectedIndex = i - 1;
                break;
            }
        }
        this.hide();
        if (this.callback != null) {
            this.callback(this.selectedIndex);
        }
    };
    DropDown.prototype.setCallBack = function (callback) {
        this.callback = callback;
    };
    DropDown.prototype.onClick = function () {
        if (!this.isShow) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    DropDown.prototype.start = function () {
        this.template.active = false;
        this.refreshShownValue();
    };
    DropDown.prototype.onEnable = function () {
        this.node.on("touchend", this.onClick, this);
    };
    DropDown.prototype.onDisable = function () {
        this.node.off("touchend", this.onClick, this);
    };
    DropDown.prototype.clamp = function (value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    __decorate([
        property(cc.Node)
    ], DropDown.prototype, "template", void 0);
    __decorate([
        property(cc.Label)
    ], DropDown.prototype, "labelCaption", void 0);
    __decorate([
        property(cc.Sprite)
    ], DropDown.prototype, "spriteCaption", void 0);
    __decorate([
        property(cc.Label)
    ], DropDown.prototype, "labelItem", void 0);
    __decorate([
        property(cc.Sprite)
    ], DropDown.prototype, "spriteItem", void 0);
    __decorate([
        property([DropDownOptionData_1.default])
    ], DropDown.prototype, "optionDatas", void 0);
    DropDown = __decorate([
        ccclass()
    ], DropDown);
    return DropDown;
}(cc.Component));
exports.default = DropDown;

cc._RF.pop();