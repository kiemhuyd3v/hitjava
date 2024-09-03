
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/App.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28249+WEXpPF7gjoWi2hRVw', 'App');
// Lobby/LobbyScript/Script/common/App.ts

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
var BundleControl_1 = require("../../../../Loading/src/BundleControl");
var Configs_1 = require("../../../../Loading/src/Configs");
var Http_1 = require("../../../../Loading/src/Http");
var ButtonMiniGame_1 = require("../../ButtonMiniGame");
var MiniGame_1 = require("../../MiniGame");
var PopupUpdateNickname_1 = require("../../PopupUpdateNickname");
var Network_InPacket_1 = require("../networks/Network.InPacket");
var SlotNetworkClient_1 = require("../networks/SlotNetworkClient");
var AlertDialog_1 = require("./AlertDialog");
var BroadcastReceiver_1 = require("./BroadcastReceiver");
var ConfirmDialog_1 = require("./ConfirmDialog");
var SPUtils_1 = require("./SPUtils");
var UINotifyJackpot_1 = require("./UINotifyJackpot");
var Lobby_Cmd_1 = require("../../Lobby.Cmd");
var GameLiveController_1 = require("../../GameLive/GameLiveController");
var TaiXiuSieuToc_NetworkClient_1 = require("../networks/TaiXiuSieuToc.NetworkClient");
var Global_1 = require("../../../../Loading/src/Global");
var Language_LanguageManager_1 = require("./Language.LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clipCoin = null;
        _this.prefabCoin = null;
        _this.nodeCoin = null;
        _this.bgMiniPrefab = null;
        _this.gameLiveController = null;
        _this.uiNotifyJackpot = null;
        _this.taiXiuDoublePrefab = null;
        _this.TaiXiuMD5Prefab = null;
        _this.miniPokerPrefab = null;
        _this.caoThapPrefab = null;
        _this.bauCuaPrefab = null;
        _this.slot3x3Prefab = null;
        _this.oanTuTiPrefab = null;
        _this.canvas = null;
        _this.designResolution = new cc.Size(1560, 720);
        _this.loading = null;
        _this.loadingIcon = null;
        _this.loadingLabel = null;
        _this.alertDialog = null;
        _this.alertToast = null;
        _this.confirmDialog = null;
        _this.sprFrameAvatars = new Array();
        _this.buttonMiniGameNode = null;
        _this.miniGame = null;
        _this.popupWebView = null;
        _this.popupUpdateNickname = null;
        _this.isShowNotifyJackpot = true;
        _this.popupGameTransfer = null;
        //  public popupGameSBO: PopupGameSBO = null;
        _this.popupRule = null;
        _this.lastWitdh = 0;
        _this.lastHeight = 0;
        _this.timeOutLoading = null;
        _this.isFisrtNetworkConnected = false;
        _this.subpackageLoaded = {};
        _this.taiXiuDouble = null;
        _this.miniPoker = null;
        _this.caoThap = null;
        _this.bauCua = null;
        _this.slot3x3 = null;
        _this.slot3x3Gem = null;
        _this.oanTuTi = null;
        _this.taiXiuSieuToc = null;
        _this.TaiXiuMD5 = null;
        _this.numMiniGameOpening = 0;
        _this.cacheWebView = {};
        // LIFE-CYCLE CALLBACKS:
        _this.coinPool = null;
        _this.topHuData = null;
        _this.fakeTopHuData = {};
        _this.checkMailUnread = false;
        _this.popupEvent = null;
        _this.VERSION_CONFIG = "1.0.3";
        _this.timeLixi = -1;
        _this.isFadeOutBgMini = false;
        _this.boxApp = null;
        _this.bgMini = null;
        _this.arrMiniGame = {};
        _this.TYPE_LOGIN = "NORMAL"; //NORMAL , FACEBOOK
        _this.USER_NAME = "";
        _this.PASS_WORD = "";
        _this.FB_ID = "";
        _this.AT_FB = "";
        _this.RECONNECT_GAME = false;
        return _this;
    }
    App_1 = App;
    App.prototype.onLoad = function () {
        var _this = this;
        Global_1.Global.LanguageManager = Language_LanguageManager_1.default;
        if (App_1.instance != null) {
            this.node.destroy();
            return;
        }
        this.coinPool = new cc.NodePool("Coin");
        this.initConfigGameStart();
        App_1.instance = this;
        cc.game.addPersistRootNode(App_1.instance.node);
        this.buttonMiniGame = this.buttonMiniGameNode.getComponent(ButtonMiniGame_1.default);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function () {
            _this.checkMailUnread = false;
        }, this);
        this.setupTimeRunInBg();
    };
    App.prototype.getCoin = function () {
        var ret = null;
        if (this.coinPool.size() <= 0) {
            this.coinPool.put(cc.instantiate(this.prefabCoin));
        }
        ret = this.coinPool.get();
        ret.parent = this.nodeCoin;
        ret.active = true;
        ret.scale = 1;
        ret.opacity = 255;
        ret.position = cc.v3(0, 0, 0);
        var partical = ret.getComponentInChildren(cc.ParticleSystem);
        if (partical.particleCount > 0) { // check if particle has fully plaed
            partical.stopSystem(); // stop particle system
        }
        else {
            partical.resetSystem(); // restart particle system
        }
        partical.node.active = false;
        return ret;
    };
    App.prototype.getPositionInView = function (item) {
        //  //Utils.Log("getPositionInView:"+item.name);
        var worldPos = item.parent.convertToWorldSpaceAR(item.getPosition());
        var viewPos = this.nodeCoin.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };
    App.prototype.getRandomArbitrary = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    App.prototype.showCoins = function (numberCoin, nodeStart, nodeTarget, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        cc.audioEngine.play(this.clipCoin, false, 1);
        //Utils.Log("showCoins:" + numberCoin);
        if (numberCoin <= 20)
            numberCoin = 20;
        else if (numberCoin >= 40)
            numberCoin = 40;
        var _loop_1 = function (i) {
            var chip = this_1.getCoin();
            chip.scale = 2.5;
            posStart = this_1.getPositionInView(nodeStart);
            posTarget = this_1.getPositionInView(nodeTarget);
            chip.position = posStart;
            bezier = [cc.v2(posStart.x, posStart.y), cc.v2(posStart.x + 200, posStart.y + 300), posTarget];
            cc.Tween.stopAllByTarget(chip);
            cc.tween(chip)
                .delay(0 + (numberCoin * 0.1 - i * 0.1))
                // .to(0.5, {scale:1, x: this.getRandomArbitrary(posStart.x-50,posStart.x+50), y: this.getRandomArbitrary(posStart.y-50,posStart.y+50) }, { easing: cc.easing.backOut })
                // .delay(0.1)
                .call(function () {
                chip.getChildByName("partical").active = true;
            })
                .then(cc.spawn(cc.scaleTo(1.0, 1.0).easing(cc.easeSineInOut()), cc.bezierTo(1, bezier).easing(cc.easeSineInOut())))
                // .to(0.5, { position: posTarget }, { easing: cc.easing.sineIn })
                .call(function () {
                // chip.active = false;
                var partical = chip.getComponentInChildren(cc.ParticleSystem);
                if (partical.particleCount > 0) { // check if particle has fully plaed
                    partical.stopSystem(); // stop particle system
                }
                else {
                    partical.resetSystem(); // restart particle system
                }
                partical.node.active = false;
                chip.position = posStart;
                _this.coinPool.put(chip);
            }).start();
        };
        var this_1 = this, posStart, posTarget, bezier;
        for (var i = 0; i < numberCoin; i++) {
            _loop_1(i);
        }
    };
    App.prototype.hideGameMini = function (nameGame) {
        delete this.arrMiniGame[nameGame];
        this.numMiniGameOpening--;
        if (this.numMiniGameOpening <= 0) {
            this.numMiniGameOpening = 0;
            this.bgMini.active = false;
        }
    };
    App.prototype.showGameMini = function (nameGame, obj) {
        if (obj === void 0) { obj = null; }
        if (obj != null) {
            this.arrMiniGame[nameGame] = obj;
            this.numMiniGameOpening++;
        }
        if (this.numMiniGameOpening == 0) {
            this.bgMini.active = true;
        }
    };
    App.prototype.showBgMiniGame = function (gameName) {
        this.isFadeOutBgMini = false;
        this.bgMini.active = true;
        for (var key in this.arrMiniGame) {
            if (gameName == key) {
                cc.tween(this.arrMiniGame[key].getComponent('MiniGame').gamePlay).to(0.2, { scale: 1.0 }).start();
                this.arrMiniGame[key].getComponent("MiniGame").reOrder();
            }
            else {
                cc.tween(this.arrMiniGame[key].getComponent('MiniGame').gamePlay).to(0.1, { scale: 0.5 }).start();
            }
        }
    };
    App.prototype.hideBgMiniGame = function () {
        this.isFadeOutBgMini = true;
        this.bgMini.active = false;
        for (var key in this.arrMiniGame) {
            // this.arrMiniGame[key].opacity = 100;
            this.arrMiniGame[key].getComponent('MiniGame').gamePlay.scale = 0.5;
            // cc.tween(this.arrMiniGame[key]).to(0.1, { scale: 0.5 }).start();
        }
    };
    App.prototype.onEnable = function () {
        var canvasTmp = cc.director.getScene().getChildByName("Canvas");
        this.miniPoker = null;
        this.caoThap = null;
        this.taiXiuDouble = null;
        this.TaiXiuMD5 = null;
        this.bauCua = null;
        this.slot3x3 = null;
        this.slot3x3Gem = null;
        this.taiXiuSieuToc = null;
        this.arrMiniGame = {};
        this.miniGame = new cc.Node('BoxMiniGame');
        this.miniGame.width = 1560;
        this.miniGame.height = 720;
        // this.miniGame.position = cc.v3(1560/2,720/2,0);
        this.bgMini = cc.instantiate(this.bgMiniPrefab);
        this.bgMini.parent = this.miniGame;
        this.bgMini.active = false;
        canvasTmp.addChild(this.miniGame);
        // var boxPopup = new cc.Node('BoxPopup');
        // boxPopup.width = cc.winSize.width;
        // boxPopup.height = cc.winSize.height;
        // canvasTmp.addChild(boxPopup);
        this.canvas = this.miniGame;
    };
    App.prototype.setUpNode = function () {
        var canvasTmp = cc.director.getScene().getChildByName("Canvas");
        this.miniPoker = null;
        this.caoThap = null;
        this.taiXiuDouble = null;
        this.bauCua = null;
        this.slot3x3 = null;
        this.slot3x3Gem = null;
        this.miniGame = new cc.Node('BoxMiniGame');
        this.miniGame.width = 1560;
        this.miniGame.height = 720;
        canvasTmp.addChild(this.miniGame);
        var boxPopup = new cc.Node('BoxPopup');
        boxPopup.width = cc.winSize.width;
        boxPopup.height = cc.winSize.height;
        canvasTmp.addChild(boxPopup);
        this.canvas = boxPopup;
    };
    App.prototype.actChangeAvatar = function () {
        var _this = this;
        if (!Configs_1.default.Login.IsLogin) {
            this.alertDialog.showMsg("Bạn chưa đăng nhập.");
            return;
        }
        if (!this.popupChangeAvatar) {
            var cb = function (prefab) {
                var popupnaprut = cc.instantiate(prefab).getComponent("Lobby.PopupChangeAvatar");
                popupnaprut.node.parent = _this.canvas;
                _this.popupChangeAvatar = popupnaprut;
                _this.popupChangeAvatar.show();
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupChangeAvatar", cb);
        }
        else {
            this.popupChangeAvatar.show();
        }
    };
    App.prototype.actRule = function () {
        var _this = this;
        if (!Configs_1.default.Login.IsLogin) {
            App_1.instance.alertDialog.showMsg(App_1.instance.getTextLang('txt_need_login'));
            return;
        }
        if (!this.popupRule) {
            var cb = function (prefab) {
                var popupRule = cc.instantiate(prefab).getComponent("UIPopupRule");
                App_1.instance.canvas.addChild(popupRule.node);
                _this.popupRule = popupRule;
                _this.popupRule.show();
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/UIPopupRule", cb);
        }
        else {
            this.popupRule.show();
        }
    };
    //http://localhost:8081/api?c=2021&nn=tuanbigbird&at=1628224022&ip=127.0.0.1&mn=100
    App.prototype.updateConfigGame = function (domain) {
        if (domain === void 0) { domain = "FANVIN.wIN"; }
        this.RECONNECT_GAME = true;
        Configs_1.default.App.API = "https://iportal." + domain + "/api";
        Configs_1.default.App.MONEY_TYPE = 1;
        Configs_1.default.App.LINK_DOWNLOAD = "https://" + domain + "";
        Configs_1.default.App.LINK_EVENT = "https://" + domain + "/event";
        Configs_1.default.App.HOST_MINIGAME.host = "wmini." + domain + "";
        Configs_1.default.App.HOST_TAI_XIU_MINI2.host = "overunder." + domain + "";
        Configs_1.default.App.HOST_SLOT.host = "wslot." + domain + "";
        Configs_1.default.App.HOST_TLMN.host = "wtlmn." + domain + "";
        Configs_1.default.App.HOST_SHOOT_FISH.host = "wbanca." + domain + "";
        Configs_1.default.App.HOST_SAM.host = "wsam." + domain + "";
        Configs_1.default.App.HOST_XOCDIA.host = "wxocdia." + domain + "";
        Configs_1.default.App.HOST_BACAY.host = "wbacay." + domain + "";
        Configs_1.default.App.HOST_BAICAO.host = "wbaicao." + domain + "";
        Configs_1.default.App.HOST_POKER.host = "wpoker." + domain + "";
        Configs_1.default.App.HOST_XIDACH.host = "wxizach." + domain + "";
        Configs_1.default.App.HOST_BINH.host = "wbinh." + domain + "";
        Configs_1.default.App.HOST_LIENG.host = "wlieng." + domain + "";
        App_1.API_AG = "https://ga." + domain + "/3rd/ag";
        App_1.API_IBC = "https://ga." + domain + "/3rd/ibc";
        App_1.API_WM = "https://ga." + domain + "/3rd/wm";
        App_1.API_CMD = "https://ga." + domain + "/3rd/cmd";
        //Utils.Log("CONFIG_API:" + Configs.App.API);
    };
    App.prototype.initConfigGameStart = function () {
        this.updateConfigGame(App_1.DOMAIN);
    };
    App.prototype.actChangePass = function () {
        var _this = this;
        if (!Configs_1.default.Login.IsLogin) {
            this.alertDialog.showMsg("Bạn chưa đăng nhập.");
            return;
        }
        if (!this.popupChangePassword) {
            var cb = function (prefab) {
                var popupnaprut = cc.instantiate(prefab).getComponent("Lobby.PopupChangePassword");
                popupnaprut.node.parent = _this.canvas;
                _this.popupChangePassword = popupnaprut;
                _this.popupChangePassword.show();
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupChangePassword", cb);
        }
        else {
            this.popupChangePassword.show();
        }
    };
    App.prototype.setupTimeRunInBg = function () {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function () {
            var timeNow = cc.sys.now();
            //Utils.Log('-=-=EVENT_HIDE  ', timeNow)
            cc.sys.localStorage.setItem('timenow', timeNow);
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            var timeNow = cc.sys.now();
            var timeHide = parseInt(cc.sys.localStorage.getItem('timenow'));
            //Utils.Log('-=-=EVENT_SHOW2_IN_SECCOND  ' + ((timeNow - timeHide) / 1000));
            cc.director.getActionManager().update((timeNow - timeHide) / 1000);
            _this.timeLixi = Math.floor(_this.timeLixi - ((timeNow - timeHide) / 1000));
        });
    };
    App.prototype.start = function () {
        var _this = this;
        SlotNetworkClient_1.default.getInstance().addListener(function (data) {
            var inPacket = new Network_InPacket_1.default(data);
            switch (inPacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT3X3: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Pokemon");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT3x3GEM: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Gem");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_MINIPOKER: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "MiniPoker");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT1: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Đua Xe");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT3: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Thần Tài");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT4: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Chim Điên");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT5: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Chiêm Tinh");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT7: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Bitcoin");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT8: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Thần Bài");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT10: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Thể Thao");
                    break;
                }
                case Lobby_Cmd_1.default.Code.UPDATE_BIGWIN_JACKPOT_SLOT11: {
                    var res = new Lobby_Cmd_1.default.ResNotifyJackpot(data);
                    _this.showJackpotNotify(res, "Bikini");
                    break;
                }
            }
        }, this);
        this.updateSize();
        // cc.tween(this.loadingIcon).repeatForever(cc.tween().to(0.5, { scale: 1.1 }).to(0.5, { scale: 0.9 }).to(0.5, { scale: 1.0 })).start();
    };
    App.prototype.showJackpotNotify = function (res, gameName) {
        //Utils.Log('showJackpotNotify:', res);
        if (res["type"] == 3) {
            var dataNotify = {};
            dataNotify["username"] = res["username"];
            dataNotify["totalPrizes"] = res["totalPrizes"];
            dataNotify["type"] = res["type"] == 3 ? "Nỗ Hũ" : "Thắng Lớn";
            dataNotify["gameName"] = gameName;
            App_1.instance.uiNotifyJackpot.addJackpot(dataNotify);
        }
    };
    App.prototype.showLoading = function (isShow, timeOut) {
        var _this = this;
        if (timeOut === void 0) { timeOut = 15; }
        // this.loading.zIndex = this.node.children[this.node.childrenCount - 1].zIndex + 1;
        this.loadingLabel.string = App_1.instance.getTextLang('txt_loading1');
        if (this.timeOutLoading != null)
            clearTimeout(this.timeOutLoading);
        if (isShow) {
            if (timeOut > 0) {
                this.timeOutLoading = setTimeout(function () {
                    _this.showLoading(false);
                }, timeOut * 1000);
            }
            this.loading.active = true;
        }
        else {
            this.loading.active = false;
        }
        this.loadingIcon.stopAllActions();
        this.loadingIcon.runAction(cc.repeatForever(cc.rotateBy(1.5, 360)));
        // cc.tween(this.loadingIcon).to(0.5, { scale: 1.2 }).to(0.5, { scale: 0.8 }).to(0.5, { scale: 1.0 }).repeatForever().start();
    };
    App.prototype.showErrLoading = function (msg) {
        this.showLoading(true, -1);
        this.loadingLabel.string = msg ? msg : "Mất kết nối, đang thử lại...";
    };
    App.prototype.update = function (dt) {
        this.updateSize();
    };
    App.prototype.updateSize = function () {
        var frameSize = cc.view.getFrameSize();
        if (this.lastWitdh !== frameSize.width || this.lastHeight !== frameSize.height) {
            this.lastWitdh = frameSize.width;
            this.lastHeight = frameSize.height;
            var newDesignSize = cc.Size.ZERO;
            if (this.designResolution.width / this.designResolution.height > frameSize.width / frameSize.height) {
                newDesignSize = cc.size(this.designResolution.width, this.designResolution.width * (frameSize.height / frameSize.width));
            }
            else {
                newDesignSize = cc.size(this.designResolution.height * (frameSize.width / frameSize.height), this.designResolution.height);
            }
            this.node.setContentSize(newDesignSize);
            this.node.setPosition(cc.v2(newDesignSize.width / 2, newDesignSize.height / 2));
        }
    };
    App.prototype.getAvatarSpriteFrame = function (avatar) {
        // avatar = "999";
        var avatarInt = parseInt(avatar);
        // if (avatarInt == 999) {
        //     let sprAvatar: cc.SpriteFrame;
        //     let url = 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=%fbid&height=100&width=100&ext=1633535436&hash=AeSjxozlk2teYdmfI_0';
        //     url = url.replace("%fbid", Configs.Login.FacebookID);
        //     cc.assetManager.loadRemote(url, { ext: ".png" }, (err, img: cc.Texture2D) => {
        //         if (err) {
        //             return this.sprFrameAvatars[0];
        //         }
        //          //Utils.Log(img);
        //         sprAvatar = new cc.SpriteFrame(img);
        //         return sprAvatar;
        //         // sprite.spriteFrame = new cc.SpriteFrame(tex);
        //     });
        // }
        if (isNaN(avatarInt) || avatarInt < 0 || avatarInt >= this.sprFrameAvatars.length) {
            return this.sprFrameAvatars[0];
        }
        return this.sprFrameAvatars[avatarInt];
    };
    App.prototype.loadScene = function (sceneName) {
        var _this = this;
        cc.director.preloadScene(sceneName, function (c, t, item) {
            _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt("" + ((c / t) * 100)) + "%");
        }, function () {
            _this.showLoading(false);
            cc.director.loadScene(sceneName);
        });
    };
    App.prototype.openWebView = function (url, cache) {
        if (cache === void 0) { cache = ""; }
        cc.sys.openURL(url);
        return;
        if (cache == "AG") {
            if (Configs_1.default.Login.CACHE_AG) {
                SPUtils_1.default.setMusicVolumn(0);
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
                this.cacheWebView[cache].position = cc.v3(0, 0, 0);
            }
            else {
                var item = cc.instantiate(this.popupWebView);
                item.parent = this.node;
                item.getComponent("PopupWebView").show(url, cache);
                this.cacheWebView[cache] = item;
            }
        }
        else if (cache == "IBC") {
            if (Configs_1.default.Login.CACHE_IBC) {
                SPUtils_1.default.setMusicVolumn(0);
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
                this.cacheWebView[cache].position = cc.v3(0, 0, 0);
            }
            else {
                var item = cc.instantiate(this.popupWebView);
                item.parent = this.node;
                item.getComponent("PopupWebView").show(url, cache);
                this.cacheWebView[cache] = item;
            }
        }
        else if (cache == "WM") {
            if (Configs_1.default.Login.CACHE_WM) {
                SPUtils_1.default.setMusicVolumn(0);
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
                this.cacheWebView[cache].position = cc.v3(0, 0, 0);
            }
            else {
                var item = cc.instantiate(this.popupWebView);
                item.parent = this.node;
                item.getComponent("PopupWebView").show(url, cache);
                this.cacheWebView[cache] = item;
            }
        }
        else {
            var item = cc.instantiate(this.popupWebView);
            item.parent = this.node;
            item.getComponent("PopupWebView").show(url, cache);
        }
    };
    App.prototype.actLoginCMD = function (isPlayNow) {
        var _this = this;
        if (isPlayNow === void 0) { isPlayNow = false; }
        if (!Configs_1.default.Login.IsLogin) {
            App_1.instance.alertDialog.showMsg(App_1.instance.getTextLang('txt_need_login'));
            return;
        }
        App_1.instance.showLoading(true);
        Http_1.default.get(App_1.API_CMD, { t: "bl", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            //Utils.Log("updateInfoCMD:" + JSON.stringify(res));
            App_1.instance.showLoading(false);
            if (res["code"] == 0) {
                var balance = res["data"]["data"][0]["betAmount"];
                if (balance < 10000 && isPlayNow == false) {
                    _this.actPopupGameTransfer("CMD", balance);
                }
                else {
                    App_1.instance.showLoading(true);
                    Http_1.default.get(App_1.API_CMD, { t: "lg", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                        App_1.instance.showLoading(false);
                        if (res["code"] == 0) {
                            var url = res["data"]["webRoot"] + "/auth.aspx?lang=vi-VN&user=" + res["data"]["userName"] + "&token=" + res["data"]["token"] + "&currency=VD&templatename=blue&view=v2";
                            if (cc.sys.isMobile == true) {
                                url = res["data"]["mobileRoot"] + "/auth.aspx?lang=vi-VN&user=" + res["data"]["userName"] + "&token=" + res["data"]["token"] + "&currency=VD&templatename=blue&view=v2";
                            }
                            cc.sys.openURL(url);
                        }
                        else {
                            App_1.instance.ShowAlertDialog(res["message"]);
                        }
                        //Utils.Log("LoginIBC err:" + JSON.stringify(err));
                        //Utils.Log("LoginIBC res:" + JSON.stringify(res));
                    });
                }
            }
            else {
                _this.ShowAlertDialog("Game đang bảo trì");
            }
        });
    };
    App.prototype.actLoginSBO = function (isPlayNow) {
        var _this = this;
        if (isPlayNow === void 0) { isPlayNow = false; }
        if (!Configs_1.default.Login.IsLogin) {
            App_1.instance.alertDialog.showMsg(App_1.instance.getTextLang('txt_need_login'));
            return;
        }
        App_1.instance.showLoading(true);
        Http_1.default.get(App_1.API_SBO, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            //Utils.Log("updateInfoSBO:" + JSON.stringify(res));
            App_1.instance.showLoading(false);
            if (res != null && res["res"] == 0) {
                var balance = parseInt(res["data"]["balance"]) * 1000;
                if (balance < 10000 && isPlayNow == false) {
                    _this.actPopupGameTransfer("SBO", balance);
                }
                else {
                    App_1.instance.showLoading(true);
                    Http_1.default.get(App_1.API_SBO, { t: "Login", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, gc: 'SportsBook' }, function (err, res) {
                        //Utils.Log("Login SBO:" + JSON.stringify(res));
                        App_1.instance.showLoading(false);
                        if (res["res"] == 0) {
                            var url = "https:" + res['data'] + "&lang=vi-vn&oddstyle=MY&theme=sbo&device=" + (cc.sys.isNative ? "m" : "d");
                            //Utils.Log("url=" + url);
                            cc.sys.openURL(url);
                        }
                        else {
                            App_1.instance.ShowAlertDialog(res["message"]);
                        }
                    });
                }
            }
            else {
                _this.ShowAlertDialog("Game đang bảo trì");
            }
        });
    };
    App.prototype.actLoginIBC = function (isPlayNow) {
        var _this = this;
        if (isPlayNow === void 0) { isPlayNow = false; }
        if (!Configs_1.default.Login.IsLogin) {
            App_1.instance.alertDialog.showMsg(App_1.instance.getTextLang('txt_need_login'));
            return;
        }
        App_1.instance.showLoading(true);
        Http_1.default.get(App_1.API_IBC, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            //Utils.Log("updateInfoICB:" + JSON.stringify(res));
            App_1.instance.showLoading(false);
            if (res["code"] == 0) {
                var balance = parseInt(res["data"]["balance"]) * 1000;
                if (balance < 10000 && isPlayNow == false) {
                    _this.actPopupGameTransfer("IBC", balance);
                }
                else {
                    App_1.instance.showLoading(true);
                    Http_1.default.get(App_1.API_IBC, { t: "Login", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                        App_1.instance.showLoading(false);
                        if (res["code"] == 0) {
                            if (Configs_1.default.App.IS_PRO == true && Configs_1.default.Login.UserType != "2") {
                                var url = "https://mkt.l0030.ig128.com/deposit_processlogin.aspx?lang=vn&token=" + res["data"]["data"];
                                if (cc.sys.isMobile == true) {
                                    url = "https://ismart.l0030.ig128.com/deposit_processlogin.aspx?lang=vn&token=" + res["data"]["data"];
                                }
                                cc.sys.openURL(url);
                            }
                            else {
                                var url = "http://sbtest.l0030.ig128.com/deposit_processlogin.aspx?lang=vn&token=" + res["data"]["data"];
                                if (cc.sys.isMobile == true) {
                                    url = "http://smartsbtest.l0030.ig128.com/deposit_processlogin.aspx?lang=vn&token=" + res["data"]["data"];
                                }
                                cc.sys.openURL(url);
                            }
                        }
                        else {
                            App_1.instance.ShowAlertDialog(res["message"]);
                        }
                    });
                }
            }
            else {
                _this.ShowAlertDialog("Game đang bảo trì");
            }
        });
    };
    App.prototype.actLoginWM = function (isPlayNow) {
        var _this = this;
        if (isPlayNow === void 0) { isPlayNow = false; }
        if (!Configs_1.default.Login.IsLogin) {
            App_1.instance.alertDialog.showMsg(App_1.instance.getTextLang('txt_need_login'));
            return;
        }
        App_1.instance.showLoading(true);
        Http_1.default.get(App_1.API_WM, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.instance.showLoading(false);
            if (res["list"][0] == 0) {
                var balance = parseInt(res["list"][1]) * 1000;
                if (balance < 10000 && isPlayNow == false) {
                    _this.actPopupGameTransfer("WM", balance);
                }
                else {
                    App_1.instance.showLoading(true);
                    Http_1.default.get(App_1.API_WM, { t: "Login", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                        App_1.instance.showLoading(false);
                        if (res["list"][0] == 0) {
                            App_1.instance.openWebView(res["list"][1], "WM");
                        }
                        else {
                            App_1.instance.ShowAlertDialog(res["msg"]);
                        }
                    });
                }
            }
            else {
                _this.ShowAlertDialog("Game đang bảo trì");
            }
        });
    };
    App.prototype.showGameLive = function () {
        var _this = this;
        if (!this.gameLiveController) {
            var cb = function (prefab) {
                var gameLiveController = cc.instantiate(prefab).getComponent("GameLiveController");
                App_1.instance.canvas.addChild(gameLiveController.node);
                _this.gameLiveController = gameLiveController;
                _this.gameLiveController.show();
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/GameLive", cb);
        }
        else {
            this.gameLiveController.show();
        }
    };
    App.prototype.actPopupGameTransfer = function (typeGame, balance) {
        var _this = this;
        if (balance === void 0) { balance = null; }
        if (!Configs_1.default.Login.IsLogin) {
            App_1.instance.alertDialog.showMsg(App_1.instance.getTextLang('txt_need_login'));
            return;
        }
        if (!this.popupGameTransfer) {
            var cb = function (prefab) {
                var popupGameTransfer = cc.instantiate(prefab).getComponent("Lobby.PopupGameTransfer");
                popupGameTransfer.node.parent = App_1.instance.canvas;
                _this.popupGameTransfer = popupGameTransfer;
                _this.popupGameTransfer.showGame(typeGame, balance);
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupGameTransfer", cb);
        }
        else {
            this.popupGameTransfer.showGame(typeGame, balance);
        }
    };
    App.prototype.actLoginAG = function (isPlayNow) {
        var _this = this;
        if (isPlayNow === void 0) { isPlayNow = false; }
        if (!Configs_1.default.Login.IsLogin) {
            App_1.instance.alertDialog.showMsg(App_1.instance.getTextLang('txt_need_login'));
            return;
        }
        App_1.instance.showLoading(true);
        var self = this;
        Http_1.default.get(App_1.API_AG, { t: "GetBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.instance.showLoading(false);
            if (res["res"] == 0) {
                if (res["list"][0]["info"] == "error") {
                    _this.ShowAlertDialog("Game đang bảo trì");
                }
                else {
                    var balance = parseInt(res.list[0]["info"]) * 1000;
                    if (balance < 10000 && isPlayNow == false) {
                        _this.actPopupGameTransfer("AG", balance);
                    }
                    else {
                        App_1.instance.showLoading(true);
                        Http_1.default.get(App_1.API_AG, { t: "Forward", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                            App_1.instance.showLoading(false);
                            //Utils.Log("LoginAG err:" + JSON.stringify(err));
                            //Utils.Log("LoginAG res:" + JSON.stringify(res));
                            if (res["res"] == 0) {
                                if (res["list"].length > 0) {
                                    App_1.instance.openWebView(res["list"][0], "AG");
                                }
                            }
                            else {
                                App_1.instance.ShowAlertDialog(res["msg"]);
                            }
                        });
                    }
                }
            }
            else {
                _this.ShowAlertDialog("Game đang bảo trì");
            }
        });
    };
    App.prototype.actLoginEbet = function (isPlayNow) {
        var _this = this;
        if (isPlayNow === void 0) { isPlayNow = false; }
        if (!Configs_1.default.Login.IsLogin) {
            App_1.instance.alertDialog.showMsg(App_1.instance.getTextLang('txt_need_login'));
            return;
        }
        App_1.instance.showLoading(true);
        var self = this;
        Http_1.default.get(App_1.API_EBET, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.instance.showLoading(false);
            //Utils.Log(res);
            if (res["res"] == 0) {
                if (res["data"] == null) {
                    _this.ShowAlertDialog("Game đang bảo trì");
                }
                else {
                    var balance = parseInt(res.data["money"]) * 1000;
                    if (balance < 10000 && isPlayNow == false) {
                        _this.actPopupGameTransfer("EBET", balance);
                    }
                    else {
                        App_1.instance.showLoading(true);
                        Http_1.default.get(App_1.API_EBET, { t: "Login", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                            App_1.instance.showLoading(false);
                            if (res["res"] == 0) {
                                var url = "https://zf.live-b2b.com/h5/72895c?username=%s&accessToken=%s";
                                cc.sys.openURL(cc.js.formatStr(url, res['data']['ebetid'], res['data']['token']));
                            }
                            else {
                                App_1.instance.ShowAlertDialog(res["msg"]);
                            }
                        });
                    }
                }
            }
            else {
                _this.ShowAlertDialog("Game đang bảo trì");
            }
        });
    };
    App.prototype.actLoginShootFish = function (isPlayNow, balance) {
        if (isPlayNow === void 0) { isPlayNow = false; }
        if (balance === void 0) { balance = 0; }
        // flow:Check Balance->show popup->goto game
        if (!Configs_1.default.Login.IsLogin) {
            App_1.instance.alertDialog.showMsg(App_1.instance.getTextLang('txt_need_login'));
            return;
        }
        if (!isPlayNow) {
            this.actPopupGameTransfer("FISH");
        }
        else {
            App_1.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { c: 2021, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, mn: balance }, function (err, res) {
                App_1.instance.showLoading(false);
                //Utils.Log("Res Login ShootFish:", res);
                if (res["errorCode"] == "0") {
                    //Utils.Log("Login Succes");
                    if (res.data != null && res.data != "") {
                        App_1.instance.openWebView(res.data);
                    }
                }
                else {
                    App_1.instance.ShowAlertDialog(res["msg"]);
                }
            });
        }
    };
    App.prototype.removeAllWebView = function () {
        Configs_1.default.Login.CACHE_AG = false;
        Configs_1.default.Login.CACHE_IBC = false;
        Configs_1.default.Login.CACHE_WM = false;
        for (var key in this.cacheWebView) {
            if (this.cacheWebView[key] != null) {
                this.cacheWebView[key].destroy();
            }
        }
    };
    App.prototype.openGame = function (bundleName, sceneName) {
        var _this = this;
        this.showLoading(true, -1);
        BundleControl_1.default.loadSceneGame(bundleName, sceneName, function (finish, total) {
            _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
        }, function (bundle) {
            _this.showLoading(false);
        });
        // }
    };
    App.prototype.openMiniGameBauCua = function (bundleName, prefabName) {
        var _this = this;
        this.showLoading(true, -1);
        BundleControl_1.default.loadPrefabGame(bundleName, prefabName, function (finish, total) {
            _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
        }, function (prefab, bundle) {
            _this.showLoading(false);
            if (_this.bauCua == null) {
                var node = cc.instantiate(prefab);
                node.parent = _this.canvas;
                node.active = false;
                _this.bauCua = node.getComponent(MiniGame_1.default);
                node.getComponent("BauCua.BauCuaController").baucuaBundle = bundle;
            }
            _this.showGameMini("BauCua", _this.bauCua.node);
            _this.bauCua.show();
        });
        // }
    };
    App.prototype.openMiniGameTaiXiuDouble = function (bundleName, prefabName) {
        var _this = this;
        if (this.taiXiuDouble == null) {
            this.showLoading(true, -1);
            BundleControl_1.default.loadPrefabGame(bundleName, prefabName, function (finish, total) {
                _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                _this.showLoading(false);
                if (_this.taiXiuDouble == null) {
                    var node = cc.instantiate(prefab);
                    node.parent = _this.canvas;
                    node.active = false;
                    _this.taiXiuDouble = node.getComponent(MiniGame_1.default);
                }
                _this.showGameMini("TaiXiu", _this.taiXiuDouble.node);
                _this.taiXiuDouble.show();
            });
        }
        else {
            this.showGameMini("TaiXiu", this.taiXiuDouble.node);
            this.taiXiuDouble.show();
        }
        // }
    };
    App.prototype.openMiniGameTaiXiuSieuToc = function (bundleName, prefabName) {
        var _this = this;
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().checkConnect(function () {
            if (_this.taiXiuSieuToc == null) {
                _this.showLoading(true, -1);
                BundleControl_1.default.loadPrefabGame(bundleName, prefabName, function (finish, total) {
                    _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
                }, function (prefab) {
                    _this.showLoading(false);
                    if (_this.taiXiuSieuToc == null) {
                        var node = cc.instantiate(prefab);
                        node.parent = _this.miniGame;
                        node.active = false;
                        _this.taiXiuSieuToc = node.getComponent(MiniGame_1.default);
                    }
                    _this.showGameMini("TaiXiuSieuToc", _this.taiXiuSieuToc.node);
                    _this.taiXiuSieuToc.show();
                });
            }
            else {
                _this.showGameMini("TaiXiuSieuToc", _this.taiXiuSieuToc.node);
                _this.taiXiuSieuToc.show();
            }
        });
    };
    App.prototype.openMiniGameTaiXiuMD5 = function (bundleName, prefabName) {
        var _this = this;
        if (this.TaiXiuMD5 == null) {
            this.showLoading(true, -1);
            BundleControl_1.default.loadPrefabGame(bundleName, prefabName, function (finish, total) {
                _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                _this.showLoading(false);
                if (_this.TaiXiuMD5 == null) {
                    var node = cc.instantiate(prefab);
                    node.parent = _this.canvas;
                    node.active = false;
                    _this.TaiXiuMD5 = node.getComponent(MiniGame_1.default);
                }
                _this.showGameMini("TaiXiuMD5", _this.TaiXiuMD5.node);
                _this.TaiXiuMD5.show();
            });
        }
        else {
            this.showGameMini("TaiXiuMD5", this.TaiXiuMD5.node);
            this.TaiXiuMD5.show();
        }
        // }
    };
    App.prototype.openMiniGameCaoThap = function (bundleName, prefabName) {
        var _this = this;
        this.showLoading(true, -1);
        BundleControl_1.default.loadPrefabGame(bundleName, prefabName, function (finish, total) {
            _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
        }, function (prefab) {
            _this.showLoading(false);
            if (_this.caoThap == null) {
                var node = cc.instantiate(prefab);
                node.parent = _this.miniGame;
                node.active = false;
                _this.caoThap = node.getComponent(MiniGame_1.default);
            }
            _this.caoThap.show();
            _this.showGameMini("CaoThap", _this.caoThap.node);
        });
        // }
    };
    App.prototype.openMiniGameSlot3x3 = function (bundleName, prefabName) {
        var _this = this;
        this.showLoading(true, -1);
        BundleControl_1.default.loadPrefabGame(bundleName, prefabName, function (finish, total) {
            _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
        }, function (prefab) {
            _this.showLoading(false);
            if (_this.slot3x3 == null) {
                var node = cc.instantiate(prefab);
                node.parent = _this.miniGame;
                node.active = false;
                _this.slot3x3 = node.getComponent(MiniGame_1.default);
            }
            _this.slot3x3.show();
            _this.showGameMini("Slot3x3", _this.slot3x3.node);
        });
        // }
    };
    App.prototype.openMiniGameSlot3x3Gem = function (bundleName, prefabName) {
        var _this = this;
        this.showLoading(true, -1);
        BundleControl_1.default.loadPrefabGame(bundleName, prefabName, function (finish, total) {
            _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
        }, function (prefab) {
            _this.showLoading(false);
            if (_this.slot3x3Gem == null) {
                var node = cc.instantiate(prefab);
                node.parent = _this.miniGame;
                node.active = false;
                _this.slot3x3Gem = node.getComponent(MiniGame_1.default);
            }
            _this.slot3x3Gem.show();
            _this.showGameMini("Slot3x3Gem", _this.slot3x3Gem.node);
        });
        // }
    };
    App.prototype.openMiniGameMiniPoker = function (bundleName, prefabName) {
        var _this = this;
        this.showLoading(true, -1);
        BundleControl_1.default.loadPrefabGame(bundleName, prefabName, function (finish, total) {
            _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
        }, function (prefab) {
            _this.showLoading(false);
            if (_this.miniPoker == null) {
                var node = cc.instantiate(prefab);
                node.parent = _this.miniGame;
                node.active = false;
                _this.miniPoker = node.getComponent(MiniGame_1.default);
            }
            _this.miniPoker.show();
            _this.showGameMini("MiniPoker", _this.miniPoker.node);
        });
        // }
    };
    App.prototype.openMiniGameOneTuTi = function (bundleName, prefabName) {
        var _this = this;
        this.showLoading(true, -1);
        BundleControl_1.default.loadPrefabGame(bundleName, prefabName, function (finish, total) {
            _this.showErrLoading(App_1.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
        }, function (prefab) {
            _this.showLoading(false);
            if (_this.oanTuTi == null) {
                var node = cc.instantiate(prefab);
                node.parent = _this.miniGame;
                node.active = false;
                _this.oanTuTi = node.getComponent(MiniGame_1.default);
            }
            _this.oanTuTi.show();
        });
        // }
    };
    App.prototype.openTelegram = function (name) {
        if (name === void 0) { name = null; }
        if (name == null) {
            name = Configs_1.default.App.getLinkTelegram();
        }
        var url = "http://www.telegram.me/" + name;
        if (cc.sys.isNative) {
            url = "tg://resolve?domain=" + name;
        }
        cc.sys.openURL(url);
    };
    App.prototype.ShowAlertDialog = function (mess) {
        this.alertDialog.showMsg(mess);
    };
    App.prototype.showConfirmDialog = function (mess, cb, canClose) {
        this.alertDialog.showMsgWithOnDismissed(mess, cb, canClose);
    };
    App.prototype.showToast = function (msg) {
        var _this = this;
        this.alertToast.active = true;
        this.alertToast.zIndex = cc.macro.MAX_ZINDEX - 9;
        this.alertToast.getComponentInChildren(cc.Label).string = msg;
        cc.Tween.stopAllByTarget(this.alertToast);
        cc.tween(this.alertToast).set({ y: 0 }).to(2.0, { y: 100 }, { easing: cc.easing.sineOut }).call(function () {
            _this.alertToast.active = false;
        }).start();
    };
    App.prototype.getTextLang = function (key) {
        return Language_LanguageManager_1.default.instance.getString(key);
    };
    App.prototype.getJPGameID = function (gameName) {
        var gameID = "";
        switch (gameName) {
            case "THANTAI":
                gameID = "spartan";
                break;
            case "DUAXE":
                gameID = "audition";
                break;
            case "CHIEMTINH":
                gameID = "chiemtinh";
                break;
            case "THETHAO":
                gameID = "maybach";
                break;
            case "CHIMDIEN":
                gameID = "tamhung";
                break;
            case "BITCOIN":
                gameID = "benley";
                break;
            case "THANBAI":
                gameID = "rollRoye";
                break;
            case "BIKINI":
                gameID = "bikini";
                break;
            case "PIKACHU":
                gameID = "pokemon";
                break;
            case "MINIPOKER":
                gameID = "minipoker";
                break;
            case "TAIXIU":
                gameID = "TAI_XIU";
                break;
        }
        return gameID;
    };
    App.prototype.getGameName = function (gameID) {
        var gameName = gameID;
        switch (gameID) {
            case 'audition':
                gameName = "Đua Xe";
                break;
            case 'spartan':
                gameName = "Thần Tài";
                break;
            case 'pokemon':
                gameName = "Xèng";
                break;
            case 'benley':
                gameName = "Bitcoin";
                break;
            case 'maybach':
                gameName = "Thể Thao";
                break;
            case 'tamhung':
                gameName = "Chim Điên";
                break;
            case 'chiemtinh':
                gameName = "Chiêm Tinh";
                break;
            case 'bikini':
                gameName = "Bikini";
                break;
            case 'minipoker':
                gameName = "Mini Poker";
                break;
            case 'caothap':
                gameName = "Cao Thấp";
                break;
            case 'rollRoye':
                gameName = "Thần Bài";
                break;
            case 'galaxy':
                gameName = "Gem";
                break;
            case 'TAI_XIU':
                gameName = "Tài Xỉu";
                break;
        }
        return gameName;
    };
    App.prototype.checkTimeLixi = function () {
        var _this = this;
        var timeCurent = new Date();
        var timeLixi = new Date(timeCurent.getFullYear(), timeCurent.getMonth(), timeCurent.getDate(), 16);
        var deltaTime = timeLixi.getTime() - timeCurent.getTime();
        var deltaHour = Math.floor(deltaTime / 1000 / 3600);
        var hour = deltaHour > 9 ? deltaHour : "0" + deltaHour;
        var deltaMinutes = Math.floor((deltaTime / 1000 / 60) % 60);
        var minutes = deltaMinutes > 9 ? deltaMinutes : "0" + deltaMinutes;
        var msg = "Sự kiện \"Lì Xì Giờ Vàng\" sẽ diễn ra sau: %sh %s phút nữa!";
        msg = cc.js.formatStr(msg, hour, minutes);
        if (deltaTime > 60000) {
            this.uiNotifyJackpot.addNotify({ message: msg });
            this.scheduleOnce(function () {
                _this.checkTimeLixi();
            }, 1800);
        }
    };
    App.prototype.actGetEventLixi = function () {
        var _this = this;
        // http://43.128.27.35:8081/api?c=2036&nn=BigBird&at=9350306a24c780af46509750ba4b50ab&ac=get
        Http_1.default.get(Configs_1.default.App.API, { "c": 2036, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, "ac": "get" }, function (err, res) {
            if (err) {
                return;
            }
            else {
                //   cc.log(res);
                if (res['data'] == "Not passed conditions") {
                    App_1.instance.ShowAlertDialog("Quý khách không đủ điều kiện tham gia sự kiện \"Lì Xì Giờ Vàng\"\nVui lòng đọc thể lệ hoặc liên hệ CSKH!");
                }
                else if (res['data'] == "Received bonus" || res['errorCode'] == "1003") {
                    // App.instance.ShowAlertDialog("Quý khách ");
                }
                else {
                    _this.actShowPopupEventLixi();
                }
            }
        });
    };
    App.prototype.actShowPopupEventLixi = function () {
        var _this = this;
        if (!this.popupEvent) {
            var cb = function (prefab) {
                _this.popupEvent = cc.instantiate(prefab).getComponent("PopupEvent");
                _this.popupEvent.node.parent = App_1.instance.node;
                _this.popupEvent.type = 1;
                _this.popupEvent.showpPopup();
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupEvent", cb);
        }
        else {
            this.popupEvent.type = 1;
            this.popupEvent.showpPopup();
        }
    };
    App.prototype.actShowPopupRuleLixi = function () {
        var _this = this;
        if (!this.popupEvent) {
            var cb = function (prefab) {
                _this.popupEvent = cc.instantiate(prefab).getComponent("PopupEvent");
                _this.popupEvent.node.parent = App_1.instance.node;
                _this.popupEvent.type = 0;
                _this.popupEvent.showpPopup();
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupEvent", cb);
        }
        else {
            this.popupEvent.type = 0;
            this.popupEvent.showpPopup();
        }
    };
    var App_1;
    App.instance = null;
    App.DOMAIN = "FANVIN.wIN";
    App.API_CMD = "https://ga.FANVIN.wIN/3rd/cmd";
    App.API_IBC = "https://ga.FANVIN.wIN/3rd/ibc";
    App.API_SBO = "https://ga.FANVIN.wIN/3rd/sbo";
    App.API_AG = "https://ga.FANVIN.wIN/3rd/ag";
    App.API_EBET = "https://ga.FANVIN.wIN/3rd/ebet";
    App.API_WM = "https://ga.FANVIN.wIN/3rd/wm";
    __decorate([
        property(cc.AudioClip)
    ], App.prototype, "clipCoin", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "prefabCoin", void 0);
    __decorate([
        property(cc.Node)
    ], App.prototype, "nodeCoin", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "bgMiniPrefab", void 0);
    __decorate([
        property(GameLiveController_1.default)
    ], App.prototype, "gameLiveController", void 0);
    __decorate([
        property(UINotifyJackpot_1.default)
    ], App.prototype, "uiNotifyJackpot", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "taiXiuDoublePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "TaiXiuMD5Prefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "miniPokerPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "caoThapPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "bauCuaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "slot3x3Prefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "oanTuTiPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], App.prototype, "canvas", void 0);
    __decorate([
        property
    ], App.prototype, "designResolution", void 0);
    __decorate([
        property(cc.Node)
    ], App.prototype, "loading", void 0);
    __decorate([
        property(cc.Node)
    ], App.prototype, "loadingIcon", void 0);
    __decorate([
        property(cc.Label)
    ], App.prototype, "loadingLabel", void 0);
    __decorate([
        property(AlertDialog_1.default)
    ], App.prototype, "alertDialog", void 0);
    __decorate([
        property(cc.Node)
    ], App.prototype, "alertToast", void 0);
    __decorate([
        property(ConfirmDialog_1.default)
    ], App.prototype, "confirmDialog", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], App.prototype, "sprFrameAvatars", void 0);
    __decorate([
        property(cc.Node)
    ], App.prototype, "buttonMiniGameNode", void 0);
    __decorate([
        property(cc.Node)
    ], App.prototype, "miniGame", void 0);
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "popupWebView", void 0);
    __decorate([
        property(PopupUpdateNickname_1.default)
    ], App.prototype, "popupUpdateNickname", void 0);
    App = App_1 = __decorate([
        ccclass
    ], App);
    return App;
}(cc.Component));
exports.default = App;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVFQUFrRTtBQUNsRSwyREFBc0Q7QUFDdEQscURBQWdEO0FBQ2hELHVEQUFrRDtBQUdsRCwyQ0FBc0M7QUFDdEMsaUVBQTREO0FBQzVELGlFQUFvRDtBQUNwRCxtRUFBOEQ7QUFDOUQsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUNwRCxpREFBNEM7QUFDNUMscUNBQWdDO0FBQ2hDLHFEQUFnRDtBQUNoRCw2Q0FBa0M7QUFFbEMsd0VBQW1FO0FBR25FLHVGQUE0RTtBQUM1RSx5REFBd0Q7QUFDeEQsdUVBQWlFO0FBSTNELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBaXhDQztRQS93Q0csY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQix3QkFBa0IsR0FBdUIsSUFBSSxDQUFDO1FBRTlDLHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUVqQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFFckMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFFbEMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsWUFBTSxHQUFZLElBQUksQ0FBQztRQU05QixzQkFBZ0IsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMs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QUssbUJBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2lCQUNUO2dCQUNELEtBQUssbUJBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUN2QyxNQUFNO2lCQUNUO2dCQUNELEtBQUssbUJBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUN4QyxNQUFNO2lCQUNUO2dCQUNELEtBQUssbUJBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUN4QyxNQUFNO2lCQUNUO2dCQUNELEtBQUssbUJBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxD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QVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnREFDMEM7SUFHckU7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDaUI7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLDZCQUFtQixDQUFDO29EQUNrQjtJQWxFL0IsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQWl4Q3ZCO0lBQUQsVUFBQztDQWp4Q0QsQUFpeENDLENBanhDZ0MsRUFBRSxDQUFDLFNBQVMsR0FpeEM1QztrQkFqeENvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQnVuZGxlQ29udHJvbCBmcm9tIFwiLi4vLi4vLi4vLi4vTG9hZGluZy9zcmMvQnVuZGxlQ29udHJvbFwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQnV0dG9uTWluaUdhbWUgZnJvbSBcIi4uLy4uL0J1dHRvbk1pbmlHYW1lXCI7XG5pbXBvcnQgUG9wdXBDaGFuZ2VBdmF0YXIgZnJvbSBcIi4uLy4uL0xvYmJ5LlBvcHVwQ2hhbmdlQXZhdGFyXCI7XG5pbXBvcnQgUG9wdXBDaGFuZ2VQYXNzd29yZCBmcm9tIFwiLi4vLi4vTG9iYnkuUG9wdXBDaGFuZ2VQYXNzd29yZFwiO1xuaW1wb3J0IE1pbmlHYW1lIGZyb20gXCIuLi8uLi9NaW5pR2FtZVwiO1xuaW1wb3J0IFBvcHVwVXBkYXRlTmlja25hbWUgZnJvbSBcIi4uLy4uL1BvcHVwVXBkYXRlTmlja25hbWVcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IFNsb3ROZXR3b3JrQ2xpZW50IGZyb20gXCIuLi9uZXR3b3Jrcy9TbG90TmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gXCIuL0FsZXJ0RGlhbG9nXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gXCIuL0NvbmZpcm1EaWFsb2dcIjtcbmltcG9ydCBTUFV0aWxzIGZyb20gXCIuL1NQVXRpbHNcIjtcbmltcG9ydCBVSU5vdGlmeUphY2twb3QgZnJvbSBcIi4vVUlOb3RpZnlKYWNrcG90XCI7XG5pbXBvcnQgY21kIGZyb20gXCIuLi8uLi9Mb2JieS5DbWRcIjtcbmltcG9ydCBVSVBvcHVwUnVsZSBmcm9tIFwiLi4vLi4vVUlQb3B1cFJ1bGVcIjtcbmltcG9ydCBHYW1lTGl2ZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL0dhbWVMaXZlL0dhbWVMaXZlQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgUG9wdXBHYW1lVHJhbnNmZXIgZnJvbSBcIi4uLy4uL0xvYmJ5LlBvcHVwR2FtZVRyYW5zZmVyXCI7XG5pbXBvcnQgVGFpWGl1U1ROZXR3b3JrQ2xpZW50IGZyb20gXCIuLi9uZXR3b3Jrcy9UYWlYaXVTaWV1VG9jLk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9Mb2FkaW5nL3NyYy9HbG9iYWxcIjtcbmltcG9ydCBMYW5ndWFnZUxhbmd1YWdlTWFuYWdlciBmcm9tIFwiLi9MYW5ndWFnZS5MYW5ndWFnZU1hbmFnZXJcIjtcbi8vaW1wb3J0IFBvcHVwR2FtZVNCTyBmcm9tIFwiLi4vLi4vTG9iYnkuUG9wdXBHYW1lU0JPXCI7XG5pbXBvcnQgUG9wdXBFdmVudCBmcm9tIFwiLi4vLi4vUG9wdXBFdmVudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGNsaXBDb2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiQ29pbjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQ29pbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJnTWluaVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoR2FtZUxpdmVDb250cm9sbGVyKVxuICAgIGdhbWVMaXZlQ29udHJvbGxlcjogR2FtZUxpdmVDb250cm9sbGVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoVUlOb3RpZnlKYWNrcG90KVxuICAgIHVpTm90aWZ5SmFja3BvdDogVUlOb3RpZnlKYWNrcG90ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHB1YmxpYyB0YWlYaXVEb3VibGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHVibGljIFRhaVhpdU1ENVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHB1YmxpYyBtaW5pUG9rZXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwdWJsaWMgY2FvVGhhcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHB1YmxpYyBiYXVDdWFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwdWJsaWMgc2xvdDN4M1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHB1YmxpYyBvYW5UdVRpUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGNhbnZhczogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHN0YXRpYyBpbnN0YW5jZTogQXBwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGRlc2lnblJlc29sdXRpb246IGNjLlNpemUgPSBuZXcgY2MuU2l6ZSgxNTYwLCA3MjApO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9hZGluZ0ljb246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsb2FkaW5nTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShBbGVydERpYWxvZylcbiAgICBhbGVydERpYWxvZzogQWxlcnREaWFsb2cgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFsZXJ0VG9hc3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KENvbmZpcm1EaWFsb2cpXG4gICAgY29uZmlybURpYWxvZzogQ29uZmlybURpYWxvZyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzcHJGcmFtZUF2YXRhcnM6IEFycmF5PGNjLlNwcml0ZUZyYW1lPiA9IG5ldyBBcnJheTxjYy5TcHJpdGVGcmFtZT4oKTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ1dHRvbk1pbmlHYW1lTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtaW5pR2FtZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBvcHVwV2ViVmlldzogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShQb3B1cFVwZGF0ZU5pY2tuYW1lKVxuICAgIHBvcHVwVXBkYXRlTmlja25hbWU6IFBvcHVwVXBkYXRlTmlja25hbWUgPSBudWxsO1xuXG4gICAgcHVibGljIGlzU2hvd05vdGlmeUphY2twb3QgPSB0cnVlO1xuICAgIHB1YmxpYyBidXR0b25NaW5pR2FtZTogQnV0dG9uTWluaUdhbWU7XG4gICAgcHVibGljIHBvcHVwQ2hhbmdlQXZhdGFyOiBQb3B1cENoYW5nZUF2YXRhcjtcbiAgICBwdWJsaWMgcG9wdXBDaGFuZ2VQYXNzd29yZDogUG9wdXBDaGFuZ2VQYXNzd29yZDtcbiAgICBwdWJsaWMgcG9wdXBHYW1lVHJhbnNmZXI6IFBvcHVwR2FtZVRyYW5zZmVyID0gbnVsbDtcbiAgLy8gIHB1YmxpYyBwb3B1cEdhbWVTQk86IFBvcHVwR2FtZVNCTyA9IG51bGw7XG4gICAgcHVibGljIHBvcHVwUnVsZTogVUlQb3B1cFJ1bGUgPSBudWxsO1xuICAgIHByaXZhdGUgbGFzdFdpdGRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgbGFzdEhlaWdodDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgdGltZU91dExvYWRpbmc6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBpc0Zpc3J0TmV0d29ya0Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzdWJwYWNrYWdlTG9hZGVkOiBPYmplY3QgPSB7fTtcblxuICAgIHByaXZhdGUgdGFpWGl1RG91YmxlOiBNaW5pR2FtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBtaW5pUG9rZXI6IE1pbmlHYW1lID0gbnVsbDtcbiAgICBwcml2YXRlIGNhb1RoYXA6IE1pbmlHYW1lID0gbnVsbDtcbiAgICBwcml2YXRlIGJhdUN1YTogTWluaUdhbWUgPSBudWxsO1xuICAgIHByaXZhdGUgc2xvdDN4MzogTWluaUdhbWUgPSBudWxsO1xuICAgIHByaXZhdGUgc2xvdDN4M0dlbTogTWluaUdhbWUgPSBudWxsO1xuICAgIHByaXZhdGUgb2FuVHVUaTogTWluaUdhbWUgPSBudWxsO1xuICAgIHByaXZhdGUgdGFpWGl1U2lldVRvYzogTWluaUdhbWUgPSBudWxsO1xuXHRwcml2YXRlIFRhaVhpdU1ENTogTWluaUdhbWUgPSBudWxsO1xuICAgIHB1YmxpYyBudW1NaW5pR2FtZU9wZW5pbmcgPSAwO1xuICAgIHB1YmxpYyBjYWNoZVdlYlZpZXcgPSB7fTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBwcml2YXRlIGNvaW5Qb29sID0gbnVsbDtcbiAgICBwdWJsaWMgdG9wSHVEYXRhOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBmYWtlVG9wSHVEYXRhOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgY2hlY2tNYWlsVW5yZWFkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcG9wdXBFdmVudDogUG9wdXBFdmVudCA9IG51bGw7XG4gICAgcHVibGljIFZFUlNJT05fQ09ORklHID0gXCIxLjAuM1wiO1xuICAgIHB1YmxpYyB0aW1lTGl4aTogbnVtYmVyID0gLTE7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEdsb2JhbC5MYW5ndWFnZU1hbmFnZXIgPSBMYW5ndWFnZUxhbmd1YWdlTWFuYWdlcjtcbiAgICAgICAgaWYgKEFwcC5pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29pblBvb2wgPSBuZXcgY2MuTm9kZVBvb2woXCJDb2luXCIpO1xuICAgICAgICB0aGlzLmluaXRDb25maWdHYW1lU3RhcnQoKTtcbiAgICAgICAgQXBwLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUoQXBwLmluc3RhbmNlLm5vZGUpO1xuICAgICAgICB0aGlzLmJ1dHRvbk1pbmlHYW1lID0gdGhpcy5idXR0b25NaW5pR2FtZU5vZGUuZ2V0Q29tcG9uZW50KEJ1dHRvbk1pbmlHYW1lKTtcbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9MT0dPVVQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tNYWlsVW5yZWFkID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLnNldHVwVGltZVJ1bkluQmcoKTtcbiAgICB9XG4gICAgZ2V0Q29pbigpIHtcbiAgICAgICAgbGV0IHJldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuY29pblBvb2wuc2l6ZSgpIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29pblBvb2wucHV0KGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiQ29pbikpO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IHRoaXMuY29pblBvb2wuZ2V0KCk7XG4gICAgICAgIHJldC5wYXJlbnQgPSB0aGlzLm5vZGVDb2luO1xuICAgICAgICByZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmV0LnNjYWxlID0gMTtcbiAgICAgICAgcmV0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHJldC5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgICBsZXQgcGFydGljYWwgPSByZXQuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5QYXJ0aWNsZVN5c3RlbSk7XG4gICAgICAgIGlmIChwYXJ0aWNhbC5wYXJ0aWNsZUNvdW50ID4gMCkgeyAvLyBjaGVjayBpZiBwYXJ0aWNsZSBoYXMgZnVsbHkgcGxhZWRcbiAgICAgICAgICAgIHBhcnRpY2FsLnN0b3BTeXN0ZW0oKTsgLy8gc3RvcCBwYXJ0aWNsZSBzeXN0ZW1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRpY2FsLnJlc2V0U3lzdGVtKCk7IC8vIHJlc3RhcnQgcGFydGljbGUgc3lzdGVtXG4gICAgICAgIH1cbiAgICAgICAgcGFydGljYWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cblxuICAgIGdldFBvc2l0aW9uSW5WaWV3KGl0ZW0pIHsgLy8gZ2V0IGl0ZW0gcG9zaXRpb24gaW4gc2Nyb2xsdmlldydzIG5vZGUgc3BhY2VcbiAgICAgICAgLy8gIC8vVXRpbHMuTG9nKFwiZ2V0UG9zaXRpb25JblZpZXc6XCIraXRlbS5uYW1lKTtcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gaXRlbS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGxldCB2aWV3UG9zID0gdGhpcy5ub2RlQ29pbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgIHJldHVybiB2aWV3UG9zO1xuICAgIH1cblxuICAgIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cbiAgICBzaG93Q29pbnMobnVtYmVyQ29pbiwgbm9kZVN0YXJ0LCBub2RlVGFyZ2V0LCBjYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmNsaXBDb2luLCBmYWxzZSwgMSk7XG4gICAgICAgIC8vVXRpbHMuTG9nKFwic2hvd0NvaW5zOlwiICsgbnVtYmVyQ29pbik7XG4gICAgICAgIGlmIChudW1iZXJDb2luIDw9IDIwKSBudW1iZXJDb2luID0gMjA7XG4gICAgICAgIGVsc2UgaWYgKG51bWJlckNvaW4gPj0gNDApIG51bWJlckNvaW4gPSA0MDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJDb2luOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlwID0gdGhpcy5nZXRDb2luKCk7XG4gICAgICAgICAgICBjaGlwLnNjYWxlID0gMi41O1xuICAgICAgICAgICAgdmFyIHBvc1N0YXJ0ID0gdGhpcy5nZXRQb3NpdGlvbkluVmlldyhub2RlU3RhcnQpO1xuICAgICAgICAgICAgdmFyIHBvc1RhcmdldCA9IHRoaXMuZ2V0UG9zaXRpb25JblZpZXcobm9kZVRhcmdldCk7XG4gICAgICAgICAgICBjaGlwLnBvc2l0aW9uID0gcG9zU3RhcnQ7XG4gICAgICAgICAgICB2YXIgYmV6aWVyID0gW2NjLnYyKHBvc1N0YXJ0LngsIHBvc1N0YXJ0LnkpLCBjYy52Mihwb3NTdGFydC54ICsgMjAwLCBwb3NTdGFydC55ICsgMzAwKSwgcG9zVGFyZ2V0XTtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChjaGlwKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNoaXApXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAgKyAobnVtYmVyQ29pbiAqIDAuMSAtIGkgKiAwLjEpKVxuICAgICAgICAgICAgICAgIC8vIC50bygwLjUsIHtzY2FsZToxLCB4OiB0aGlzLmdldFJhbmRvbUFyYml0cmFyeShwb3NTdGFydC54LTUwLHBvc1N0YXJ0LngrNTApLCB5OiB0aGlzLmdldFJhbmRvbUFyYml0cmFyeShwb3NTdGFydC55LTUwLHBvc1N0YXJ0LnkrNTApIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja091dCB9KVxuICAgICAgICAgICAgICAgIC8vIC5kZWxheSgwLjEpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGlwLmdldENoaWxkQnlOYW1lKFwicGFydGljYWxcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGNjLnNwYXduKGNjLnNjYWxlVG8oMS4wLCAxLjApLmVhc2luZyhjYy5lYXNlU2luZUluT3V0KCkpLCBjYy5iZXppZXJUbygxLCBiZXppZXIpLmVhc2luZyhjYy5lYXNlU2luZUluT3V0KCkpKSlcbiAgICAgICAgICAgICAgICAvLyAudG8oMC41LCB7IHBvc2l0aW9uOiBwb3NUYXJnZXQgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoaXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0aWNhbCA9IGNoaXAuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5QYXJ0aWNsZVN5c3RlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNhbC5wYXJ0aWNsZUNvdW50ID4gMCkgeyAvLyBjaGVjayBpZiBwYXJ0aWNsZSBoYXMgZnVsbHkgcGxhZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2FsLnN0b3BTeXN0ZW0oKTsgLy8gc3RvcCBwYXJ0aWNsZSBzeXN0ZW1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2FsLnJlc2V0U3lzdGVtKCk7IC8vIHJlc3RhcnQgcGFydGljbGUgc3lzdGVtXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFydGljYWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY2hpcC5wb3NpdGlvbiA9IHBvc1N0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvaW5Qb29sLnB1dChjaGlwKTtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBoaWRlR2FtZU1pbmkobmFtZUdhbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYXJyTWluaUdhbWVbbmFtZUdhbWVdO1xuICAgICAgICB0aGlzLm51bU1pbmlHYW1lT3BlbmluZy0tO1xuICAgICAgICBpZiAodGhpcy5udW1NaW5pR2FtZU9wZW5pbmcgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5udW1NaW5pR2FtZU9wZW5pbmcgPSAwO1xuICAgICAgICAgICAgdGhpcy5iZ01pbmkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0dhbWVNaW5pKG5hbWVHYW1lLCBvYmogPSBudWxsKSB7XG4gICAgICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hcnJNaW5pR2FtZVtuYW1lR2FtZV0gPSBvYmo7XG4gICAgICAgICAgICB0aGlzLm51bU1pbmlHYW1lT3BlbmluZysrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm51bU1pbmlHYW1lT3BlbmluZyA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJnTWluaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBwcml2YXRlIGlzRmFkZU91dEJnTWluaSA9IGZhbHNlO1xuXG4gICAgcHVibGljIHNob3dCZ01pbmlHYW1lKGdhbWVOYW1lKSB7XG4gICAgICAgIHRoaXMuaXNGYWRlT3V0QmdNaW5pID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmdNaW5pLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFyck1pbmlHYW1lKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZU5hbWUgPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5hcnJNaW5pR2FtZVtrZXldLmdldENvbXBvbmVudCgnTWluaUdhbWUnKS5nYW1lUGxheSkudG8oMC4yLCB7IHNjYWxlOiAxLjAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFyck1pbmlHYW1lW2tleV0uZ2V0Q29tcG9uZW50KFwiTWluaUdhbWVcIikucmVPcmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5hcnJNaW5pR2FtZVtrZXldLmdldENvbXBvbmVudCgnTWluaUdhbWUnKS5nYW1lUGxheSkudG8oMC4xLCB7IHNjYWxlOiAwLjUgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlQmdNaW5pR2FtZSgpIHtcbiAgICAgICAgdGhpcy5pc0ZhZGVPdXRCZ01pbmkgPSB0cnVlO1xuICAgICAgICB0aGlzLmJnTWluaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYXJyTWluaUdhbWUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuYXJyTWluaUdhbWVba2V5XS5vcGFjaXR5ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5hcnJNaW5pR2FtZVtrZXldLmdldENvbXBvbmVudCgnTWluaUdhbWUnKS5nYW1lUGxheS5zY2FsZSA9IDAuNTtcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuYXJyTWluaUdhbWVba2V5XSkudG8oMC4xLCB7IHNjYWxlOiAwLjUgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgYm94QXBwOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGJnTWluaTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBhcnJNaW5pR2FtZSA9IHt9O1xuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB2YXIgY2FudmFzVG1wID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5taW5pUG9rZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNhb1RoYXAgPSBudWxsO1xuICAgICAgICB0aGlzLnRhaVhpdURvdWJsZSA9IG51bGw7XG5cdFx0dGhpcy5UYWlYaXVNRDUgPSBudWxsO1xuICAgICAgICB0aGlzLmJhdUN1YSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2xvdDN4MyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2xvdDN4M0dlbSA9IG51bGw7XG4gICAgICAgIHRoaXMudGFpWGl1U2lldVRvYyA9IG51bGw7XG4gICAgICAgIHRoaXMuYXJyTWluaUdhbWUgPSB7fTtcbiAgICAgICAgdGhpcy5taW5pR2FtZSA9IG5ldyBjYy5Ob2RlKCdCb3hNaW5pR2FtZScpO1xuICAgICAgICB0aGlzLm1pbmlHYW1lLndpZHRoID0gMTU2MDtcbiAgICAgICAgdGhpcy5taW5pR2FtZS5oZWlnaHQgPSA3MjA7XG4gICAgICAgIC8vIHRoaXMubWluaUdhbWUucG9zaXRpb24gPSBjYy52MygxNTYwLzIsNzIwLzIsMCk7XG4gICAgICAgIHRoaXMuYmdNaW5pID0gY2MuaW5zdGFudGlhdGUodGhpcy5iZ01pbmlQcmVmYWIpO1xuICAgICAgICB0aGlzLmJnTWluaS5wYXJlbnQgPSB0aGlzLm1pbmlHYW1lO1xuICAgICAgICB0aGlzLmJnTWluaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2FudmFzVG1wLmFkZENoaWxkKHRoaXMubWluaUdhbWUpO1xuXG4gICAgICAgIC8vIHZhciBib3hQb3B1cCA9IG5ldyBjYy5Ob2RlKCdCb3hQb3B1cCcpO1xuICAgICAgICAvLyBib3hQb3B1cC53aWR0aCA9IGNjLndpblNpemUud2lkdGg7XG4gICAgICAgIC8vIGJveFBvcHVwLmhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICAvLyBjYW52YXNUbXAuYWRkQ2hpbGQoYm94UG9wdXApO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMubWluaUdhbWU7XG4gICAgfVxuICAgIHNldFVwTm9kZSgpIHtcbiAgICAgICAgdmFyIGNhbnZhc1RtcCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG4gICAgICAgIHRoaXMubWluaVBva2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW9UaGFwID0gbnVsbDtcbiAgICAgICAgdGhpcy50YWlYaXVEb3VibGUgPSBudWxsO1xuICAgICAgICB0aGlzLmJhdUN1YSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2xvdDN4MyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2xvdDN4M0dlbSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5taW5pR2FtZSA9IG5ldyBjYy5Ob2RlKCdCb3hNaW5pR2FtZScpO1xuICAgICAgICB0aGlzLm1pbmlHYW1lLndpZHRoID0gMTU2MDtcbiAgICAgICAgdGhpcy5taW5pR2FtZS5oZWlnaHQgPSA3MjA7XG4gICAgICAgIGNhbnZhc1RtcC5hZGRDaGlsZCh0aGlzLm1pbmlHYW1lKTtcblxuICAgICAgICB2YXIgYm94UG9wdXAgPSBuZXcgY2MuTm9kZSgnQm94UG9wdXAnKTtcbiAgICAgICAgYm94UG9wdXAud2lkdGggPSBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICBib3hQb3B1cC5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgY2FudmFzVG1wLmFkZENoaWxkKGJveFBvcHVwKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBib3hQb3B1cDtcbiAgICB9XG5cbiAgICBhY3RDaGFuZ2VBdmF0YXIoKSB7XG4gICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJC4bqhbiBjaMawYSDEkcSDbmcgbmjhuq1wLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucG9wdXBDaGFuZ2VBdmF0YXIpIHtcbiAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9wdXBuYXBydXQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIkxvYmJ5LlBvcHVwQ2hhbmdlQXZhdGFyXCIpO1xuICAgICAgICAgICAgICAgIHBvcHVwbmFwcnV0Lm5vZGUucGFyZW50ID0gdGhpcy5jYW52YXM7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENoYW5nZUF2YXRhciA9IHBvcHVwbmFwcnV0O1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDaGFuZ2VBdmF0YXIuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cENoYW5nZUF2YXRhclwiLCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ2hhbmdlQXZhdGFyLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdFJ1bGUoKSB7XG4gICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wb3B1cFJ1bGUpIHtcbiAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9wdXBSdWxlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJVSVBvcHVwUnVsZVwiKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY2FudmFzLmFkZENoaWxkKHBvcHVwUnVsZS5ub2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUnVsZSA9IHBvcHVwUnVsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUnVsZS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1VJUG9wdXBSdWxlXCIsIGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBSdWxlLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBUWVBFX0xPR0lOID0gXCJOT1JNQUxcIjsvL05PUk1BTCAsIEZBQ0VCT09LXG4gICAgcHVibGljIFVTRVJfTkFNRSA9IFwiXCI7XG4gICAgcHVibGljIFBBU1NfV09SRCA9IFwiXCI7XG4gICAgcHVibGljIEZCX0lEID0gXCJcIjtcbiAgICBwdWJsaWMgQVRfRkIgPSBcIlwiO1xuICAgIHB1YmxpYyBSRUNPTk5FQ1RfR0FNRSA9IGZhbHNlO1xuXG4gICAgc3RhdGljIERPTUFJTiA9IFwiRkFOVklOLndJTlwiO1xuICAgIHN0YXRpYyBBUElfQ01EOiBzdHJpbmcgPSBcImh0dHBzOi8vZ2EuRkFOVklOLndJTi8zcmQvY21kXCI7XG4gICAgc3RhdGljIEFQSV9JQkM6IHN0cmluZyA9IFwiaHR0cHM6Ly9nYS5GQU5WSU4ud0lOLzNyZC9pYmNcIjtcbiAgICBzdGF0aWMgQVBJX1NCTzogc3RyaW5nID0gXCJodHRwczovL2dhLkZBTlZJTi53SU4vM3JkL3Nib1wiXG4gICAgc3RhdGljIEFQSV9BRzogc3RyaW5nID0gXCJodHRwczovL2dhLkZBTlZJTi53SU4vM3JkL2FnXCI7XG4gICAgc3RhdGljIEFQSV9FQkVUOiBzdHJpbmcgPSBcImh0dHBzOi8vZ2EuRkFOVklOLndJTi8zcmQvZWJldFwiO1xuICAgIHN0YXRpYyBBUElfV006IHN0cmluZyA9IFwiaHR0cHM6Ly9nYS5GQU5WSU4ud0lOLzNyZC93bVwiO1xuXG4gICAgLy9odHRwOi8vbG9jYWxob3N0OjgwODEvYXBpP2M9MjAyMSZubj10dWFuYmlnYmlyZCZhdD0xNjI4MjI0MDIyJmlwPTEyNy4wLjAuMSZtbj0xMDBcbiAgICB1cGRhdGVDb25maWdHYW1lKGRvbWFpbiA9IFwiRkFOVklOLndJTlwiKSB7XG4gICAgICAgIHRoaXMuUkVDT05ORUNUX0dBTUUgPSB0cnVlO1xuXG4gICAgICAgIENvbmZpZ3MuQXBwLkFQSSA9IFwiaHR0cHM6Ly9pcG9ydGFsLlwiICsgZG9tYWluICsgXCIvYXBpXCI7XG4gICAgICAgIENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUgPSAxO1xuICAgICAgICBDb25maWdzLkFwcC5MSU5LX0RPV05MT0FEID0gXCJodHRwczovL1wiICsgZG9tYWluICsgXCJcIjtcbiAgICAgICAgQ29uZmlncy5BcHAuTElOS19FVkVOVCA9IFwiaHR0cHM6Ly9cIiArIGRvbWFpbiArIFwiL2V2ZW50XCI7XG5cbiAgICAgICAgQ29uZmlncy5BcHAuSE9TVF9NSU5JR0FNRS5ob3N0ID0gXCJ3bWluaS5cIiArIGRvbWFpbiArIFwiXCI7XG4gICAgICAgIENvbmZpZ3MuQXBwLkhPU1RfVEFJX1hJVV9NSU5JMi5ob3N0ID0gXCJvdmVydW5kZXIuXCIgKyBkb21haW4gKyBcIlwiO1xuICAgICAgICBDb25maWdzLkFwcC5IT1NUX1NMT1QuaG9zdCA9IFwid3Nsb3QuXCIgKyBkb21haW4gKyBcIlwiO1xuICAgICAgICBDb25maWdzLkFwcC5IT1NUX1RMTU4uaG9zdCA9IFwid3RsbW4uXCIgKyBkb21haW4gKyBcIlwiO1xuICAgICAgICBDb25maWdzLkFwcC5IT1NUX1NIT09UX0ZJU0guaG9zdCA9IFwid2JhbmNhLlwiICsgZG9tYWluICsgXCJcIjtcbiAgICAgICAgQ29uZmlncy5BcHAuSE9TVF9TQU0uaG9zdCA9IFwid3NhbS5cIiArIGRvbWFpbiArIFwiXCI7XG4gICAgICAgIENvbmZpZ3MuQXBwLkhPU1RfWE9DRElBLmhvc3QgPSBcInd4b2NkaWEuXCIgKyBkb21haW4gKyBcIlwiO1xuICAgICAgICBDb25maWdzLkFwcC5IT1NUX0JBQ0FZLmhvc3QgPSBcIndiYWNheS5cIiArIGRvbWFpbiArIFwiXCI7XG4gICAgICAgIENvbmZpZ3MuQXBwLkhPU1RfQkFJQ0FPLmhvc3QgPSBcIndiYWljYW8uXCIgKyBkb21haW4gKyBcIlwiO1xuICAgICAgICBDb25maWdzLkFwcC5IT1NUX1BPS0VSLmhvc3QgPSBcIndwb2tlci5cIiArIGRvbWFpbiArIFwiXCI7XG4gICAgICAgIENvbmZpZ3MuQXBwLkhPU1RfWElEQUNILmhvc3QgPSBcInd4aXphY2guXCIgKyBkb21haW4gKyBcIlwiO1xuICAgICAgICBDb25maWdzLkFwcC5IT1NUX0JJTkguaG9zdCA9IFwid2JpbmguXCIgKyBkb21haW4gKyBcIlwiO1xuICAgICAgICBDb25maWdzLkFwcC5IT1NUX0xJRU5HLmhvc3QgPSBcIndsaWVuZy5cIiArIGRvbWFpbiArIFwiXCI7XG5cbiAgICAgICAgQXBwLkFQSV9BRyA9IFwiaHR0cHM6Ly9nYS5cIiArIGRvbWFpbiArIFwiLzNyZC9hZ1wiO1xuICAgICAgICBBcHAuQVBJX0lCQyA9IFwiaHR0cHM6Ly9nYS5cIiArIGRvbWFpbiArIFwiLzNyZC9pYmNcIjtcbiAgICAgICAgQXBwLkFQSV9XTSA9IFwiaHR0cHM6Ly9nYS5cIiArIGRvbWFpbiArIFwiLzNyZC93bVwiO1xuICAgICAgICBBcHAuQVBJX0NNRCA9IFwiaHR0cHM6Ly9nYS5cIiArIGRvbWFpbiArIFwiLzNyZC9jbWRcIjtcbiAgICAgICAgLy9VdGlscy5Mb2coXCJDT05GSUdfQVBJOlwiICsgQ29uZmlncy5BcHAuQVBJKTtcbiAgICB9XG5cbiAgICBpbml0Q29uZmlnR2FtZVN0YXJ0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbmZpZ0dhbWUoQXBwLkRPTUFJTik7XG4gICAgfVxuXG4gICAgYWN0Q2hhbmdlUGFzcygpIHtcbiAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnREaWFsb2cuc2hvd01zZyhcIkLhuqFuIGNoxrBhIMSRxINuZyBuaOG6rXAuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wb3B1cENoYW5nZVBhc3N3b3JkKSB7XG4gICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcHVwbmFwcnV0ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJMb2JieS5Qb3B1cENoYW5nZVBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgIHBvcHVwbmFwcnV0Lm5vZGUucGFyZW50ID0gdGhpcy5jYW52YXM7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENoYW5nZVBhc3N3b3JkID0gcG9wdXBuYXBydXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENoYW5nZVBhc3N3b3JkLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBDaGFuZ2VQYXNzd29yZFwiLCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ2hhbmdlUGFzc3dvcmQuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBUaW1lUnVuSW5CZygpIHtcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB0aW1lTm93ID0gY2Muc3lzLm5vdygpXG5cbiAgICAgICAgICAgIC8vVXRpbHMuTG9nKCctPS09RVZFTlRfSElERSAgJywgdGltZU5vdylcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZW5vdycsIHRpbWVOb3cpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csICgpID0+IHtcbiAgICAgICAgICAgIGxldCB0aW1lTm93ID0gY2Muc3lzLm5vdygpXG4gICAgICAgICAgICBsZXQgdGltZUhpZGUgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVub3cnKSlcbiAgICAgICAgICAgIC8vVXRpbHMuTG9nKCctPS09RVZFTlRfU0hPVzJfSU5fU0VDQ09ORCAgJyArICgodGltZU5vdyAtIHRpbWVIaWRlKSAvIDEwMDApKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldEFjdGlvbk1hbmFnZXIoKS51cGRhdGUoKHRpbWVOb3cgLSB0aW1lSGlkZSkgLyAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMudGltZUxpeGkgPSBNYXRoLmZsb29yKHRoaXMudGltZUxpeGkgLSAoKHRpbWVOb3cgLSB0aW1lSGlkZSkgLyAxMDAwKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGluUGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgICAgICAgc3dpdGNoIChpblBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDNYMzoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNOb3RpZnlKYWNrcG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dKYWNrcG90Tm90aWZ5KHJlcywgXCJQb2tlbW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDN4M0dFTToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNOb3RpZnlKYWNrcG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dKYWNrcG90Tm90aWZ5KHJlcywgXCJHZW1cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9CSUdXSU5fSkFDS1BPVF9NSU5JUE9LRVI6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzTm90aWZ5SmFja3BvdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SmFja3BvdE5vdGlmeShyZXMsIFwiTWluaVBva2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDE6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzTm90aWZ5SmFja3BvdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SmFja3BvdE5vdGlmeShyZXMsIFwixJB1YSBYZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX0JJR1dJTl9KQUNLUE9UX1NMT1QzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc05vdGlmeUphY2twb3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0phY2twb3ROb3RpZnkocmVzLCBcIlRo4bqnbiBUw6BpXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzTm90aWZ5SmFja3BvdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SmFja3BvdE5vdGlmeShyZXMsIFwiQ2hpbSDEkGnDqm5cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9CSUdXSU5fSkFDS1BPVF9TTE9UNToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNOb3RpZnlKYWNrcG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dKYWNrcG90Tm90aWZ5KHJlcywgXCJDaGnDqm0gVGluaFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX0JJR1dJTl9KQUNLUE9UX1NMT1Q3OiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc05vdGlmeUphY2twb3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0phY2twb3ROb3RpZnkocmVzLCBcIkJpdGNvaW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9CSUdXSU5fSkFDS1BPVF9TTE9UODoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNOb3RpZnlKYWNrcG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dKYWNrcG90Tm90aWZ5KHJlcywgXCJUaOG6p24gQsOgaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX0JJR1dJTl9KQUNLUE9UX1NMT1QxMDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNOb3RpZnlKYWNrcG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dKYWNrcG90Tm90aWZ5KHJlcywgXCJUaOG7gyBUaGFvXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfQklHV0lOX0pBQ0tQT1RfU0xPVDExOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc05vdGlmeUphY2twb3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0phY2twb3ROb3RpZnkocmVzLCBcIkJpa2luaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5sb2FkaW5nSWNvbikucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpLnRvKDAuNSwgeyBzY2FsZTogMS4xIH0pLnRvKDAuNSwgeyBzY2FsZTogMC45IH0pLnRvKDAuNSwgeyBzY2FsZTogMS4wIH0pKS5zdGFydCgpO1xuICAgIH1cbiAgICBzaG93SmFja3BvdE5vdGlmeShyZXMsIGdhbWVOYW1lKSB7XG4gICAgICAgIC8vVXRpbHMuTG9nKCdzaG93SmFja3BvdE5vdGlmeTonLCByZXMpO1xuICAgICAgICBpZiAocmVzW1widHlwZVwiXSA9PSAzKSB7XG4gICAgICAgICAgICB2YXIgZGF0YU5vdGlmeSA9IHt9O1xuICAgICAgICAgICAgZGF0YU5vdGlmeVtcInVzZXJuYW1lXCJdID0gcmVzW1widXNlcm5hbWVcIl07XG4gICAgICAgICAgICBkYXRhTm90aWZ5W1widG90YWxQcml6ZXNcIl0gPSByZXNbXCJ0b3RhbFByaXplc1wiXTtcbiAgICAgICAgICAgIGRhdGFOb3RpZnlbXCJ0eXBlXCJdID0gcmVzW1widHlwZVwiXSA9PSAzID8gXCJO4buXIEjFqVwiIDogXCJUaOG6r25nIEzhu5tuXCI7XG4gICAgICAgICAgICBkYXRhTm90aWZ5W1wiZ2FtZU5hbWVcIl0gPSBnYW1lTmFtZTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS51aU5vdGlmeUphY2twb3QuYWRkSmFja3BvdChkYXRhTm90aWZ5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93TG9hZGluZyhpc1Nob3c6IGJvb2xlYW4sIHRpbWVPdXQ6IG51bWJlciA9IDE1KSB7XG4gICAgICAgLy8gdGhpcy5sb2FkaW5nLnpJbmRleCA9IHRoaXMubm9kZS5jaGlsZHJlblt0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIDFdLnpJbmRleCArIDE7XG4gICAgICAgIHRoaXMubG9hZGluZ0xhYmVsLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJyk7XG4gICAgICAgIGlmICh0aGlzLnRpbWVPdXRMb2FkaW5nICE9IG51bGwpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVPdXRMb2FkaW5nKTtcbiAgICAgICAgaWYgKGlzU2hvdykge1xuICAgICAgICAgICAgaWYgKHRpbWVPdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lT3V0TG9hZGluZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LCB0aW1lT3V0ICogMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmdJY29uLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMubG9hZGluZ0ljb24ucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Mucm90YXRlQnkoMS41LCAzNjApKSk7XG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubG9hZGluZ0ljb24pLnRvKDAuNSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuNSwgeyBzY2FsZTogMC44IH0pLnRvKDAuNSwgeyBzY2FsZTogMS4wIH0pLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xuICAgIH1cblxuICAgIHNob3dFcnJMb2FkaW5nKG1zZz86IHN0cmluZykge1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nKHRydWUsIC0xKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nTGFiZWwuc3RyaW5nID0gbXNnID8gbXNnIDogXCJN4bqldCBr4bq/dCBu4buRaSwgxJFhbmcgdGjhu60gbOG6oWkuLi5cIjtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICB2YXIgZnJhbWVTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFdpdGRoICE9PSBmcmFtZVNpemUud2lkdGggfHwgdGhpcy5sYXN0SGVpZ2h0ICE9PSBmcmFtZVNpemUuaGVpZ2h0KSB7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdFdpdGRoID0gZnJhbWVTaXplLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGVpZ2h0ID0gZnJhbWVTaXplLmhlaWdodDtcblxuICAgICAgICAgICAgdmFyIG5ld0Rlc2lnblNpemUgPSBjYy5TaXplLlpFUk87XG4gICAgICAgICAgICBpZiAodGhpcy5kZXNpZ25SZXNvbHV0aW9uLndpZHRoIC8gdGhpcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodCA+IGZyYW1lU2l6ZS53aWR0aCAvIGZyYW1lU2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBuZXdEZXNpZ25TaXplID0gY2Muc2l6ZSh0aGlzLmRlc2lnblJlc29sdXRpb24ud2lkdGgsIHRoaXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAqIChmcmFtZVNpemUuaGVpZ2h0IC8gZnJhbWVTaXplLndpZHRoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0Rlc2lnblNpemUgPSBjYy5zaXplKHRoaXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQgKiAoZnJhbWVTaXplLndpZHRoIC8gZnJhbWVTaXplLmhlaWdodCksIHRoaXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKG5ld0Rlc2lnblNpemUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKG5ld0Rlc2lnblNpemUud2lkdGggLyAyLCBuZXdEZXNpZ25TaXplLmhlaWdodCAvIDIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF2YXRhclNwcml0ZUZyYW1lKGF2YXRhcjogc3RyaW5nKTogY2MuU3ByaXRlRnJhbWUge1xuICAgICAgICAvLyBhdmF0YXIgPSBcIjk5OVwiO1xuICAgICAgICBsZXQgYXZhdGFySW50ID0gcGFyc2VJbnQoYXZhdGFyKTtcbiAgICAgICAgLy8gaWYgKGF2YXRhckludCA9PSA5OTkpIHtcbiAgICAgICAgLy8gICAgIGxldCBzcHJBdmF0YXI6IGNjLlNwcml0ZUZyYW1lO1xuICAgICAgICAvLyAgICAgbGV0IHVybCA9ICdodHRwczovL3BsYXRmb3JtLWxvb2thc2lkZS5mYnNieC5jb20vcGxhdGZvcm0vcHJvZmlsZXBpYy8/YXNpZD0lZmJpZCZoZWlnaHQ9MTAwJndpZHRoPTEwMCZleHQ9MTYzMzUzNTQzNiZoYXNoPUFlU2p4b3psazJ0ZVlkbWZJXzAnO1xuICAgICAgICAvLyAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCIlZmJpZFwiLCBDb25maWdzLkxvZ2luLkZhY2Vib29rSUQpO1xuICAgICAgICAvLyAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodXJsLCB7IGV4dDogXCIucG5nXCIgfSwgKGVyciwgaW1nOiBjYy5UZXh0dXJlMkQpID0+IHtcblxuICAgICAgICAvLyAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByRnJhbWVBdmF0YXJzWzBdO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgLy9VdGlscy5Mb2coaW1nKTtcbiAgICAgICAgLy8gICAgICAgICBzcHJBdmF0YXIgPSBuZXcgY2MuU3ByaXRlRnJhbWUoaW1nKTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gc3ByQXZhdGFyO1xuICAgICAgICAvLyAgICAgICAgIC8vIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXgpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKGlzTmFOKGF2YXRhckludCkgfHwgYXZhdGFySW50IDwgMCB8fCBhdmF0YXJJbnQgPj0gdGhpcy5zcHJGcmFtZUF2YXRhcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcHJGcmFtZUF2YXRhcnNbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zcHJGcmFtZUF2YXRhcnNbYXZhdGFySW50XTtcbiAgICB9XG5cbiAgICBsb2FkU2NlbmUoc2NlbmVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHNjZW5lTmFtZSwgKGMsIHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KFwiXCIgKyAoKGMgLyB0KSAqIDEwMCkpICsgXCIlXCIpO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuV2ViVmlldyh1cmwsIGNhY2hlID0gXCJcIikge1xuICAgICAgICBjYy5zeXMub3BlblVSTCh1cmwpO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYgKGNhY2hlID09IFwiQUdcIikge1xuICAgICAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ0FDSEVfQUcpIHtcbiAgICAgICAgICAgICAgICBTUFV0aWxzLnNldE11c2ljVm9sdW1uKDApO1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuT05fQVVESU9fQ0hBTkdFRCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVdlYlZpZXdbY2FjaGVdLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wb3B1cFdlYlZpZXcpO1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiUG9wdXBXZWJWaWV3XCIpLnNob3codXJsLCBjYWNoZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVdlYlZpZXdbY2FjaGVdID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYWNoZSA9PSBcIklCQ1wiKSB7XG4gICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5DQUNIRV9JQkMpIHtcbiAgICAgICAgICAgICAgICBTUFV0aWxzLnNldE11c2ljVm9sdW1uKDApO1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuT05fQVVESU9fQ0hBTkdFRCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVdlYlZpZXdbY2FjaGVdLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wb3B1cFdlYlZpZXcpO1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiUG9wdXBXZWJWaWV3XCIpLnNob3codXJsLCBjYWNoZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVdlYlZpZXdbY2FjaGVdID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYWNoZSA9PSBcIldNXCIpIHtcbiAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNBQ0hFX1dNKSB7XG4gICAgICAgICAgICAgICAgU1BVdGlscy5zZXRNdXNpY1ZvbHVtbigwKTtcbiAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLk9OX0FVRElPX0NIQU5HRUQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVXZWJWaWV3W2NhY2hlXS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9wdXBXZWJWaWV3KTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIlBvcHVwV2ViVmlld1wiKS5zaG93KHVybCwgY2FjaGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVXZWJWaWV3W2NhY2hlXSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9wdXBXZWJWaWV3KTtcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJQb3B1cFdlYlZpZXdcIikuc2hvdyh1cmwsIGNhY2hlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYWN0TG9naW5DTUQoaXNQbGF5Tm93ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChBcHAuQVBJX0NNRCwgeyB0OiBcImJsXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwidXBkYXRlSW5mb0NNRDpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFsYW5jZSA9IHJlc1tcImRhdGFcIl1bXCJkYXRhXCJdWzBdW1wiYmV0QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlIDwgMTAwMDAgJiYgaXNQbGF5Tm93ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0UG9wdXBHYW1lVHJhbnNmZXIoXCJDTURcIiwgYmFsYW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfQ01ELCB7IHQ6IFwibGdcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gcmVzW1wiZGF0YVwiXVtcIndlYlJvb3RcIl0gKyBcIi9hdXRoLmFzcHg/bGFuZz12aS1WTiZ1c2VyPVwiICsgcmVzW1wiZGF0YVwiXVtcInVzZXJOYW1lXCJdICsgXCImdG9rZW49XCIgKyByZXNbXCJkYXRhXCJdW1widG9rZW5cIl0gKyBcIiZjdXJyZW5jeT1WRCZ0ZW1wbGF0ZW5hbWU9Ymx1ZSZ2aWV3PXYyXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTW9iaWxlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gcmVzW1wiZGF0YVwiXVtcIm1vYmlsZVJvb3RcIl0gKyBcIi9hdXRoLmFzcHg/bGFuZz12aS1WTiZ1c2VyPVwiICsgcmVzW1wiZGF0YVwiXVtcInVzZXJOYW1lXCJdICsgXCImdG9rZW49XCIgKyByZXNbXCJkYXRhXCJdW1widG9rZW5cIl0gKyBcIiZjdXJyZW5jeT1WRCZ0ZW1wbGF0ZW5hbWU9Ymx1ZSZ2aWV3PXYyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1tcIm1lc3NhZ2VcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJMb2dpbklCQyBlcnI6XCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiTG9naW5JQkMgcmVzOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dBbGVydERpYWxvZyhcIkdhbWUgxJFhbmcgYuG6o28gdHLDrFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWN0TG9naW5TQk8oaXNQbGF5Tm93ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChBcHAuQVBJX1NCTywgeyB0OiBcIkNoZWNrQmFsYW5jZVwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAvL1V0aWxzLkxvZyhcInVwZGF0ZUluZm9TQk86XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAocmVzICE9IG51bGwgJiYgcmVzW1wicmVzXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFsYW5jZSA9IHBhcnNlSW50KHJlc1tcImRhdGFcIl1bXCJiYWxhbmNlXCJdKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2UgPCAxMDAwMCAmJiBpc1BsYXlOb3cgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RQb3B1cEdhbWVUcmFuc2ZlcihcIlNCT1wiLCBiYWxhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9TQk8sIHsgdDogXCJMb2dpblwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIGdjOiAnU3BvcnRzQm9vaycgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcIkxvZ2luIFNCTzpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBcImh0dHBzOlwiICsgcmVzWydkYXRhJ10gKyBcIiZsYW5nPXZpLXZuJm9kZHN0eWxlPU1ZJnRoZW1lPXNibyZkZXZpY2U9XCIgKyAoY2Muc3lzLmlzTmF0aXZlID8gXCJtXCIgOiBcImRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJ1cmw9XCIgKyB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1tcIm1lc3NhZ2VcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dBbGVydERpYWxvZyhcIkdhbWUgxJFhbmcgYuG6o28gdHLDrFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgXG4gICAgYWN0TG9naW5JQkMoaXNQbGF5Tm93ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFDb25maWdzLkxvZ2luLklzTG9naW4pIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25lZWRfbG9naW4nKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChBcHAuQVBJX0lCQywgeyB0OiBcIkNoZWNrQmFsYW5jZVwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAvL1V0aWxzLkxvZyhcInVwZGF0ZUluZm9JQ0I6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhbGFuY2UgPSBwYXJzZUludChyZXNbXCJkYXRhXCJdW1wiYmFsYW5jZVwiXSkgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlIDwgMTAwMDAgJiYgaXNQbGF5Tm93ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0UG9wdXBHYW1lVHJhbnNmZXIoXCJJQkNcIiwgYmFsYW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfSUJDLCB7IHQ6IFwiTG9naW5cIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJjb2RlXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5BcHAuSVNfUFJPID09IHRydWUgJiYgQ29uZmlncy5Mb2dpbi5Vc2VyVHlwZSAhPSBcIjJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gXCJodHRwczovL21rdC5sMDAzMC5pZzEyOC5jb20vZGVwb3NpdF9wcm9jZXNzbG9naW4uYXNweD9sYW5nPXZuJnRva2VuPVwiICsgcmVzW1wiZGF0YVwiXVtcImRhdGFcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNNb2JpbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCJodHRwczovL2lzbWFydC5sMDAzMC5pZzEyOC5jb20vZGVwb3NpdF9wcm9jZXNzbG9naW4uYXNweD9sYW5nPXZuJnRva2VuPVwiICsgcmVzW1wiZGF0YVwiXVtcImRhdGFcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwodXJsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFwiaHR0cDovL3NidGVzdC5sMDAzMC5pZzEyOC5jb20vZGVwb3NpdF9wcm9jZXNzbG9naW4uYXNweD9sYW5nPXZuJnRva2VuPVwiICsgcmVzW1wiZGF0YVwiXVtcImRhdGFcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNNb2JpbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCJodHRwOi8vc21hcnRzYnRlc3QubDAwMzAuaWcxMjguY29tL2RlcG9zaXRfcHJvY2Vzc2xvZ2luLmFzcHg/bGFuZz12biZ0b2tlbj1cIiArIHJlc1tcImRhdGFcIl1bXCJkYXRhXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtZXNzYWdlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dBbGVydERpYWxvZyhcIkdhbWUgxJFhbmcgYuG6o28gdHLDrFwiKTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBhY3RMb2dpbldNKGlzUGxheU5vdyA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9XTSwgeyB0OiBcIkNoZWNrQmFsYW5jZVwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlc1tcImxpc3RcIl1bMF0gPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBiYWxhbmNlID0gcGFyc2VJbnQocmVzW1wibGlzdFwiXVsxXSkgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlIDwgMTAwMDAgJiYgaXNQbGF5Tm93ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0UG9wdXBHYW1lVHJhbnNmZXIoXCJXTVwiLCBiYWxhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9XTSwgeyB0OiBcIkxvZ2luXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNbXCJsaXN0XCJdWzBdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbldlYlZpZXcocmVzW1wibGlzdFwiXVsxXSwgXCJXTVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibXNnXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuU2hvd0FsZXJ0RGlhbG9nKFwiR2FtZSDEkWFuZyBi4bqjbyB0csOsXCIpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc2hvd0dhbWVMaXZlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZUxpdmVDb250cm9sbGVyKSB7XG4gICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGdhbWVMaXZlQ29udHJvbGxlciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiR2FtZUxpdmVDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQoZ2FtZUxpdmVDb250cm9sbGVyLm5vZGUpXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTGl2ZUNvbnRyb2xsZXIgPSBnYW1lTGl2ZUNvbnRyb2xsZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTGl2ZUNvbnRyb2xsZXIuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9HYW1lTGl2ZVwiLCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVMaXZlQ29udHJvbGxlci5zaG93KCk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIGFjdFBvcHVwR2FtZVRyYW5zZmVyKHR5cGVHYW1lLCBiYWxhbmNlID0gbnVsbCkge1xuICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucG9wdXBHYW1lVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9wdXBHYW1lVHJhbnNmZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIkxvYmJ5LlBvcHVwR2FtZVRyYW5zZmVyXCIpO1xuICAgICAgICAgICAgICAgIHBvcHVwR2FtZVRyYW5zZmVyLm5vZGUucGFyZW50ID0gQXBwLmluc3RhbmNlLmNhbnZhcztcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwR2FtZVRyYW5zZmVyID0gcG9wdXBHYW1lVHJhbnNmZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEdhbWVUcmFuc2Zlci5zaG93R2FtZSh0eXBlR2FtZSwgYmFsYW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwR2FtZVRyYW5zZmVyXCIsIGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBHYW1lVHJhbnNmZXIuc2hvd0dhbWUodHlwZUdhbWUsIGJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0TG9naW5BRyhpc1BsYXlOb3cgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9BRywgeyB0OiBcIkdldEJhbGFuY2VcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJsaXN0XCJdWzBdW1wiaW5mb1wiXSA9PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TaG93QWxlcnREaWFsb2coXCJHYW1lIMSRYW5nIGLhuqNvIHRyw6xcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmFsYW5jZSA9IHBhcnNlSW50KHJlcy5saXN0WzBdW1wiaW5mb1wiXSkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZSA8IDEwMDAwICYmIGlzUGxheU5vdyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RQb3B1cEdhbWVUcmFuc2ZlcihcIkFHXCIsIGJhbGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9BRywgeyB0OiBcIkZvcndhcmRcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJMb2dpbkFHIGVycjpcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiTG9naW5BRyByZXM6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzW1wicmVzXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1tcImxpc3RcIl0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5XZWJWaWV3KHJlc1tcImxpc3RcIl1bMF0sIFwiQUdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibXNnXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93QWxlcnREaWFsb2coXCJHYW1lIMSRYW5nIGLhuqNvIHRyw6xcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGFjdExvZ2luRWJldChpc1BsYXlOb3cgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9FQkVULCB7IHQ6IFwiQ2hlY2tCYWxhbmNlXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgaWYgKHJlc1tcInJlc1wiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcImRhdGFcIl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dBbGVydERpYWxvZyhcIkdhbWUgxJFhbmcgYuG6o28gdHLDrFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiYWxhbmNlID0gcGFyc2VJbnQocmVzLmRhdGFbXCJtb25leVwiXSkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZSA8IDEwMDAwICYmIGlzUGxheU5vdyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RQb3B1cEdhbWVUcmFuc2ZlcihcIkVCRVRcIiwgYmFsYW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIdHRwLmdldChBcHAuQVBJX0VCRVQsIHsgdDogXCJMb2dpblwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzW1wicmVzXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly96Zi5saXZlLWIyYi5jb20vaDUvNzI4OTVjP3VzZXJuYW1lPSVzJmFjY2Vzc1Rva2VuPSVzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKGNjLmpzLmZvcm1hdFN0cih1cmwsIHJlc1snZGF0YSddWydlYmV0aWQnXSwgcmVzWydkYXRhJ11bJ3Rva2VuJ10pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtc2dcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dBbGVydERpYWxvZyhcIkdhbWUgxJFhbmcgYuG6o28gdHLDrFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgYWN0TG9naW5TaG9vdEZpc2goaXNQbGF5Tm93ID0gZmFsc2UsIGJhbGFuY2UgPSAwKSB7XG4gICAgICAgIC8vIGZsb3c6Q2hlY2sgQmFsYW5jZS0+c2hvdyBwb3B1cC0+Z290byBnYW1lXG4gICAgICAgIGlmICghQ29uZmlncy5Mb2dpbi5Jc0xvZ2luKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9uZWVkX2xvZ2luJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNQbGF5Tm93KSB7XG4gICAgICAgICAgICB0aGlzLmFjdFBvcHVwR2FtZVRyYW5zZmVyKFwiRklTSFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiAyMDIxLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIG1uOiBiYWxhbmNlIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJSZXMgTG9naW4gU2hvb3RGaXNoOlwiLCByZXMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJlcnJvckNvZGVcIl0gPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJMb2dpbiBTdWNjZXNcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAhPSBudWxsICYmIHJlcy5kYXRhICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuV2ViVmlldyhyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1tcIm1zZ1wiXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcmVtb3ZlQWxsV2ViVmlldygpIHtcbiAgICAgICAgQ29uZmlncy5Mb2dpbi5DQUNIRV9BRyA9IGZhbHNlO1xuICAgICAgICBDb25maWdzLkxvZ2luLkNBQ0hFX0lCQyA9IGZhbHNlO1xuICAgICAgICBDb25maWdzLkxvZ2luLkNBQ0hFX1dNID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGVXZWJWaWV3KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVdlYlZpZXdba2V5XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVdlYlZpZXdba2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuR2FtZShidW5kbGVOYW1lLCBzY2VuZU5hbWUpIHtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyh0cnVlLCAtMSk7XG4gICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFNjZW5lR2FtZShidW5kbGVOYW1lLCBzY2VuZU5hbWUsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgfSwgYnVuZGxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG9wZW5NaW5pR2FtZUJhdUN1YShidW5kbGVOYW1lLCBwcmVmYWJOYW1lKSB7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcodHJ1ZSwgLTEpO1xuICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKGJ1bmRsZU5hbWUsIHByZWZhYk5hbWUsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgfSwgKHByZWZhYiwgYnVuZGxlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhdUN1YSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5jYW52YXM7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJhdUN1YSA9IG5vZGUuZ2V0Q29tcG9uZW50KE1pbmlHYW1lKTtcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcIkJhdUN1YS5CYXVDdWFDb250cm9sbGVyXCIpLmJhdWN1YUJ1bmRsZSA9IGJ1bmRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hvd0dhbWVNaW5pKFwiQmF1Q3VhXCIsIHRoaXMuYmF1Q3VhLm5vZGUpO1xuICAgICAgICAgICAgdGhpcy5iYXVDdWEuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG9wZW5NaW5pR2FtZVRhaVhpdURvdWJsZShidW5kbGVOYW1lLCBwcmVmYWJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRhaVhpdURvdWJsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKHRydWUsIC0xKTtcbiAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYkdhbWUoYnVuZGxlTmFtZSwgcHJlZmFiTmFtZSwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFpWGl1RG91YmxlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuY2FudmFzO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFpWGl1RG91YmxlID0gbm9kZS5nZXRDb21wb25lbnQoTWluaUdhbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lTWluaShcIlRhaVhpdVwiLCB0aGlzLnRhaVhpdURvdWJsZS5ub2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhaVhpdURvdWJsZS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0dhbWVNaW5pKFwiVGFpWGl1XCIsIHRoaXMudGFpWGl1RG91YmxlLm5vZGUpO1xuICAgICAgICAgICAgdGhpcy50YWlYaXVEb3VibGUuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBvcGVuTWluaUdhbWVUYWlYaXVTaWV1VG9jKGJ1bmRsZU5hbWUsIHByZWZhYk5hbWUpIHtcbiAgICAgICAgVGFpWGl1U1ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhaVhpdVNpZXVUb2MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcodHJ1ZSwgLTEpO1xuICAgICAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYkdhbWUoYnVuZGxlTmFtZSwgcHJlZmFiTmFtZSwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhaVhpdVNpZXVUb2MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm1pbmlHYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFpWGl1U2lldVRvYyA9IG5vZGUuZ2V0Q29tcG9uZW50KE1pbmlHYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lTWluaShcIlRhaVhpdVNpZXVUb2NcIiwgdGhpcy50YWlYaXVTaWV1VG9jLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhaVhpdVNpZXVUb2Muc2hvdygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lTWluaShcIlRhaVhpdVNpZXVUb2NcIiwgdGhpcy50YWlYaXVTaWV1VG9jLm5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFpWGl1U2lldVRvYy5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIG9wZW5NaW5pR2FtZVRhaVhpdU1ENShidW5kbGVOYW1lLCBwcmVmYWJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLlRhaVhpdU1ENSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKHRydWUsIC0xKTtcbiAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYkdhbWUoYnVuZGxlTmFtZSwgcHJlZmFiTmFtZSwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuVGFpWGl1TUQ1ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuY2FudmFzO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGFpWGl1TUQ1ID0gbm9kZS5nZXRDb21wb25lbnQoTWluaUdhbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lTWluaShcIlRhaVhpdU1ENVwiLCB0aGlzLlRhaVhpdU1ENS5ub2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLlRhaVhpdU1ENS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0dhbWVNaW5pKFwiVGFpWGl1TUQ1XCIsIHRoaXMuVGFpWGl1TUQ1Lm5vZGUpO1xuICAgICAgICAgICAgdGhpcy5UYWlYaXVNRDUuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gfVxuICAgIH1cblx0b3Blbk1pbmlHYW1lQ2FvVGhhcChidW5kbGVOYW1lLCBwcmVmYWJOYW1lKSB7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcodHJ1ZSwgLTEpO1xuICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKGJ1bmRsZU5hbWUsIHByZWZhYk5hbWUsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FvVGhhcCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5taW5pR2FtZTtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYW9UaGFwID0gbm9kZS5nZXRDb21wb25lbnQoTWluaUdhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYW9UaGFwLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0dhbWVNaW5pKFwiQ2FvVGhhcFwiLCB0aGlzLmNhb1RoYXAubm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgb3Blbk1pbmlHYW1lU2xvdDN4MyhidW5kbGVOYW1lLCBwcmVmYWJOYW1lKSB7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcodHJ1ZSwgLTEpO1xuICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKGJ1bmRsZU5hbWUsIHByZWZhYk5hbWUsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2xvdDN4MyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5taW5pR2FtZTtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zbG90M3gzID0gbm9kZS5nZXRDb21wb25lbnQoTWluaUdhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zbG90M3gzLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0dhbWVNaW5pKFwiU2xvdDN4M1wiLCB0aGlzLnNsb3QzeDMubm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIG9wZW5NaW5pR2FtZVNsb3QzeDNHZW0oYnVuZGxlTmFtZSwgcHJlZmFiTmFtZSkge1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nKHRydWUsIC0xKTtcbiAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShidW5kbGVOYW1lLCBwcmVmYWJOYW1lLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNsb3QzeDNHZW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubWluaUdhbWU7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2xvdDN4M0dlbSA9IG5vZGUuZ2V0Q29tcG9uZW50KE1pbmlHYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2xvdDN4M0dlbS5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dHYW1lTWluaShcIlNsb3QzeDNHZW1cIiwgdGhpcy5zbG90M3gzR2VtLm5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG9wZW5NaW5pR2FtZU1pbmlQb2tlcihidW5kbGVOYW1lLCBwcmVmYWJOYW1lKSB7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcodHJ1ZSwgLTEpO1xuICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKGJ1bmRsZU5hbWUsIHByZWZhYk5hbWUsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMubWluaVBva2VyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm1pbmlHYW1lO1xuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5pUG9rZXIgPSBub2RlLmdldENvbXBvbmVudChNaW5pR2FtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1pbmlQb2tlci5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dHYW1lTWluaShcIk1pbmlQb2tlclwiLCB0aGlzLm1pbmlQb2tlci5ub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBvcGVuTWluaUdhbWVPbmVUdVRpKGJ1bmRsZU5hbWUsIHByZWZhYk5hbWUpIHtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyh0cnVlLCAtMSk7XG5cbiAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShidW5kbGVOYW1lLCBwcmVmYWJOYW1lLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9hblR1VGkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubWluaUdhbWU7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9hblR1VGkgPSBub2RlLmdldENvbXBvbmVudChNaW5pR2FtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9hblR1VGkuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBwdWJsaWMgb3BlblRlbGVncmFtKG5hbWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbmFtZSA9IENvbmZpZ3MuQXBwLmdldExpbmtUZWxlZ3JhbSgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cmwgPSBcImh0dHA6Ly93d3cudGVsZWdyYW0ubWUvXCIgKyBuYW1lO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICB1cmwgPSBcInRnOi8vcmVzb2x2ZT9kb21haW49XCIgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKHVybCk7XG4gICAgfVxuICAgIHB1YmxpYyBTaG93QWxlcnREaWFsb2cobWVzczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWxlcnREaWFsb2cuc2hvd01zZyhtZXNzKTtcbiAgICB9XG4gICAgcHVibGljIHNob3dDb25maXJtRGlhbG9nKG1lc3MsIGNiLCBjYW5DbG9zZSkge1xuICAgICAgICB0aGlzLmFsZXJ0RGlhbG9nLnNob3dNc2dXaXRoT25EaXNtaXNzZWQobWVzcywgY2IsIGNhbkNsb3NlKVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd1RvYXN0KG1zZykge1xuICAgICAgICB0aGlzLmFsZXJ0VG9hc3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGVydFRvYXN0LnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSA5O1xuICAgICAgICB0aGlzLmFsZXJ0VG9hc3QuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gbXNnO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5hbGVydFRvYXN0KTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5hbGVydFRvYXN0KS5zZXQoeyB5OiAwIH0pLnRvKDIuMCwgeyB5OiAxMDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGVydFRvYXN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VGV4dExhbmcoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmdldFN0cmluZyhrZXkpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRKUEdhbWVJRChnYW1lTmFtZSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBnYW1lSUQgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGdhbWVOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiVEhBTlRBSVwiOlxuICAgICAgICAgICAgICAgIGdhbWVJRCA9IFwic3BhcnRhblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRVQVhFXCI6XG4gICAgICAgICAgICAgICAgZ2FtZUlEID0gXCJhdWRpdGlvblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNISUVNVElOSFwiOlxuICAgICAgICAgICAgICAgIGdhbWVJRCA9IFwiY2hpZW10aW5oXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVEhFVEhBT1wiOlxuICAgICAgICAgICAgICAgIGdhbWVJRCA9IFwibWF5YmFjaFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNISU1ESUVOXCI6XG4gICAgICAgICAgICAgICAgZ2FtZUlEID0gXCJ0YW1odW5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQklUQ09JTlwiOlxuICAgICAgICAgICAgICAgIGdhbWVJRCA9IFwiYmVubGV5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVEhBTkJBSVwiOlxuICAgICAgICAgICAgICAgIGdhbWVJRCA9IFwicm9sbFJveWVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJCSUtJTklcIjpcbiAgICAgICAgICAgICAgICBnYW1lSUQgPSBcImJpa2luaVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlBJS0FDSFVcIjpcbiAgICAgICAgICAgICAgICBnYW1lSUQgPSBcInBva2Vtb25cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNSU5JUE9LRVJcIjpcbiAgICAgICAgICAgICAgICBnYW1lSUQgPSBcIm1pbmlwb2tlclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlRBSVhJVVwiOlxuICAgICAgICAgICAgICAgIGdhbWVJRCA9IFwiVEFJX1hJVVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lSUQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRHYW1lTmFtZShnYW1lSUQpIHtcbiAgICAgICAgbGV0IGdhbWVOYW1lID0gZ2FtZUlEO1xuICAgICAgICBzd2l0Y2ggKGdhbWVJRCkge1xuICAgICAgICAgICAgY2FzZSAnYXVkaXRpb24nOlxuICAgICAgICAgICAgICAgIGdhbWVOYW1lID0gXCLEkHVhIFhlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcGFydGFuJzpcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwiVGjhuqduIFTDoGlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bva2Vtb24nOlxuICAgICAgICAgICAgICAgIGdhbWVOYW1lID0gXCJYw6huZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYmVubGV5JzpcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwiQml0Y29pblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWF5YmFjaCc6XG4gICAgICAgICAgICAgICAgZ2FtZU5hbWUgPSBcIlRo4buDIFRoYW9cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RhbWh1bmcnOlxuICAgICAgICAgICAgICAgIGdhbWVOYW1lID0gXCJDaGltIMSQacOqblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hpZW10aW5oJzpcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwiQ2hpw6ptIFRpbmhcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jpa2luaSc6XG4gICAgICAgICAgICAgICAgZ2FtZU5hbWUgPSBcIkJpa2luaVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWluaXBva2VyJzpcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwiTWluaSBQb2tlclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2FvdGhhcCc6XG4gICAgICAgICAgICAgICAgZ2FtZU5hbWUgPSBcIkNhbyBUaOG6pXBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JvbGxSb3llJzpcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwiVGjhuqduIELDoGlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dhbGF4eSc6XG4gICAgICAgICAgICAgICAgZ2FtZU5hbWUgPSBcIkdlbVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVEFJX1hJVSc6XG4gICAgICAgICAgICAgICAgZ2FtZU5hbWUgPSBcIlTDoGkgWOG7iXVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZU5hbWU7XG4gICAgfVxuICAgIGNoZWNrVGltZUxpeGkoKSB7XG4gICAgICAgIGxldCB0aW1lQ3VyZW50ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHRpbWVMaXhpID0gbmV3IERhdGUodGltZUN1cmVudC5nZXRGdWxsWWVhcigpLCB0aW1lQ3VyZW50LmdldE1vbnRoKCksIHRpbWVDdXJlbnQuZ2V0RGF0ZSgpLCAxNik7XG4gICAgICAgIGxldCBkZWx0YVRpbWUgPSB0aW1lTGl4aS5nZXRUaW1lKCkgLSB0aW1lQ3VyZW50LmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGRlbHRhSG91ciA9IE1hdGguZmxvb3IoZGVsdGFUaW1lIC8gMTAwMCAvIDM2MDApO1xuICAgICAgICBsZXQgaG91ciA9IGRlbHRhSG91ciA+IDkgPyBkZWx0YUhvdXIgOiBcIjBcIiArIGRlbHRhSG91cjtcbiAgICAgICAgbGV0IGRlbHRhTWludXRlcyA9IE1hdGguZmxvb3IoKGRlbHRhVGltZSAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgIGxldCBtaW51dGVzID0gZGVsdGFNaW51dGVzID4gOSA/IGRlbHRhTWludXRlcyA6IFwiMFwiICsgZGVsdGFNaW51dGVzO1xuICAgICAgICBsZXQgbXNnID0gXCJT4buxIGtp4buHbiBcXFwiTMOsIFjDrCBHaeG7nSBWw6BuZ1xcXCIgc+G6vSBkaeG7hW4gcmEgc2F1OiAlc2ggJXMgcGjDunQgbuG7r2EhXCI7XG4gICAgICAgIG1zZyA9IGNjLmpzLmZvcm1hdFN0cihtc2csIGhvdXIsIG1pbnV0ZXMpO1xuICAgICAgICBpZiAoZGVsdGFUaW1lID4gNjAwMDApIHtcbiAgICAgICAgICAgIHRoaXMudWlOb3RpZnlKYWNrcG90LmFkZE5vdGlmeSh7IG1lc3NhZ2U6IG1zZyB9KTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVGltZUxpeGkoKTtcbiAgICAgICAgICAgIH0sIDE4MDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdEdldEV2ZW50TGl4aSgpIHtcbiAgICAgICAgLy8gaHR0cDovLzQzLjEyOC4yNy4zNTo4MDgxL2FwaT9jPTIwMzYmbm49QmlnQmlyZCZhdD05MzUwMzA2YTI0Yzc4MGFmNDY1MDk3NTBiYTRiNTBhYiZhYz1nZXRcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAyMDM2LCBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIFwiYXRcIjogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiwgXCJhY1wiOiBcImdldFwiIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzWydkYXRhJ10gPT0gXCJOb3QgcGFzc2VkIGNvbmRpdGlvbnNcIikge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiUXXDvSBraMOhY2gga2jDtG5nIMSR4bunIMSRaeG7gXUga2nhu4duIHRoYW0gZ2lhIHPhu7Ega2nhu4duIFxcXCJMw6wgWMOsIEdp4budIFbDoG5nXFxcIlxcblZ1aSBsw7JuZyDEkeG7jWMgdGjhu4MgbOG7hyBob+G6t2MgbGnDqm4gaOG7hyBDU0tIIVwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc1snZGF0YSddID09IFwiUmVjZWl2ZWQgYm9udXNcIiB8fCByZXNbJ2Vycm9yQ29kZSddID09IFwiMTAwM1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJRdcO9IGtow6FjaCBcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RTaG93UG9wdXBFdmVudExpeGkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGFjdFNob3dQb3B1cEV2ZW50TGl4aSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBvcHVwRXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwRXZlbnQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlBvcHVwRXZlbnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50Lm5vZGUucGFyZW50ID0gQXBwLmluc3RhbmNlLm5vZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50LnR5cGUgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBFdmVudC5zaG93cFBvcHVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwRXZlbnRcIiwgY2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50LnR5cGUgPSAxO1xuICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50LnNob3dwUG9wdXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RTaG93UG9wdXBSdWxlTGl4aSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBvcHVwRXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBjYiA9IChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwRXZlbnQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlBvcHVwRXZlbnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50Lm5vZGUucGFyZW50ID0gQXBwLmluc3RhbmNlLm5vZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50LnR5cGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBFdmVudC5zaG93cFBvcHVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwRXZlbnRcIiwgY2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50LnR5cGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5wb3B1cEV2ZW50LnNob3dwUG9wdXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19