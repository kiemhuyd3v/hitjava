
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.Play.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fa1efbhuJLl5N2iupithus', 'ShootFish.Play');
// ShootFish/ShootFishScript/ShootFish.Play.ts

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
var ShootFish_Player_1 = require("./ShootFish.Player");
var ShootFish_Bullet_1 = require("./ShootFish.Bullet");
var ShootFish_Fish_1 = require("./ShootFish.Fish");
var Configs_1 = require("../../Loading/src/Configs");
var ShootFish_CoinEffect_1 = require("./ShootFish.CoinEffect");
var ShootFish_EffectJackpot_1 = require("./ShootFish.EffectJackpot");
var ShootFish_Lobby_1 = require("./ShootFish.Lobby");
var ShootFish_PanelMenu_1 = require("./ShootFish.PanelMenu");
var ShootFish_PopupGuide_1 = require("./ShootFish.PopupGuide");
var ShootFish_EffectBigWin_1 = require("./ShootFish.EffectBigWin");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Play = /** @class */ (function (_super) {
    __extends(Play, _super);
    function Play() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lobby = null;
        _this.loading = null;
        _this.touchPad = null;
        _this.sprFramesBullet = [];
        _this.bulletTemplate = null;
        _this.players = [];
        _this.fishsAnim = [];
        _this.fishsNode = null;
        _this.fishTemplate = null;
        _this.coinEffectTemplate = null;
        _this.lblJackpot = null;
        _this.toggleAuto = null;
        _this.target = null;
        _this.waveState = null;
        _this.btnFastShoot = null;
        _this.progressFastShoot = null;
        _this.lblFastShootTime = null;
        _this.btnTargetFish = null;
        _this.progressTargetFish = null;
        _this.lblTargetFishTime = null;
        //effect
        _this.effectJackpot = null;
        _this.effectBigWin = null;
        _this.effectMegaWin = null;
        _this.panelMenu = null;
        _this.popupGuide = null;
        _this.lblPing = null;
        _this.lblServerTime = null;
        //sound
        _this.soundShoot = null;
        _this.soundCoin = null;
        _this.soundBigWin = null;
        _this.soundBg = null;
        _this.soundOff = null;
        _this.musicOff = null;
        _this.mePlayer = null;
        _this.bullets = [];
        _this.fishs = [];
        _this.coinEffects = [];
        _this.isStateGeted = false;
        _this.inited = false;
        _this.lastUpdateTime = -1;
        _this.roomId = 0;
        _this.listBet = [];
        _this.listJackpot = [];
        _this.betIdx = 0;
        _this.mapPlayersIdx = [
            [0, 1, 2, 3],
            [1, 0, 3, 2],
            [2, 3, 0, 1],
            [3, 2, 1, 0]
        ];
        _this.shootInterval = 0.25;
        _this.fastShootInterval = 0.13;
        _this.curShootInterval = 0;
        _this.isShoot = false;
        _this.isFastShoot = false;
        _this.isTargetFish = false;
        _this.targetFish = null;
        _this.intervalFindTargetFish = 2;
        _this.curIntervalFindTargetFish = 0;
        _this.curTimeFastShootCountdown = 0;
        _this.curTimeTargetFishCountdown = 0;
        _this.tweens = new Array();
        _this.remoteMusicBackground = null;
        _this.musicState = 1;
        _this.soundState = 1;
        return _this;
    }
    Play_1 = Play;
    Play.prototype.init = function () {
        if (this.inited)
            return;
        this.mePlayer = this.players[0];
    };
    Play.prototype.onLoad = function () {
        Play_1.instance = this;
    };
    Play.prototype.start = function () {
        var _this = this;
        this.bulletTemplate.active = false;
        this.touchPad.on(cc.Node.EventType.TOUCH_START, function (event) {
            var touchPos = event.getLocation();
            _this.mePlayer.rotateGun(touchPos);
            _this.isShoot = true;
        }, this.touchPad);
        this.touchPad.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var touchPos = event.getLocation();
            _this.mePlayer.rotateGun(touchPos);
        }, this.touchPad);
        this.touchPad.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.isShoot = false;
        }, this.touchPad);
        this.touchPad.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.isShoot = false;
        }, this.touchPad);
        this.toggleAuto.node.on("toggle", function () {
            if (_this.toggleAuto.isChecked) {
                _this.touchPad.active = false;
                _this.curIntervalFindTargetFish = _this.intervalFindTargetFish;
                _this.isShoot = true;
                _this.findTargetFishInWorld();
            }
            else {
                _this.stopAutoShoot();
            }
        });
        ShootFishNetworkClient_1.default.getInstance().addListener(function (route, data) {
            if (!_this.node.active || !_this.isStateGeted)
                return;
            switch (route) {
                case "OnUpdateJackpot": {
                    ////  cc.log("route: " + route + " data: "+ JSON.stringify(data));
                    _this.listJackpot.length = 0;
                    _this.listJackpot.push(data[_this.roomId + "1"]);
                    _this.listJackpot.push(data[_this.roomId + "2"]);
                    _this.listJackpot.push(data[_this.roomId + "3"]);
                    _this.listJackpot.push(data[_this.roomId + "4"]);
                    Tween_1.default.numberTo(_this.lblJackpot, _this.listJackpot[_this.betIdx], 0.3);
                    break;
                }
                case "OnEnterPlayer": {
                    ////  cc.log("route: " + route + " data: "+ JSON.stringify(data));
                    var playerData = data["data"];
                    var localPos = _this.mapPlayersIdx[_this.mePlayer.serverPos][playerData["posIndex"]];
                    var player = _this.players[localPos];
                    player.set(playerData["id"], playerData["playerId"], playerData["nickname"], playerData["cash"], playerData["avatar"]);
                    player.serverPos = playerData["posIndex"];
                    player.lblBet.string = Utils_1.default.formatNumberMin(_this.listBet[_this.betIdx]);
                    break;
                }
                case "OnLeavePlayer": {
                    // //  cc.log("route: " + route + " data: " + JSON.stringify(data));
                    var username = data["playerId"];
                    if (username == Configs_1.default.Login.UsernameFish) {
                        if (data["reason"] == 1) {
                            App_1.default.instance.alertDialog.showMsg("Bạn được mời ra khỏi phòng do không thao tác trong thời gian dài.");
                        }
                        _this.back();
                    }
                    var player = _this.getPlayerByUsername(username);
                    if (player == null)
                        break;
                    player.leave();
                    break;
                }
                case "OnUpdateObject": {
                    ////  cc.log("route: " + route + " data: "+ JSON.stringify(data));
                    var fishId = data["id"];
                    var fish = _this.getFishById(fishId);
                    if (fish == null) {
                        //  //  cc.log("can't find fish " + fishId);
                        break;
                    }
                    fish.setData(data);
                    break;
                }
                case "OnUpdateCash": {
                    // //  cc.log("route: " + route + " data: "+ JSON.stringify(data));
                    var username = data['playerId'];
                    var coin = Number(data['cash']);
                    var scr = data['scr'];
                    if (username == Configs_1.default.Login.UsernameFish) {
                        Configs_1.default.Login.CoinFish = coin;
                    }
                    var player = _this.getPlayerByUsername(username);
                    if (player == null)
                        break;
                    player.coin = coin;
                    player.lblCoin.string = Utils_1.default.formatNumber(coin);
                    switch (scr) {
                        case 2:
                            //jackpot
                            _this.effectBigWin.show(false);
                            _this.effectMegaWin.show(false);
                            _this.effectJackpot.show(true, player.nickname, coin);
                            break;
                        case 3:
                            //ech ngam vang
                            break;
                    }
                    break;
                }
                case "OnObjectDie": {
                    ////  cc.log("route: " + route + " data: "+ JSON.stringify(data));
                    var fishId = data["id"];
                    var coin = data["value"];
                    var playerId = data["playerId"];
                    var fish = _this.getFishById(fishId);
                    if (fish == null)
                        break;
                    fish.die();
                    //reset targetFish
                    if (fish == _this.targetFish) {
                        _this.exploreAllBulletWithTargetFishId(_this.targetFish.id);
                        _this.target.active = false;
                        _this.targetFish = null;
                        _this.curIntervalFindTargetFish = 0;
                    }
                    var player = _this.getPlayerByUsername(playerId);
                    if (player == null)
                        break;
                    //coin effect
                    var coinEffect = _this.getCoinEffect();
                    coinEffect.run(coin, new cc.Vec2(fish.node.position.x, fish.node.position.y), new cc.Vec2(player.node.position.x, player.node.position.y));
                    if (_this.soundState == 1) {
                        cc.audioEngine.play(_this.soundCoin, false, 1);
                    }
                    switch (fish.type) {
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                            if (!_this.effectJackpot.node.active)
                                _this.effectMegaWin.show(true, player.nickname, coin);
                            break;
                        case 22:
                        case 23:
                        case 24:
                            if (!_this.effectJackpot.node.active)
                                _this.effectBigWin.show(true, player.nickname, coin);
                            break;
                        case 10:
                            //an than tai
                            break;
                    }
                    break;
                }
                case "OnShoot": {
                    // //  cc.log("route: " + route + " data: " + JSON.stringify(data));
                    var username = data["playerId"];
                    var betIdx = Number(data['type']) - 1;
                    var rad = data['rad'];
                    var target = Number(data["target"]);
                    if (username == Configs_1.default.Login.UsernameFish)
                        break;
                    var player = _this.getPlayerByUsername(username);
                    if (player == null)
                        break;
                    var radByMe = rad;
                    switch (_this.mePlayer.serverPos) {
                        case 0:
                            radByMe = rad;
                            break;
                        case 1:
                            radByMe = Math.PI - rad;
                            break;
                        case 2:
                            radByMe = rad - Math.PI;
                            break;
                        case 3:
                            radByMe = -rad;
                            break;
                    }
                    player.lblBet.string = Utils_1.default.formatNumberMin(_this.listBet[betIdx]);
                    player.gunRotate.angle = radByMe * Utils_1.default.Rad2Deg;
                    player.setGun(betIdx);
                    player.shoot();
                    var bullet = _this.getBullet();
                    bullet.targetFishId = target;
                    bullet.bullet.getComponent(cc.Sprite).spriteFrame = _this.sprFramesBullet[betIdx];
                    bullet.node.angle = player.gunRotate.angle;
                    var pos = bullet.node.parent.convertToNodeSpaceAR(player.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO));
                    pos.x += Utils_1.default.degreesToVec2(bullet.node.angle).x * 90;
                    pos.y += Utils_1.default.degreesToVec2(bullet.node.angle).y * 90;
                    bullet.node.setPosition(pos);
                    bullet.run();
                    break;
                }
                case "OnChat": {
                    ////  cc.log("route: " + route + " data: "+ JSON.stringify(data));
                    break;
                }
                case "OnNewState": {
                    ////  cc.log("route: " + route + " data: "+ JSON.stringify(data));
                    switch (data['state']) {
                        case 3: {
                            //ca tran
                            _this.waveState.stopAllActions();
                            _this.waveState.active = true;
                            var pos_1 = _this.waveState.position;
                            pos_1.x = 1400;
                            _this.waveState.position = pos_1;
                            pos_1.x = -1400;
                            _this.waveState.runAction(cc.sequence(cc.moveTo(1, new cc.Vec2(pos_1.x, pos_1.y)), cc.callFunc(function () {
                                _this.waveState.active = false;
                            })));
                            break;
                        }
                    }
                    break;
                }
                case "OnJackpot": {
                    ////  cc.log("route: " + route + " data: "+ JSON.stringify(data));
                    var nickname = data['nickname'];
                    var value = data['value'];
                    var roomIdx = data['tableIndex'];
                    var roomName = "Phòng 1";
                    switch (roomIdx) {
                        case 2:
                            roomName = "Phòng 2";
                            break;
                        case 3:
                            roomName = "Phòng 3";
                            break;
                    }
                    var msg = "Chúc mừng \"" + nickname + "\" đã săn được " + Utils_1.default.formatNumber(value) + " Xu trong " + roomName + ".";
                    break;
                }
                default:
                    // //  cc.log("====route: " + route);
                    break;
            }
        }, this);
        this.init();
        //setting music
        this.checkMusicOnStart();
        this.checkSoundOnStart();
    };
    Play.prototype.checkMusicOnStart = function () {
        var musicSave = cc.sys.localStorage.getItem("music_fish_shot");
        if (musicSave != null) {
            this.musicState = parseInt(musicSave);
        }
        else {
            this.musicState = 1;
            cc.sys.localStorage.setItem("music_fish_shot", "1");
        }
        if (this.musicState == 0) {
            this.musicOff.active = true;
        }
        else {
            this.musicOff.active = false;
        }
        if (this.musicState == 1) {
            this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
        }
    };
    Play.prototype.checkSoundOnStart = function () {
        var soundSave = cc.sys.localStorage.getItem("sound_fish_shot");
        if (soundSave != null) {
            this.soundState = parseInt(soundSave);
        }
        else {
            this.soundState = 1;
            cc.sys.localStorage.setItem("sound_fish_shot", "1");
        }
        if (this.soundState == 0) {
            this.soundOff.active = true;
        }
        else {
            this.soundOff.active = false;
        }
    };
    Play.prototype.settingMusic = function () {
        //  cc.log(this.musicOff.active);
        this.musicOff.active = !this.musicOff.active;
        if (this.musicOff.active) {
            cc.audioEngine.stop(this.remoteMusicBackground);
            this.musicState = 0;
        }
        else {
            this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
            this.musicState = 1;
        }
        cc.sys.localStorage.setItem("music_fish_shot", "" + this.musicState);
    };
    Play.prototype.settingSound = function () {
        //  cc.log(this.soundOff.active);
        this.soundOff.active = !this.soundOff.active;
        if (this.soundOff.active) {
            this.soundState = 0;
        }
        else {
            this.soundState = 1;
        }
        cc.sys.localStorage.setItem("sound_fish_shot", "" + this.soundState);
    };
    Play.prototype.onDisable = function () {
        this.tweens.forEach(function (element) {
            element.stop();
        });
    };
    Play.prototype.onDestroy = function () {
        this.tweens.forEach(function (element) {
            element.stop();
        });
    };
    Play.prototype.update = function (dt) {
        if (this.lblPing != null) {
            this.lblPing.string = ShootFishNetworkClient_1.default.PING + "ms";
        }
        if (this.lblServerTime != null && this.lblServerTime.node.active) {
            this.lblServerTime.string = "t: " + ShootFishNetworkClient_1.default.systemCurrentTimeMillis() + " d: " + ShootFishNetworkClient_1.default.TIME_DISTANCE + " mp: " + ShootFishNetworkClient_1.default.MIN_PING;
        }
        var now = ShootFishNetworkClient_1.default.systemCurrentTimeMillis();
        if (this.isStateGeted && this.lastUpdateTime > 0 && now - this.lastUpdateTime > 500) {
            //  cc.log("onresume getstate");
            this.getState(false);
        }
        this.lastUpdateTime = now;
        if (this.curTimeFastShootCountdown > 0) {
            this.curTimeFastShootCountdown = Math.max(0, this.curTimeFastShootCountdown - dt);
            this.lblFastShootTime.string = Math.round(this.curTimeFastShootCountdown) + "s";
            if (this.curTimeFastShootCountdown == 0) {
                this.lblFastShootTime.node.active = false;
                this.btnFastShoot.enabled = true;
            }
        }
        if (this.curTimeTargetFishCountdown > 0) {
            this.curTimeTargetFishCountdown = Math.max(0, this.curTimeTargetFishCountdown - dt);
            this.lblTargetFishTime.string = Math.round(this.curTimeTargetFishCountdown) + "s";
            if (this.curTimeTargetFishCountdown == 0) {
                this.lblTargetFishTime.node.active = false;
                this.btnTargetFish.enabled = true;
            }
        }
        this.updateShoot(dt);
        //update bullets
        for (var i = 0, c = this.bullets.length; i < c; i++) {
            var bulet = this.bullets[i];
            bulet.updateRealTime(dt);
        }
        //update fishs
        var listFishPoly = new Array();
        for (var i = 0, c = this.fishs.length; i < c; i++) {
            var fish_1 = this.fishs[i];
            fish_1.updateRealTime(dt);
            if (fish_1.node.active && Math.abs(fish_1.node.x) < 640 * 1.1 && Math.abs(fish_1.node.y) < 360 * 1.1) {
                listFishPoly.push(fish_1.getPolygon());
            }
            else {
                listFishPoly.push(null);
            }
        }
        //check collision
        for (var i = 0, cBullet = this.bullets.length; i < cBullet; i++) {
            var bullet = this.bullets[i];
            if (!bullet.node.active || bullet.isExploring || bullet.isExplored)
                continue;
            var bulletCircle = bullet.getCircle();
            for (var j = 0, cFish = this.fishs.length; j < cFish; j++) {
                var fish = this.fishs[j];
                if (listFishPoly[j] == null)
                    continue;
                if (bullet.targetFishId > 0 && bullet.targetFishId != fish.id)
                    continue;
                var isCollision = SAT.testCirclePolygon(bulletCircle, listFishPoly[j]);
                if (isCollision) {
                    bullet.explore();
                    fish.hurt();
                    break;
                }
            }
        }
        listFishPoly.length = 0; //clear memory
    };
    Play.prototype.play = function () {
        var _this = this;
        this.isStateGeted = false;
        this.resetView();
        ShootFishNetworkClient_1.default.getInstance().ping(function () {
            ShootFishNetworkClient_1.default.getInstance().ping(function () {
                ShootFishNetworkClient_1.default.getInstance().ping(function () {
                    //  cc.log(this.roomId);
                    ShootFishNetworkClient_1.default.getInstance().request("play", {
                        "playerId": Configs_1.default.Login.UsernameFish,
                        "password": Configs_1.default.Login.PasswordFish,
                        "index": _this.roomId,
                    }, function (res) {
                        //  cc.log(res);
                        if (!res["ok"]) {
                            switch (res["err"]) {
                                case 4:
                                    App_1.default.instance.confirmDialog.show2("Số dư không đủ vui lòng nạp thêm.", function (isConfirm) {
                                        if (isConfirm) {
                                            ShootFish_Lobby_1.default.instance.popupCoinTransfer.show();
                                        }
                                    });
                                    break;
                                case 1:
                                    ShootFishNetworkClient_1.default.getInstance().request("quit", null, function () {
                                    }, _this);
                                    App_1.default.instance.alertDialog.showMsg("Lỗi " + res["err"] + ", vui lòng thử lại.");
                                    break;
                                default:
                                    App_1.default.instance.alertDialog.showMsg("Lỗi " + res["err"] + ", không xác định.");
                                    break;
                            }
                            _this.show(false);
                            _this.lobby.getComponent(ShootFish_Lobby_1.default).show(true);
                            return;
                        }
                        _this.getState(true);
                    }, _this);
                }, _this);
            }, _this);
        }, this);
    };
    Play.prototype.resetView = function () {
        this.betIdx = 0;
        for (var i = 0; i < this.players.length; i++) {
            this.players[i].leave();
        }
        for (var i = 0; i < this.fishs.length; i++)
            this.fishs[i].node.removeFromParent();
        this.fishs.length = 0;
        for (var i = 0; i < this.bullets.length; i++)
            this.bullets[i].node.active = false;
        for (var i = 0; i < this.coinEffects.length; i++)
            this.coinEffects[i].node.active = false;
        this.effectBigWin.show(false);
        this.effectMegaWin.show(false);
        this.effectJackpot.show(false);
        this.popupGuide.active = false;
        this.waveState.stopAllActions();
        this.waveState.active = false;
    };
    Play.prototype.getJackpot = function () {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("getJackpot", null, function (res) {
            if (!res["ok"])
                return;
            _this.listJackpot.length = 0;
            _this.listJackpot.push(res["data"][_this.roomId + "1"]);
            _this.listJackpot.push(res["data"][_this.roomId + "2"]);
            _this.listJackpot.push(res["data"][_this.roomId + "3"]);
            _this.listJackpot.push(res["data"][_this.roomId + "4"]);
            Tween_1.default.numberTo(_this.lblJackpot, _this.listJackpot[_this.betIdx], 0.3);
        }, this);
    };
    Play.prototype.getState = function (isFirst) {
        var _this = this;
        if (!isFirst)
            App_1.default.instance.showLoading(true);
        this.isStateGeted = false;
        this.resetView();
        ShootFishNetworkClient_1.default.getInstance().request("state", null, function (res) {
            if (!isFirst)
                App_1.default.instance.showLoading(false);
            // //  cc.log("state: " + JSON.stringify(res));
            //init players
            var playersData = res["players"];
            var mePlayerData = null;
            var mePlayerServerPos = 0;
            for (var i = 0; i < playersData.length; i++) {
                if (playersData[i]["playerId"] == Configs_1.default.Login.UsernameFish) {
                    mePlayerServerPos = playersData[i]["posIndex"];
                    mePlayerData = playersData[i];
                    Configs_1.default.Login.CoinFish = playersData[i]["cash"];
                    break;
                }
            }
            //  cc.log("mePlayerServerPos: " + mePlayerServerPos);
            for (var i = 0; i < playersData.length; i++) {
                var localPos = _this.mapPlayersIdx[mePlayerServerPos][playersData[i]["posIndex"]];
                var playerData = playersData[i];
                var player = _this.players[localPos];
                player.set(playerData["id"], playerData["playerId"], playerData["nickname"], playerData["cash"], playerData["avatar"]);
                player.serverPos = playerData["posIndex"];
                player.lblBet.string = Utils_1.default.formatNumberMin(_this.listBet[_this.betIdx]);
            }
            //end init players
            //init fishs
            var objects = res["objects"].concat(res["sobjects"]);
            for (var i = 0; i < objects.length; i++) {
                var fishNode = cc.instantiate(_this.fishTemplate);
                var fish = fishNode.getComponent(ShootFish_Fish_1.default);
                fish.node.parent = _this.fishsNode;
                fish.setData(objects[i]);
                _this.fishs.push(fish);
            }
            //end init fish
            //time skill
            //fast shoot
            var rfire = res['time'] - mePlayerData['rfire'];
            var cRfire = Play_1.SERVER_CONFIG['FastFireCoolDownS'];
            _this.progressFastShoot.progress = 0;
            if (rfire > cRfire) {
                _this.btnFastShoot.enabled = true;
                _this.lblFastShootTime.node.active = false;
            }
            else {
                _this.btnFastShoot.enabled = false;
                _this.curTimeFastShootCountdown = rfire;
                _this.lblFastShootTime.string = _this.curTimeFastShootCountdown + "s";
                _this.lblFastShootTime.node.active = true;
            }
            //target 
            var snipe = res['time'] - mePlayerData['snipe'];
            var cSpine = Play_1.SERVER_CONFIG['SnipeCoolDownS'];
            _this.progressTargetFish.progress = 0;
            if (snipe > cSpine) {
                _this.btnTargetFish.enabled = true;
                _this.lblFastShootTime.node.active = false;
            }
            else {
                _this.btnTargetFish.enabled = false;
                _this.curTimeTargetFishCountdown = snipe;
                _this.lblTargetFishTime.string = _this.curTimeTargetFishCountdown + "s";
                _this.lblTargetFishTime.node.active = true;
            }
            _this.isStateGeted = true;
            _this.getJackpot();
            if (isFirst)
                _this.loading.active = false;
        }, this);
    };
    Play.prototype.updateShoot = function (dt) {
        if (this.toggleAuto.isChecked || this.isTargetFish) {
            if (this.targetFish != null) {
                var gunWorldPos = this.mePlayer.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var fishWorldPos = this.targetFish.node.convertToWorldSpaceAR(cc.v2(this.targetFish.node.width / 2, 0));
                var distance = Utils_1.default.v2Distance(fishWorldPos, gunWorldPos);
                if (Math.abs(this.targetFish.node.x) > 640 * 0.8 || Math.abs(this.targetFish.node.y) > 360 * 0.8 || distance < 135) {
                    this.exploreAllBulletWithTargetFishId(this.targetFish.id);
                    this.target.active = false;
                    this.targetFish = null;
                    this.curIntervalFindTargetFish = 0;
                }
                else {
                    var dAngle = fishWorldPos.sub(gunWorldPos);
                    var angle = Math.atan2(dAngle.y, dAngle.x) * Utils_1.default.Rad2Deg;
                    this.mePlayer.gunRotate.angle = angle;
                    // this.target.position = this.targetFish.node.position;
                    this.target.setPosition(this.target.parent.convertToNodeSpaceAR(fishWorldPos));
                }
            }
            else if (!this.isTargetFish) {
                this.curIntervalFindTargetFish = Math.max(0, this.curIntervalFindTargetFish - dt);
                if (this.curIntervalFindTargetFish == 0) {
                    this.findTargetFishInWorld();
                }
            }
        }
        if (this.curShootInterval > 0) {
            this.curShootInterval = Math.max(0, this.curShootInterval - dt);
        }
        else if (this.isShoot) {
            this.curShootInterval = this.isFastShoot ? this.fastShootInterval : this.shootInterval;
            if (Configs_1.default.Login.CoinFish < this.listBet[this.betIdx]) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_slot_error'));
                this.isShoot = false;
                if (this.toggleAuto.isChecked)
                    this.stopAutoShoot();
                return;
            }
            if ((this.toggleAuto.isChecked || this.isTargetFish) && this.targetFish == null)
                return;
            Configs_1.default.Login.CoinFish = Math.max(0, Configs_1.default.Login.CoinFish - this.listBet[this.betIdx]);
            this.mePlayer.coin = Configs_1.default.Login.CoinFish;
            this.mePlayer.lblCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
            this.mePlayer.shoot();
            //play audio
            if (this.soundState == 1) {
                cc.audioEngine.play(this.soundShoot, false, 1);
            }
            var bulletAngle = this.mePlayer.gunRotate.angle;
            var bullet = this.getBullet();
            bullet.bullet.getComponent(cc.Sprite).spriteFrame = this.sprFramesBullet[this.betIdx];
            bullet.targetFishId = this.targetFish != null ? this.targetFish.id : -1;
            bullet.node.angle = bulletAngle;
            var pos = bullet.node.parent.convertToNodeSpaceAR(this.mePlayer.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO));
            pos.x += Utils_1.default.degreesToVec2(bullet.node.angle).x * 90;
            pos.y += Utils_1.default.degreesToVec2(bullet.node.angle).y * 90;
            bullet.node.setPosition(pos);
            bullet.run();
            var shootRad = bulletAngle * Utils_1.default.Deg2Rad;
            switch (this.mePlayer.serverPos) {
                case 0:
                    shootRad = shootRad;
                    break;
                case 1:
                    shootRad = Math.PI - shootRad;
                    break;
                case 2:
                    shootRad = shootRad - Math.PI;
                    break;
                case 3:
                    shootRad = -shootRad;
                    break;
            }
            ShootFishNetworkClient_1.default.getInstance().notify("shoot", {
                'rad': shootRad,
                'type': this.betIdx + 1,
                'target': this.targetFish != null ? this.targetFish.id : -1,
                'rapidFire': this.isFastShoot,
                'auto': false //ban tu dong boolean
            });
        }
    };
    Play.prototype.findTargetFishInWorld = function () {
        this.curIntervalFindTargetFish = this.intervalFindTargetFish;
        var listFishActiveInWorld = [];
        var gunWorldPos = this.mePlayer.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO);
        for (var i = 0; i < this.fishs.length; i++) {
            var fishNode = this.fishs[i].node;
            if (fishNode.active && Math.abs(fishNode.position.x) <= 640 * 0.8 && Math.abs(fishNode.position.y) <= 360 * 0.8) {
                var fishWorldPos = fishNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var distance = Utils_1.default.v2Distance(gunWorldPos, fishWorldPos);
                if (distance >= 135) {
                    listFishActiveInWorld.push({
                        fish: this.fishs[i],
                        distance: distance
                    });
                }
            }
        }
        if (listFishActiveInWorld.length > 0) {
            this.targetFish = listFishActiveInWorld[Utils_1.default.randomRangeInt(0, listFishActiveInWorld.length)]["fish"];
            this.target.active = true;
            this.target.position = this.targetFish.node.position;
        }
    };
    Play.prototype.stopAutoShoot = function () {
        this.isShoot = false;
        this.toggleAuto.isChecked = false;
        this.target.active = false;
        this.touchPad.active = true;
        this.curIntervalFindTargetFish = 0;
        this.targetFish = null;
    };
    Play.prototype.getBullet = function () {
        var bullet = null;
        for (var i = 0; i < this.bullets.length; i++) {
            if (!this.bullets[i].node.active) {
                bullet = this.bullets[i];
                break;
            }
        }
        if (bullet == null) {
            var node = cc.instantiate(this.bulletTemplate);
            node.parent = this.bulletTemplate.parent;
            bullet = node.getComponent(ShootFish_Bullet_1.default);
            this.bullets.push(bullet);
        }
        bullet.node.active = true;
        bullet.targetFishId = -1;
        return bullet;
    };
    Play.prototype.exploreAllBulletWithTargetFishId = function (fishId) {
        for (var i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i].node.active && this.bullets[i].targetFishId >= 0 && this.bullets[i].targetFishId == fishId) {
                this.bullets[i].targetFishId = -1;
            }
        }
    };
    Play.prototype.getCoinEffect = function () {
        var coinEffect = null;
        for (var i = 0; i < this.coinEffects.length; i++) {
            if (!this.coinEffects[i].node.active) {
                coinEffect = this.coinEffects[i];
                break;
            }
        }
        if (coinEffect == null) {
            var node = cc.instantiate(this.coinEffectTemplate);
            node.parent = this.coinEffectTemplate.parent;
            coinEffect = node.getComponent(ShootFish_CoinEffect_1.default);
            this.coinEffects.push(coinEffect);
        }
        coinEffect.node.active = true;
        coinEffect.node.setSiblingIndex(coinEffect.node.parent.children.length - 1);
        return coinEffect;
    };
    Play.prototype.getFishById = function (id) {
        for (var i = 0; i < this.fishs.length; i++) {
            if (this.fishs[i].id == id)
                return this.fishs[i];
        }
        return null;
    };
    Play.prototype.getPlayerById = function (id) {
        if (id <= 0)
            return null;
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].id > 0 && this.players[i].id == id)
                return this.players[i];
        }
        return null;
    };
    Play.prototype.getPlayerByUsername = function (username) {
        if (username == null || username == "")
            return null;
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].username != null && this.players[i].username != "" && this.players[i].username == username)
                return this.players[i];
        }
        return null;
    };
    Play.prototype.getFishAnimByType = function (type) {
        var name = "";
        switch (type) {
            case 0:
                name = "fish0";
                break;
            case 1:
                name = "fish1";
                break;
            case 2:
                name = "fish2";
                break;
            case 3:
                name = "fish3";
                break;
            case 4:
                name = "fish4";
                break;
            case 5:
                name = "fish5";
                break;
            case 6:
                name = "fish6";
                break;
            case 7:
                name = "fish7";
                break;
            case 8:
                name = "fish9";
                break;
            case 9:
                name = "fish9";
                break;
            case 10:
                name = "fish10";
                break;
            case 11:
                name = "fish11";
                break;
            case 12:
                name = "fish12";
                break;
            case 13:
                name = "fish13";
                break;
            case 14:
                name = "fish14";
                break;
            case 15:
                name = "fish15";
                break;
            case 16:
                name = "fish16";
                break;
            case 17:
                name = "fish17";
                break;
            case 18:
                name = "fish18";
                break;
            case 19:
                name = "fish19";
                break;
            case 20:
                name = "fish20";
                break;
            case 21:
                name = "fish21";
                break;
            case 22:
                name = "fish22";
                break;
            case 23:
                name = "fish23";
                break;
            case 24:
                name = "fish24";
                break;
        }
        for (var i = 0; i < this.fishsAnim.length; i++) {
            if (this.fishsAnim[i].name != null && this.fishsAnim[i].name != "" && this.fishsAnim[i].name == name) {
                return this.fishsAnim[i];
            }
        }
        return this.fishsAnim[0];
    };
    Play.prototype.actGetState = function () {
        this.getState(false);
    };
    Play.prototype.actBetUp = function () {
        if (this.betIdx < this.listBet.length - 1) {
            this.betIdx++;
            this.mePlayer.lblBet.string = Utils_1.default.formatNumberMin(this.listBet[this.betIdx]);
            this.mePlayer.setGun(this.betIdx);
            Tween_1.default.numberTo(this.lblJackpot, this.listJackpot[this.betIdx], 0.3);
        }
    };
    Play.prototype.actBetDown = function () {
        if (this.betIdx > 0) {
            this.betIdx--;
            this.mePlayer.lblBet.string = Utils_1.default.formatNumberMin(this.listBet[this.betIdx]);
            this.mePlayer.setGun(this.betIdx);
            Tween_1.default.numberTo(this.lblJackpot, this.listJackpot[this.betIdx], 0.3);
        }
    };
    Play.prototype.actBack = function () {
        var _this = this;
        App_1.default.instance.confirmDialog.show2("Bạn có muốn rời khỏi bàn không", function (isConfirm) {
            if (isConfirm) {
                _this.back();
            }
        });
    };
    Play.prototype.actFastShoot = function () {
        var _this = this;
        this.isFastShoot = true;
        this.btnFastShoot.enabled = false;
        var cDuration = Play_1.SERVER_CONFIG['FastFireDuration'];
        this.progressFastShoot.progress = 1;
        this.tweens.push(cc.tween(this.progressFastShoot).to(cDuration, { progress: 0 }).call(function () {
            _this.isFastShoot = false;
            _this.curTimeFastShootCountdown = Play_1.SERVER_CONFIG['FastFireCoolDownS'];
            _this.lblFastShootTime.string = _this.curTimeFastShootCountdown + "s";
            _this.lblFastShootTime.node.active = true;
        }).start());
    };
    Play.prototype.actTargetFish = function () {
        var _this = this;
        this.isShoot = true;
        this.isTargetFish = true;
        this.btnTargetFish.enabled = false;
        var cDuration = Play_1.SERVER_CONFIG['SnipeDurationS'];
        this.progressTargetFish.progress = 1;
        this.tweens.push(cc.tween(this.progressTargetFish).to(cDuration, { progress: 0 }).call(function () {
            _this.isTargetFish = false;
            _this.targetFish = null;
            _this.target.active = false;
            _this.curTimeTargetFishCountdown = Play_1.SERVER_CONFIG['SnipeCoolDownS'];
            _this.lblTargetFishTime.string = _this.curTimeTargetFishCountdown + "s";
            _this.lblTargetFishTime.node.active = true;
            _this.fishs.forEach(function (x) {
                x.getComponent(cc.Button).enabled = false;
            });
            _this.isShoot = _this.toggleAuto.isChecked;
            _this.touchPad.active = !_this.toggleAuto.isChecked;
        }).start());
        this.touchPad.active = false;
        this.fishs.forEach(function (x) {
            x.getComponent(cc.Button).enabled = true;
            x.node.off("click");
            x.node.on("click", function () {
                _this.targetFish = x;
                _this.target.active = true;
            });
        });
    };
    Play.prototype.back = function () {
        var _this = this;
        this.isStateGeted = false;
        this.stopAutoShoot();
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("quit", null, function () {
            App_1.default.instance.showLoading(false);
            _this.resetView();
            _this.show(false);
            _this.lobby.getComponent(ShootFish_Lobby_1.default).show(true);
        }, this);
    };
    Play.prototype.actEffectJackpotTest = function () {
        this.effectJackpot.show(true, "Test nickname", 54032423);
    };
    Play.prototype.actEffectBigWinTest = function () {
        this.effectBigWin.show(true, "Test nickname", 54032423);
    };
    Play.prototype.actEffectMegaWinTest = function () {
        this.effectMegaWin.show(true, "Test nickname", 54032423);
    };
    Play.prototype.show = function (isShow, roomId) {
        if (roomId === void 0) { roomId = 0; }
        if (isShow) {
            if (Play_1.SERVER_CONFIG == null) {
                this.lobby.getComponent(ShootFish_Lobby_1.default).show(true);
                App_1.default.instance.alertDialog.showMsg("Bạn chưa đăng nhập.");
                return;
            }
            this.node.active = true;
            this.loading.active = true;
            this.roomId = roomId;
            this.stopAutoShoot();
            this.panelMenu.show(false);
            this.listBet.length = 0;
            this.listBet.push(Play_1.SERVER_CONFIG["TypeToValue"]["Bullet1"] * Play_1.SERVER_CONFIG['TableBulletValueRate'][this.roomId]);
            this.listBet.push(Play_1.SERVER_CONFIG["TypeToValue"]["Bullet2"] * Play_1.SERVER_CONFIG['TableBulletValueRate'][this.roomId]);
            this.listBet.push(Play_1.SERVER_CONFIG["TypeToValue"]["Bullet3"] * Play_1.SERVER_CONFIG['TableBulletValueRate'][this.roomId]);
            this.listBet.push(Play_1.SERVER_CONFIG["TypeToValue"]["Bullet4"] * Play_1.SERVER_CONFIG['TableBulletValueRate'][this.roomId]);
            this.shootInterval = 1 / Play_1.SERVER_CONFIG["FIRE_RATE"];
            this.fastShootInterval = this.shootInterval / Play_1.SERVER_CONFIG["FastFireRate"];
            this.play();
        }
        else {
            if (this.popupGuide.active) {
                this.popupGuide.getComponent(ShootFish_PopupGuide_1.default).dismiss();
            }
            this.node.active = false;
        }
    };
    var Play_1;
    Play.instance = null;
    Play.SERVER_CONFIG = null;
    __decorate([
        property(cc.Node)
    ], Play.prototype, "lobby", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "loading", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "touchPad", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Play.prototype, "sprFramesBullet", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "bulletTemplate", void 0);
    __decorate([
        property([ShootFish_Player_1.default])
    ], Play.prototype, "players", void 0);
    __decorate([
        property([cc.Node])
    ], Play.prototype, "fishsAnim", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "fishsNode", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "fishTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "coinEffectTemplate", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "lblJackpot", void 0);
    __decorate([
        property(cc.Toggle)
    ], Play.prototype, "toggleAuto", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "target", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "waveState", void 0);
    __decorate([
        property(cc.Button)
    ], Play.prototype, "btnFastShoot", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Play.prototype, "progressFastShoot", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "lblFastShootTime", void 0);
    __decorate([
        property(cc.Button)
    ], Play.prototype, "btnTargetFish", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Play.prototype, "progressTargetFish", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "lblTargetFishTime", void 0);
    __decorate([
        property(ShootFish_EffectJackpot_1.default)
    ], Play.prototype, "effectJackpot", void 0);
    __decorate([
        property(ShootFish_EffectBigWin_1.default)
    ], Play.prototype, "effectBigWin", void 0);
    __decorate([
        property(ShootFish_EffectBigWin_1.default)
    ], Play.prototype, "effectMegaWin", void 0);
    __decorate([
        property(ShootFish_PanelMenu_1.default)
    ], Play.prototype, "panelMenu", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "popupGuide", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "lblPing", void 0);
    __decorate([
        property(cc.Label)
    ], Play.prototype, "lblServerTime", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Play.prototype, "soundShoot", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Play.prototype, "soundCoin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Play.prototype, "soundBigWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Play.prototype, "soundBg", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "soundOff", void 0);
    __decorate([
        property(cc.Node)
    ], Play.prototype, "musicOff", void 0);
    Play = Play_1 = __decorate([
        ccclass
    ], Play);
    return Play;
}(cc.Component));
exports.default = Play;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5QbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF3QztBQUN4Qyx1REFBd0M7QUFDeEMsbURBQW9DO0FBQ3BDLHFEQUFnRDtBQUNoRCwrREFBZ0Q7QUFDaEQscUVBQXNEO0FBQ3RELHFEQUFzQztBQUN0Qyw2REFBOEM7QUFDOUMsK0RBQWdEO0FBQ2hELG1FQUFvRDtBQUNwRCxpRUFBNEQ7QUFDNUQscUVBQWdFO0FBQ2hFLHFFQUFnRTtBQUNoRSx5R0FBb0c7QUFFOUYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUEra0NDO1FBemtDRyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixxQkFBZSxHQUFxQixFQUFFLENBQUM7UUFFdkMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsYUFBTyxHQUFhLEVBQUUsQ0FBQztRQUV2QixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQix1QkFBaUIsR0FBbUIsSUFBSSxDQUFDO1FBRXpDLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUdsQyxtQkFBYSxHQUFj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QUFDLDZCQUFTLENBQUM7MkNBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1k7SUFLL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzRDQUNEO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzsyQ0FDRjtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7NkNBQ0E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lDQUNKO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTztJQWpGUixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBK2tDeEI7SUFBRCxXQUFDO0NBL2tDRCxBQStrQ0MsQ0Eva0NpQyxFQUFFLENBQUMsU0FBUyxHQStrQzdDO2tCQS9rQ29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1Nob290RmlzaC5QbGF5ZXJcIjtcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vU2hvb3RGaXNoLkJ1bGxldFwiO1xuaW1wb3J0IEZpc2ggZnJvbSBcIi4vU2hvb3RGaXNoLkZpc2hcIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgQ29pbkVmZmVjdCBmcm9tIFwiLi9TaG9vdEZpc2guQ29pbkVmZmVjdFwiO1xuaW1wb3J0IEVmZmVjdEphY2twb3QgZnJvbSBcIi4vU2hvb3RGaXNoLkVmZmVjdEphY2twb3RcIjtcbmltcG9ydCBMb2JieSBmcm9tIFwiLi9TaG9vdEZpc2guTG9iYnlcIjtcbmltcG9ydCBQYW5lbE1lbnUgZnJvbSBcIi4vU2hvb3RGaXNoLlBhbmVsTWVudVwiO1xuaW1wb3J0IFBvcHVwR3VpZGUgZnJvbSBcIi4vU2hvb3RGaXNoLlBvcHVwR3VpZGVcIjtcbmltcG9ydCBFZmZlY3RCaWdXaW4gZnJvbSBcIi4vU2hvb3RGaXNoLkVmZmVjdEJpZ1dpblwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgU2hvb3RGaXNoTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1Nob290RmlzaE5ldHdvcmtDbGllbnRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogUGxheSA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBTRVJWRVJfQ09ORklHID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvYmJ5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkaW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0b3VjaFBhZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3ByRnJhbWVzQnVsbGV0OiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnVsbGV0VGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbUGxheWVyXSlcbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgZmlzaHNBbmltOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmaXNoc05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZpc2hUZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbkVmZmVjdFRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsSmFja3BvdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQXV0bzogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHdhdmVTdGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkZhc3RTaG9vdDogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJvZ3Jlc3NGYXN0U2hvb3Q6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRmFzdFNob290VGltZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5UYXJnZXRGaXNoOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwcm9ncmVzc1RhcmdldEZpc2g6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVGFyZ2V0RmlzaFRpbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIC8vZWZmZWN0XG4gICAgQHByb3BlcnR5KEVmZmVjdEphY2twb3QpXG4gICAgZWZmZWN0SmFja3BvdDogRWZmZWN0SmFja3BvdCA9IG51bGw7XG4gICAgQHByb3BlcnR5KEVmZmVjdEJpZ1dpbilcbiAgICBlZmZlY3RCaWdXaW46IEVmZmVjdEJpZ1dpbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KEVmZmVjdEJpZ1dpbilcbiAgICBlZmZlY3RNZWdhV2luOiBFZmZlY3RCaWdXaW4gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShQYW5lbE1lbnUpXG4gICAgcGFuZWxNZW51OiBQYW5lbE1lbnUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwR3VpZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxQaW5nOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFNlcnZlclRpbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIC8vc291bmRcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kU2hvb3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZENvaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZEJpZ1dpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzb3VuZE9mZjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbXVzaWNPZmY6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBwdWJsaWMgbWVQbGF5ZXI6IFBsYXllciA9IG51bGw7XG4gICAgcHJpdmF0ZSBidWxsZXRzOiBCdWxsZXRbXSA9IFtdO1xuICAgIHByaXZhdGUgZmlzaHM6IEZpc2hbXSA9IFtdO1xuICAgIHByaXZhdGUgY29pbkVmZmVjdHM6IENvaW5FZmZlY3RbXSA9IFtdO1xuICAgIHByaXZhdGUgaXNTdGF0ZUdldGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIGxhc3RVcGRhdGVUaW1lID0gLTE7XG5cbiAgICBwcml2YXRlIHJvb21JZCA9IDA7XG4gICAgcHJpdmF0ZSBsaXN0QmV0OiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgcHJpdmF0ZSBsaXN0SmFja3BvdDogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIHByaXZhdGUgYmV0SWR4ID0gMDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1hcFBsYXllcnNJZHggPSBbXG4gICAgICAgIFswLCAxLCAyLCAzXSxcbiAgICAgICAgWzEsIDAsIDMsIDJdLFxuICAgICAgICBbMiwgMywgMCwgMV0sXG4gICAgICAgIFszLCAyLCAxLCAwXVxuICAgIF07XG5cbiAgICBwcml2YXRlIHNob290SW50ZXJ2YWwgPSAwLjI1O1xuICAgIHByaXZhdGUgZmFzdFNob290SW50ZXJ2YWwgPSAwLjEzO1xuICAgIHByaXZhdGUgY3VyU2hvb3RJbnRlcnZhbCA9IDA7XG4gICAgcHJpdmF0ZSBpc1Nob290ID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0Zhc3RTaG9vdCA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNUYXJnZXRGaXNoID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHRhcmdldEZpc2g6IEZpc2ggPSBudWxsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaW50ZXJ2YWxGaW5kVGFyZ2V0RmlzaCA9IDI7XG4gICAgcHJpdmF0ZSBjdXJJbnRlcnZhbEZpbmRUYXJnZXRGaXNoID0gMDtcblxuICAgIHByaXZhdGUgY3VyVGltZUZhc3RTaG9vdENvdW50ZG93biA9IDA7XG4gICAgcHJpdmF0ZSBjdXJUaW1lVGFyZ2V0RmlzaENvdW50ZG93biA9IDA7XG4gICAgcHJpdmF0ZSB0d2VlbnMgPSBuZXcgQXJyYXk8Y2MuVHdlZW4+KCk7XG5cbiAgICBwcml2YXRlIHJlbW90ZU11c2ljQmFja2dyb3VuZCA9IG51bGw7XG4gICAgcHJpdmF0ZSBtdXNpY1N0YXRlID0gMTtcbiAgICBwcml2YXRlIHNvdW5kU3RhdGUgPSAxO1xuICAgIFxuICAgIHByaXZhdGUgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5tZVBsYXllciA9IHRoaXMucGxheWVyc1swXTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFBsYXkuaW5zdGFuY2UgPSB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJ1bGxldFRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudG91Y2hQYWQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgdmFyIHRvdWNoUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubWVQbGF5ZXIucm90YXRlR3VuKHRvdWNoUG9zKTtcbiAgICAgICAgICAgIHRoaXMuaXNTaG9vdCA9IHRydWU7XG4gICAgICAgIH0sIHRoaXMudG91Y2hQYWQpO1xuXG4gICAgICAgIHRoaXMudG91Y2hQYWQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB2YXIgdG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5tZVBsYXllci5yb3RhdGVHdW4odG91Y2hQb3MpO1xuICAgICAgICB9LCB0aGlzLnRvdWNoUGFkKTtcblxuICAgICAgICB0aGlzLnRvdWNoUGFkLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzU2hvb3QgPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy50b3VjaFBhZCk7XG5cbiAgICAgICAgdGhpcy50b3VjaFBhZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Nob290ID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMudG91Y2hQYWQpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlQXV0by5ub2RlLm9uKFwidG9nZ2xlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaFBhZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckludGVydmFsRmluZFRhcmdldEZpc2ggPSB0aGlzLmludGVydmFsRmluZFRhcmdldEZpc2g7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob290ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmRUYXJnZXRGaXNoSW5Xb3JsZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdXRvU2hvb3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChyb3V0ZSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlIHx8ICF0aGlzLmlzU3RhdGVHZXRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgc3dpdGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJPblVwZGF0ZUphY2twb3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAvLy8vICBjYy5sb2coXCJyb3V0ZTogXCIgKyByb3V0ZSArIFwiIGRhdGE6IFwiKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEphY2twb3QubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SmFja3BvdC5wdXNoKGRhdGFbdGhpcy5yb29tSWQgKyBcIjFcIl0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RKYWNrcG90LnB1c2goZGF0YVt0aGlzLnJvb21JZCArIFwiMlwiXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEphY2twb3QucHVzaChkYXRhW3RoaXMucm9vbUlkICsgXCIzXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0SmFja3BvdC5wdXNoKGRhdGFbdGhpcy5yb29tSWQgKyBcIjRcIl0pO1xuXG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsSmFja3BvdCwgdGhpcy5saXN0SmFja3BvdFt0aGlzLmJldElkeF0sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiT25FbnRlclBsYXllclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vLy8gIGNjLmxvZyhcInJvdXRlOiBcIiArIHJvdXRlICsgXCIgZGF0YTogXCIrIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllckRhdGEgPSBkYXRhW1wiZGF0YVwiXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5tYXBQbGF5ZXJzSWR4W3RoaXMubWVQbGF5ZXIuc2VydmVyUG9zXVtwbGF5ZXJEYXRhW1wicG9zSW5kZXhcIl1dO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXJzW2xvY2FsUG9zXTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNldChwbGF5ZXJEYXRhW1wiaWRcIl0sIHBsYXllckRhdGFbXCJwbGF5ZXJJZFwiXSwgcGxheWVyRGF0YVtcIm5pY2tuYW1lXCJdLCBwbGF5ZXJEYXRhW1wiY2FzaFwiXSwgcGxheWVyRGF0YVtcImF2YXRhclwiXSk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zZXJ2ZXJQb3MgPSBwbGF5ZXJEYXRhW1wicG9zSW5kZXhcIl07XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5sYmxCZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyTWluKHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIk9uTGVhdmVQbGF5ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAvLyAvLyAgY2MubG9nKFwicm91dGU6IFwiICsgcm91dGUgKyBcIiBkYXRhOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJuYW1lID0gZGF0YVtcInBsYXllcklkXCJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcm5hbWUgPT0gQ29uZmlncy5Mb2dpbi5Vc2VybmFtZUZpc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW1wicmVhc29uXCJdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkLhuqFuIMSRxrDhu6NjIG3hu51pIHJhIGto4buPaSBwaMOybmcgZG8ga2jDtG5nIHRoYW8gdMOhYyB0cm9uZyB0aOG7nWkgZ2lhbiBkw6BpLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5VXNlcm5hbWUodXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyID09IG51bGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubGVhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJPblVwZGF0ZU9iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vLy8gIGNjLmxvZyhcInJvdXRlOiBcIiArIHJvdXRlICsgXCIgZGF0YTogXCIrIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpc2hJZCA9IGRhdGFbXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpc2ggPSB0aGlzLmdldEZpc2hCeUlkKGZpc2hJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXNoID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAvLyAgY2MubG9nKFwiY2FuJ3QgZmluZCBmaXNoIFwiICsgZmlzaElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpc2guc2V0RGF0YShkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIk9uVXBkYXRlQ2FzaFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIC8vICBjYy5sb2coXCJyb3V0ZTogXCIgKyByb3V0ZSArIFwiIGRhdGE6IFwiKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VybmFtZSA9IGRhdGFbJ3BsYXllcklkJ107XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2luID0gTnVtYmVyKGRhdGFbJ2Nhc2gnXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3IgPSBkYXRhWydzY3InXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJuYW1lID09IENvbmZpZ3MuTG9naW4uVXNlcm5hbWVGaXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW5GaXNoID0gY29pbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVVzZXJuYW1lKHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PSBudWxsKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNvaW4gPSBjb2luO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubGJsQ29pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoY29pbik7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzY3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2phY2twb3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5zaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdE1lZ2FXaW4uc2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LnNob3codHJ1ZSwgcGxheWVyLm5pY2tuYW1lLCBjb2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VjaCBuZ2FtIHZhbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIk9uT2JqZWN0RGllXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8vLyAgY2MubG9nKFwicm91dGU6IFwiICsgcm91dGUgKyBcIiBkYXRhOiBcIisgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlzaElkID0gZGF0YVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29pbiA9IGRhdGFbXCJ2YWx1ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllcklkID0gZGF0YVtcInBsYXllcklkXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXNoID0gdGhpcy5nZXRGaXNoQnlJZChmaXNoSWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlzaCA9PSBudWxsKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZmlzaC5kaWUoKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3Jlc2V0IHRhcmdldEZpc2hcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpc2ggPT0gdGhpcy50YXJnZXRGaXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvcmVBbGxCdWxsZXRXaXRoVGFyZ2V0RmlzaElkKHRoaXMudGFyZ2V0RmlzaC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0RmlzaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1ckludGVydmFsRmluZFRhcmdldEZpc2ggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlVc2VybmFtZShwbGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT0gbnVsbCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vY29pbiBlZmZlY3RcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvaW5FZmZlY3QgPSB0aGlzLmdldENvaW5FZmZlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29pbkVmZmVjdC5ydW4oY29pbiwgbmV3IGNjLlZlYzIoZmlzaC5ub2RlLnBvc2l0aW9uLngsZmlzaC5ub2RlLnBvc2l0aW9uLnkpLCBuZXcgY2MuVmVjMihwbGF5ZXIubm9kZS5wb3NpdGlvbi54LHBsYXllci5ub2RlLnBvc2l0aW9uLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zb3VuZFN0YXRlID09IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ29pbiwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmlzaC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5lZmZlY3RKYWNrcG90Lm5vZGUuYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdE1lZ2FXaW4uc2hvdyh0cnVlLCBwbGF5ZXIubmlja25hbWUsIGNvaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5lZmZlY3RKYWNrcG90Lm5vZGUuYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5zaG93KHRydWUsIHBsYXllci5uaWNrbmFtZSwgY29pbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYW4gdGhhbiB0YWlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIk9uU2hvb3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAvLyAvLyAgY2MubG9nKFwicm91dGU6IFwiICsgcm91dGUgKyBcIiBkYXRhOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJuYW1lID0gZGF0YVtcInBsYXllcklkXCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmV0SWR4ID0gTnVtYmVyKGRhdGFbJ3R5cGUnXSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFkID0gZGF0YVsncmFkJ107XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBOdW1iZXIoZGF0YVtcInRhcmdldFwiXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJuYW1lID09IENvbmZpZ3MuTG9naW4uVXNlcm5hbWVGaXNoKSBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVVzZXJuYW1lKHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PSBudWxsKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhZEJ5TWUgPSByYWQ7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5tZVBsYXllci5zZXJ2ZXJQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRCeU1lID0gcmFkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZEJ5TWUgPSBNYXRoLlBJIC0gcmFkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZEJ5TWUgPSByYWQgLSBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZEJ5TWUgPSAtcmFkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5sYmxCZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyTWluKHRoaXMubGlzdEJldFtiZXRJZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmd1blJvdGF0ZS5hbmdsZSA9IHJhZEJ5TWUgKiBVdGlscy5SYWQyRGVnO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2V0R3VuKGJldElkeCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zaG9vdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBidWxsZXQgPSB0aGlzLmdldEJ1bGxldCgpO1xuICAgICAgICAgICAgICAgICAgICBidWxsZXQudGFyZ2V0RmlzaElkID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICBidWxsZXQuYnVsbGV0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZXNCdWxsZXRbYmV0SWR4XTtcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0Lm5vZGUuYW5nbGUgPSBwbGF5ZXIuZ3VuUm90YXRlLmFuZ2xlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gYnVsbGV0Lm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBsYXllci5ndW5Sb3RhdGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTykpO1xuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSBVdGlscy5kZWdyZWVzVG9WZWMyKGJ1bGxldC5ub2RlLmFuZ2xlKS54ICogOTA7XG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IFV0aWxzLmRlZ3JlZXNUb1ZlYzIoYnVsbGV0Lm5vZGUuYW5nbGUpLnkgKiA5MDtcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0Lm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LnJ1bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIk9uQ2hhdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vLy8gIGNjLmxvZyhcInJvdXRlOiBcIiArIHJvdXRlICsgXCIgZGF0YTogXCIrIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJPbk5ld1N0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8vLyAgY2MubG9nKFwicm91dGU6IFwiICsgcm91dGUgKyBcIiBkYXRhOiBcIisgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGFbJ3N0YXRlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2EgdHJhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2F2ZVN0YXRlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXZlU3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy53YXZlU3RhdGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnggPSAxNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2F2ZVN0YXRlLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gLTE0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXZlU3RhdGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygxLCBuZXcgY2MuVmVjMihwb3MueCxwb3MueSkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2F2ZVN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJPbkphY2twb3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAvLy8vICBjYy5sb2coXCJyb3V0ZTogXCIgKyByb3V0ZSArIFwiIGRhdGE6IFwiKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuaWNrbmFtZSA9IGRhdGFbJ25pY2tuYW1lJ107XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGFbJ3ZhbHVlJ107XG4gICAgICAgICAgICAgICAgICAgIGxldCByb29tSWR4ID0gZGF0YVsndGFibGVJbmRleCddO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByb29tTmFtZSA9IFwiUGjDsm5nIDFcIjtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyb29tSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vbU5hbWUgPSBcIlBow7JuZyAyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vbU5hbWUgPSBcIlBow7JuZyAzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IFwiQ2jDumMgbeG7q25nIFxcXCJcIiArIG5pY2tuYW1lICsgXCJcXFwiIMSRw6Mgc8SDbiDEkcaw4bujYyBcIiArIFV0aWxzLmZvcm1hdE51bWJlcih2YWx1ZSkgKyBcIiBYdSB0cm9uZyBcIiArIHJvb21OYW1lICsgXCIuXCJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIC8vICBjYy5sb2coXCI9PT09cm91dGU6IFwiICsgcm91dGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgLy9zZXR0aW5nIG11c2ljXG4gICAgICAgIHRoaXMuY2hlY2tNdXNpY09uU3RhcnQoKTtcbiAgICAgICAgdGhpcy5jaGVja1NvdW5kT25TdGFydCgpO1xuICAgIH1cblxuICAgIGNoZWNrTXVzaWNPblN0YXJ0KCl7XG4gICAgICAgIHZhciBtdXNpY1NhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXNpY19maXNoX3Nob3RcIik7XG4gICAgICAgIGlmIChtdXNpY1NhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY1N0YXRlID0gcGFyc2VJbnQobXVzaWNTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTdGF0ZSA9IDE7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY19maXNoX3Nob3RcIiwgXCIxXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVzaWNTdGF0ZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljT2ZmLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljT2ZmLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm11c2ljU3RhdGUgPT0gMSkge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucmVtb3RlTXVzaWNCYWNrZ3JvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRCZywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tTb3VuZE9uU3RhcnQoKXtcbiAgICAgICAgdmFyIHNvdW5kU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvdW5kX2Zpc2hfc2hvdFwiKTtcbiAgICAgICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kU3RhdGUgPSBwYXJzZUludChzb3VuZFNhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VuZFN0YXRlID0gMTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNvdW5kX2Zpc2hfc2hvdFwiLCBcIjFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zb3VuZFN0YXRlID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRPZmYuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRPZmYuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0dGluZ011c2ljKCl7XG4gICAgICAgIC8vICBjYy5sb2codGhpcy5tdXNpY09mZi5hY3RpdmUpO1xuICAgICAgICB0aGlzLm11c2ljT2ZmLmFjdGl2ZSA9ICF0aGlzLm11c2ljT2ZmLmFjdGl2ZTtcbiAgICAgICAgaWYgKHRoaXMubXVzaWNPZmYuYWN0aXZlKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMucmVtb3RlTXVzaWNCYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTdGF0ZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yZW1vdGVNdXNpY0JhY2tncm91bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZEJnLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTdGF0ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljX2Zpc2hfc2hvdFwiLCBcIlwiICsgdGhpcy5tdXNpY1N0YXRlKTtcbiAgICB9XG5cbiAgICBzZXR0aW5nU291bmQoKXtcbiAgICAgICAgLy8gIGNjLmxvZyh0aGlzLnNvdW5kT2ZmLmFjdGl2ZSk7XG4gICAgICAgIHRoaXMuc291bmRPZmYuYWN0aXZlID0gIXRoaXMuc291bmRPZmYuYWN0aXZlO1xuICAgICAgICBpZiAodGhpcy5zb3VuZE9mZi5hY3RpdmUpIHtcbiAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc291bmRTdGF0ZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zb3VuZFN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic291bmRfZmlzaF9zaG90XCIsIFwiXCIgKyB0aGlzLnNvdW5kU3RhdGUpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy50d2VlbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3RvcCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudHdlZW5zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmxibFBpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sYmxQaW5nLnN0cmluZyA9IFNob290RmlzaE5ldHdvcmtDbGllbnQuUElORyArIFwibXNcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYmxTZXJ2ZXJUaW1lICE9IG51bGwgJiYgdGhpcy5sYmxTZXJ2ZXJUaW1lLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmxibFNlcnZlclRpbWUuc3RyaW5nID0gXCJ0OiBcIiArIFNob290RmlzaE5ldHdvcmtDbGllbnQuc3lzdGVtQ3VycmVudFRpbWVNaWxsaXMoKSArIFwiIGQ6IFwiICsgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5USU1FX0RJU1RBTkNFICsgXCIgbXA6IFwiICsgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5NSU5fUElORztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBub3cgPSBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LnN5c3RlbUN1cnJlbnRUaW1lTWlsbGlzKCk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGVHZXRlZCAmJiB0aGlzLmxhc3RVcGRhdGVUaW1lID4gMCAmJiBub3cgLSB0aGlzLmxhc3RVcGRhdGVUaW1lID4gNTAwKSB7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwib25yZXN1bWUgZ2V0c3RhdGVcIik7XG4gICAgICAgICAgICB0aGlzLmdldFN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RVcGRhdGVUaW1lID0gbm93O1xuXG4gICAgICAgIGlmICh0aGlzLmN1clRpbWVGYXN0U2hvb3RDb3VudGRvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1clRpbWVGYXN0U2hvb3RDb3VudGRvd24gPSBNYXRoLm1heCgwLCB0aGlzLmN1clRpbWVGYXN0U2hvb3RDb3VudGRvd24gLSBkdCk7XG4gICAgICAgICAgICB0aGlzLmxibEZhc3RTaG9vdFRpbWUuc3RyaW5nID0gTWF0aC5yb3VuZCh0aGlzLmN1clRpbWVGYXN0U2hvb3RDb3VudGRvd24pICsgXCJzXCI7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJUaW1lRmFzdFNob290Q291bnRkb3duID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxibEZhc3RTaG9vdFRpbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkZhc3RTaG9vdC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1clRpbWVUYXJnZXRGaXNoQ291bnRkb3duID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJUaW1lVGFyZ2V0RmlzaENvdW50ZG93biA9IE1hdGgubWF4KDAsIHRoaXMuY3VyVGltZVRhcmdldEZpc2hDb3VudGRvd24gLSBkdCk7XG4gICAgICAgICAgICB0aGlzLmxibFRhcmdldEZpc2hUaW1lLnN0cmluZyA9IE1hdGgucm91bmQodGhpcy5jdXJUaW1lVGFyZ2V0RmlzaENvdW50ZG93bikgKyBcInNcIjtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1clRpbWVUYXJnZXRGaXNoQ291bnRkb3duID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFRhcmdldEZpc2hUaW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5UYXJnZXRGaXNoLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTaG9vdChkdCk7XG5cbiAgICAgICAgLy91cGRhdGUgYnVsbGV0c1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgYyA9IHRoaXMuYnVsbGV0cy5sZW5ndGg7IGkgPCBjOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBidWxldCA9IHRoaXMuYnVsbGV0c1tpXTtcbiAgICAgICAgICAgIGJ1bGV0LnVwZGF0ZVJlYWxUaW1lKGR0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdXBkYXRlIGZpc2hzXG4gICAgICAgIHZhciBsaXN0RmlzaFBvbHkgPSBuZXcgQXJyYXk8U0FULlBvbHlnb24+KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBjID0gdGhpcy5maXNocy5sZW5ndGg7IGkgPCBjOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaXNoID0gdGhpcy5maXNoc1tpXTtcbiAgICAgICAgICAgIGZpc2gudXBkYXRlUmVhbFRpbWUoZHQpO1xuICAgICAgICAgICAgaWYgKGZpc2gubm9kZS5hY3RpdmUgJiYgTWF0aC5hYnMoZmlzaC5ub2RlLngpIDwgNjQwICogMS4xICYmIE1hdGguYWJzKGZpc2gubm9kZS55KSA8IDM2MCAqIDEuMSkge1xuICAgICAgICAgICAgICAgIGxpc3RGaXNoUG9seS5wdXNoKGZpc2guZ2V0UG9seWdvbigpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdEZpc2hQb2x5LnB1c2gobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2NoZWNrIGNvbGxpc2lvblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgY0J1bGxldCA9IHRoaXMuYnVsbGV0cy5sZW5ndGg7IGkgPCBjQnVsbGV0OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBidWxsZXQgPSB0aGlzLmJ1bGxldHNbaV07XG4gICAgICAgICAgICBpZiAoIWJ1bGxldC5ub2RlLmFjdGl2ZSB8fCBidWxsZXQuaXNFeHBsb3JpbmcgfHwgYnVsbGV0LmlzRXhwbG9yZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIGJ1bGxldENpcmNsZSA9IGJ1bGxldC5nZXRDaXJjbGUoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBjRmlzaCA9IHRoaXMuZmlzaHMubGVuZ3RoOyBqIDwgY0Zpc2g7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBmaXNoID0gdGhpcy5maXNoc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdEZpc2hQb2x5W2pdID09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChidWxsZXQudGFyZ2V0RmlzaElkID4gMCAmJiBidWxsZXQudGFyZ2V0RmlzaElkICE9IGZpc2guaWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciBpc0NvbGxpc2lvbiA9IFNBVC50ZXN0Q2lyY2xlUG9seWdvbihidWxsZXRDaXJjbGUsIGxpc3RGaXNoUG9seVtqXSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ29sbGlzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5leHBsb3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZpc2guaHVydCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGlzdEZpc2hQb2x5Lmxlbmd0aCA9IDA7Ly9jbGVhciBtZW1vcnlcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNTdGF0ZUdldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRWaWV3KCk7XG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5waW5nKCgpID0+IHtcbiAgICAgICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5waW5nKCgpID0+IHtcbiAgICAgICAgICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucGluZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2codGhpcy5yb29tSWQpO1xuICAgICAgICAgICAgICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcInBsYXlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGF5ZXJJZFwiOiBDb25maWdzLkxvZ2luLlVzZXJuYW1lRmlzaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogQ29uZmlncy5Mb2dpbi5QYXNzd29yZEZpc2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluZGV4XCI6IHRoaXMucm9vbUlkLC8vcm9vbUlkXG4gICAgICAgICAgICAgICAgICAgIH0sIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzW1wib2tcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc1tcImVyclwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY29uZmlybURpYWxvZy5zaG93MihcIlPhu5EgZMawIGtow7RuZyDEkeG7pyB2dWkgbMOybmcgbuG6oXAgdGjDqm0uXCIsIChpc0NvbmZpcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYmJ5Lmluc3RhbmNlLnBvcHVwQ29pblRyYW5zZmVyLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcInF1aXRcIiwgbnVsbCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkzhu5dpIFwiICsgcmVzW1wiZXJyXCJdICsgXCIsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTOG7l2kgXCIgKyByZXNbXCJlcnJcIl0gKyBcIiwga2jDtG5nIHjDoWMgxJHhu4tuaC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYmJ5LmdldENvbXBvbmVudChMb2JieSkuc2hvdyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN0YXRlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0VmlldygpIHtcbiAgICAgICAgdGhpcy5iZXRJZHggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbaV0ubGVhdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maXNocy5sZW5ndGg7IGkrKykgdGhpcy5maXNoc1tpXS5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgdGhpcy5maXNocy5sZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWxsZXRzLmxlbmd0aDsgaSsrKSB0aGlzLmJ1bGxldHNbaV0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvaW5FZmZlY3RzLmxlbmd0aDsgaSsrKSB0aGlzLmNvaW5FZmZlY3RzW2ldLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uc2hvdyhmYWxzZSk7XG4gICAgICAgIHRoaXMuZWZmZWN0TWVnYVdpbi5zaG93KGZhbHNlKTtcbiAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LnNob3coZmFsc2UpO1xuXG4gICAgICAgIHRoaXMucG9wdXBHdWlkZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLndhdmVTdGF0ZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLndhdmVTdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEphY2twb3QoKSB7XG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5yZXF1ZXN0KFwiZ2V0SmFja3BvdFwiLCBudWxsLCAocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc1tcIm9rXCJdKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmxpc3RKYWNrcG90Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxpc3RKYWNrcG90LnB1c2gocmVzW1wiZGF0YVwiXVt0aGlzLnJvb21JZCArIFwiMVwiXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RKYWNrcG90LnB1c2gocmVzW1wiZGF0YVwiXVt0aGlzLnJvb21JZCArIFwiMlwiXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RKYWNrcG90LnB1c2gocmVzW1wiZGF0YVwiXVt0aGlzLnJvb21JZCArIFwiM1wiXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RKYWNrcG90LnB1c2gocmVzW1wiZGF0YVwiXVt0aGlzLnJvb21JZCArIFwiNFwiXSk7XG5cbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsSmFja3BvdCwgdGhpcy5saXN0SmFja3BvdFt0aGlzLmJldElkeF0sIDAuMyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U3RhdGUoaXNGaXJzdDogYm9vbGVhbikge1xuICAgICAgICBpZiAoIWlzRmlyc3QpIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgdGhpcy5pc1N0YXRlR2V0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJlc2V0VmlldygpO1xuXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5yZXF1ZXN0KFwic3RhdGVcIiwgbnVsbCwgKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0ZpcnN0KSBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgLy8gLy8gIGNjLmxvZyhcInN0YXRlOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgLy9pbml0IHBsYXllcnNcbiAgICAgICAgICAgIGxldCBwbGF5ZXJzRGF0YTogQXJyYXk8YW55PiA9IHJlc1tcInBsYXllcnNcIl07XG4gICAgICAgICAgICBsZXQgbWVQbGF5ZXJEYXRhID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBtZVBsYXllclNlcnZlclBvcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcnNEYXRhW2ldW1wicGxheWVySWRcIl0gPT0gQ29uZmlncy5Mb2dpbi5Vc2VybmFtZUZpc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVQbGF5ZXJTZXJ2ZXJQb3MgPSBwbGF5ZXJzRGF0YVtpXVtcInBvc0luZGV4XCJdO1xuICAgICAgICAgICAgICAgICAgICBtZVBsYXllckRhdGEgPSBwbGF5ZXJzRGF0YVtpXTtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luRmlzaCA9IHBsYXllcnNEYXRhW2ldW1wiY2FzaFwiXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIm1lUGxheWVyU2VydmVyUG9zOiBcIiArIG1lUGxheWVyU2VydmVyUG9zKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm1hcFBsYXllcnNJZHhbbWVQbGF5ZXJTZXJ2ZXJQb3NdW3BsYXllcnNEYXRhW2ldW1wicG9zSW5kZXhcIl1dO1xuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJEYXRhID0gcGxheWVyc0RhdGFbaV07XG4gICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyc1tsb2NhbFBvc107XG4gICAgICAgICAgICAgICAgcGxheWVyLnNldChwbGF5ZXJEYXRhW1wiaWRcIl0sIHBsYXllckRhdGFbXCJwbGF5ZXJJZFwiXSwgcGxheWVyRGF0YVtcIm5pY2tuYW1lXCJdLCBwbGF5ZXJEYXRhW1wiY2FzaFwiXSwgcGxheWVyRGF0YVtcImF2YXRhclwiXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnNlcnZlclBvcyA9IHBsYXllckRhdGFbXCJwb3NJbmRleFwiXTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGJsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlck1pbih0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZW5kIGluaXQgcGxheWVyc1xuXG4gICAgICAgICAgICAvL2luaXQgZmlzaHNcbiAgICAgICAgICAgIGxldCBvYmplY3RzID0gcmVzW1wib2JqZWN0c1wiXS5jb25jYXQocmVzW1wic29iamVjdHNcIl0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpc2hOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5maXNoVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGxldCBmaXNoID0gZmlzaE5vZGUuZ2V0Q29tcG9uZW50KEZpc2gpO1xuICAgICAgICAgICAgICAgIGZpc2gubm9kZS5wYXJlbnQgPSB0aGlzLmZpc2hzTm9kZTtcbiAgICAgICAgICAgICAgICBmaXNoLnNldERhdGEob2JqZWN0c1tpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXNocy5wdXNoKGZpc2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9lbmQgaW5pdCBmaXNoXG5cbiAgICAgICAgICAgIC8vdGltZSBza2lsbFxuICAgICAgICAgICAgLy9mYXN0IHNob290XG4gICAgICAgICAgICB2YXIgcmZpcmUgPSByZXNbJ3RpbWUnXSAtIG1lUGxheWVyRGF0YVsncmZpcmUnXTtcbiAgICAgICAgICAgIHZhciBjUmZpcmUgPSBQbGF5LlNFUlZFUl9DT05GSUdbJ0Zhc3RGaXJlQ29vbERvd25TJ107XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRmFzdFNob290LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIGlmIChyZmlyZSA+IGNSZmlyZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuRmFzdFNob290LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsRmFzdFNob290VGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkZhc3RTaG9vdC5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJUaW1lRmFzdFNob290Q291bnRkb3duID0gcmZpcmU7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxGYXN0U2hvb3RUaW1lLnN0cmluZyA9IHRoaXMuY3VyVGltZUZhc3RTaG9vdENvdW50ZG93biArIFwic1wiO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsRmFzdFNob290VGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3RhcmdldCBcbiAgICAgICAgICAgIHZhciBzbmlwZSA9IHJlc1sndGltZSddIC0gbWVQbGF5ZXJEYXRhWydzbmlwZSddO1xuICAgICAgICAgICAgdmFyIGNTcGluZSA9IFBsYXkuU0VSVkVSX0NPTkZJR1snU25pcGVDb29sRG93blMnXTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NUYXJnZXRGaXNoLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIGlmIChzbmlwZSA+IGNTcGluZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuVGFyZ2V0RmlzaC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibEZhc3RTaG9vdFRpbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5UYXJnZXRGaXNoLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clRpbWVUYXJnZXRGaXNoQ291bnRkb3duID0gc25pcGU7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxUYXJnZXRGaXNoVGltZS5zdHJpbmcgPSB0aGlzLmN1clRpbWVUYXJnZXRGaXNoQ291bnRkb3duICsgXCJzXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxUYXJnZXRGaXNoVGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNTdGF0ZUdldGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5nZXRKYWNrcG90KCk7XG5cbiAgICAgICAgICAgIGlmIChpc0ZpcnN0KSB0aGlzLmxvYWRpbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlU2hvb3QoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCB8fCB0aGlzLmlzVGFyZ2V0RmlzaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0RmlzaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGd1bldvcmxkUG9zID0gdGhpcy5tZVBsYXllci5ndW5Sb3RhdGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgICAgICAgICAgdmFyIGZpc2hXb3JsZFBvcyA9IHRoaXMudGFyZ2V0RmlzaC5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih0aGlzLnRhcmdldEZpc2gubm9kZS53aWR0aCAvIDIsIDApKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBVdGlscy52MkRpc3RhbmNlKGZpc2hXb3JsZFBvcywgZ3VuV29ybGRQb3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMudGFyZ2V0RmlzaC5ub2RlLngpID4gNjQwICogMC44IHx8IE1hdGguYWJzKHRoaXMudGFyZ2V0RmlzaC5ub2RlLnkpID4gMzYwICogMC44IHx8IGRpc3RhbmNlIDwgMTM1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9yZUFsbEJ1bGxldFdpdGhUYXJnZXRGaXNoSWQodGhpcy50YXJnZXRGaXNoLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0RmlzaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VySW50ZXJ2YWxGaW5kVGFyZ2V0RmlzaCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZEFuZ2xlID0gZmlzaFdvcmxkUG9zLnN1YihndW5Xb3JsZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoZEFuZ2xlLnksIGRBbmdsZS54KSAqIFV0aWxzLlJhZDJEZWc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVQbGF5ZXIuZ3VuUm90YXRlLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudGFyZ2V0LnBvc2l0aW9uID0gdGhpcy50YXJnZXRGaXNoLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldFBvc2l0aW9uKHRoaXMudGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihmaXNoV29ybGRQb3MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzVGFyZ2V0RmlzaCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VySW50ZXJ2YWxGaW5kVGFyZ2V0RmlzaCA9IE1hdGgubWF4KDAsIHRoaXMuY3VySW50ZXJ2YWxGaW5kVGFyZ2V0RmlzaCAtIGR0KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJJbnRlcnZhbEZpbmRUYXJnZXRGaXNoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5kVGFyZ2V0RmlzaEluV29ybGQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJTaG9vdEludGVydmFsID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJTaG9vdEludGVydmFsID0gTWF0aC5tYXgoMCwgdGhpcy5jdXJTaG9vdEludGVydmFsIC0gZHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNTaG9vdCkge1xuICAgICAgICAgICAgdGhpcy5jdXJTaG9vdEludGVydmFsID0gdGhpcy5pc0Zhc3RTaG9vdCA/IHRoaXMuZmFzdFNob290SW50ZXJ2YWwgOiB0aGlzLnNob290SW50ZXJ2YWw7XG5cbiAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW5GaXNoIDwgdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob290ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQpIHRoaXMuc3RvcEF1dG9TaG9vdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCh0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkIHx8IHRoaXMuaXNUYXJnZXRGaXNoKSAmJiB0aGlzLnRhcmdldEZpc2ggPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW5GaXNoID0gTWF0aC5tYXgoMCwgQ29uZmlncy5Mb2dpbi5Db2luRmlzaCAtIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0pO1xuICAgICAgICAgICAgdGhpcy5tZVBsYXllci5jb2luID0gQ29uZmlncy5Mb2dpbi5Db2luRmlzaDtcbiAgICAgICAgICAgIHRoaXMubWVQbGF5ZXIubGJsQ29pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luRmlzaCk7XG5cbiAgICAgICAgICAgIHRoaXMubWVQbGF5ZXIuc2hvb3QoKTtcblxuICAgICAgICAgICAgLy9wbGF5IGF1ZGlvXG4gICAgICAgICAgICBpZih0aGlzLnNvdW5kU3RhdGUgPT0gMSl7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU2hvb3QsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBsZXQgYnVsbGV0QW5nbGUgPSB0aGlzLm1lUGxheWVyLmd1blJvdGF0ZS5hbmdsZTtcbiAgICAgICAgICAgIHZhciBidWxsZXQgPSB0aGlzLmdldEJ1bGxldCgpO1xuICAgICAgICAgICAgYnVsbGV0LmJ1bGxldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVzQnVsbGV0W3RoaXMuYmV0SWR4XTtcbiAgICAgICAgICAgIGJ1bGxldC50YXJnZXRGaXNoSWQgPSB0aGlzLnRhcmdldEZpc2ggIT0gbnVsbCA/IHRoaXMudGFyZ2V0RmlzaC5pZCA6IC0xO1xuICAgICAgICAgICAgYnVsbGV0Lm5vZGUuYW5nbGUgPSBidWxsZXRBbmdsZTtcbiAgICAgICAgICAgIHZhciBwb3MgPSBidWxsZXQubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5tZVBsYXllci5ndW5Sb3RhdGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTykpO1xuICAgICAgICAgICAgcG9zLnggKz0gVXRpbHMuZGVncmVlc1RvVmVjMihidWxsZXQubm9kZS5hbmdsZSkueCAqIDkwO1xuICAgICAgICAgICAgcG9zLnkgKz0gVXRpbHMuZGVncmVlc1RvVmVjMihidWxsZXQubm9kZS5hbmdsZSkueSAqIDkwO1xuICAgICAgICAgICAgYnVsbGV0Lm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgIGJ1bGxldC5ydW4oKTtcblxuICAgICAgICAgICAgbGV0IHNob290UmFkID0gYnVsbGV0QW5nbGUgKiBVdGlscy5EZWcyUmFkO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm1lUGxheWVyLnNlcnZlclBvcykge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgc2hvb3RSYWQgPSBzaG9vdFJhZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBzaG9vdFJhZCA9IE1hdGguUEkgLSBzaG9vdFJhZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBzaG9vdFJhZCA9IHNob290UmFkIC0gTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBzaG9vdFJhZCA9IC1zaG9vdFJhZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkubm90aWZ5KFwic2hvb3RcIiwge1xuICAgICAgICAgICAgICAgICdyYWQnOiBzaG9vdFJhZCwvL2dvYyBiYW5cbiAgICAgICAgICAgICAgICAndHlwZSc6IHRoaXMuYmV0SWR4ICsgMSwvL2xvYWkgc3VuZyAxLT40XG4gICAgICAgICAgICAgICAgJ3RhcmdldCc6IHRoaXMudGFyZ2V0RmlzaCAhPSBudWxsID8gdGhpcy50YXJnZXRGaXNoLmlkIDogLTEsLy9pZCBjYSB0YXJnZXRcbiAgICAgICAgICAgICAgICAncmFwaWRGaXJlJzogdGhpcy5pc0Zhc3RTaG9vdCwgLy9iYW4gbmhhbmggYm9vbGVhbixcbiAgICAgICAgICAgICAgICAnYXV0byc6IGZhbHNlIC8vYmFuIHR1IGRvbmcgYm9vbGVhblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRUYXJnZXRGaXNoSW5Xb3JsZCgpIHtcbiAgICAgICAgdGhpcy5jdXJJbnRlcnZhbEZpbmRUYXJnZXRGaXNoID0gdGhpcy5pbnRlcnZhbEZpbmRUYXJnZXRGaXNoO1xuXG4gICAgICAgIGxldCBsaXN0RmlzaEFjdGl2ZUluV29ybGQgPSBbXTtcblxuICAgICAgICB2YXIgZ3VuV29ybGRQb3MgPSB0aGlzLm1lUGxheWVyLmd1blJvdGF0ZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpc2hzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZmlzaE5vZGUgPSB0aGlzLmZpc2hzW2ldLm5vZGU7XG4gICAgICAgICAgICBpZiAoZmlzaE5vZGUuYWN0aXZlICYmIE1hdGguYWJzKGZpc2hOb2RlLnBvc2l0aW9uLngpIDw9IDY0MCAqIDAuOCAmJiBNYXRoLmFicyhmaXNoTm9kZS5wb3NpdGlvbi55KSA8PSAzNjAgKiAwLjgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlzaFdvcmxkUG9zID0gZmlzaE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gVXRpbHMudjJEaXN0YW5jZShndW5Xb3JsZFBvcywgZmlzaFdvcmxkUG9zKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPj0gMTM1KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RGaXNoQWN0aXZlSW5Xb3JsZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpc2g6IHRoaXMuZmlzaHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0RmlzaEFjdGl2ZUluV29ybGQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRGaXNoID0gbGlzdEZpc2hBY3RpdmVJbldvcmxkW1V0aWxzLnJhbmRvbVJhbmdlSW50KDAsIGxpc3RGaXNoQWN0aXZlSW5Xb3JsZC5sZW5ndGgpXVtcImZpc2hcIl07XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucG9zaXRpb24gPSB0aGlzLnRhcmdldEZpc2gubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcEF1dG9TaG9vdCgpIHtcbiAgICAgICAgdGhpcy5pc1Nob290ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG91Y2hQYWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJJbnRlcnZhbEZpbmRUYXJnZXRGaXNoID0gMDtcbiAgICAgICAgdGhpcy50YXJnZXRGaXNoID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEJ1bGxldCgpOiBCdWxsZXQge1xuICAgICAgICBsZXQgYnVsbGV0OiBCdWxsZXQgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnVsbGV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1bGxldHNbaV0ubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldHNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1bGxldCA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0VGVtcGxhdGUpO1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJ1bGxldFRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgICAgIGJ1bGxldCA9IG5vZGUuZ2V0Q29tcG9uZW50KEJ1bGxldCk7XG4gICAgICAgICAgICB0aGlzLmJ1bGxldHMucHVzaChidWxsZXQpO1xuICAgICAgICB9XG4gICAgICAgIGJ1bGxldC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGJ1bGxldC50YXJnZXRGaXNoSWQgPSAtMTtcbiAgICAgICAgcmV0dXJuIGJ1bGxldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGV4cGxvcmVBbGxCdWxsZXRXaXRoVGFyZ2V0RmlzaElkKGZpc2hJZDogbnVtYmVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWxsZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idWxsZXRzW2ldLm5vZGUuYWN0aXZlICYmIHRoaXMuYnVsbGV0c1tpXS50YXJnZXRGaXNoSWQgPj0gMCAmJiB0aGlzLmJ1bGxldHNbaV0udGFyZ2V0RmlzaElkID09IGZpc2hJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0c1tpXS50YXJnZXRGaXNoSWQgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb2luRWZmZWN0KCk6IENvaW5FZmZlY3Qge1xuICAgICAgICBsZXQgY29pbkVmZmVjdDogQ29pbkVmZmVjdCA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2luRWZmZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvaW5FZmZlY3RzW2ldLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY29pbkVmZmVjdCA9IHRoaXMuY29pbkVmZmVjdHNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvaW5FZmZlY3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvaW5FZmZlY3RUZW1wbGF0ZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuY29pbkVmZmVjdFRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgICAgIGNvaW5FZmZlY3QgPSBub2RlLmdldENvbXBvbmVudChDb2luRWZmZWN0KTtcbiAgICAgICAgICAgIHRoaXMuY29pbkVmZmVjdHMucHVzaChjb2luRWZmZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBjb2luRWZmZWN0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29pbkVmZmVjdC5ub2RlLnNldFNpYmxpbmdJbmRleChjb2luRWZmZWN0Lm5vZGUucGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4gY29pbkVmZmVjdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZpc2hCeUlkKGlkOiBudW1iZXIpOiBGaXNoIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpc2hzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maXNoc1tpXS5pZCA9PSBpZCkgcmV0dXJuIHRoaXMuZmlzaHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQbGF5ZXJCeUlkKGlkOiBudW1iZXIpOiBQbGF5ZXIge1xuICAgICAgICBpZiAoaWQgPD0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJzW2ldLmlkID4gMCAmJiB0aGlzLnBsYXllcnNbaV0uaWQgPT0gaWQpIHJldHVybiB0aGlzLnBsYXllcnNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQbGF5ZXJCeVVzZXJuYW1lKHVzZXJuYW1lOiBzdHJpbmcpOiBQbGF5ZXIge1xuICAgICAgICBpZiAodXNlcm5hbWUgPT0gbnVsbCB8fCB1c2VybmFtZSA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnNbaV0udXNlcm5hbWUgIT0gbnVsbCAmJiB0aGlzLnBsYXllcnNbaV0udXNlcm5hbWUgIT0gXCJcIiAmJiB0aGlzLnBsYXllcnNbaV0udXNlcm5hbWUgPT0gdXNlcm5hbWUpIHJldHVybiB0aGlzLnBsYXllcnNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpc2hBbmltQnlUeXBlKHR5cGU6IG51bWJlcik6IGNjLk5vZGUge1xuICAgICAgICBsZXQgbmFtZSA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpc2gwXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZmlzaDFcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXNoMlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpc2gzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZmlzaDRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXNoNVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpc2g2XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZmlzaDdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXNoOVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpc2g5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpc2gxMFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXNoMTFcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZmlzaDEyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpc2gxM1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXNoMTRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZmlzaDE1XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpc2gxNlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXNoMTdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZmlzaDE4XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpc2gxOVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXNoMjBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZmlzaDIxXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpc2gyMlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXNoMjNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiZmlzaDI0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpc2hzQW5pbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlzaHNBbmltW2ldLm5hbWUgIT0gbnVsbCAmJiB0aGlzLmZpc2hzQW5pbVtpXS5uYW1lICE9IFwiXCIgJiYgdGhpcy5maXNoc0FuaW1baV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlzaHNBbmltW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmZpc2hzQW5pbVswXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0R2V0U3RhdGUoKSB7XG4gICAgICAgIHRoaXMuZ2V0U3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RCZXRVcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmV0SWR4IDwgdGhpcy5saXN0QmV0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuYmV0SWR4Kys7XG4gICAgICAgICAgICB0aGlzLm1lUGxheWVyLmxibEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXJNaW4odGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSk7XG4gICAgICAgICAgICB0aGlzLm1lUGxheWVyLnNldEd1bih0aGlzLmJldElkeCk7XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibEphY2twb3QsIHRoaXMubGlzdEphY2twb3RbdGhpcy5iZXRJZHhdLCAwLjMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFjdEJldERvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJldElkeCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmV0SWR4LS07XG4gICAgICAgICAgICB0aGlzLm1lUGxheWVyLmxibEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXJNaW4odGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSk7XG4gICAgICAgICAgICB0aGlzLm1lUGxheWVyLnNldEd1bih0aGlzLmJldElkeCk7XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibEphY2twb3QsIHRoaXMubGlzdEphY2twb3RbdGhpcy5iZXRJZHhdLCAwLjMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFjdEJhY2soKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5jb25maXJtRGlhbG9nLnNob3cyKFwiQuG6oW4gY8OzIG114buRbiBy4budaSBraOG7j2kgYsOgbiBraMO0bmdcIiwgKGlzQ29uZmlybSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQ29uZmlybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0RmFzdFNob290KCkge1xuICAgICAgICB0aGlzLmlzRmFzdFNob290ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idG5GYXN0U2hvb3QuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgY0R1cmF0aW9uID0gUGxheS5TRVJWRVJfQ09ORklHWydGYXN0RmlyZUR1cmF0aW9uJ107XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NGYXN0U2hvb3QucHJvZ3Jlc3MgPSAxO1xuICAgICAgICB0aGlzLnR3ZWVucy5wdXNoKGNjLnR3ZWVuKHRoaXMucHJvZ3Jlc3NGYXN0U2hvb3QpLnRvKGNEdXJhdGlvbiwgeyBwcm9ncmVzczogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNGYXN0U2hvb3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY3VyVGltZUZhc3RTaG9vdENvdW50ZG93biA9IFBsYXkuU0VSVkVSX0NPTkZJR1snRmFzdEZpcmVDb29sRG93blMnXTtcbiAgICAgICAgICAgIHRoaXMubGJsRmFzdFNob290VGltZS5zdHJpbmcgPSB0aGlzLmN1clRpbWVGYXN0U2hvb3RDb3VudGRvd24gKyBcInNcIjtcbiAgICAgICAgICAgIHRoaXMubGJsRmFzdFNob290VGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pLnN0YXJ0KCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RUYXJnZXRGaXNoKCkge1xuICAgICAgICB0aGlzLmlzU2hvb3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzVGFyZ2V0RmlzaCA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuVGFyZ2V0RmlzaC5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBjRHVyYXRpb24gPSBQbGF5LlNFUlZFUl9DT05GSUdbJ1NuaXBlRHVyYXRpb25TJ107XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUYXJnZXRGaXNoLnByb2dyZXNzID0gMTtcbiAgICAgICAgdGhpcy50d2VlbnMucHVzaChjYy50d2Vlbih0aGlzLnByb2dyZXNzVGFyZ2V0RmlzaCkudG8oY0R1cmF0aW9uLCB7IHByb2dyZXNzOiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1RhcmdldEZpc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RmlzaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY3VyVGltZVRhcmdldEZpc2hDb3VudGRvd24gPSBQbGF5LlNFUlZFUl9DT05GSUdbJ1NuaXBlQ29vbERvd25TJ107XG4gICAgICAgICAgICB0aGlzLmxibFRhcmdldEZpc2hUaW1lLnN0cmluZyA9IHRoaXMuY3VyVGltZVRhcmdldEZpc2hDb3VudGRvd24gKyBcInNcIjtcbiAgICAgICAgICAgIHRoaXMubGJsVGFyZ2V0RmlzaFRpbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXNocy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgICAgIHguZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlzU2hvb3QgPSB0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkO1xuICAgICAgICAgICAgdGhpcy50b3VjaFBhZC5hY3RpdmUgPSAhdGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZDtcbiAgICAgICAgfSkuc3RhcnQoKSk7XG5cbiAgICAgICAgdGhpcy50b3VjaFBhZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXNocy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgeC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHgubm9kZS5vZmYoXCJjbGlja1wiKTtcbiAgICAgICAgICAgIHgubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldEZpc2ggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiYWNrKCkge1xuICAgICAgICB0aGlzLmlzU3RhdGVHZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0b3BBdXRvU2hvb3QoKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcInF1aXRcIiwgbnVsbCwgKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRWaWV3KCk7XG4gICAgICAgICAgICB0aGlzLnNob3coZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5sb2JieS5nZXRDb21wb25lbnQoTG9iYnkpLnNob3codHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RFZmZlY3RKYWNrcG90VGVzdCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LnNob3codHJ1ZSwgXCJUZXN0IG5pY2tuYW1lXCIsIDU0MDMyNDIzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0RWZmZWN0QmlnV2luVGVzdCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uc2hvdyh0cnVlLCBcIlRlc3Qgbmlja25hbWVcIiwgNTQwMzI0MjMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RFZmZlY3RNZWdhV2luVGVzdCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RNZWdhV2luLnNob3codHJ1ZSwgXCJUZXN0IG5pY2tuYW1lXCIsIDU0MDMyNDIzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdyhpc1Nob3c6IGJvb2xlYW4sIHJvb21JZDogbnVtYmVyID0gMCkge1xuICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgICBpZiAoUGxheS5TRVJWRVJfQ09ORklHID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYmJ5LmdldENvbXBvbmVudChMb2JieSkuc2hvdyh0cnVlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkLhuqFuIGNoxrBhIMSRxINuZyBuaOG6rXAuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvb21JZCA9IHJvb21JZDtcblxuICAgICAgICAgICAgdGhpcy5zdG9wQXV0b1Nob290KCk7XG4gICAgICAgICAgICB0aGlzLnBhbmVsTWVudS5zaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0QmV0Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxpc3RCZXQucHVzaChQbGF5LlNFUlZFUl9DT05GSUdbXCJUeXBlVG9WYWx1ZVwiXVtcIkJ1bGxldDFcIl0gKiBQbGF5LlNFUlZFUl9DT05GSUdbJ1RhYmxlQnVsbGV0VmFsdWVSYXRlJ11bdGhpcy5yb29tSWRdKTtcbiAgICAgICAgICAgIHRoaXMubGlzdEJldC5wdXNoKFBsYXkuU0VSVkVSX0NPTkZJR1tcIlR5cGVUb1ZhbHVlXCJdW1wiQnVsbGV0MlwiXSAqIFBsYXkuU0VSVkVSX0NPTkZJR1snVGFibGVCdWxsZXRWYWx1ZVJhdGUnXVt0aGlzLnJvb21JZF0pO1xuICAgICAgICAgICAgdGhpcy5saXN0QmV0LnB1c2goUGxheS5TRVJWRVJfQ09ORklHW1wiVHlwZVRvVmFsdWVcIl1bXCJCdWxsZXQzXCJdICogUGxheS5TRVJWRVJfQ09ORklHWydUYWJsZUJ1bGxldFZhbHVlUmF0ZSddW3RoaXMucm9vbUlkXSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RCZXQucHVzaChQbGF5LlNFUlZFUl9DT05GSUdbXCJUeXBlVG9WYWx1ZVwiXVtcIkJ1bGxldDRcIl0gKiBQbGF5LlNFUlZFUl9DT05GSUdbJ1RhYmxlQnVsbGV0VmFsdWVSYXRlJ11bdGhpcy5yb29tSWRdKTtcbiAgICAgICAgICAgIHRoaXMuc2hvb3RJbnRlcnZhbCA9IDEgLyBQbGF5LlNFUlZFUl9DT05GSUdbXCJGSVJFX1JBVEVcIl07XG4gICAgICAgICAgICB0aGlzLmZhc3RTaG9vdEludGVydmFsID0gdGhpcy5zaG9vdEludGVydmFsIC8gUGxheS5TRVJWRVJfQ09ORklHW1wiRmFzdEZpcmVSYXRlXCJdO1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3B1cEd1aWRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZS5nZXRDb21wb25lbnQoUG9wdXBHdWlkZSkuZGlzbWlzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19