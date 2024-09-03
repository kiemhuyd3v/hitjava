"use strict";
cc._RF.push(module, '7d4743avXxAVLh1hHlur5JL', 'Lobby.PopupTopHu');
// Lobby/LobbyScript/Lobby.PopupTopHu.ts

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
var Global_1 = require("../../Loading/src/Global");
var Lobby_ItemTopHu_1 = require("./Lobby.ItemTopHu");
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var Tween_1 = require("./Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupTopHu = /** @class */ (function (_super) {
    __extends(PopupTopHu, _super);
    function PopupTopHu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrList = null;
        _this.sprIconGame = [];
        _this.sprXHu = [];
        _this.selectedJpValue = 100;
        _this.currentList = [];
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.dataHu = null;
        _this.index = 0;
        _this.listData100 = new Array();
        _this.listData1000 = new Array();
        _this.listData10000 = new Array();
        return _this;
        // update (dt) {}
    }
    PopupTopHu.prototype.setInfo = function () {
        this.dataHu = App_1.default.instance.topHuData;
        this.currentList = [];
        for (var key in this.dataHu) {
            if (key != "caothap") {
                var dataHu = this.dataHu[key];
                var gameName = App_1.default.instance.getGameName(key);
                if (gameName != key) {
                    if (key == "TAI_XIU") {
                        var topHu100 = new Lobby_ItemTopHu_1.Tophudata(key, gameName, dataHu["1"]["pt"], dataHu["0"]["px"]);
                        this.currentList.push(topHu100);
                    }
                    else {
                        var topHu100 = new Lobby_ItemTopHu_1.Tophudata(key, gameName, dataHu["100"]["p"], dataHu["1000"]["p"], dataHu["10000"]["p"], dataHu["100"]["x2"], dataHu['1000']['x2'], dataHu['10000']['x2']);
                        this.currentList.push(topHu100);
                    }
                }
            }
        }
        if (this.selectedJpValue == 100) {
            this.currentList = this.currentList.sort(function (x, y) {
                return x.value100 > y.value100 ? -1 : 1;
            });
        }
        else if (this.selectedJpValue == 1000) {
            this.currentList = this.currentList.sort(function (x, y) {
                return x.value1000 > y.value1000 ? -1 : 1;
            });
        }
        else if (this.selectedJpValue == 10000) {
            this.currentList = this.currentList.sort(function (x, y) {
                return x.value10000 > y.value10000 ? -1 : 1;
            });
        }
        for (var i = 0; i < this.currentList.length; i++) {
            var data = this.currentList[i];
            var item = this.scrList.content.children[i];
            if (!item) {
                item = cc.instantiate(this.scrList.content.children[0]);
                item.parent = this.scrList.content;
            }
            item['data'] = data;
            item.active = true;
            item.getChildByName('sprIcon').getComponent(cc.Sprite).spriteFrame = this.getSprIcon(data['gamename']);
            item.getChildByName("lbGameName").getComponent(cc.Label).string = data['gamename'];
            item.getComponent(cc.Button).clickEvents[0].customEventData = data['gamename'];
            Tween_1.default.numberTo(item.getChildByName('lbJp100').getComponent(cc.Label), data['value100'], 1.0);
            Tween_1.default.numberTo(item.getChildByName('lbJp1K').getComponent(cc.Label), data['value1000'], 1.0);
            Tween_1.default.numberTo(item.getChildByName('lbJp10K').getComponent(cc.Label), data['value10000'], 1.0);
            item.getChildByName('sprX100').active = data['valueX100'] != 0 ? true : false;
            item.getChildByName('sprX1K').active = data['valueX1000'] != 0 ? true : false;
            item.getChildByName('sprX10K').active = data['valueX10000'] != 0 ? true : false;
            item.getChildByName('sprTai').active = item.getChildByName('sprXiu').active = data['gamename'] == 'Tài Xỉu' ? true : false;
        }
    };
    /*name game :
  spartans-Thantai
  BENLEY:bitcoin
  audition:duaxe
  maybach:thethao
  tamhung:chimdien
  chiemtinh:chiemtinh
  RollRoye:Thần bài
  
  */
    PopupTopHu.prototype.getSprIcon = function (gameName) {
        var sprIcon = null;
        switch (gameName) {
            case 'Đua Xe':
                sprIcon = this.sprIconGame[0];
                break;
            case 'Thần Tài':
                sprIcon = this.sprIconGame[1];
                break;
            case 'Xèng':
                sprIcon = this.sprIconGame[2];
                break;
            case 'Bitcoin':
                sprIcon = this.sprIconGame[3];
                break;
            case 'Thể Thao':
                sprIcon = this.sprIconGame[4];
                break;
            case 'Chim Điên':
                sprIcon = this.sprIconGame[5];
                break;
            case 'Chiêm Tinh':
                sprIcon = this.sprIconGame[6];
                break;
            case 'Bikini':
                sprIcon = this.sprIconGame[7];
                break;
            case 'Mini Poker':
                sprIcon = this.sprIconGame[8];
                break;
            case 'Cao Thấp':
                sprIcon = this.sprIconGame[9];
                break;
            case 'Thần Bài':
                sprIcon = this.sprIconGame[10];
                break;
            case 'Gem':
                sprIcon = this.sprIconGame[11];
                break;
            case 'Tài Xỉu':
                sprIcon = this.sprIconGame[12];
                break;
        }
        return sprIcon;
    };
    PopupTopHu.prototype.actChangeAmount = function (event, data) {
        this.selectedJpValue = parseInt(data);
        this.setInfo();
    };
    PopupTopHu.prototype.actGoToGame = function (event, data) {
        var TabMenuGame = cc.find('Center/Tabs', Global_1.Global.LobbyController.node.parent).getComponent("TabMenuGame");
        switch (data) {
            case 'Đua Xe':
                Global_1.Global.LobbyController.actGoToSlot1();
                TabMenuGame.onBtnTabSlot();
                break;
            case 'Thần Tài':
                Global_1.Global.LobbyController.actGoToSlot3();
                TabMenuGame.onBtnTabSlot();
                break;
            case 'Xèng':
                Global_1.Global.LobbyController.actGameSlot3x3();
                TabMenuGame.onBtnTabMini();
                break;
            case 'Bitcoin':
                Global_1.Global.LobbyController.actGoToSlot7();
                TabMenuGame.onBtnTabSlot();
                break;
            case 'Thể Thao':
                Global_1.Global.LobbyController.actGoToSlot10();
                TabMenuGame.onBtnTabSlot();
                break;
            case 'Chim Điên':
                Global_1.Global.LobbyController.actGoToSlot4();
                TabMenuGame.onBtnTabSlot();
                break;
            case 'Chiêm Tinh':
                Global_1.Global.LobbyController.actGoToSlot6();
                TabMenuGame.onBtnTabSlot();
                break;
            case 'Bikini':
                Global_1.Global.LobbyController.actGoToSlot11();
                TabMenuGame.onBtnTabSlot();
                break;
            case 'Mini Poker':
                Global_1.Global.LobbyController.actGameMiniPoker();
                TabMenuGame.onBtnTabMini();
                break;
            case 'Cao Thấp':
                Global_1.Global.LobbyController.actGameCaoThap();
                TabMenuGame.onBtnTabMini();
                break;
            case 'Thần Bài':
                Global_1.Global.LobbyController.actGoToSlot8();
                TabMenuGame.onBtnTabSlot();
                break;
            case 'Gem':
                Global_1.Global.LobbyController.actGameSlot3x3Gem();
                TabMenuGame.onBtnTabMini();
                break;
            case 'Tài Xỉu':
                Global_1.Global.LobbyController.actGameTaiXiu();
                TabMenuGame.onBtnTabMini();
                break;
        }
        this.dismiss();
    };
    __decorate([
        property(cc.ScrollView)
    ], PopupTopHu.prototype, "scrList", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupTopHu.prototype, "sprIconGame", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupTopHu.prototype, "sprXHu", void 0);
    PopupTopHu = __decorate([
        ccclass
    ], PopupTopHu);
    return PopupTopHu;
}(Dialog_1.default));
exports.default = PopupTopHu;

cc._RF.pop();