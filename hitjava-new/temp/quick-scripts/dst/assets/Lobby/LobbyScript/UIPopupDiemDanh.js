
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/UIPopupDiemDanh.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46903WpNiBN2aiwhHzWywhS', 'UIPopupDiemDanh');
// Lobby/LobbyScript/UIPopupDiemDanh.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPopupDiemDanh = /** @class */ (function (_super) {
    __extends(UIPopupDiemDanh, _super);
    function UIPopupDiemDanh() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.prefab = null;
        _this.itemDiemDanhNode = null;
        _this.itemDiemDanh = null;
        return _this;
    }
    UIPopupDiemDanh.prototype.start = function () {
        var _this = this;
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            //Utils.Log(inpacket.getCmdId());
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.GET_LIST_QUEST:
                    {
                        _this.content.removeAllChildren();
                        _this.itemDiemDanh = null;
                        var res = new Lobby_Cmd_1.default.ResGetListQuest(data);
                        var list = JSON.parse(res.bf);
                        for (var i = 0; i < list.length; i++) {
                            var item = cc.instantiate(_this.prefab);
                            item.parent = _this.content;
                            item.setSiblingIndex(list[i].dailyQuestData.piority + 1);
                            //Utils.Log(list[i].dailyQuestData.piority + 1);
                            item.getComponent("UIItemDiemDanh").init(list[i]);
                        }
                    }
                    break;
                case Lobby_Cmd_1.default.Code.RECEIVE_LIST_QUEST:
                    {
                        var res = new Lobby_Cmd_1.default.ResReceiveListQuest(data);
                        //Utils.Log("ListQuest:" + JSON.stringify(res));
                        if (res.isSuccess) {
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_success'));
                            MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetListQuest());
                            Configs_1.default.Login.Coin = res.currentMoney;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        }
                    }
                    break;
            }
        }, this);
    };
    UIPopupDiemDanh.prototype.onEnable = function () {
        this.checkDiemDanh();
    };
    UIPopupDiemDanh.prototype.checkDiemDanh = function () {
        var _this = this;
        Http_1.default.get(Configs_1.default.App.API, { c: "2031", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, ac: "history" }, function (err, res) {
            //Utils.Log("DIEMDANH:", res);
            if (res['data'] != null) {
                if (_this.itemDiemDanh == null) {
                    _this.itemDiemDanh = cc.instantiate(_this.itemDiemDanhNode);
                    _this.itemDiemDanh.parent = _this.content;
                    _this.itemDiemDanh.setSiblingIndex(0);
                    //  cc.log("init diem danh");
                }
                var progress = 0;
                var dataHis = res['data'];
                for (var i = 0; i < dataHis.length; i++) {
                    if (dataHis[i]['consecutive'] != 0) {
                        progress++;
                    }
                }
                cc.find('BgProgress/Progress', _this.itemDiemDanh).getComponent(cc.Sprite).fillRange = progress / 7;
                _this.itemDiemDanh.getChildByName('TxtProgress').getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_progress') + ": " + Math.floor((progress / 7) * 100) + "%";
            }
        });
    };
    UIPopupDiemDanh.prototype.onClickAttendance = function () {
        Global_1.Global.LobbyController.actDiemDanh1();
        this.dismiss();
    };
    UIPopupDiemDanh.prototype.show = function () {
        _super.prototype.show.call(this);
        // App.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetListQuest());
    };
    __decorate([
        property(cc.Node)
    ], UIPopupDiemDanh.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupDiemDanh.prototype, "prefab", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupDiemDanh.prototype, "itemDiemDanhNode", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupDiemDanh.prototype, "itemDiemDanh", void 0);
    UIPopupDiemDanh = __decorate([
        ccclass
    ], UIPopupDiemDanh);
    return UIPopupDiemDanh;
}(Dialog_1.default));
exports.default = UIPopupDiemDanh;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxVSVBvcHVwRGllbURhbmgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELG1EQUFrRDtBQUNsRCwrQ0FBMEM7QUFDMUMseUNBQThCO0FBQzlCLDJDQUFzQztBQUN0Qyx1RUFBa0U7QUFDbEUsaURBQTRDO0FBRTVDLGlGQUE0RTtBQUM1RSx1RUFBMEQ7QUFHcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQU07SUFBbkQ7UUFBQSxxRUFpRkM7UUEvRUcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUF5RWpDLENBQUM7SUF4RUcsK0JBQUssR0FBTDtRQUFBLGlCQXFDQztRQW5DRywrQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBQyxJQUFJO1lBQ2pELElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLDBCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsaUNBQWlDO1lBQ2pDLFFBQVEsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUN6QixLQUFLLG1CQUFHLENBQUMsSUFBSSxDQUFDLGNBQWM7b0JBQUU7d0JBRTFCLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDakMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7d0JBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksbUJBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7d0JB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Rm5DO0lBQUQsc0JBQUM7Q0FqRkQsQUFpRkMsQ0FqRjRDLGdCQUFNLEdBaUZsRDtrQkFqRm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0dsb2JhbFwiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vTG9iYnkuQ21kXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL01pbmlHYW1lTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJUG9wdXBEaWVtRGFuaCBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJlZmFiOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtRGllbURhbmhOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtRGllbURhbmg6IGNjLk5vZGUgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIC8vVXRpbHMuTG9nKGlucGFja2V0LmdldENtZElkKCkpO1xuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5HRVRfTElTVF9RVUVTVDoge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1EaWVtRGFuaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0dldExpc3RRdWVzdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBKU09OLnBhcnNlKHJlcy5iZik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0U2libGluZ0luZGV4KGxpc3RbaV0uZGFpbHlRdWVzdERhdGEucGlvcml0eSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2cobGlzdFtpXS5kYWlseVF1ZXN0RGF0YS5waW9yaXR5ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIlVJSXRlbURpZW1EYW5oXCIpLmluaXQobGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5SRUNFSVZFX0xJU1RfUVVFU1Q6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzUmVjZWl2ZUxpc3RRdWVzdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJMaXN0UXVlc3Q6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2dpZnRjb2RlX3N1Y2Nlc3MnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxR2V0TGlzdFF1ZXN0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgIH1cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jaGVja0RpZW1EYW5oKCk7XG4gICAgfVxuICAgIGNoZWNrRGllbURhbmgoKSB7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiBcIjIwMzFcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLCBhYzogXCJoaXN0b3J5XCIgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAvL1V0aWxzLkxvZyhcIkRJRU1EQU5IOlwiLCByZXMpO1xuICAgICAgICAgICAgaWYgKHJlc1snZGF0YSddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtRGllbURhbmggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1EaWVtRGFuaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbURpZW1EYW5oTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbURpZW1EYW5oLnBhcmVudCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtRGllbURhbmguc2V0U2libGluZ0luZGV4KDApO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiaW5pdCBkaWVtIGRhbmhcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFIaXMgPSByZXNbJ2RhdGEnXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFIaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFIaXNbaV1bJ2NvbnNlY3V0aXZlJ10gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MrK1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ0JnUHJvZ3Jlc3MvUHJvZ3Jlc3MnLCB0aGlzLml0ZW1EaWVtRGFuaCkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gcHJvZ3Jlc3MgLyA3O1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbURpZW1EYW5oLmdldENoaWxkQnlOYW1lKCdUeHRQcm9ncmVzcycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcHJvZ3Jlc3MnKSArIFwiOiBcIiArIE1hdGguZmxvb3IoKHByb2dyZXNzIC8gNykgKiAxMDApICsgXCIlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkNsaWNrQXR0ZW5kYW5jZSgpIHtcbiAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3REaWVtRGFuaDEoKTtcbiAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxR2V0TGlzdFF1ZXN0KCkpO1xuICAgIH1cbn1cbiJdfQ==