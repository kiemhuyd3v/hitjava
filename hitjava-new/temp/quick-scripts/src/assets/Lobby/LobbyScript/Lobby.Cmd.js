"use strict";
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