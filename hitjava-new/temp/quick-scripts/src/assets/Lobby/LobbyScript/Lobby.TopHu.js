"use strict";
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