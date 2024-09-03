
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupTopHu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cFRvcEh1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUNsRCxxREFBOEM7QUFDOUMsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFHcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUFpTUM7UUE5TEcsYUFBTyxHQUFrQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBcUIsRUFBRSxDQUFDO1FBRW5DLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBRzlCLHFCQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHdCQUF3QjtRQUV4QixlQUFlO1FBRWYsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsaUJBQVcsR0FBcUIsSUFBSSxLQUFLLEVBQWEsQ0FBQztRQUN2RCxrQkFBWSxHQUFxQixJQUFJLEtBQUssRUFBYSxDQUFDO1FBQ3hELG1CQUFhLEdBQXFCLElBQUksS0FBSyxFQUFhLENBQUM7O1FBNEt6RCxpQkFBaUI7SUFDckIsQ0FBQztJQTNLRyw0QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUNsQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5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QUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtTQUNiO1FBQ0QsT0FBTyxPQUFPLENBQUE7SUFDbEIsQ0FBQztJQUNELG9DQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFB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IiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0dsb2JhbFwiO1xuaW1wb3J0IHsgVG9waHVkYXRhIH0gZnJvbSBcIi4vTG9iYnkuSXRlbVRvcEh1XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwVG9wSHUgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2NyTGlzdDogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3BySWNvbkdhbWU6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzcHJYSHU6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuXG4gICAgc2VsZWN0ZWRKcFZhbHVlID0gMTAwO1xuICAgIGN1cnJlbnRMaXN0ID0gW107XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIGRhdGFIdSA9IG51bGw7XG4gICAgaW5kZXg6IG51bWJlciA9IDA7XG4gICAgbGlzdERhdGExMDA6IEFycmF5PFRvcGh1ZGF0YT4gPSBuZXcgQXJyYXk8VG9waHVkYXRhPigpO1xuICAgIGxpc3REYXRhMTAwMDogQXJyYXk8VG9waHVkYXRhPiA9IG5ldyBBcnJheTxUb3BodWRhdGE+KCk7XG4gICAgbGlzdERhdGExMDAwMDogQXJyYXk8VG9waHVkYXRhPiA9IG5ldyBBcnJheTxUb3BodWRhdGE+KCk7XG5cbiAgICBzZXRJbmZvKCkge1xuICAgICAgICB0aGlzLmRhdGFIdSA9IEFwcC5pbnN0YW5jZS50b3BIdURhdGE7XG4gICAgICAgIHRoaXMuY3VycmVudExpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuZGF0YUh1KSB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9IFwiY2FvdGhhcFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFIdSA9IHRoaXMuZGF0YUh1W2tleV07XG4gICAgICAgICAgICAgICAgbGV0IGdhbWVOYW1lID0gQXBwLmluc3RhbmNlLmdldEdhbWVOYW1lKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVOYW1lICE9IGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwiVEFJX1hJVVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wSHUxMDAgPSBuZXcgVG9waHVkYXRhKGtleSwgZ2FtZU5hbWUsIGRhdGFIdVtcIjFcIl1bXCJwdFwiXSwgZGF0YUh1W1wiMFwiXVtcInB4XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QucHVzaCh0b3BIdTEwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wSHUxMDAgPSBuZXcgVG9waHVkYXRhKGtleSwgZ2FtZU5hbWUsIGRhdGFIdVtcIjEwMFwiXVtcInBcIl0sIGRhdGFIdVtcIjEwMDBcIl1bXCJwXCJdLCBkYXRhSHVbXCIxMDAwMFwiXVtcInBcIl0sIGRhdGFIdVtcIjEwMFwiXVtcIngyXCJdLCBkYXRhSHVbJzEwMDAnXVsneDInXSwgZGF0YUh1WycxMDAwMCddWyd4MiddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QucHVzaCh0b3BIdTEwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRKcFZhbHVlID09IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IHRoaXMuY3VycmVudExpc3Quc29ydCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlMTAwID4geS52YWx1ZTEwMCA/IC0xIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRKcFZhbHVlID09IDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSB0aGlzLmN1cnJlbnRMaXN0LnNvcnQoKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTEwMDAgPiB5LnZhbHVlMTAwMCA/IC0xIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRKcFZhbHVlID09IDEwMDAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gdGhpcy5jdXJyZW50TGlzdC5zb3J0KCh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWUxMDAwMCA+IHkudmFsdWUxMDAwMCA/IC0xIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmN1cnJlbnRMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnNjckxpc3QuY29udGVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNjckxpc3QuY29udGVudC5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLnNjckxpc3QuY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1bJ2RhdGEnXSA9IGRhdGE7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdzcHJJY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwckljb24oZGF0YVsnZ2FtZW5hbWUnXSk7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJHYW1lTmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGFbJ2dhbWVuYW1lJ107XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzWzBdLmN1c3RvbUV2ZW50RGF0YSA9IGRhdGFbJ2dhbWVuYW1lJ107XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhpdGVtLmdldENoaWxkQnlOYW1lKCdsYkpwMTAwJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSwgZGF0YVsndmFsdWUxMDAnXSwgMS4wKTtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2xiSnAxSycpLmdldENvbXBvbmVudChjYy5MYWJlbCksIGRhdGFbJ3ZhbHVlMTAwMCddLCAxLjApO1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8oaXRlbS5nZXRDaGlsZEJ5TmFtZSgnbGJKcDEwSycpLmdldENvbXBvbmVudChjYy5MYWJlbCksIGRhdGFbJ3ZhbHVlMTAwMDAnXSwgMS4wKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ3NwclgxMDAnKS5hY3RpdmUgPSBkYXRhWyd2YWx1ZVgxMDAnXSAhPSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnc3ByWDFLJykuYWN0aXZlID0gZGF0YVsndmFsdWVYMTAwMCddICE9IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdzcHJYMTBLJykuYWN0aXZlID0gZGF0YVsndmFsdWVYMTAwMDAnXSAhPSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnc3ByVGFpJykuYWN0aXZlID0gaXRlbS5nZXRDaGlsZEJ5TmFtZSgnc3ByWGl1JykuYWN0aXZlID0gZGF0YVsnZ2FtZW5hbWUnXSA9PSAnVMOgaSBY4buJdScgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKm5hbWUgZ2FtZSA6XG4gIHNwYXJ0YW5zLVRoYW50YWlcbiAgQkVOTEVZOmJpdGNvaW5cbiAgYXVkaXRpb246ZHVheGVcbiAgbWF5YmFjaDp0aGV0aGFvXG4gIHRhbWh1bmc6Y2hpbWRpZW5cbiAgY2hpZW10aW5oOmNoaWVtdGluaFxuICBSb2xsUm95ZTpUaOG6p24gYsOgaVxuICBcbiAgKi9cbiAgICBnZXRTcHJJY29uKGdhbWVOYW1lKTogY2MuU3ByaXRlRnJhbWUge1xuICAgICAgICBsZXQgc3BySWNvbjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKGdhbWVOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICfEkHVhIFhlJzpcbiAgICAgICAgICAgICAgICBzcHJJY29uID0gdGhpcy5zcHJJY29uR2FtZVswXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1Ro4bqnbiBUw6BpJzpcbiAgICAgICAgICAgICAgICBzcHJJY29uID0gdGhpcy5zcHJJY29uR2FtZVsxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1jDqG5nJzpcbiAgICAgICAgICAgICAgICBzcHJJY29uID0gdGhpcy5zcHJJY29uR2FtZVsyXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0JpdGNvaW4nOlxuICAgICAgICAgICAgICAgIHNwckljb24gPSB0aGlzLnNwckljb25HYW1lWzNdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVGjhu4MgVGhhbyc6XG4gICAgICAgICAgICAgICAgc3BySWNvbiA9IHRoaXMuc3BySWNvbkdhbWVbNF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDaGltIMSQacOqbic6XG4gICAgICAgICAgICAgICAgc3BySWNvbiA9IHRoaXMuc3BySWNvbkdhbWVbNV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDaGnDqm0gVGluaCc6XG4gICAgICAgICAgICAgICAgc3BySWNvbiA9IHRoaXMuc3BySWNvbkdhbWVbNl07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdCaWtpbmknOlxuICAgICAgICAgICAgICAgIHNwckljb24gPSB0aGlzLnNwckljb25HYW1lWzddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWluaSBQb2tlcic6XG4gICAgICAgICAgICAgICAgc3BySWNvbiA9IHRoaXMuc3BySWNvbkdhbWVbOF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDYW8gVGjhuqVwJzpcbiAgICAgICAgICAgICAgICBzcHJJY29uID0gdGhpcy5zcHJJY29uR2FtZVs5XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1Ro4bqnbiBCw6BpJzpcbiAgICAgICAgICAgICAgICBzcHJJY29uID0gdGhpcy5zcHJJY29uR2FtZVsxMF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdHZW0nOlxuICAgICAgICAgICAgICAgIHNwckljb24gPSB0aGlzLnNwckljb25HYW1lWzExXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1TDoGkgWOG7iXUnOlxuICAgICAgICAgICAgICAgIHNwckljb24gPSB0aGlzLnNwckljb25HYW1lWzEyXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BySWNvblxuICAgIH1cbiAgICBhY3RDaGFuZ2VBbW91bnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEpwVmFsdWUgPSBwYXJzZUludChkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRJbmZvKCk7XG4gICAgfVxuICAgIGFjdEdvVG9HYW1lKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGxldCBUYWJNZW51R2FtZSA9IGNjLmZpbmQoJ0NlbnRlci9UYWJzJywgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5ub2RlLnBhcmVudCkuZ2V0Q29tcG9uZW50KFwiVGFiTWVudUdhbWVcIik7XG4gICAgICAgIHN3aXRjaCAoZGF0YSkge1xuICAgICAgICAgICAgY2FzZSAnxJB1YSBYZSc6XG4gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvU2xvdDEoKTtcbiAgICAgICAgICAgICAgICBUYWJNZW51R2FtZS5vbkJ0blRhYlNsb3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1Ro4bqnbiBUw6BpJzpcbiAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdvVG9TbG90MygpO1xuICAgICAgICAgICAgICAgIFRhYk1lbnVHYW1lLm9uQnRuVGFiU2xvdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnWMOobmcnOlxuICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0R2FtZVNsb3QzeDMoKTtcbiAgICAgICAgICAgICAgICBUYWJNZW51R2FtZS5vbkJ0blRhYk1pbmkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0JpdGNvaW4nOlxuICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0R29Ub1Nsb3Q3KCk7XG4gICAgICAgICAgICAgICAgVGFiTWVudUdhbWUub25CdG5UYWJTbG90KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUaOG7gyBUaGFvJzpcbiAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdvVG9TbG90MTAoKTtcbiAgICAgICAgICAgICAgICBUYWJNZW51R2FtZS5vbkJ0blRhYlNsb3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NoaW0gxJBpw6puJzpcbiAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdvVG9TbG90NCgpO1xuICAgICAgICAgICAgICAgIFRhYk1lbnVHYW1lLm9uQnRuVGFiU2xvdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ2hpw6ptIFRpbmgnOlxuICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0R29Ub1Nsb3Q2KCk7XG4gICAgICAgICAgICAgICAgVGFiTWVudUdhbWUub25CdG5UYWJTbG90KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdCaWtpbmknOlxuICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0R29Ub1Nsb3QxMSgpO1xuICAgICAgICAgICAgICAgIFRhYk1lbnVHYW1lLm9uQnRuVGFiU2xvdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWluaSBQb2tlcic6XG4gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHYW1lTWluaVBva2VyKCk7XG4gICAgICAgICAgICAgICAgVGFiTWVudUdhbWUub25CdG5UYWJNaW5pKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDYW8gVGjhuqVwJzpcbiAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdhbWVDYW9UaGFwKCk7XG4gICAgICAgICAgICAgICAgVGFiTWVudUdhbWUub25CdG5UYWJNaW5pKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUaOG6p24gQsOgaSc6XG4gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvU2xvdDgoKTtcbiAgICAgICAgICAgICAgICBUYWJNZW51R2FtZS5vbkJ0blRhYlNsb3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0dlbSc6XG4gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHYW1lU2xvdDN4M0dlbSgpO1xuICAgICAgICAgICAgICAgIFRhYk1lbnVHYW1lLm9uQnRuVGFiTWluaSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVMOgaSBY4buJdSc6XG4gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHYW1lVGFpWGl1KCk7XG4gICAgICAgICAgICAgICAgVGFiTWVudUdhbWUub25CdG5UYWJNaW5pKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=