
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f735EbdP9I7rxnsMZMPXGY', 'Lobby.Cmd');
// Lobby/LobbyScript/Lobby.Cmd.ts

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
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var Network_OutPacket_1 = require("./Script/networks/Network.OutPacket");
var Configs_1 = require("../../Loading/src/Configs");
/*name game :
  spartans-Thantai
  BENLEY:bitcoin
  audition:duaxe
  maybach:thethao
  tamhung:chimdien
  chiemtinh:chiemtinh
  RollRoyce:ThanBai
  */
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.UPDATE_TIME_BUTTON = 2124;
        Code.NOTIFY_MARQUEE = 20100;
        Code.UPDATE_BIGWIN_JACKPOT_SLOT1 = 2010; //Duaxe
        Code.UPDATE_BIGWIN_JACKPOT_SLOT3 = 12010; //than tai
        Code.UPDATE_BIGWIN_JACKPOT_SLOT4 = 14010; //Chim Dien-tamhung
        Code.UPDATE_BIGWIN_JACKPOT_SLOT5 = 6010; //chiemtinh
        Code.UPDATE_BIGWIN_JACKPOT_SLOT7 = 4010; //Bitcoin
        Code.UPDATE_BIGWIN_JACKPOT_SLOT8 = 5010; //ThanBai-RollRoyce
        Code.UPDATE_BIGWIN_JACKPOT_SLOT10 = 3010; //Euro
        Code.UPDATE_BIGWIN_JACKPOT_SLOT11 = 16010; //bikini
        Code.UPDATE_BIGWIN_JACKPOT_MINIPOKER = 4010;
        Code.UPDATE_BIGWIN_JACKPOT_SLOT3X3 = 7010;
        Code.UPDATE_BIGWIN_JACKPOT_SLOT3x3GEM = 8010;
        Code.INSERT_GIFTCODE = 20017;
        Code.DEPOSIT_CARD = 20012;
        Code.CHECK_NICKNAME_TRANSFER = 20018;
        Code.SUBCRIBE_HALL_SLOT = 10001;
        Code.UNSUBCRIBE_HALL_SLOT = 10002;
        Code.UPDATE_JACKPOT_SLOTS = 10003;
        Code.SPIN_LUCKY_WHEEL = 20042;
        Code.GET_SECURITY_INFO = 20050;
        Code.CHANGE_EMAIL = 20003;
        Code.UPDATE_USER_INFO = 20002;
        Code.GET_OTP = 20220;
        Code.SEND_OTP = 20019;
        Code.GET_LIST_QUEST = 21000;
        Code.RECEIVE_LIST_QUEST = 21001;
        Code.RESULT_ACTIVE_MOBILE = 20026;
        Code.RESULT_ACTIVE_NEW_MOBILE = 20028;
        Code.RESULT_CHANGE_MOBILE_ACTIVED = 20027;
        Code.ACTIVE_PHONE = 20006;
        Code.CHANGE_PHONE_NUMBER = 20007;
        Code.TRANSFER_COIN = 20014;
        Code.RESULT_TRANSFER_COIN = 20034;
        Code.SAFES = 20009;
        Code.RESULT_SAFES = 20029;
        Code.CHANGE_PASSWORD = 20000;
        Code.RESULT_CHANGE_PASSWORD = 20020;
        Code.EXCHANGE_VIP_POINT = 20001;
        Code.RESULT_EXCHANGE_VIP_POINT = 20021;
        Code.UPDATE_JACKPOTS = 20101;
        Code.SUBCRIBE_JACPORTS = 20102;
        Code.UNSUBCRIBE_JACPORTS = 20103;
        Code.GET_MONEY_USE = 20051;
        Code.DEPOSIT_BANK = 20201;
        Code.DEPOSIT_MOMO = 20202;
        Code.LOGOUT = 2;
        Code.LOGIN = 1;
        Code.CASHOUT_CARD = 20211;
        Code.CASHOUT_BANK = 20219;
        Code.CASHOUT_MOMO = 20215;
        Code.TX_GAME_INFO = 2111;
        Code.TX_UPDATE_INFO = 2112;
        Code.TX_SCRIBE = 2000;
        return Code;
    }());
    cmd.Code = Code;
    var ReceiveUpdateTimeButton = /** @class */ (function (_super) {
        __extends(ReceiveUpdateTimeButton, _super);
        function ReceiveUpdateTimeButton(data) {
            var _this = _super.call(this, data) || this;
            _this.remainTime = 0;
            _this.bettingState = false;
            _this.remainTime = _this.getByte();
            _this.bettingState = _this.getBool();
            return _this;
        }
        return ReceiveUpdateTimeButton;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdateTimeButton = ReceiveUpdateTimeButton;
    var ReqInsertGiftcode = /** @class */ (function (_super) {
        __extends(ReqInsertGiftcode, _super);
        function ReqInsertGiftcode(code) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.INSERT_GIFTCODE);
            _this.packHeader();
            _this.putString(code);
            _this.updateSize();
            return _this;
        }
        return ReqInsertGiftcode;
    }(Network_OutPacket_1.default));
    cmd.ReqInsertGiftcode = ReqInsertGiftcode;
    var ResInsertGiftcode = /** @class */ (function (_super) {
        __extends(ResInsertGiftcode, _super);
        function ResInsertGiftcode(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.currentMoneyVin = 0;
            _this.currentMoneyXu = 0;
            _this.moneyGiftCodeVin = 0;
            _this.moneyGiftCodeXu = 0;
            _this.error = _this.getError();
            _this.currentMoneyVin = _this.getLong();
            _this.currentMoneyXu = _this.getLong();
            _this.moneyGiftCodeVin = _this.getLong();
            _this.moneyGiftCodeXu = _this.getLong();
            return _this;
        }
        return ResInsertGiftcode;
    }(Network_InPacket_1.default));
    cmd.ResInsertGiftcode = ResInsertGiftcode;
    var ReqDepositCard = /** @class */ (function (_super) {
        __extends(ReqDepositCard, _super);
        function ReqDepositCard(telcoId, serial, code, amount) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DEPOSIT_CARD);
            _this.packHeader();
            _this.putByte(telcoId);
            _this.putString(serial);
            _this.putString(code);
            _this.putString(amount);
            _this.updateSize();
            return _this;
        }
        return ReqDepositCard;
    }(Network_OutPacket_1.default));
    cmd.ReqDepositCard = ReqDepositCard;
    var ReqDepositBank = /** @class */ (function (_super) {
        __extends(ReqDepositBank, _super);
        function ReqDepositBank(bankNumber, amount) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DEPOSIT_BANK);
            _this.packHeader();
            _this.putString(bankNumber);
            _this.putLong(amount);
            _this.updateSize();
            return _this;
        }
        return ReqDepositBank;
    }(Network_OutPacket_1.default));
    cmd.ReqDepositBank = ReqDepositBank;
    var ResDepositBank = /** @class */ (function (_super) {
        __extends(ResDepositBank, _super);
        function ResDepositBank(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.currentMoney = 0;
            _this.timeFail = 0;
            _this.numFail = 0;
            _this.error = _this.getError();
            _this.currentMoney = _this.getLong();
            _this.timeFail = _this.getLong();
            _this.numFail = _this.getInt();
            return _this;
        }
        return ResDepositBank;
    }(Network_InPacket_1.default));
    cmd.ResDepositBank = ResDepositBank;
    var ReqDepositMomo = /** @class */ (function (_super) {
        __extends(ReqDepositMomo, _super);
        function ReqDepositMomo(amount, phoneSent) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DEPOSIT_MOMO);
            _this.packHeader();
            _this.putLong(amount);
            _this.putString(phoneSent);
            _this.updateSize();
            return _this;
        }
        return ReqDepositMomo;
    }(Network_OutPacket_1.default));
    cmd.ReqDepositMomo = ReqDepositMomo;
    var ResDepositMomo = /** @class */ (function (_super) {
        __extends(ResDepositMomo, _super);
        function ResDepositMomo(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.currentMoney = 0;
            _this.timeFail = 0;
            _this.numFail = 0;
            _this.error = _this.getError();
            _this.currentMoney = _this.getLong();
            _this.timeFail = _this.getLong();
            _this.numFail = _this.getInt();
            return _this;
        }
        return ResDepositMomo;
    }(Network_InPacket_1.default));
    cmd.ResDepositMomo = ResDepositMomo;
    var ResDepositCard = /** @class */ (function (_super) {
        __extends(ResDepositCard, _super);
        function ResDepositCard(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.currentMoney = 0;
            _this.timeFail = 0;
            _this.numFail = 0;
            _this.error = _this.getError();
            _this.currentMoney = _this.getLong();
            _this.timeFail = _this.getLong();
            _this.numFail = _this.getInt();
            return _this;
        }
        return ResDepositCard;
    }(Network_InPacket_1.default));
    cmd.ResDepositCard = ResDepositCard;
    var ReqCheckNicknameTransfer = /** @class */ (function (_super) {
        __extends(ReqCheckNicknameTransfer, _super);
        function ReqCheckNicknameTransfer(nickname) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHECK_NICKNAME_TRANSFER);
            _this.packHeader();
            _this.putString(nickname);
            _this.updateSize();
            return _this;
        }
        return ReqCheckNicknameTransfer;
    }(Network_OutPacket_1.default));
    cmd.ReqCheckNicknameTransfer = ReqCheckNicknameTransfer;
    var ResCheckNicknameTransfer = /** @class */ (function (_super) {
        __extends(ResCheckNicknameTransfer, _super);
        function ResCheckNicknameTransfer(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.type = 0;
            _this.fee = 0;
            _this.error = _this.getError();
            _this.type = _this.getByte();
            _this.fee = _this.getByte();
            return _this;
        }
        return ResCheckNicknameTransfer;
    }(Network_InPacket_1.default));
    cmd.ResCheckNicknameTransfer = ResCheckNicknameTransfer;
    var ReqSpinLuckyWheel = /** @class */ (function (_super) {
        __extends(ReqSpinLuckyWheel, _super);
        function ReqSpinLuckyWheel() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SPIN_LUCKY_WHEEL);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqSpinLuckyWheel;
    }(Network_OutPacket_1.default));
    cmd.ReqSpinLuckyWheel = ReqSpinLuckyWheel;
    var ResSpinLuckyWheel = /** @class */ (function (_super) {
        __extends(ResSpinLuckyWheel, _super);
        function ResSpinLuckyWheel(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.prizeVin = "";
            _this.prizeXu = "";
            _this.prizeSlot = "";
            _this.remainCount = 0;
            _this.currentMoneyVin = 0;
            _this.currentMoneyXu = 0;
            _this.error = _this.getError();
            _this.prizeVin = _this.getString();
            _this.prizeXu = _this.getString();
            _this.prizeSlot = _this.getString();
            _this.remainCount = _this.getShort();
            _this.currentMoneyVin = _this.getLong();
            _this.currentMoneyXu = _this.getLong();
            return _this;
        }
        return ResSpinLuckyWheel;
    }(Network_InPacket_1.default));
    cmd.ResSpinLuckyWheel = ResSpinLuckyWheel;
    var ReqGetSecurityInfo = /** @class */ (function (_super) {
        __extends(ReqGetSecurityInfo, _super);
        function ReqGetSecurityInfo() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.GET_SECURITY_INFO);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqGetSecurityInfo;
    }(Network_OutPacket_1.default));
    cmd.ReqGetSecurityInfo = ReqGetSecurityInfo;
    var ResGetListQuest = /** @class */ (function (_super) {
        __extends(ResGetListQuest, _super);
        function ResGetListQuest(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.bf = "";
            _this.error = _this.getError();
            _this.bf = _this.getString();
            return _this;
        }
        return ResGetListQuest;
    }(Network_InPacket_1.default));
    cmd.ResGetListQuest = ResGetListQuest;
    var ResReceiveListQuest = /** @class */ (function (_super) {
        __extends(ResReceiveListQuest, _super);
        function ResReceiveListQuest(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.isSuccess = false;
            _this.currentMoney = 0;
            _this.error = _this.getError();
            _this.isSuccess = _this.getBool();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ResReceiveListQuest;
    }(Network_InPacket_1.default));
    cmd.ResReceiveListQuest = ResReceiveListQuest;
    var ResGetSecurityInfo = /** @class */ (function (_super) {
        __extends(ResGetSecurityInfo, _super);
        function ResGetSecurityInfo(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.username = "";
            _this.cmt = "";
            _this.email = "";
            _this.mobile = "";
            _this.isVerifyPhone = false;
            _this.usertype = "";
            _this.refferalCode = "";
            _this.mobileSecure = 0;
            _this.emailSecure = 0;
            _this.appSecure = 0;
            _this.loginSecure = 0;
            _this.moneyLoginOtp = 0;
            _this.moneyUse = 0;
            _this.safe = 0;
            _this.configGame = "";
            _this.address = "";
            _this.birthday = "";
            _this.gender = true;
            _this.error = _this.getError();
            _this.username = _this.getString();
            _this.cmt = _this.getString();
            _this.email = _this.getString();
            _this.mobile = _this.getString();
            _this.isVerifyPhone = _this.getBool();
            _this.usertype = _this.getString();
            _this.refferalCode = _this.getString();
            _this.mobileSecure = _this.getByte();
            _this.emailSecure = _this.getByte();
            _this.appSecure = _this.getByte();
            _this.loginSecure = _this.getByte();
            _this.moneyLoginOtp = _this.getLong();
            _this.moneyUse = _this.getLong();
            _this.safe = _this.getLong();
            _this.configGame = _this.getString();
            _this.birthday = _this.getString();
            _this.address = _this.getString();
            _this.gender = _this.getBool();
            return _this;
        }
        return ResGetSecurityInfo;
    }(Network_InPacket_1.default));
    cmd.ResGetSecurityInfo = ResGetSecurityInfo;
    var ReqUpdateUserInfo = /** @class */ (function (_super) {
        __extends(ReqUpdateUserInfo, _super);
        function ReqUpdateUserInfo(mail, birthday, address, gender, refCode) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UPDATE_USER_INFO);
            _this.packHeader();
            _this.putString(""); //cmt
            _this.putString(mail); //mail
            _this.putString("");
            _this.putString(birthday); //birth
            _this.putString(address); //address
            _this.putInt(gender);
            _this.putString(refCode);
            _this.updateSize();
            return _this;
        }
        return ReqUpdateUserInfo;
    }(Network_OutPacket_1.default));
    cmd.ReqUpdateUserInfo = ReqUpdateUserInfo;
    var ResUpdateUserInfo = /** @class */ (function (_super) {
        __extends(ResUpdateUserInfo, _super);
        function ResUpdateUserInfo(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResUpdateUserInfo;
    }(Network_InPacket_1.default));
    cmd.ResUpdateUserInfo = ResUpdateUserInfo;
    var ReqGetOTP = /** @class */ (function (_super) {
        __extends(ReqGetOTP, _super);
        function ReqGetOTP() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.GET_OTP);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqGetOTP;
    }(Network_OutPacket_1.default));
    cmd.ReqGetOTP = ReqGetOTP;
    var ResGetOTP = /** @class */ (function (_super) {
        __extends(ResGetOTP, _super);
        function ResGetOTP(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResGetOTP;
    }(Network_InPacket_1.default));
    cmd.ResGetOTP = ResGetOTP;
    var ReqSendDiemDanh = /** @class */ (function (_super) {
        __extends(ReqSendDiemDanh, _super);
        function ReqSendDiemDanh(otp, type) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SEND_OTP);
            _this.packHeader();
            _this.putString(otp);
            _this.putByte(type); //0: sms, 1: telegram
            _this.updateSize();
            return _this;
        }
        return ReqSendDiemDanh;
    }(Network_OutPacket_1.default));
    cmd.ReqSendDiemDanh = ReqSendDiemDanh;
    var ReqGetListQuest = /** @class */ (function (_super) {
        __extends(ReqGetListQuest, _super);
        function ReqGetListQuest() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.GET_LIST_QUEST);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqGetListQuest;
    }(Network_OutPacket_1.default));
    cmd.ReqGetListQuest = ReqGetListQuest;
    var ReqReceiveQuest = /** @class */ (function (_super) {
        __extends(ReqReceiveQuest, _super);
        function ReqReceiveQuest(index) {
            var _this = _super.call(this) || this;
            ////Utils.Log("ReqReceiveQuest");
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.RECEIVE_LIST_QUEST);
            _this.packHeader();
            _this.putByte(index);
            _this.updateSize();
            return _this;
        }
        return ReqReceiveQuest;
    }(Network_OutPacket_1.default));
    cmd.ReqReceiveQuest = ReqReceiveQuest;
    var ReqSendOTP = /** @class */ (function (_super) {
        __extends(ReqSendOTP, _super);
        function ReqSendOTP(otp, type) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SEND_OTP);
            _this.packHeader();
            _this.putString(otp);
            _this.putByte(type); //0: sms, 1: telegram
            _this.updateSize();
            return _this;
        }
        return ReqSendOTP;
    }(Network_OutPacket_1.default));
    cmd.ReqSendOTP = ReqSendOTP;
    var ResSendOTP = /** @class */ (function (_super) {
        __extends(ResSendOTP, _super);
        function ResSendOTP(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResSendOTP;
    }(Network_InPacket_1.default));
    cmd.ResSendOTP = ResSendOTP;
    var ResResultActiveMobie = /** @class */ (function (_super) {
        __extends(ResResultActiveMobie, _super);
        function ResResultActiveMobie(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResResultActiveMobie;
    }(Network_InPacket_1.default));
    cmd.ResResultActiveMobie = ResResultActiveMobie;
    var ResResultActiveNewMobie = /** @class */ (function (_super) {
        __extends(ResResultActiveNewMobie, _super);
        function ResResultActiveNewMobie(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResResultActiveNewMobie;
    }(Network_InPacket_1.default));
    cmd.ResResultActiveNewMobie = ResResultActiveNewMobie;
    var ReqChangePhoneNumber = /** @class */ (function (_super) {
        __extends(ReqChangePhoneNumber, _super);
        function ReqChangePhoneNumber(phoneNumber) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHANGE_PHONE_NUMBER);
            _this.packHeader();
            _this.putString(phoneNumber);
            _this.updateSize();
            return _this;
        }
        return ReqChangePhoneNumber;
    }(Network_OutPacket_1.default));
    cmd.ReqChangePhoneNumber = ReqChangePhoneNumber;
    var ResChangePhoneNumber = /** @class */ (function (_super) {
        __extends(ResChangePhoneNumber, _super);
        function ResChangePhoneNumber(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResChangePhoneNumber;
    }(Network_InPacket_1.default));
    cmd.ResChangePhoneNumber = ResChangePhoneNumber;
    var ReqActivePhone = /** @class */ (function (_super) {
        __extends(ReqActivePhone, _super);
        function ReqActivePhone() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.ACTIVE_PHONE);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqActivePhone;
    }(Network_OutPacket_1.default));
    cmd.ReqActivePhone = ReqActivePhone;
    var ResActivePhone = /** @class */ (function (_super) {
        __extends(ResActivePhone, _super);
        function ResActivePhone(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResActivePhone;
    }(Network_InPacket_1.default));
    cmd.ResActivePhone = ResActivePhone;
    var ReqTransferCoin = /** @class */ (function (_super) {
        __extends(ReqTransferCoin, _super);
        function ReqTransferCoin(nickname, coin, note) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.TRANSFER_COIN);
            _this.packHeader();
            _this.putString(nickname);
            _this.putLong(coin);
            _this.putString(unescape(encodeURIComponent(note)));
            _this.updateSize();
            return _this;
        }
        return ReqTransferCoin;
    }(Network_OutPacket_1.default));
    cmd.ReqTransferCoin = ReqTransferCoin;
    var ResTransferCoin = /** @class */ (function (_super) {
        __extends(ResTransferCoin, _super);
        function ResTransferCoin(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.moneyUse = 0;
            _this.error = _this.getError();
            _this.moneyUse = _this.getLong();
            return _this;
        }
        return ResTransferCoin;
    }(Network_InPacket_1.default));
    cmd.ResTransferCoin = ResTransferCoin;
    var ResResultTransferCoin = /** @class */ (function (_super) {
        __extends(ResResultTransferCoin, _super);
        function ResResultTransferCoin(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.moneyUse = 0;
            _this.currentMoney = 0;
            _this.error = _this.getError();
            _this.moneyUse = _this.getLong();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ResResultTransferCoin;
    }(Network_InPacket_1.default));
    cmd.ResResultTransferCoin = ResResultTransferCoin;
    var ReqSafes = /** @class */ (function (_super) {
        __extends(ReqSafes, _super);
        function ReqSafes(coin, action) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SAFES);
            _this.packHeader();
            _this.putByte(action); //0: rút, 1: nạp
            _this.putLong(coin);
            _this.updateSize();
            return _this;
        }
        return ReqSafes;
    }(Network_OutPacket_1.default));
    cmd.ReqSafes = ReqSafes;
    var ResSafes = /** @class */ (function (_super) {
        __extends(ResSafes, _super);
        function ResSafes(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.moneyUse = 0;
            _this.safe = 0;
            _this.error = _this.getError();
            _this.moneyUse = _this.getLong();
            _this.safe = _this.getLong();
            return _this;
        }
        return ResSafes;
    }(Network_InPacket_1.default));
    cmd.ResSafes = ResSafes;
    var ResResultSafes = /** @class */ (function (_super) {
        __extends(ResResultSafes, _super);
        function ResResultSafes(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.moneyUse = 0;
            _this.safe = 0;
            _this.currentMoney = 0;
            _this.error = _this.getError();
            _this.moneyUse = _this.getLong();
            _this.safe = _this.getLong();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ResResultSafes;
    }(Network_InPacket_1.default));
    cmd.ResResultSafes = ResResultSafes;
    var ReqChangePassword = /** @class */ (function (_super) {
        __extends(ReqChangePassword, _super);
        function ReqChangePassword(oldPassword, newPassword) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHANGE_PASSWORD);
            _this.packHeader();
            _this.putString(md5(oldPassword));
            _this.putString(md5(newPassword));
            _this.updateSize();
            return _this;
        }
        return ReqChangePassword;
    }(Network_OutPacket_1.default));
    cmd.ReqChangePassword = ReqChangePassword;
    var ResChangePassword = /** @class */ (function (_super) {
        __extends(ResChangePassword, _super);
        function ResChangePassword(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResChangePassword;
    }(Network_InPacket_1.default));
    cmd.ResChangePassword = ResChangePassword;
    var ResResultChangePassword = /** @class */ (function (_super) {
        __extends(ResResultChangePassword, _super);
        function ResResultChangePassword(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResResultChangePassword;
    }(Network_InPacket_1.default));
    cmd.ResResultChangePassword = ResResultChangePassword;
    var ReqExchangeVipPoint = /** @class */ (function (_super) {
        __extends(ReqExchangeVipPoint, _super);
        function ReqExchangeVipPoint() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.EXCHANGE_VIP_POINT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqExchangeVipPoint;
    }(Network_OutPacket_1.default));
    cmd.ReqExchangeVipPoint = ReqExchangeVipPoint;
    var ResExchangeVipPoint = /** @class */ (function (_super) {
        __extends(ResExchangeVipPoint, _super);
        function ResExchangeVipPoint(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ResExchangeVipPoint;
    }(Network_InPacket_1.default));
    cmd.ResExchangeVipPoint = ResExchangeVipPoint;
    var ResResultExchangeVipPoint = /** @class */ (function (_super) {
        __extends(ResResultExchangeVipPoint, _super);
        function ResResultExchangeVipPoint(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.currentMoney = 0;
            _this.moneyAdd = 0;
            _this.error = _this.getError();
            _this.currentMoney = _this.getLong();
            _this.moneyAdd = _this.getLong();
            return _this;
        }
        return ResResultExchangeVipPoint;
    }(Network_InPacket_1.default));
    cmd.ResResultExchangeVipPoint = ResResultExchangeVipPoint;
    var ResNotifyMarquee = /** @class */ (function (_super) {
        __extends(ResNotifyMarquee, _super);
        function ResNotifyMarquee(data) {
            var _this = _super.call(this, data) || this;
            _this.message = "";
            _this.message = _this.getString();
            return _this;
        }
        return ResNotifyMarquee;
    }(Network_InPacket_1.default));
    cmd.ResNotifyMarquee = ResNotifyMarquee;
    var ResNotifyJackpot = /** @class */ (function (_super) {
        __extends(ResNotifyJackpot, _super);
        function ResNotifyJackpot(data) {
            var _this = _super.call(this, data) || this;
            _this.username = "";
            _this.type = 0;
            _this.betValue = 0;
            _this.totalPrizes = 0;
            _this.timestamp = "";
            _this.username = _this.getString();
            _this.type = _this.getByte();
            _this.betValue = _this.getShort();
            _this.totalPrizes = _this.getLong();
            _this.timestamp = _this.getString();
            return _this;
        }
        return ResNotifyJackpot;
    }(Network_InPacket_1.default));
    cmd.ResNotifyJackpot = ResNotifyJackpot;
    var ReqSubcribeJackpots = /** @class */ (function (_super) {
        __extends(ReqSubcribeJackpots, _super);
        function ReqSubcribeJackpots() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBCRIBE_JACPORTS);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqSubcribeJackpots;
    }(Network_OutPacket_1.default));
    cmd.ReqSubcribeJackpots = ReqSubcribeJackpots;
    var ReqUnSubcribeJackpots = /** @class */ (function (_super) {
        __extends(ReqUnSubcribeJackpots, _super);
        function ReqUnSubcribeJackpots() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSUBCRIBE_JACPORTS);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqUnSubcribeJackpots;
    }(Network_OutPacket_1.default));
    cmd.ReqUnSubcribeJackpots = ReqUnSubcribeJackpots;
    var ResUpdateJackpots = /** @class */ (function (_super) {
        __extends(ResUpdateJackpots, _super);
        function ResUpdateJackpots(data) {
            var _this = _super.call(this, data) || this;
            _this.miniPoker100 = 0;
            _this.miniPoker1000 = 0;
            _this.miniPoker10000 = 0;
            _this.pokeGo100 = 0;
            _this.pokeGo1000 = 0;
            _this.pokeGo10000 = 0;
            _this.khoBau100 = 0;
            _this.khoBau1000 = 0;
            _this.khoBau10000 = 0;
            _this.NDV100 = 0;
            _this.NDV1000 = 0;
            _this.NDV10000 = 0;
            _this.Avengers100 = 0;
            _this.Avengers1000 = 0;
            _this.Avengers10000 = 0;
            _this.Vqv100 = 0;
            _this.Vqv1000 = 0;
            _this.Vqv10000 = 0;
            _this.fish100 = 0;
            _this.fish1000 = 0;
            _this.caothap1000 = 0;
            _this.caothap10000 = 0;
            _this.caothap50000 = 0;
            _this.caothap100000 = 0;
            _this.caothap500000 = 0;
            //spartan
            _this.spartan100 = 0;
            _this.spartan1000 = 0;
            _this.spartan5000 = 0;
            _this.spartan10000 = 0;
            _this.miniPoker100 = _this.getLong();
            _this.miniPoker1000 = _this.getLong();
            _this.miniPoker10000 = _this.getLong();
            _this.pokeGo100 = _this.getLong();
            _this.pokeGo1000 = _this.getLong();
            _this.pokeGo10000 = _this.getLong();
            _this.khoBau100 = _this.getLong();
            _this.khoBau1000 = _this.getLong();
            _this.khoBau10000 = _this.getLong();
            _this.NDV100 = _this.getLong();
            _this.NDV1000 = _this.getLong();
            _this.NDV10000 = _this.getLong();
            _this.Avengers100 = _this.getLong();
            _this.Avengers1000 = _this.getLong();
            _this.Avengers10000 = _this.getLong();
            _this.Vqv100 = _this.getLong();
            _this.Vqv1000 = _this.getLong();
            _this.Vqv10000 = _this.getLong();
            _this.fish100 = _this.getLong();
            _this.fish1000 = _this.getLong();
            //spartan game
            _this.spartan100 = _this.getLong();
            _this.spartan1000 = _this.getLong();
            _this.spartan5000 = _this.getLong();
            _this.spartan10000 = _this.getLong();
            _this.caothap1000 = _this.getLong();
            _this.caothap10000 = _this.getLong();
            _this.caothap50000 = _this.getLong();
            _this.caothap100000 = _this.getLong();
            _this.caothap500000 = _this.getLong();
            return _this;
        }
        return ResUpdateJackpots;
    }(Network_InPacket_1.default));
    cmd.ResUpdateJackpots = ResUpdateJackpots;
    var ReqGetMoneyUse = /** @class */ (function (_super) {
        __extends(ReqGetMoneyUse, _super);
        function ReqGetMoneyUse() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.GET_MONEY_USE);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqGetMoneyUse;
    }(Network_OutPacket_1.default));
    cmd.ReqGetMoneyUse = ReqGetMoneyUse;
    var ResGetMoneyUse = /** @class */ (function (_super) {
        __extends(ResGetMoneyUse, _super);
        function ResGetMoneyUse(data) {
            var _this = _super.call(this, data) || this;
            _this.moneyUse = 0;
            _this.moneyUse = _this.getLong();
            return _this;
        }
        return ResGetMoneyUse;
    }(Network_InPacket_1.default));
    cmd.ResGetMoneyUse = ResGetMoneyUse;
    //slot
    var ReqSubcribeHallSlot = /** @class */ (function (_super) {
        __extends(ReqSubcribeHallSlot, _super);
        function ReqSubcribeHallSlot() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBCRIBE_HALL_SLOT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqSubcribeHallSlot;
    }(Network_OutPacket_1.default));
    cmd.ReqSubcribeHallSlot = ReqSubcribeHallSlot;
    var ReqUnSubcribeHallSlot = /** @class */ (function (_super) {
        __extends(ReqUnSubcribeHallSlot, _super);
        function ReqUnSubcribeHallSlot() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSUBCRIBE_HALL_SLOT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqUnSubcribeHallSlot;
    }(Network_OutPacket_1.default));
    cmd.ReqUnSubcribeHallSlot = ReqUnSubcribeHallSlot;
    var ResUpdateJackpotSlots = /** @class */ (function (_super) {
        __extends(ResUpdateJackpotSlots, _super);
        function ResUpdateJackpotSlots(data) {
            var _this = _super.call(this, data) || this;
            _this.pots = "";
            _this.pots = _this.getString();
            return _this;
        }
        return ResUpdateJackpotSlots;
    }(Network_InPacket_1.default));
    cmd.ResUpdateJackpotSlots = ResUpdateJackpotSlots;
    // cashout class
    var ReqCashoutCard = /** @class */ (function (_super) {
        __extends(ReqCashoutCard, _super);
        function ReqCashoutCard(telcoId, amount, quantity) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CASHOUT_CARD);
            _this.packHeader();
            _this.putString(telcoId);
            _this.putInt(amount);
            _this.putInt(quantity);
            _this.updateSize();
            return _this;
        }
        return ReqCashoutCard;
    }(Network_OutPacket_1.default));
    cmd.ReqCashoutCard = ReqCashoutCard;
    var ResCashoutCard = /** @class */ (function (_super) {
        __extends(ResCashoutCard, _super);
        function ResCashoutCard(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.currentMoney = 0;
            _this.listCard = "";
            _this.error = _this.getError();
            _this.currentMoney = _this.getLong();
            _this.listCard = _this.getString();
            return _this;
        }
        return ResCashoutCard;
    }(Network_InPacket_1.default));
    cmd.ResCashoutCard = ResCashoutCard;
    var ReqCashoutBank = /** @class */ (function (_super) {
        __extends(ReqCashoutBank, _super);
        function ReqCashoutBank(bankName, bankNumber, bankActName, amount) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CASHOUT_BANK);
            _this.packHeader();
            _this.putString(bankName);
            _this.putString(bankNumber);
            _this.putString(bankActName);
            _this.putInt(amount);
            _this.updateSize();
            return _this;
        }
        return ReqCashoutBank;
    }(Network_OutPacket_1.default));
    cmd.ReqCashoutBank = ReqCashoutBank;
    var ResCashoutBank = /** @class */ (function (_super) {
        __extends(ResCashoutBank, _super);
        //listCard = "";
        function ResCashoutBank(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.currentMoney = 0;
            _this.error = _this.getError();
            _this.currentMoney = _this.getLong();
            return _this;
            //this.listCard = this.getString();
        }
        return ResCashoutBank;
    }(Network_InPacket_1.default));
    cmd.ResCashoutBank = ResCashoutBank;
    var ReqCashoutMomo = /** @class */ (function (_super) {
        __extends(ReqCashoutMomo, _super);
        function ReqCashoutMomo(phoneNumber, amount) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CASHOUT_MOMO);
            _this.packHeader();
            _this.putString(phoneNumber);
            _this.putInt(amount);
            _this.updateSize();
            return _this;
        }
        return ReqCashoutMomo;
    }(Network_OutPacket_1.default));
    cmd.ReqCashoutMomo = ReqCashoutMomo;
    var ResCashoutMomo = /** @class */ (function (_super) {
        __extends(ResCashoutMomo, _super);
        function ResCashoutMomo(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.currentMoney = 0;
            _this.error = _this.getError();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ResCashoutMomo;
    }(Network_InPacket_1.default));
    cmd.ResCashoutMomo = ResCashoutMomo;
    var ReqChangeEmail = /** @class */ (function (_super) {
        __extends(ReqChangeEmail, _super);
        function ReqChangeEmail(email) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHANGE_EMAIL);
            _this.packHeader();
            _this.putString(email);
            _this.updateSize();
            return _this;
        }
        return ReqChangeEmail;
    }(Network_OutPacket_1.default));
    cmd.ReqChangeEmail = ReqChangeEmail;
    var ResChangeEmail = /** @class */ (function (_super) {
        __extends(ResChangeEmail, _super);
        function ResChangeEmail(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.email = "";
            _this.error = _this.getError();
            _this.email = _this.getString();
            return _this;
        }
        return ResChangeEmail;
    }(Network_InPacket_1.default));
    cmd.ResChangeEmail = ResChangeEmail;
    var ResLogin = /** @class */ (function (_super) {
        __extends(ResLogin, _super);
        function ResLogin(data) {
            var _this = _super.call(this, data) || this;
            ////Utils.Log("data====", data);
            _this.loginData = _this.getString();
            return _this;
            ////Utils.Log("loginData====", this.loginData);
        }
        return ResLogin;
    }(Network_InPacket_1.default));
    cmd.ResLogin = ResLogin;
    var SendScribe = /** @class */ (function (_super) {
        __extends(SendScribe, _super);
        function SendScribe() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.TX_SCRIBE);
            _this.packHeader();
            _this.putShort(Configs_1.default.GameId.TaiXiu);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendScribe;
    }(Network_OutPacket_1.default));
    cmd.SendScribe = SendScribe;
    var TXGameInfo = /** @class */ (function (_super) {
        __extends(TXGameInfo, _super);
        function TXGameInfo(data) {
            var _this = _super.call(this, data) || this;
            _this.gameId = 0;
            _this.moneyType = 0;
            _this.referenceId = 0;
            _this.remainTime = 0;
            _this.bettingState = false;
            _this.potTai = 0;
            _this.potXiu = 0;
            _this.betTai = 0;
            _this.betXiu = 0;
            _this.dice1 = 0;
            _this.dice2 = 0;
            _this.dice3 = 0;
            _this.remainTimeRutLoc = 0;
            _this.jpTai = 0;
            _this.jpXiu = 0;
            _this.gameId = _this.getShort();
            _this.moneyType = _this.getShort();
            _this.referenceId = _this.getLong();
            _this.remainTime = _this.getShort();
            _this.bettingState = _this.getBool();
            _this.potTai = _this.getLong();
            _this.potXiu = _this.getLong();
            _this.betTai = _this.getLong();
            _this.betXiu = _this.getLong();
            _this.dice1 = _this.getShort();
            _this.dice2 = _this.getShort();
            _this.dice3 = _this.getShort();
            _this.remainTimeRutLoc = _this.getShort();
            _this.jpTai = _this.getLong();
            _this.jpXiu = _this.getLong();
            return _this;
        }
        return TXGameInfo;
    }(Network_InPacket_1.default));
    cmd.TXGameInfo = TXGameInfo;
    var TXUpdateTime = /** @class */ (function (_super) {
        __extends(TXUpdateTime, _super);
        function TXUpdateTime(data) {
            var _this = _super.call(this, data) || this;
            _this.remainTime = 0;
            _this.bettingState = false;
            _this.potTai = 0;
            _this.potXiu = 0;
            _this.numBetTai = 0;
            _this.numBetXiu = 0;
            _this.remainTime = _this.getShort();
            _this.bettingState = _this.getBool();
            _this.potTai = _this.getLong();
            _this.potXiu = _this.getLong();
            _this.numBetTai = _this.getShort();
            _this.numBetXiu = _this.getShort();
            return _this;
        }
        return TXUpdateTime;
    }(Network_InPacket_1.default));
    cmd.TXUpdateTime = TXUpdateTime;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVFQUEwRDtBQUMxRCx5RUFBNEQ7QUFDNUQscURBQWdEO0FBQ2hEOzs7Ozs7OztJQVFJO0FBQ0osSUFBaUIsR0FBRyxDQXk4Qm5CO0FBejhCRCxXQUFpQixHQUFHO0lBQ2hCO1FBQUE7UUF3REEsQ0FBQztRQXZEbUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGdDQUEyQixHQUFHLElBQUksQ0FBQyxDQUFBLE9BQU87UUFDMUMsZ0NBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUEsVUFBVTtRQUM5QyxnQ0FBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQSxtQkFBbUI7UUFDdkQsZ0NBQTJCLEdBQUcsSUFBSSxDQUFDLENBQUEsV0FBVztRQUM5QyxnQ0FBMkIsR0FBRyxJQUFJLENBQUMsQ0FBQSxTQUFTO1FBQzVDLGdDQUEyQixHQUFHLElBQUksQ0FBQyxDQUFBLG1CQUFtQjtRQUN0RCxpQ0FBNEIsR0FBRyxJQUFJLENBQUMsQ0FBQSxNQUFNO1FBQzFDLGlDQUE0QixHQUFHLEtBQUssQ0FBQyxDQUFBLFFBQVE7UUFDN0Msb0NBQStCLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLGtDQUE2QixHQUFHLElBQUksQ0FBQztRQUNyQyxxQ0FBZ0MsR0FBRyxJQUFJLENBQUM7UUFDeEMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FB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QUFHLENBQUMsQ0FBQztZQUlWLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUNyQyxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQWpCQSxBQWlCQyxDQWpCaUMsMEJBQVEsR0FpQnpDO0lBakJZLGdCQUFZLGVBaUJ4QixDQUFBO0FBQ0wsQ0FBQyxFQXo4QmdCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQXk4Qm5CO0FBRUQsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5PdXRQYWNrZXRcIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG4vKm5hbWUgZ2FtZSA6XG4gIHNwYXJ0YW5zLVRoYW50YWlcbiAgQkVOTEVZOmJpdGNvaW5cbiAgYXVkaXRpb246ZHVheGVcbiAgbWF5YmFjaDp0aGV0aGFvXG4gIHRhbWh1bmc6Y2hpbWRpZW5cbiAgY2hpZW10aW5oOmNoaWVtdGluaFxuICBSb2xsUm95Y2U6VGhhbkJhaVxuICAqL1xuZXhwb3J0IG5hbWVzcGFjZSBjbWQge1xuICAgIGV4cG9ydCBjbGFzcyBDb2RlIHtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFVQREFURV9USU1FX0JVVFRPTiA9IDIxMjQ7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBOT1RJRllfTUFSUVVFRSA9IDIwMTAwO1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgVVBEQVRFX0JJR1dJTl9KQUNLUE9UX1NMT1QxID0gMjAxMDsvL0R1YXhlXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBVUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDMgPSAxMjAxMDsvL3RoYW4gdGFpXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBVUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDQgPSAxNDAxMDsvL0NoaW0gRGllbi10YW1odW5nXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBVUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDUgPSA2MDEwOy8vY2hpZW10aW5oXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBVUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDcgPSA0MDEwOy8vQml0Y29pblxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgVVBEQVRFX0JJR1dJTl9KQUNLUE9UX1NMT1Q4ID0gNTAxMDsvL1RoYW5CYWktUm9sbFJveWNlXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBVUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDEwID0gMzAxMDsvL0V1cm9cbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFVQREFURV9CSUdXSU5fSkFDS1BPVF9TTE9UMTEgPSAxNjAxMDsvL2Jpa2luaVxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgVVBEQVRFX0JJR1dJTl9KQUNLUE9UX01JTklQT0tFUiA9IDQwMTA7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBVUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDNYMyA9IDcwMTA7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBVUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDN4M0dFTSA9IDgwMTA7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBJTlNFUlRfR0lGVENPREUgPSAyMDAxNztcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IERFUE9TSVRfQ0FSRCA9IDIwMDEyO1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQ0hFQ0tfTklDS05BTUVfVFJBTlNGRVIgPSAyMDAxODtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFNVQkNSSUJFX0hBTExfU0xPVCA9IDEwMDAxO1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgVU5TVUJDUklCRV9IQUxMX1NMT1QgPSAxMDAwMjtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFVQREFURV9KQUNLUE9UX1NMT1RTID0gMTAwMDM7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTUElOX0xVQ0tZX1dIRUVMID0gMjAwNDI7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBHRVRfU0VDVVJJVFlfSU5GTyA9IDIwMDUwO1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX0VNQUlMID0gMjAwMDM7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBVUERBVEVfVVNFUl9JTkZPID0gMjAwMDI7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBHRVRfT1RQID0gMjAyMjA7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTRU5EX09UUCA9IDIwMDE5O1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgR0VUX0xJU1RfUVVFU1QgPSAyMTAwMDtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFJFQ0VJVkVfTElTVF9RVUVTVCA9IDIxMDAxO1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgUkVTVUxUX0FDVElWRV9NT0JJTEUgPSAyMDAyNjtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFJFU1VMVF9BQ1RJVkVfTkVXX01PQklMRSA9IDIwMDI4O1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgUkVTVUxUX0NIQU5HRV9NT0JJTEVfQUNUSVZFRCA9IDIwMDI3O1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQUNUSVZFX1BIT05FID0gMjAwMDY7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBDSEFOR0VfUEhPTkVfTlVNQkVSID0gMjAwMDc7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBUUkFOU0ZFUl9DT0lOID0gMjAwMTQ7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBSRVNVTFRfVFJBTlNGRVJfQ09JTiA9IDIwMDM0O1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgU0FGRVMgPSAyMDAwOTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFJFU1VMVF9TQUZFUyA9IDIwMDI5O1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1BBU1NXT1JEID0gMjAwMDA7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBSRVNVTFRfQ0hBTkdFX1BBU1NXT1JEID0gMjAwMjA7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFWENIQU5HRV9WSVBfUE9JTlQgPSAyMDAwMTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFJFU1VMVF9FWENIQU5HRV9WSVBfUE9JTlQgPSAyMDAyMTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFVQREFURV9KQUNLUE9UUyA9IDIwMTAxO1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgU1VCQ1JJQkVfSkFDUE9SVFMgPSAyMDEwMjtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFVOU1VCQ1JJQkVfSkFDUE9SVFMgPSAyMDEwMztcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEdFVF9NT05FWV9VU0UgPSAyMDA1MTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IERFUE9TSVRfQkFOSyA9IDIwMjAxO1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgREVQT1NJVF9NT01PID0gMjAyMDI7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBMT0dPVVQgPSAyO1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgTE9HSU4gPSAxO1xuXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBDQVNIT1VUX0NBUkQgPSAyMDIxMTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IENBU0hPVVRfQkFOSyA9IDIwMjE5O1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQ0FTSE9VVF9NT01PID0gMjAyMTU7XG5cdFx0c3RhdGljIHJlYWRvbmx5IFRYX0dBTUVfSU5GTyA9IDIxMTE7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBUWF9VUERBVEVfSU5GTyA9IDIxMTI7XG5cdFx0c3RhdGljIHJlYWRvbmx5IFRYX1NDUklCRSA9IDIwMDA7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVcGRhdGVUaW1lQnV0dG9uIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByZW1haW5UaW1lID0gMDtcbiAgICAgICAgYmV0dGluZ1N0YXRlID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0dGluZ1N0YXRlID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVxSW5zZXJ0R2lmdGNvZGUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihjb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5JTlNFUlRfR0lGVENPREUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhjb2RlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlc0luc2VydEdpZnRjb2RlIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leVZpbiA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leVh1ID0gMDtcbiAgICAgICAgbW9uZXlHaWZ0Q29kZVZpbiA9IDA7XG4gICAgICAgIG1vbmV5R2lmdENvZGVYdSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXlWaW4gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5WHUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlHaWZ0Q29kZVZpbiA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5tb25leUdpZnRDb2RlWHUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXFEZXBvc2l0Q2FyZCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRlbGNvSWQ6IG51bWJlciwgc2VyaWFsOiBzdHJpbmcsIGNvZGU6IHN0cmluZywgYW1vdW50OiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5ERVBPU0lUX0NBUkQpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUodGVsY29JZCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhzZXJpYWwpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoY29kZSk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhhbW91bnQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlcURlcG9zaXRCYW5rIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYmFua051bWJlcjogc3RyaW5nLCBhbW91bnQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkRFUE9TSVRfQkFOSyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGJhbmtOdW1iZXIpXG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoYW1vdW50KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXNEZXBvc2l0QmFuayBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZXJyb3IgPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSAwO1xuICAgICAgICB0aW1lRmFpbCA9IDA7XG4gICAgICAgIG51bUZhaWwgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVGYWlsID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm51bUZhaWwgPSB0aGlzLmdldEludCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXFEZXBvc2l0TW9tbyBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGFtb3VudDogbnVtYmVyLCBwaG9uZVNlbnQ6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkRFUE9TSVRfTU9NTyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5wdXRMb25nKGFtb3VudCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhwaG9uZVNlbnQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlc0RlcG9zaXRNb21vIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIHRpbWVGYWlsID0gMDtcbiAgICAgICAgbnVtRmFpbCA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMudGltZUZhaWwgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubnVtRmFpbCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVzRGVwb3NpdENhcmQgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGVycm9yID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gMDtcbiAgICAgICAgdGltZUZhaWwgPSAwO1xuICAgICAgICBudW1GYWlsID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy50aW1lRmFpbCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5udW1GYWlsID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXFDaGVja05pY2tuYW1lVHJhbnNmZXIgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihuaWNrbmFtZTogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ0hFQ0tfTklDS05BTUVfVFJBTlNGRVIpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhuaWNrbmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXNDaGVja05pY2tuYW1lVHJhbnNmZXIgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGVycm9yID0gMDtcbiAgICAgICAgdHlwZSA9IDA7XG4gICAgICAgIGZlZSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmZlZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcVNwaW5MdWNreVdoZWVsIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1BJTl9MVUNLWV9XSEVFTCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlc1NwaW5MdWNreVdoZWVsIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIHByaXplVmluID0gXCJcIjtcbiAgICAgICAgcHJpemVYdSA9IFwiXCI7XG4gICAgICAgIHByaXplU2xvdCA9IFwiXCI7XG4gICAgICAgIHJlbWFpbkNvdW50ID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5VmluID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5WHUgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMucHJpemVWaW4gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5wcml6ZVh1ID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucHJpemVTbG90ID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmVtYWluQ291bnQgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leVZpbiA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXlYdSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcUdldFNlY3VyaXR5SW5mbyBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkdFVF9TRUNVUklUWV9JTkZPKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVzR2V0TGlzdFF1ZXN0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIGJmID0gXCJcIjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgICAgICB0aGlzLmJmID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlc1JlY2VpdmVMaXN0UXVlc3QgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGVycm9yID0gMDtcbiAgICAgICAgaXNTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTdWNjZXNzID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGV4cG9ydCBjbGFzcyBSZXNHZXRTZWN1cml0eUluZm8gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGVycm9yID0gMDtcbiAgICAgICAgdXNlcm5hbWUgPSBcIlwiO1xuICAgICAgICBjbXQgPSBcIlwiO1xuICAgICAgICBlbWFpbCA9IFwiXCI7XG4gICAgICAgIG1vYmlsZSA9IFwiXCI7XG4gICAgICAgIGlzVmVyaWZ5UGhvbmUgPSBmYWxzZTtcbiAgICAgICAgdXNlcnR5cGUgPSBcIlwiO1xuICAgICAgICByZWZmZXJhbENvZGUgPSBcIlwiO1xuICAgICAgICBtb2JpbGVTZWN1cmUgPSAwO1xuICAgICAgICBlbWFpbFNlY3VyZSA9IDA7XG4gICAgICAgIGFwcFNlY3VyZSA9IDA7XG4gICAgICAgIGxvZ2luU2VjdXJlID0gMDtcbiAgICAgICAgbW9uZXlMb2dpbk90cCA9IDA7XG4gICAgICAgIG1vbmV5VXNlID0gMDtcbiAgICAgICAgc2FmZSA9IDA7XG4gICAgICAgIGNvbmZpZ0dhbWUgPSBcIlwiO1xuICAgICAgICBhZGRyZXNzID0gXCJcIjtcbiAgICAgICAgYmlydGhkYXkgPSBcIlwiO1xuICAgICAgICBnZW5kZXI9dHJ1ZTtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY210ID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5tb2JpbGUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5pc1ZlcmlmeVBob25lID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLnVzZXJ0eXBlID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmVmZmVyYWxDb2RlID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlU2VjdXJlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmVtYWlsU2VjdXJlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmFwcFNlY3VyZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpblNlY3VyZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5tb25leUxvZ2luT3RwID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5VXNlID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnNhZmUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnR2FtZSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmJpcnRoZGF5ID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmdlbmRlciA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcVVwZGF0ZVVzZXJJbmZvIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IobWFpbDogc3RyaW5nLCBiaXJ0aGRheTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsZ2VuZGVyOiBudW1iZXIscmVmQ29kZTpzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5VUERBVEVfVVNFUl9JTkZPKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoXCJcIik7Ly9jbXRcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKG1haWwpOy8vbWFpbFxuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoXCJcIik7IFxuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYmlydGhkYXkpOy8vYmlydGhcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGFkZHJlc3MpOy8vYWRkcmVzc1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoZ2VuZGVyKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKHJlZkNvZGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlc1VwZGF0ZVVzZXJJbmZvIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcUdldE9UUCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkdFVF9PVFApO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVzR2V0T1RQIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcVNlbmREaWVtRGFuaCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG90cDogc3RyaW5nLCB0eXBlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5TRU5EX09UUCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKG90cCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUodHlwZSk7Ly8wOiBzbXMsIDE6IHRlbGVncmFtXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXFHZXRMaXN0UXVlc3QgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5HRVRfTElTVF9RVUVTVCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcVJlY2VpdmVRdWVzdCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGluZGV4KSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJSZXFSZWNlaXZlUXVlc3RcIik7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5SRUNFSVZFX0xJU1RfUVVFU1QpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcVNlbmRPVFAgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihvdHA6IHN0cmluZywgdHlwZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU0VORF9PVFApO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhvdHApO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKHR5cGUpOy8vMDogc21zLCAxOiB0ZWxlZ3JhbVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGV4cG9ydCBjbGFzcyBSZXNTZW5kT1RQIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlc1Jlc3VsdEFjdGl2ZU1vYmllIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlc1Jlc3VsdEFjdGl2ZU5ld01vYmllIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcUNoYW5nZVBob25lTnVtYmVyIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IocGhvbmVOdW1iZXI6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNIQU5HRV9QSE9ORV9OVU1CRVIpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhwaG9uZU51bWJlcik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVzQ2hhbmdlUGhvbmVOdW1iZXIgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGVycm9yID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVxQWN0aXZlUGhvbmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5BQ1RJVkVfUEhPTkUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVzQWN0aXZlUGhvbmUgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGVycm9yID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVxVHJhbnNmZXJDb2luIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3Iobmlja25hbWU6IHN0cmluZywgY29pbjogbnVtYmVyLCBub3RlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5UUkFOU0ZFUl9DT0lOKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcobmlja25hbWUpO1xuICAgICAgICAgICAgdGhpcy5wdXRMb25nKGNvaW4pO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KG5vdGUpKSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVzVHJhbnNmZXJDb2luIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIG1vbmV5VXNlID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5VXNlID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlc1Jlc3VsdFRyYW5zZmVyQ29pbiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZXJyb3IgPSAwO1xuICAgICAgICBtb25leVVzZSA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5tb25leVVzZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXFTYWZlcyBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNvaW46IG51bWJlciwgYWN0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5TQUZFUyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhY3Rpb24pOy8vMDogcsO6dCwgMTogbuG6oXBcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZyhjb2luKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXNTYWZlcyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZXJyb3IgPSAwO1xuICAgICAgICBtb25leVVzZSA9IDA7XG4gICAgICAgIHNhZmUgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlVc2UgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuc2FmZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXNSZXN1bHRTYWZlcyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZXJyb3IgPSAwO1xuICAgICAgICBtb25leVVzZSA9IDA7XG4gICAgICAgIHNhZmUgPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlVc2UgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuc2FmZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXFDaGFuZ2VQYXNzd29yZCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG9sZFBhc3N3b3JkOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFOR0VfUEFTU1dPUkQpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhtZDUob2xkUGFzc3dvcmQpKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKG1kNShuZXdQYXNzd29yZCkpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlc0NoYW5nZVBhc3N3b3JkIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXNSZXN1bHRDaGFuZ2VQYXNzd29yZCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZXJyb3IgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXFFeGNoYW5nZVZpcFBvaW50IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuRVhDSEFOR0VfVklQX1BPSU5UKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlc0V4Y2hhbmdlVmlwUG9pbnQgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGVycm9yID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlc1Jlc3VsdEV4Y2hhbmdlVmlwUG9pbnQgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGVycm9yID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gMDtcbiAgICAgICAgbW9uZXlBZGQgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5QWRkID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXNOb3RpZnlNYXJxdWVlIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBtZXNzYWdlID0gXCJcIjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVzTm90aWZ5SmFja3BvdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgdXNlcm5hbWUgPSBcIlwiO1xuICAgICAgICB0eXBlID0gMDtcbiAgICAgICAgYmV0VmFsdWUgPSAwO1xuICAgICAgICB0b3RhbFByaXplcyA9IDA7XG4gICAgICAgIHRpbWVzdGFtcCA9IFwiXCI7XG5cblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmJldFZhbHVlID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy50b3RhbFByaXplcyA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcVN1YmNyaWJlSmFja3BvdHMgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5TVUJDUklCRV9KQUNQT1JUUyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXFVblN1YmNyaWJlSmFja3BvdHMgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5VTlNVQkNSSUJFX0pBQ1BPUlRTKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlc1VwZGF0ZUphY2twb3RzIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBtaW5pUG9rZXIxMDAgPSAwO1xuICAgICAgICBtaW5pUG9rZXIxMDAwID0gMDtcbiAgICAgICAgbWluaVBva2VyMTAwMDAgPSAwO1xuICAgICAgICBwb2tlR28xMDAgPSAwO1xuICAgICAgICBwb2tlR28xMDAwID0gMDtcbiAgICAgICAgcG9rZUdvMTAwMDAgPSAwO1xuICAgICAgICBraG9CYXUxMDAgPSAwO1xuICAgICAgICBraG9CYXUxMDAwID0gMDtcbiAgICAgICAga2hvQmF1MTAwMDAgPSAwO1xuICAgICAgICBORFYxMDAgPSAwO1xuICAgICAgICBORFYxMDAwID0gMDtcbiAgICAgICAgTkRWMTAwMDAgPSAwO1xuICAgICAgICBBdmVuZ2VyczEwMCA9IDA7XG4gICAgICAgIEF2ZW5nZXJzMTAwMCA9IDA7XG4gICAgICAgIEF2ZW5nZXJzMTAwMDAgPSAwO1xuICAgICAgICBWcXYxMDAgPSAwO1xuICAgICAgICBWcXYxMDAwID0gMDtcbiAgICAgICAgVnF2MTAwMDAgPSAwO1xuICAgICAgICBmaXNoMTAwID0gMDtcbiAgICAgICAgZmlzaDEwMDAgPSAwO1xuXHRcdGNhb3RoYXAxMDAwID0gMDtcbiAgICAgICAgY2FvdGhhcDEwMDAwID0gMDtcbiAgICAgICAgY2FvdGhhcDUwMDAwID0gMDtcbiAgICAgICAgY2FvdGhhcDEwMDAwMCA9IDA7XG4gICAgICAgIGNhb3RoYXA1MDAwMDAgPSAwO1xuXG4gICAgICAgIC8vc3BhcnRhblxuICAgICAgICBzcGFydGFuMTAwID0gMDtcbiAgICAgICAgc3BhcnRhbjEwMDAgPSAwO1xuICAgICAgICBzcGFydGFuNTAwMCA9IDA7XG4gICAgICAgIHNwYXJ0YW4xMDAwMCA9IDA7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5taW5pUG9rZXIxMDAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubWluaVBva2VyMTAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5taW5pUG9rZXIxMDAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5wb2tlR28xMDAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucG9rZUdvMTAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5wb2tlR28xMDAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5raG9CYXUxMDAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMua2hvQmF1MTAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5raG9CYXUxMDAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5ORFYxMDAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuTkRWMTAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5ORFYxMDAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5BdmVuZ2VyczEwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5BdmVuZ2VyczEwMDAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuQXZlbmdlcnMxMDAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5WcXYxMDAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuVnF2MTAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5WcXYxMDAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5maXNoMTAwID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmZpc2gxMDAwID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICAvL3NwYXJ0YW4gZ2FtZVxuICAgICAgICAgICAgdGhpcy5zcGFydGFuMTAwID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnNwYXJ0YW4xMDAwID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnNwYXJ0YW41MDAwID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnNwYXJ0YW4xMDAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuXHRcdFx0dGhpcy5jYW90aGFwMTAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5jYW90aGFwMTAwMDAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY2FvdGhhcDUwMDAwID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmNhb3RoYXAxMDAwMDAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY2FvdGhhcDUwMDAwMCA9IHRoaXMuZ2V0TG9uZygpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlcUdldE1vbmV5VXNlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuR0VUX01PTkVZX1VTRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXNHZXRNb25leVVzZSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbW9uZXlVc2UgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5tb25leVVzZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8vc2xvdFxuICAgIGV4cG9ydCBjbGFzcyBSZXFTdWJjcmliZUhhbGxTbG90IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1VCQ1JJQkVfSEFMTF9TTE9UKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlcVVuU3ViY3JpYmVIYWxsU2xvdCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlVOU1VCQ1JJQkVfSEFMTF9TTE9UKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlc1VwZGF0ZUphY2twb3RTbG90cyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcG90cyA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnBvdHMgPSB0aGlzLmdldFN0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYXNob3V0IGNsYXNzXG5cbiAgICBleHBvcnQgY2xhc3MgUmVxQ2FzaG91dENhcmQgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0ZWxjb0lkOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ0FTSE9VVF9DQVJEKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuXG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyh0ZWxjb0lkKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KGFtb3VudCk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChxdWFudGl0eSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXNDYXNob3V0Q2FyZCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZXJyb3IgPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSAwO1xuICAgICAgICBsaXN0Q2FyZCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubGlzdENhcmQgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlcUNhc2hvdXRCYW5rIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYmFua05hbWU6IHN0cmluZywgYmFua051bWJlcjogc3RyaW5nLCBiYW5rQWN0TmFtZTogc3RyaW5nLCBhbW91bnQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNBU0hPVVRfQkFOSyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYmFua05hbWUpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYmFua051bWJlcik7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhiYW5rQWN0TmFtZSk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChhbW91bnQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVzQ2FzaG91dEJhbmsgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGVycm9yID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gMDtcbiAgICAgICAgLy9saXN0Q2FyZCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIC8vdGhpcy5saXN0Q2FyZCA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVxQ2FzaG91dE1vbW8gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihwaG9uZU51bWJlcjogc3RyaW5nLCBhbW91bnQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNBU0hPVVRfTU9NTyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcocGhvbmVOdW1iZXIpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoYW1vdW50KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlc0Nhc2hvdXRNb21vIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVxQ2hhbmdlRW1haWwgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihlbWFpbDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ0hBTkdFX0VNQUlMKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoZW1haWwpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlc0NoYW5nZUVtYWlsIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIGVtYWlsID0gXCJcIjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5lbWFpbCA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVzTG9naW4gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGxvZ2luRGF0YTogc3RyaW5nO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJkYXRhPT09PVwiLCBkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRhID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwibG9naW5EYXRhPT09PVwiLCB0aGlzLmxvZ2luRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuZXhwb3J0IGNsYXNzIFNlbmRTY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5UWF9TQ1JJQkUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KENvbmZpZ3MuR2FtZUlkLlRhaVhpdSk7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgVFhHYW1lSW5mbyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZ2FtZUlkID0gMDtcbiAgICAgICAgbW9uZXlUeXBlID0gMDtcbiAgICAgICAgcmVmZXJlbmNlSWQgPSAwO1xuICAgICAgICByZW1haW5UaW1lID0gMDtcbiAgICAgICAgYmV0dGluZ1N0YXRlID0gZmFsc2U7XG4gICAgICAgIHBvdFRhaSA9IDA7XG4gICAgICAgIHBvdFhpdSA9IDA7XG4gICAgICAgIGJldFRhaSA9IDA7XG4gICAgICAgIGJldFhpdSA9IDA7XG4gICAgICAgIGRpY2UxID0gMDtcbiAgICAgICAgZGljZTIgPSAwO1xuICAgICAgICBkaWNlMyA9IDA7XG4gICAgICAgIHJlbWFpblRpbWVSdXRMb2MgPSAwO1xuICAgICAgICBqcFRhaSA9IDA7XG4gICAgICAgIGpwWGl1ID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5tb25leVR5cGUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZUlkID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmJldHRpbmdTdGF0ZSA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5wb3RUYWkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucG90WGl1ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmJldFRhaSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5iZXRYaXUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZGljZTEgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmRpY2UyID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMyA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVtYWluVGltZVJ1dExvYyA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuanBUYWkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuanBYaXUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBUWFVwZGF0ZVRpbWUgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHJlbWFpblRpbWUgPSAwO1xuICAgICAgICBiZXR0aW5nU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgcG90VGFpID0gMDtcbiAgICAgICAgcG90WGl1ID0gMDtcbiAgICAgICAgbnVtQmV0VGFpID0gMDtcbiAgICAgICAgbnVtQmV0WGl1ID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVtYWluVGltZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0dGluZ1N0YXRlID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLnBvdFRhaSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5wb3RYaXUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubnVtQmV0VGFpID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5udW1CZXRYaXUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNtZDtcbiJdfQ==