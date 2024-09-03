
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/Add-on/DropDown/Script/DropDown.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcQWRkLW9uXFxEcm9wRG93blxcU2NyaXB0XFxEcm9wRG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsK0NBQTBDO0FBRXBDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc1BDO1FBcFBTLGNBQVEsR0FBWSxTQUFTLENBQUM7UUFFOUIsa0JBQVksR0FBYSxTQUFTLENBQUM7UUFFbkMsbUJBQWEsR0FBYyxTQUFTLENBQUM7UUFFckMsZUFBUyxHQUFhLFNBQVMsQ0FBQztRQUVoQyxnQkFBVSxHQUFjLFNBQVMsQ0FBQztRQUdsQyxpQkFBVyxHQUF5QixFQUFFLENBQUM7UUFHdkMsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsV0FBSyxHQUFtQixFQUFFLENBQUM7UUFDMUIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV6QixvQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDOztJQWtPdEMsQ0FBQztJQWpPRSxzQkFBVyxtQ0FBYTthQUF4QjtZQUNLLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO2FBQ0YsVUFBeUIsS0FBYTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQU1NLGlDQUFjLEdBQXJCLFVBQXNCLFdBQWlDO1FBQXZELGlCQUtDO1FBSkcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ25DLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLG1DQUFnQixHQUF2QjtRQUNJLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFlLHNCQUFZLENBQUMsQ0FBQztRQUNyRixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFaEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLEtBQUksSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3RELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxJQUFJLEdBQWtCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEcsSUFBRyxDQUFDLElBQUksRUFBQztnQkFDTCxTQUFTO2FBQ1o7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekQsK0JBQStCO1lBQy9CLHdDQUF3QztZQUN4QyxJQUFJO1NBQ1A7UUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFakMsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUN4RSxDQUFDO0lBRUssMEJBQU8sR0FBZCxVQUFlLElBQXdCLEVBQUUsUUFBaUIsRUFBRSxZQUEwQixFQUFFLGFBQTZCO1FBQ2hILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUMsWUFBWSxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUUsQ0FBQztRQUN0RixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDakM7UUFDRCxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3pDO1FBQ0QsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBQztZQUMzQixJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRVcsNkNBQTBCLEdBQXZDLFVBQXdDLEtBQWE7Ozs7Z0JBRWhELHdDQUF3QztnQkFDeEMsY0FBYztnQkFDZCxLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQ3BEO29CQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTO3dCQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkM7Z0JBQ0QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUztvQkFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Ozs7S0FDOUI7SUFFSyw4QkFBVyxHQUFsQixVQUFtQixJQUFJO0lBRXRCLENBQUM7SUFFRCxnQkFBZ0I7SUFDVixnQ0FBYSxHQUFwQjtRQUNLLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUpBQXVKLENBQUMsQ0FBQztZQUNsSyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxVQUFVLEdBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBWSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTztRQUNQLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0hBQXNILENBQUMsQ0FBQztTQUNwSTthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZGLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0dBQWdHLENBQUMsQ0FBQztTQUM5RzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pGLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUdBQWlHLENBQUMsQ0FBQztTQUMvRztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUN2QjtZQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBZSxzQkFBWSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxZQUFZO0lBQ04sb0NBQWlCLEdBQXhCO1FBQ0ssSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDNUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ2pCLElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUM7Z0JBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDaEQ7aUJBQUk7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ2pDO1NBQ0o7UUFDRCxJQUFHLElBQUksQ0FBQyxhQUFhLEVBQUM7WUFDbEIsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNsRDtpQkFBSTtnQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7YUFDOUM7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUM7U0FDNUU7SUFDTCxDQUFDO0lBRVMscUNBQWtCLEdBQTVCLFVBQTZCLFFBQWlCO1FBQzFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRVMsc0NBQW1CLEdBQTdCLFVBQThCLFlBQXFCO1FBQy9DLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRVMsNkJBQVUsR0FBcEIsVUFBcUIsWUFBMEI7UUFDM0MsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFlLHNCQUFZLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsaUJBQWlCO0lBQ1gsaUNBQWMsR0FBckIsVUFBc0IsTUFBaUI7UUFDbEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQ3hDO1lBQ0ksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQ3JDO2dCQUNJLDhDQUE4QztnQkFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixNQUFNO2FBQ1Q7U0FDSjtRQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQ3hCO1lBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLFFBQVE7UUFFaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUdLLDBCQUFPLEdBQWQ7UUFDSyxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNaLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO2FBQUk7WUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUssd0JBQUssR0FBWixVQUFhLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUMvQyxJQUFHLEtBQUssR0FBRyxHQUFHO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDM0IsSUFBRyxLQUFLLEdBQUcsR0FBRztZQUFFLE9BQU8sR0FBRyxDQUFDO1FBQzNCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFuUEY7UUFERSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDa0I7SUFFckM7UUFERSxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDc0I7SUFFMUM7UUFERSxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDdUI7SUFFNUM7UUFERSxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDbUI7SUFFdkM7UUFERSxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDb0I7SUFHekM7UUFERSxRQUFRLENBQUMsQ0FBQyw0QkFBa0IsQ0FBQyxDQUFDO2lEQUNjO0lBYjVCLFFBQVE7UUFENUIsT0FBTyxFQUFFO09BQ1csUUFBUSxDQXNQNUI7SUFBRCxlQUFDO0NBdFBELEFBc1BDLENBdFBxQyxFQUFFLENBQUMsU0FBUyxHQXNQakQ7a0JBdFBvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyb3BEb3duT3B0aW9uRGF0YSBmcm9tIFwiLi9Ecm9wRG93bk9wdGlvbkRhdGFcIjtcbmltcG9ydCBEcm9wRG93bkl0ZW0gZnJvbSBcIi4vRHJvcERvd25JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3BEb3duIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIHB1YmxpYyB0ZW1wbGF0ZTogY2MuTm9kZSA9IHVuZGVmaW5lZDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICBwdWJsaWMgbGFiZWxDYXB0aW9uOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgcHVibGljIHNwcml0ZUNhcHRpb246IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICBwdWJsaWMgbGFiZWxJdGVtOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgcHVibGljIHNwcml0ZUl0ZW06IGNjLlNwcml0ZSA9IHVuZGVmaW5lZDtcblxuICAgIEBwcm9wZXJ0eShbRHJvcERvd25PcHRpb25EYXRhXSlcbiAgIHB1YmxpYyBvcHRpb25EYXRhczogRHJvcERvd25PcHRpb25EYXRhW10gPSBbXTtcbiAgICBcbiAgIHB1YmxpYyBfZHJvcERvd246IGNjLk5vZGU7XG4gICBwdWJsaWMgdmFsaWRUZW1wbGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGl0ZW1zOiBEcm9wRG93bkl0ZW1bXSA9IFtdO1xuICAgIHB1YmxpYyBpc1Nob3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgcHVibGljIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgPcKgLTE7XG4gICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICBwdWJsaWMgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoU2hvd25WYWx1ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRPcHRpb25EYXRhcyhvcHRpb25EYXRhczogRHJvcERvd25PcHRpb25EYXRhW10pIHtcbiAgICAgICAgb3B0aW9uRGF0YXMgJiYgb3B0aW9uRGF0YXMuZm9yRWFjaChkYXRhPT57XG4gICAgICAgICAgICB0aGlzLm9wdGlvbkRhdGFzLnB1c2goZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZnJlc2hTaG93blZhbHVlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyT3B0aW9uRGF0YXMoKXtcbiAgICAgICAgY2MuanMuY2xlYXIodGhpcy5vcHRpb25EYXRhcyk7XG4gICAgICAgIHRoaXMub3B0aW9uRGF0YXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoU2hvd25WYWx1ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWRUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRVcFRlbXBsYXRlKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRUZW1wbGF0ZSkgeyByZXR1cm47IH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fZHJvcERvd24gPSB0aGlzLmNyZWF0ZURyb3BEb3duTGlzdCh0aGlzLnRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5fZHJvcERvd24ubmFtZSA9IFwiRHJvcERvd24gTGlzdFwiO1xuICAgICAgICB0aGlzLl9kcm9wRG93bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9kcm9wRG93bi5zZXRQYXJlbnQodGhpcy50ZW1wbGF0ZS5wYXJlbnQpO1xuXG4gICAgICAgIGxldCBpdGVtVGVtcGxhdGUgPSB0aGlzLl9kcm9wRG93bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuPERyb3BEb3duSXRlbT4oRHJvcERvd25JdGVtKTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBpdGVtVGVtcGxhdGUubm9kZS5wYXJlbnQ7XG4gICAgICAgIGl0ZW1UZW1wbGF0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgY2MuanMuY2xlYXIodGhpcy5pdGVtcyk7XG4gICAgICAgIGZvcihsZXQgaSA9MCwgbGVuID0gdGhpcy5vcHRpb25EYXRhcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMub3B0aW9uRGF0YXNbaV07XG4gICAgICAgICAgICBsZXQgaXRlbSA6IERyb3BEb3duSXRlbSA9IHRoaXMuYWRkSXRlbShkYXRhLCBpID09IHRoaXMuc2VsZWN0ZWRJbmRleCwgaXRlbVRlbXBsYXRlLCB0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgIGlmKCFpdGVtKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0udG9nZ2xlLmlzQ2hlY2tlZCA9IGkgPT0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgaXRlbS50b2dnbGUubm9kZS5vbihcInRvZ2dsZVwiLCB0aGlzLm9uU2VsZWN0ZWRJdGVtLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIGlmKGkgPT0gdGhpcy5zZWxlY3RlZEluZGV4KXtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm9uU2VsZWN0ZWRJdGVtKGl0ZW0udG9nZ2xlKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtVGVtcGxhdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBjb250ZW50LmhlaWdodCA9IGl0ZW1UZW1wbGF0ZS5ub2RlLmhlaWdodCAqIHRoaXMub3B0aW9uRGF0YXMubGVuZ3RoO1xuICAgIH1cblxuICAgcHVibGljIGFkZEl0ZW0oZGF0YTogRHJvcERvd25PcHRpb25EYXRhLCBzZWxlY3RlZDogYm9vbGVhbiwgaXRlbVRlbXBsYXRlOiBEcm9wRG93bkl0ZW0sIGRyb3BEb3duSXRlbXM6IERyb3BEb3duSXRlbVtdKTogRHJvcERvd25JdGVte1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuY3JlYXRlSXRlbShpdGVtVGVtcGxhdGUpO1xuICAgICAgICBpdGVtLm5vZGUuc2V0UGFyZW50KGl0ZW1UZW1wbGF0ZS5ub2RlLnBhcmVudCk7XG4gICAgICAgIGl0ZW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpdGVtLm5vZGUubmFtZSA9IGBpdGVtXyR7dGhpcy5pdGVtcy5sZW5ndGggKyBkYXRhLm9wdGlvblN0cmluZz9kYXRhLm9wdGlvblN0cmluZzpcIlwifWA7XG4gICAgICAgIGlmKGl0ZW0udG9nZ2xlKXtcbiAgICAgICAgICAgIGl0ZW0udG9nZ2xlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICBpZihpdGVtLmxhYmVsKXtcbiAgICAgICAgICAgIGl0ZW0ubGFiZWwuc3RyaW5nID0gZGF0YS5vcHRpb25TdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXRlbS5zcHJpdGUpe1xuICAgICAgICAgICAgaXRlbS5zcHJpdGUuc3ByaXRlRnJhbWUgPSBkYXRhLm9wdGlvblNmO1xuICAgICAgICAgICAgaXRlbS5zcHJpdGUuZW5hYmxlZCA9IGRhdGEub3B0aW9uU2YgIT0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMuX2Ryb3BEb3duICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmRlbGF5ZWREZXN0cm95RHJvcGRvd25MaXN0KDAuMTUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICBwdWJsaWMgYXN5bmMgZGVsYXllZERlc3Ryb3lEcm9wZG93bkxpc3QoZGVsYXk6IG51bWJlcilcbiAgICB7XG4gICAgICAgIC8vIGF3YWl0IFdhaXRVdGlsLndhaXRGb3JTZWNvbmRzKGRlbGF5KTtcbiAgICAgICAgLy8gd2FpdCBkZWxheTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbj0gdGhpcy5pdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUl0ZW0odGhpcy5pdGVtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgY2MuanMuY2xlYXIodGhpcy5pdGVtcyk7XG4gICAgICAgIGlmICh0aGlzLl9kcm9wRG93biAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lEcm9wRG93bkxpc3QodGhpcy5fZHJvcERvd24pO1xuICAgICAgICB0aGlzLl9kcm9wRG93biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgIHB1YmxpYyBkZXN0cm95SXRlbShpdGVtKXtcblxuICAgIH1cblxuICAgIC8vIOiuvue9ruaooeadv++8jOaWueS+v+WQjumdoml0ZW1cbiAgIHB1YmxpYyBzZXRVcFRlbXBsYXRlKCkge1xuICAgICAgICB0aGlzLnZhbGlkVGVtcGxhdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiVGhlIGRyb3Bkb3duIHRlbXBsYXRlIGlzIG5vdCBhc3NpZ25lZC4gVGhlIHRlbXBsYXRlIG5lZWRzIHRvIGJlIGFzc2lnbmVkIGFuZCBtdXN0IGhhdmUgYSBjaGlsZCBHYW1lT2JqZWN0IHdpdGggYSBUb2dnbGUgY29tcG9uZW50IHNlcnZpbmcgYXMgdGhlIGl0ZW1cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZW1wbGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgaXRlbVRvZ2dsZTogY2MuVG9nZ2xlID0gdGhpcy50ZW1wbGF0ZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuPGNjLlRvZ2dsZT4oY2MuVG9nZ2xlKTtcbiAgICAgICAgdGhpcy52YWxpZFRlbXBsYXRlID0gdHJ1ZTtcbiAgICAgICAgLy8g5LiA5Lqb5Yik5patXG4gICAgICAgIGlmICghaXRlbVRvZ2dsZSB8fCBpdGVtVG9nZ2xlLm5vZGUgPT0gdGhpcy50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy52YWxpZFRlbXBsYXRlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5lcnJvcihcIlRoZSBkcm9wZG93biB0ZW1wbGF0ZSBpcyBub3QgdmFsaWQuIFRoZSB0ZW1wbGF0ZSBtdXN0IGhhdmUgYSBjaGlsZCBOb2RlIHdpdGggYSBUb2dnbGUgY29tcG9uZW50IHNlcnZpbmcgYXMgdGhlIGl0ZW0uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFiZWxJdGVtICE9IHVuZGVmaW5lZCAmJiAhdGhpcy5sYWJlbEl0ZW0ubm9kZS5pc0NoaWxkT2YoaXRlbVRvZ2dsZS5ub2RlKSkge1xuICAgICAgICAgICAgdGhpcy52YWxpZFRlbXBsYXRlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5lcnJvcihcIlRoZSBkcm9wZG93biB0ZW1wbGF0ZSBpcyBub3QgdmFsaWQuIFRoZSBJdGVtIExhYmVsIG11c3QgYmUgb24gdGhlIGl0ZW0gTm9kZSBvciBjaGlsZHJlbiBvZiBpdC5cIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcHJpdGVJdGVtICE9IHVuZGVmaW5lZCAmJiAhdGhpcy5zcHJpdGVJdGVtLm5vZGUuaXNDaGlsZE9mKGl0ZW1Ub2dnbGUubm9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRUZW1wbGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJUaGUgZHJvcGRvd24gdGVtcGxhdGUgaXMgbm90IHZhbGlkLiBUaGUgSXRlbSBTcHJpdGUgbXVzdCBiZSBvbiB0aGUgaXRlbSBOb2RlIG9yIGNoaWxkcmVuIG9mIGl0LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy52YWxpZFRlbXBsYXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVtID0gaXRlbVRvZ2dsZS5ub2RlLmFkZENvbXBvbmVudDxEcm9wRG93bkl0ZW0+KERyb3BEb3duSXRlbSk7XG4gICAgICAgIGl0ZW0ubGFiZWwgPSB0aGlzLmxhYmVsSXRlbTtcbiAgICAgICAgaXRlbS5zcHJpdGUgPSB0aGlzLnNwcml0ZUl0ZW07XG4gICAgICAgIGl0ZW0udG9nZ2xlID0gaXRlbVRvZ2dsZTtcbiAgICAgICAgaXRlbS5ub2RlID0gaXRlbVRvZ2dsZS5ub2RlO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmFsaWRUZW1wbGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8g5Yi35paw5pi+56S655qE6YCJ5Lit5L+h5oGvXG4gICBwdWJsaWMgcmVmcmVzaFNob3duVmFsdWUoKXtcbiAgICAgICAgaWYodGhpcy5vcHRpb25EYXRhcy5sZW5ndGggPD0gMCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLm9wdGlvbkRhdGFzW3RoaXMuY2xhbXAodGhpcy5zZWxlY3RlZEluZGV4LCAwLCB0aGlzLm9wdGlvbkRhdGFzLmxlbmd0aCAtMSldO1xuICAgICAgICBpZih0aGlzLmxhYmVsQ2FwdGlvbil7XG4gICAgICAgICAgICBpZihkYXRhICYmIGRhdGEub3B0aW9uU3RyaW5nKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsQ2FwdGlvbi5zdHJpbmcgPSBkYXRhLm9wdGlvblN0cmluZztcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxDYXB0aW9uLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zcHJpdGVDYXB0aW9uKXtcbiAgICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5vcHRpb25TZil7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVDYXB0aW9uLnNwcml0ZUZyYW1lID0gZGF0YS5vcHRpb25TZjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlQ2FwdGlvbi5zcHJpdGVGcmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQ2FwdGlvbi5lbmFibGVkID0gdGhpcy5zcHJpdGVDYXB0aW9uLnNwcml0ZUZyYW1lICE9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVEcm9wRG93bkxpc3QodGVtcGxhdGU6IGNjLk5vZGUpOiAgY2MuTm9kZSB7XG4gICAgICAgIHJldHVybiBjYy5pbnN0YW50aWF0ZSh0ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRlc3Ryb3lEcm9wRG93bkxpc3QoZHJvcERvd25MaXN0OiBjYy5Ob2RlKXtcbiAgICAgICAgZHJvcERvd25MaXN0LmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbShpdGVtVGVtcGxhdGU6IERyb3BEb3duSXRlbSk6IERyb3BEb3duSXRlbXtcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZShpdGVtVGVtcGxhdGUubm9kZSk7XG4gICAgICAgIHJldHVybiBuZXdJdGVtLmdldENvbXBvbmVudDxEcm9wRG93bkl0ZW0+KERyb3BEb3duSXRlbSk7XG4gICAgfVxuXG4gICAgLyoqIOW9k3RvZ2dsZeiiq+mAieS4rSAqL1xuICAgcHVibGljIG9uU2VsZWN0ZWRJdGVtKHRvZ2dsZTogY2MuVG9nZ2xlKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0b2dnbGUubm9kZS5wYXJlbnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDxwYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuY2hpbGRyZW5baV0gPT0gdG9nZ2xlLm5vZGUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdWJ0cmFjdCBvbmUgdG8gYWNjb3VudCBmb3IgdGVtcGxhdGUgY2hpbGQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICBpZih0aGlzLmNhbGxiYWNrICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soIHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICBwdWJsaWMgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuICAgIHNldENhbGxCYWNrKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuXG4gICBwdWJsaWMgb25DbGljaygpIHtcbiAgICAgICAgaWYoIXRoaXMuaXNTaG93KXtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKXtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoU2hvd25WYWx1ZSgpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oXCJ0b3VjaGVuZFwiLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcInRvdWNoZW5kXCIsIHRoaXMub25DbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICBwdWJsaWMgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVye1xuICAgICAgICBpZih2YWx1ZSA8IG1pbikgcmV0dXJuIG1pbjtcbiAgICAgICAgaWYodmFsdWUgPiBtYXgpIHJldHVybiBtYXg7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG4iXX0=