"use strict";
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