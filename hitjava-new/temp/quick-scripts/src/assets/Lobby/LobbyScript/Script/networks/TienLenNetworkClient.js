"use strict";
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