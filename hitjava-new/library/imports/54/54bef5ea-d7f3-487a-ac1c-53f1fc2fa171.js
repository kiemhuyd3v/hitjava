"use strict";
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