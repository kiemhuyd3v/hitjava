
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/Network.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxOZXR3b3JrLkNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQTRDO0FBRzVDLElBQWlCLEdBQUcsQ0FrQ25CO0FBbENELFdBQWlCLEdBQUc7SUFDaEI7UUFBQTtRQUVBLENBQUM7UUFEVSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFdBQUM7S0FGRCxBQUVDLElBQUE7SUFGWSxRQUFJLE9BRWhCLENBQUE7SUFFRDtRQUEyQix5QkFBUztRQUNoQztZQUFBLFlBQ0ksaUJBQU8sU0FJVjtZQUhHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFDOUIsQ0FBQztRQUVELHVCQUFPLEdBQVAsVUFBUSxRQUFnQixFQUFFLFdBQW1CO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3JCLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FkQSxBQWNDLENBZDBCLDJCQUFTLEdBY25DO0lBZFksU0FBSyxRQWNqQixDQUFBO0lBRUQ7UUFBK0IsNkJBQVM7UUFDcEMsbUJBQVksUUFBZ0IsRUFBRSxXQUFtQjtZQUFqRCxZQUNJLGlCQUFPLFNBU1Y7WUFSRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNuQixDQUFDO1FBQ0wsZ0JBQUM7SUFBRCxDQVpBLEFBWUMsQ0FaOEIsMkJBQVMsR0FZdkM7SUFaWSxhQUFTLFlBWXJCLENBQUE7QUFDTCxDQUFDLEVBbENnQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUFrQ25CO0FBQ0Qsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluUGFja2V0IGZyb20gXCIuL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4vTmV0d29yay5PdXRQYWNrZXRcIjtcblxuXG5leHBvcnQgbmFtZXNwYWNlIGNtZCB7XG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xuICAgICAgICBzdGF0aWMgTE9HSU4gPSAxO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBMb2dpbiBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkxPR0lOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1dERhdGEobmlja25hbWU6IHN0cmluZywgYWNjZXNzVG9rZW46IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhuaWNrbmFtZSk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhhY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRMb2dpbiBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG5pY2tuYW1lOiBzdHJpbmcsIGFjY2Vzc1Rva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5MT0dJTik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKG5pY2tuYW1lKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbWQ7XG4iXX0=