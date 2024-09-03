
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/Configs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8b148ShhNECLRCMfJf61sO', 'Configs');
// Loading/src/Configs.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import SPUtils from "../../Lobby/LobbyScript/Script/common/SPUtils";
var VersionConfig_1 = require("./VersionConfig");
var Configs;
(function (Configs) {
    var Login = /** @class */ (function () {
        function Login() {
        }
        Login.clear = function () {
            this.UserId = 0;
            this.Username = "";
            this.Password = "";
            this.Nickname = "";
            this.Avatar = "";
            this.Mail = "";
            this.Coin = 0;
            this.IsLogin = false;
            this.AccessToken = "";
            this.AccessToken2 = "";
            this.AccessTokenSockJs = "";
            this.SessionKey = "";
            this.CreateTime = "";
            this.Birthday = "";
            this.IpAddress = "";
            this.VipPoint = 0;
            this.VipPointSave = 0;
            this.CoinFish = 0;
            this.UserIdFish = 0;
            this.UsernameFish = "";
            this.PasswordFish = "";
            this.BitcoinToken = "";
            //    SPUtils.setUserPass("");
        };
        Login.getVipPointName = function () {
            for (var i = this.VipPoints.length - 1; i >= 0; i--) {
                if (Configs.Login.VipPoint > this.VipPoints[i]) {
                    return this.VipPointsName[i + 1];
                }
            }
            return this.VipPointsName[0];
        };
        Login.GetListMailNew = function () {
            if (this.ListMail == null || this.ListMail.length == 0) {
                return 0;
            }
            var number = 0;
            for (var i = 0; i < this.ListMail.length; i++) {
                if (this.ListMail[i].status == 0) {
                    number++;
                }
            }
            return number;
        };
        Login.getVipPointNextLevel = function () {
            for (var i = this.VipPoints.length - 1; i >= 0; i--) {
                if (Configs.Login.VipPoint > this.VipPoints[i]) {
                    if (i == this.VipPoints.length - 1) {
                        return this.VipPoints[i];
                    }
                    return this.VipPoints[i + 1];
                }
            }
            return this.VipPoints[0];
        };
        Login.getVipPointIndex = function () {
            for (var i = this.VipPoints.length - 1; i >= 0; i--) {
                if (Configs.Login.VipPoint > this.VipPoints[i]) {
                    return i;
                }
            }
            return 0;
        };
        Login.UserId = 0;
        Login.Username = "";
        Login.Password = "";
        Login.Nickname = "";
        Login.Avatar = "";
        Login.Coin = 0;
        Login.IsLogin = false;
        Login.AccessToken = "";
        Login.AccessToken2 = "";
        Login.AccessTokenSockJs = "";
        Login.AccessTokenFB = "";
        Login.FacebookID = "";
        Login.SessionKey = "";
        Login.LuckyWheel = 0;
        Login.CreateTime = "";
        Login.Birthday = "";
        Login.IpAddress = "";
        Login.VipPoint = 0;
        Login.Address = "";
        Login.VipPointSave = 0;
        Login.Mail = "";
        Login.Gender = true;
        Login.RefferalCode = "";
        Login.CoinFish = 0;
        Login.UserIdFish = 0;
        Login.UsernameFish = "";
        Login.PasswordFish = "";
        Login.FishConfigs = null;
        Login.BitcoinToken = "";
        Login.UserType = "0";
        Login.ListBankRut = null;
        Login.ListPayment = null;
        Login.ClickPayPayment = null;
        Login.CACHE_AG = false;
        Login.CACHE_IBC = false;
        Login.CACHE_WM = false;
        Login.ListMail = null;
        Login.VipPoints = [80, 800, 4500, 8600, 12000, 50000, 1000000, 2000000, 5000000];
        Login.VipPointsName = ["Đá", "Đồng", "Bạc", "Vàng", "BK1", "BK2", "KC1", "KC2", "KC3"];
        return Login;
    }());
    Configs.Login = Login;
    var App = /** @class */ (function () {
        function App() {
        }
        App.getServerConfig = function () {
        };
        App.getPlatformName = function () {
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID)
                return "android";
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS)
                return "ios";
            return "web";
        };
        App.getLinkFanpage = function () {
            switch (VersionConfig_1.default.CPName) {
                default:
                    return "https://www.facebook.com/6789";
            }
        };
        App.getLinkTelegram = function () {
            switch (VersionConfig_1.default.CPName) {
                default:
                    return "https://t.me/hqgamehotro";
            }
        };
        App.getLinkTelegramGroup = function () {
            switch (VersionConfig_1.default.CPName) {
                default:
                    return "https://t.me/hqgamehotro";
            }
        };
        App.init = function () {
            //  cc.log("init config vao day casi sakdjas");
            switch (VersionConfig_1.default.ENV) {
                case VersionConfig_1.default.ENV_DEV:
                    this.USE_WSS = true;
                    this.API = "https://iportal." + VersionConfig_1.default.DOMAIN_DEV + "/api";
                    this.MONEY_TYPE = 1;
                    this.LINK_DOWNLOAD = "https://" + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.LINK_EVENT = "https://" + VersionConfig_1.default.DOMAIN_DEV + "/event";
                    this.HOST_MINIGAME.host = "wmini." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_MINIGAME2.host = "lol." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_TAI_XIU_MINI2.host = "overunder." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_SLOT.host = "wslot." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_TLMN.host = "wtlmn." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_SHOOT_FISH.host = "wbanca." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_SAM.host = "wsam." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_XOCDIA.host = "wxocdia." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_BACAY.host = "wbacay." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_BAICAO.host = "wbaicao." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_POKER.host = "wpoker." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_XIDACH.host = "wxizach." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_BINH.host = "wbinh." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_LIENG.host = "wlieng." + VersionConfig_1.default.DOMAIN_DEV + "";
                    //  cc.log(VersionConfig.ENV);
                    break;
                case VersionConfig_1.default.ENV_PROD:
                    this.USE_WSS = true;
                    this.API = "https://iportal." + VersionConfig_1.default.DOMAIN_PRO + "/api";
                    this.MONEY_TYPE = 1;
                    this.LINK_DOWNLOAD = "https://" + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.LINK_EVENT = "https://" + VersionConfig_1.default.DOMAIN_PRO + "/event";
                    this.HOST_MINIGAME.host = "wmini." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_MINIGAME2.host = "lol." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_TAI_XIU_MINI2.host = "overunder." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_SLOT.host = "wslot." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_TLMN.host = "wtlmn." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_SHOOT_FISH.host = "wbanca." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_SAM.host = "wsam." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_XOCDIA.host = "wxocdia." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_BACAY.host = "wbacay." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_BAICAO.host = "wbaicao." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_POKER.host = "wpoker." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_XIDACH.host = "wxizach." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_BINH.host = "wbinh." + VersionConfig_1.default.DOMAIN_PRO + "";
                    this.HOST_LIENG.host = "wlieng." + VersionConfig_1.default.DOMAIN_PRO + "";
                    //  cc.log(VersionConfig.ENV);
                    break;
                default:
                    this.USE_WSS = true;
                    this.API = "https://iportal." + VersionConfig_1.default.DOMAIN_DEV + "/api";
                    this.MONEY_TYPE = 1;
                    this.LINK_DOWNLOAD = "https://" + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.LINK_EVENT = "https://" + VersionConfig_1.default.DOMAIN_DEV + "/event";
                    this.HOST_MINIGAME.host = "wmini." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_MINIGAME2.host = "lol." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_TAI_XIU_MINI2.host = "overunder." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_SLOT.host = "wslot." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_TLMN.host = "wtlmn." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_SHOOT_FISH.host = "wbanca." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_SAM.host = "wsam." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_XOCDIA.host = "wxocdia." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_BACAY.host = "wbacay." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_BAICAO.host = "wbaicao." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_POKER.host = "wpoker." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_XIDACH.host = "wxizach." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_BINH.host = "wbinh." + VersionConfig_1.default.DOMAIN_DEV + "";
                    this.HOST_LIENG.host = "wlieng." + VersionConfig_1.default.DOMAIN_DEV + "";
                    break;
            }
        };
        // 43.128.27.35
        App.IS_LOCAL = true;
        App.IS_PRO = true;
        App.API = "https://iportal.FANVIN.wIN/api";
        App.API2 = "https://iportal2.FANVIN.wIN/api";
        App.APIROY = "https://portal.FANVIN.wIN/api";
        App.API_PAYIN_PAYWELL_BANKS = "https://iportal.FANVIN.wIN/api/payin/paywell/banks";
        App.MONEY_TYPE = 1;
        App.LINK_DOWNLOAD = "https://FANVIN.wIN/download";
        App.LINK_EVENT = "https://FANVIN.wIN/event";
        App.LINK_SUPPORT = "https://FANVIN.wIN";
        App.USE_WSS = false;
        App.LINK_GROUP = "https://www.facebook.com/groups/bao99.vip";
        App.FB_APPID = "758971848112749";
        App.AGENCY_CODE = "";
        App.options = {
            rememberUpgrade: true,
            transports: ['websocket'],
            secure: true,
            rejectUnauthorized: false,
            reconnection: true,
            autoConnect: true,
            auth: {
                token: "WERTWER34534FGHFGBFVBCF345234XCVASD"
            }
        };
        App.VERSION_APP = "1.0.3";
        App.GameName = {
            110: "Đua Xe",
            170: "Crypto",
            2: "Tài Xỉu",
            5: "Xèng",
            11: "Tiến Lên",
            160: "Chim Điên",
            120: "Thần Tài",
            150: "Thể Thao",
            1: "MiniPoker",
            3: "Bầu Cua",
            9: "Ba Cây",
            4: "Cao Thấp",
            191: "Chiêm Tinh",
            190: "Tài Xỉu Siêu Tốc",
            12: "Xóc Đĩa",
            180: "Thần Bài",
            197: "Bikini"
        };
        App.HOST_MINIGAME = {
            host: "",
            port: 443
        };
        App.HOST_MINIGAME2 = {
            host: "",
            port: 443
        };
        App.HOST_TAI_XIU_MINI2 = {
            host: "",
            port: 443
        };
        App.HOST_SLOT = {
            host: "",
            port: 443
        };
        App.HOST_TLMN = {
            host: "",
            port: 443
        };
        App.HOST_SHOOT_FISH = {
            host: "",
            port: 443
        };
        App.HOST_SAM = {
            host: "",
            port: 443
        };
        App.HOST_XOCDIA = {
            host: "",
            port: 443
        };
        App.HOST_BACAY = {
            host: "",
            port: 443
        };
        App.HOST_BAICAO = {
            host: "",
            port: 443
        };
        App.HOST_POKER = {
            host: "",
            port: 443
        };
        App.HOST_XIDACH = {
            host: "",
            port: 443
        };
        App.HOST_BINH = {
            host: "",
            port: 443
        };
        App.HOST_LIENG = {
            host: "",
            port: 443
        };
        App.SERVER_CONFIG = {
            ratioNapThe: 1,
            ratioNapMomo: 1.2,
            ratioTransfer: 0.98,
            ratioTransferDL: 1,
            listTenNhaMang: ["Viettel", "Vinaphone", "Mobifone", "Vietnamobile"],
            listIdNhaMang: [0, 1, 2, 3],
            listMenhGiaNapThe: [10000, 20000, 30000, 50000, 100000, 200000, 500000],
            ratioRutThe: 1.2
        };
        App.CASHOUT_CARD_CONFIG = {
            listTenNhaMang: ["Viettel", "Vinaphone", "Mobifone", "Vietnamobile", "Garena", "Vcoin", "FPT Gate", "Mobi Data"],
            listIdNhaMang: ["VTT", "VNP", "VMS", "VNM", "GAR", "VTC", "FPT", "DBM"],
            listMenhGiaNapThe: [10000, 100000, 200000, 500000],
            listQuantity: ["1", "2", "3"]
        };
        App.HOST_SOCKJS = "https://st.FANVIN.wIN/";
        App.SOCKJS_LOGIN = "websocket/ws-taixiu";
        // static readonly SOCKJS_LOGIN = "websocket/ws-minigame";
        App.TXST_SUB_TOPIC = "/topic/tx";
        App.nameKeyBank = { "VCB": 0, "TCB": 1, "VIB": 2, "VPB": 3 };
        return App;
    }());
    Configs.App = App;
    var GameId = /** @class */ (function () {
        function GameId() {
        }
        GameId.getGameName = function (gameId) {
            switch (gameId) {
                case this.MiniPoker:
                    return "MiniPoker";
                case this.TaiXiu:
                    return "Tài xỉu";
                case this.BauCua:
                    return "Bầu cua";
                case this.CaoThap:
                    return "Cao thấp";
                case this.Slot3x3:
                    return "Slot3x3";
                case this.VQMM:
                    return "VQMM";
                case this.Sam:
                    return "Sâm";
                case this.MauBinh:
                    return "Mậu binh";
                case this.TLMN:
                    return "TLMN";
                case this.TaLa:
                    return "Tá lả";
                case this.Lieng:
                    return "Liêng";
                case this.XiTo:
                    return "Xì tố";
                case this.XocXoc:
                    return "Xóc xóc";
                case this.BaiCao:
                    return "Bài cào";
                case this.Poker:
                    return "Poker";
                case this.Bentley:
                    return "Bentley";
                case this.RangeRover:
                    return "Range Rover";
                case this.MayBach:
                    return "May Bach";
                case this.RollsRoyce:
                    return "Rolls Royce";
            }
            return "Unknow";
        };
        GameId.MiniPoker = 1;
        GameId.TaiXiu = 2;
        GameId.BauCua = 3;
        GameId.CaoThap = 4;
        GameId.Slot3x3 = 5;
        GameId.VQMM = 7;
        GameId.Sam = 8;
        GameId.BaCay = 9;
        GameId.MauBinh = 10;
        GameId.TLMN = 11;
        GameId.TaLa = 12;
        GameId.Lieng = 13;
        GameId.XiTo = 14;
        GameId.XocXoc = 15;
        GameId.BaiCao = 16;
        GameId.Poker = 17;
        GameId.Bentley = 19;
        GameId.RangeRover = 20;
        GameId.MayBach = 21;
        GameId.RollsRoyce = 22;
        GameId.TaiXiuMD5 = 22000;
        return GameId;
    }());
    Configs.GameId = GameId;
    var Payment = /** @class */ (function () {
        function Payment() {
        }
        Payment.Deposit = null;
        return Payment;
    }());
    Configs.Payment = Payment;
    var EventFacebook = /** @class */ (function () {
        function EventFacebook() {
        }
        EventFacebook.EVENT_NAME_ACTIVATED_APP = "fb_mobile_activate_app"; //mo app
        EventFacebook.EVENT_NAME_DEACTIVATED_APP = "fb_mobile_deactivate_app";
        EventFacebook.EVENT_NAME_SESSION_INTERRUPTIONS = "fb_mobile_app_interruptions";
        EventFacebook.EVENT_NAME_TIME_BETWEEN_SESSIONS = "fb_mobile_time_between_sessions";
        EventFacebook.EVENT_NAME_COMPLETED_REGISTRATION = "fb_mobile_complete_registration"; //dang ky
        EventFacebook.EVENT_NAME_COMPLETED_LOGIN = "fb_mobile_complete_login"; //todo dang nhap
        EventFacebook.EVENT_NAME_VIEWED_CONTENT = "fb_mobile_content_view";
        EventFacebook.EVENT_NAME_SEARCHED = "fb_mobile_search";
        EventFacebook.EVENT_NAME_RATED = "fb_mobile_rate";
        EventFacebook.EVENT_NAME_COMPLETED_TUTORIAL = "fb_mobile_tutorial_completion";
        EventFacebook.EVENT_NAME_PUSH_TOKEN_OBTAINED = "fb_mobile_obtain_push_token";
        EventFacebook.EVENT_NAME_ADDED_TO_CART = "fb_mobile_add_to_cart";
        EventFacebook.EVENT_NAME_ADDED_TO_WISHLIST = "fb_mobile_add_to_wishlist";
        EventFacebook.EVENT_NAME_INITIATED_CHECKOUT = "fb_mobile_initiated_checkout";
        EventFacebook.EVENT_NAME_ADDED_PAYMENT_INFO = "fb_mobile_add_payment_info"; //sdt
        EventFacebook.EVENT_NAME_PURCHASED = "fb_mobile_purchase"; //nap tien
        EventFacebook.EVENT_NAME_EARN_VIRTUAL_CURRENCY = "fb_mobile_earn_virtual_currency"; //todo doi thuong
        EventFacebook.EVENT_NAME_ACHIEVED_LEVEL = "fb_mobile_level_achieved";
        EventFacebook.EVENT_NAME_UNLOCKED_ACHIEVEMENT = "fb_mobile_achievement_unlocked";
        EventFacebook.EVENT_NAME_SPENT_CREDITS = "fb_mobile_spent_credits"; //tieu tien
        return EventFacebook;
    }());
    Configs.EventFacebook = EventFacebook;
    var ParamsFacebook = /** @class */ (function () {
        function ParamsFacebook() {
        }
        ParamsFacebook.EVENT_PARAM_CURRENCY = "fb_currency";
        ParamsFacebook.EVENT_PARAM_REGISTRATION_METHOD = "fb_registration_method";
        ParamsFacebook.EVENT_PARAM_LOGIN_METHOD = "fb_login_method"; //todo
        ParamsFacebook.EVENT_PARAM_CONTENT_TYPE = "fb_content_type";
        ParamsFacebook.EVENT_PARAM_CONTENT = "fb_content";
        ParamsFacebook.EVENT_PARAM_CONTENT_ID = "fb_content_id";
        ParamsFacebook.EVENT_PARAM_SEARCH_STRING = "fb_search_string";
        ParamsFacebook.EVENT_PARAM_SUCCESS = "fb_success";
        ParamsFacebook.EVENT_PARAM_MAX_RATING_VALUE = "fb_max_rating_value";
        ParamsFacebook.EVENT_PARAM_PAYMENT_INFO_AVAILABLE = "fb_payment_info_available";
        ParamsFacebook.EVENT_PARAM_NUM_ITEMS = "fb_num_items";
        ParamsFacebook.EVENT_PARAM_LEVEL = "fb_level";
        ParamsFacebook.EVENT_PARAM_DESCRIPTION = "fb_description";
        ParamsFacebook.EVENT_PARAM_SOURCE_APPLICATION = "fb_mobile_launch_source";
        ParamsFacebook.EVENT_PARAM_VALUE_YES = "1";
        ParamsFacebook.EVENT_PARAM_VALUE_NO = "0";
        return ParamsFacebook;
    }());
    Configs.ParamsFacebook = ParamsFacebook;
    var EventFirebase = /** @class */ (function () {
        function EventFirebase() {
        }
        EventFirebase.ADD_PAYMENT_INFO = "add_payment_info";
        EventFirebase.ADD_TO_CART = "add_to_cart";
        EventFirebase.ADD_TO_WISHLIST = "add_to_wishlist";
        EventFirebase.APP_OPEN = "app_open";
        EventFirebase.BEGIN_CHECKOUT = "begin_checkout";
        EventFirebase.CAMPAIGN_DETAILS = "campaign_details";
        EventFirebase.ECOMMERCE_PURCHASE = "ecommerce_purchase";
        EventFirebase.GENERATE_LEAD = "generate_lead";
        EventFirebase.JOIN_GROUP = "join_group";
        EventFirebase.LEVEL_UP = "level_up";
        EventFirebase.LOGIN = "login";
        EventFirebase.POST_SCORE = "post_score";
        EventFirebase.PRESENT_OFFER = "present_offer";
        EventFirebase.PURCHASE_REFUND = "purchase_refund";
        EventFirebase.SEARCH = "search";
        EventFirebase.SELECT_CONTENT = "select_content";
        EventFirebase.SHARE = "share";
        EventFirebase.SIGN_UP = "sign_up";
        EventFirebase.SPEND_VIRTUAL_CURRENCY = "spend_virtual_currency";
        EventFirebase.TUTORIAL_BEGIN = "tutorial_begin";
        EventFirebase.TUTORIAL_COMPLETE = "tutorial_complete";
        EventFirebase.UNLOCK_ACHIEVEMENT = "unlock_achievement";
        EventFirebase.VIEW_ITEM = "view_item";
        EventFirebase.VIEW_ITEM_LIST = "view_item_list";
        EventFirebase.VIEW_SEARCH_RESULTS = "view_search_results";
        EventFirebase.EARN_VIRTUAL_CURRENCY = "earn_virtual_currency";
        EventFirebase.REMOVE_FROM_CART = "remove_from_cart";
        EventFirebase.CHECKOUT_PROGRESS = "checkout_progress";
        EventFirebase.SET_CHECKOUT_OPTION = "set_checkout_option";
        return EventFirebase;
    }());
    Configs.EventFirebase = EventFirebase;
    var ParamsFireBase = /** @class */ (function () {
        function ParamsFireBase() {
        }
        ParamsFireBase.ACHIEVEMENT_ID = "achievement_id";
        ParamsFireBase.CHARACTER = "character";
        ParamsFireBase.TRAVEL_CLASS = "travel_class";
        ParamsFireBase.CONTENT_TYPE = "content_type";
        ParamsFireBase.CURRENCY = "currency";
        ParamsFireBase.COUPON = "coupon";
        ParamsFireBase.START_DATE = "start_date";
        ParamsFireBase.END_DATE = "end_date";
        ParamsFireBase.FLIGHT_NUMBER = "flight_number";
        ParamsFireBase.GROUP_ID = "group_id";
        ParamsFireBase.ITEM_CATEGORY = "item_category";
        ParamsFireBase.ITEM_ID = "item_id";
        ParamsFireBase.ITEM_LOCATION_ID = "item_location_id";
        ParamsFireBase.ITEM_NAME = "item_name";
        ParamsFireBase.LOCATION = "location";
        ParamsFireBase.LEVEL = "level";
        ParamsFireBase.SIGN_UP_METHOD = "sign_up_method";
        ParamsFireBase.NUMBER_OF_NIGHTS = "number_of_nights";
        ParamsFireBase.NUMBER_OF_PASSENGERS = "number_of_passengers";
        ParamsFireBase.NUMBER_OF_ROOMS = "number_of_rooms";
        ParamsFireBase.DESTINATION = "destination";
        ParamsFireBase.ORIGIN = "origin";
        ParamsFireBase.PRICE = "price";
        ParamsFireBase.QUANTITY = "quantity";
        ParamsFireBase.SCORE = "score";
        ParamsFireBase.SHIPPING = "shipping";
        ParamsFireBase.TRANSACTION_ID = "transaction_id";
        ParamsFireBase.SEARCH_TERM = "search_term";
        ParamsFireBase.TAX = "tax";
        ParamsFireBase.VALUE = "value";
        ParamsFireBase.VIRTUAL_CURRENCY_NAME = "virtual_currency_name";
        ParamsFireBase.CAMPAIGN = "campaign";
        ParamsFireBase.SOURCE = "source";
        ParamsFireBase.MEDIUM = "medium";
        ParamsFireBase.TERM = "term";
        ParamsFireBase.CONTENT = "content";
        ParamsFireBase.ACLID = "aclid";
        ParamsFireBase.CP1 = "cp1";
        ParamsFireBase.ITEM_BRAND = "item_brand";
        ParamsFireBase.ITEM_VARIANT = "item_variant";
        ParamsFireBase.ITEM_LIST = "item_list";
        ParamsFireBase.CHECKOUT_STEP = "checkout_step";
        ParamsFireBase.CHECKOUT_OPTION = "checkout_option";
        ParamsFireBase.CREATIVE_NAME = "creative_name";
        ParamsFireBase.CREATIVE_SLOT = "creative_slot";
        ParamsFireBase.AFFILIATION = "affiliation";
        ParamsFireBase.INDEX = "index";
        ParamsFireBase.METHOD = "method";
        return ParamsFireBase;
    }());
    Configs.ParamsFireBase = ParamsFireBase;
    var ParamType = /** @class */ (function () {
        function ParamType() {
        }
        ParamType.STRING = "String";
        ParamType.DOUBLE = "Double";
        return ParamType;
    }());
    Configs.ParamType = ParamType;
})(Configs || (Configs = {}));
exports.default = Configs;
Configs.App.init();
//acc test: Bright111/admin123 bright/123456

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxDb25maWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQXNFO0FBQ3RFLGlEQUE0QztBQUU1QyxJQUFVLE9BQU8sQ0EraUJoQjtBQS9pQkQsV0FBVSxPQUFPO0lBQ2I7UUFBQTtRQStHQSxDQUFDO1FBcEVVLFdBQUssR0FBWjtZQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQzFCLDhCQUE4QjtRQUMvQixDQUFDO1FBSU0scUJBQWUsR0FBdEI7WUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzVDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3BDO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVNLG9CQUFjLEdBQXJCO1lBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3BELE9BQU8sQ0FBQyxDQUFDO2FBQ1o7WUFDRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUM5QixNQUFNLEVBQUUsQ0FBQztpQkFDWjthQUNKO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUNNLDBCQUFvQixHQUEzQjtZQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDNUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzVCO29CQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ2hDO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNNLHNCQUFnQixHQUF2QjtZQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDNUMsT0FBTyxDQUFDLENBQUM7aUJBQ1o7YUFDSjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQTdHTSxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLHVCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixrQkFBWSxHQUFXLEVBQUUsQ0FBQTtRQUV6QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGlCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3hCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFFdkIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUSxHQUFHLElBQUksQ0FBQztRQTJCUCxlQUFTLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLG1CQUFhLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBeUNyRyxZQUFDO0tBL0dELEFBK0dDLElBQUE7SUEvR1ksYUFBSyxRQStHakIsQ0FBQTtJQUVEO1FBQUE7UUFrUEEsQ0FBQztRQTNHVSxtQkFBZSxHQUF0QjtRQUNBLENBQUM7UUFFTSxtQkFBZSxHQUF0QjtZQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVO2dCQUFFLE9BQU8sU0FBUyxDQUFDO1lBQ3hFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ2hFLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFTSxrQkFBYyxHQUFyQjtZQUNJLFFBQVEsdUJBQWEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFCO29CQUNJLE9BQU8sK0JBQStCLENBQUM7YUFDOUM7UUFDTCxDQUFDO1FBRU0sbUJBQWUsR0FBdEI7WUFDSSxRQUFRLHVCQUFhLENBQUMsTUFBTSxFQUFFO2dCQUMxQjtvQkFDSSxPQUFPLDBCQUEwQixDQUFDO2FBQ3pDO1FBQ0wsQ0FBQztRQUVNLHdCQUFvQixHQUEzQjtZQUNJLFFBQVEsdUJBQWEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFCO29CQUNJLE9BQU8sMEJBQTBCLENBQUM7YUFDekM7UUFDTCxDQUFDO1FBRU0sUUFBSSxHQUFYO1lBQ0ksK0NBQStDO1lBQy9DLFFBQVEsdUJBQWEsQ0FBQyxHQUFHLEVBQUU7Z0JBRXZCLEtBQUssdUJBQWEsQ0FBQyxPQUFPO29CQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFFcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLHVCQUFhLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztvQkFFbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLHVCQUFhLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDbEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLHVCQUFhLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBRyxZQUFZLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUM1RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNqRSw4QkFBOEI7b0JBQzlCLE1BQU07Z0JBQ1YsS0FBSyx1QkFBYSxDQUFDLFFBQVE7b0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUVwQixJQUFJLENBQUMsR0FBRyxHQUFHLGtCQUFrQixHQUFHLHVCQUFhLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztvQkFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFHLHVCQUFhLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO29CQUVuRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNsRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFHLFlBQVksR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQy9ELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2pFLDhCQUE4QjtvQkFDOUIsTUFBTTtnQkFDVjtvQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFFcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsR0FBRyx1QkFBYSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLHVCQUFhLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztvQkFFbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLHVCQUFhLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDbEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLHVCQUFhLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBRyxZQUFZLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUM1RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNqRSxNQUFNO2FBQ2I7UUFDTCxDQUFDO1FBaFBELGVBQWU7UUFDRCxZQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQU0sR0FBRyxJQUFJLENBQUM7UUFDckIsT0FBRyxHQUFXLGdDQUFnQyxDQUFDO1FBQ3JELFFBQUksR0FBVyxpQ0FBaUMsQ0FBQztRQUNqRCxVQUFNLEdBQVcsK0JBQStCLENBQUM7UUFDM0MsMkJBQXVCLEdBQVcsb0RBQW9ELENBQUM7UUFDdkYsY0FBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGlCQUFhLEdBQUcsNkJBQTZCLENBQUM7UUFDOUMsY0FBVSxHQUFHLDBCQUEwQixDQUFDO1FBQ3hDLGdCQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDcEMsV0FBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFVLEdBQUcsMkNBQTJDLENBQUM7UUFDekQsWUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQzdCLGVBQVcsR0FBRyxFQUFFLENBQUM7UUFDdkIsV0FBTyxHQUFHO1lBQ1AsZUFBZSxFQUFDLElBQUk7WUFDcEIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ3pCLE1BQU0sRUFBQyxJQUFJO1lBQ1gsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixJQUFJLEVBQUM7Z0JBQ0QsS0FBSyxFQUFDLHFDQUFxQzthQUM5QztTQUNKLENBQUE7UUFDTSxlQUFXLEdBQUcsT0FBTyxDQUFBO1FBRXJCLFlBQVEsR0FBRztZQUNkLEdBQUcsRUFBRSxRQUFRO1lBQ2IsR0FBRyxFQUFFLFFBQVE7WUFDYixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxNQUFNO1lBQ1QsRUFBRSxFQUFFLFVBQVU7WUFDZCxHQUFHLEVBQUUsV0FBVztZQUNoQixHQUFHLEVBQUUsVUFBVTtZQUNmLEdBQUcsRUFBRSxVQUFVO1lBQ2YsQ0FBQyxFQUFFLFdBQVc7WUFDZCxDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxRQUFRO1lBQ1gsQ0FBQyxFQUFFLFVBQVU7WUFDYixHQUFHLEVBQUUsWUFBWTtZQUNqQixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEVBQUUsRUFBRSxTQUFTO1lBQ2IsR0FBRyxFQUFFLFVBQVU7WUFDZixHQUFHLEVBQUUsUUFBUTtTQUNoQixDQUFBO1FBQ2UsaUJBQWEsR0FBRztZQUU1QixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNRLGtCQUFjLEdBQUc7WUFFdkIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxzQkFBa0IsR0FBRztZQUVqQyxJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNjLGFBQVMsR0FBRztZQUV4QixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNjLGFBQVMsR0FBRztZQUV4QixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNjLG1CQUFlLEdBQUc7WUFFOUIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxZQUFRLEdBQUc7WUFDdkIsSUFBSSxFQUFFLEVBQUU7WUFFUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxlQUFXLEdBQUc7WUFDMUIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxjQUFVLEdBQUc7WUFDekIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxlQUFXLEdBQUc7WUFDMUIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxjQUFVLEdBQUc7WUFDekIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxlQUFXLEdBQUc7WUFDMUIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxhQUFTLEdBQUc7WUFDeEIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxjQUFVLEdBQUc7WUFDekIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDYyxpQkFBYSxHQUFHO1lBQzVCLFdBQVcsRUFBRSxDQUFDO1lBQ2QsWUFBWSxFQUFFLEdBQUc7WUFDakIsYUFBYSxFQUFFLElBQUk7WUFDbkIsZUFBZSxFQUFFLENBQUM7WUFDbEIsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDO1lBQ3BFLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixpQkFBaUIsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUN2RSxXQUFXLEVBQUUsR0FBRztTQUNuQixDQUFDO1FBQ2MsdUJBQW1CLEdBQUc7WUFDbEMsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztZQUNoSCxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3ZFLGlCQUFpQixFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQ2xELFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ2hDLENBQUE7UUFDZSxlQUFXLEdBQUcsd0JBQXdCLENBQUM7UUFDdkMsZ0JBQVksR0FBRyxxQkFBcUIsQ0FBQztRQUNyRCwwREFBMEQ7UUFDMUMsa0JBQWMsR0FBRyxXQUFXLENBQUM7UUFFN0IsZUFBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBOEc3RSxVQUFDO0tBbFBELEFBa1BDLElBQUE7SUFsUFksV0FBRyxNQWtQZixDQUFBO0lBQ0Q7UUFBQTtRQWtFQSxDQUFDO1FBM0NVLGtCQUFXLEdBQWxCLFVBQW1CLE1BQWM7WUFDN0IsUUFBUSxNQUFNLEVBQUU7Z0JBQ1osS0FBSyxJQUFJLENBQUMsU0FBUztvQkFDZixPQUFPLFdBQVcsQ0FBQztnQkFDdkIsS0FBSyxJQUFJLENBQUMsTUFBTTtvQkFDWixPQUFPLFNBQVMsQ0FBQztnQkFDckIsS0FBSyxJQUFJLENBQUMsTUFBTTtvQkFDWixPQUFPLFNBQVMsQ0FBQztnQkFDckIsS0FBSyxJQUFJLENBQUMsT0FBTztvQkFDYixPQUFPLFVBQVUsQ0FBQztnQkFDdEIsS0FBSyxJQUFJLENBQUMsT0FBTztvQkFDYixPQUFPLFNBQVMsQ0FBQztnQkFDckIsS0FBSyxJQUFJLENBQUMsSUFBSTtvQkFDVixPQUFPLE1BQU0sQ0FBQztnQkFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRztvQkFDVCxPQUFPLEtBQUssQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsT0FBTztvQkFDYixPQUFPLFVBQVUsQ0FBQztnQkFDdEIsS0FBSyxJQUFJLENBQUMsSUFBSTtvQkFDVixPQUFPLE1BQU0sQ0FBQztnQkFDbEIsS0FBSyxJQUFJLENBQUMsSUFBSTtvQkFDVixPQUFPLE9BQU8sQ0FBQztnQkFDbkIsS0FBSyxJQUFJLENBQUMsS0FBSztvQkFDWCxPQUFPLE9BQU8sQ0FBQztnQkFDbkIsS0FBSyxJQUFJLENBQUMsSUFBSTtvQkFDVixPQUFPLE9BQU8sQ0FBQztnQkFDbkIsS0FBSyxJQUFJLENBQUMsTUFBTTtvQkFDWixPQUFPLFNBQVMsQ0FBQztnQkFDckIsS0FBSyxJQUFJLENBQUMsTUFBTTtvQkFDWixPQUFPLFNBQVMsQ0FBQztnQkFDckIsS0FBSyxJQUFJLENBQUMsS0FBSztvQkFDWCxPQUFPLE9BQU8sQ0FBQztnQkFDbkIsS0FBSyxJQUFJLENBQUMsT0FBTztvQkFDYixPQUFPLFNBQVMsQ0FBQztnQkFDckIsS0FBSyxJQUFJLENBQUMsVUFBVTtvQkFDaEIsT0FBTyxhQUFhLENBQUM7Z0JBQ3pCLEtBQUssSUFBSSxDQUFDLE9BQU87b0JBQ2IsT0FBTyxVQUFVLENBQUM7Z0JBQ3RCLEtBQUssSUFBSSxDQUFDLFVBQVU7b0JBQ2hCLE9BQU8sYUFBYSxDQUFDO2FBQzVCO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztRQWhFZSxnQkFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGFBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxhQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsY0FBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGNBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixXQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsVUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFlBQUssR0FBRyxDQUFDLENBQUM7UUFDVixjQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsV0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQUksR0FBRyxFQUFFLENBQUM7UUFDVixZQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixpQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsZ0JBQVMsR0FBRyxLQUFLLENBQUM7UUE2Q2hDLGFBQUM7S0FsRUQsQUFrRUMsSUFBQTtJQWxFWSxjQUFNLFNBa0VsQixDQUFBO0lBRUQ7UUFBQTtRQUVBLENBQUM7UUFEVSxlQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGNBQUM7S0FGRCxBQUVDLElBQUE7SUFGWSxlQUFPLFVBRW5CLENBQUE7SUFDRDtRQUFBO1FBeUJBLENBQUM7UUF4Qm1CLHNDQUF3QixHQUFHLHdCQUF3QixDQUFBLENBQUMsUUFBUTtRQUM1RCx3Q0FBMEIsR0FBRywwQkFBMEIsQ0FBQTtRQUN2RCw4Q0FBZ0MsR0FBRyw2QkFBNkIsQ0FBQTtRQUNoRSw4Q0FBZ0MsR0FBRyxpQ0FBaUMsQ0FBQTtRQUVwRSwrQ0FBaUMsR0FBRyxpQ0FBaUMsQ0FBQSxDQUFDLFNBQVM7UUFDL0Usd0NBQTBCLEdBQUcsMEJBQTBCLENBQUEsQ0FBQSxnQkFBZ0I7UUFFdkUsdUNBQXlCLEdBQUcsd0JBQXdCLENBQUE7UUFDcEQsaUNBQW1CLEdBQUcsa0JBQWtCLENBQUE7UUFDeEMsOEJBQWdCLEdBQUcsZ0JBQWdCLENBQUE7UUFDbkMsMkNBQTZCLEdBQUcsK0JBQStCLENBQUE7UUFDL0QsNENBQThCLEdBQUcsNkJBQTZCLENBQUE7UUFDOUQsc0NBQXdCLEdBQUcsdUJBQXVCLENBQUE7UUFDbEQsMENBQTRCLEdBQUcsMkJBQTJCLENBQUE7UUFDMUQsMkNBQTZCLEdBQUcsOEJBQThCLENBQUE7UUFDOUQsMkNBQTZCLEdBQUcsNEJBQTRCLENBQUEsQ0FBQyxLQUFLO1FBRWxFLGtDQUFvQixHQUFHLG9CQUFvQixDQUFBLENBQUMsVUFBVTtRQUN0RCw4Q0FBZ0MsR0FBRyxpQ0FBaUMsQ0FBQSxDQUFDLGlCQUFpQjtRQUV0Rix1Q0FBeUIsR0FBRywwQkFBMEIsQ0FBQTtRQUN0RCw2Q0FBK0IsR0FBRyxnQ0FBZ0MsQ0FBQTtRQUNsRSxzQ0FBd0IsR0FBRyx5QkFBeUIsQ0FBQSxDQUFDLFdBQVc7UUFDcEYsb0JBQUM7S0F6QkQsQUF5QkMsSUFBQTtJQXpCWSxxQkFBYSxnQkF5QnpCLENBQUE7SUFDRDtRQUFBO1FBa0JBLENBQUM7UUFqQm1CLG1DQUFvQixHQUFHLGFBQWEsQ0FBQTtRQUNwQyw4Q0FBK0IsR0FBRyx3QkFBd0IsQ0FBQTtRQUMxRCx1Q0FBd0IsR0FBRyxpQkFBaUIsQ0FBQSxDQUFDLE1BQU07UUFFbkQsdUNBQXdCLEdBQUcsaUJBQWlCLENBQUE7UUFDNUMsa0NBQW1CLEdBQUcsWUFBWSxDQUFBO1FBQ2xDLHFDQUFzQixHQUFHLGVBQWUsQ0FBQTtRQUN4Qyx3Q0FBeUIsR0FBRyxrQkFBa0IsQ0FBQTtRQUM5QyxrQ0FBbUIsR0FBRyxZQUFZLENBQUE7UUFDbEMsMkNBQTRCLEdBQUcscUJBQXFCLENBQUE7UUFDcEQsaURBQWtDLEdBQUcsMkJBQTJCLENBQUE7UUFDaEUsb0NBQXFCLEdBQUcsY0FBYyxDQUFBO1FBQ3RDLGdDQUFpQixHQUFHLFVBQVUsQ0FBQTtRQUM5QixzQ0FBdUIsR0FBRyxnQkFBZ0IsQ0FBQTtRQUMxQyw2Q0FBOEIsR0FBRyx5QkFBeUIsQ0FBQTtRQUMxRCxvQ0FBcUIsR0FBRyxHQUFHLENBQUE7UUFDM0IsbUNBQW9CLEdBQUcsR0FBRyxDQUFBO1FBQzlDLHFCQUFDO0tBbEJELEFBa0JDLElBQUE7SUFsQlksc0JBQWMsaUJBa0IxQixDQUFBO0lBQ0Q7UUFBQTtRQThCQSxDQUFDO1FBN0JtQiw4QkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQTtRQUNyQyx5QkFBVyxHQUFHLGFBQWEsQ0FBQTtRQUMzQiw2QkFBZSxHQUFHLGlCQUFpQixDQUFBO1FBQ25DLHNCQUFRLEdBQUcsVUFBVSxDQUFBO1FBQ3JCLDRCQUFjLEdBQUcsZ0JBQWdCLENBQUE7UUFDakMsOEJBQWdCLEdBQUcsa0JBQWtCLENBQUE7UUFDckMsZ0NBQWtCLEdBQUcsb0JBQW9CLENBQUE7UUFDekMsMkJBQWEsR0FBRyxlQUFlLENBQUE7UUFDL0Isd0JBQVUsR0FBRyxZQUFZLENBQUE7UUFDekIsc0JBQVEsR0FBRyxVQUFVLENBQUE7UUFDckIsbUJBQUssR0FBRyxPQUFPLENBQUE7UUFDZix3QkFBVSxHQUFHLFlBQVksQ0FBQTtRQUN6QiwyQkFBYSxHQUFHLGVBQWUsQ0FBQTtRQUMvQiw2QkFBZSxHQUFHLGlCQUFpQixDQUFBO1FBQ25DLG9CQUFNLEdBQUcsUUFBUSxDQUFBO1FBQ2pCLDRCQUFjLEdBQUcsZ0JBQWdCLENBQUE7UUFDakMsbUJBQUssR0FBRyxPQUFPLENBQUE7UUFDZixxQkFBTyxHQUFHLFNBQVMsQ0FBQTtRQUNuQixvQ0FBc0IsR0FBRyx3QkFBd0IsQ0FBQTtRQUNqRCw0QkFBYyxHQUFHLGdCQUFnQixDQUFBO1FBQ2pDLCtCQUFpQixHQUFHLG1CQUFtQixDQUFBO1FBQ3ZDLGdDQUFrQixHQUFHLG9CQUFvQixDQUFBO1FBQ3pDLHVCQUFTLEdBQUcsV0FBVyxDQUFBO1FBQ3ZCLDRCQUFjLEdBQUcsZ0JBQWdCLENBQUE7UUFDakMsaUNBQW1CLEdBQUcscUJBQXFCLENBQUE7UUFDM0MsbUNBQXFCLEdBQUcsdUJBQXVCLENBQUE7UUFDL0MsOEJBQWdCLEdBQUcsa0JBQWtCLENBQUE7UUFDckMsK0JBQWlCLEdBQUcsbUJBQW1CLENBQUE7UUFDdkMsaUNBQW1CLEdBQUcscUJBQXFCLENBQUE7UUFDL0Qsb0JBQUM7S0E5QkQsQUE4QkMsSUFBQTtJQTlCWSxxQkFBYSxnQkE4QnpCLENBQUE7SUFDRDtRQUFBO1FBaURBLENBQUM7UUFoRG1CLDZCQUFjLEdBQUcsZ0JBQWdCLENBQUE7UUFDakMsd0JBQVMsR0FBRyxXQUFXLENBQUE7UUFDdkIsMkJBQVksR0FBRyxjQUFjLENBQUE7UUFDN0IsMkJBQVksR0FBRyxjQUFjLENBQUE7UUFDN0IsdUJBQVEsR0FBRyxVQUFVLENBQUE7UUFDckIscUJBQU0sR0FBRyxRQUFRLENBQUE7UUFDakIseUJBQVUsR0FBRyxZQUFZLENBQUE7UUFDekIsdUJBQVEsR0FBRyxVQUFVLENBQUE7UUFDckIsNEJBQWEsR0FBRyxlQUFlLENBQUE7UUFDL0IsdUJBQVEsR0FBRyxVQUFVLENBQUE7UUFDckIsNEJBQWEsR0FBRyxlQUFlLENBQUE7UUFDL0Isc0JBQU8sR0FBRyxTQUFTLENBQUE7UUFDbkIsK0JBQWdCLEdBQUcsa0JBQWtCLENBQUE7UUFDckMsd0JBQVMsR0FBRyxXQUFXLENBQUE7UUFDdkIsdUJBQVEsR0FBRyxVQUFVLENBQUE7UUFDckIsb0JBQUssR0FBRyxPQUFPLENBQUE7UUFDZiw2QkFBYyxHQUFHLGdCQUFnQixDQUFBO1FBQ2pDLCtCQUFnQixHQUFHLGtCQUFrQixDQUFBO1FBQ3JDLG1DQUFvQixHQUFHLHNCQUFzQixDQUFBO1FBQzdDLDhCQUFlLEdBQUcsaUJBQWlCLENBQUE7UUFDbkMsMEJBQVcsR0FBRyxhQUFhLENBQUE7UUFDM0IscUJBQU0sR0FBRyxRQUFRLENBQUE7UUFDakIsb0JBQUssR0FBRyxPQUFPLENBQUE7UUFDZix1QkFBUSxHQUFHLFVBQVUsQ0FBQTtRQUNyQixvQkFBSyxHQUFHLE9BQU8sQ0FBQTtRQUNmLHVCQUFRLEdBQUcsVUFBVSxDQUFBO1FBQ3JCLDZCQUFjLEdBQUcsZ0JBQWdCLENBQUE7UUFDakMsMEJBQVcsR0FBRyxhQUFhLENBQUE7UUFDM0Isa0JBQUcsR0FBRyxLQUFLLENBQUE7UUFDWCxvQkFBSyxHQUFHLE9BQU8sQ0FBQTtRQUNmLG9DQUFxQixHQUFHLHVCQUF1QixDQUFBO1FBQy9DLHVCQUFRLEdBQUcsVUFBVSxDQUFBO1FBQ3JCLHFCQUFNLEdBQUcsUUFBUSxDQUFBO1FBQ2pCLHFCQUFNLEdBQUcsUUFBUSxDQUFBO1FBQ2pCLG1CQUFJLEdBQUcsTUFBTSxDQUFBO1FBQ2Isc0JBQU8sR0FBRyxTQUFTLENBQUE7UUFDbkIsb0JBQUssR0FBRyxPQUFPLENBQUE7UUFDZixrQkFBRyxHQUFHLEtBQUssQ0FBQTtRQUNYLHlCQUFVLEdBQUcsWUFBWSxDQUFBO1FBQ3pCLDJCQUFZLEdBQUcsY0FBYyxDQUFBO1FBQzdCLHdCQUFTLEdBQUcsV0FBVyxDQUFBO1FBQ3ZCLDRCQUFhLEdBQUcsZUFBZSxDQUFBO1FBQy9CLDhCQUFlLEdBQUcsaUJBQWlCLENBQUE7UUFDbkMsNEJBQWEsR0FBRyxlQUFlLENBQUE7UUFDL0IsNEJBQWEsR0FBRyxlQUFlLENBQUE7UUFDL0IsMEJBQVcsR0FBRyxhQUFhLENBQUE7UUFDM0Isb0JBQUssR0FBRyxPQUFPLENBQUE7UUFDZixxQkFBTSxHQUFHLFFBQVEsQ0FBQTtRQUNyQyxxQkFBQztLQWpERCxBQWlEQyxJQUFBO0lBakRZLHNCQUFjLGlCQWlEMUIsQ0FBQTtJQUNEO1FBQUE7UUFHQSxDQUFDO1FBRm1CLGdCQUFNLEdBQUcsUUFBUSxDQUFBO1FBQ2pCLGdCQUFNLEdBQUcsUUFBUSxDQUFBO1FBQ3JDLGdCQUFDO0tBSEQsQUFHQyxJQUFBO0lBSFksaUJBQVMsWUFHckIsQ0FBQTtBQUVMLENBQUMsRUEvaUJTLE9BQU8sS0FBUCxPQUFPLFFBK2lCaEI7QUFDRCxrQkFBZSxPQUFPLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUVuQiw0Q0FBNEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBTUFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1NQVXRpbHNcIjtcbmltcG9ydCBWZXJzaW9uQ29uZmlnIGZyb20gXCIuL1ZlcnNpb25Db25maWdcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuL0h0dHBcIjtcbm5hbWVzcGFjZSBDb25maWdzIHtcbiAgICBleHBvcnQgY2xhc3MgTG9naW4ge1xuICAgICAgICBzdGF0aWMgVXNlcklkOiBudW1iZXIgPSAwO1xuICAgICAgICBzdGF0aWMgVXNlcm5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHN0YXRpYyBQYXNzd29yZDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgc3RhdGljIE5pY2tuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgQXZhdGFyOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgQ29pbjogbnVtYmVyID0gMDtcbiAgICAgICAgc3RhdGljIElzTG9naW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgc3RhdGljIEFjY2Vzc1Rva2VuOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgQWNjZXNzVG9rZW4yOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgQWNjZXNzVG9rZW5Tb2NrSnM6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHN0YXRpYyBBY2Nlc3NUb2tlbkZCOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgRmFjZWJvb2tJRDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgc3RhdGljIFNlc3Npb25LZXk6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHN0YXRpYyBMdWNreVdoZWVsOiBudW1iZXIgPSAwO1xuICAgICAgICBzdGF0aWMgQ3JlYXRlVGltZTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgc3RhdGljIEJpcnRoZGF5OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgSXBBZGRyZXNzOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgVmlwUG9pbnQ6IG51bWJlciA9IDA7XG4gICAgICAgIHN0YXRpYyBBZGRyZXNzOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgVmlwUG9pbnRTYXZlOiBudW1iZXIgPSAwO1xuICAgICAgICBzdGF0aWMgTWFpbDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgc3RhdGljIEdlbmRlcjogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgIHN0YXRpYyBSZWZmZXJhbENvZGU6IHN0cmluZyA9IFwiXCJcblxuICAgICAgICBzdGF0aWMgQ29pbkZpc2g6IG51bWJlciA9IDA7XG4gICAgICAgIHN0YXRpYyBVc2VySWRGaXNoOiBudW1iZXIgPSAwO1xuICAgICAgICBzdGF0aWMgVXNlcm5hbWVGaXNoOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgUGFzc3dvcmRGaXNoOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGF0aWMgRmlzaENvbmZpZ3M6IGFueSA9IG51bGw7XG4gICAgICAgIHN0YXRpYyBCaXRjb2luVG9rZW46IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHN0YXRpYyBDdXJyZW5jeTogXCJ2aW5cIjtcbiAgICAgICAgc3RhdGljIFVzZXJUeXBlOiBzdHJpbmcgPSBcIjBcIjtcblxuICAgICAgICBzdGF0aWMgTGlzdEJhbmtSdXQgPSBudWxsO1xuICAgICAgICBzdGF0aWMgTGlzdFBheW1lbnQgPSBudWxsO1xuICAgICAgICBzdGF0aWMgQ2xpY2tQYXlQYXltZW50ID0gbnVsbDtcblxuICAgICAgICBzdGF0aWMgQ0FDSEVfQUcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGljIENBQ0hFX0lCQyA9IGZhbHNlO1xuICAgICAgICBzdGF0aWMgQ0FDSEVfV00gPSBmYWxzZTtcblxuICAgICAgICBzdGF0aWMgTGlzdE1haWwgPSBudWxsO1xuICAgICAgICBzdGF0aWMgY2xlYXIoKSB7XG4gICAgICAgICAgICB0aGlzLlVzZXJJZCA9IDA7XG4gICAgICAgICAgICB0aGlzLlVzZXJuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuUGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5OaWNrbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLkF2YXRhciA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLk1haWwgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5Db2luID0gMDtcbiAgICAgICAgICAgIHRoaXMuSXNMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5BY2Nlc3NUb2tlbiA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLkFjY2Vzc1Rva2VuMiA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLkFjY2Vzc1Rva2VuU29ja0pzID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuU2Vzc2lvbktleSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLkNyZWF0ZVRpbWUgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5CaXJ0aGRheSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLklwQWRkcmVzcyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLlZpcFBvaW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuVmlwUG9pbnRTYXZlID0gMDtcbiAgICAgICAgICAgIHRoaXMuQ29pbkZpc2ggPSAwO1xuICAgICAgICAgICAgdGhpcy5Vc2VySWRGaXNoID0gMDtcbiAgICAgICAgICAgIHRoaXMuVXNlcm5hbWVGaXNoID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuUGFzc3dvcmRGaXNoID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuQml0Y29pblRva2VuID0gXCJcIjtcbiAgICAgICAgIC8vICAgIFNQVXRpbHMuc2V0VXNlclBhc3MoXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgVmlwUG9pbnRzID0gWzgwLCA4MDAsIDQ1MDAsIDg2MDAsIDEyMDAwLCA1MDAwMCwgMTAwMDAwMCwgMjAwMDAwMCwgNTAwMDAwMF07XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBWaXBQb2ludHNOYW1lID0gW1wixJDDoVwiLCBcIsSQ4buTbmdcIiwgXCJC4bqhY1wiLCBcIlbDoG5nXCIsIFwiQksxXCIsIFwiQksyXCIsIFwiS0MxXCIsIFwiS0MyXCIsIFwiS0MzXCJdO1xuICAgICAgICBzdGF0aWMgZ2V0VmlwUG9pbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5WaXBQb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5WaXBQb2ludCA+IHRoaXMuVmlwUG9pbnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlZpcFBvaW50c05hbWVbaSArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLlZpcFBvaW50c05hbWVbMF07XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgR2V0TGlzdE1haWxOZXcoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5MaXN0TWFpbCA9PSBudWxsIHx8IHRoaXMuTGlzdE1haWwubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBudW1iZXIgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkxpc3RNYWlsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuTGlzdE1haWxbaV0uc3RhdHVzID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZ2V0VmlwUG9pbnROZXh0TGV2ZWwoKTogbnVtYmVyIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLlZpcFBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLlZpcFBvaW50ID4gdGhpcy5WaXBQb2ludHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5WaXBQb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVmlwUG9pbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlZpcFBvaW50c1tpICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVmlwUG9pbnRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBnZXRWaXBQb2ludEluZGV4KCk6IG51bWJlciB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5WaXBQb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5WaXBQb2ludCA+IHRoaXMuVmlwUG9pbnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgICAgIC8vIDQzLjEyOC4yNy4zNVxuICAgICAgICBwdWJsaWMgc3RhdGljIElTX0xPQ0FMID0gdHJ1ZTtcbiAgICAgICAgcHVibGljIHN0YXRpYyBJU19QUk8gPSB0cnVlO1xuICAgICAgICBzdGF0aWMgQVBJOiBzdHJpbmcgPSBcImh0dHBzOi8vaXBvcnRhbC5GQU5WSU4ud0lOL2FwaVwiO1xuXHRcdHN0YXRpYyBBUEkyOiBzdHJpbmcgPSBcImh0dHBzOi8vaXBvcnRhbDIuRkFOVklOLndJTi9hcGlcIjtcblx0XHRzdGF0aWMgQVBJUk9ZOiBzdHJpbmcgPSBcImh0dHBzOi8vcG9ydGFsLkZBTlZJTi53SU4vYXBpXCI7XG4gICAgICAgIHN0YXRpYyBBUElfUEFZSU5fUEFZV0VMTF9CQU5LUzogc3RyaW5nID0gXCJodHRwczovL2lwb3J0YWwuRkFOVklOLndJTi9hcGkvcGF5aW4vcGF5d2VsbC9iYW5rc1wiO1xuICAgICAgICBzdGF0aWMgTU9ORVlfVFlQRSA9IDE7XG4gICAgICAgIHN0YXRpYyBMSU5LX0RPV05MT0FEID0gXCJodHRwczovL0ZBTlZJTi53SU4vZG93bmxvYWRcIjtcbiAgICAgICAgc3RhdGljIExJTktfRVZFTlQgPSBcImh0dHBzOi8vRkFOVklOLndJTi9ldmVudFwiO1xuICAgICAgICBzdGF0aWMgTElOS19TVVBQT1JUID0gXCJodHRwczovL0ZBTlZJTi53SU5cIjtcbiAgICAgICAgc3RhdGljIFVTRV9XU1MgPSBmYWxzZTtcbiAgICAgICAgc3RhdGljIExJTktfR1JPVVAgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvYmFvOTkudmlwXCI7XG4gICAgICAgIHN0YXRpYyBGQl9BUFBJRCA9IFwiNzU4OTcxODQ4MTEyNzQ5XCI7XG4gICAgICAgIHN0YXRpYyBBR0VOQ1lfQ09ERSA9IFwiXCI7XG5cdFx0c3RhdGljIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZW1lbWJlclVwZ3JhZGU6dHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0J10sXG4gICAgICAgICAgICBzZWN1cmU6dHJ1ZSwgXG4gICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVjb25uZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICBhdXRoOntcbiAgICAgICAgICAgICAgICB0b2tlbjpcIldFUlRXRVIzNDUzNEZHSEZHQkZWQkNGMzQ1MjM0WENWQVNEXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgVkVSU0lPTl9BUFAgPSBcIjEuMC4zXCJcblxuICAgICAgICBzdGF0aWMgR2FtZU5hbWUgPSB7XG4gICAgICAgICAgICAxMTA6IFwixJB1YSBYZVwiLFxuICAgICAgICAgICAgMTcwOiBcIkNyeXB0b1wiLFxuICAgICAgICAgICAgMjogXCJUw6BpIFjhu4l1XCIsXG4gICAgICAgICAgICA1OiBcIljDqG5nXCIsXG4gICAgICAgICAgICAxMTogXCJUaeG6v24gTMOqblwiLFxuICAgICAgICAgICAgMTYwOiBcIkNoaW0gxJBpw6puXCIsXG4gICAgICAgICAgICAxMjA6IFwiVGjhuqduIFTDoGlcIixcbiAgICAgICAgICAgIDE1MDogXCJUaOG7gyBUaGFvXCIsXG4gICAgICAgICAgICAxOiBcIk1pbmlQb2tlclwiLFxuICAgICAgICAgICAgMzogXCJC4bqndSBDdWFcIixcbiAgICAgICAgICAgIDk6IFwiQmEgQ8OieVwiLFxuICAgICAgICAgICAgNDogXCJDYW8gVGjhuqVwXCIsXG4gICAgICAgICAgICAxOTE6IFwiQ2hpw6ptIFRpbmhcIixcbiAgICAgICAgICAgIDE5MDogXCJUw6BpIFjhu4l1IFNpw6p1IFThu5FjXCIsXG4gICAgICAgICAgICAxMjogXCJYw7NjIMSQxKlhXCIsXG4gICAgICAgICAgICAxODA6IFwiVGjhuqduIELDoGlcIixcbiAgICAgICAgICAgIDE5NzogXCJCaWtpbmlcIlxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBIT1NUX01JTklHQU1FID0ge1xuXG4gICAgICAgICAgICBob3N0OiBcIlwiLFxuICAgICAgICAgICAgcG9ydDogNDQzXG4gICAgICAgIH07XG5cdFx0c3RhdGljIHJlYWRvbmx5IEhPU1RfTUlOSUdBTUUyID0ge1xuXG4gICAgICAgICAgICBob3N0OiBcIlwiLFxuICAgICAgICAgICAgcG9ydDogNDQzXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBIT1NUX1RBSV9YSVVfTUlOSTIgPSB7XG5cbiAgICAgICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgICAgICAgICBwb3J0OiA0NDNcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEhPU1RfU0xPVCA9IHtcblxuICAgICAgICAgICAgaG9zdDogXCJcIixcbiAgICAgICAgICAgIHBvcnQ6IDQ0M1xuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgSE9TVF9UTE1OID0ge1xuXG4gICAgICAgICAgICBob3N0OiBcIlwiLFxuICAgICAgICAgICAgcG9ydDogNDQzXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBIT1NUX1NIT09UX0ZJU0ggPSB7XG5cbiAgICAgICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgICAgICAgICBwb3J0OiA0NDNcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEhPU1RfU0FNID0ge1xuICAgICAgICAgICAgaG9zdDogXCJcIixcblxuICAgICAgICAgICAgcG9ydDogNDQzXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBIT1NUX1hPQ0RJQSA9IHtcbiAgICAgICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgICAgICAgICBwb3J0OiA0NDNcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEhPU1RfQkFDQVkgPSB7XG4gICAgICAgICAgICBob3N0OiBcIlwiLFxuICAgICAgICAgICAgcG9ydDogNDQzXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBIT1NUX0JBSUNBTyA9IHtcbiAgICAgICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgICAgICAgICBwb3J0OiA0NDNcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEhPU1RfUE9LRVIgPSB7XG4gICAgICAgICAgICBob3N0OiBcIlwiLFxuICAgICAgICAgICAgcG9ydDogNDQzXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBIT1NUX1hJREFDSCA9IHtcbiAgICAgICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgICAgICAgICBwb3J0OiA0NDNcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEhPU1RfQklOSCA9IHtcbiAgICAgICAgICAgIGhvc3Q6IFwiXCIsXG4gICAgICAgICAgICBwb3J0OiA0NDNcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEhPU1RfTElFTkcgPSB7XG4gICAgICAgICAgICBob3N0OiBcIlwiLFxuICAgICAgICAgICAgcG9ydDogNDQzXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTRVJWRVJfQ09ORklHID0ge1xuICAgICAgICAgICAgcmF0aW9OYXBUaGU6IDEsXG4gICAgICAgICAgICByYXRpb05hcE1vbW86IDEuMixcbiAgICAgICAgICAgIHJhdGlvVHJhbnNmZXI6IDAuOTgsXG4gICAgICAgICAgICByYXRpb1RyYW5zZmVyREw6IDEsXG4gICAgICAgICAgICBsaXN0VGVuTmhhTWFuZzogW1wiVmlldHRlbFwiLCBcIlZpbmFwaG9uZVwiLCBcIk1vYmlmb25lXCIsIFwiVmlldG5hbW9iaWxlXCJdLFxuICAgICAgICAgICAgbGlzdElkTmhhTWFuZzogWzAsIDEsIDIsIDNdLFxuICAgICAgICAgICAgbGlzdE1lbmhHaWFOYXBUaGU6IFsxMDAwMCwgMjAwMDAsIDMwMDAwLCA1MDAwMCwgMTAwMDAwLCAyMDAwMDAsIDUwMDAwMF0sXG4gICAgICAgICAgICByYXRpb1J1dFRoZTogMS4yXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBDQVNIT1VUX0NBUkRfQ09ORklHID0ge1xuICAgICAgICAgICAgbGlzdFRlbk5oYU1hbmc6IFtcIlZpZXR0ZWxcIiwgXCJWaW5hcGhvbmVcIiwgXCJNb2JpZm9uZVwiLCBcIlZpZXRuYW1vYmlsZVwiLCBcIkdhcmVuYVwiLCBcIlZjb2luXCIsIFwiRlBUIEdhdGVcIiwgXCJNb2JpIERhdGFcIl0sXG4gICAgICAgICAgICBsaXN0SWROaGFNYW5nOiBbXCJWVFRcIiwgXCJWTlBcIiwgXCJWTVNcIiwgXCJWTk1cIiwgXCJHQVJcIiwgXCJWVENcIiwgXCJGUFRcIiwgXCJEQk1cIl0sXG4gICAgICAgICAgICBsaXN0TWVuaEdpYU5hcFRoZTogWzEwMDAwLCAxMDAwMDAsIDIwMDAwMCwgNTAwMDAwXSxcbiAgICAgICAgICAgIGxpc3RRdWFudGl0eTogW1wiMVwiLCBcIjJcIiwgXCIzXCJdXG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEhPU1RfU09DS0pTID0gXCJodHRwczovL3N0LkZBTlZJTi53SU4vXCI7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTT0NLSlNfTE9HSU4gPSBcIndlYnNvY2tldC93cy10YWl4aXVcIjtcbiAgICAgICAgLy8gc3RhdGljIHJlYWRvbmx5IFNPQ0tKU19MT0dJTiA9IFwid2Vic29ja2V0L3dzLW1pbmlnYW1lXCI7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBUWFNUX1NVQl9UT1BJQyA9IFwiL3RvcGljL3R4XCI7XG5cbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IG5hbWVLZXlCYW5rID0geyBcIlZDQlwiOiAwLCBcIlRDQlwiOiAxLCBcIlZJQlwiOiAyLCBcIlZQQlwiOiAzIH07XG4gICAgICAgIHN0YXRpYyBCSUxMSU5HX0NPTkY6IGFueTtcblxuICAgICAgICBzdGF0aWMgZ2V0U2VydmVyQ29uZmlnKCkge1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldFBsYXRmb3JtTmFtZSgpIHtcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSByZXR1cm4gXCJhbmRyb2lkXCI7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSByZXR1cm4gXCJpb3NcIjtcbiAgICAgICAgICAgIHJldHVybiBcIndlYlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldExpbmtGYW5wYWdlKCkge1xuICAgICAgICAgICAgc3dpdGNoIChWZXJzaW9uQ29uZmlnLkNQTmFtZSkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS82Nzg5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZ2V0TGlua1RlbGVncmFtKCkge1xuICAgICAgICAgICAgc3dpdGNoIChWZXJzaW9uQ29uZmlnLkNQTmFtZSkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vdC5tZS9ocWdhbWVob3Ryb1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGdldExpbmtUZWxlZ3JhbUdyb3VwKCkge1xuICAgICAgICAgICAgc3dpdGNoIChWZXJzaW9uQ29uZmlnLkNQTmFtZSkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vdC5tZS9ocWdhbWVob3Ryb1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiaW5pdCBjb25maWcgdmFvIGRheSBjYXNpIHNha2RqYXNcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKFZlcnNpb25Db25maWcuRU5WKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFZlcnNpb25Db25maWcuRU5WX0RFVjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VU0VfV1NTID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFQSSA9IFwiaHR0cHM6Ly9pcG9ydGFsLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCIvYXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTU9ORVlfVFlQRSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTElOS19ET1dOTE9BRCA9IFwiaHR0cHM6Ly9cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTElOS19FVkVOVCA9IFwiaHR0cHM6Ly9cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiL2V2ZW50XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX01JTklHQU1FLmhvc3QgPSBcIndtaW5pLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcblx0XHRcdFx0XHR0aGlzLkhPU1RfTUlOSUdBTUUyLmhvc3QgPSBcImxvbC5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9UQUlfWElVX01JTkkyLmhvc3QgPSBcIm92ZXJ1bmRlci5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9TTE9ULmhvc3QgPSBcIndzbG90LlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX1RMTU4uaG9zdCA9IFwid3RsbW4uXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9ERVYgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfU0hPT1RfRklTSC5ob3N0ID0gXCJ3YmFuY2EuXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9ERVYgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfU0FNLmhvc3QgPSBcIndzYW0uXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9ERVYgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfWE9DRElBLmhvc3QgPSBcInd4b2NkaWEuXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9ERVYgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfQkFDQVkuaG9zdCA9IFwid2JhY2F5LlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX0JBSUNBTy5ob3N0ID0gXCJ3YmFpY2FvLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX1BPS0VSLmhvc3QgPSBcIndwb2tlci5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9YSURBQ0guaG9zdCA9IFwid3hpemFjaC5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9CSU5ILmhvc3QgPSBcIndiaW5oLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX0xJRU5HLmhvc3QgPSBcIndsaWVuZy5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coVmVyc2lvbkNvbmZpZy5FTlYpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFZlcnNpb25Db25maWcuRU5WX1BST0Q6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVVNFX1dTUyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BUEkgPSBcImh0dHBzOi8vaXBvcnRhbC5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX1BSTyArIFwiL2FwaVwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1PTkVZX1RZUEUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkxJTktfRE9XTkxPQUQgPSBcImh0dHBzOi8vXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9QUk8gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkxJTktfRVZFTlQgPSBcImh0dHBzOi8vXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9QUk8gKyBcIi9ldmVudFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9NSU5JR0FNRS5ob3N0ID0gXCJ3bWluaS5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX1BSTyArIFwiXCI7XG5cdFx0XHRcdFx0dGhpcy5IT1NUX01JTklHQU1FMi5ob3N0ID0gXCJsb2wuXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9QUk8gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfVEFJX1hJVV9NSU5JMi5ob3N0ID0gXCJvdmVydW5kZXIuXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9QUk8gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfU0xPVC5ob3N0ID0gXCJ3c2xvdC5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX1BSTyArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9UTE1OLmhvc3QgPSBcInd0bG1uLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fUFJPICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX1NIT09UX0ZJU0guaG9zdCA9IFwid2JhbmNhLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fUFJPICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX1NBTS5ob3N0ID0gXCJ3c2FtLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fUFJPICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX1hPQ0RJQS5ob3N0ID0gXCJ3eG9jZGlhLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fUFJPICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX0JBQ0FZLmhvc3QgPSBcIndiYWNheS5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX1BSTyArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9CQUlDQU8uaG9zdCA9IFwid2JhaWNhby5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX1BSTyArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9QT0tFUi5ob3N0ID0gXCJ3cG9rZXIuXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9QUk8gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfWElEQUNILmhvc3QgPSBcInd4aXphY2guXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9QUk8gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfQklOSC5ob3N0ID0gXCJ3YmluaC5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX1BSTyArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9MSUVORy5ob3N0ID0gXCJ3bGllbmcuXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9QUk8gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFZlcnNpb25Db25maWcuRU5WKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VU0VfV1NTID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFQSSA9IFwiaHR0cHM6Ly9pcG9ydGFsLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCIvYXBpXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTU9ORVlfVFlQRSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTElOS19ET1dOTE9BRCA9IFwiaHR0cHM6Ly9cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTElOS19FVkVOVCA9IFwiaHR0cHM6Ly9cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiL2V2ZW50XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX01JTklHQU1FLmhvc3QgPSBcIndtaW5pLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcblx0XHRcdFx0XHR0aGlzLkhPU1RfTUlOSUdBTUUyLmhvc3QgPSBcImxvbC5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9UQUlfWElVX01JTkkyLmhvc3QgPSBcIm92ZXJ1bmRlci5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9TTE9ULmhvc3QgPSBcIndzbG90LlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX1RMTU4uaG9zdCA9IFwid3RsbW4uXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9ERVYgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfU0hPT1RfRklTSC5ob3N0ID0gXCJ3YmFuY2EuXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9ERVYgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfU0FNLmhvc3QgPSBcIndzYW0uXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9ERVYgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfWE9DRElBLmhvc3QgPSBcInd4b2NkaWEuXCIgKyBWZXJzaW9uQ29uZmlnLkRPTUFJTl9ERVYgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhPU1RfQkFDQVkuaG9zdCA9IFwid2JhY2F5LlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX0JBSUNBTy5ob3N0ID0gXCJ3YmFpY2FvLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX1BPS0VSLmhvc3QgPSBcIndwb2tlci5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9YSURBQ0guaG9zdCA9IFwid3hpemFjaC5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSE9TVF9CSU5ILmhvc3QgPSBcIndiaW5oLlwiICsgVmVyc2lvbkNvbmZpZy5ET01BSU5fREVWICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IT1NUX0xJRU5HLmhvc3QgPSBcIndsaWVuZy5cIiArIFZlcnNpb25Db25maWcuRE9NQUlOX0RFViArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBHYW1lSWQge1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgTWluaVBva2VyID0gMTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFRhaVhpdSA9IDI7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBCYXVDdWEgPSAzO1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQ2FvVGhhcCA9IDQ7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTbG90M3gzID0gNTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFZRTU0gPSA3O1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgU2FtID0gODtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEJhQ2F5ID0gOTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IE1hdUJpbmggPSAxMDtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFRMTU4gPSAxMTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFRhTGEgPSAxMjtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IExpZW5nID0gMTM7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBYaVRvID0gMTQ7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBYb2NYb2MgPSAxNTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEJhaUNhbyA9IDE2O1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgUG9rZXIgPSAxNztcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEJlbnRsZXkgPSAxOTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFJhbmdlUm92ZXIgPSAyMDtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IE1heUJhY2ggPSAyMTtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFJvbGxzUm95Y2UgPSAyMjtcblx0XHRzdGF0aWMgcmVhZG9ubHkgVGFpWGl1TUQ1ID0gMjIwMDA7XG5cbiAgICAgICAgc3RhdGljIGdldEdhbWVOYW1lKGdhbWVJZDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZ2FtZUlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLk1pbmlQb2tlcjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTWluaVBva2VyXCI7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLlRhaVhpdTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVMOgaSB44buJdVwiO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5CYXVDdWE6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkLhuqd1IGN1YVwiO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5DYW9UaGFwOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJDYW8gdGjhuqVwXCI7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLlNsb3QzeDM6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNsb3QzeDNcIjtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuVlFNTTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVlFNTVwiO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5TYW06XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlPDom1cIjtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuTWF1QmluaDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTeG6rXUgYmluaFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5UTE1OOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUTE1OXCI7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLlRhTGE6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlTDoSBs4bqjXCI7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLkxpZW5nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJMacOqbmdcIjtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuWGlUbzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiWMOsIHThu5FcIjtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuWG9jWG9jOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJYw7NjIHjDs2NcIjtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuQmFpQ2FvOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCw6BpIGPDoG9cIjtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuUG9rZXI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlBva2VyXCI7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLkJlbnRsZXk6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJlbnRsZXlcIjtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuUmFuZ2VSb3ZlcjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUmFuZ2UgUm92ZXJcIjtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuTWF5QmFjaDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF5IEJhY2hcIjtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuUm9sbHNSb3ljZTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUm9sbHMgUm95Y2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlVua25vd1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFBheW1lbnQge1xuICAgICAgICBzdGF0aWMgRGVwb3NpdCA9IG51bGw7XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBFdmVudEZhY2Vib29rIHtcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX05BTUVfQUNUSVZBVEVEX0FQUCA9IFwiZmJfbW9iaWxlX2FjdGl2YXRlX2FwcFwiIC8vbW8gYXBwXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9OQU1FX0RFQUNUSVZBVEVEX0FQUCA9IFwiZmJfbW9iaWxlX2RlYWN0aXZhdGVfYXBwXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX05BTUVfU0VTU0lPTl9JTlRFUlJVUFRJT05TID0gXCJmYl9tb2JpbGVfYXBwX2ludGVycnVwdGlvbnNcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfTkFNRV9USU1FX0JFVFdFRU5fU0VTU0lPTlMgPSBcImZiX21vYmlsZV90aW1lX2JldHdlZW5fc2Vzc2lvbnNcIlxuXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9OQU1FX0NPTVBMRVRFRF9SRUdJU1RSQVRJT04gPSBcImZiX21vYmlsZV9jb21wbGV0ZV9yZWdpc3RyYXRpb25cIiAvL2Rhbmcga3lcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX05BTUVfQ09NUExFVEVEX0xPR0lOID0gXCJmYl9tb2JpbGVfY29tcGxldGVfbG9naW5cIi8vdG9kbyBkYW5nIG5oYXBcblxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfTkFNRV9WSUVXRURfQ09OVEVOVCA9IFwiZmJfbW9iaWxlX2NvbnRlbnRfdmlld1wiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9OQU1FX1NFQVJDSEVEID0gXCJmYl9tb2JpbGVfc2VhcmNoXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX05BTUVfUkFURUQgPSBcImZiX21vYmlsZV9yYXRlXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX05BTUVfQ09NUExFVEVEX1RVVE9SSUFMID0gXCJmYl9tb2JpbGVfdHV0b3JpYWxfY29tcGxldGlvblwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9OQU1FX1BVU0hfVE9LRU5fT0JUQUlORUQgPSBcImZiX21vYmlsZV9vYnRhaW5fcHVzaF90b2tlblwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9OQU1FX0FEREVEX1RPX0NBUlQgPSBcImZiX21vYmlsZV9hZGRfdG9fY2FydFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9OQU1FX0FEREVEX1RPX1dJU0hMSVNUID0gXCJmYl9tb2JpbGVfYWRkX3RvX3dpc2hsaXN0XCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX05BTUVfSU5JVElBVEVEX0NIRUNLT1VUID0gXCJmYl9tb2JpbGVfaW5pdGlhdGVkX2NoZWNrb3V0XCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX05BTUVfQURERURfUEFZTUVOVF9JTkZPID0gXCJmYl9tb2JpbGVfYWRkX3BheW1lbnRfaW5mb1wiIC8vc2R0XG5cbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX05BTUVfUFVSQ0hBU0VEID0gXCJmYl9tb2JpbGVfcHVyY2hhc2VcIiAvL25hcCB0aWVuXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9OQU1FX0VBUk5fVklSVFVBTF9DVVJSRU5DWSA9IFwiZmJfbW9iaWxlX2Vhcm5fdmlydHVhbF9jdXJyZW5jeVwiIC8vdG9kbyBkb2kgdGh1b25nXG5cbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX05BTUVfQUNISUVWRURfTEVWRUwgPSBcImZiX21vYmlsZV9sZXZlbF9hY2hpZXZlZFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9OQU1FX1VOTE9DS0VEX0FDSElFVkVNRU5UID0gXCJmYl9tb2JpbGVfYWNoaWV2ZW1lbnRfdW5sb2NrZWRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfTkFNRV9TUEVOVF9DUkVESVRTID0gXCJmYl9tb2JpbGVfc3BlbnRfY3JlZGl0c1wiIC8vdGlldSB0aWVuXG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBQYXJhbXNGYWNlYm9vayB7XG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9QQVJBTV9DVVJSRU5DWSA9IFwiZmJfY3VycmVuY3lcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfUEFSQU1fUkVHSVNUUkFUSU9OX01FVEhPRCA9IFwiZmJfcmVnaXN0cmF0aW9uX21ldGhvZFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9QQVJBTV9MT0dJTl9NRVRIT0QgPSBcImZiX2xvZ2luX21ldGhvZFwiIC8vdG9kb1xuXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9QQVJBTV9DT05URU5UX1RZUEUgPSBcImZiX2NvbnRlbnRfdHlwZVwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9QQVJBTV9DT05URU5UID0gXCJmYl9jb250ZW50XCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX1BBUkFNX0NPTlRFTlRfSUQgPSBcImZiX2NvbnRlbnRfaWRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfUEFSQU1fU0VBUkNIX1NUUklORyA9IFwiZmJfc2VhcmNoX3N0cmluZ1wiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9QQVJBTV9TVUNDRVNTID0gXCJmYl9zdWNjZXNzXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX1BBUkFNX01BWF9SQVRJTkdfVkFMVUUgPSBcImZiX21heF9yYXRpbmdfdmFsdWVcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfUEFSQU1fUEFZTUVOVF9JTkZPX0FWQUlMQUJMRSA9IFwiZmJfcGF5bWVudF9pbmZvX2F2YWlsYWJsZVwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9QQVJBTV9OVU1fSVRFTVMgPSBcImZiX251bV9pdGVtc1wiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBFVkVOVF9QQVJBTV9MRVZFTCA9IFwiZmJfbGV2ZWxcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfUEFSQU1fREVTQ1JJUFRJT04gPSBcImZiX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX1BBUkFNX1NPVVJDRV9BUFBMSUNBVElPTiA9IFwiZmJfbW9iaWxlX2xhdW5jaF9zb3VyY2VcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfUEFSQU1fVkFMVUVfWUVTID0gXCIxXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVWRU5UX1BBUkFNX1ZBTFVFX05PID0gXCIwXCJcbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIEV2ZW50RmlyZWJhc2Uge1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQUREX1BBWU1FTlRfSU5GTyA9IFwiYWRkX3BheW1lbnRfaW5mb1wiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBBRERfVE9fQ0FSVCA9IFwiYWRkX3RvX2NhcnRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQUREX1RPX1dJU0hMSVNUID0gXCJhZGRfdG9fd2lzaGxpc3RcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQVBQX09QRU4gPSBcImFwcF9vcGVuXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEJFR0lOX0NIRUNLT1VUID0gXCJiZWdpbl9jaGVja291dFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBDQU1QQUlHTl9ERVRBSUxTID0gXCJjYW1wYWlnbl9kZXRhaWxzXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVDT01NRVJDRV9QVVJDSEFTRSA9IFwiZWNvbW1lcmNlX3B1cmNoYXNlXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEdFTkVSQVRFX0xFQUQgPSBcImdlbmVyYXRlX2xlYWRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgSk9JTl9HUk9VUCA9IFwiam9pbl9ncm91cFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBMRVZFTF9VUCA9IFwibGV2ZWxfdXBcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgTE9HSU4gPSBcImxvZ2luXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFBPU1RfU0NPUkUgPSBcInBvc3Rfc2NvcmVcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgUFJFU0VOVF9PRkZFUiA9IFwicHJlc2VudF9vZmZlclwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBQVVJDSEFTRV9SRUZVTkQgPSBcInB1cmNoYXNlX3JlZnVuZFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTRUFSQ0ggPSBcInNlYXJjaFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTRUxFQ1RfQ09OVEVOVCA9IFwic2VsZWN0X2NvbnRlbnRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgU0hBUkUgPSBcInNoYXJlXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFNJR05fVVAgPSBcInNpZ25fdXBcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgU1BFTkRfVklSVFVBTF9DVVJSRU5DWSA9IFwic3BlbmRfdmlydHVhbF9jdXJyZW5jeVwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBUVVRPUklBTF9CRUdJTiA9IFwidHV0b3JpYWxfYmVnaW5cIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgVFVUT1JJQUxfQ09NUExFVEUgPSBcInR1dG9yaWFsX2NvbXBsZXRlXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFVOTE9DS19BQ0hJRVZFTUVOVCA9IFwidW5sb2NrX2FjaGlldmVtZW50XCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFZJRVdfSVRFTSA9IFwidmlld19pdGVtXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFZJRVdfSVRFTV9MSVNUID0gXCJ2aWV3X2l0ZW1fbGlzdFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBWSUVXX1NFQVJDSF9SRVNVTFRTID0gXCJ2aWV3X3NlYXJjaF9yZXN1bHRzXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVBUk5fVklSVFVBTF9DVVJSRU5DWSA9IFwiZWFybl92aXJ0dWFsX2N1cnJlbmN5XCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFJFTU9WRV9GUk9NX0NBUlQgPSBcInJlbW92ZV9mcm9tX2NhcnRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQ0hFQ0tPVVRfUFJPR1JFU1MgPSBcImNoZWNrb3V0X3Byb2dyZXNzXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFNFVF9DSEVDS09VVF9PUFRJT04gPSBcInNldF9jaGVja291dF9vcHRpb25cIlxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUGFyYW1zRmlyZUJhc2Uge1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQUNISUVWRU1FTlRfSUQgPSBcImFjaGlldmVtZW50X2lkXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IENIQVJBQ1RFUiA9IFwiY2hhcmFjdGVyXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFRSQVZFTF9DTEFTUyA9IFwidHJhdmVsX2NsYXNzXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IENPTlRFTlRfVFlQRSA9IFwiY29udGVudF90eXBlXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IENVUlJFTkNZID0gXCJjdXJyZW5jeVwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBDT1VQT04gPSBcImNvdXBvblwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTVEFSVF9EQVRFID0gXCJzdGFydF9kYXRlXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEVORF9EQVRFID0gXCJlbmRfZGF0ZVwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBGTElHSFRfTlVNQkVSID0gXCJmbGlnaHRfbnVtYmVyXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IEdST1VQX0lEID0gXCJncm91cF9pZFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBJVEVNX0NBVEVHT1JZID0gXCJpdGVtX2NhdGVnb3J5XCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IElURU1fSUQgPSBcIml0ZW1faWRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgSVRFTV9MT0NBVElPTl9JRCA9IFwiaXRlbV9sb2NhdGlvbl9pZFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBJVEVNX05BTUUgPSBcIml0ZW1fbmFtZVwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBMT0NBVElPTiA9IFwibG9jYXRpb25cIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgTEVWRUwgPSBcImxldmVsXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFNJR05fVVBfTUVUSE9EID0gXCJzaWduX3VwX21ldGhvZFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBOVU1CRVJfT0ZfTklHSFRTID0gXCJudW1iZXJfb2ZfbmlnaHRzXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IE5VTUJFUl9PRl9QQVNTRU5HRVJTID0gXCJudW1iZXJfb2ZfcGFzc2VuZ2Vyc1wiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBOVU1CRVJfT0ZfUk9PTVMgPSBcIm51bWJlcl9vZl9yb29tc1wiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBERVNUSU5BVElPTiA9IFwiZGVzdGluYXRpb25cIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgT1JJR0lOID0gXCJvcmlnaW5cIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgUFJJQ0UgPSBcInByaWNlXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFFVQU5USVRZID0gXCJxdWFudGl0eVwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTQ09SRSA9IFwic2NvcmVcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgU0hJUFBJTkcgPSBcInNoaXBwaW5nXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFRSQU5TQUNUSU9OX0lEID0gXCJ0cmFuc2FjdGlvbl9pZFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTRUFSQ0hfVEVSTSA9IFwic2VhcmNoX3Rlcm1cIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgVEFYID0gXCJ0YXhcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgVkFMVUUgPSBcInZhbHVlXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IFZJUlRVQUxfQ1VSUkVOQ1lfTkFNRSA9IFwidmlydHVhbF9jdXJyZW5jeV9uYW1lXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IENBTVBBSUdOID0gXCJjYW1wYWlnblwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBTT1VSQ0UgPSBcInNvdXJjZVwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBNRURJVU0gPSBcIm1lZGl1bVwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBURVJNID0gXCJ0ZXJtXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IENPTlRFTlQgPSBcImNvbnRlbnRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQUNMSUQgPSBcImFjbGlkXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IENQMSA9IFwiY3AxXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IElURU1fQlJBTkQgPSBcIml0ZW1fYnJhbmRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgSVRFTV9WQVJJQU5UID0gXCJpdGVtX3ZhcmlhbnRcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgSVRFTV9MSVNUID0gXCJpdGVtX2xpc3RcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQ0hFQ0tPVVRfU1RFUCA9IFwiY2hlY2tvdXRfc3RlcFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBDSEVDS09VVF9PUFRJT04gPSBcImNoZWNrb3V0X29wdGlvblwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBDUkVBVElWRV9OQU1FID0gXCJjcmVhdGl2ZV9uYW1lXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IENSRUFUSVZFX1NMT1QgPSBcImNyZWF0aXZlX3Nsb3RcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgQUZGSUxJQVRJT04gPSBcImFmZmlsaWF0aW9uXCJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IElOREVYID0gXCJpbmRleFwiXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBNRVRIT0QgPSBcIm1ldGhvZFwiXG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBQYXJhbVR5cGUge1xuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgU1RSSU5HID0gXCJTdHJpbmdcIlxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgRE9VQkxFID0gXCJEb3VibGVcIlxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgQ29uZmlncztcbkNvbmZpZ3MuQXBwLmluaXQoKTtcblxuLy9hY2MgdGVzdDogQnJpZ2h0MTExL2FkbWluMTIzIGJyaWdodC8xMjM0NTYiXX0=