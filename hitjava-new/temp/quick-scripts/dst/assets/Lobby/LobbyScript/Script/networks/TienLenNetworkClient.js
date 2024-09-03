
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/TienLenNetworkClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ace2fOmXkREULE7CCaicJmQ', 'TienLenNetworkClient');
// Lobby/LobbyScript/Script/networks/TienLenNetworkClient.ts

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
var TienLenNetworkClient = /** @class */ (function (_super) {
    __extends(TienLenNetworkClient, _super);
    function TienLenNetworkClient() {
        return _super.call(this) || this;
    }
    TienLenNetworkClient.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TienLenNetworkClient();
        }
        return this.instance;
    };
    TienLenNetworkClient.prototype._connect = function () {
        _super.prototype.connect.call(this, Configs_1.default.App.HOST_TLMN.host, Configs_1.default.App.HOST_TLMN.port);
    };
    TienLenNetworkClient.prototype.onOpen = function (ev) {
        _super.prototype.onOpen.call(this, ev);
        //Utils.Log("tlmn connected");
    };
    return TienLenNetworkClient;
}(CardGameNetworkClient_1.default));
exports.default = TienLenNetworkClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxUaWVuTGVuTmV0d29ya0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFFdEQsaUVBQTREO0FBRzVEO0lBQWtELHdDQUFxQjtJQVNuRTtlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQVRhLGdDQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztTQUM5QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQWdDLENBQUM7SUFDakQsQ0FBQztJQU1ELHVDQUFRLEdBQVI7UUFDSSxpQkFBTSxPQUFPLFlBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELHFDQUFNLEdBQU4sVUFBTyxFQUFTO1FBQ1osaUJBQU0sTUFBTSxZQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLDhCQUE4QjtJQUNuQyxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQXJCQSxBQXFCQyxDQXJCaUQsK0JBQXFCLEdBcUJ0RSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IENhcmRHYW1lTmV0d29ya0NsaWVudCBmcm9tIFwiLi9DYXJkR2FtZU5ldHdvcmtDbGllbnRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWVuTGVuTmV0d29ya0NsaWVudCBleHRlbmRzIENhcmRHYW1lTmV0d29ya0NsaWVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFRpZW5MZW5OZXR3b3JrQ2xpZW50IHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWVuTGVuTmV0d29ya0NsaWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlIGFzIFRpZW5MZW5OZXR3b3JrQ2xpZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIF9jb25uZWN0KCkge1xuICAgICAgICBzdXBlci5jb25uZWN0KENvbmZpZ3MuQXBwLkhPU1RfVExNTi5ob3N0LCBDb25maWdzLkFwcC5IT1NUX1RMTU4ucG9ydCk7XG4gICAgfVxuXG4gICAgb25PcGVuKGV2OiBFdmVudCkge1xuICAgICAgICBzdXBlci5vbk9wZW4oZXYpO1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJ0bG1uIGNvbm5lY3RlZFwiKTtcbiAgICB9XG59Il19