
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.LobbyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05872A3wjpOT464qKBM+MO6', 'Lobby.LobbyController');
// Lobby/LobbyScript/Lobby.LobbyController.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelMenu = void 0;
var Http_1 = require("../../Loading/src/Http");
var Configs_1 = require("../../Loading/src/Configs");
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var Lobby_TabsListGame_1 = require("./Lobby.TabsListGame");
var GameLiveController_1 = require("./GameLive/GameLiveController");
var Lobby_ItemTopHu_1 = require("./Lobby.ItemTopHu");
var BundleControl_1 = require("../../Loading/src/BundleControl");
var LogEvent_1 = require("../../Loading/src/LogEvent/LogEvent");
var Global_1 = require("../../Loading/src/Global");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Common_AudioManager_1 = require("./Script/common/Common.AudioManager");
var SPUtils_1 = require("./Script/common/SPUtils");
var Tween_1 = require("./Script/common/Tween");
var Utils_1 = require("./Script/common/Utils");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var MiniGameNetworkClient2_1 = require("./Script/networks/MiniGameNetworkClient2");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var SamNetworkClient_1 = require("./Script/networks/SamNetworkClient");
var SlotNetworkClient_1 = require("./Script/networks/SlotNetworkClient");
var TienLenNetworkClient_1 = require("./Script/networks/TienLenNetworkClient");
var Facebook_1 = require("./Script/Service/FaceBook/Facebook");
var TienLen_Room_1 = require("./TienLenScript/TienLen.Room");
var Lobby_BannerList_1 = require("./Lobby.BannerList");
var TaiXiuSieuToc_NetworkClient_1 = require("./Script/networks/TaiXiuSieuToc.NetworkClient");
var Lobby_BoxLixi_1 = require("./Lobby.BoxLixi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var _this = null;
var PanelMenu = /** @class */ (function () {
    function PanelMenu() {
        this.node = null;
        this.bg = null;
        this.toggleMusic = null;
        this.toggleSound = null;
        this.animate = false;
    }
    PanelMenu.prototype.start = function () {
        var _this_1 = this;
        App_1.default.instance.isShowNotifyJackpot = true;
        this.toggleMusic.node.on("toggle", function () {
            SPUtils_1.default.setMusicVolumn(_this_1.toggleMusic.isChecked ? 1 : 0);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
        });
        this.toggleSound.node.on("toggle", function () {
            SPUtils_1.default.setSoundVolumn(_this_1.toggleSound.isChecked ? 1 : 0);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
        });
        this.toggleMusic.isChecked = SPUtils_1.default.getMusicVolumn() > 0;
        this.toggleSound.isChecked = SPUtils_1.default.getSoundVolumn() > 0;
        this.node.active = false;
        // App.instance.setUpNode();
    };
    PanelMenu.prototype.show = function () {
        var _this_1 = this;
        if (this.animate)
            return;
        this.animate = true;
        this.node.stopAllActions();
        this.node.active = true;
        cc.tween(this.bg).set({ scale: 0.8, opacity: 150 }).to(0.3, { scale: 1.0, opacity: 255 }, { easing: cc.easing.backOut }).call(function () {
            _this_1.animate = false;
        }).start();
    };
    PanelMenu.prototype.hide = function () {
        var _this_1 = this;
        this.node.stopAllActions();
        cc.tween(this.bg).to(0.3, { scale: 0.8, opacity: 150 }, { easing: cc.easing.backIn }).call(function () {
            _this_1.node.parent.active = false;
            _this_1.animate = false;
        }).start();
    };
    PanelMenu.prototype.dismiss = function () {
        var _this_1 = this;
        if (this.animate)
            return;
        this.animate = true;
        cc.tween(this.bg).to(0.3, { scale: 0.8, opacity: 150 }, { easing: cc.easing.backIn }).call(function () {
            _this_1.node.parent.active = false;
            _this_1.animate = false;
        }).start();
    };
    PanelMenu.prototype.toggle = function () {
        if (this.node.active) {
            this.dismiss();
        }
        else {
            this.show();
        }
    };
    __decorate([
        property(cc.Node)
    ], PanelMenu.prototype, "node", void 0);
    __decorate([
        property(cc.Node)
    ], PanelMenu.prototype, "bg", void 0);
    __decorate([
        property(cc.Toggle)
    ], PanelMenu.prototype, "toggleMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], PanelMenu.prototype, "toggleSound", void 0);
    PanelMenu = __decorate([
        ccclass("Lobby.LobbyController.PanelMenu")
    ], PanelMenu);
    return PanelMenu;
}());
exports.PanelMenu = PanelMenu;
var Lobby;
(function (Lobby) {
    var LobbyController = /** @class */ (function (_super) {
        __extends(LobbyController, _super);
        function LobbyController() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.nodeTop = null;
            _this_1.nodeBot = null;
            _this_1.nodeCenter = null;
            _this_1.txtMail = null;
            _this_1.txtMailz = null;
            _this_1.panelNotLogin = null;
            _this_1.panelCSKH = null;
            _this_1.panelCSKH1 = null;
            _this_1.gameLiveController = null;
            _this_1.panelLogined = null;
            _this_1.panelMenu = null;
            _this_1.sprAvatar = null;
            _this_1.lblNickname = null;
            _this_1.lblVipPoint = null;
            _this_1.sliderVipPoint = null;
            _this_1.lblVipPointName = null;
            _this_1.spriteProgressVipPoint = null;
            _this_1.lblCoin = null;
            _this_1.txtNotifyMarquee = null;
            _this_1.bgNotify = null;
            _this_1.lblTai = null;
            _this_1.lblcaothap = null;
            _this_1.lblJPTai = null;
            _this_1.lblminipoker = null;
            _this_1.lbllonuocthan = null;
            _this_1.lblXiu = null;
            _this_1.btnLoginFb = null;
            _this_1.buttonjb = null;
            _this_1.boxLixi = null;
            _this_1.tabsListGame = null;
            _this_1.bannerList = null;
            _this_1.popupGiftCode = null;
            _this_1.popupUpdateNickname = null;
            _this_1.popupTransaction = null;
            _this_1.popupTopHu = null;
            _this_1.popupSecurity = null;
            _this_1.popupKiemTien = null;
            _this_1.popupDiemDanh1 = null;
            _this_1.popupRefund = null;
            _this_1.popupEvent = null;
            _this_1.popupEventTT = null;
            _this_1.popupMail = null;
            _this_1.popupDiemDanh = null;
            _this_1.popupDaily = null;
            _this_1.Popupnaprut = null;
            _this_1.popupRegister = null;
            _this_1.poupLogin = null;
            _this_1.popupForgetPassword = null;
            _this_1.popupTaiApp = null;
            _this_1.popupProfile = null;
            _this_1.popupShop = null;
            _this_1.popupCashout = null;
            _this_1.clipBgm = null;
            _this_1.listData100 = new Array();
            _this_1.listData1000 = new Array();
            _this_1.listData10000 = new Array();
            _this_1.dataAlertMini = {};
            _this_1.fakeJPInv = null;
            _this_1.isShowCSKH = false;
            _this_1.isShowCSKH1 = false;
            return _this_1;
        }
        LobbyController_1 = LobbyController;
        LobbyController.prototype.onLoad = function () {
            Global_1.Global.LobbyController = this;
            if (BundleControl_1.default.serverVersion.hasOwnProperty('FbConfig')) {
                this.btnLoginFb.active = BundleControl_1.default.serverVersion['FbConfig'].isShowBtnFb;
            }
            this.nodeCenter.active = false;
            this.nodeTop.y = cc.winSize.height / 2 + this.nodeTop.height / 2;
            this.nodeBot.y = -cc.winSize.height / 2 - this.nodeBot.height;
            if (this.isUseSDK()) {
                // this.initPluginFirebase();
                this.initPluginFacebook();
            }
            ;
            //          this.buttonjb.x = cc.winSize.width / 2 - 50;
            //    this.buttonjb.on(cc.Node.EventType.TOUCH_START, (event: cc.Event.EventTouch) => {
            //        this.buttonClicked = true;
            //        this.buttonMoved = cc.Vec2.ZERO;
            //    }, this);
            //
            //    this.buttonjb.on(cc.Node.EventType.TOUCH_MOVE, (event: cc.Event.EventTouch) => {
            //        this.buttonMoved = this.buttonMoved.add(event.getDelta());
            //        if (this.buttonClicked) {
            //            if (Math.abs(this.buttonMoved.x) > 30 || Math.abs(this.buttonMoved.y) > 30) {
            //                let pos = this.buttonjb.position;
            //                pos.x += this.buttonMoved.x;
            //                pos.y += this.buttonMoved.y;
            //                this.buttonjb.position = pos;
            //                this.buttonClicked = false;
            //            }
            //        } else {
            //            let pos = this.buttonjb.position;
            //            pos.x += event.getDeltaX();
            //            pos.y += event.getDeltaY();
            //            this.buttonjb.position = pos;
            //        }
            //    }, this);
            //
            //    this.buttonjb.on(cc.Node.EventType.TOUCH_END, (event: cc.Event.EventTouch) => {
            //        if (this.buttonClicked) {
            //            this.actTopHu();
            //        }
            //        let posX = this.buttonjb.x > 0 ? cc.winSize.width / 2 - 60 : -cc.winSize.width / 2 + 60;
            //        cc.tween(this.buttonjb).to(0.3, { x: posX }, { easing: cc.easing.sineOut }).start();
            //    }, this);
        };
        LobbyController.prototype.start = function () {
            var _this_1 = this;
            _this = this;
            var tileScreen = cc.winSize.width / 1560;
            //    this.bottomBarLeft.width = this.bottomBarLeft.width * tileScreen
            //    this.bottomBarRight.width = this.bottomBarRight.width * tileScreen
            setTimeout(function () {
                LogEvent_1.default.getInstance().sendEventOpenApp();
            }, 1000);
            this.lblCoin.node.parent.active = true;
            if (cc.sys.isBrowser) {
                if (window.localStorage.getItem('u') != null && window.localStorage.getItem('at') != null) {
                    var data = {};
                    data['u'] = window.localStorage.getItem('u');
                    data['at'] = window.localStorage.getItem('at');
                    App_1.default.instance.TYPE_LOGIN = "NORMAL";
                    App_1.default.instance.USER_NAME = window.localStorage.getItem('un');
                    App_1.default.instance.PASS_WORD = window.localStorage.getItem('pw');
                    this.actLoginToken(data);
                }
                else if (window.localStorage.getItem('un') != null && window.localStorage.getItem('pw') != null) {
                    //    this.atcPopupUpdateNickName(window.localStorage.getItem('un'), window.localStorage.getItem('pw'));
                    App_1.default.instance.TYPE_LOGIN = "NORMAL";
                    App_1.default.instance.USER_NAME = window.localStorage.getItem('un');
                    App_1.default.instance.PASS_WORD = window.localStorage.getItem('pw');
                }
                else if (window.localStorage.getItem('at_fb') + null) {
                    Configs_1.default.Login.AccessTokenFB = window.localStorage.getItem('at_fb');
                    Configs_1.default.Login.FacebookID = window.localStorage.getItem('fb_id');
                    App_1.default.instance.TYPE_LOGIN = "FACEBOOK";
                    App_1.default.instance.FB_ID = window.localStorage.getItem('fb_id');
                    App_1.default.instance.AT_FB = window.localStorage.getItem('at_fb');
                    this.loginFB();
                }
                else if (cc.sys.localStorage.getItem("user_name") != "null" && cc.sys.localStorage.getItem("IsAutoLogin") == 1) {
                    //login
                    if (Configs_1.default.Login.IsLogin == false) {
                        this.actLogin(cc.sys.localStorage.getItem("user_name"), cc.sys.localStorage.getItem("pass_word"));
                        App_1.default.instance.TYPE_LOGIN = "NORMAL";
                        App_1.default.instance.USER_NAME = cc.sys.localStorage.getItem("user_name");
                        App_1.default.instance.PASS_WORD = cc.sys.localStorage.getItem("pass_word");
                    }
                }
            }
            else {
                if (cc.sys.localStorage.getItem("user_name") != "null" && cc.sys.localStorage.getItem("IsAuto") == 1) {
                    //login
                    if (Configs_1.default.Login.IsLogin == false) {
                        this.actLogin(cc.sys.localStorage.getItem("user_name"), cc.sys.localStorage.getItem("pass_word"));
                        App_1.default.instance.TYPE_LOGIN = "NORMAL";
                        App_1.default.instance.USER_NAME = cc.sys.localStorage.getItem("user_name");
                        App_1.default.instance.PASS_WORD = cc.sys.localStorage.getItem("pass_word");
                    }
                }
            }
            this.panelMenu.start();
            BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.UPDATE_NICKNAME_SUCCESS, function (data) {
            }, this);
            BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
                Tween_1.default.numberTo(_this_1.lblCoin, Configs_1.default.Login.Coin, 0.3);
            }, this);
            BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.ON_UPDATE_MAIL, function () {
                _this_1.updateMail();
            }, this);
            BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_INFO_UPDATED, function () {
                _this_1.lblNickname.string = Configs_1.default.Login.Nickname;
                _this_1.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
                _this_1.lblVipPoint.string = "VP: " + Utils_1.default.formatNumber(Configs_1.default.Login.VipPoint) + "/" + Utils_1.default.formatNumber(Configs_1.default.Login.getVipPointNextLevel());
                _this_1.sliderVipPoint.progress = Math.min(Configs_1.default.Login.VipPoint / Configs_1.default.Login.getVipPointNextLevel(), 1);
                _this_1.spriteProgressVipPoint.fillRange = _this_1.sliderVipPoint.progress;
                _this_1.lblVipPointName.string = Configs_1.default.Login.getVipPointName();
                _this_1.panelNotLogin.active = false;
                _this_1.panelLogined.active = true;
                _this_1.updateMail();
                MiniGameNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqGetSecurityInfo());
                MiniGameNetworkClient2_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqGetSecurityInfo());
                Tween_1.default.numberTo(_this_1.lblCoin, Configs_1.default.Login.Coin, 0.3);
                MiniGameNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.SendScribe());
            }, this);
            BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function (data) {
                Configs_1.default.Login.clear();
                _this_1.panelNotLogin.active = true;
                _this_1.panelLogined.active = false;
                MiniGameNetworkClient_1.default.getInstance().close();
                MiniGameNetworkClient2_1.default.getInstance().close();
                SlotNetworkClient_1.default.getInstance().close();
                TienLenNetworkClient_1.default.getInstance().close();
                //      ShootFishNetworkClient.getInstance().close();
                // App.instance.buttonMiniGame.hidden();
            }, this);
            if (!Configs_1.default.Login.IsLogin) {
                // if (SPUtils.getUserAccessTokenFB().length > 0) {
                //     this.actLoginFB()
                // }
                // else if (this.edbUsername.string.length > 0 && this.edbPassword.string.length > 0) {
                //     this.actLogin();
                // }
                this.panelNotLogin.active = true;
                this.panelLogined.active = false;
                App_1.default.instance.buttonMiniGame.hidden();
                //fake jackpot
                var j100 = Utils_1.default.randomRangeInt(5000, 7000) * 100;
                var j1000 = Utils_1.default.randomRangeInt(5000, 7000) * 1000;
                var j10000 = Utils_1.default.randomRangeInt(5000, 7000) * 10000;
                // //
                this.tabsListGame.updateItemJackpots("audition", j100, false, j1000, false, j10000, false); //tay du
                this.tabsListGame.updateItemJackpots("captain", j100, false, j1000, false, j10000, false);
                this.tabsListGame.updateItemJackpots("spartans", j100, false, j1000, false, j10000, false); //than tai
                this.tabsListGame.updateItemJackpots("tamhung", j100, false, j1000, false, j10000, false); //chim dien
                this.tabsListGame.updateItemJackpots("aztec", j100, false, j1000, false, j10000, false);
                this.tabsListGame.updateItemJackpots("zeus", j100, false, j1000, false, j10000, false);
                this.tabsListGame.updateItemJackpots("thethao", j100, false, j1000, false, j10000, false);
                this.tabsListGame.updateItemJackpots("shootfish", j100, false, j1000, false, j10000, false);
                this.tabsListGame.updateItemJackpots("chiemtinh", j100, false, j1000, false, j10000, false);
                this.createListdata(j100, j1000, j10000);
                //    this.topHu.ShowData(this.listData100, this.listData1000, this.listData10000);
            }
            else {
                this.panelNotLogin.active = false;
                this.panelLogined.active = true;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
                SlotNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeHallSlot());
                MiniGameNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqGetMoneyUse());
            }
            Configs_1.default.App.getServerConfig();
            MiniGameNetworkClient_1.default.getInstance().addOnClose(function () {
                ////Utils.Log("on close minigame");
            }, this);
            this.startEff();
        };
        LobbyController.prototype.startEff = function () {
            var _this_1 = this;
            cc.tween(this.nodeTop)
                .set({ y: cc.winSize.height / 2, opacity: 150 })
                .to(0.3, { y: cc.winSize.height / 2 - this.nodeTop.height / 2, opacity: 255 }, { easing: cc.easing.sineIn })
                .call(function () {
                _this_1.nodeCenter.active = true;
                _this_1.nodeTop.getComponent(cc.Widget).isAlignTop = true;
                _this_1.setupListener();
                //    this.layoutBtnLeft.spacingX = 50 * (cc.winSize.width / 1560);
                //    this.layoutLbLeft.spacingX = 50 * (cc.winSize.width / 1560);
                //    this.layoutLbRight.spacingX = 50 * (cc.winSize.width / 1560);
                //    this.layoutBtnRight.spacingX = 50 * (cc.winSize.width / 1560);
            })
                .delay(0.25)
                // .call(() => {
                //     this.getConfigGame();
                // })
                .start();
            cc.tween(this.nodeBot)
                .set({ y: -cc.winSize.height / 2, opacity: 150 })
                .to(0.3, { y: -cc.winSize.height / 2 + this.nodeBot.height / 2, opacity: 255 }, { easing: cc.easing.sineIn })
                .call(function () {
                _this_1.nodeBot.getComponent(cc.Widget).isAlignBottom = true;
            })
                .start();
        };
        LobbyController.prototype.setupListener = function () {
            var _this_1 = this;
            Common_AudioManager_1.default.getInstance().playBackgroundMusic(this.clipBgm);
            if (!Configs_1.default.Login.IsLogin) {
                this.panelNotLogin.active = true;
                this.panelLogined.active = false;
                // App.instance.buttonMiniGame.hidden();
                App_1.default.instance.fakeTopHuData = {
                    DUAXE: {
                        j100: Utils_1.default.randomRangeInt(5000, 7000) * 100,
                        j1000: Utils_1.default.randomRangeInt(5000, 7000) * 1000,
                        j10000: Utils_1.default.randomRangeInt(5000, 7000) * 10000
                    },
                    BITCOIN: {
                        j100: Utils_1.default.randomRangeInt(5000, 7000) * 100,
                        j1000: Utils_1.default.randomRangeInt(5000, 7000) * 1000,
                        j10000: Utils_1.default.randomRangeInt(5000, 7000) * 10000
                    },
                    THANTAI: {
                        j100: Utils_1.default.randomRangeInt(5000, 7000) * 100,
                        j1000: Utils_1.default.randomRangeInt(5000, 7000) * 1000,
                        j10000: Utils_1.default.randomRangeInt(5000, 7000) * 10000
                    },
                    CHIMDIEN: {
                        j100: Utils_1.default.randomRangeInt(5000, 7000) * 100,
                        j1000: Utils_1.default.randomRangeInt(5000, 7000) * 1000,
                        j10000: Utils_1.default.randomRangeInt(5000, 7000) * 10000
                    },
                    BIKINI: {
                        j100: Utils_1.default.randomRangeInt(5000, 7000) * 100,
                        j1000: Utils_1.default.randomRangeInt(5000, 7000) * 1000,
                        j10000: Utils_1.default.randomRangeInt(5000, 7000) * 10000
                    },
                    THETHAO: {
                        j100: Utils_1.default.randomRangeInt(5000, 7000) * 100,
                        j1000: Utils_1.default.randomRangeInt(5000, 7000) * 1000,
                        j10000: Utils_1.default.randomRangeInt(5000, 7000) * 10000
                    },
                    CHIEMTINH: {
                        j100: Utils_1.default.randomRangeInt(5000, 7000) * 100,
                        j1000: Utils_1.default.randomRangeInt(5000, 7000) * 1000,
                        j10000: Utils_1.default.randomRangeInt(5000, 7000) * 10000
                    },
                    THANBAI: {
                        j100: Utils_1.default.randomRangeInt(5000, 7000) * 100,
                        j1000: Utils_1.default.randomRangeInt(5000, 7000) * 1000,
                        j10000: Utils_1.default.randomRangeInt(5000, 7000) * 10000
                    },
                };
                this.initFakeJP();
                setInterval(this.fakeJPInv = function () {
                    if (!Configs_1.default.Login.IsLogin) {
                        _this_1.initFakeJP();
                    }
                    else {
                        clearInterval(_this_1.fakeJPInv);
                    }
                }, 5000);
            }
            else {
                this.panelNotLogin.active = false;
                this.panelLogined.active = true;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
                SlotNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeHallSlot());
                MiniGameNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqGetMoneyUse());
            }
            MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
                var inPacket = new Network_InPacket_1.default(data);
                switch (inPacket.getCmdId()) {
                    case Lobby_Cmd_1.default.Code.GET_SECURITY_INFO:
                        App_1.default.instance.showLoading(false);
                        var res = new Lobby_Cmd_1.default.ResGetSecurityInfo(data);
                        // res.usertype = "2";
                        Configs_1.default.Login.UserType = res.usertype;
                        if (Configs_1.default.Login.UserType == "2" && App_1.default.instance.RECONNECT_GAME == false) {
                            App_1.default.instance.updateConfigGame();
                            _this_1.reConnectGame();
                        }
                        break;
                    case Lobby_Cmd_1.default.Code.NOTIFY_MARQUEE: {
                        var res_1 = new Lobby_Cmd_1.default.ResNotifyMarquee(data);
                        var resJson = JSON.parse(res_1.message);
                        LobbyController_1.notifyMarquee = "";
                        _this_1.dataAlertMini = resJson;
                        _this_1.showAlertMiniGame();
                        break;
                    }
                    case Lobby_Cmd_1.default.Code.UPDATE_JACKPOTS: {
                        var res_2 = new Lobby_Cmd_1.default.ResUpdateJackpots(data);
                        break;
                    }
                    case Lobby_Cmd_1.default.Code.GET_MONEY_USE: {
                        var res_3 = new Lobby_Cmd_1.default.ResGetMoneyUse(data);
                        Configs_1.default.Login.Coin = res_3.moneyUse;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        break;
                    }
                    case Lobby_Cmd_1.default.Code.LOGOUT: {
                        ////Utils.Log("Login from other places!");
                        Global_1.Global.isLoginFromOtherPlaces = true;
                        MiniGameNetworkClient_1.default.getInstance().isForceClose = true;
                        App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_login_from_other'));
                        _this_1.panelMenu.node.parent.active = false;
                        _this_1.panelMenu.hide();
                        if (cc.sys.isBrowser) {
                            window.localStorage.removeItem('u');
                            window.localStorage.removeItem('at');
                            window.localStorage.removeItem('at_fb');
                            window.localStorage.removeItem('un');
                            window.localStorage.removeItem('pw');
                        }
                        SPUtils_1.default.setUserName("");
                        SPUtils_1.default.setUserPass("");
                        cc.sys.localStorage.setItem("IsAutoLogin", 0);
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_LOGOUT);
                        App_1.default.instance.updateConfigGame(App_1.default.DOMAIN);
                        App_1.default.instance.RECONNECT_GAME = false;
                        break;
                    }
                    case Lobby_Cmd_1.default.Code.LOGIN: {
                        ////Utils.Log("Login Mini Game Success!");
                        var res_4 = new Lobby_Cmd_1.default.ResLogin(data);
                        break;
                    }
                    case Lobby_Cmd_1.default.Code.TX_GAME_INFO: {
                        var res_5 = new Lobby_Cmd_1.default.TXGameInfo(data);
                        var chipEnd = res_5.potTai > res_5.potXiu ? res_5.potXiu : res_5.potTai;
                        var potTai = !res_5.bettingState ? chipEnd : res_5.potTai;
                        var potXiu = !res_5.bettingState ? chipEnd : res_5.potXiu;
                        if (_this_1.lblTai)
                            Tween_1.default.numberTo(_this_1.lblTai, potTai, 0.3);
                        if (_this_1.lblXiu)
                            Tween_1.default.numberTo(_this_1.lblXiu, potXiu, 0.3);
                        break;
                    }
                    case Lobby_Cmd_1.default.Code.TX_UPDATE_INFO: {
                        var res_6 = new Lobby_Cmd_1.default.TXUpdateTime(data);
                        var chipEnd = res_6.potTai > res_6.potXiu ? res_6.potXiu : res_6.potTai;
                        var potTai = !res_6.bettingState ? chipEnd : res_6.potTai;
                        var potXiu = !res_6.bettingState ? chipEnd : res_6.potXiu;
                        if (_this_1.lblTai)
                            Tween_1.default.numberTo(_this_1.lblTai, potTai, 0.3);
                        if (_this_1.lblXiu)
                            Tween_1.default.numberTo(_this_1.lblXiu, potXiu, 0.3);
                        break;
                    }
                }
            }, this);
            SlotNetworkClient_1.default.getInstance().addListener(function (data) {
                var inPacket = new Network_InPacket_1.default(data);
                switch (inPacket.getCmdId()) {
                    case Lobby_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS: {
                        var res = new Lobby_Cmd_1.default.ResUpdateJackpotSlots(data);
                        var resJson = JSON.parse(res.pots);
                        App_1.default.instance.topHuData = resJson;
                        // ////Utils.Log("JP:", JSON.stringify(resJson));
                        _this_1.handleUpdateJP();
                        break;
                    }
                }
            }, this);
            SlotNetworkClient_1.default.getInstance().addListener(function (data) {
                var inPacket = new Network_InPacket_1.default(data);
                switch (inPacket.getCmdId()) {
                    case Lobby_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS: {
                        var res = new Lobby_Cmd_1.default.ResUpdateJackpotSlots(data);
                        var resJson = JSON.parse(res.pots);
                        //console.log("UPDATE_JACKPOT_SLOTS:"+JSON.stringify(resJson));
                        App_1.default.instance.DataJackpots = resJson;
                        //console.log("Update_Jackpots:"+JSON.stringify(resJson));
                        var spartan = resJson["spartan"];
                        _this_1.tabsListGame.updateItemJackpots("spartans", spartan["100"]["p"], spartan["100"]["x2"] == 1, spartan["1000"]["p"], spartan["1000"]["x2"] == 1, spartan["10000"]["p"], spartan["10000"]["x2"] == 1);
                        var TAI_XIU = resJson["TAI_XIU"];
                        var aasd = TAI_XIU["1"]["pt"] + TAI_XIU["0"]["px"];
                        _this_1.lblJPTai.string = Utils_1.default.formatNumber(aasd);
                        //audition
                        var audition = resJson["audition"];
                        _this_1.tabsListGame.updateItemJackpots("audition", audition["100"]["p"], audition["100"]["x2"] == 1, audition["1000"]["p"], audition["1000"]["x2"] == 1, audition["10000"]["p"], audition["10000"]["x2"] == 1);
                        //Minipoker
                        var minipoker = resJson["minipoker"];
                        _this_1.tabsListGame.updateItemJackpots("minipoker", audition["100"]["p"], minipoker["100"]["x2"] == 1, minipoker["1000"]["p"], minipoker["1000"]["x2"] == 1, minipoker["10000"]["p"], minipoker["10000"]["x2"] == 1);
                        _this_1.lblminipoker.string = Utils_1.default.formatNumber(minipoker["10000"]["p"]);
                        //chiemtinh
                        var chiemtinh = resJson["chiemtinh"];
                        _this_1.tabsListGame.updateItemJackpots("chiemtinh", chiemtinh["100"]["p"], chiemtinh["100"]["x2"] == 1, chiemtinh["1000"]["p"], chiemtinh["1000"]["x2"] == 1, chiemtinh["10000"]["p"], chiemtinh["10000"]["x2"] == 1);
                        //maybach
                        var maybach = resJson["maybach"];
                        _this_1.tabsListGame.updateItemJackpots("maybach", maybach["100"]["p"], maybach["100"]["x2"] == 1, maybach["1000"]["p"], maybach["1000"]["x2"] == 1, maybach["10000"]["p"], maybach["10000"]["x2"] == 1);
                        //Lọ nước thần
                        var galaxy = resJson["galaxy"];
                        _this_1.tabsListGame.updateItemJackpots("galaxy", galaxy["100"]["p"], galaxy["100"]["x2"] == 1, galaxy["1000"]["p"], galaxy["1000"]["x2"] == 1, galaxy["10000"]["p"], galaxy["10000"]["x2"] == 1);
                        _this_1.lbllonuocthan.string = Utils_1.default.formatNumber(galaxy["10000"]["p"]);
                        //tamhung
                        var tamhung = resJson["tamhung"];
                        _this_1.tabsListGame.updateItemJackpots("tamhung", tamhung["100"]["p"], tamhung["100"]["x2"] == 1, tamhung["1000"]["p"], tamhung["1000"]["x2"] == 1, tamhung["10000"]["p"], tamhung["10000"]["x2"] == 1);
                        //range rover
                        var rangeRover = resJson["rangeRover"];
                        _this_1.tabsListGame.updateItemJackpots("aztec", rangeRover["100"]["p"], rangeRover["100"]["x2"] == 1, rangeRover["1000"]["p"], rangeRover["1000"]["x2"] == 1, rangeRover["10000"]["p"], rangeRover["10000"]["x2"] == 1);
                        _this_1.lblcaothap.string = Utils_1.default.formatNumber(rangeRover["10000"]["p"]);
                        //range rover 
                        var benley = resJson["benley"];
                        _this_1.tabsListGame.updateItemJackpots("zeus", benley["100"]["p"], benley["100"]["x2"] == 1, benley["1000"]["p"], benley["1000"]["x2"] == 1, benley["10000"]["p"], benley["10000"]["x2"] == 1);
                        //range rover
                        var bikini = resJson["bikini"];
                        _this_1.tabsListGame.updateItemJackpots("bikini", bikini["100"]["p"], bikini["100"]["x2"] == 1, bikini["1000"]["p"], bikini["1000"]["x2"] == 1, bikini["10000"]["p"], bikini["10000"]["x2"] == 1);
                        //range rover
                        var rollroye = resJson["rollRoye"];
                        _this_1.tabsListGame.updateItemJackpots("gainhay", rollroye["100"]["p"], rollroye["100"]["x2"] == 1, rollroye["1000"]["p"], rollroye["1000"]["x2"] == 1, rollroye["10000"]["p"], rollroye["10000"]["x2"] == 1);
                        //    this.createListdata(j100, j1000, j10000);
                        for (var i = 0; i < _this_1.listData100.length; i++) {
                            // // 100
                            if (_this_1.listData100[i].gameid == "chiemtinh") {
                                _this_1.listData100[i] = new Lobby_ItemTopHu_1.Tophudata("chiemtinh", "Chiêm Tinh", chiemtinh["100"]["p"]);
                            }
                            if (_this_1.listData100[i].gameid == "spartans") {
                                _this_1.listData100[i] = new Lobby_ItemTopHu_1.Tophudata("spartans", "Thần Tài", spartan["100"]["p"]);
                            }
                            if (_this_1.listData100[i].gameid == "audition") {
                                _this_1.listData100[i] = new Lobby_ItemTopHu_1.Tophudata("audition", "Đua Xe", audition["100"]["p"]);
                            }
                            if (_this_1.listData100[i].gameid == "tamhung") {
                                _this_1.listData100[i] = new Lobby_ItemTopHu_1.Tophudata("tamhung", "Chim Điên", tamhung["100"]["p"]);
                            }
                            if (_this_1.listData100[i].gameid == "zeus") {
                                _this_1.listData100[i] = new Lobby_ItemTopHu_1.Tophudata("zeus", "Crypto", benley["100"]["p"]);
                            }
                            if (_this_1.listData100[i].gameid == "gainhay") {
                                _this_1.listData100[i] = new Lobby_ItemTopHu_1.Tophudata("gainhay", "Thể Thao", rollroye["100"]["p"]);
                            }
                            if (_this_1.listData100[i].gameid == "bikini") {
                                _this_1.listData100[i] = new Lobby_ItemTopHu_1.Tophudata("bikini", "Thể Thao", bikini["100"]["p"]);
                            }
                            if (_this_1.listData100[i].gameid == "maybach") {
                                _this_1.listData100[i] = new Lobby_ItemTopHu_1.Tophudata("maybach", "Thể Thao", maybach["100"]["p"]);
                            }
                            // // 1000
                            if (_this_1.listData1000[i].gameid == "chiemtinh") {
                                _this_1.listData1000[i] = new Lobby_ItemTopHu_1.Tophudata("chiemtinh", "Chiêm Tinh", chiemtinh["1000"]["p"]);
                            }
                            if (_this_1.listData1000[i].gameid == "spartans") {
                                _this_1.listData1000[i] = new Lobby_ItemTopHu_1.Tophudata("spartans", "Thần Tài", spartan["1000"]["p"]);
                            }
                            if (_this_1.listData1000[i].gameid == "audition") {
                                _this_1.listData1000[i] = new Lobby_ItemTopHu_1.Tophudata("audition", "Đua Xe", audition["1000"]["p"]);
                            }
                            if (_this_1.listData1000[i].gameid == "tamhung") {
                                _this_1.listData1000[i] = new Lobby_ItemTopHu_1.Tophudata("tamhung", "Chim Điên", tamhung["1000"]["p"]);
                            }
                            if (_this_1.listData1000[i].gameid == "zeus") {
                                _this_1.listData1000[i] = new Lobby_ItemTopHu_1.Tophudata("zeus", "Crypto", benley["1000"]["p"]);
                            }
                            if (_this_1.listData1000[i].gameid == "gainhay") {
                                _this_1.listData1000[i] = new Lobby_ItemTopHu_1.Tophudata("gainhay", "Thể Thao", rollroye["1000"]["p"]);
                            }
                            if (_this_1.listData1000[i].gameid == "bikini") {
                                _this_1.listData1000[i] = new Lobby_ItemTopHu_1.Tophudata("bikini", "Thể Thao", bikini["1000"]["p"]);
                            }
                            if (_this_1.listData1000[i].gameid == "maybach") {
                                _this_1.listData1000[i] = new Lobby_ItemTopHu_1.Tophudata("maybach", "Thể Thao", maybach["1000"]["p"]);
                            }
                            // // 10000
                            if (_this_1.listData10000[i].gameid == "chiemtinh") {
                                _this_1.listData10000[i] = new Lobby_ItemTopHu_1.Tophudata("chiemtinh", "Chiêm Tinh", chiemtinh["10000"]["p"]);
                            }
                            if (_this_1.listData10000[i].gameid == "spartans") {
                                _this_1.listData10000[i] = new Lobby_ItemTopHu_1.Tophudata("spartans", "Thần Tài", spartan["10000"]["p"]);
                            }
                            if (_this_1.listData10000[i].gameid == "audition") {
                                _this_1.listData10000[i] = new Lobby_ItemTopHu_1.Tophudata("audition", "Đua Xe", audition["10000"]["p"]);
                            }
                            if (_this_1.listData10000[i].gameid == "tamhung") {
                                _this_1.listData10000[i] = new Lobby_ItemTopHu_1.Tophudata("tamhung", "Chim Điên", tamhung["10000"]["p"]);
                            }
                            if (_this_1.listData10000[i].gameid == "zeus") {
                                _this_1.listData10000[i] = new Lobby_ItemTopHu_1.Tophudata("zeus", "Crypto", benley["10000"]["p"]);
                            }
                            if (_this_1.listData10000[i].gameid == "gainhay") {
                                _this_1.listData10000[i] = new Lobby_ItemTopHu_1.Tophudata("gainhay", "Thể Thao", rollroye["10000"]["p"]);
                            }
                            if (_this_1.listData10000[i].gameid == "bikini") {
                                _this_1.listData10000[i] = new Lobby_ItemTopHu_1.Tophudata("bikini", "Thể Thao", bikini["10000"]["p"]);
                            }
                            if (_this_1.listData10000[i].gameid == "maybach") {
                                _this_1.listData10000[i] = new Lobby_ItemTopHu_1.Tophudata("maybach", "Thể Thao", maybach["10000"]["p"]);
                            }
                        }
                        break;
                    }
                }
            }, this);
        };
        LobbyController.prototype.loginGameBet = function () {
            //var self = this;
            //self._webview = self.nodeWebView.getChildByName("New WebView").getComponent(cc.WebView)
            //self.nodeWebView.active = true
            var url = "https://playdemo.pw/login?id=" + Configs_1.default.Login.Nickname + "&pw=" + md5(SPUtils_1.default.getUserPass()) + "";
            //self._webview.url = url;
            //console.log(url);
            Common_AudioManager_1.default.getInstance().playEffect(this.click);
            cc.sys.openURL(url);
        };
        LobbyController.prototype.onCloseWebview = function () {
            var self = this;
            self.nodeWebView.active = false;
            self.clearAll();
        };
        LobbyController.prototype.handleUpdateJP = function () {
            if (this.popupTopHu != null && this.popupTopHu.node.active) {
                this.popupTopHu.setInfo();
            }
            this.updateJackpot("THANTAI", "spartan");
            this.updateJackpot("DUAXE", "audition");
            this.updateJackpot("CHIEMTINH", "chiemtinh");
            this.updateJackpot("THETHAO", "maybach");
            this.updateJackpot("CHIMDIEN", "tamhung");
            this.updateJackpot("BITCOIN", "benley");
            this.updateJackpot("THANBAI", "rollRoye");
            this.updateJackpot("BIKINI", "bikini");
            this.updateJackpot("PIKACHU", "pokemon");
            this.updateJackpot("MINIPOKER", "minipoker");
        };
        LobbyController.prototype.updateJackpot = function (gameName, jackpotID) {
            var data = App_1.default.instance.topHuData[jackpotID];
            this.tabsListGame.updateItemJackpots(gameName, data["100"]["p"], data["100"]["x2"] == 1, data["1000"]["p"], data["1000"]["x2"] == 1, data["10000"]["p"], data["10000"]["x2"] == 1);
        };
        LobbyController.prototype.initFakeJP = function () {
            for (var key in App_1.default.instance.fakeTopHuData) {
                App_1.default.instance.fakeTopHuData[key]['j100'] += Utils_1.default.randomRangeInt(5000, 20000);
                App_1.default.instance.fakeTopHuData[key]['j1000'] += Utils_1.default.randomRangeInt(50000, 200000);
                App_1.default.instance.fakeTopHuData[key]['j10000'] += Utils_1.default.randomRangeInt(50000, 2000000);
                this.tabsListGame.updateItemJackpots(key, App_1.default.instance.fakeTopHuData[key]['j100'], false, App_1.default.instance.fakeTopHuData[key]['j1000'], false, App_1.default.instance.fakeTopHuData[key]['j10000'], false); //tay du
            }
        };
        LobbyController.prototype.showAlertMiniGame = function () {
            var _this_1 = this;
            // let parent = this.txtNotifyMarquee.node.parent;
            var parent = this.txtNotifyMarquee.node.parent;
            parent.active = true;
            //<color=#00ff00>Rich</c><color=#0fffff>Text</color>
            var txtFormat = "(<color=#00ff00>%s</c>) " + App_1.default.instance.getTextLang('txt_congratualtion') + "<color=#FF7A00> %s </c>" + App_1.default.instance.getTextLang('txt_win') + "<color=#FFFF00> %s</c>        ";
            for (var i = 0; i < this.dataAlertMini["entries"].length; i++) {
                var e = this.dataAlertMini["entries"][i];
                LobbyController_1.notifyMarquee += cc.js.formatStr(txtFormat, Configs_1.default.GameId.getGameName(e["g"]), e["n"], Utils_1.default.formatNumber(e["m"]));
            }
            // this.txtNotifyMarquee.string = LobbyController.notifyMarquee;
            this.txtNotifyMarquee.string = LobbyController_1.notifyMarquee;
            this.txtNotifyMarquee.node.x = parent.width / 2;
            this.scheduleOnce(function () {
                _this_1.bgNotify.active = true;
                var acMove = cc.tween().by(1.0, { x: -150 });
                var acCheck = cc.tween().call(function () {
                    if (_this_1.txtNotifyMarquee.node.x < -_this_1.txtNotifyMarquee.node.width / 2 - parent.width / 2) {
                        cc.Tween.stopAllByTarget(_this_1.txtNotifyMarquee.node);
                        parent.active = false;
                        _this_1.bgNotify.active = false;
                    }
                });
                cc.Tween.stopAllByTarget(_this_1.txtNotifyMarquee.node);
                cc.tween(_this_1.txtNotifyMarquee.node).repeatForever(cc.tween().sequence(acMove, acCheck)).start();
            }, 0.5);
        };
        LobbyController.prototype.reConnectGame = function () {
            MiniGameNetworkClient_1.default.getInstance().close();
            SlotNetworkClient_1.default.getInstance().close();
            //    ShootFishNetworkClient.getInstance().close();
            if (App_1.default.instance.TYPE_LOGIN == "NORMAL") {
                this.actLogin(App_1.default.instance.USER_NAME, App_1.default.instance.PASS_WORD);
            }
        };
        LobbyController.prototype.initPluginFacebook = function () {
            if ('undefined' == typeof sdkbox) {
                ////Utils.Log('sdkbox is undefined');
                return;
            }
            if ('undefined' == typeof sdkbox.PluginFacebook) {
                ////Utils.Log('sdkbox.PluginFacebook is undefined');
                return;
            }
            sdkbox.PluginFacebook.setListener({
                onLogin: function (isLogin, msg) {
                    if (isLogin) {
                        Configs_1.default.Login.AccessTokenFB = sdkbox.PluginFacebook.getAccessToken();
                        _this.loginFB();
                    }
                    else {
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.showErrLoading("Lỗi đăng nhập status: " + msg);
                        ////Utils.Log("login failed " + msg);
                    }
                }
            });
            ////Utils.Log("initPluginFacebook success!");
            sdkbox.PluginFacebook.init();
        };
        LobbyController.prototype.onEnable = function () {
            var self = this;
            this.updateMail();
        };
        LobbyController.prototype.updateMail = function () {
            var _this_1 = this;
            if (Configs_1.default.Login.IsLogin) {
                Http_1.default.get(Configs_1.default.App.API, { c: "406", nn: Configs_1.default.Login.Nickname }, function (err, res) {
                    if (res["success"]) {
                        if (res["data"] > 0) {
                            _this_1.txtMail.node.parent.active = true;
                            _this_1.txtMailz.node.parent.active = true;
                            _this_1.txtMail.string = res["data"];
                            if (!App_1.default.instance.checkMailUnread) {
                                App_1.default.instance.checkMailUnread = true;
                                //    App.instance.confirmDialog.show2(App.instance.getTextLang('txt_new_mail'), (isConfirm) => {
                                //        if (isConfirm)
                                //            this.actEvent();
                                //    }); 
                            }
                        }
                        else {
                            _this_1.txtMail.node.parent.active = false;
                        }
                    }
                });
            }
        };
        LobbyController.prototype.initPluginFirebase = function () {
            if ('undefined' == typeof sdkbox) {
                ////Utils.Log('sdkbox is undefined');
                return;
            }
            if ('undefined' == typeof sdkbox.firebase) {
                ////Utils.Log('sdkbox.firebase is undefined');
                return;
            }
            ////Utils.Log("SDKBOX FIREBASE OK!");
            // sdkbox.firebase.Analytics.init();
            sdkbox.firebase.Analytics.init();
        };
        LobbyController.prototype.onDestroy = function () {
            SlotNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqUnSubcribeHallSlot());
        };
        LobbyController.prototype.createListdata = function (j100, j1000, j10000) {
            this.listData100 = new Array();
            this.listData1000 = new Array();
            this.listData10000 = new Array();
            this.listData100.push(new Lobby_ItemTopHu_1.Tophudata("chiemtinh", "Chiêm Tinh", j100), new Lobby_ItemTopHu_1.Tophudata("spartans", "Thần Tài", j100), new Lobby_ItemTopHu_1.Tophudata("audition", "Đua Xe", j100), new Lobby_ItemTopHu_1.Tophudata("benley", "Bitcoin", j100), new Lobby_ItemTopHu_1.Tophudata("bikini", "Bikini", j100), new Lobby_ItemTopHu_1.Tophudata("tamhung", "Chim Điên", j100), new Lobby_ItemTopHu_1.Tophudata("rollRoye", "Thần Bài", j100), new Lobby_ItemTopHu_1.Tophudata("zeus", "Crypto", j100), new Lobby_ItemTopHu_1.Tophudata("maybach", "Thể Thao", j100));
            this.listData1000.push(new Lobby_ItemTopHu_1.Tophudata("chiemtinh", "Chiêm Tinh", j1000), new Lobby_ItemTopHu_1.Tophudata("spartans", "Thần Tài", j1000), new Lobby_ItemTopHu_1.Tophudata("audition", "Đua Xe", j1000), new Lobby_ItemTopHu_1.Tophudata("benley", "Bitcoin", j1000), new Lobby_ItemTopHu_1.Tophudata("bikini", "Bikini", j1000), new Lobby_ItemTopHu_1.Tophudata("tamhung", "Chim Điên", j1000), new Lobby_ItemTopHu_1.Tophudata("rollRoye", "Thần Bài", j1000), new Lobby_ItemTopHu_1.Tophudata("zeus", "Crypto", j1000), new Lobby_ItemTopHu_1.Tophudata("maybach", "Thể Thao", j1000));
            this.listData10000.push(new Lobby_ItemTopHu_1.Tophudata("chiemtinh", "Chiêm Tinh", j10000), new Lobby_ItemTopHu_1.Tophudata("spartans", "Thần Tài", j10000), new Lobby_ItemTopHu_1.Tophudata("audition", "Đua Xe", j10000), new Lobby_ItemTopHu_1.Tophudata("benley", "Bitcoin", j10000), new Lobby_ItemTopHu_1.Tophudata("bikini", "Bikini", j10000), new Lobby_ItemTopHu_1.Tophudata("tamhung", "Chim Điên", j10000), new Lobby_ItemTopHu_1.Tophudata("rollRoye", "Thần Bài", j10000), new Lobby_ItemTopHu_1.Tophudata("zeus", "Crypto", j10000), new Lobby_ItemTopHu_1.Tophudata("maybach", "Thể Thao", j10000));
        };
        LobbyController.prototype.actLoginToken = function (data) {
            var _this_1 = this;
            Configs_1.default.Login.AccessToken = data.at;
            Configs_1.default.Login.AccessToken2 = data.at;
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { c: 17, u: data.u, at: data.at }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_error'));
                    return;
                }
                switch (parseInt(res["errorCode"])) {
                    case 0:
                        Configs_1.default.Login.AccessToken = res["accessToken"];
                        if (cc.sys.isBrowser) {
                            window.localStorage.setItem("at", Configs_1.default.Login.AccessToken);
                        }
                        Configs_1.default.Login.SessionKey = res["sessionKey"];
                        Configs_1.default.Login.IsLogin = true;
                        var userInfo = JSON.parse(base64.decode(Configs_1.default.Login.SessionKey));
                        Configs_1.default.Login.Nickname = userInfo["nickname"];
                        Configs_1.default.Login.Avatar = userInfo["avatar"];
                        Configs_1.default.Login.Username = userInfo["username"];
                        var dataLogin = {};
                        Configs_1.default.Login.Password = dataLogin.password = SPUtils_1.default.getUserPass();
                        Configs_1.default.Login.Coin = userInfo["vinTotal"];
                        Configs_1.default.Login.IpAddress = userInfo["ipAddress"];
                        Configs_1.default.Login.CreateTime = userInfo["createTime"];
                        Configs_1.default.Login.Birthday = userInfo["birthday"];
                        Configs_1.default.Login.VipPoint = userInfo["vippoint"];
                        Configs_1.default.Login.VipPointSave = userInfo["vippointSave"];
                        // khoi tao 3 socket dong thoi gui goi tin len server
                        MiniGameNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeJackpots());
                        SlotNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeHallSlot());
                        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
                        }
                        else {
                            _this_1.loginMiniGameSockJs();
                        }
                        //    this.actShowBanner();
                        _this_1.checkDiemDanh();
                        _this_1.checkListBankRut();
                        //    this.boxLixi.getInfo();
                        _this_1.actGetEventMoon();
                        _this_1.panelNotLogin.active = false;
                        _this_1.panelLogined.active = true;
                        if (Global_1.Global.PopupRegister != null && Global_1.Global.PopupRegister.node && Global_1.Global.PopupRegister.node.active) {
                            Global_1.Global.PopupRegister.dismiss();
                        }
                        App_1.default.instance.buttonMiniGame.show();
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
                        break;
                    case 1109:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_blocked'));
                        break;
                    case 1114:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err6'));
                        break;
                    case 1014:
                    case 1015:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_session_end'));
                        break;
                    case 1002:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_err_captcha'));
                        break;
                    case 1007:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_name_not_the_same'));
                        break;
                    case 1021:
                    case 1008:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                        break;
                    case 2001:
                        App_1.default.instance.showLoading(false);
                        // App.instance.alertDialog.showMsg("Tên nhân vật không được để trống.");
                        break;
                    default:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_error'));
                        break;
                }
            });
        };
        LobbyController.prototype.checkDiemDanh = function () {
            var _this_1 = this;
            Http_1.default.get(Configs_1.default.App.API, { c: "2031", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, ac: "get" }, function (err, res) {
                if (res["success"] != null && res['success'] == true) {
                    _this_1.actDiemDanh1();
                }
                else {
                }
            });
        };
        LobbyController.prototype.loginMiniGameSockJs = function () {
            var dataLogin = {};
            dataLogin.username = SPUtils_1.default.getUserName();
            dataLogin.password = SPUtils_1.default.getUserPass();
            dataLogin.rememberMe = true;
            ////Utils.Log("loginMiniGameSockJs:", dataLogin);
            Http_1.default.post(Configs_1.default.App.HOST_SOCKJS + "api/login", dataLogin, function (err, res) {
                if (err) {
                    ////Utils.Log("err Login Tx:", err);
                    return;
                }
                if (res != null && res.id_token != "") {
                    ////Utils.Log("Login TXST Success:" + JSON.stringify(res));
                    cc.sys.localStorage.setItem("token_Sockjs", res.id_token);
                    Configs_1.default.Login.AccessTokenSockJs = res.id_token;
                    TaiXiuSieuToc_NetworkClient_1.default.getInstance().isLogin = true;
                    TaiXiuSieuToc_NetworkClient_1.default.getInstance().connect();
                }
            }, true);
        };
        LobbyController.prototype.actRule = function () {
            App_1.default.instance.actRule();
            this.actMenu();
        };
        LobbyController.prototype.actComingSoon = function () {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_reparing"));
        };
        LobbyController.prototype.actLogin = function (uname, pass, callback) {
            // this.edbUsername.string = "devtest2";
            // this.edbPassword.string = "123456";
            var _this_1 = this;
            if (uname === void 0) { uname = null; }
            if (pass === void 0) { pass = null; }
            if (callback === void 0) { callback = null; }
            var username = "";
            var password = "";
            var remember = cc.sys.localStorage.getItem("IsRemember");
            if (uname != null && pass != null) {
                username = uname;
                password = pass;
            }
            else {
            }
            ////Utils.Log("actLogin:" + username + ":" + password + ":" + remember);
            if (username.length == 0) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_username_not_blank'));
                return;
            }
            if (password.length == 0) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_password_not_blank'));
                return;
            }
            if (remember != null && remember == 1) {
                ////Utils.Log("save o day ne 1");
                cc.sys.localStorage.setItem("user_name", username);
                cc.sys.localStorage.setItem("pass_word", password);
            }
            else {
                ////Utils.Log("save o day ne");
                cc.sys.localStorage.setItem("user_name", "null");
                cc.sys.localStorage.setItem("pass_word", "null");
            }
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { c: 3, un: username, pw: md5(password) }, function (err, res) {
                switch (parseInt(res["errorCode"])) {
                    case 0:
                        App_1.default.instance.showLoading(false);
                        SPUtils_1.default.setUserName(username);
                        SPUtils_1.default.setUserPass(password);
                        Configs_1.default.Login.Username = username;
                        Configs_1.default.Login.Password = password;
                        LogEvent_1.default.getInstance().sendEventClickShop("vin", 100000);
                        LogEvent_1.default.getInstance().sendEventSdt("0123456789");
                        LogEvent_1.default.getInstance().sendEventPurchase("vin", 100000);
                        LogEvent_1.default.getInstance().sendEventSigupSuccess("normal");
                        LogEvent_1.default.getInstance().sendEventLogin("normal");
                        Configs_1.default.Login.AccessToken = res["accessToken"];
                        Configs_1.default.Login.SessionKey = res["sessionKey"];
                        var userInfo = JSON.parse(base64.decode(Configs_1.default.Login.SessionKey));
                        var dataLogin = {};
                        dataLogin["u"] = userInfo["nickname"];
                        dataLogin["at"] = res["accessToken"];
                        Configs_1.default.Login.Nickname = userInfo["nickname"];
                        Configs_1.default.Login.Avatar = userInfo["avatar"];
                        Configs_1.default.Login.Coin = userInfo["vinTotal"];
                        Configs_1.default.Login.IpAddress = userInfo["ipAddress"];
                        Configs_1.default.Login.CreateTime = userInfo["createTime"];
                        Configs_1.default.Login.Birthday = userInfo["birthday"];
                        Configs_1.default.Login.Birthday = userInfo["birthday"];
                        Configs_1.default.Login.VipPoint = userInfo["vippoint"];
                        Configs_1.default.Login.Address = userInfo["address"];
                        Configs_1.default.Login.VipPointSave = userInfo["vippointSave"];
                        //	ShootFishNetworkClient.getInstance().checkConnect(() => {
                        //        BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
                        //   });
                        _this_1.actLoginToken(dataLogin);
                        if (callback != null) {
                            callback();
                        }
                        break;
                    case 1002:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_err_captcha'));
                        break;
                    case 1007:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_password_error'));
                        break;
                    case 1005:
                    case 1114:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_not_exsist'));
                        break;
                    case 1109:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_blocked'));
                        break;
                    case 1114:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_not_get_info'));
                        break;
                    case 1021:
                    case 1008:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                        break;
                    case 2001:
                        App_1.default.instance.showLoading(false);
                        if (callback != null) {
                            callback();
                        }
                        if (!App_1.default.instance.popupUpdateNickname) {
                            var cb = function (prefab) {
                                var popupDaily = cc.instantiate(prefab).getComponent("PopupUpdateNickname");
                                App_1.default.instance.canvas.addChild(popupDaily.node);
                                App_1.default.instance.popupUpdateNickname = popupDaily;
                                App_1.default.instance.popupUpdateNickname.show2(username, password);
                            };
                            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupUpdateNickname", cb);
                        }
                        else {
                            App_1.default.instance.popupUpdateNickname.show2(username, password);
                        }
                        break;
                    default:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_error'));
                        break;
                }
            });
        };
        LobbyController.prototype.isUseSDK = function () {
            if (cc.sys.isNative) {
                if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
                    return true;
                }
            }
            // if (cc.sys.os == cc.sys.OS_ANDROID) return true;
            // if (cc.sys.os == cc.sys.OS_IOS) return true;
            return false;
        };
        ;
        LobbyController.prototype.fbRespone = function (response) {
            if (response.status != "200") {
                if (response.response != "wait") {
                    ////Utils.Log(JSON.stringify(response));
                    App_1.default.instance.showLoading(false);
                    App_1.default.instance.showErrLoading("Lỗi đăng nhập status: " + response.status);
                }
            }
            else {
                ////Utils.Log("fbRespone:" + JSON.stringify(response));
                Configs_1.default.Login.AccessTokenFB = response.response.authResponse.accessToken;
                Configs_1.default.Login.FacebookID = response.response.authResponse.userID;
                _this.loginFB();
            }
        };
        LobbyController.prototype.actLoginFB = function () {
            ////Utils.Log("actLoginFB");
            App_1.default.instance.showLoading(true, -1);
            if (_this.isUseSDK()) {
                if (sdkbox.PluginFacebook.isLoggedIn()) {
                    Configs_1.default.Login.AccessTokenFB = sdkbox.PluginFacebook.getAccessToken();
                    _this.loginFB();
                }
                else {
                    ////Utils.Log("FB to Login");
                    sdkbox.PluginFacebook.login(['public_profile', 'email']);
                }
            }
            else {
                var Appid = "758971848112749";
                var scope_1 = 'email,public_profile';
                if (_this.sdk != null) {
                    ////Utils.Log("Login fb web");
                    try {
                        FB.getLoginStatus(function (data) {
                            if (data.status === 'connected') {
                                Configs_1.default.Login.AccessTokenFB = data.authResponse.accessToken;
                                Configs_1.default.Login.FacebookID = data.authResponse.userID;
                                ////Utils.Log("Configs.Login.AccessTokenFB auth:" + JSON.stringify(data));
                                _this.loginFB();
                            }
                            else if (data.status === 'not_authorized') {
                                App_1.default.instance.showLoading(false);
                                // App.instance.showErrLoading("Lỗi đăng nhập status: " + data.status);
                            }
                            else {
                                FB.login(_this.fbRespone, { scope: scope_1 });
                            }
                        });
                    }
                    catch (e) {
                        App_1.default.instance.showLoading(false);
                        // App.instance.showErrLoading("Lỗi đăng nhập status: " + e.message);
                    }
                }
                else {
                    _this.sdk = new Facebook_1.default(Appid, scope_1, _this.fbRespone);
                }
            }
        };
        LobbyController.prototype.actShareFbLink = function (link) {
            // sdkbox.FBShareInfo;
            // sdkbox.PluginFacebook.share
            FB.ui({
                display: 'popup',
                method: 'share',
                href: link,
                caption: 'Làm giàu cùng Go88'
            }, function (response) {
                //   console.log("Respone FB:" + JSON.stringify(response));
            });
        };
        LobbyController.prototype.loginFB = function () {
            var _this_1 = this;
            Configs_1.default.Login.AccessToken = Configs_1.default.Login.AccessTokenFB;
            var accessToken = Configs_1.default.Login.AccessTokenFB;
            App_1.default.instance.showLoading(true);
            ////Utils.Log("accessTokenFB:" + accessToken);
            Http_1.default.get(Configs_1.default.App.API, { c: 3, s: 'fb', at: accessToken }, function (err, res) {
                App_1.default.instance.showLoading(false);
                ////Utils.Log("loginFB failed:" + JSON.stringify(err) + " => " + JSON.stringify(res));
                if (err != null) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_error'));
                    return;
                }
                ////Utils.Log("login Fb result:" + JSON.stringify(res));
                switch (parseInt(res["errorCode"])) {
                    case 0:
                        LogEvent_1.default.getInstance().sendEventLogin("facebook");
                        Configs_1.default.Login.AccessToken = res["accessToken"];
                        Configs_1.default.Login.SessionKey = res["sessionKey"];
                        Configs_1.default.Login.IsLogin = true;
                        var userInfo = JSON.parse(base64.decode(Configs_1.default.Login.SessionKey));
                        Configs_1.default.Login.Nickname = userInfo["nickname"];
                        Configs_1.default.Login.Avatar = userInfo["avatar"];
                        Configs_1.default.Login.Coin = userInfo["vinTotal"];
                        Configs_1.default.Login.IpAddress = userInfo["ipAddress"];
                        Configs_1.default.Login.CreateTime = userInfo["createTime"];
                        Configs_1.default.Login.Birthday = userInfo["birthday"];
                        Configs_1.default.Login.Birthday = userInfo["birthday"];
                        Configs_1.default.Login.VipPoint = userInfo["vippoint"];
                        Configs_1.default.Login.VipPointSave = userInfo["vippointSave"];
                        Configs_1.default.Login.Username = userInfo["username"];
                        ////Utils.Log("FacebookID=" + Configs.Login.FacebookID);
                        // khoi tao 3 socket dong thoi gui goi tin len server
                        MiniGameNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeJackpots());
                        SlotNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeHallSlot());
                        _this_1.panelNotLogin.active = false;
                        _this_1.panelLogined.active = true;
                        SPUtils_1.default.setUserName(Configs_1.default.Login.Username);
                        SPUtils_1.default.setUserPass(Configs_1.default.Login.Password);
                        App_1.default.instance.buttonMiniGame.show();
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
                        break;
                    case 1109:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_blocked'));
                        break;
                    case 1114:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_not_exsist'));
                        break;
                    case 1114:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_login_account_not_get_info"));
                        break;
                    case 1002:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                        break;
                    case 1007:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang(""));
                        break;
                    case 1021:
                    case 1008:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_login_account_incorrect_otp"));
                        break;
                    case 2001:
                        App_1.default.instance.showLoading(false);
                        if (!App_1.default.instance.popupUpdateNickname) {
                            var cb = function (prefab) {
                                var popupDaily = cc.instantiate(prefab).getComponent("PopupUpdateNickname");
                                App_1.default.instance.canvas.addChild(popupDaily.node);
                                App_1.default.instance.popupUpdateNickname = popupDaily;
                                App_1.default.instance.popupUpdateNickname.showFb(accessToken);
                            };
                            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupUpdateNickname", cb);
                        }
                        else {
                            App_1.default.instance.popupUpdateNickname.showFb(accessToken);
                        }
                        break;
                    default:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_error'));
                        break;
                }
            });
        };
        LobbyController.prototype.actMenu = function () {
            if (this.panelMenu.node.parent.active == false) {
                this.panelMenu.node.parent.active = true;
            }
            else {
                // this.panelMenu.node.parent.active = false;
                this.panelMenu.dismiss();
            }
            this.panelMenu.show();
        };
        LobbyController.prototype.atcPopupUpdateNickName = function (username, password) {
            var _this_1 = this;
            ////Utils.Log("atcPopupUpdateNickName");
            var cb = function (prefab) {
                var popupDaily = cc.instantiate(prefab).getComponent("PopupUpdateNickname");
                App_1.default.instance.canvas.addChild(popupDaily.node);
                _this_1.popupUpdateNickname = popupDaily;
                _this_1.popupUpdateNickname.show2(username, password);
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupUpdateNickname", cb);
        };
        LobbyController.prototype.actLoginRegister = function (even, data) {
            var _this_1 = this;
            if (!this.popupRegister) {
                var cb = function (prefab) {
                    var popupRegister = cc.instantiate(prefab).getComponent("PopupRegister");
                    App_1.default.instance.canvas.addChild(popupRegister.node);
                    _this_1.popupRegister = popupRegister;
                    _this_1.popupRegister.show(null, data);
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupRegister", cb);
            }
            else {
                this.popupRegister.show(null, data);
            }
        };
        LobbyController.prototype.actLoginPopup = function (even, data) {
            var _this_1 = this;
            if (!this.poupLogin) {
                var cb = function (prefab) {
                    var popupLogin = cc.instantiate(prefab).getComponent("PopupLogin");
                    App_1.default.instance.canvas.addChild(popupLogin.node);
                    _this_1.popupLogin = popupLogin;
                    _this_1.popupLogin.show(null, data);
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupLogin", cb);
            }
            else {
                this.popupLogin.show(null, data);
            }
        };
        LobbyController.prototype.actDaiLy = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.popupDaily) {
                var cb = function (prefab) {
                    var popupDaily = cc.instantiate(prefab).getComponent("Lobby.PopupDaiLy");
                    App_1.default.instance.canvas.addChild(popupDaily.node);
                    _this_1.popupDaily = popupDaily;
                    _this_1.popupDaily.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupDaiLy", cb);
            }
            else {
                this.popupDaily.show();
            }
        };
        LobbyController.prototype.actTopHu = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.popupTopHu) {
                var cb = function (prefab) {
                    var popupTopHu = cc.instantiate(prefab).getComponent("Lobby.PopupTopHu");
                    App_1.default.instance.canvas.addChild(popupTopHu.node);
                    _this_1.popupTopHu = popupTopHu;
                    _this_1.popupTopHu.show();
                    _this_1.popupTopHu.setInfo();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupTopHu", cb);
            }
            else {
                this.popupTopHu.show();
                this.popupTopHu.setInfo();
            }
        };
        LobbyController.prototype.actTransaction = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.popupTransaction) {
                var cb = function (prefab) {
                    var popupDaily = cc.instantiate(prefab).getComponent("Lobby.PopupTransaction");
                    App_1.default.instance.canvas.addChild(popupDaily.node);
                    _this_1.popupTransaction = popupDaily;
                    _this_1.popupTransaction.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupTransaction", cb);
            }
            else {
                this.popupTransaction.show();
            }
        };
        LobbyController.prototype.actForgetPassword = function () {
            var _this_1 = this;
            if (!this.popupForgetPassword) {
                var cb = function (prefab) {
                    var popupForgetPassword = cc.instantiate(prefab).getComponent("Lobby.PopupForgetPassword");
                    App_1.default.instance.canvas.addChild(popupForgetPassword.node);
                    _this_1.popupForgetPassword = popupForgetPassword;
                    _this_1.popupForgetPassword.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupForgetPassword", cb);
            }
            else {
                this.popupForgetPassword.show();
            }
        };
        LobbyController.prototype.actTaiApp = function () {
            var _this_1 = this;
            if (!this.popupTaiApp) {
                var cb = function (prefab) {
                    var popupTaiApp = cc.instantiate(prefab).getComponent("Lobby.PopupTaiApp");
                    App_1.default.instance.canvas.addChild(popupTaiApp.node);
                    _this_1.popupTaiApp = popupTaiApp;
                    _this_1.popupTaiApp.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupTaiApp", cb);
            }
            else {
                this.popupTaiApp.show();
            }
        };
        LobbyController.prototype.actnaprut = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.Popupnaprut) {
                var cb = function (prefab) {
                    var popupnaprut = cc.instantiate(prefab).getComponent("Lobby.Popupnaprut");
                    App_1.default.instance.canvas.addChild(popupnaprut.node);
                    _this_1.Popupnaprut = popupnaprut;
                    _this_1.Popupnaprut.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/Popupnap-rut-doi", cb);
            }
            else {
                this.Popupnaprut.show();
            }
        };
        LobbyController.prototype.actGiftCode = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.popupGiftCode) {
                var cb = function (prefab) {
                    var popupGiftCode = cc.instantiate(prefab).getComponent("Lobby.PopupGiftCode");
                    popupGiftCode.node.parent = App_1.default.instance.node;
                    // App.instance.canvas.addChild(popupGiftCode.node)
                    ////Utils.Log("parent giftcode:" + popupGiftCode.node.parent.name + ":" + App.instance.node.name);
                    _this_1.popupGiftCode = popupGiftCode;
                    _this_1.popupGiftCode.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupGiftCode", cb);
            }
            else {
                this.popupGiftCode.show();
            }
        };
        LobbyController.prototype.actPromotion = function () {
            //cmd=2015&nn=brightc&at=dfasfrfsefs9f9sfsdfdsds
            Http_1.default.get(Configs_1.default.App.API, { "c": 2015, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken }, function (err, res) {
                ////Utils.Log("Xác nhan khuyen mai data:", res);
                if (err) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_error"));
                    return;
                }
                else {
                    var msg = res.message;
                    App_1.default.instance.ShowAlertDialog(msg);
                    if (res.success) {
                        Configs_1.default.Login.Coin = parseInt(res.data);
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                    }
                }
            });
        };
        LobbyController.prototype.actRefund = function () {
            var _this_1 = this;
            if (!this.popupRefund) {
                var cb = function (prefab) {
                    var popupRefund = cc.instantiate(prefab).getComponent("Lobby.PopupRefund");
                    App_1.default.instance.canvas.addChild(popupRefund.node);
                    _this_1.popupRefund = popupRefund;
                    _this_1.popupRefund.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupRefund", cb);
            }
            else {
                this.popupRefund.show();
            }
        };
        LobbyController.prototype.actSecurity = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.popupSecurity) {
                var cb = function (prefab) {
                    var popupSecurity = cc.instantiate(prefab).getComponent("Lobby.PopupSecurity");
                    App_1.default.instance.canvas.addChild(popupSecurity.node);
                    _this_1.popupSecurity = popupSecurity;
                    _this_1.popupSecurity.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupSecurity", cb);
            }
            else {
                this.popupSecurity.show();
            }
        };
        LobbyController.prototype.actDiemDanh1 = function () {
            var _this_1 = this;
            if (!this.popupDiemDanh1) {
                var cb = function (prefab) {
                    var popupDiemDanh = cc.instantiate(prefab).getComponent("Lobby.PopupDiemDanh");
                    App_1.default.instance.canvas.addChild(popupDiemDanh.node);
                    _this_1.popupDiemDanh1 = popupDiemDanh;
                    _this_1.popupDiemDanh1.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupDiemDanh", cb);
            }
            else {
                this.popupDiemDanh1.show();
            }
        };
        LobbyController.prototype.actShowBanner = function () {
            var cb = function (prefab) {
                var popupBanner = cc.instantiate(prefab).getComponent("Dialog");
                App_1.default.instance.canvas.addChild(popupBanner.node);
                popupBanner.show();
                popupBanner.node.zIndex = cc.macro.MAX_ZINDEX;
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupBanner", cb);
        };
        LobbyController.prototype.actVQMM = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
        };
        LobbyController.prototype.actInstall = function () {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_function_in_development'));
        };
        LobbyController.prototype.actEvent = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.popupMail) {
                ////Utils.Log("Chua có prefab popup Security");
                var cb = function (prefab) {
                    var popupMail = cc.instantiate(prefab).getComponent("UIPopupMail");
                    App_1.default.instance.canvas.addChild(popupMail.node);
                    _this_1.popupMail = popupMail;
                    _this_1.popupMail.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/UIPopupMail", cb);
            }
            else {
                this.popupMail.show();
            }
        };
        LobbyController.prototype.actDownload = function () {
            cc.sys.openURL(Configs_1.default.App.LINK_DOWNLOAD);
        };
        LobbyController.prototype.actFanpage = function () {
            cc.sys.openURL(Configs_1.default.App.getLinkFanpage());
        };
        LobbyController.prototype.actGroup = function () {
            cc.sys.openURL(Configs_1.default.App.LINK_GROUP);
        };
        LobbyController.prototype.actTelegram = function () {
            App_1.default.instance.openTelegram(Configs_1.default.App.getLinkTelegramGroup());
        };
        LobbyController.prototype.actAppOTP = function () {
            App_1.default.instance.openTelegram();
        };
        LobbyController.prototype.actCSKH = function () {
            var self = this;
            if (self.isShowCSKH == false) {
                self.panelCSKH.scaleX = 0;
                self.panelCSKH.opacity = 0;
                self.panelCSKH.parent.active = true;
                self.isShowCSKH = true;
                cc.Tween.stopAllByTarget(self.panelCSKH);
                cc.tween(self.panelCSKH)
                    .to(0.3, { scaleX: 1, opacity: 255 }, { easing: "backOut" })
                    .start();
            }
            else {
                self.isShowCSKH = false;
                cc.Tween.stopAllByTarget(self.panelCSKH);
                cc.tween(self.panelCSKH)
                    .to(0.3, { scaleX: 0, opacity: 0 }, { easing: "backIn" })
                    .call(function () {
                    self.panelCSKH.parent.active = false;
                })
                    .start();
            }
        };
        LobbyController.prototype.actCSKH1 = function () {
            var self = this;
            if (self.isShowCSKH1 == false) {
                self.panelCSKH1.scaleX = 0;
                self.panelCSKH1.opacity = 0;
                self.panelCSKH1.parent.active = true;
                self.isShowCSKH1 = true;
                cc.Tween.stopAllByTarget(self.panelCSKH1);
                cc.tween(self.panelCSKH1)
                    .to(0.3, { scaleX: 1, opacity: 255 }, { easing: "backOut" })
                    .start();
            }
            else {
                self.isShowCSKH1 = false;
                cc.Tween.stopAllByTarget(self.panelCSKH1);
                cc.tween(self.panelCSKH1)
                    .to(0.3, { scaleX: 0, opacity: 0 }, { easing: "backIn" })
                    .call(function () {
                    self.panelCSKH1.parent.active = false;
                })
                    .start();
            }
        };
        LobbyController.prototype.actKhuyenMai = function () {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_function_in_development"));
        };
        LobbyController.prototype.actDiemDanh = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.popupDiemDanh) {
                var cb = function (prefab) {
                    var popupDiemDanh = cc.instantiate(prefab).getComponent("UIPopupDiemDanh");
                    App_1.default.instance.canvas.addChild(popupDiemDanh.node);
                    _this_1.popupDiemDanh = popupDiemDanh;
                    _this_1.popupDiemDanh.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/UIPopupDiemDanh", cb);
            }
            else {
                this.popupDiemDanh.show();
            }
        };
        LobbyController.prototype.actOpenFB = function () {
            cc.sys.openURL("https://www.facebook.com/hitclub6789");
            App_1.default.instance.openWebView("https://www.facebook.com/hitclub6789");
        };
        LobbyController.prototype.actOpenMessager = function () {
            cc.sys.openURL("http://t.me/hqgamehotro");
            App_1.default.instance.openWebView("http://t.me/hqgamehotro");
        };
        LobbyController.prototype.actOpenZalo = function () {
            cc.sys.openURL("http://t.me/hqgamehotro");
        };
        LobbyController.prototype.actOpenLive = function () {
            App_1.default.instance.openWebView("http://t.me/hqgamehotro");
        };
        LobbyController.prototype.actOpenHotLine = function () {
            if (cc.sys.isNative) {
                cc.sys.openURL("tel:");
            }
            else {
                App_1.default.instance.alertDialog.showMsg("Hotline : ");
            }
        };
        LobbyController.prototype.actSupportOnline = function () {
            // cc.sys.openURL(Configs.App.LINK_SUPPORT);
            if (!cc.sys.isNative) {
                var url = "https://www.facebook.com/hitclub6789";
                cc.sys.openURL(url);
                //Tawk_API.toggle();
            }
            else {
                App_1.default.instance.openTelegram();
            }
            //App.instance.openTelegram();
        };
        LobbyController.prototype.actBack = function () {
            var _this_1 = this;
            App_1.default.instance.confirmDialog.show3(App_1.default.instance.getTextLang("txt_ask_logout"), "ĐĂNG XUẤT", function (isConfirm) {
                if (isConfirm) {
                    App_1.default.instance.checkMailUnread = false;
                    _this_1.panelMenu.node.parent.active = false;
                    _this_1.panelMenu.hide();
                    if (cc.sys.isBrowser) {
                        window.localStorage.removeItem('u');
                        window.localStorage.removeItem('at');
                        window.localStorage.removeItem('at_fb');
                        window.localStorage.removeItem('un');
                        window.localStorage.removeItem('pw');
                    }
                    SPUtils_1.default.setUserName("");
                    SPUtils_1.default.setUserPass("");
                    cc.sys.localStorage.setItem("IsAutoLogin", 0);
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_LOGOUT);
                    App_1.default.instance.updateConfigGame(App_1.default.DOMAIN);
                    App_1.default.instance.RECONNECT_GAME = false;
                }
            });
        };
        LobbyController.prototype.actSwitchCoin = function () {
            if (this.lblCoin.node.parent.active) {
                this.lblCoin.node.parent.active = false;
            }
            else {
                this.lblCoin.node.parent.active = true;
            }
        };
        LobbyController.prototype.actGameTaiXiu = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            MiniGameNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openMiniGameTaiXiuDouble("TaiXiuDouble", "TaiXiuDouble");
            });
        };
        LobbyController.prototype.actGameTaiXiuSieuToc = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_coming_soon'));
                return;
            }
            if (Configs_1.default.Login.AccessTokenSockJs == "" || cc.sys.localStorage.getItem("token_Sockjs") == null) {
                TaiXiuSieuToc_NetworkClient_1.default.getInstance().isOpenGame = true;
                this.loginMiniGameSockJs();
                return;
            }
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.openMiniGameTaiXiuSieuToc("TaiXiuSieuToc", "TaiXiuSieuToc");
            });
        };
        LobbyController.prototype.actGetEventMoon = function () {
            var _this_1 = this;
            Http_1.default.get(Configs_1.default.App.API, { "c": 20, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken }, function (err, res) {
                //////Utils.Log("Check event Trung thu:", res);
                if (err) {
                    return;
                }
                else {
                    if (res.success && res.lstMoonEvents.length > 0) {
                        _this_1.actShowPopupEventMoon(res);
                    }
                }
            });
        };
        LobbyController.prototype.actShowPopupEventMoon = function (data) {
            var _this_1 = this;
            if (!this.popupEventTT) {
                var cb = function (prefab) {
                    _this_1.popupEventTT = cc.instantiate(prefab).getComponent("PopupEventTT");
                    _this_1.popupEventTT.node.parent = App_1.default.instance.node;
                    _this_1.popupEventTT.showpPopup(data);
                    ////Utils.Log("Parent Event:" + this.popupEventTT.node.parent.name);
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupEventTT", cb);
            }
            else {
                this.popupEventTT.showpPopup(data);
            }
        };
        LobbyController.prototype.actGameBauCua = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            MiniGameNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openMiniGameBauCua("BauCua", "BauCua");
            });
        };
        LobbyController.prototype.actGameCaoThap = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            MiniGameNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openMiniGameCaoThap("CaoThap", "CaoThap");
            });
        };
        LobbyController.prototype.actGameSlot3x3 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            MiniGameNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openMiniGameSlot3x3("Slot3x3", "Slot3x3");
            });
        };
        LobbyController.prototype.actGameSlot3x3Gem = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            MiniGameNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openMiniGameSlot3x3Gem("Slot3x3Gem", "Slot3x3Gem");
            });
        };
        LobbyController.prototype.actGameMiniPoker = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            MiniGameNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openMiniGameMiniPoker("MiniPoker", "MiniPoker");
            });
        };
        LobbyController.prototype.actGameTaLa = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_coming_soon'));
        };
        LobbyController.prototype.actGoToSlot1 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot1", "Slot1");
            });
        };
        LobbyController.prototype.actGoToSlot2 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot2", "Slot2");
            });
        };
        LobbyController.prototype.actGoToSlot3 = function () {
            ////Utils.Log("Go to slot3");
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot3", "Slot3");
            });
        };
        LobbyController.prototype.actGoToSlot4 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot4", "Slot4");
            });
        };
        LobbyController.prototype.actGoToSlot5 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot5", "Slot5");
            });
        };
        LobbyController.prototype.actGoToSlot6 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot6", "Slot6");
            });
        };
        LobbyController.prototype.actGoToSlot7 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot7", "Slot7");
            });
        };
        LobbyController.prototype.actGoToSlot8 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot8", "Slot8");
            });
        };
        LobbyController.prototype.actGoToSlot10 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            // cc.director.loadScene("TestScene");
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot10", "Slot10");
            });
        };
        LobbyController.prototype.actGoToSlot11 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot11Bikini", "Slot11Bikini");
            });
        };
        LobbyController.prototype.actDev = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_coming_soon'));
            return;
        };
        LobbyController.prototype.actDev1 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.showToast(App_1.default.instance.getTextLang("Tính năng sắp ra mắt"));
            return;
        };
        LobbyController.prototype.checkListBankRut = function () {
            if (Configs_1.default.Login.ListBankRut == null) {
                App_1.default.instance.showLoading(true);
                var data = {};
                data["c"] = 2008;
                data["nn"] = Configs_1.default.Login.Nickname;
                data["pn"] = 1;
                data["l"] = 10;
                Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    var list = JSON.parse(res.data).data;
                    Configs_1.default.Login.ListBankRut = list;
                });
            }
        };
        LobbyController.prototype.actGoToShootFish = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.openGame("ShootFish", "ShootFish");
        };
        LobbyController.prototype.actGoToOanTuTi = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.openGame("OanTuTi", "OanTuTi");
        };
        LobbyController.prototype.actGotoLoto = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.openGame("Loto", "Loto");
            // App.instance.loadSceneInSubpackage("Loto", "Loto");
        };
        LobbyController.prototype.actGoToXocDia = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.isShowNotifyJackpot = false;
            App_1.default.instance.removeAllWebView();
            // App.instance.alertDialog.showMsg(App.instance.getTextLang('txt_coming_soon'));
            // return;
            App_1.default.instance.openGame("XocDia", "XocDia");
        };
        LobbyController.prototype.actAddCoin = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.popupShop) {
                var cb = function (prefab) {
                    var popupShop = cc.instantiate(prefab).getComponent("LobbyShop");
                    App_1.default.instance.canvas.addChild(popupShop.node);
                    _this_1.popupShop = popupShop;
                    _this_1.popupShop.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupShop", cb);
            }
            else {
                this.popupShop.show();
            }
        };
        LobbyController.prototype.actCashout = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (Configs_1.default.Login.ListBankRut.length == 0) {
                if (!this.popupProfile) {
                    var cb = function (prefab) {
                        var popupProfile = cc.instantiate(prefab).getComponent("Lobby.PopupProfile");
                        App_1.default.instance.canvas.addChild(popupProfile.node);
                        _this_1.popupProfile = popupProfile;
                        _this_1.popupProfile.showTabBank();
                    };
                    BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupProfile", cb);
                }
                else {
                    this.popupProfile.showTabBank();
                }
            }
            else {
                if (!this.popupCashout) {
                    var cb = function (prefab) {
                        var popupCashout = cc.instantiate(prefab).getComponent("Lobby.PopupCashout");
                        App_1.default.instance.canvas.addChild(popupCashout.node);
                        _this_1.popupCashout = popupCashout;
                        _this_1.popupCashout.show();
                    };
                    BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupCashout", cb);
                }
                else {
                    this.popupCashout.show();
                }
            }
        };
        LobbyController.prototype.onBtnShowProfile = function () {
            this.actProfile();
        };
        LobbyController.prototype.actProfile = function (tabIndex) {
            var _this_1 = this;
            if (tabIndex === void 0) { tabIndex = 0; }
            if (!this.popupProfile) {
                var cb = function (prefab) {
                    var popupProfile = cc.instantiate(prefab).getComponent("Lobby.PopupProfile");
                    App_1.default.instance.canvas.addChild(popupProfile.node);
                    _this_1.popupProfile = popupProfile;
                    _this_1.popupProfile.show(tabIndex);
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupProfile", cb);
            }
            else {
                this.popupProfile.show(tabIndex);
            }
        };
        LobbyController.prototype.accExchange = function () {
            ////Utils.Log("act Add accExchange");
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            this.actAddCoin();
        };
        LobbyController.prototype.actGoToTLMN = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            // App.instance.alertDialog.showMsg(App.instance.getTextLang('txt_coming_soon'));
            // return;
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            TienLenNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                TienLen_Room_1.default.IS_SOLO = false;
                App_1.default.instance.isShowNotifyJackpot = false;
                App_1.default.instance.openGame("TienLen", "TienLen");
                // App.instance.loadSceneInSubpackage("TienLen", "TienLen");
            });
        };
        LobbyController.prototype.actGameTLMNSolo = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            // App.instance.alertDialog.showMsg(App.instance.getTextLang('txt_coming_soon'));
            // return;
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            TienLenNetworkClient_1.default.getInstance().checkConnect(function () {
                TienLen_Room_1.default.IS_SOLO = true;
                App_1.default.instance.showLoading(false);
                App_1.default.instance.isShowNotifyJackpot = false;
                App_1.default.instance.openGame("TienLen", "TienLen");
                // App.instance.loadSceneInSubpackage("TienLen", "TienLen");
            });
        };
        LobbyController.prototype.actGoToSam = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            // App.instance.alertDialog.showMsg(App.instance.getTextLang('txt_coming_soon'));
            // return;
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            SamNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.isShowNotifyJackpot = false;
                App_1.default.instance.openGame("Sam", "Sam");
            });
        };
        LobbyController.prototype.actGoToMauBinh = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            // App.instance.alertDialog.showMsg(App.instance.getTextLang('txt_coming_soon'));
            // return;
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading'));
            App_1.default.instance.openGame("MauBinh", "MauBinh");
        };
        LobbyController.prototype.actGoToBaCay = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.isShowNotifyJackpot = false;
            App_1.default.instance.openGame("BaCay", "BaCay");
        };
        LobbyController.prototype.actGoToLieng = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.isShowNotifyJackpot = false;
            App_1.default.instance.openGame("Lieng", "Lieng");
        };
        LobbyController.prototype.actGoToPoker = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            //   App.instance.removeAllWebView();
            //   App.instance.isShowNotifyJackpot = false;
            //   App.instance.isShowNotifyJackpot = false;
            App_1.default.instance.openGame("Poker", "Poker");
        };
        LobbyController.prototype.actGoToBaiCao = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            // App.instance.alertDialog.showMsg(App.instance.getTextLang('txt_coming_soon'));
            // return;
            App_1.default.instance.openGame("BaiCao", "BaiCao");
        };
        LobbyController.prototype.actKiemTien = function () {
            var _this_1 = this;
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            if (!this.popupKiemTien) {
                var cb = function (prefab) {
                    var popupSecurity = cc.instantiate(prefab).getComponent("Lobby.PopupKiemTien");
                    App_1.default.instance.canvas.addChild(popupSecurity.node);
                    _this_1.popupKiemTien = popupSecurity;
                    _this_1.popupKiemTien.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupKiemTien", cb);
            }
            else {
                this.popupKiemTien.show();
            }
        };
        LobbyController.prototype.actGoToGame3Rd = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
        };
        LobbyController.prototype.actLoginCMD = function () {
            App_1.default.instance.actLoginCMD();
        };
        LobbyController.prototype.actLoginIBC = function () {
            App_1.default.instance.actLoginIBC();
        };
        LobbyController.prototype.actLoginSBO = function () {
            App_1.default.instance.actLoginSBO();
        };
        LobbyController.prototype.actLoginWM = function () {
            App_1.default.instance.actLoginWM();
        };
        LobbyController.prototype.actLoginAG = function () {
            App_1.default.instance.actLoginAG();
        };
        LobbyController.prototype.actLoginEbet = function () {
            App_1.default.instance.actLoginEbet();
        };
        LobbyController.prototype.actLoginShootFish = function () {
            App_1.default.instance.actLoginShootFish();
        };
        LobbyController.prototype.actGameTaiXiuMd5 = function () {
            if (!Configs_1.default.Login.IsLogin) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
                return;
            }
            MiniGameNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openMiniGameTaiXiuMD5("TaiXiuMD5", "TaiXiuMD5");
            });
        };
        LobbyController.prototype.showGameLive = function () {
            var _this_1 = this;
            if (!this.gameLiveController) {
                var cb = function (prefab) {
                    var gameLiveController = cc.instantiate(prefab).getComponent("GameLiveController");
                    App_1.default.instance.canvas.addChild(gameLiveController.node);
                    _this_1.gameLiveController = gameLiveController;
                    _this_1.gameLiveController.show();
                };
                BundleControl_1.default.loadPrefabPopup("PrefabPopup/GameLive", cb);
            }
            else {
                this.gameLiveController.show();
            }
        };
        LobbyController.prototype.updateSizeListGame = function (isHaveBanner) {
            this.bannerList.node.active = isHaveBanner;
            this.tabsListGame.updateSize(isHaveBanner);
        };
        //    getConfigGame() {
        //        Http.get(Configs.App.API, { c: "2037", nn: Configs.Login.Nickname, "pl": "web" }, (err, res) => {
        //            if (res != null) {
        //            //    cc.log(res);
        //                if (res['success']) {
        //                    this.tabsListGame.initListGameConfig(res);
        //                    App.instance.VERSION_CONFIG = res['version'];
        //                } else {
        //               //     this.tabsListGame.loadListGame();
        //                }
        //                // this.checkAppVersion();
        //            }
        //        });
        //    }
        LobbyController.prototype.checkAppVersion = function () {
            if (typeof Configs_1.default.App.VERSION_APP != "undefined") {
                var versionApp = parseInt(Configs_1.default.App.VERSION_APP.replace(/[.]/g, ''));
                var versionConfig = parseInt(App_1.default.instance.VERSION_CONFIG.replace(/[.]/g, ''));
                if (versionApp < versionConfig) {
                    var url_1 = "https://FANVIN.wIN/";
                    if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
                        App_1.default.instance.showConfirmDialog("Đã có phiển bản mới.\nVui lòng cập nhật ứng dụng để có trải nghiệm tốt nhất!", function () {
                            cc.sys.openURL(url_1);
                        }, false);
                    }
                }
            }
        };
        var LobbyController_1;
        LobbyController.notifyMarquee = "";
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "nodeTop", void 0);
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "nodeBot", void 0);
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "nodeCenter", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "txtMail", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "txtMailz", void 0);
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "panelNotLogin", void 0);
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "panelCSKH", void 0);
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "panelCSKH1", void 0);
        __decorate([
            property(GameLiveController_1.default)
        ], LobbyController.prototype, "gameLiveController", void 0);
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "panelLogined", void 0);
        __decorate([
            property(PanelMenu)
        ], LobbyController.prototype, "panelMenu", void 0);
        __decorate([
            property(cc.Sprite)
        ], LobbyController.prototype, "sprAvatar", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lblNickname", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lblVipPoint", void 0);
        __decorate([
            property(cc.Slider)
        ], LobbyController.prototype, "sliderVipPoint", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lblVipPointName", void 0);
        __decorate([
            property(cc.Sprite)
        ], LobbyController.prototype, "spriteProgressVipPoint", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lblCoin", void 0);
        __decorate([
            property(cc.RichText)
        ], LobbyController.prototype, "txtNotifyMarquee", void 0);
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "bgNotify", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lblTai", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lblcaothap", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lblJPTai", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lblminipoker", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lbllonuocthan", void 0);
        __decorate([
            property(cc.Label)
        ], LobbyController.prototype, "lblXiu", void 0);
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "btnLoginFb", void 0);
        __decorate([
            property(cc.Node)
        ], LobbyController.prototype, "buttonjb", void 0);
        __decorate([
            property(Lobby_BoxLixi_1.default)
        ], LobbyController.prototype, "boxLixi", void 0);
        __decorate([
            property(Lobby_TabsListGame_1.default)
        ], LobbyController.prototype, "tabsListGame", void 0);
        __decorate([
            property(Lobby_BannerList_1.default)
        ], LobbyController.prototype, "bannerList", void 0);
        __decorate([
            property({ type: cc.AudioClip })
        ], LobbyController.prototype, "clipBgm", void 0);
        LobbyController = LobbyController_1 = __decorate([
            ccclass
        ], LobbyController);
        return LobbyController;
    }(cc.Component));
    Lobby.LobbyController = LobbyController;
})(Lobby || (Lobby = {}));
exports.default = Lobby.LobbyController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Mb2JieUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyxxREFBZ0Q7QUFHaEQseUNBQThCO0FBQzlCLDJEQUFnRDtBQUdoRCxvRUFBK0Q7QUFRL0QscURBQThDO0FBRTlDLGlFQUE0RDtBQUM1RCxnRUFBMkQ7QUFDM0QsbURBQWtEO0FBUWxELDJDQUFzQztBQUN0Qyx1RUFBa0U7QUFDbEUsMkVBQStEO0FBQy9ELG1EQUE4QztBQUM5QywrQ0FBMEM7QUFDMUMsK0NBQTBDO0FBQzFDLGlGQUE0RTtBQUM1RSxtRkFBOEU7QUFDOUUsdUVBQTBEO0FBQzFELHVFQUFrRTtBQUVsRSx5RUFBb0U7QUFDcEUsK0VBQTBFO0FBQzFFLCtEQUE2RDtBQUM3RCw2REFBMkQ7QUFFM0QsdURBQTRDO0FBRzVDLDZGQUFrRjtBQU9sRixpREFBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBRWpCO0lBQUE7UUFFSSxTQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLE9BQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsZ0JBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZ0JBQVcsR0FBYyxJQUFJLENBQUM7UUFFdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQW9ENUIsQ0FBQztJQW5ERyx5QkFBSyxHQUFMO1FBQUEsbUJBZUM7UUFkRyxhQUFHLENBQUMsUUFBUSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQy9CLGlCQUFPLENBQUMsY0FBYyxDQUFDLE9BQUksQ0FBQyxX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b20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuXG5pbXBvcnQgUG9wdXBHaWZ0Q29kZSBmcm9tIFwiLi9Mb2JieS5Qb3B1cEdpZnRDb2RlXCI7XG5pbXBvcnQgY21kIGZyb20gXCIuL0xvYmJ5LkNtZFwiOyBcbmltcG9ydCBUYWJzTGlzdEdhbWUgZnJvbSBcIi4vTG9iYnkuVGFic0xpc3RHYW1lXCI7XG5pbXBvcnQgUG9wdXBVcGRhdGVOaWNrbmFtZSBmcm9tIFwiLi9Qb3B1cFVwZGF0ZU5pY2tuYW1lXCI7XG5pbXBvcnQgUG9wdXBUcmFuc2FjdGlvbiBmcm9tIFwiLi9Mb2JieS5Qb3B1cFRyYW5zYWN0aW9uXCI7XG5pbXBvcnQgR2FtZUxpdmVDb250cm9sbGVyIGZyb20gXCIuL0dhbWVMaXZlL0dhbWVMaXZlQ29udHJvbGxlclwiO1xuaW1wb3J0IFBvcHVwU2VjdXJpdHkgZnJvbSBcIi4vTG9iYnkuUG9wdXBTZWN1cml0eVwiO1xuaW1wb3J0IFBvcHVwRGllbURhbmggZnJvbSBcIi4vVUlQb3B1cERpZW1EYW5oXCI7XG5pbXBvcnQgUG9wdXBNYWlsIGZyb20gXCIuL1VJUG9wdXBNYWlsXCI7XG5cbmltcG9ydCBWZXJzaW9uQ29uZmlnIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9WZXJzaW9uQ29uZmlnXCI7XG5pbXBvcnQgUG9wdXBEYWlMeSBmcm9tIFwiLi9Mb2JieS5Qb3B1cERhaUx5XCI7XG5pbXBvcnQgUG9wdXBuYXBydXQgZnJvbSBcIi4vTG9iYnkuUG9wdXBuYXBydXRcIjtcbmltcG9ydCB7IFRvcGh1ZGF0YSB9IGZyb20gJy4vTG9iYnkuSXRlbVRvcEh1JztcbmltcG9ydCBUb3BIdSBmcm9tIFwiLi9Mb2JieS5Ub3BIdVwiO1xuaW1wb3J0IEJ1bmRsZUNvbnRyb2wgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0J1bmRsZUNvbnRyb2xcIjtcbmltcG9ydCBMb2dFdmVudCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvTG9nRXZlbnQvTG9nRXZlbnRcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9HbG9iYWxcIjtcbmltcG9ydCBQb3B1cFJlZ2lzdGVyIGZyb20gXCIuL1BvcHVwUmVnaXN0ZXJcIjtcbmltcG9ydCBQb3B1cEZvcmdldFBhc3N3b3JkIGZyb20gXCIuL0xvYmJ5LlBvcHVwRm9yZ2V0UGFzc3dvcmRcIjtcbmltcG9ydCBQb3B1cFRhaUFwcCBmcm9tIFwiLi9Mb2JieS5Qb3B1cFRhaUFwcFwiO1xuaW1wb3J0IFBvcHVwUHJvZmlsZSBmcm9tIFwiLi9Mb2JieS5Qb3B1cFByb2ZpbGVcIjtcbmltcG9ydCBMb2JieVNob3AgZnJvbSBcIi4vUGF5bWVudC9Mb2JieVNob3BcIjtcbmltcG9ydCBQb3B1cENhc2hvdXQgZnJvbSBcIi4vTG9iYnkuUG9wdXBDYXNob3V0XCI7XG5pbXBvcnQgUG9wdXBMb2dpbiBmcm9tIFwiLi9Qb3B1cExvZ2luXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0NvbW1vbi5BdWRpb01hbmFnZXJcIjtcbmltcG9ydCBTUFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vU1BVdGlsc1wiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQyIGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnQyXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBTYW1OZXR3b3JrQ2xpZW50IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9TYW1OZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgTWF1QmluaE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL01hdUJpbmgvTWF1QmluaFNjcmlwdC9NYXVCaW5oLk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBTbG90TmV0d29ya0NsaWVudCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvU2xvdE5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBUaWVuTGVuTmV0d29ya0NsaWVudCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvVGllbkxlbk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBmYWNlYm9va1NkayBmcm9tIFwiLi9TY3JpcHQvU2VydmljZS9GYWNlQm9vay9GYWNlYm9va1wiO1xuaW1wb3J0IFRpZW5MZW5Db25zdGFudCBmcm9tIFwiLi9UaWVuTGVuU2NyaXB0L1RpZW5MZW4uUm9vbVwiO1xuaW1wb3J0IFNhbUNvbnN0YW50IGZyb20gXCIuL1NhbVNjcmlwdC9TYW0uUm9vbVwiO1xuaW1wb3J0IEJhbm5lckxpc3QgZnJvbSBcIi4vTG9iYnkuQmFubmVyTGlzdFwiO1xuLy9pbXBvcnQgU2hvb3RGaXNoTmV0d29ya0NsaWVudCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvU2hvb3RGaXNoTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IE5ldHdvcmtDbGllbnQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IFRhaVhpdVNUTmV0d29ya0NsaWVudCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvVGFpWGl1U2lldVRvYy5OZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgUG9wdXBFdmVudCBmcm9tIFwiLi9Qb3B1cEV2ZW50XCI7XG5pbXBvcnQgUG9wdXBFdmVudFRUIGZyb20gXCIuL1BvcHVwRXZlbnRUVFwiO1xuaW1wb3J0IFBvcHVwVG9wSHUgZnJvbSBcIi4vTG9iYnkuUG9wdXBUb3BIdVwiO1xuaW1wb3J0IHsgUG9wdXBSZWZ1bmQgfSBmcm9tIFwiLi9Mb2JieS5Qb3B1cFJlZnVuZFwiO1xuaW1wb3J0IFBvcHVwRGFpbHkgZnJvbSBcIi4vTG9iYnkuUG9wdXBEaWVtRGFuaFwiO1xuaW1wb3J0IFBvcHVwRGllbURhbmgxIGZyb20gXCIuL0xvYmJ5LlBvcHVwRGllbURhbmhcIjtcbmltcG9ydCBCb3hMaXhpIGZyb20gXCIuL0xvYmJ5LkJveExpeGlcIjtcbmltcG9ydCBQb3B1cEtpZW1UaWVuIGZyb20gXCIuL0xvYmJ5LlBvcHVwS2llbVRpZW5cIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgX3RoaXMgPSBudWxsO1xuQGNjY2xhc3MoXCJMb2JieS5Mb2JieUNvbnRyb2xsZXIuUGFuZWxNZW51XCIpXG5leHBvcnQgY2xhc3MgUGFuZWxNZW51IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZU11c2ljOiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlU291bmQ6IGNjLlRvZ2dsZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGFuaW1hdGUgPSBmYWxzZTtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLmlzU2hvd05vdGlmeUphY2twb3QgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZU11c2ljLm5vZGUub24oXCJ0b2dnbGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgU1BVdGlscy5zZXRNdXNpY1ZvbHVtbih0aGlzLnRvZ2dsZU11c2ljLmlzQ2hlY2tlZCA/IDEgOiAwKTtcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuT05fQVVESU9fQ0hBTkdFRCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kLm5vZGUub24oXCJ0b2dnbGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgU1BVdGlscy5zZXRTb3VuZFZvbHVtbih0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZCA/IDEgOiAwKTtcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuT05fQVVESU9fQ0hBTkdFRCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID0gU1BVdGlscy5nZXRNdXNpY1ZvbHVtbigpID4gMDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQgPSBTUFV0aWxzLmdldFNvdW5kVm9sdW1uKCkgPiAwO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zZXRVcE5vZGUoKTtcbiAgICB9XG5cblxuICAgIHNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUpIHJldHVybjtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJnKS5zZXQoeyBzY2FsZTogMC44LCBvcGFjaXR5OiAxNTAgfSkudG8oMC4zLCB7IHNjYWxlOiAxLjAsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5iZykudG8oMC4zLCB7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDE1MCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tJbiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJnKS50bygwLjMsIHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMTUwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja0luIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5hbWVzcGFjZSBMb2JieSB7XG4gICAgQGNjY2xhc3NcbiAgICBleHBvcnQgY2xhc3MgTG9iYnlDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIG5vZGVUb3A6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgbm9kZUJvdDogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBub2RlQ2VudGVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICB0eHRNYWlsOiBjYy5MYWJlbCA9IG51bGw7XG5cdFx0QHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICB0eHRNYWlsejogY2MuTGFiZWwgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgcGFuZWxOb3RMb2dpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBwYW5lbENTS0g6IGNjLk5vZGUgPSBudWxsO1xuXHRcdEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBwYW5lbENTS0gxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgQHByb3BlcnR5KEdhbWVMaXZlQ29udHJvbGxlcilcbiAgICAgICAgZ2FtZUxpdmVDb250cm9sbGVyOiBHYW1lTGl2ZUNvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgcGFuZWxMb2dpbmVkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KFBhbmVsTWVudSlcbiAgICAgICAgcGFuZWxNZW51OiBQYW5lbE1lbnUgPSBudWxsO1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgICAgIHNwckF2YXRhcjogY2MuU3ByaXRlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYmxOaWNrbmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibFZpcFBvaW50OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5TbGlkZXIpXG4gICAgICAgIHNsaWRlclZpcFBvaW50OiBjYy5TbGlkZXIgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibFZpcFBvaW50TmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgICAgICBzcHJpdGVQcm9ncmVzc1ZpcFBvaW50OiBjYy5TcHJpdGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibENvaW46IGNjLkxhYmVsID0gbnVsbDtcblxuICAgICAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgICAgIHR4dE5vdGlmeU1hcnF1ZWU6IGNjLlJpY2hUZXh0ID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGJnTm90aWZ5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYmxUYWk6IGNjLkxhYmVsID0gbnVsbDtcblx0XHRAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibGNhb3RoYXA6IGNjLkxhYmVsID0gbnVsbDtcblx0XHRAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibEpQVGFpOiBjYy5MYWJlbCA9IG51bGw7XG5cdFx0QHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYmxtaW5pcG9rZXI6IGNjLkxhYmVsID0gbnVsbDtcblx0XHRAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibGxvbnVvY3RoYW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYmxYaXU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGJ0bkxvZ2luRmI6IGNjLk5vZGUgPSBudWxsO1xuXHRcdEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBidXR0b25qYjogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShCb3hMaXhpKVxuICAgICAgICBib3hMaXhpOiBCb3hMaXhpID0gbnVsbDtcblxuXG4gICAgICAgIEBwcm9wZXJ0eShUYWJzTGlzdEdhbWUpXG4gICAgICAgIHRhYnNMaXN0R2FtZTogVGFic0xpc3RHYW1lID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KEJhbm5lckxpc3QpXG5cbiAgICAgICAgYmFubmVyTGlzdDogQmFubmVyTGlzdCA9IG51bGw7XG4gICAgICAgIHBvcHVwR2lmdENvZGU6IFBvcHVwR2lmdENvZGUgPSBudWxsO1xuICAgICAgICBwb3B1cFVwZGF0ZU5pY2tuYW1lOiBQb3B1cFVwZGF0ZU5pY2tuYW1lID0gbnVsbDtcbiAgICAgICAgcG9wdXBUcmFuc2FjdGlvbjogUG9wdXBUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIHBvcHVwVG9wSHU6IFBvcHVwVG9wSHUgPSBudWxsO1xuICAgICAgICBwb3B1cFNlY3VyaXR5OiBQb3B1cFNlY3VyaXR5ID0gbnVsbDtcbiAgICAgICAgcG9wdXBLaWVtVGllbjogUG9wdXBLaWVtVGllbiA9IG51bGw7XG4gICAgICAgIHBvcHVwRGllbURhbmgxOiBQb3B1cERpZW1EYW5oMSA9IG51bGw7XG4gICAgICAgIHBvcHVwUmVmdW5kOiBQb3B1cFJlZnVuZCA9IG51bGw7XG4gICAgICAgIHBvcHVwRXZlbnQ6IFBvcHVwRXZlbnQgPSBudWxsO1xuXHRcdHBvcHVwRXZlbnRUVDogUG9wdXBFdmVudFRUID0gbnVsbDtcbiAgICAgICAgcG9wdXBNYWlsOiBQb3B1cE1haWwgPSBudWxsO1xuICAgICAgICBwb3B1cERpZW1EYW5oOiBQb3B1cERpZW1EYW5oID0gbnVsbDtcbiAgICAgICAgcG9wdXBEYWlseTogUG9wdXBEYWlMeSA9IG51bGw7XG4gICAgICAgIFBvcHVwbmFwcnV0OiBQb3B1cG5hcHJ1dCA9IG51bGw7XG4gICAgICAgIHBvcHVwUmVnaXN0ZXI6IFBvcHVwUmVnaXN0ZXIgPSBudWxsO1xuICAgICAgICBwb3VwTG9naW46IFBvcHVwTG9naW4gPSBudWxsO1xuICAgICAgICBwb3B1cEZvcmdldFBhc3N3b3JkOiBQb3B1cEZvcmdldFBhc3N3b3JkID0gbnVsbDtcbiAgICAgICAgcG9wdXBUYWlBcHA6IFBvcHVwVGFpQXBwID0gbnVsbDtcbiAgICAgICAgcG9wdXBQcm9maWxlOiBQb3B1cFByb2ZpbGUgPSBudWxsO1xuICAgICAgICBwb3B1cFNob3A6IExvYmJ5U2hvcCA9IG51bGw7XG4gICAgICAgIHBvcHVwQ2FzaG91dDogUG9wdXBDYXNob3V0ID0gbnVsbDtcblxuICAgICAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICAgICAgY2xpcEJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICAgICAgbGlzdERhdGExMDA6IEFycmF5PFRvcGh1ZGF0YT4gPSBuZXcgQXJyYXk8VG9waHVkYXRhPigpO1xuICAgICAgICBsaXN0RGF0YTEwMDA6IEFycmF5PFRvcGh1ZGF0YT4gPSBuZXcgQXJyYXk8VG9waHVkYXRhPigpO1xuICAgICAgICBsaXN0RGF0YTEwMDAwOiBBcnJheTxUb3BodWRhdGE+ID0gbmV3IEFycmF5PFRvcGh1ZGF0YT4oKTtcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbm90aWZ5TWFycXVlZSA9IFwiXCI7XG4gICAgICAgIGRhdGFBbGVydE1pbmk6IGFueSA9IHt9XG4gICAgICAgIGZha2VKUEludiA9IG51bGw7XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKEJ1bmRsZUNvbnRyb2wuc2VydmVyVmVyc2lvbi5oYXNPd25Qcm9wZXJ0eSgnRmJDb25maWcnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9naW5GYi5hY3RpdmUgPSBCdW5kbGVDb250cm9sLnNlcnZlclZlcnNpb25bJ0ZiQ29uZmlnJ10uaXNTaG93QnRuRmI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGVDZW50ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGVUb3AueSA9IGNjLndpblNpemUuaGVpZ2h0IC8gMiArIHRoaXMubm9kZVRvcC5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgdGhpcy5ub2RlQm90LnkgPSAtY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC0gdGhpcy5ub2RlQm90LmhlaWdodDtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVXNlU0RLKCkpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmluaXRQbHVnaW5GaXJlYmFzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBsdWdpbkZhY2Vib29rKClcbiAgICAgICAgICAgIH07XG5cblxuXG4gICAgLy8gICAgICAgICAgdGhpcy5idXR0b25qYi54ID0gY2Mud2luU2l6ZS53aWR0aCAvIDIgLSA1MDtcbiAgICAvLyAgICB0aGlzLmJ1dHRvbmpiLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAvLyAgICAgICAgdGhpcy5idXR0b25DbGlja2VkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgdGhpcy5idXR0b25Nb3ZlZCA9IGNjLlZlYzIuWkVSTztcbiAgICAvLyAgICB9LCB0aGlzKTtcblx0Ly9cbiAgICAvLyAgICB0aGlzLmJ1dHRvbmpiLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgIC8vICAgICAgICB0aGlzLmJ1dHRvbk1vdmVkID0gdGhpcy5idXR0b25Nb3ZlZC5hZGQoZXZlbnQuZ2V0RGVsdGEoKSk7XG4gICAgLy8gICAgICAgIGlmICh0aGlzLmJ1dHRvbkNsaWNrZWQpIHtcbiAgICAvLyAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmJ1dHRvbk1vdmVkLngpID4gMzAgfHwgTWF0aC5hYnModGhpcy5idXR0b25Nb3ZlZC55KSA+IDMwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYnV0dG9uamIucG9zaXRpb247XG4gICAgLy8gICAgICAgICAgICAgICAgcG9zLnggKz0gdGhpcy5idXR0b25Nb3ZlZC54O1xuICAgIC8vICAgICAgICAgICAgICAgIHBvcy55ICs9IHRoaXMuYnV0dG9uTW92ZWQueTtcbiAgICAvLyAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbmpiLnBvc2l0aW9uID0gcG9zO1xuICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xpY2tlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYnV0dG9uamIucG9zaXRpb247XG4gICAgLy8gICAgICAgICAgICBwb3MueCArPSBldmVudC5nZXREZWx0YVgoKTtcbiAgICAvLyAgICAgICAgICAgIHBvcy55ICs9IGV2ZW50LmdldERlbHRhWSgpO1xuICAgIC8vICAgICAgICAgICAgdGhpcy5idXR0b25qYi5wb3NpdGlvbiA9IHBvcztcbiAgICAvLyAgICAgICAgfVxuICAgIC8vICAgIH0sIHRoaXMpO1xuXHQvL1xuICAgIC8vICAgIHRoaXMuYnV0dG9uamIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAvLyAgICAgICAgaWYgKHRoaXMuYnV0dG9uQ2xpY2tlZCkge1xuICAgIC8vICAgICAgICAgICAgdGhpcy5hY3RUb3BIdSgpO1xuICAgIC8vICAgICAgICB9XG4gICAgLy8gICAgICAgIGxldCBwb3NYID0gdGhpcy5idXR0b25qYi54ID4gMCA/IGNjLndpblNpemUud2lkdGggLyAyIC0gNjAgOiAtY2Mud2luU2l6ZS53aWR0aCAvIDIgKyA2MDtcbiAgICAvLyAgICAgICAgY2MudHdlZW4odGhpcy5idXR0b25qYikudG8oMC4zLCB7IHg6IHBvc1ggfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pLnN0YXJ0KCk7XG4gICAgLy8gICAgfSwgdGhpcyk7XG5cblxuXG5cblxuICAgICAgICB9XG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IHRpbGVTY3JlZW4gPSBjYy53aW5TaXplLndpZHRoIC8gMTU2MDtcbiAgICAgICAgLy8gICAgdGhpcy5ib3R0b21CYXJMZWZ0LndpZHRoID0gdGhpcy5ib3R0b21CYXJMZWZ0LndpZHRoICogdGlsZVNjcmVlblxuICAgICAgICAvLyAgICB0aGlzLmJvdHRvbUJhclJpZ2h0LndpZHRoID0gdGhpcy5ib3R0b21CYXJSaWdodC53aWR0aCAqIHRpbGVTY3JlZW5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50T3BlbkFwcCgpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB0aGlzLmxibENvaW4ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndScpICE9IG51bGwgJiYgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdCcpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndSddID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFbJ2F0J10gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F0Jyk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5UWVBFX0xPR0lOID0gXCJOT1JNQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlVTRVJfTkFNRSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW4nKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlBBU1NfV09SRCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RMb2dpblRva2VuKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuJykgIT0gbnVsbCAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3B3JykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuYXRjUG9wdXBVcGRhdGVOaWNrTmFtZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuJyksIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHcnKSk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5UWVBFX0xPR0lOID0gXCJOT1JNQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlVTRVJfTkFNRSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW4nKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlBBU1NfV09SRCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdF9mYicpISArIG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbkZCID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdF9mYicpO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkZhY2Vib29rSUQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZiX2lkJyk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5UWVBFX0xPR0lOID0gXCJGQUNFQk9PS1wiO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuRkJfSUQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZiX2lkJyk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5BVF9GQiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXRfZmInKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZCKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfbmFtZVwiKSAhPSBcIm51bGxcIiAmJiBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJc0F1dG9Mb2dpblwiKSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbG9naW5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5Jc0xvZ2luID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdExvZ2luKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfbmFtZVwiKSwgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc193b3JkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5UWVBFX0xPR0lOID0gXCJOT1JNQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5VU0VSX05BTUUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX25hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuUEFTU19XT1JEID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFzc193b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfbmFtZVwiKSAhPSBcIm51bGxcIiAmJiBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJc0F1dG9cIikgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvL2xvZ2luXG4gICAgICAgICAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLklzTG9naW4gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0TG9naW4oY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9uYW1lXCIpLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzX3dvcmRcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlRZUEVfTE9HSU4gPSBcIk5PUk1BTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlVTRVJfTkFNRSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfbmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5QQVNTX1dPUkQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzX3dvcmRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhbmVsTWVudS5zdGFydCgpO1xuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVBEQVRFX05JQ0tOQU1FX1NVQ0NFU1MsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsQ29pbiwgQ29uZmlncy5Mb2dpbi5Db2luLCAwLjMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5PTl9VUERBVEVfTUFJTCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFpbCgpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5VU0VSX0lORk9fVVBEQVRFRCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGJsTmlja25hbWUuc3RyaW5nID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckF2YXRhci5zcHJpdGVGcmFtZSA9IEFwcC5pbnN0YW5jZS5nZXRBdmF0YXJTcHJpdGVGcmFtZShDb25maWdzLkxvZ2luLkF2YXRhcik7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxWaXBQb2ludC5zdHJpbmcgPSBcIlZQOiBcIiArIFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLlZpcFBvaW50KSArIFwiL1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uZ2V0VmlwUG9pbnROZXh0TGV2ZWwoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJWaXBQb2ludC5wcm9ncmVzcyA9IE1hdGgubWluKENvbmZpZ3MuTG9naW4uVmlwUG9pbnQgLyBDb25maWdzLkxvZ2luLmdldFZpcFBvaW50TmV4dExldmVsKCksIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlUHJvZ3Jlc3NWaXBQb2ludC5maWxsUmFuZ2UgPSB0aGlzLnNsaWRlclZpcFBvaW50LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsVmlwUG9pbnROYW1lLnN0cmluZyA9IENvbmZpZ3MuTG9naW4uZ2V0VmlwUG9pbnROYW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbE5vdExvZ2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxMb2dpbmVkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYWlsKCk7XG4gICAgICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxR2V0U2VjdXJpdHlJbmZvKCkpO1xuXHRcdFx0XHRNaW5pR2FtZU5ldHdvcmtDbGllbnQyLmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxR2V0U2VjdXJpdHlJbmZvKCkpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsQ29pbiwgQ29uZmlncy5Mb2dpbi5Db2luLCAwLjMpO1xuXHRcdFx0XHRNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kQ2hlY2sobmV3IGNtZC5TZW5kU2NyaWJlKCkpO1xuXG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9MT0dPVVQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxOb3RMb2dpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxMb2dpbmVkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG5cdFx0XHRcdE1pbmlHYW1lTmV0d29ya0NsaWVudDIuZ2V0SW5zdGFuY2UoKS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBUaWVuTGVuTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgICAgIC8vICAgICAgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuYnV0dG9uTWluaUdhbWUuaGlkZGVuKCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbmlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgKFNQVXRpbHMuZ2V0VXNlckFjY2Vzc1Rva2VuRkIoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYWN0TG9naW5GQigpXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgKHRoaXMuZWRiVXNlcm5hbWUuc3RyaW5nLmxlbmd0aCA+IDAgJiYgdGhpcy5lZGJQYXNzd29yZC5zdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFjdExvZ2luKCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxOb3RMb2dpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxMb2dpbmVkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5idXR0b25NaW5pR2FtZS5oaWRkZW4oKTtcblxuICAgICAgICAgICAgICAgIC8vZmFrZSBqYWNrcG90XG4gICAgICAgICAgICAgICAgdmFyIGoxMDAgPSBVdGlscy5yYW5kb21SYW5nZUludCg1MDAwLCA3MDAwKSAqIDEwMDtcbiAgICAgICAgICAgICAgICB2YXIgajEwMDAgPSBVdGlscy5yYW5kb21SYW5nZUludCg1MDAwLCA3MDAwKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgdmFyIGoxMDAwMCA9IFV0aWxzLnJhbmRvbVJhbmdlSW50KDUwMDAsIDcwMDApICogMTAwMDA7XG4gICAgICAgICAgICAgICAgLy8gLy9cbiAgICAgICAgICAgICAgICB0aGlzLnRhYnNMaXN0R2FtZS51cGRhdGVJdGVtSmFja3BvdHMoXCJhdWRpdGlvblwiLCBqMTAwLCBmYWxzZSwgajEwMDAsIGZhbHNlLCBqMTAwMDAsIGZhbHNlKTsvL3RheSBkdVxuICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhcImNhcHRhaW5cIiwgajEwMCwgZmFsc2UsIGoxMDAwLCBmYWxzZSwgajEwMDAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzTGlzdEdhbWUudXBkYXRlSXRlbUphY2twb3RzKFwic3BhcnRhbnNcIiwgajEwMCwgZmFsc2UsIGoxMDAwLCBmYWxzZSwgajEwMDAwLCBmYWxzZSk7Ly90aGFuIHRhaVxuICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhcInRhbWh1bmdcIiwgajEwMCwgZmFsc2UsIGoxMDAwLCBmYWxzZSwgajEwMDAwLCBmYWxzZSk7Ly9jaGltIGRpZW5cbiAgICAgICAgICAgICAgICB0aGlzLnRhYnNMaXN0R2FtZS51cGRhdGVJdGVtSmFja3BvdHMoXCJhenRlY1wiLCBqMTAwLCBmYWxzZSwgajEwMDAsIGZhbHNlLCBqMTAwMDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnNMaXN0R2FtZS51cGRhdGVJdGVtSmFja3BvdHMoXCJ6ZXVzXCIsIGoxMDAsIGZhbHNlLCBqMTAwMCwgZmFsc2UsIGoxMDAwMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhcInRoZXRoYW9cIiwgajEwMCwgZmFsc2UsIGoxMDAwLCBmYWxzZSwgajEwMDAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzTGlzdEdhbWUudXBkYXRlSXRlbUphY2twb3RzKFwic2hvb3RmaXNoXCIsIGoxMDAsIGZhbHNlLCBqMTAwMCwgZmFsc2UsIGoxMDAwMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhcImNoaWVtdGluaFwiLCBqMTAwLCBmYWxzZSwgajEwMDAsIGZhbHNlLCBqMTAwMDAsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdGRhdGEoajEwMCwgajEwMDAsIGoxMDAwMClcbiAgICAgICAgICAgIC8vICAgIHRoaXMudG9wSHUuU2hvd0RhdGEodGhpcy5saXN0RGF0YTEwMCwgdGhpcy5saXN0RGF0YTEwMDAsIHRoaXMubGlzdERhdGExMDAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxOb3RMb2dpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsTG9naW5lZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9JTkZPX1VQREFURUQpO1xuICAgICAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcbiAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kQ2hlY2sobmV3IGNtZC5SZXFHZXRNb25leVVzZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIENvbmZpZ3MuQXBwLmdldFNlcnZlckNvbmZpZygpO1xuICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIm9uIGNsb3NlIG1pbmlnYW1lXCIpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RWZmKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRFZmYoKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGVUb3ApXG4gICAgICAgICAgICAgICAgLnNldCh7IHk6IGNjLndpblNpemUuaGVpZ2h0IC8gMiwgb3BhY2l0eTogMTUwIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyB5OiBjYy53aW5TaXplLmhlaWdodCAvIDIgLSB0aGlzLm5vZGVUb3AuaGVpZ2h0IC8gMiwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVDZW50ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlVG9wLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICAvLyAgICB0aGlzLmxheW91dEJ0bkxlZnQuc3BhY2luZ1ggPSA1MCAqIChjYy53aW5TaXplLndpZHRoIC8gMTU2MCk7XG4gICAgICAgICAgICAgICAgLy8gICAgdGhpcy5sYXlvdXRMYkxlZnQuc3BhY2luZ1ggPSA1MCAqIChjYy53aW5TaXplLndpZHRoIC8gMTU2MCk7XG5cbiAgICAgICAgICAgICAgICAvLyAgICB0aGlzLmxheW91dExiUmlnaHQuc3BhY2luZ1ggPSA1MCAqIChjYy53aW5TaXplLndpZHRoIC8gMTU2MCk7XG4gICAgICAgICAgICAgICAgLy8gICAgdGhpcy5sYXlvdXRCdG5SaWdodC5zcGFjaW5nWCA9IDUwICogKGNjLndpblNpemUud2lkdGggLyAxNTYwKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjI1KVxuICAgICAgICAgICAgICAgLy8gLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2V0Q29uZmlnR2FtZSgpO1xuICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZUJvdClcbiAgICAgICAgICAgICAgICAuc2V0KHsgeTogLWNjLndpblNpemUuaGVpZ2h0IC8gMiwgb3BhY2l0eTogMTUwIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyB5OiAtY2Mud2luU2l6ZS5oZWlnaHQgLyAyICsgdGhpcy5ub2RlQm90LmhlaWdodCAvIDIsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlQm90LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0dXBMaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlCYWNrZ3JvdW5kTXVzaWModGhpcy5jbGlwQmdtKTtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbE5vdExvZ2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbExvZ2luZWQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuYnV0dG9uTWluaUdhbWUuaGlkZGVuKCk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmZha2VUb3BIdURhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIERVQVhFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqMTAwOiBVdGlscy5yYW5kb21SYW5nZUludCg1MDAwLCA3MDAwKSAqIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGoxMDAwOiBVdGlscy5yYW5kb21SYW5nZUludCg1MDAwLCA3MDAwKSAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBqMTAwMDA6IFV0aWxzLnJhbmRvbVJhbmdlSW50KDUwMDAsIDcwMDApICogMTAwMDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgQklUQ09JTjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgajEwMDogVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgNzAwMCkgKiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBqMTAwMDogVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgNzAwMCkgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgajEwMDAwOiBVdGlscy5yYW5kb21SYW5nZUludCg1MDAwLCA3MDAwKSAqIDEwMDAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFRIQU5UQUk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGoxMDA6IFV0aWxzLnJhbmRvbVJhbmdlSW50KDUwMDAsIDcwMDApICogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgajEwMDA6IFV0aWxzLnJhbmRvbVJhbmdlSW50KDUwMDAsIDcwMDApICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGoxMDAwMDogVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgNzAwMCkgKiAxMDAwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBDSElNRElFTjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgajEwMDogVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgNzAwMCkgKiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBqMTAwMDogVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgNzAwMCkgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgajEwMDAwOiBVdGlscy5yYW5kb21SYW5nZUludCg1MDAwLCA3MDAwKSAqIDEwMDAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIEJJS0lOSToge1xuICAgICAgICAgICAgICAgICAgICAgICAgajEwMDogVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgNzAwMCkgKiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBqMTAwMDogVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgNzAwMCkgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgajEwMDAwOiBVdGlscy5yYW5kb21SYW5nZUludCg1MDAwLCA3MDAwKSAqIDEwMDAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFRIRVRIQU86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGoxMDA6IFV0aWxzLnJhbmRvbVJhbmdlSW50KDUwMDAsIDcwMDApICogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgajEwMDA6IFV0aWxzLnJhbmRvbVJhbmdlSW50KDUwMDAsIDcwMDApICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGoxMDAwMDogVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgNzAwMCkgKiAxMDAwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBDSElFTVRJTkg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGoxMDA6IFV0aWxzLnJhbmRvbVJhbmdlSW50KDUwMDAsIDcwMDApICogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgajEwMDA6IFV0aWxzLnJhbmRvbVJhbmdlSW50KDUwMDAsIDcwMDApICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGoxMDAwMDogVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgNzAwMCkgKiAxMDAwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBUSEFOQkFJOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqMTAwOiBVdGlscy5yYW5kb21SYW5nZUludCg1MDAwLCA3MDAwKSAqIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGoxMDAwOiBVdGlscy5yYW5kb21SYW5nZUludCg1MDAwLCA3MDAwKSAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBqMTAwMDA6IFV0aWxzLnJhbmRvbVJhbmdlSW50KDUwMDAsIDcwMDApICogMTAwMDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RmFrZUpQKCk7XG4gICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5mYWtlSlBJbnYgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRGYWtlSlAoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5mYWtlSlBJbnYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbE5vdExvZ2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxMb2dpbmVkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX0lORk9fVVBEQVRFRCk7XG4gICAgICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kQ2hlY2sobmV3IGNtZC5SZXFTdWJjcmliZUhhbGxTbG90KCkpO1xuICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcUdldE1vbmV5VXNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5QYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpblBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuR0VUX1NFQ1VSSVRZX0lORk86XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzR2V0U2VjdXJpdHlJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzLnVzZXJ0eXBlID0gXCIyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlVzZXJUeXBlID0gcmVzLnVzZXJ0eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uVXNlclR5cGUgPT0gXCIyXCIgJiYgQXBwLmluc3RhbmNlLlJFQ09OTkVDVF9HQU1FID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnVwZGF0ZUNvbmZpZ0dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlQ29ubmVjdEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLk5PVElGWV9NQVJRVUVFOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNOb3RpZnlNYXJxdWVlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc0pzb24gPSBKU09OLnBhcnNlKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYmJ5Q29udHJvbGxlci5ub3RpZnlNYXJxdWVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUFsZXJ0TWluaSA9IHJlc0pzb247XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dBbGVydE1pbmlHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9KQUNLUE9UUzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzVXBkYXRlSmFja3BvdHMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdFVF9NT05FWV9VU0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc0dldE1vbmV5VXNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLm1vbmV5VXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9HT1VUOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiTG9naW4gZnJvbSBvdGhlciBwbGFjZXMhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmlzTG9naW5Gcm9tT3RoZXJQbGFjZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuaXNGb3JjZUNsb3NlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fZnJvbV9vdGhlcicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxNZW51Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbE1lbnUuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F0X2ZiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1bicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgU1BVdGlscy5zZXRVc2VyTmFtZShcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNQVXRpbHMuc2V0VXNlclBhc3MoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJJc0F1dG9Mb2dpblwiLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9MT0dPVVQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnVwZGF0ZUNvbmZpZ0dhbWUoQXBwLkRPTUFJTik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuUkVDT05ORUNUX0dBTUUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9HSU46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJMb2dpbiBNaW5pIEdhbWUgU3VjY2VzcyFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNMb2dpbihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0Y2FzZSBjbWQuQ29kZS5UWF9HQU1FX0lORk86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlRYR2FtZUluZm8oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpcEVuZCA9IHJlcy5wb3RUYWkgPiByZXMucG90WGl1ID8gcmVzLnBvdFhpdSA6IHJlcy5wb3RUYWk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG90VGFpID0gIXJlcy5iZXR0aW5nU3RhdGUgPyBjaGlwRW5kIDogcmVzLnBvdFRhaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3RYaXUgPSAhcmVzLmJldHRpbmdTdGF0ZSA/IGNoaXBFbmQgOiByZXMucG90WGl1O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYmxUYWkpIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVGFpLCBwb3RUYWksIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYmxYaXUpIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsWGl1LCBwb3RYaXUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVFhfVVBEQVRFX0lORk86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlRYVXBkYXRlVGltZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaXBFbmQgPSByZXMucG90VGFpID4gcmVzLnBvdFhpdSA/IHJlcy5wb3RYaXUgOiByZXMucG90VGFpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvdFRhaSA9ICFyZXMuYmV0dGluZ1N0YXRlID8gY2hpcEVuZCA6IHJlcy5wb3RUYWk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG90WGl1ID0gIXJlcy5iZXR0aW5nU3RhdGUgPyBjaGlwRW5kIDogcmVzLnBvdFhpdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxibFRhaSkgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUYWksIHBvdFRhaSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxibFhpdSkgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxYaXUsIHBvdFhpdSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5QYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpblBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX0pBQ0tQT1RfU0xPVFM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc1VwZGF0ZUphY2twb3RTbG90cyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNKc29uID0gSlNPTi5wYXJzZShyZXMucG90cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UudG9wSHVEYXRhID0gcmVzSnNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vLy9VdGlscy5Mb2coXCJKUDpcIiwgSlNPTi5zdHJpbmdpZnkocmVzSnNvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVVcGRhdGVKUCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKTtcblx0XHRcdFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5QYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpblBhY2tldC5nZXRDbWRJZCgpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfSkFDS1BPVF9TTE9UUzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNVcGRhdGVKYWNrcG90U2xvdHMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzSnNvbiA9IEpTT04ucGFyc2UocmVzLnBvdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlVQREFURV9KQUNLUE9UX1NMT1RTOlwiK0pTT04uc3RyaW5naWZ5KHJlc0pzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5EYXRhSmFja3BvdHMgPSByZXNKc29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlVwZGF0ZV9KYWNrcG90czpcIitKU09OLnN0cmluZ2lmeShyZXNKc29uKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcGFydGFuID0gcmVzSnNvbltcInNwYXJ0YW5cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYnNMaXN0R2FtZS51cGRhdGVJdGVtSmFja3BvdHMoXCJzcGFydGFuc1wiLCBzcGFydGFuW1wiMTAwXCJdW1wicFwiXSwgc3BhcnRhbltcIjEwMFwiXVtcIngyXCJdID09IDEsIHNwYXJ0YW5bXCIxMDAwXCJdW1wicFwiXSwgc3BhcnRhbltcIjEwMDBcIl1bXCJ4MlwiXSA9PSAxLCBzcGFydGFuW1wiMTAwMDBcIl1bXCJwXCJdLCBzcGFydGFuW1wiMTAwMDBcIl1bXCJ4MlwiXSA9PSAxKTtcblx0XHRcdFx0XHRcdGxldCBUQUlfWElVID0gcmVzSnNvbltcIlRBSV9YSVVcIl07XG5cdFx0XHRcdFx0XHRsZXQgYWFzZCA9IFRBSV9YSVVbXCIxXCJdW1wicHRcIl0gKyBUQUlfWElVW1wiMFwiXVtcInB4XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxKUFRhaS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoYWFzZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYXVkaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdWRpdGlvbiA9IHJlc0pzb25bXCJhdWRpdGlvblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhcImF1ZGl0aW9uXCIsIGF1ZGl0aW9uW1wiMTAwXCJdW1wicFwiXSwgYXVkaXRpb25bXCIxMDBcIl1bXCJ4MlwiXSA9PSAxLCBhdWRpdGlvbltcIjEwMDBcIl1bXCJwXCJdLCBhdWRpdGlvbltcIjEwMDBcIl1bXCJ4MlwiXSA9PSAxLCBhdWRpdGlvbltcIjEwMDAwXCJdW1wicFwiXSwgYXVkaXRpb25bXCIxMDAwMFwiXVtcIngyXCJdID09IDEpO1xuXHRcdFx0XHRcdFx0Ly9NaW5pcG9rZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5pcG9rZXIgPSByZXNKc29uW1wibWluaXBva2VyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJzTGlzdEdhbWUudXBkYXRlSXRlbUphY2twb3RzKFwibWluaXBva2VyXCIsIGF1ZGl0aW9uW1wiMTAwXCJdW1wicFwiXSwgbWluaXBva2VyW1wiMTAwXCJdW1wieDJcIl0gPT0gMSwgbWluaXBva2VyW1wiMTAwMFwiXVtcInBcIl0sIG1pbmlwb2tlcltcIjEwMDBcIl1bXCJ4MlwiXSA9PSAxLCBtaW5pcG9rZXJbXCIxMDAwMFwiXVtcInBcIl0sIG1pbmlwb2tlcltcIjEwMDAwXCJdW1wieDJcIl0gPT0gMSk7XG5cdFx0XHRcdFx0XHR0aGlzLmxibG1pbmlwb2tlci5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIobWluaXBva2VyW1wiMTAwMDBcIl1bXCJwXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hpZW10aW5oXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpZW10aW5oID0gcmVzSnNvbltcImNoaWVtdGluaFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhcImNoaWVtdGluaFwiLCBjaGllbXRpbmhbXCIxMDBcIl1bXCJwXCJdLCBjaGllbXRpbmhbXCIxMDBcIl1bXCJ4MlwiXSA9PSAxLCBjaGllbXRpbmhbXCIxMDAwXCJdW1wicFwiXSwgY2hpZW10aW5oW1wiMTAwMFwiXVtcIngyXCJdID09IDEsIGNoaWVtdGluaFtcIjEwMDAwXCJdW1wicFwiXSwgY2hpZW10aW5oW1wiMTAwMDBcIl1bXCJ4MlwiXSA9PSAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXliYWNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF5YmFjaCA9IHJlc0pzb25bXCJtYXliYWNoXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJzTGlzdEdhbWUudXBkYXRlSXRlbUphY2twb3RzKFwibWF5YmFjaFwiLCBtYXliYWNoW1wiMTAwXCJdW1wicFwiXSwgbWF5YmFjaFtcIjEwMFwiXVtcIngyXCJdID09IDEsIG1heWJhY2hbXCIxMDAwXCJdW1wicFwiXSwgbWF5YmFjaFtcIjEwMDBcIl1bXCJ4MlwiXSA9PSAxLCBtYXliYWNoW1wiMTAwMDBcIl1bXCJwXCJdLCBtYXliYWNoW1wiMTAwMDBcIl1bXCJ4MlwiXSA9PSAxKTtcblx0XHRcdFx0XHRcdC8vTOG7jSBuxrDhu5tjIHRo4bqnblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbGF4eSA9IHJlc0pzb25bXCJnYWxheHlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYnNMaXN0R2FtZS51cGRhdGVJdGVtSmFja3BvdHMoXCJnYWxheHlcIiwgZ2FsYXh5W1wiMTAwXCJdW1wicFwiXSwgZ2FsYXh5W1wiMTAwXCJdW1wieDJcIl0gPT0gMSwgZ2FsYXh5W1wiMTAwMFwiXVtcInBcIl0sIGdhbGF4eVtcIjEwMDBcIl1bXCJ4MlwiXSA9PSAxLCBnYWxheHlbXCIxMDAwMFwiXVtcInBcIl0sIGdhbGF4eVtcIjEwMDAwXCJdW1wieDJcIl0gPT0gMSk7XG5cdFx0XHRcdFx0XHR0aGlzLmxibGxvbnVvY3RoYW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGdhbGF4eVtcIjEwMDAwXCJdW1wicFwiXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFtaHVuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhbWh1bmcgPSByZXNKc29uW1widGFtaHVuZ1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhcInRhbWh1bmdcIiwgdGFtaHVuZ1tcIjEwMFwiXVtcInBcIl0sIHRhbWh1bmdbXCIxMDBcIl1bXCJ4MlwiXSA9PSAxLCB0YW1odW5nW1wiMTAwMFwiXVtcInBcIl0sIHRhbWh1bmdbXCIxMDAwXCJdW1wieDJcIl0gPT0gMSwgdGFtaHVuZ1tcIjEwMDAwXCJdW1wicFwiXSwgdGFtaHVuZ1tcIjEwMDAwXCJdW1wieDJcIl0gPT0gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmFuZ2Ugcm92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5nZVJvdmVyID0gcmVzSnNvbltcInJhbmdlUm92ZXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYnNMaXN0R2FtZS51cGRhdGVJdGVtSmFja3BvdHMoXCJhenRlY1wiLCByYW5nZVJvdmVyW1wiMTAwXCJdW1wicFwiXSwgcmFuZ2VSb3ZlcltcIjEwMFwiXVtcIngyXCJdID09IDEsIHJhbmdlUm92ZXJbXCIxMDAwXCJdW1wicFwiXSwgcmFuZ2VSb3ZlcltcIjEwMDBcIl1bXCJ4MlwiXSA9PSAxLCByYW5nZVJvdmVyW1wiMTAwMDBcIl1bXCJwXCJdLCByYW5nZVJvdmVyW1wiMTAwMDBcIl1bXCJ4MlwiXSA9PSAxKTtcblx0XHRcdFx0XHRcdHRoaXMubGJsY2FvdGhhcC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmFuZ2VSb3ZlcltcIjEwMDAwXCJdW1wicFwiXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmFuZ2Ugcm92ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmVubGV5ID0gcmVzSnNvbltcImJlbmxleVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhcInpldXNcIiwgYmVubGV5W1wiMTAwXCJdW1wicFwiXSwgYmVubGV5W1wiMTAwXCJdW1wieDJcIl0gPT0gMSwgYmVubGV5W1wiMTAwMFwiXVtcInBcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVubGV5W1wiMTAwMFwiXVtcIngyXCJdID09IDEsIGJlbmxleVtcIjEwMDAwXCJdW1wicFwiXSwgYmVubGV5W1wiMTAwMDBcIl1bXCJ4MlwiXSA9PSAxKTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vcmFuZ2Ugcm92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiaWtpbmkgPSByZXNKc29uW1wiYmlraW5pXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJzTGlzdEdhbWUudXBkYXRlSXRlbUphY2twb3RzKFwiYmlraW5pXCIsIGJpa2luaVtcIjEwMFwiXVtcInBcIl0sIGJpa2luaVtcIjEwMFwiXVtcIngyXCJdID09IDEsIGJpa2luaVtcIjEwMDBcIl1bXCJwXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpa2luaVtcIjEwMDBcIl1bXCJ4MlwiXSA9PSAxLCBiaWtpbmlbXCIxMDAwMFwiXVtcInBcIl0sIGJpa2luaVtcIjEwMDAwXCJdW1wieDJcIl0gPT0gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmFuZ2Ugcm92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb2xscm95ZSA9IHJlc0pzb25bXCJyb2xsUm95ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhcImdhaW5oYXlcIiwgcm9sbHJveWVbXCIxMDBcIl1bXCJwXCJdLCByb2xscm95ZVtcIjEwMFwiXVtcIngyXCJdID09IDEsIHJvbGxyb3llW1wiMTAwMFwiXVtcInBcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sbHJveWVbXCIxMDAwXCJdW1wieDJcIl0gPT0gMSwgcm9sbHJveWVbXCIxMDAwMFwiXVtcInBcIl0sIHJvbGxyb3llW1wiMTAwMDBcIl1bXCJ4MlwiXSA9PSAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgdGhpcy5jcmVhdGVMaXN0ZGF0YShqMTAwLCBqMTAwMCwgajEwMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0RGF0YTEwMC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhMTAwW2ldLmdhbWVpZCA9PSBcImNoaWVtdGluaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGExMDBbaV0gPSBuZXcgVG9waHVkYXRhKFwiY2hpZW10aW5oXCIsIFwiQ2hpw6ptIFRpbmhcIiwgY2hpZW10aW5oW1wiMTAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhMTAwW2ldLmdhbWVpZCA9PSBcInNwYXJ0YW5zXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YTEwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJzcGFydGFuc1wiLCBcIlRo4bqnbiBUw6BpXCIsIHNwYXJ0YW5bXCIxMDBcIl1bXCJwXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGExMDBbaV0uZ2FtZWlkID09IFwiYXVkaXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwW2ldID0gbmV3IFRvcGh1ZGF0YShcImF1ZGl0aW9uXCIsIFwixJB1YSBYZVwiLCBhdWRpdGlvbltcIjEwMFwiXVtcInBcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YTEwMFtpXS5nYW1laWQgPT0gXCJ0YW1odW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YTEwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJ0YW1odW5nXCIsIFwiQ2hpbSDEkGnDqm5cIiwgdGFtaHVuZ1tcIjEwMFwiXVtcInBcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhMTAwW2ldLmdhbWVpZCA9PSBcInpldXNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwW2ldID0gbmV3IFRvcGh1ZGF0YShcInpldXNcIiwgXCJDcnlwdG9cIiwgYmVubGV5W1wiMTAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhMTAwW2ldLmdhbWVpZCA9PSBcImdhaW5oYXlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwW2ldID0gbmV3IFRvcGh1ZGF0YShcImdhaW5oYXlcIiwgXCJUaOG7gyBUaGFvXCIsIHJvbGxyb3llW1wiMTAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5saXN0RGF0YTEwMFtpXS5nYW1laWQgPT0gXCJiaWtpbmlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwW2ldID0gbmV3IFRvcGh1ZGF0YShcImJpa2luaVwiLCBcIlRo4buDIFRoYW9cIiwgYmlraW5pW1wiMTAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5saXN0RGF0YTEwMFtpXS5nYW1laWQgPT0gXCJtYXliYWNoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YTEwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJtYXliYWNoXCIsIFwiVGjhu4MgVGhhb1wiLCBtYXliYWNoW1wiMTAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YTEwMDBbaV0uZ2FtZWlkID09IFwiY2hpZW10aW5oXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YTEwMDBbaV0gPSBuZXcgVG9waHVkYXRhKFwiY2hpZW10aW5oXCIsIFwiQ2hpw6ptIFRpbmhcIiwgY2hpZW10aW5oW1wiMTAwMFwiXVtcInBcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YTEwMDBbaV0uZ2FtZWlkID09IFwic3BhcnRhbnNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJzcGFydGFuc1wiLCBcIlRo4bqnbiBUw6BpXCIsIHNwYXJ0YW5bXCIxMDAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhMTAwMFtpXS5nYW1laWQgPT0gXCJhdWRpdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGExMDAwW2ldID0gbmV3IFRvcGh1ZGF0YShcImF1ZGl0aW9uXCIsIFwixJB1YSBYZVwiLCBhdWRpdGlvbltcIjEwMDBcIl1bXCJwXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGExMDAwW2ldLmdhbWVpZCA9PSBcInRhbWh1bmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJ0YW1odW5nXCIsIFwiQ2hpbSDEkGnDqm5cIiwgdGFtaHVuZ1tcIjEwMDBcIl1bXCJwXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGExMDAwW2ldLmdhbWVpZCA9PSBcInpldXNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJ6ZXVzXCIsIFwiQ3J5cHRvXCIsIGJlbmxleVtcIjEwMDBcIl1bXCJwXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGExMDAwW2ldLmdhbWVpZCA9PSBcImdhaW5oYXlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJnYWluaGF5XCIsIFwiVGjhu4MgVGhhb1wiLCByb2xscm95ZVtcIjEwMDBcIl1bXCJwXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmxpc3REYXRhMTAwMFtpXS5nYW1laWQgPT0gXCJiaWtpbmlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJiaWtpbmlcIiwgXCJUaOG7gyBUaGFvXCIsIGJpa2luaVtcIjEwMDBcIl1bXCJwXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmxpc3REYXRhMTAwMFtpXS5nYW1laWQgPT0gXCJtYXliYWNoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YTEwMDBbaV0gPSBuZXcgVG9waHVkYXRhKFwibWF5YmFjaFwiLCBcIlRo4buDIFRoYW9cIiwgbWF5YmFjaFtcIjEwMDBcIl1bXCJwXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gMTAwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YTEwMDAwW2ldLmdhbWVpZCA9PSBcImNoaWVtdGluaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGExMDAwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJjaGllbXRpbmhcIiwgXCJDaGnDqm0gVGluaFwiLCBjaGllbXRpbmhbXCIxMDAwMFwiXVtcInBcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YTEwMDAwW2ldLmdhbWVpZCA9PSBcInNwYXJ0YW5zXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YTEwMDAwW2ldID0gbmV3IFRvcGh1ZGF0YShcInNwYXJ0YW5zXCIsIFwiVGjhuqduIFTDoGlcIiwgc3BhcnRhbltcIjEwMDAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhMTAwMDBbaV0uZ2FtZWlkID09IFwiYXVkaXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwMDBbaV0gPSBuZXcgVG9waHVkYXRhKFwiYXVkaXRpb25cIiwgXCLEkHVhIFhlXCIsIGF1ZGl0aW9uW1wiMTAwMDBcIl1bXCJwXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YTEwMDAwW2ldLmdhbWVpZCA9PSBcInRhbWh1bmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwMDBbaV0gPSBuZXcgVG9waHVkYXRhKFwidGFtaHVuZ1wiLCBcIkNoaW0gxJBpw6puXCIsIHRhbWh1bmdbXCIxMDAwMFwiXVtcInBcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhMTAwMDBbaV0uZ2FtZWlkID09IFwiemV1c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGExMDAwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJ6ZXVzXCIsIFwiQ3J5cHRvXCIsIGJlbmxleVtcIjEwMDAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhMTAwMDBbaV0uZ2FtZWlkID09IFwiZ2FpbmhheVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGExMDAwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJnYWluaGF5XCIsIFwiVGjhu4MgVGhhb1wiLCByb2xscm95ZVtcIjEwMDAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5saXN0RGF0YTEwMDAwW2ldLmdhbWVpZCA9PSBcImJpa2luaVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGExMDAwMFtpXSA9IG5ldyBUb3BodWRhdGEoXCJiaWtpbmlcIiwgXCJUaOG7gyBUaGFvXCIsIGJpa2luaVtcIjEwMDAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5saXN0RGF0YTEwMDAwW2ldLmdhbWVpZCA9PSBcIm1heWJhY2hcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhMTAwMDBbaV0gPSBuZXcgVG9waHVkYXRhKFwibWF5YmFjaFwiLCBcIlRo4buDIFRoYW9cIiwgbWF5YmFjaFtcIjEwMDAwXCJdW1wicFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXHRcdGxvZ2luR2FtZUJldCgpIHtcblx0XHRcdFxuXHRcdFx0Ly92YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHQvL3NlbGYuX3dlYnZpZXcgPSBzZWxmLm5vZGVXZWJWaWV3LmdldENoaWxkQnlOYW1lKFwiTmV3IFdlYlZpZXdcIikuZ2V0Q29tcG9uZW50KGNjLldlYlZpZXcpXG5cdFx0XHQvL3NlbGYubm9kZVdlYlZpZXcuYWN0aXZlID0gdHJ1ZVxuXHRcdFx0dmFyIHVybCA9IFwiaHR0cHM6Ly9wbGF5ZGVtby5wdy9sb2dpbj9pZD1cIisgQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSArXCImcHc9XCIrIG1kNShTUFV0aWxzLmdldFVzZXJQYXNzKCkpICtcIlwiO1xuICAgICAgICAgICAgLy9zZWxmLl93ZWJ2aWV3LnVybCA9IHVybDtcblx0XHRcdC8vY29uc29sZS5sb2codXJsKTtcblx0XHRcdEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5jbGljayk7XG4gICAgICAgICAgICBjYy5zeXMub3BlblVSTCh1cmwpO1xuXHRcdFx0IFxuXHRcdH1cblx0XHRcblx0XHRvbkNsb3NlV2Vidmlldygpe1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5ub2RlV2ViVmlldy5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0c2VsZi5jbGVhckFsbCgpXG5cdFx0fVxuICAgICAgICBoYW5kbGVVcGRhdGVKUCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwVG9wSHUgIT0gbnVsbCAmJiB0aGlzLnBvcHVwVG9wSHUubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVG9wSHUuc2V0SW5mbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KFwiVEhBTlRBSVwiLCBcInNwYXJ0YW5cIik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoXCJEVUFYRVwiLCBcImF1ZGl0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KFwiQ0hJRU1USU5IXCIsIFwiY2hpZW10aW5oXCIpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KFwiVEhFVEhBT1wiLCBcIm1heWJhY2hcIik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoXCJDSElNRElFTlwiLCBcInRhbWh1bmdcIik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoXCJCSVRDT0lOXCIsIFwiYmVubGV5XCIpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KFwiVEhBTkJBSVwiLCBcInJvbGxSb3llXCIpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KFwiQklLSU5JXCIsIFwiYmlraW5pXCIpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KFwiUElLQUNIVVwiLCBcInBva2Vtb25cIik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoXCJNSU5JUE9LRVJcIiwgXCJtaW5pcG9rZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlSmFja3BvdChnYW1lTmFtZSwgamFja3BvdElEKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEFwcC5pbnN0YW5jZS50b3BIdURhdGFbamFja3BvdElEXTtcbiAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhnYW1lTmFtZSwgZGF0YVtcIjEwMFwiXVtcInBcIl0sIGRhdGFbXCIxMDBcIl1bXCJ4MlwiXSA9PSAxLCBkYXRhW1wiMTAwMFwiXVtcInBcIl0sXG4gICAgICAgICAgICAgICAgZGF0YVtcIjEwMDBcIl1bXCJ4MlwiXSA9PSAxLCBkYXRhW1wiMTAwMDBcIl1bXCJwXCJdLCBkYXRhW1wiMTAwMDBcIl1bXCJ4MlwiXSA9PSAxKVxuICAgICAgICB9XG4gICAgICAgIGluaXRGYWtlSlAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gQXBwLmluc3RhbmNlLmZha2VUb3BIdURhdGEpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuZmFrZVRvcEh1RGF0YVtrZXldWydqMTAwJ10gKz0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMCwgMjAwMDApO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5mYWtlVG9wSHVEYXRhW2tleV1bJ2oxMDAwJ10gKz0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMDAsIDIwMDAwMCk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmZha2VUb3BIdURhdGFba2V5XVsnajEwMDAwJ10gKz0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoNTAwMDAsIDIwMDAwMDApO1xuICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZUl0ZW1KYWNrcG90cyhrZXksIEFwcC5pbnN0YW5jZS5mYWtlVG9wSHVEYXRhW2tleV1bJ2oxMDAnXSwgZmFsc2UsIEFwcC5pbnN0YW5jZS5mYWtlVG9wSHVEYXRhW2tleV1bJ2oxMDAwJ10sIGZhbHNlLCBBcHAuaW5zdGFuY2UuZmFrZVRvcEh1RGF0YVtrZXldWydqMTAwMDAnXSwgZmFsc2UpOy8vdGF5IGR1XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2hvd0FsZXJ0TWluaUdhbWUoKSB7XG4gICAgICAgICAgICAvLyBsZXQgcGFyZW50ID0gdGhpcy50eHROb3RpZnlNYXJxdWVlLm5vZGUucGFyZW50O1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMudHh0Tm90aWZ5TWFycXVlZS5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy88Y29sb3I9IzAwZmYwMD5SaWNoPC9jPjxjb2xvcj0jMGZmZmZmPlRleHQ8L2NvbG9yPlxuICAgICAgICAgICAgbGV0IHR4dEZvcm1hdCA9IFwiKDxjb2xvcj0jMDBmZjAwPiVzPC9jPikgXCIgKyBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jb25ncmF0dWFsdGlvbicpICsgXCI8Y29sb3I9I0ZGN0EwMD4gJXMgPC9jPlwiICsgQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfd2luJykgKyBcIjxjb2xvcj0jRkZGRjAwPiAlczwvYz4gICAgICAgIFwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGFBbGVydE1pbmlbXCJlbnRyaWVzXCJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGUgPSB0aGlzLmRhdGFBbGVydE1pbmlbXCJlbnRyaWVzXCJdW2ldO1xuICAgICAgICAgICAgICAgIExvYmJ5Q29udHJvbGxlci5ub3RpZnlNYXJxdWVlICs9IGNjLmpzLmZvcm1hdFN0cih0eHRGb3JtYXQsIENvbmZpZ3MuR2FtZUlkLmdldEdhbWVOYW1lKGVbXCJnXCJdKSwgZVtcIm5cIl0sIFV0aWxzLmZvcm1hdE51bWJlcihlW1wibVwiXSkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnR4dE5vdGlmeU1hcnF1ZWUuc3RyaW5nID0gTG9iYnlDb250cm9sbGVyLm5vdGlmeU1hcnF1ZWU7XG4gICAgICAgICAgICB0aGlzLnR4dE5vdGlmeU1hcnF1ZWUuc3RyaW5nID0gTG9iYnlDb250cm9sbGVyLm5vdGlmeU1hcnF1ZWU7XG4gICAgICAgICAgICB0aGlzLnR4dE5vdGlmeU1hcnF1ZWUubm9kZS54ID0gcGFyZW50LndpZHRoIC8gMlxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmdOb3RpZnkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYWNNb3ZlID0gY2MudHdlZW4oKS5ieSgxLjAsIHsgeDogLTE1MCB9KTtcbiAgICAgICAgICAgICAgICBsZXQgYWNDaGVjayA9IGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnR4dE5vdGlmeU1hcnF1ZWUubm9kZS54IDwgLXRoaXMudHh0Tm90aWZ5TWFycXVlZS5ub2RlLndpZHRoIC8gMiAtIHBhcmVudC53aWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnR4dE5vdGlmeU1hcnF1ZWUubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJnTm90aWZ5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudHh0Tm90aWZ5TWFycXVlZS5ub2RlKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnR4dE5vdGlmeU1hcnF1ZWUubm9kZSkucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpLnNlcXVlbmNlKGFjTW92ZSwgYWNDaGVjaykpLnN0YXJ0KCk7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIHJlQ29ubmVjdEdhbWUoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgIC8vICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jbG9zZSgpO1xuICAgICAgICAgICAgaWYgKEFwcC5pbnN0YW5jZS5UWVBFX0xPR0lOID09IFwiTk9STUFMXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdExvZ2luKEFwcC5pbnN0YW5jZS5VU0VSX05BTUUsIEFwcC5pbnN0YW5jZS5QQVNTX1dPUkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5pdFBsdWdpbkZhY2Vib29rKCkge1xuICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnID09IHR5cGVvZiBzZGtib3gpIHtcbiAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKCdzZGtib3ggaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHNka2JveC5QbHVnaW5GYWNlYm9vaykge1xuICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coJ3Nka2JveC5QbHVnaW5GYWNlYm9vayBpcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNka2JveC5QbHVnaW5GYWNlYm9vay5zZXRMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb25Mb2dpbjogZnVuY3Rpb24gKGlzTG9naW4sIG1zZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMb2dpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbkZCID0gc2RrYm94LlBsdWdpbkZhY2Vib29rLmdldEFjY2Vzc1Rva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dpbkZCKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCJM4buXaSDEkcSDbmcgbmjhuq1wIHN0YXR1czogXCIgKyBtc2cpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwibG9naW4gZmFpbGVkIFwiICsgbXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcImluaXRQbHVnaW5GYWNlYm9vayBzdWNjZXNzIVwiKTtcbiAgICAgICAgICAgIHNka2JveC5QbHVnaW5GYWNlYm9vay5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFpbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlTWFpbCgpIHtcbiAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCI0MDZcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzW1wiZGF0YVwiXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR4dE1haWwubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0dGhpcy50eHRNYWlsei5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHh0TWFpbC5zdHJpbmcgPSByZXNbXCJkYXRhXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXBwLmluc3RhbmNlLmNoZWNrTWFpbFVucmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2hlY2tNYWlsVW5yZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBBcHAuaW5zdGFuY2UuY29uZmlybURpYWxvZy5zaG93MihBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZXdfbWFpbCcpLCAoaXNDb25maXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIGlmIChpc0NvbmZpcm0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICB0aGlzLmFjdEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgfSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHh0TWFpbC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5pdFBsdWdpbkZpcmViYXNlKCkge1xuICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnID09IHR5cGVvZiBzZGtib3gpIHtcbiAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKCdzZGtib3ggaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnID09IHR5cGVvZiBzZGtib3guZmlyZWJhc2UpIHtcbiAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKCdzZGtib3guZmlyZWJhc2UgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIlNES0JPWCBGSVJFQkFTRSBPSyFcIik7XG4gICAgICAgICAgICAvLyBzZGtib3guZmlyZWJhc2UuQW5hbHl0aWNzLmluaXQoKTtcbiAgICAgICAgICAgIHNka2JveC5maXJlYmFzZS5BbmFseXRpY3MuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcVVuU3ViY3JpYmVIYWxsU2xvdCgpKTtcbiAgICAgICAgfVxuXHRcdGNyZWF0ZUxpc3RkYXRhKGoxMDA6IG51bWJlciwgajEwMDA6IG51bWJlciwgajEwMDAwOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGExMDAgPSBuZXcgQXJyYXk8VG9waHVkYXRhPigpO1xuICAgICAgICAgICAgdGhpcy5saXN0RGF0YTEwMDAgPSBuZXcgQXJyYXk8VG9waHVkYXRhPigpO1xuICAgICAgICAgICAgdGhpcy5saXN0RGF0YTEwMDAwID0gbmV3IEFycmF5PFRvcGh1ZGF0YT4oKTtcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGExMDAucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgVG9waHVkYXRhKFwiY2hpZW10aW5oXCIsIFwiQ2hpw6ptIFRpbmhcIiwgajEwMCksXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcInNwYXJ0YW5zXCIsIFwiVGjhuqduIFTDoGlcIiwgajEwMCksXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcImF1ZGl0aW9uXCIsIFwixJB1YSBYZVwiLCBqMTAwKSxcblx0XHRcdFx0bmV3IFRvcGh1ZGF0YShcImJlbmxleVwiLCBcIkJpdGNvaW5cIiwgajEwMCksXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcImJpa2luaVwiLCBcIkJpa2luaVwiLCBqMTAwKSxcbiAgICAgICAgICAgICAgICBuZXcgVG9waHVkYXRhKFwidGFtaHVuZ1wiLCBcIkNoaW0gxJBpw6puXCIsIGoxMDApLFxuICAgICAgICAgICAgICAgICBuZXcgVG9waHVkYXRhKFwicm9sbFJveWVcIiwgXCJUaOG6p24gQsOgaVwiLCBqMTAwKSxcbiAgICAgICAgICAgICAgICBuZXcgVG9waHVkYXRhKFwiemV1c1wiLCBcIkNyeXB0b1wiLCBqMTAwKSxcbiAgICAgICAgICAgICAgICBuZXcgVG9waHVkYXRhKFwibWF5YmFjaFwiLCBcIlRo4buDIFRoYW9cIiwgajEwMCksXG4gICAgICAgICAgICAgICAgLy8gbmV3IFRvcGh1ZGF0YShcInNob290ZmlzaFwiLCBcIkLhuq9uIEPDoVwiLCBqMTAwKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGExMDAwLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcImNoaWVtdGluaFwiLCBcIkNoacOqbSBUaW5oXCIsIGoxMDAwKSxcbiAgICAgICAgICAgICAgICBuZXcgVG9waHVkYXRhKFwic3BhcnRhbnNcIiwgXCJUaOG6p24gVMOgaVwiLCBqMTAwMCksXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcImF1ZGl0aW9uXCIsIFwixJB1YSBYZVwiLCBqMTAwMCksXG5cdFx0XHRcdG5ldyBUb3BodWRhdGEoXCJiZW5sZXlcIiwgXCJCaXRjb2luXCIsIGoxMDAwKSxcbiAgICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcImJpa2luaVwiLCBcIkJpa2luaVwiLCBqMTAwMCksXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcInRhbWh1bmdcIiwgXCJDaGltIMSQacOqblwiLCBqMTAwMCksXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcInJvbGxSb3llXCIsIFwiVGjhuqduIELDoGlcIiwgajEwMDApLFxuICAgICAgICAgICAgICAgIG5ldyBUb3BodWRhdGEoXCJ6ZXVzXCIsIFwiQ3J5cHRvXCIsIGoxMDAwKSxcbiAgICAgICAgICAgICAgICBuZXcgVG9waHVkYXRhKFwibWF5YmFjaFwiLCBcIlRo4buDIFRoYW9cIiwgajEwMDApLFxuICAgICAgICAgICAgICAgIC8vIG5ldyBUb3BodWRhdGEoXCJzaG9vdGZpc2hcIiwgXCJC4bqvbiBDw6FcIiwgajEwMDApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5saXN0RGF0YTEwMDAwLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcImNoaWVtdGluaFwiLCBcIkNoacOqbSBUaW5oXCIsIGoxMDAwMCksXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcInNwYXJ0YW5zXCIsIFwiVGjhuqduIFTDoGlcIiwgajEwMDAwKSxcbiAgICAgICAgICAgICAgICBuZXcgVG9waHVkYXRhKFwiYXVkaXRpb25cIiwgXCLEkHVhIFhlXCIsIGoxMDAwMCksXG5cdFx0XHRcdG5ldyBUb3BodWRhdGEoXCJiZW5sZXlcIiwgXCJCaXRjb2luXCIsIGoxMDAwMCksXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcImJpa2luaVwiLCBcIkJpa2luaVwiLCBqMTAwMDApLFxuICAgICAgICAgICAgICAgIG5ldyBUb3BodWRhdGEoXCJ0YW1odW5nXCIsIFwiQ2hpbSDEkGnDqm5cIiwgajEwMDAwKSxcbiAgICAgICAgICAgICAgICBuZXcgVG9waHVkYXRhKFwicm9sbFJveWVcIiwgXCJUaOG6p24gQsOgaVwiLCBqMTAwMDApLFxuICAgICAgICAgICAgICAgIG5ldyBUb3BodWRhdGEoXCJ6ZXVzXCIsIFwiQ3J5cHRvXCIsIGoxMDAwMCksXG4gICAgICAgICAgICAgICAgbmV3IFRvcGh1ZGF0YShcIm1heWJhY2hcIiwgXCJUaOG7gyBUaGFvXCIsIGoxMDAwMCksXG4gICAgICAgICAgICAgICAgLy8gbmV3IFRvcGh1ZGF0YShcInNob290ZmlzaFwiLCBcIkLhuq9uIEPDoVwiLCBqMTAwMDApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGFjdExvZ2luVG9rZW4oZGF0YSk6IHZvaWQge1xuICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiA9IGRhdGEuYXQ7XG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuMiA9IGRhdGEuYXQ7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogMTcsIHU6IGRhdGEudSwgYXQ6IGRhdGEuYXQgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHJlc1tcImVycm9yQ29kZVwiXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuID0gcmVzW1wiYWNjZXNzVG9rZW5cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF0XCIsIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5TZXNzaW9uS2V5ID0gcmVzW1wic2Vzc2lvbktleVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uSXNMb2dpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXNlckluZm8gPSBKU09OLnBhcnNlKGJhc2U2NC5kZWNvZGUoQ29uZmlncy5Mb2dpbi5TZXNzaW9uS2V5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLk5pY2tuYW1lID0gdXNlckluZm9bXCJuaWNrbmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQXZhdGFyID0gdXNlckluZm9bXCJhdmF0YXJcIl07XG5cdFx0XHRcdFx0XHRDb25maWdzLkxvZ2luLlVzZXJuYW1lID0gdXNlckluZm9bXCJ1c2VybmFtZVwiXTtcblx0XHRcdFx0XHRcdGxldCBkYXRhTG9naW46IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5QYXNzd29yZCA9IGRhdGFMb2dpbi5wYXNzd29yZCA9IFNQVXRpbHMuZ2V0VXNlclBhc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHVzZXJJbmZvW1widmluVG90YWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLklwQWRkcmVzcyA9IHVzZXJJbmZvW1wiaXBBZGRyZXNzXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5DcmVhdGVUaW1lID0gdXNlckluZm9bXCJjcmVhdGVUaW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5CaXJ0aGRheSA9IHVzZXJJbmZvW1wiYmlydGhkYXlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlZpcFBvaW50ID0gdXNlckluZm9bXCJ2aXBwb2ludFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVmlwUG9pbnRTYXZlID0gdXNlckluZm9bXCJ2aXBwb2ludFNhdmVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBraG9pIHRhbyAzIHNvY2tldCBkb25nIHRob2kgZ3VpIGdvaSB0aW4gbGVuIHNlcnZlclxuICAgICAgICAgICAgICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVKYWNrcG90cygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5NaW5pR2FtZVNvY2tKcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICB0aGlzLmFjdFNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEaWVtRGFuaCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5jaGVja0xpc3RCYW5rUnV0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuYm94TGl4aS5nZXRJbmZvKCk7XG5cdFx0XHRcdFx0dGhpcy5hY3RHZXRFdmVudE1vb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbE5vdExvZ2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbExvZ2luZWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChHbG9iYWwuUG9wdXBSZWdpc3RlciAhPSBudWxsICYmIEdsb2JhbC5Qb3B1cFJlZ2lzdGVyLm5vZGUgJiYgR2xvYmFsLlBvcHVwUmVnaXN0ZXIubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbG9iYWwuUG9wdXBSZWdpc3Rlci5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYnV0dG9uTWluaUdhbWUuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX0lORk9fVVBEQVRFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfYmxvY2tlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcm9vbV9lcnI2JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTAxNDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nlc3Npb25fZW5kJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTAwMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9hY2NvdW50X2Vycl9jYXB0Y2hhJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTAwNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9hY2NvdW50X25hbWVfbm90X3RoZV9zYW1lJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTAyMTogY2FzZSAxMDA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfaW5jb3JyZWN0X290cCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUw6puIG5ow6JuIHbhuq10IGtow7RuZyDEkcaw4bujYyDEkeG7gyB0cuG7kW5nLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tEaWVtRGFuaCgpIHtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiBcIjIwMzFcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLCBhYzogXCJnZXRcIiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wic3VjY2Vzc1wiXSAhPSBudWxsICYmIHJlc1snc3VjY2VzcyddID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3REaWVtRGFuaDEoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsb2dpbk1pbmlHYW1lU29ja0pzKCkge1xuICAgICAgICAgICAgbGV0IGRhdGFMb2dpbjogYW55ID0ge307XG4gICAgICAgICAgICBkYXRhTG9naW4udXNlcm5hbWUgPSBTUFV0aWxzLmdldFVzZXJOYW1lKCk7XG4gICAgICAgICAgICBkYXRhTG9naW4ucGFzc3dvcmQgPSBTUFV0aWxzLmdldFVzZXJQYXNzKCk7XG4gICAgICAgICAgICBkYXRhTG9naW4ucmVtZW1iZXJNZSA9IHRydWU7XG4gICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwibG9naW5NaW5pR2FtZVNvY2tKczpcIiwgZGF0YUxvZ2luKTtcbiAgICAgICAgICAgIEh0dHAucG9zdChDb25maWdzLkFwcC5IT1NUX1NPQ0tKUyArIFwiYXBpL2xvZ2luXCIsIGRhdGFMb2dpbiwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiZXJyIExvZ2luIFR4OlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCAmJiByZXMuaWRfdG9rZW4gIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiTG9naW4gVFhTVCBTdWNjZXNzOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuX1NvY2tqc1wiLCByZXMuaWRfdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuU29ja0pzID0gcmVzLmlkX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICBUYWlYaXVTVE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5pc0xvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgVGFpWGl1U1ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGFjdFJ1bGUoKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWN0UnVsZSgpO1xuICAgICAgICAgICAgdGhpcy5hY3RNZW51KCk7XG5cbiAgICAgICAgfVxuICAgICAgICBhY3RDb21pbmdTb29uKCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3JlcGFyaW5nXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdExvZ2luKHVuYW1lID0gbnVsbCwgcGFzcyA9IG51bGwsIGNhbGxiYWNrID0gbnVsbCk6IHZvaWQge1xuICAgICAgICAgICAgLy8gdGhpcy5lZGJVc2VybmFtZS5zdHJpbmcgPSBcImRldnRlc3QyXCI7XG4gICAgICAgICAgICAvLyB0aGlzLmVkYlBhc3N3b3JkLnN0cmluZyA9IFwiMTIzNDU2XCI7XG5cbiAgICAgICAgICAgIGxldCB1c2VybmFtZSA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgcGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IHJlbWVtYmVyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSXNSZW1lbWJlclwiKTtcbiAgICAgICAgICAgIGlmICh1bmFtZSAhPSBudWxsICYmIHBhc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lID0gdW5hbWU7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgPSBwYXNzXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiYWN0TG9naW46XCIgKyB1c2VybmFtZSArIFwiOlwiICsgcGFzc3dvcmQgKyBcIjpcIiArIHJlbWVtYmVyKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJuYW1lLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fdXNlcm5hbWVfbm90X2JsYW5rJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fcGFzc3dvcmRfbm90X2JsYW5rJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW1lbWJlciAhPSBudWxsICYmIHJlbWVtYmVyID09IDEpIHtcbiAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwic2F2ZSBvIGRheSBuZSAxXCIpO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfbmFtZVwiLCB1c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGFzc193b3JkXCIsIHBhc3N3b3JkKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcInNhdmUgbyBkYXkgbmVcIik7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcl9uYW1lXCIsIFwibnVsbFwiKTtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwYXNzX3dvcmRcIiwgXCJudWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IGM6IDMsIHVuOiB1c2VybmFtZSwgcHc6IG1kNShwYXNzd29yZCkgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJzZUludChyZXNbXCJlcnJvckNvZGVcIl0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTUFV0aWxzLnNldFVzZXJOYW1lKHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNQVXRpbHMuc2V0VXNlclBhc3MocGFzc3dvcmQpO1xuXHRcdFx0XHRcdFx0Q29uZmlncy5Mb2dpbi5Vc2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5QYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRDbGlja1Nob3AoXCJ2aW5cIiwgMTAwMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50U2R0KFwiMDEyMzQ1Njc4OVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50UHVyY2hhc2UoXCJ2aW5cIiwgMTAwMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50U2lndXBTdWNjZXNzKFwibm9ybWFsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRMb2dpbihcIm5vcm1hbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiA9IHJlc1tcImFjY2Vzc1Rva2VuXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5TZXNzaW9uS2V5ID0gcmVzW1wic2Vzc2lvbktleVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1c2VySW5mbyA9IEpTT04ucGFyc2UoYmFzZTY0LmRlY29kZShDb25maWdzLkxvZ2luLlNlc3Npb25LZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhTG9naW4gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMb2dpbltcInVcIl0gPSB1c2VySW5mb1tcIm5pY2tuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxvZ2luW1wiYXRcIl0gPSByZXNbXCJhY2Nlc3NUb2tlblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTmlja25hbWUgPSB1c2VySW5mb1tcIm5pY2tuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BdmF0YXIgPSB1c2VySW5mb1tcImF2YXRhclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHVzZXJJbmZvW1widmluVG90YWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLklwQWRkcmVzcyA9IHVzZXJJbmZvW1wiaXBBZGRyZXNzXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5DcmVhdGVUaW1lID0gdXNlckluZm9bXCJjcmVhdGVUaW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5CaXJ0aGRheSA9IHVzZXJJbmZvW1wiYmlydGhkYXlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkJpcnRoZGF5ID0gdXNlckluZm9bXCJiaXJ0aGRheVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVmlwUG9pbnQgPSB1c2VySW5mb1tcInZpcHBvaW50XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BZGRyZXNzID0gdXNlckluZm9bXCJhZGRyZXNzXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5WaXBQb2ludFNhdmUgPSB1c2VySW5mb1tcInZpcHBvaW50U2F2ZVwiXTtcblx0XHRcdFx0XHQvL1x0U2hvb3RGaXNoTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAgLy8gICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RMb2dpblRva2VuKGRhdGFMb2dpbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9lcnJfY2FwdGNoYScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fcGFzc3dvcmRfZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDA1OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDExMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9ub3RfZXhzaXN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTEwOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9hY2NvdW50X2Jsb2NrZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDExMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9ub3RfZ2V0X2luZm8nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDIxOiBjYXNlIDEwMDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9pbmNvcnJlY3Rfb3RwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjAwMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFwcC5pbnN0YW5jZS5wb3B1cFVwZGF0ZU5pY2tuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBEYWlseSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiUG9wdXBVcGRhdGVOaWNrbmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cERhaWx5Lm5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5wb3B1cFVwZGF0ZU5pY2tuYW1lID0gcG9wdXBEYWlseTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnBvcHVwVXBkYXRlTmlja25hbWUuc2hvdzIodXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cFVwZGF0ZU5pY2tuYW1lXCIsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnBvcHVwVXBkYXRlTmlja25hbWUuc2hvdzIodXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlzVXNlU0RLKCkge1xuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZiUmVzcG9uZShyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSBcIjIwMFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BvbnNlICE9IFwid2FpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwiTOG7l2kgxJHEg25nIG5o4bqtcCBzdGF0dXM6IFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiZmJSZXNwb25lOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuRkIgPSByZXNwb25zZS5yZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG4gICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5GYWNlYm9va0lEID0gcmVzcG9uc2UucmVzcG9uc2UuYXV0aFJlc3BvbnNlLnVzZXJJRDtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2dpbkZCKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhY3RMb2dpbkZCKCkge1xuICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcImFjdExvZ2luRkJcIik7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSwgLTEpO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzVXNlU0RLKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2RrYm94LlBsdWdpbkZhY2Vib29rLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuRkIgPSBzZGtib3guUGx1Z2luRmFjZWJvb2suZ2V0QWNjZXNzVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9naW5GQigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJGQiB0byBMb2dpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2RrYm94LlBsdWdpbkZhY2Vib29rLmxvZ2luKFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IEFwcGlkID0gXCI3NTg5NzE4NDgxMTI3NDlcIjtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAnZW1haWwscHVibGljX3Byb2ZpbGUnO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zZGsgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiTG9naW4gZmIgd2ViXCIpO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbkZCID0gZGF0YS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uRmFjZWJvb2tJRCA9IGRhdGEuYXV0aFJlc3BvbnNlLnVzZXJJRDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIkNvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW5GQiBhdXRoOlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dpbkZCKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIkzhu5dpIMSRxINuZyBuaOG6rXAgc3RhdHVzOiBcIiArIGRhdGEuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGQi5sb2dpbihfdGhpcy5mYlJlc3BvbmUsIHsgc2NvcGU6IHNjb3BlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwiTOG7l2kgxJHEg25nIG5o4bqtcCBzdGF0dXM6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2RrID0gbmV3IGZhY2Vib29rU2RrKEFwcGlkLCBzY29wZSwgX3RoaXMuZmJSZXNwb25lKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgYWN0U2hhcmVGYkxpbmsobGluaykge1xuICAgICAgICAgICAgLy8gc2RrYm94LkZCU2hhcmVJbmZvO1xuICAgICAgICAgICAgLy8gc2RrYm94LlBsdWdpbkZhY2Vib29rLnNoYXJlXG4gICAgICAgICAgICBGQi51aSh7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ3BvcHVwJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdzaGFyZScsXG4gICAgICAgICAgICAgICAgaHJlZjogbGluayxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiAnTMOgbSBnacOgdSBjw7luZyBHbzg4J1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIlJlc3BvbmUgRkI6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9naW5GQigpIHtcbiAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gPSBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuRkI7XG4gICAgICAgICAgICBsZXQgYWNjZXNzVG9rZW4gPSBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuRkI7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiYWNjZXNzVG9rZW5GQjpcIiArIGFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiAzLCBzOiAnZmInLCBhdDogYWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwibG9naW5GQiBmYWlsZWQ6XCIgKyBKU09OLnN0cmluZ2lmeShlcnIpICsgXCIgPT4gXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwibG9naW4gRmIgcmVzdWx0OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJzZUludChyZXNbXCJlcnJvckNvZGVcIl0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50TG9naW4oXCJmYWNlYm9va1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gPSByZXNbXCJhY2Nlc3NUb2tlblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uU2Vzc2lvbktleSA9IHJlc1tcInNlc3Npb25LZXlcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uSXNMb2dpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXNlckluZm8gPSBKU09OLnBhcnNlKGJhc2U2NC5kZWNvZGUoQ29uZmlncy5Mb2dpbi5TZXNzaW9uS2V5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLk5pY2tuYW1lID0gdXNlckluZm9bXCJuaWNrbmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQXZhdGFyID0gdXNlckluZm9bXCJhdmF0YXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSB1c2VySW5mb1tcInZpblRvdGFsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5JcEFkZHJlc3MgPSB1c2VySW5mb1tcImlwQWRkcmVzc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ3JlYXRlVGltZSA9IHVzZXJJbmZvW1wiY3JlYXRlVGltZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQmlydGhkYXkgPSB1c2VySW5mb1tcImJpcnRoZGF5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5CaXJ0aGRheSA9IHVzZXJJbmZvW1wiYmlydGhkYXlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlZpcFBvaW50ID0gdXNlckluZm9bXCJ2aXBwb2ludFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVmlwUG9pbnRTYXZlID0gdXNlckluZm9bXCJ2aXBwb2ludFNhdmVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlVzZXJuYW1lID0gdXNlckluZm9bXCJ1c2VybmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJGYWNlYm9va0lEPVwiICsgQ29uZmlncy5Mb2dpbi5GYWNlYm9va0lEKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2hvaSB0YW8gMyBzb2NrZXQgZG9uZyB0aG9pIGd1aSBnb2kgdGluIGxlbiBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcVN1YmNyaWJlSmFja3BvdHMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcVN1YmNyaWJlSGFsbFNsb3QoKSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbE5vdExvZ2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbExvZ2luZWQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgU1BVdGlscy5zZXRVc2VyTmFtZShDb25maWdzLkxvZ2luLlVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNQVXRpbHMuc2V0VXNlclBhc3MoQ29uZmlncy5Mb2dpbi5QYXNzd29yZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5idXR0b25NaW5pR2FtZS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfSU5GT19VUERBVEVEKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfYmxvY2tlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9ub3RfZXhzaXN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTExNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbG9naW5fYWNjb3VudF9ub3RfZ2V0X2luZm9cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTAwMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9hY2NvdW50X2luY29ycmVjdF9vdHAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDIxOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2xvZ2luX2FjY291bnRfaW5jb3JyZWN0X290cFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXBwLmluc3RhbmNlLnBvcHVwVXBkYXRlTmlja25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cERhaWx5ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJQb3B1cFVwZGF0ZU5pY2tuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwRGFpbHkubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnBvcHVwVXBkYXRlTmlja25hbWUgPSBwb3B1cERhaWx5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UucG9wdXBVcGRhdGVOaWNrbmFtZS5zaG93RmIoYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwVXBkYXRlTmlja25hbWVcIiwgY2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UucG9wdXBVcGRhdGVOaWNrbmFtZS5zaG93RmIoYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdE1lbnUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYW5lbE1lbnUubm9kZS5wYXJlbnQuYWN0aXZlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbE1lbnUubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucGFuZWxNZW51Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxNZW51LmRpc21pc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFuZWxNZW51LnNob3coKTtcblxuICAgICAgICB9XG4gICAgICAgIGF0Y1BvcHVwVXBkYXRlTmlja05hbWUodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiYXRjUG9wdXBVcGRhdGVOaWNrTmFtZVwiKTtcbiAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9wdXBEYWlseSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiUG9wdXBVcGRhdGVOaWNrbmFtZVwiKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwRGFpbHkubm9kZSlcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVXBkYXRlTmlja25hbWUgPSBwb3B1cERhaWx5O1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBVcGRhdGVOaWNrbmFtZS5zaG93Mih1c2VybmFtZSwgcGFzc3dvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cFVwZGF0ZU5pY2tuYW1lXCIsIGNiKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RMb2dpblJlZ2lzdGVyKGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3B1cFJlZ2lzdGVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBSZWdpc3RlciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiUG9wdXBSZWdpc3RlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cFJlZ2lzdGVyLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBSZWdpc3RlciA9IHBvcHVwUmVnaXN0ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBSZWdpc3Rlci5zaG93KG51bGwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwUmVnaXN0ZXJcIiwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUmVnaXN0ZXIuc2hvdyhudWxsLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhY3RMb2dpblBvcHVwKGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3VwTG9naW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cExvZ2luID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJQb3B1cExvZ2luXCIpO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwTG9naW4ubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cExvZ2luID0gcG9wdXBMb2dpbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cExvZ2luLnNob3cobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBMb2dpblwiLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBMb2dpbi5zaG93KG51bGwsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFjdERhaUx5KCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5wb3B1cERhaWx5KSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBEYWlseSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTG9iYnkuUG9wdXBEYWlMeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cERhaWx5Lm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBEYWlseSA9IHBvcHVwRGFpbHk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBEYWlseS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBEYWlMeVwiLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBEYWlseS5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBhY3RUb3BIdSgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBUb3BIdSkge1xuICAgICAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcHVwVG9wSHUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIkxvYmJ5LlBvcHVwVG9wSHVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQocG9wdXBUb3BIdS5ub2RlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVG9wSHUgPSBwb3B1cFRvcEh1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVG9wSHUuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVG9wSHUuc2V0SW5mbygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwVG9wSHVcIiwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVG9wSHUuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBUb3BIdS5zZXRJbmZvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWN0VHJhbnNhY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cERhaWx5ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJMb2JieS5Qb3B1cFRyYW5zYWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwRGFpbHkubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cFRyYW5zYWN0aW9uID0gcG9wdXBEYWlseTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cFRyYW5zYWN0aW9uLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cFRyYW5zYWN0aW9uXCIsIGNiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFRyYW5zYWN0aW9uLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhY3RGb3JnZXRQYXNzd29yZCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3B1cEZvcmdldFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBGb3JnZXRQYXNzd29yZCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTG9iYnkuUG9wdXBGb3JnZXRQYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cEZvcmdldFBhc3N3b3JkLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBGb3JnZXRQYXNzd29yZCA9IHBvcHVwRm9yZ2V0UGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBGb3JnZXRQYXNzd29yZC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBGb3JnZXRQYXNzd29yZFwiLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBGb3JnZXRQYXNzd29yZC5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWN0VGFpQXBwKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwVGFpQXBwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBUYWlBcHAgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIkxvYmJ5LlBvcHVwVGFpQXBwXCIpO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwVGFpQXBwLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBUYWlBcHAgPSBwb3B1cFRhaUFwcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cFRhaUFwcC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBUYWlBcHBcIiwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVGFpQXBwLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhY3RuYXBydXQoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLlBvcHVwbmFwcnV0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBuYXBydXQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIkxvYmJ5LlBvcHVwbmFwcnV0XCIpO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwbmFwcnV0Lm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUG9wdXBuYXBydXQgPSBwb3B1cG5hcHJ1dDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Qb3B1cG5hcHJ1dC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBuYXAtcnV0LWRvaVwiLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuUG9wdXBuYXBydXQuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFjdEdpZnRDb2RlKCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5wb3B1cEdpZnRDb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBHaWZ0Q29kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTG9iYnkuUG9wdXBHaWZ0Q29kZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBHaWZ0Q29kZS5ub2RlLnBhcmVudCA9IEFwcC5pbnN0YW5jZS5ub2RlO1xuICAgICAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwR2lmdENvZGUubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcInBhcmVudCBnaWZ0Y29kZTpcIiArIHBvcHVwR2lmdENvZGUubm9kZS5wYXJlbnQubmFtZSArIFwiOlwiICsgQXBwLmluc3RhbmNlLm5vZGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHaWZ0Q29kZSA9IHBvcHVwR2lmdENvZGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHaWZ0Q29kZS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBHaWZ0Q29kZVwiLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHaWZ0Q29kZS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWN0UHJvbW90aW9uKCkge1xuICAgICAgICAgICAgLy9jbWQ9MjAxNSZubj1icmlnaHRjJmF0PWRmYXNmcmZzZWZzOWY5c2ZzZGZkc2RzXG4gICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDIwMTUsIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJhdFwiOiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJYw6FjIG5oYW4ga2h1eWVuIG1haSBkYXRhOlwiLCByZXMpO1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZXJyb3JcIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IHJlcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcGFyc2VJbnQocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICBhY3RSZWZ1bmQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBSZWZ1bmQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cFJlZnVuZCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTG9iYnkuUG9wdXBSZWZ1bmRcIik7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQocG9wdXBSZWZ1bmQubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBSZWZ1bmQgPSBwb3B1cFJlZnVuZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cFJlZnVuZC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBSZWZ1bmRcIiwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUmVmdW5kLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGFjdFNlY3VyaXR5KCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5wb3B1cFNlY3VyaXR5KSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBTZWN1cml0eSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTG9iYnkuUG9wdXBTZWN1cml0eVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cFNlY3VyaXR5Lm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2VjdXJpdHkgPSBwb3B1cFNlY3VyaXR5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2VjdXJpdHkuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwU2VjdXJpdHlcIiwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2VjdXJpdHkuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblx0XHRcbiAgICAgICAgYWN0RGllbURhbmgxKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwRGllbURhbmgxKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBEaWVtRGFuaCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTG9iYnkuUG9wdXBEaWVtRGFuaFwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cERpZW1EYW5oLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwRGllbURhbmgxID0gcG9wdXBEaWVtRGFuaDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cERpZW1EYW5oMS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBEaWVtRGFuaFwiLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBEaWVtRGFuaDEuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFjdFNob3dCYW5uZXIoKSB7XG4gICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcHVwQmFubmVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJEaWFsb2dcIik7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cEJhbm5lci5ub2RlKTtcbiAgICAgICAgICAgICAgICBwb3B1cEJhbm5lci5zaG93KCk7XG4gICAgICAgICAgICAgICAgcG9wdXBCYW5uZXIubm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cEJhbm5lclwiLCBjYik7XG4gICAgICAgIH1cbiAgICAgICAgYWN0VlFNTSgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhY3RJbnN0YWxsKCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZnVuY3Rpb25faW5fZGV2ZWxvcG1lbnQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RFdmVudCgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBNYWlsKSB7XG4gICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIkNodWEgY8OzIHByZWZhYiBwb3B1cCBTZWN1cml0eVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cE1haWwgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlVJUG9wdXBNYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwTWFpbC5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cE1haWwgPSBwb3B1cE1haWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBNYWlsLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9VSVBvcHVwTWFpbFwiLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBNYWlsLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBhY3REb3dubG9hZCgpIHtcbiAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKENvbmZpZ3MuQXBwLkxJTktfRE9XTkxPQUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0RmFucGFnZSgpIHtcbiAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKENvbmZpZ3MuQXBwLmdldExpbmtGYW5wYWdlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGFjdEdyb3VwKCkge1xuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoQ29uZmlncy5BcHAuTElOS19HUk9VUCk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RUZWxlZ3JhbSgpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuVGVsZWdyYW0oQ29uZmlncy5BcHAuZ2V0TGlua1RlbGVncmFtR3JvdXAoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RBcHBPVFAoKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlblRlbGVncmFtKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIGlzU2hvd0NTS0ggPSBmYWxzZTtcbiAgICAgICAgYWN0Q1NLSCgpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGlmIChzZWxmLmlzU2hvd0NTS0ggPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBhbmVsQ1NLSC5zY2FsZVggPSAwO1xuICAgICAgICAgICAgICAgIHNlbGYucGFuZWxDU0tILm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHNlbGYucGFuZWxDU0tILnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNTaG93Q1NLSCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHNlbGYucGFuZWxDU0tIKTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihzZWxmLnBhbmVsQ1NLSClcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZVg6IDEsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuaXNTaG93Q1NLSCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChzZWxmLnBhbmVsQ1NLSCk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oc2VsZi5wYW5lbENTS0gpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVYOiAwLCBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGFuZWxDU0tILnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0XHRwcml2YXRlIGlzU2hvd0NTS0gxID0gZmFsc2U7XG4gICAgICAgIGFjdENTS0gxKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNTaG93Q1NLSDEgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBhbmVsQ1NLSDEuc2NhbGVYID0gMDtcbiAgICAgICAgICAgICAgICBzZWxmLnBhbmVsQ1NLSDEub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgc2VsZi5wYW5lbENTS0gxLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNTaG93Q1NLSDEgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChzZWxmLnBhbmVsQ1NLSDEpO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHNlbGYucGFuZWxDU0tIMSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZVg6IDEsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuaXNTaG93Q1NLSDEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoc2VsZi5wYW5lbENTS0gxKTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihzZWxmLnBhbmVsQ1NLSDEpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVYOiAwLCBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGFuZWxDU0tIMS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBhY3RLaHV5ZW5NYWkoKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZnVuY3Rpb25faW5fZGV2ZWxvcG1lbnRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0RGllbURhbmgoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwRGllbURhbmgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cERpZW1EYW5oID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJVSVBvcHVwRGllbURhbmhcIik7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQocG9wdXBEaWVtRGFuaC5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cERpZW1EYW5oID0gcG9wdXBEaWVtRGFuaDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cERpZW1EYW5oLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9VSVBvcHVwRGllbURhbmhcIiwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwRGllbURhbmguc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFjdE9wZW5GQigpIHtcbiAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2hpdGNsdWI2Nzg5XCIpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5XZWJWaWV3KFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2hpdGNsdWI2Nzg5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0T3Blbk1lc3NhZ2VyKCkge1xuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwOi8vdC5tZS9ocWdhbWVob3Ryb1wiKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuV2ViVmlldyhcImh0dHA6Ly90Lm1lL2hxZ2FtZWhvdHJvXCIpO1xuICAgICAgICB9XG4gICAgICAgIGFjdE9wZW5aYWxvKCkge1xuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwOi8vdC5tZS9ocWdhbWVob3Ryb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RPcGVuTGl2ZSgpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuV2ViVmlldyhcImh0dHA6Ly90Lm1lL2hxZ2FtZWhvdHJvXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0T3BlbkhvdExpbmUoKSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJ0ZWw6XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJIb3RsaW5lIDogXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBhY3RTdXBwb3J0T25saW5lKCkge1xuICAgICAgICAgICAgLy8gY2Muc3lzLm9wZW5VUkwoQ29uZmlncy5BcHAuTElOS19TVVBQT1JUKTtcbiAgICAgICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2hpdGNsdWI2Nzg5XCI7XG4gICAgICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwodXJsKTtcbiAgICAgICAgICAgICAgICAvL1Rhd2tfQVBJLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5UZWxlZ3JhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9BcHAuaW5zdGFuY2Uub3BlblRlbGVncmFtKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGFjdEJhY2soKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuY29uZmlybURpYWxvZy5zaG93MyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfYXNrX2xvZ291dFwiKSwgXCLEkMSCTkcgWFXhuqRUXCIsIChpc0NvbmZpcm0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jaGVja01haWxVbnJlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbE1lbnUubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxNZW51LmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F0X2ZiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3B3Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBTUFV0aWxzLnNldFVzZXJOYW1lKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBTUFV0aWxzLnNldFVzZXJQYXNzKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJJc0F1dG9Mb2dpblwiLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX0xPR09VVCk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS51cGRhdGVDb25maWdHYW1lKEFwcC5ET01BSU4pO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuUkVDT05ORUNUX0dBTUUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgYWN0U3dpdGNoQ29pbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxibENvaW4ubm9kZS5wYXJlbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxDb2luLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxibENvaW4ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdEdhbWVUYWlYaXUoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuTWluaUdhbWVUYWlYaXVEb3VibGUoXCJUYWlYaXVEb3VibGVcIiwgXCJUYWlYaXVEb3VibGVcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIGFjdEdhbWVUYWlYaXVTaWV1VG9jKCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jb21pbmdfc29vbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlblNvY2tKcyA9PSBcIlwiIHx8IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuX1NvY2tqc1wiKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgVGFpWGl1U1ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuaXNPcGVuR2FtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbk1pbmlHYW1lU29ja0pzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVGFpWGl1U1ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3Blbk1pbmlHYW1lVGFpWGl1U2lldVRvYyhcIlRhaVhpdVNpZXVUb2NcIiwgXCJUYWlYaXVTaWV1VG9jXCIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cdFx0YWN0R2V0RXZlbnRNb29uKCkge1xuICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAyMCwgXCJublwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8vLy8vVXRpbHMuTG9nKFwiQ2hlY2sgZXZlbnQgVHJ1bmcgdGh1OlwiLCByZXMpO1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2VzcyAmJiByZXMubHN0TW9vbkV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdFNob3dQb3B1cEV2ZW50TW9vbihyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblx0XHRhY3RTaG93UG9wdXBFdmVudE1vb24oZGF0YSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwRXZlbnRUVCkge1xuICAgICAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50VFQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlBvcHVwRXZlbnRUVFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50VFQubm9kZS5wYXJlbnQgPSBBcHAuaW5zdGFuY2Uubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50VFQuc2hvd3BQb3B1cChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIlBhcmVudCBFdmVudDpcIiArIHRoaXMucG9wdXBFdmVudFRULm5vZGUucGFyZW50Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwRXZlbnRUVFwiLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBFdmVudFRULnNob3dwUG9wdXAoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWN0R2FtZUJhdUN1YSgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5NaW5pR2FtZUJhdUN1YShcIkJhdUN1YVwiLCBcIkJhdUN1YVwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhY3RHYW1lQ2FvVGhhcCgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5NaW5pR2FtZUNhb1RoYXAoXCJDYW9UaGFwXCIsIFwiQ2FvVGhhcFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0R2FtZVNsb3QzeDMoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuTWluaUdhbWVTbG90M3gzKFwiU2xvdDN4M1wiLCBcIlNsb3QzeDNcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYWN0R2FtZVNsb3QzeDNHZW0oKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuTWluaUdhbWVTbG90M3gzR2VtKFwiU2xvdDN4M0dlbVwiLCBcIlNsb3QzeDNHZW1cIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYWN0R2FtZU1pbmlQb2tlcigpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5NaW5pR2FtZU1pbmlQb2tlcihcIk1pbmlQb2tlclwiLCBcIk1pbmlQb2tlclwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhY3RHYW1lVGFMYSgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jb21pbmdfc29vbicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdEdvVG9TbG90MSgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UucmVtb3ZlQWxsV2ViVmlldygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcnKSk7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90MVwiLCBcIlNsb3QxXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RHb1RvU2xvdDIoKSB7XG5cbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UucmVtb3ZlQWxsV2ViVmlldygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcnKSk7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90MlwiLCBcIlNsb3QyXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RHb1RvU2xvdDMoKSB7XG4gICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiR28gdG8gc2xvdDNcIik7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnJlbW92ZUFsbFdlYlZpZXcoKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nJykpO1xuICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5HYW1lKFwiU2xvdDNcIiwgXCJTbG90M1wiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0R29Ub1Nsb3Q0KCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZycpKTtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuR2FtZShcIlNsb3Q0XCIsIFwiU2xvdDRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdEdvVG9TbG90NSgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UucmVtb3ZlQWxsV2ViVmlldygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcnKSk7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90NVwiLCBcIlNsb3Q1XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGFjdEdvVG9TbG90NigpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UucmVtb3ZlQWxsV2ViVmlldygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcnKSk7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90NlwiLCBcIlNsb3Q2XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RHb1RvU2xvdDcoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnJlbW92ZUFsbFdlYlZpZXcoKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nJykpO1xuICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5HYW1lKFwiU2xvdDdcIiwgXCJTbG90N1wiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0R29Ub1Nsb3Q4KCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZycpKTtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuR2FtZShcIlNsb3Q4XCIsIFwiU2xvdDhcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdEdvVG9TbG90MTAoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiVGVzdFNjZW5lXCIpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcnKSk7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90MTBcIiwgXCJTbG90MTBcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RHb1RvU2xvdDExKCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZycpKTtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuR2FtZShcIlNsb3QxMUJpa2luaVwiLCBcIlNsb3QxMUJpa2luaVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFjdERldigpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jb21pbmdfc29vbicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXHRcdGFjdERldjEoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJUw61uaCBuxINuZyBz4bqvcCByYSBt4bqvdFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblx0XHRjaGVja0xpc3RCYW5rUnV0KCkge1xuICAgICAgICAgICAgaWYoQ29uZmlncy5Mb2dpbi5MaXN0QmFua1J1dCA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICBkYXRhW1wiY1wiXSA9IDIwMDg7XG4gICAgICAgICAgICAgICAgZGF0YVtcIm5uXCJdID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgICAgICAgICBkYXRhW1wicG5cIl0gPSAxO1xuICAgICAgICAgICAgICAgIGRhdGFbXCJsXCJdID0gMTA7XG4gICAgICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCBkYXRhLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBKU09OLnBhcnNlKHJlcy5kYXRhKS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkxpc3RCYW5rUnV0ID0gbGlzdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAgICAgYWN0R29Ub1Nob290RmlzaCgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTaG9vdEZpc2hcIiwgXCJTaG9vdEZpc2hcIik7XG4gICAgICAgIH1cblx0XHRhY3RHb1RvT2FuVHVUaSgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJPYW5UdVRpXCIsIFwiT2FuVHVUaVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdEdvdG9Mb3RvKCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJMb3RvXCIsIFwiTG90b1wiKTtcbiAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmVJblN1YnBhY2thZ2UoXCJMb3RvXCIsIFwiTG90b1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdEdvVG9Yb2NEaWEoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmlzU2hvd05vdGlmeUphY2twb3QgPSBmYWxzZTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jb21pbmdfc29vbicpKTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuR2FtZShcIlhvY0RpYVwiLCBcIlhvY0RpYVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdEFkZENvaW4oKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwU2hvcCkge1xuICAgICAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcHVwU2hvcCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTG9iYnlTaG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwU2hvcC5ub2RlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2hvcCA9IHBvcHVwU2hvcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNob3Auc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwU2hvcFwiLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTaG9wLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGFjdENhc2hvdXQoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5MaXN0QmFua1J1dC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wb3B1cFByb2ZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcHVwUHJvZmlsZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTG9iYnkuUG9wdXBQcm9maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cFByb2ZpbGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUHJvZmlsZSA9IHBvcHVwUHJvZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBQcm9maWxlLnNob3dUYWJCYW5rKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cFByb2ZpbGVcIiwgY2IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBQcm9maWxlLnNob3dUYWJCYW5rKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBDYXNob3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cENhc2hvdXQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIkxvYmJ5LlBvcHVwQ2FzaG91dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQocG9wdXBDYXNob3V0Lm5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ2FzaG91dCA9IHBvcHVwQ2FzaG91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDYXNob3V0LnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwQ2FzaG91dFwiLCBjYik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENhc2hvdXQuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgb25CdG5TaG93UHJvZmlsZSgpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0UHJvZmlsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGFjdFByb2ZpbGUodGFiSW5kZXggPSAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBQcm9maWxlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9wdXBQcm9maWxlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJMb2JieS5Qb3B1cFByb2ZpbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQocG9wdXBQcm9maWxlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUHJvZmlsZSA9IHBvcHVwUHJvZmlsZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUHJvZmlsZS5zaG93KHRhYkluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cFByb2ZpbGVcIiwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUHJvZmlsZS5zaG93KHRhYkluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhY2NFeGNoYW5nZSgpIHtcbiAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJhY3QgQWRkIGFjY0V4Y2hhbmdlXCIpO1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWN0QWRkQ29pbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0R29Ub1RMTU4oKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfY29taW5nX3Nvb24nKSk7XG4gICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UucmVtb3ZlQWxsV2ViVmlldygpO1xuXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZycpKTtcbiAgICAgICAgICAgIFRpZW5MZW5OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIFRpZW5MZW5Db25zdGFudC5JU19TT0xPID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmlzU2hvd05vdGlmeUphY2twb3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJUaWVuTGVuXCIsIFwiVGllbkxlblwiKTtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UubG9hZFNjZW5lSW5TdWJwYWNrYWdlKFwiVGllbkxlblwiLCBcIlRpZW5MZW5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdEdhbWVUTE1OU29sbygpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jb21pbmdfc29vbicpKTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZycpKTtcbiAgICAgICAgICAgIFRpZW5MZW5OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBUaWVuTGVuQ29uc3RhbnQuSVNfU09MTyA9IHRydWU7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuaXNTaG93Tm90aWZ5SmFja3BvdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuR2FtZShcIlRpZW5MZW5cIiwgXCJUaWVuTGVuXCIpO1xuICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmVJblN1YnBhY2thZ2UoXCJUaWVuTGVuXCIsIFwiVGllbkxlblwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0R29Ub1NhbSgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jb21pbmdfc29vbicpKTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZycpKTtcbiAgICAgICAgICAgIFNhbU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmlzU2hvd05vdGlmeUphY2twb3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTYW1cIiwgXCJTYW1cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXHRcdGFjdEdvVG9NYXVCaW5oKCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2NvbWluZ19zb29uJykpO1xuICAgICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnJlbW92ZUFsbFdlYlZpZXcoKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nJykpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5HYW1lKFwiTWF1QmluaFwiLCBcIk1hdUJpbmhcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RHb1RvQmFDYXkoKSB7XG4gICAgICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnJlbW92ZUFsbFdlYlZpZXcoKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5pc1Nob3dOb3RpZnlKYWNrcG90ID0gZmFsc2U7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJCYUNheVwiLCBcIkJhQ2F5XCIpO1xuICAgICAgICB9XG5cdFx0YWN0R29Ub0xpZW5nKCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuaXNTaG93Tm90aWZ5SmFja3BvdCA9IGZhbHNlO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5HYW1lKFwiTGllbmdcIiwgXCJMaWVuZ1wiKTtcbiAgICAgICAgfVxuXHRcdFxuXHRcdGFjdEdvVG9Qb2tlcigpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAvLyAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAvLyAgIEFwcC5pbnN0YW5jZS5pc1Nob3dOb3RpZnlKYWNrcG90ID0gZmFsc2U7XG4gICAgICAgICAvLyAgIEFwcC5pbnN0YW5jZS5pc1Nob3dOb3RpZnlKYWNrcG90ID0gZmFsc2U7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJQb2tlclwiLCBcIlBva2VyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0R29Ub0JhaUNhbygpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jb21pbmdfc29vbicpKTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuR2FtZShcIkJhaUNhb1wiLCBcIkJhaUNhb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RLaWVtVGllbigpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBLaWVtVGllbikge1xuICAgICAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcHVwU2VjdXJpdHkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIkxvYmJ5LlBvcHVwS2llbVRpZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQocG9wdXBTZWN1cml0eS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cEtpZW1UaWVuID0gcG9wdXBTZWN1cml0eTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cEtpZW1UaWVuLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cEtpZW1UaWVuXCIsIGNiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEtpZW1UaWVuLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGFjdEdvVG9HYW1lM1JkKCkge1xuICAgICAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdExvZ2luQ01EKCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFjdExvZ2luQ01EKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RMb2dpbklCQygpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RMb2dpbklCQygpO1xuICAgICAgICB9XG4gICAgICAgIGFjdExvZ2luU0JPKCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFjdExvZ2luU0JPKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RMb2dpbldNKCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFjdExvZ2luV00oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdExvZ2luQUcoKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWN0TG9naW5BRygpO1xuICAgICAgICB9XG4gICAgICAgIGFjdExvZ2luRWJldCgpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RMb2dpbkViZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RMb2dpblNob290RmlzaCgpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RMb2dpblNob290RmlzaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0R2FtZVRhaVhpdU1kNSgpIHtcbiAgICAgICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5NaW5pR2FtZVRhaVhpdU1ENShcIlRhaVhpdU1ENVwiLCBcIlRhaVhpdU1ENVwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblx0XHRzaG93R2FtZUxpdmUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZUxpdmVDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZUxpdmVDb250cm9sbGVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJHYW1lTGl2ZUNvbnRyb2xsZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQoZ2FtZUxpdmVDb250cm9sbGVyLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUxpdmVDb250cm9sbGVyID0gZ2FtZUxpdmVDb250cm9sbGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVMaXZlQ29udHJvbGxlci5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvR2FtZUxpdmVcIiwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMaXZlQ29udHJvbGxlci5zaG93KCk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVNpemVMaXN0R2FtZShpc0hhdmVCYW5uZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYmFubmVyTGlzdC5ub2RlLmFjdGl2ZSA9IGlzSGF2ZUJhbm5lcjtcbiAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLnVwZGF0ZVNpemUoaXNIYXZlQmFubmVyKTtcbiAgICAgICAgfVxuICAgIC8vICAgIGdldENvbmZpZ0dhbWUoKSB7XG4gICAgLy8gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiBcIjIwMzdcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIFwicGxcIjogXCJ3ZWJcIiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAvLyAgICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgIC8vICAgICAgICAgICAgLy8gICAgY2MubG9nKHJlcyk7XG4gICAgLy8gICAgICAgICAgICAgICAgaWYgKHJlc1snc3VjY2VzcyddKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgIHRoaXMudGFic0xpc3RHYW1lLmluaXRMaXN0R2FtZUNvbmZpZyhyZXMpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuVkVSU0lPTl9DT05GSUcgPSByZXNbJ3ZlcnNpb24nXTtcbiAgICAvLyAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudGFic0xpc3RHYW1lLmxvYWRMaXN0R2FtZSgpO1xuICAgIC8vICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAvLyB0aGlzLmNoZWNrQXBwVmVyc2lvbigpO1xuICAgIC8vICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICB9KTtcbiAgICAvLyAgICB9XG4gICAgICAgIGNoZWNrQXBwVmVyc2lvbigpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29uZmlncy5BcHAuVkVSU0lPTl9BUFAgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGxldCB2ZXJzaW9uQXBwID0gcGFyc2VJbnQoQ29uZmlncy5BcHAuVkVSU0lPTl9BUFAucmVwbGFjZSgvWy5dL2csICcnKSk7XG4gICAgICAgICAgICAgICAgbGV0IHZlcnNpb25Db25maWcgPSBwYXJzZUludChBcHAuaW5zdGFuY2UuVkVSU0lPTl9DT05GSUcucmVwbGFjZSgvWy5dL2csICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKHZlcnNpb25BcHAgPCB2ZXJzaW9uQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vRkFOVklOLndJTi9cIlxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0NvbmZpcm1EaWFsb2coXCLEkMOjIGPDsyBwaGnhu4NuIGLhuqNuIG3hu5tpLlxcblZ1aSBsw7JuZyBj4bqtcCBuaOG6rXQg4bupbmcgZOG7pW5nIMSR4buDIGPDsyB0cuG6o2kgbmdoaeG7h20gdOG7kXQgbmjhuqV0IVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IExvYmJ5LkxvYmJ5Q29udHJvbGxlcjtcblxuIl19