
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/SamNetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54befXq1/NIeqwcU/H8L6Fx', 'SamNetworkClient');
// Lobby/LobbyScript/Script/networks/SamNetworkClient.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../../../Loading/src/Configs");
var CardGameNetworkClient_1 = require("./CardGameNetworkClient");
var SamNetworkClient = /** @class */ (function (_super) {
    __extends(SamNetworkClient, _super);
    function SamNetworkClient() {
        return _super.call(this) || this;
    }
    SamNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SamNetworkClient();
        }
        return this.instance;
    };
    SamNetworkClient.prototype._connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_SAM.host, Configs_1.default.App.HOST_SAM.port);
    };
    SamNetworkClient.prototype.onOpen = function (ev) {
        _super.prototype.onOpen.call(this, ev);
        //Utils.Log("sam connected");
    };
    return SamNetworkClient;
}(CardGameNetworkClient_1.default));
exports.default = SamNetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxTYW1OZXR3b3JrQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUV0RCxpRUFBNEQ7QUFFNUQ7SUFBOEMsb0NBQXFCO0lBUy9EO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBVGEsNEJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBNEIsQ0FBQztJQUM3QyxDQUFDO0lBTUQsbUNBQVEsR0FBUjtRQUNJLGlCQUFNLE9BQU8sWUFBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGlCQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQVM7UUFDWixpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsNkJBQTZCO0lBQ2xDLENBQUM7SUFDTCx1QkFBQztBQUFELENBckJBLEFBcUJDLENBckI2QywrQkFBcUIsR0FxQmxFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgQ2FyZEdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuL0NhcmRHYW1lTmV0d29ya0NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW1OZXR3b3JrQ2xpZW50IGV4dGVuZHMgQ2FyZEdhbWVOZXR3b3JrQ2xpZW50IHtcbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFNhbU5ldHdvcmtDbGllbnQge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNhbU5ldHdvcmtDbGllbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSBhcyBTYW1OZXR3b3JrQ2xpZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIF9jb25uZWN0KCkge1xuICAgICAgICBzdXBlci5jb25uZWN0KENvbmZpZ3MuQXBwLkhPU1RfU0FNLmhvc3QsIENvbmZpZ3MuQXBwLkhPU1RfU0FNLnBvcnQpO1xuICAgIH1cblxuICAgIG9uT3BlbihldjogRXZlbnQpIHtcbiAgICAgICAgc3VwZXIub25PcGVuKGV2KTtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwic2FtIGNvbm5lY3RlZFwiKTtcbiAgICB9XG59Il19