"use strict";
cc._RF.push(module, '9a77535BDFPdLDe/ez3AIxH', 'Network.Cmd');
// Lobby/LobbyScript/Script/networks/Network.Cmd.ts

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
exports.cmd = void 0;
var Network_OutPacket_1 = require("./Network.OutPacket");
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.LOGIN = 1;
        return Code;
    }());
    cmd.Code = Code;
    var Login = /** @class */ (function (_super) {
        __extends(Login, _super);
        function Login() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.LOGIN);
            return _this;
        }
        Login.prototype.putData = function (nickname, accessToken) {
            this.packHeader();
            this.putString(nickname);
            this.putString(accessToken);
            this.updateSize();
        };
        return Login;
    }(Network_OutPacket_1.default));
    cmd.Login = Login;
    var SendLogin = /** @class */ (function (_super) {
        __extends(SendLogin, _super);
        function SendLogin(nickname, accessToken) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.LOGIN);
            _this.packHeader();
            _this.putString(nickname);
            _this.putString(accessToken);
            _this.updateSize();
            _this.getData();
            return _this;
        }
        return SendLogin;
    }(Network_OutPacket_1.default));
    cmd.SendLogin = SendLogin;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

cc._RF.pop();