"use strict";
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