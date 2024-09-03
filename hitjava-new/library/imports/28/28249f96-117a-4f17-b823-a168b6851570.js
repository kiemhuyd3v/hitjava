"use strict";
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