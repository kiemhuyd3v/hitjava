"use strict";
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