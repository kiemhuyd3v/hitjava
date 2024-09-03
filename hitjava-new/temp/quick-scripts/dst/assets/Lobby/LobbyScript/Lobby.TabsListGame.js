
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.TabsListGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70d69J7j5VAtpzxtw72/FZh', 'Lobby.TabsListGame');
// Lobby/LobbyScript/Lobby.TabsListGame.ts

"use strict";
//import Configs from "../../Loading/src/Configs";
//import { Global } from "../../Loading/src/Global";
//import ItemGame, { ItemGameType } from "./Lobby.ItemGame";
//import App from "./Script/common/App";
//import ScrollViewControl from "./Script/common/ScrollViewControl";
//import Utils from "./Script/common/Utils";
//
//
//const { ccclass, property } = cc._decorator;
//
//@ccclass("Lobby.TabsListGameTab")
//export class Tab {
//    @property(cc.Button)
//    button: cc.Button = null;
//    @property(cc.SpriteFrame)
//    sfNormal: cc.SpriteFrame = null;
//    @property(cc.SpriteFrame)
//    sfActive: cc.SpriteFrame = null;
//
//}
//
//@ccclass
//export default class TabsListGame extends cc.Component {
//
//    @property([Tab])
//    tabs: Tab[] = [];
//
//    @property([ItemGame])
//    itemGames: ItemGame[] = [];
//
//    @property(cc.Node)
//    contentIconGame: cc.Node = null;
//    private seletectIdx = 0;
//    @property(cc.ScrollView)
//    scrListGame: cc.ScrollView = null;
//
//    @property(ScrollViewControl)
//    scrGame: ScrollViewControl = null;
//    isShowStartEff: boolean = true;
//    currenListGame = [];
//    listGameConfig = [
//        {
//            listgame: [
//                {
//                    gameName: 'XOSO',
//                    spinePath: 'lote79/spineIcon/XoSo/xoso',
//                    spineName: 'animation',
//                    isSizeBig: true,
//                    isHot: true,
//                    position: cc.v2(3, -249),
//                    tabGame: 'gamefish',
//                 //   positionLbJP2: cc.v2(35, -82),
//                 //   positionLbJP1: cc.v2(-32, -129),
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamefish",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//		{
//            listgame: [
//                {
//                    gameName: 'TAIXIU',
//                    spinePath: 'lote79/spineIcon/TAIXIU/Taixiu_icon',
//                    spineName: 'animation',
//                    isSizeBig: true,
//                    isHot: false,
//                    position: cc.v2(3, -244),
//                    tabGame: 'gamemini',
//                    positionLbJP2: cc.v2(35, -84),
//                    positionLbJP1: cc.v2(-32, -133),
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamemini",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//		//{
//        //    listgame: [
//        //        {
//        //            gameName: 'MauBinh',
//        //            spinePath: 'lote79/spineIcon/TAIXIU/Taixiu_icon',
//        //            spineName: 'animation',
//        //            isSizeBig: true,
//        //            isHot: false,
//        //            position: cc.v2(3, -242),
//        //            tabGame: 'gamemini',
//        //            positionLbJP2: cc.v2(35, -82),
//        //            positionLbJP1: cc.v2(-32, -129),
//        //            comingSoon: false
//        //        }
//        //    ],
//        //    tabGame: "gamemini",
//        //    isBreakTab: false,
//        //    isSizeBig: true
//        //},
//        {
//            listgame: [
//                {
//                    gameName: 'FISH',
//                    spinePath: 'lote79/spineIcon/BANCA/Banca',
//                    spineName: 'animation vietnam',
//                    isSizeBig: true,
//                    isHot: true,
//                    position: cc.v2(-3, -238),
//                    tabGame: 'gamefish',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamefish",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'THANTAI',
//                    spinePath: 'lote79/spineIcon/THANTAI/ThanTai',
//                    spineName: 'animation vietnam',
//                    isSizeBig: true,
//                    isHot: false,
//                    position: cc.v2(-3.4, -254),
//                    tabGame: 'gameslot',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gameslot",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//		{
//            listgame: [
//                {
//                    gameName: 'BACAY',
//                    spinePath: 'lote79/spineIcon/Bacay/bacay',
//                    spineName: 'animation vietnam',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(0, -122),
//                    tabGame: 'gamecard',
//                    comingSoon: false
//                },
//                {
//                    gameName: 'TLMN',
//                    spinePath: 'lote79/spineIcon/TLMN/XocDia',
//                    spineName: 'animation vietnam',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(1, -145),
//                    tabGame: 'gamecard',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamecard",
//            isBreakTab: false,
//            isSizeBig: false
//        },
//		{
//            listgame: [
//                {
//                    gameName: 'MauBinh',
//                    spinePath: 'lote79/spineIcon/MauBinh/MauBinh',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(0, -124),
//                    tabGame: 'gamecard',
//                    comingSoon: false
//                },
//                {
//                    gameName: 'Lieng',
//                    spinePath: 'lote79/spineIcon/Lieng/Lieng',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false, 
//                    position: cc.v2(1, -142),
//                    tabGame: 'gamecard',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamecard",
//            isBreakTab: false,
//            isSizeBig: false
//        },
//		{
//            listgame: [
//                {
//                    gameName: 'BaiCao',
//                    spinePath: 'lote79/spineIcon/BaiCao/BaiCao',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(0, -130),
//                    tabGame: 'gamecard',
//                    comingSoon: false
//                },
//                { 
//                    gameName: 'Poker',
//                    spinePath: 'lote79/spineIcon/Poker/Poker',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false, 
//                    position: cc.v2(1, -142),
//                    tabGame: 'gamecard',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamecard",
//            isBreakTab: false,
//            isSizeBig: false
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'BITCOIN',
//                    spinePath: 'lote79/spineIcon/CRYPTO/crypto',
//                    spineName: 'animation',
//                    isSizeBig: true,
//                    isHot: false,
//                    position: cc.v2(-7, -239),
//                    tabGame: 'gameslot',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gameslot",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'DUAXE',
//                    spinePath: 'lote79/spineIcon/DuaXe/ic_sieuxe',
//                    spineName: 'animation vietnam',
//                    isSizeBig: true,
//                    isHot: false,
//                    position: cc.v2(0, -215),
//                    tabGame: 'gameslot',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gameslot",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'THETHAO',
//                    spinePath: 'lote79/spineIcon/EURO/Euro',
//                    spineName: 'animation vietnam',
//                    isSizeBig: true,
//                    isHot: false,
//                    position: cc.v2(3.6, -237),
//                    tabGame: 'gameslot',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gameslot",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'BIKINI',
//                    spinePath: 'lote79/spineIcon/Bikini/Bikini',
//                    spineName: 'animation',
//                    isSizeBig: true,
//                    isHot: false,
//                    position: cc.v2(-8, -302),
//                    tabGame: 'gameslot',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gameslot",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'CHIEMTINH',
//                    spinePath: 'lote79/spineIcon/ChiemTinh/ic_chiemtinh',
//                    spineName: 'animation vietnam',
//                    isSizeBig: true,
//                    isHot: false,
//                    position: cc.v2(-2, -216),
//                    tabGame: 'gameslot',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gameslot",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//		{
//            listgame: [
//                {
//                    gameName: 'BAUCUA',
//                    spinePath: 'lote79/spineIcon/BAUCUA/BauCua',
//                    spineName: 'animation vietnam',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(-3, -129),
//                    tabGame: 'gamemini',
//                    comingSoon: false
//                },
//                {
//                    gameName: 'TAIXIUSIEUTOC',
//                    spinePath: 'lote79/spineIcon/TXST/ic_tx',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(-0.5, -7),
//                    tabGame: 'gamemini',
//					comingSoon: false
//                 //   comingSoon: cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS
//                }
//            ],
//            tabGame: "gamemini",
//            isBreakTab: false,
//            isSizeBig: false
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'XOCDIA',
//                    spinePath: 'lote79/spineIcon/XocDiaMini/xocdia',
//                    spineName: 'animation',
//                    isSizeBig: true,
//                    isHot: false,
//                   // position: cc.v2(-0.5, -95),
//					position: cc.v2(-4.6, -224),
//                    tabGame: 'gamemini',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamemini",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'THANBAI',
//                    spinePath: 'lote79/spineIcon/ThanBai/anim_thanbai',
//                    spineName: 'animation vietnam',
//                    isSizeBig: true,
//                    isHot: false,
//                    position: cc.v2(-4.6, -216),
//                    tabGame: 'gameslot',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gameslot",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'CHIMDIEN',
//                    spinePath: 'lote79/spineIcon/CHIMDIEN/Agrybird',
//                    spineName: 'animation',
//                    isSizeBig: true,
//                    isHot: false,
//                    position: cc.v2(-3, -216),
//                    tabGame: 'gameslot',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gameslot",
//            isBreakTab: false,
//            isSizeBig: true
//        },
//        
//        {
//            listgame: [
//                {
//                    gameName: 'GEM',
//                    spinePath: 'lote79/spineIcon/Gem/gem_lobby',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(-5, -93),
//                    tabGame: 'gamemini',
//                    comingSoon: false
//                },
//                {
//                    gameName: 'PIKACHU',
//                    spinePath: 'lote79/spineIcon/Xeng/Fruits',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(-3, -107),
//                    tabGame: 'gamemini',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamemini",
//            isBreakTab: false,
//            isSizeBig: false
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'MINIPOKER',
//                    spinePath: 'lote79/spineIcon/Minipoker/MiniPoker',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(-3, -134),
//                    tabGame: 'gamemini',
//                    comingSoon: false
//                },
//                {
//                    gameName: 'CAOTHAP',
//                    spinePath: 'lote79/spineIcon/CAOTHAP/CaoThap',
//                    spineName: 'animation vietnam',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(-4, -129),
//                    tabGame: 'gamemini',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamemini",
//            isBreakTab: false,
//            isSizeBig: false
//        },
//        
//        
//        {
//            listgame: [
//                {
//                    gameName: 'TLMNSOLO',
//                    spinePath: 'lote79/spineIcon/TLMNSOLO/TLMNsolo',
//                    spineName: 'animation vietam',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(-1, -148),
//                    tabGame: 'gamecard',
//                    comingSoon: false
//                },
//                {
//                    gameName: 'SAM',
//                    spinePath: 'lote79/spineIcon/SAM/SAMLOC',
//                    spineName: 'animation vietnam',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(-11, -123),
//                    tabGame: 'gamecard',
//                    comingSoon: false
//                }
//            ],
//            tabGame: "gamecard",
//            isBreakTab: false,
//            isSizeBig: false
//        },
//		{
//            listgame: [
//                {
//                    gameName: 'WM',
//                    spinePath: 'lote79/spineIcon/XocDiaWM/XocDia',
//                    spineName: 'animation3',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(2, -176),
//                    tabGame: 'gamelive',
//                    comingSoon: true
//                },
//                {
//                    gameName: 'AG',
//                    spinePath: 'lote79/spineIcon/LIVEAG/livecasino2',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(80, -531.838),
//                    tabGame: 'gamelive',
//                    comingSoon: true
//                }
//            ],
//            tabGame: "gamelive",
//            isBreakTab: false,
//            isSizeBig: false,
//			comingSoon: true
//        },
//        {
//            listgame: [
//                {
//                    gameName: 'EBET',
//                    spinePath: 'lote79/spineIcon/EBET/Crypocopy6',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: true,
//                    position: cc.v2(-1, -89),
//                    tabGame: 'gamelive',
//                    comingSoon: true
//                },
//                {
//                    gameName: 'PRAGMATIC',
//                    spinePath: 'lote79/spineIcon/Pragmatic/skeleton',
//                    spineName: 'animation',
//                    isSizeBig: false,
//                    isHot: false,
//                    position: cc.v2(-6.3, -101),
//                    tabGame: 'gamelive',
//                    comingSoon: true,
//                },
//            ],
//            tabGame: "gamelive",
//            isBreakTab: false,
//            isSizeBig: false
//        }
//
//    ];
//    onLoad() {
//        this.scrListGame.getComponentInChildren(cc.Mask).enabled = true;
//        this.currenListGame = this.listGameConfig.slice();
//
//    }
//    start() {
//
//    }
//    initListGameConfig(data) {
//        for (let i = 0; i < this.listGameConfig.length; i++) {
//            let objGameItem = this.listGameConfig[i]['listgame'];
//            for (let j = 0; j < objGameItem.length; j++) {
//                let dataGameConfig = data[objGameItem[j]['gameName']];
//                objGameItem[j]['comingSoon'] = dataGameConfig['status'] == 0;
//            }
//        }
//        this.loadListGame();
//    }
//    loadListGame() {
//        this.scrGame.setDataList(this.setIconGameData.bind(this), this.currenListGame);
//        setTimeout(() => {
//            this.setJackpot();
//        }, 100);
//    }
//    setIconGameData(item, data) {
//        item.getChildByName("line_tab").active = data['isBreakTab'];
//        if (!data['isSizeBig']) {
//            for (let i = 0; i < data.listgame.length; i++) {
//                let dataGame = data.listgame[i];
//                let icGame = item.getChildByName('iconGame' + (i + 1)).getComponent(ItemGame);
//                icGame.setInfo(dataGame);
//                icGame.node.active = true;
//                if (!this.itemGames.includes(icGame))
//                    this.itemGames.push(icGame);
//            }
//            item.getChildByName('iconGameBig').active = false;
//        } else {
//            let iconGameBig = item.getChildByName('iconGameBig').getComponent(ItemGame);
//            if (!this.itemGames.includes(iconGameBig))
//                this.itemGames.push(iconGameBig);
//            iconGameBig.node.active = true;
//            let dataGame = data.listgame[0];
//            item.getChildByName('iconGame1').active = false;
//            item.getChildByName('iconGame2').active = false;
//            iconGameBig.setInfo(dataGame);
//        }
//    }
//    onScrollEvent() {
//        this.isShowStartEff = false;
//    }
//    updateSize(isHaveBanner) {
//        if (!isHaveBanner) {
//            this.scrListGame.node.width = 1250;
//            this.scrListGame.node.x = 0;
//            this.scrListGame.node.getChildByName("view").getComponent(cc.Widget).updateAlignment();
//        } else {
//            this.scrListGame.node.width = 994;
//            this.scrListGame.node.x = 140;
//            this.scrListGame.node.getChildByName("view").getComponent(cc.Widget).updateAlignment();
//        }
//    }
//    public changeTabGame(tab) {
//        this.isShowStartEff = true;
//        this.currenListGame = [];
//        if (tab == "gamelive") {
//            this.currenListGame = this.listGameConfig.slice();
//        } else {
//            let tabGameChoosen = [];
//            let tabGameLeft = [];
//            this.listGameConfig.forEach((data) => {
//                if (data['tabGame'] == tab) {
//                    tabGameChoosen.push(data);
//                } else {
//                    tabGameLeft.push(data);
//                }
//            });
//            this.currenListGame = tabGameChoosen.concat(tabGameLeft);
//        }
//        this.reset();
//        this.loadListGame();
//    }
//    reset() {
//        this.contentIconGame.children.forEach((item) => {
//            item.getChildByName('line_tab').active = false;
//        })
//        this.scrListGame.stopAutoScroll();
//        this.contentIconGame.x = -this.contentIconGame.parent.width / 2;
//    }
//
//    public getItemGameWithId(id: string): ItemGame {
//        for (let i = 0; i < this.itemGames.length; i++) {
//            if (this.itemGames[i].id == id) {
//                return this.itemGames[i];
//            }
//        }
//        return null;
//    }
//    setJackpot() {//update lại jackpot khi load lại item game;
//        if (Configs.Login.IsLogin && App.instance.topHuData != null) {
//            Global.LobbyController.handleUpdateJP();
//        } else {
//            App.instance.topHuData = JSON.parse('{"audition":{"100":{"p":647800,"x2":0},"1000":{"p":6959900,"x2":0},"10000":{"p":98156097,"x2":0}},"spartan":{"100":{"p":990296,"x2":0},"1000":{"p":9262455,"x2":0},"10000":{"p":73706904,"x2":0}},"pokemon":{"100":{"p":941981,"x2":1},"1000":{"p":5422705,"x2":1},"10000":{"p":57632614,"x2":1}},"TAI_XIU":{"0":{"px":565528720},"1":{"pt":715173010}},"benley":{"100":{"p":847257,"x2":0},"1000":{"p":7578500,"x2":0},"10000":{"p":60157886,"x2":0}},"maybach":{"100":{"p":680396,"x2":0},"1000":{"p":8596872,"x2":0},"10000":{"p":102489756,"x2":0}},"tamhung":{"100":{"p":581493,"x2":0},"1000":{"p":7870119,"x2":0},"10000":{"p":58135430,"x2":0}},"chiemtinh":{"100":{"p":511617,"x2":0},"1000":{"p":10404550,"x2":0},"10000":{"p":98601297,"x2":0}},"bikini":{"100":{"p":624702,"x2":0},"1000":{"p":9707592,"x2":0},"10000":{"p":50503932,"x2":0}},"minipoker":{"100":{"p":173090,"x2":0},"1000":{"p":1052463,"x2":0},"10000":{"p":15795786,"x2":0}},"caothap":{"1000":{},"10000":{},"50000":{},"100000":{},"500000":{}},"rollRoye":{"100":{"p":862429,"x2":1},"1000":{"p":7136508,"x2":1},"10000":{"p":65412566,"x2":1}},"galaxy":{"100":{"p":829294,"x2":1},"1000":{"p":7155563,"x2":1},"10000":{"p":52915908,"x2":1}},"rangeRover":{"100":{"p":540443,"x2":0},"1000":{"p":8776494,"x2":0},"10000":{"p":53316396,"x2":0}}}');
//            Global.LobbyController.handleUpdateJP();
//        }
//    }
//    public updateItemJackpots(id: string, j100: number, x2J100: boolean, j1000: number, x2J1000: boolean, j10000: number, x2J10000: boolean) {
//        let itemGame = this.getItemGameWithId(id);
//        if (itemGame != null) {
//            let listJP = [];
//            let dataJP100 = Object.create({});
//            dataJP100.number = j100;
//            dataJP100.x2 = x2J100;
//            listJP.push(dataJP100);
//
//            let dataJP1000 = Object.create({});
//            dataJP1000.number = j1000;
//            dataJP1000.x2 = x2J1000;
//            listJP.push(dataJP1000);
//
//            let dataJP10000 = Object.create({});
//            dataJP10000.number = j10000;
//            dataJP10000.x2 = x2J10000;
//            listJP.push(dataJP10000);
//            itemGame.setJackpot(listJP);
//        }
//    }
//    public onClickGame(even, data) {
//        //Utils.Log(data);
//        //Utils.Log('even.target.getComponent("Lobby.ItemGame").commingSoon:' + even.target.getComponent("Lobby.ItemGame").commingSoon);
//        if (even.target.getComponent("Lobby.ItemGame").commingSoon) {
//            Global.LobbyController.actComingSoon();
//            return;
//        }
//        switch (data) {
//            case "WM":
//                Global.LobbyController.actLoginWM();
//                break;
//            case "AG":
//                Global.LobbyController.actLoginAG();
//                break;
//            case "EBET":
//                Global.LobbyController.actLoginEbet();
//                break;
//            case "FISH":
//                Global.LobbyController.actGoToShootFish();
//                break;
//            case "IBC":
//                Global.LobbyController.actLoginIBC();
//                break;
//            case "SBO":
//                Global.LobbyController.actLoginSBO();
//                break;
//            case "CMD":
//                Global.LobbyController.actLoginCMD();
//                break;
//            case "THANBAI":
//                Global.LobbyController.actGoToSlot8();
//                break;
//            case "THANTAI":
//                Global.LobbyController.actGoToSlot3();
//                break;
//            case "CHIEMTINH":
//                Global.LobbyController.actGoToSlot6();
//                break;
//            case "BITCOIN":
//                Global.LobbyController.actGoToSlot7();
//                break;
//            case "BIKINI":
//                Global.LobbyController.actGoToSlot11();
//                break;
//            case "THETHAO":
//                Global.LobbyController.actGoToSlot10();
//                break;
//            case "CHIMDIEN":
//                Global.LobbyController.actGoToSlot4();
//                break;
//            case "DUAXE":
//                Global.LobbyController.actGoToSlot1();
//                break;
//            case "TAIXIU":
//                Global.LobbyController.actGameTaiXiu();
//                break;
//            case "MINIPOKER":
//                Global.LobbyController.actGameMiniPoker();
//                break;
//            case "BAUCUA":
//                Global.LobbyController.actGameBauCua();
//                break;
//            case "PIKACHU":
//                Global.LobbyController.actGameSlot3x3();
//                break;
//            case "GEM":
//                Global.LobbyController.actGameSlot3x3Gem();
//                break;
//            case "TAIXIUSIEUTOC":
//                Global.LobbyController.actGameTaiXiuSieuToc();
//                break;
//            case "CAOTHAP":
//                Global.LobbyController.actGameCaoThap();
//                break;
//            case "XOCDIA":
//                Global.LobbyController.actGoToXocDia();
//                break;
//            case "BACAY":
//                Global.LobbyController.actGoToBaCay();
//                break;
//			case "MauBinh":
//                Global.LobbyController.actGoToMauBinh();
//                break;
//			case "Lieng":
//                Global.LobbyController.actGoToLieng();
//                break;
//			case "Poker":
//                Global.LobbyController.actGoToPoker();
//                break;
//			case "BaiCao":
//                Global.LobbyController.actGoToBaiCao();
//                break;
//            case "TLMN":
//                Global.LobbyController.actGoToTLMN();
//                break;
//			case "SAM":
//                Global.LobbyController.actGoToSam();
//                break;
//            case "TLMNSOLO":
//                Global.LobbyController.actGameTLMNSolo();
//                break;
//			case "XOSO":
//                Global.LobbyController.actGotoLoto();
//                break;
//        }
//    }
//
//    // update (dt) {}
//}
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
exports.Tab = void 0;
var Lobby_ItemGame_1 = require("./Lobby.ItemGame");
var Tween_1 = require("./Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tab = /** @class */ (function () {
    function Tab() {
        this.button = null;
        this.sfNormal = null;
        this.sfActive = null;
    }
    __decorate([
        property(cc.Button)
    ], Tab.prototype, "button", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Tab.prototype, "sfNormal", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Tab.prototype, "sfActive", void 0);
    Tab = __decorate([
        ccclass("Lobby.TabsListGameTab")
    ], Tab);
    return Tab;
}());
exports.Tab = Tab;
var TabsListGame = /** @class */ (function (_super) {
    __extends(TabsListGame, _super);
    function TabsListGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = [];
        _this.itemGames = [];
        _this.contentIconGame = null;
        _this.seletectIdx = 0;
        _this.scrListGame = null;
        return _this;
        // update (dt) {}
    }
    TabsListGame.prototype.start = function () {
        var _this = this;
        this.contentIconGame.children.forEach(function (item) {
            var posInWorld = _this.contentIconGame.convertToWorldSpaceAR(item.getPosition());
            var posInView = _this.contentIconGame.parent.convertToNodeSpaceAR(posInWorld);
            var deltaLeft = (-_this.contentIconGame.parent.width / 2) - item.width / 2;
            var deltaRight = (_this.contentIconGame.parent.width / 2) + item.width / 2;
            if (posInView.x < deltaLeft || posInView.x > deltaRight) {
                item.opacity = 0;
            }
            else {
                item.opacity = 255;
            }
        });
    };
    TabsListGame.prototype.onEnable = function () {
        var self = this;
        setTimeout(function () {
            cc.log(" vao day");
            self.onScrollEvent();
        }, 200);
    };
    TabsListGame.prototype.onScrollEvent = function () {
        var _this = this;
        this.contentIconGame.children.forEach(function (item) {
            var posInWorld = _this.contentIconGame.convertToWorldSpaceAR(item.getPosition());
            var posInView = _this.contentIconGame.parent.convertToNodeSpaceAR(posInWorld);
            var deltaLeft = (-_this.contentIconGame.parent.width / 2) - item.width / 2;
            var deltaRight = (_this.contentIconGame.parent.width / 2) + item.width / 2;
            if (posInView.x < deltaLeft || posInView.x > deltaRight) {
                item.opacity = 0;
            }
            else {
                item.opacity = 255;
            }
        });
    };
    TabsListGame.prototype.updateSize = function (isHaveBanner) {
        if (!isHaveBanner) {
            this.scrListGame.node.width = 1250;
            this.scrListGame.node.x = 0;
            this.scrListGame.node.getChildByName("view").getComponent(cc.Widget).updateAlignment();
            cc.log("updateSize khong co banner");
        }
        else {
            this.scrListGame.node.width = 994;
            this.scrListGame.node.x = 140;
            this.scrListGame.node.getChildByName("view").getComponent(cc.Widget).updateAlignment();
        }
    };
    TabsListGame.prototype.onTabChanged = function () {
        switch (this.seletectIdx) {
            case 0:
                for (var i = 0; i < this.itemGames.length; i++) {
                    if (this.itemGames[i] == null)
                        continue;
                    this.itemGames[i].node.active = true;
                }
                break;
            case 1:
                for (var i = 0; i < this.itemGames.length; i++) {
                    if (this.itemGames[i] == null)
                        continue;
                    this.itemGames[i].node.active = this.itemGames[i].type == Lobby_ItemGame_1.ItemGameType.SLOT;
                }
                break;
            case 2:
                for (var i = 0; i < this.itemGames.length; i++) {
                    if (this.itemGames[i] == null)
                        continue;
                    this.itemGames[i].node.active = this.itemGames[i].type == Lobby_ItemGame_1.ItemGameType.CARD;
                }
                break;
        }
    };
    TabsListGame.prototype.changeTabGame = function () {
        var scrWidth = this.scrListGame.node.width;
        if (this.contentIconGame.width < scrWidth) {
            this.contentIconGame.x = 0;
        }
        else {
            this.contentIconGame.x = (scrWidth / 2) + ((this.contentIconGame.width / 2) - scrWidth);
        }
    };
    TabsListGame.prototype.getItemGameWithId = function (id) {
        var arr = [];
        for (var i = 0; i < this.itemGames.length; i++) {
            if (this.itemGames[i] == null)
                continue;
            if (this.itemGames[i].id == id) {
                arr.push(this.itemGames[i]);
            }
        }
        return arr;
    };
    TabsListGame.prototype.updateItemJackpots = function (id, j100, x2J100, j1000, x2J1000, j10000, x2J10000) {
        var itemGame = this.getItemGameWithId(id);
        for (var i = 0; i < itemGame.length; i++) {
            // itemGame[i].lblJackpots[0].string = Utils.formatNumber(j100);
            // itemGame[i].lblJackpots[1].string = Utils.formatNumber(j1000);
            // itemGame[i].lblJackpots[2].string = Utils.formatNumber(j10000);
            Tween_1.default.numberTo(itemGame[i].lblJackpots[0], j100, 3);
            Tween_1.default.numberTo(itemGame[i].lblJackpots[1], j1000, 3);
            Tween_1.default.numberTo(itemGame[i].lblJackpots[2], j10000, 3);
            // itemGame[i].lblJackpots[1].string = Utils.formatNumber(j1000);
            // itemGame[i].lblJackpots[2].string = Utils.formatNumber(j10000);
        }
    };
    __decorate([
        property([Tab])
    ], TabsListGame.prototype, "tabs", void 0);
    __decorate([
        property([Lobby_ItemGame_1.default])
    ], TabsListGame.prototype, "itemGames", void 0);
    __decorate([
        property(cc.Node)
    ], TabsListGame.prototype, "contentIconGame", void 0);
    __decorate([
        property(cc.ScrollView)
    ], TabsListGame.prototype, "scrListGame", void 0);
    TabsListGame = __decorate([
        ccclass
    ], TabsListGame);
    return TabsListGame;
}(cc.Component));
exports.default = TabsListGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5UYWJzTGlzdEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFrRDtBQUNsRCxvREFBb0Q7QUFDcEQsNERBQTREO0FBQzVELHdDQUF3QztBQUN4QyxvRUFBb0U7QUFDcEUsNENBQTRDO0FBQzVDLEVBQUU7QUFDRixFQUFFO0FBQ0YsOENBQThDO0FBQzlDLEVBQUU7QUFDRixtQ0FBbUM7QUFDbkMsb0JBQW9CO0FBQ3BCLDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0Isc0NBQXNDO0FBQ3RDLEVBQUU7QUFDRixHQUFHO0FBQ0gsRUFBRTtBQUNGLFVBQVU7QUFDViwwREFBMEQ7QUFDMUQsRUFBRTtBQUNGLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsRUFBRTtBQUNGLHdCQUF3QjtBQUN4QixzQ0FBc0M7QUFDdEMsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qix3Q0FBd0M7QUFDeEMsRUFBRTtBQUNGLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIsV0FBVztBQUNYLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkIsdUNBQXVDO0FBQ3ZDLDhEQUE4RDtBQUM5RCw2Q0FBNkM7QUFDN0Msc0NBQXNDO0FBQ3RDLGtDQUFrQztBQUNsQywrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLHNEQUFzRDtBQUN0RCx3REFBd0Q7QUFDeEQsdUNBQXVDO0FBQ3ZDLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLEtBQUs7QUFDTCx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLHlD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QUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNwRCxlQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3JELGlFQUFpRTtZQUNqRSxrRUFBa0U7U0FDckU7SUFDTCxDQUFDO0lBbEhEO1FBREMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7OENBQ0M7SUFHakI7UUFEQyxRQUFRLENBQUMsQ0FBQyx3QkFBUSxDQUFDLENBQUM7bURBQ007SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO3FEQUNVO0lBWmpCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F3SGhDO0lBQUQsbUJBQUM7Q0F4SEQsQUF3SEMsQ0F4SHlDLEVBQUUsQ0FBQyxTQUFTLEdBd0hyRDtrQkF4SG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG4vL2ltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9HbG9iYWxcIjtcbi8vaW1wb3J0IEl0ZW1HYW1lLCB7IEl0ZW1HYW1lVHlwZSB9IGZyb20gXCIuL0xvYmJ5Lkl0ZW1HYW1lXCI7XG4vL2ltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbi8vaW1wb3J0IFNjcm9sbFZpZXdDb250cm9sIGZyb20gXCIuL1NjcmlwdC9jb21tb24vU2Nyb2xsVmlld0NvbnRyb2xcIjtcbi8vaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbi8vXG4vL1xuLy9jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLy9cbi8vQGNjY2xhc3MoXCJMb2JieS5UYWJzTGlzdEdhbWVUYWJcIilcbi8vZXhwb3J0IGNsYXNzIFRhYiB7XG4vLyAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuLy8gICAgYnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuLy8gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuLy8gICAgc2ZOb3JtYWw6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbi8vICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbi8vICAgIHNmQWN0aXZlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4vL1xuLy99XG4vL1xuLy9AY2NjbGFzc1xuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzTGlzdEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuLy9cbi8vICAgIEBwcm9wZXJ0eShbVGFiXSlcbi8vICAgIHRhYnM6IFRhYltdID0gW107XG4vL1xuLy8gICAgQHByb3BlcnR5KFtJdGVtR2FtZV0pXG4vLyAgICBpdGVtR2FtZXM6IEl0ZW1HYW1lW10gPSBbXTtcbi8vXG4vLyAgICBAcHJvcGVydHkoY2MuTm9kZSlcbi8vICAgIGNvbnRlbnRJY29uR2FtZTogY2MuTm9kZSA9IG51bGw7XG4vLyAgICBwcml2YXRlIHNlbGV0ZWN0SWR4ID0gMDtcbi8vICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuLy8gICAgc2NyTGlzdEdhbWU6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuLy9cbi8vICAgIEBwcm9wZXJ0eShTY3JvbGxWaWV3Q29udHJvbClcbi8vICAgIHNjckdhbWU6IFNjcm9sbFZpZXdDb250cm9sID0gbnVsbDtcbi8vICAgIGlzU2hvd1N0YXJ0RWZmOiBib29sZWFuID0gdHJ1ZTtcbi8vICAgIGN1cnJlbkxpc3RHYW1lID0gW107XG4vLyAgICBsaXN0R2FtZUNvbmZpZyA9IFtcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIGxpc3RnYW1lOiBbXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdYT1NPJyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZVBhdGg6ICdsb3RlNzkvc3BpbmVJY29uL1hvU28veG9zbycsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKDMsIC0yNDkpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lZmlzaCcsXG4vLyAgICAgICAgICAgICAgICAgLy8gICBwb3NpdGlvbkxiSlAyOiBjYy52MigzNSwgLTgyKSxcbi8vICAgICAgICAgICAgICAgICAvLyAgIHBvc2l0aW9uTGJKUDE6IGNjLnYyKC0zMiwgLTEyOSksXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogZmFsc2Vcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICAgdGFiR2FtZTogXCJnYW1lZmlzaFwiLFxuLy8gICAgICAgICAgICBpc0JyZWFrVGFiOiBmYWxzZSxcbi8vICAgICAgICAgICAgaXNTaXplQmlnOiB0cnVlXG4vLyAgICAgICAgfSxcbi8vXHRcdHtcbi8vICAgICAgICAgICAgbGlzdGdhbWU6IFtcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ1RBSVhJVScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9UQUlYSVUvVGFpeGl1X2ljb24nLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbicsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoMywgLTI0NCksXG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZTogJ2dhbWVtaW5pJyxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkxiSlAyOiBjYy52MigzNSwgLTg0KSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkxiSlAxOiBjYy52MigtMzIsIC0xMzMpLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZW1pbmlcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZVxuLy8gICAgICAgIH0sXG4vL1x0XHQvL3tcbi8vICAgICAgICAvLyAgICBsaXN0Z2FtZTogW1xuLy8gICAgICAgIC8vICAgICAgICB7XG4vLyAgICAgICAgLy8gICAgICAgICAgICBnYW1lTmFtZTogJ01hdUJpbmgnLFxuLy8gICAgICAgIC8vICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9UQUlYSVUvVGFpeGl1X2ljb24nLFxuLy8gICAgICAgIC8vICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uJyxcbi8vICAgICAgICAvLyAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZSxcbi8vICAgICAgICAvLyAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAvLyAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigzLCAtMjQyKSxcbi8vICAgICAgICAvLyAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lbWluaScsXG4vLyAgICAgICAgLy8gICAgICAgICAgICBwb3NpdGlvbkxiSlAyOiBjYy52MigzNSwgLTgyKSxcbi8vICAgICAgICAvLyAgICAgICAgICAgIHBvc2l0aW9uTGJKUDE6IGNjLnYyKC0zMiwgLTEyOSksXG4vLyAgICAgICAgLy8gICAgICAgICAgICBjb21pbmdTb29uOiBmYWxzZVxuLy8gICAgICAgIC8vICAgICAgICB9XG4vLyAgICAgICAgLy8gICAgXSxcbi8vICAgICAgICAvLyAgICB0YWJHYW1lOiBcImdhbWVtaW5pXCIsXG4vLyAgICAgICAgLy8gICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgLy8gICAgaXNTaXplQmlnOiB0cnVlXG4vLyAgICAgICAgLy99LFxuLy8gICAgICAgIHtcbi8vICAgICAgICAgICAgbGlzdGdhbWU6IFtcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ0ZJU0gnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vQkFOQ0EvQmFuY2EnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbiB2aWV0bmFtJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKC0zLCAtMjM4KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZWZpc2gnLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZWZpc2hcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZVxuLy8gICAgICAgIH0sXG4vLyAgICAgICAge1xuLy8gICAgICAgICAgICBsaXN0Z2FtZTogW1xuLy8gICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgIGdhbWVOYW1lOiAnVEhBTlRBSScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9USEFOVEFJL1RoYW5UYWknLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbiB2aWV0bmFtJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigtMy40LCAtMjU0KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZXNsb3QnLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZXNsb3RcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZVxuLy8gICAgICAgIH0sXG4vL1x0XHR7XG4vLyAgICAgICAgICAgIGxpc3RnYW1lOiBbXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdCQUNBWScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9CYWNheS9iYWNheScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uIHZpZXRuYW0nLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigwLCAtMTIyKSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZWNhcmQnLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgIGdhbWVOYW1lOiAnVExNTicsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9UTE1OL1hvY0RpYScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uIHZpZXRuYW0nLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigxLCAtMTQ1KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZWNhcmQnLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZWNhcmRcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2Vcbi8vICAgICAgICB9LFxuLy9cdFx0e1xuLy8gICAgICAgICAgICBsaXN0Z2FtZTogW1xuLy8gICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgIGdhbWVOYW1lOiAnTWF1QmluaCcsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9NYXVCaW5oL01hdUJpbmgnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbicsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBpc0hvdDogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKDAsIC0xMjQpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lY2FyZCcsXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogZmFsc2Vcbi8vICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdMaWVuZycsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9MaWVuZy9MaWVuZycsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSwgXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKDEsIC0xNDIpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lY2FyZCcsXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogZmFsc2Vcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICAgdGFiR2FtZTogXCJnYW1lY2FyZFwiLFxuLy8gICAgICAgICAgICBpc0JyZWFrVGFiOiBmYWxzZSxcbi8vICAgICAgICAgICAgaXNTaXplQmlnOiBmYWxzZVxuLy8gICAgICAgIH0sXG4vL1x0XHR7XG4vLyAgICAgICAgICAgIGxpc3RnYW1lOiBbXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdCYWlDYW8nLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vQmFpQ2FvL0JhaUNhbycsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoMCwgLTEzMCksXG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZTogJ2dhbWVjYXJkJyxcbi8vICAgICAgICAgICAgICAgICAgICBjb21pbmdTb29uOiBmYWxzZVxuLy8gICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgIHsgXG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdQb2tlcicsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9Qb2tlci9Qb2tlcicsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSwgXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKDEsIC0xNDIpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lY2FyZCcsXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogZmFsc2Vcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICAgdGFiR2FtZTogXCJnYW1lY2FyZFwiLFxuLy8gICAgICAgICAgICBpc0JyZWFrVGFiOiBmYWxzZSxcbi8vICAgICAgICAgICAgaXNTaXplQmlnOiBmYWxzZVxuLy8gICAgICAgIH0sXG4vLyAgICAgICAge1xuLy8gICAgICAgICAgICBsaXN0Z2FtZTogW1xuLy8gICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgIGdhbWVOYW1lOiAnQklUQ09JTicsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9DUllQVE8vY3J5cHRvJyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZU5hbWU6ICdhbmltYXRpb24nLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZSxcbi8vICAgICAgICAgICAgICAgICAgICBpc0hvdDogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKC03LCAtMjM5KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZXNsb3QnLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZXNsb3RcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZVxuLy8gICAgICAgIH0sXG4vLyAgICAgICAge1xuLy8gICAgICAgICAgICBsaXN0Z2FtZTogW1xuLy8gICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgIGdhbWVOYW1lOiAnRFVBWEUnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vRHVhWGUvaWNfc2lldXhlJyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZU5hbWU6ICdhbmltYXRpb24gdmlldG5hbScsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoMCwgLTIxNSksXG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZTogJ2dhbWVzbG90Jyxcbi8vICAgICAgICAgICAgICAgICAgICBjb21pbmdTb29uOiBmYWxzZVxuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICBdLFxuLy8gICAgICAgICAgICB0YWJHYW1lOiBcImdhbWVzbG90XCIsXG4vLyAgICAgICAgICAgIGlzQnJlYWtUYWI6IGZhbHNlLFxuLy8gICAgICAgICAgICBpc1NpemVCaWc6IHRydWVcbi8vICAgICAgICB9LFxuLy8gICAgICAgIHtcbi8vICAgICAgICAgICAgbGlzdGdhbWU6IFtcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ1RIRVRIQU8nLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vRVVSTy9FdXJvJyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZU5hbWU6ICdhbmltYXRpb24gdmlldG5hbScsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoMy42LCAtMjM3KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZXNsb3QnLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZXNsb3RcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZVxuLy8gICAgICAgIH0sXG4vLyAgICAgICAge1xuLy8gICAgICAgICAgICBsaXN0Z2FtZTogW1xuLy8gICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgIGdhbWVOYW1lOiAnQklLSU5JJyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZVBhdGg6ICdsb3RlNzkvc3BpbmVJY29uL0Jpa2luaS9CaWtpbmknLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbicsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoLTgsIC0zMDIpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lc2xvdCcsXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogZmFsc2Vcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICAgdGFiR2FtZTogXCJnYW1lc2xvdFwiLFxuLy8gICAgICAgICAgICBpc0JyZWFrVGFiOiBmYWxzZSxcbi8vICAgICAgICAgICAgaXNTaXplQmlnOiB0cnVlXG4vLyAgICAgICAgfSxcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIGxpc3RnYW1lOiBbXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdDSElFTVRJTkgnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vQ2hpZW1UaW5oL2ljX2NoaWVtdGluaCcsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uIHZpZXRuYW0nLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZSxcbi8vICAgICAgICAgICAgICAgICAgICBpc0hvdDogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKC0yLCAtMjE2KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZXNsb3QnLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZXNsb3RcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZVxuLy8gICAgICAgIH0sXG4vL1x0XHR7XG4vLyAgICAgICAgICAgIGxpc3RnYW1lOiBbXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdCQVVDVUEnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vQkFVQ1VBL0JhdUN1YScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uIHZpZXRuYW0nLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigtMywgLTEyOSksXG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZTogJ2dhbWVtaW5pJyxcbi8vICAgICAgICAgICAgICAgICAgICBjb21pbmdTb29uOiBmYWxzZVxuLy8gICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ1RBSVhJVVNJRVVUT0MnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vVFhTVC9pY190eCcsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoLTAuNSwgLTcpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lbWluaScsXG4vL1x0XHRcdFx0XHRjb21pbmdTb29uOiBmYWxzZVxuLy8gICAgICAgICAgICAgICAgIC8vICAgY29taW5nU29vbjogY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZW1pbmlcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2Vcbi8vICAgICAgICB9LFxuLy8gICAgICAgIHtcbi8vICAgICAgICAgICAgbGlzdGdhbWU6IFtcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ1hPQ0RJQScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9Yb2NEaWFNaW5pL3hvY2RpYScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGNjLnYyKC0wLjUsIC05NSksXG4vL1x0XHRcdFx0XHRwb3NpdGlvbjogY2MudjIoLTQuNiwgLTIyNCksXG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZTogJ2dhbWVtaW5pJyxcbi8vICAgICAgICAgICAgICAgICAgICBjb21pbmdTb29uOiBmYWxzZVxuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICBdLFxuLy8gICAgICAgICAgICB0YWJHYW1lOiBcImdhbWVtaW5pXCIsXG4vLyAgICAgICAgICAgIGlzQnJlYWtUYWI6IGZhbHNlLFxuLy8gICAgICAgICAgICBpc1NpemVCaWc6IHRydWVcbi8vICAgICAgICB9LFxuLy8gICAgICAgIHtcbi8vICAgICAgICAgICAgbGlzdGdhbWU6IFtcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ1RIQU5CQUknLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vVGhhbkJhaS9hbmltX3RoYW5iYWknLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbiB2aWV0bmFtJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigtNC42LCAtMjE2KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZXNsb3QnLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZXNsb3RcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogdHJ1ZVxuLy8gICAgICAgIH0sXG4vLyAgICAgICAge1xuLy8gICAgICAgICAgICBsaXN0Z2FtZTogW1xuLy8gICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgIGdhbWVOYW1lOiAnQ0hJTURJRU4nLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vQ0hJTURJRU4vQWdyeWJpcmQnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbicsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoLTMsIC0yMTYpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lc2xvdCcsXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogZmFsc2Vcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICAgdGFiR2FtZTogXCJnYW1lc2xvdFwiLFxuLy8gICAgICAgICAgICBpc0JyZWFrVGFiOiBmYWxzZSxcbi8vICAgICAgICAgICAgaXNTaXplQmlnOiB0cnVlXG4vLyAgICAgICAgfSxcbi8vICAgICAgICBcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIGxpc3RnYW1lOiBbXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdHRU0nLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vR2VtL2dlbV9sb2JieScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoLTUsIC05MyksXG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZTogJ2dhbWVtaW5pJyxcbi8vICAgICAgICAgICAgICAgICAgICBjb21pbmdTb29uOiBmYWxzZVxuLy8gICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ1BJS0FDSFUnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vWGVuZy9GcnVpdHMnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbicsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBpc0hvdDogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKC0zLCAtMTA3KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZW1pbmknLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZW1pbmlcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2Vcbi8vICAgICAgICB9LFxuLy8gICAgICAgIHtcbi8vICAgICAgICAgICAgbGlzdGdhbWU6IFtcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ01JTklQT0tFUicsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9NaW5pcG9rZXIvTWluaVBva2VyJyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZU5hbWU6ICdhbmltYXRpb24nLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigtMywgLTEzNCksXG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZTogJ2dhbWVtaW5pJyxcbi8vICAgICAgICAgICAgICAgICAgICBjb21pbmdTb29uOiBmYWxzZVxuLy8gICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ0NBT1RIQVAnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vQ0FPVEhBUC9DYW9UaGFwJyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZU5hbWU6ICdhbmltYXRpb24gdmlldG5hbScsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBpc0hvdDogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKC00LCAtMTI5KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZW1pbmknLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IGZhbHNlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZW1pbmlcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2Vcbi8vICAgICAgICB9LFxuLy8gICAgICAgIFxuLy8gICAgICAgIFxuLy8gICAgICAgIHtcbi8vICAgICAgICAgICAgbGlzdGdhbWU6IFtcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ1RMTU5TT0xPJyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZVBhdGg6ICdsb3RlNzkvc3BpbmVJY29uL1RMTU5TT0xPL1RMTU5zb2xvJyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZU5hbWU6ICdhbmltYXRpb24gdmlldGFtJyxcbi8vICAgICAgICAgICAgICAgICAgICBpc1NpemVCaWc6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzSG90OiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoLTEsIC0xNDgpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lY2FyZCcsXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogZmFsc2Vcbi8vICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdTQU0nLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vU0FNL1NBTUxPQycsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVOYW1lOiAnYW5pbWF0aW9uIHZpZXRuYW0nLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigtMTEsIC0xMjMpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lY2FyZCcsXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogZmFsc2Vcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICAgdGFiR2FtZTogXCJnYW1lY2FyZFwiLFxuLy8gICAgICAgICAgICBpc0JyZWFrVGFiOiBmYWxzZSxcbi8vICAgICAgICAgICAgaXNTaXplQmlnOiBmYWxzZVxuLy8gICAgICAgIH0sXG4vL1x0XHR7XG4vLyAgICAgICAgICAgIGxpc3RnYW1lOiBbXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdXTScsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9Yb2NEaWFXTS9Yb2NEaWEnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbjMnLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IGZhbHNlLFxuLy8gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigyLCAtMTc2KSxcbi8vICAgICAgICAgICAgICAgICAgICB0YWJHYW1lOiAnZ2FtZWxpdmUnLFxuLy8gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb246IHRydWVcbi8vICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgZ2FtZU5hbWU6ICdBRycsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9MSVZFQUcvbGl2ZWNhc2lubzInLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbicsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBpc0hvdDogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKDgwLCAtNTMxLjgzOCksXG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZTogJ2dhbWVsaXZlJyxcbi8vICAgICAgICAgICAgICAgICAgICBjb21pbmdTb29uOiB0cnVlXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZWxpdmVcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2UsXG4vL1x0XHRcdGNvbWluZ1Nvb246IHRydWVcbi8vICAgICAgICB9LFxuLy8gICAgICAgIHtcbi8vICAgICAgICAgICAgbGlzdGdhbWU6IFtcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ0VCRVQnLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lUGF0aDogJ2xvdGU3OS9zcGluZUljb24vRUJFVC9Dcnlwb2NvcHk2Jyxcbi8vICAgICAgICAgICAgICAgICAgICBzcGluZU5hbWU6ICdhbmltYXRpb24nLFxuLy8gICAgICAgICAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNIb3Q6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKC0xLCAtODkpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lbGl2ZScsXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogdHJ1ZVxuLy8gICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZTogJ1BSQUdNQVRJQycsXG4vLyAgICAgICAgICAgICAgICAgICAgc3BpbmVQYXRoOiAnbG90ZTc5L3NwaW5lSWNvbi9QcmFnbWF0aWMvc2tlbGV0b24nLFxuLy8gICAgICAgICAgICAgICAgICAgIHNwaW5lTmFtZTogJ2FuaW1hdGlvbicsXG4vLyAgICAgICAgICAgICAgICAgICAgaXNTaXplQmlnOiBmYWxzZSxcbi8vICAgICAgICAgICAgICAgICAgICBpc0hvdDogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKC02LjMsIC0xMDEpLFxuLy8gICAgICAgICAgICAgICAgICAgIHRhYkdhbWU6ICdnYW1lbGl2ZScsXG4vLyAgICAgICAgICAgICAgICAgICAgY29taW5nU29vbjogdHJ1ZSxcbi8vICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgIHRhYkdhbWU6IFwiZ2FtZWxpdmVcIixcbi8vICAgICAgICAgICAgaXNCcmVha1RhYjogZmFsc2UsXG4vLyAgICAgICAgICAgIGlzU2l6ZUJpZzogZmFsc2Vcbi8vICAgICAgICB9XG4vL1xuLy8gICAgXTtcbi8vICAgIG9uTG9hZCgpIHtcbi8vICAgICAgICB0aGlzLnNjckxpc3RHYW1lLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTWFzaykuZW5hYmxlZCA9IHRydWU7XG4vLyAgICAgICAgdGhpcy5jdXJyZW5MaXN0R2FtZSA9IHRoaXMubGlzdEdhbWVDb25maWcuc2xpY2UoKTtcbi8vXG4vLyAgICB9XG4vLyAgICBzdGFydCgpIHtcbi8vXG4vLyAgICB9XG4vLyAgICBpbml0TGlzdEdhbWVDb25maWcoZGF0YSkge1xuLy8gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0R2FtZUNvbmZpZy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICBsZXQgb2JqR2FtZUl0ZW0gPSB0aGlzLmxpc3RHYW1lQ29uZmlnW2ldWydsaXN0Z2FtZSddO1xuLy8gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9iakdhbWVJdGVtLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICAgICAgICAgICBsZXQgZGF0YUdhbWVDb25maWcgPSBkYXRhW29iakdhbWVJdGVtW2pdWydnYW1lTmFtZSddXTtcbi8vICAgICAgICAgICAgICAgIG9iakdhbWVJdGVtW2pdWydjb21pbmdTb29uJ10gPSBkYXRhR2FtZUNvbmZpZ1snc3RhdHVzJ10gPT0gMDtcbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgIH1cbi8vICAgICAgICB0aGlzLmxvYWRMaXN0R2FtZSgpO1xuLy8gICAgfVxuLy8gICAgbG9hZExpc3RHYW1lKCkge1xuLy8gICAgICAgIHRoaXMuc2NyR2FtZS5zZXREYXRhTGlzdCh0aGlzLnNldEljb25HYW1lRGF0YS5iaW5kKHRoaXMpLCB0aGlzLmN1cnJlbkxpc3RHYW1lKTtcbi8vICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgdGhpcy5zZXRKYWNrcG90KCk7XG4vLyAgICAgICAgfSwgMTAwKTtcbi8vICAgIH1cbi8vICAgIHNldEljb25HYW1lRGF0YShpdGVtLCBkYXRhKSB7XG4vLyAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxpbmVfdGFiXCIpLmFjdGl2ZSA9IGRhdGFbJ2lzQnJlYWtUYWInXTtcbi8vICAgICAgICBpZiAoIWRhdGFbJ2lzU2l6ZUJpZyddKSB7XG4vLyAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5saXN0Z2FtZS5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgbGV0IGRhdGFHYW1lID0gZGF0YS5saXN0Z2FtZVtpXTtcbi8vICAgICAgICAgICAgICAgIGxldCBpY0dhbWUgPSBpdGVtLmdldENoaWxkQnlOYW1lKCdpY29uR2FtZScgKyAoaSArIDEpKS5nZXRDb21wb25lbnQoSXRlbUdhbWUpO1xuLy8gICAgICAgICAgICAgICAgaWNHYW1lLnNldEluZm8oZGF0YUdhbWUpO1xuLy8gICAgICAgICAgICAgICAgaWNHYW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbi8vICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtR2FtZXMuaW5jbHVkZXMoaWNHYW1lKSlcbi8vICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1HYW1lcy5wdXNoKGljR2FtZSk7XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnaWNvbkdhbWVCaWcnKS5hY3RpdmUgPSBmYWxzZTtcbi8vICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICBsZXQgaWNvbkdhbWVCaWcgPSBpdGVtLmdldENoaWxkQnlOYW1lKCdpY29uR2FtZUJpZycpLmdldENvbXBvbmVudChJdGVtR2FtZSk7XG4vLyAgICAgICAgICAgIGlmICghdGhpcy5pdGVtR2FtZXMuaW5jbHVkZXMoaWNvbkdhbWVCaWcpKVxuLy8gICAgICAgICAgICAgICAgdGhpcy5pdGVtR2FtZXMucHVzaChpY29uR2FtZUJpZyk7XG4vLyAgICAgICAgICAgIGljb25HYW1lQmlnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbi8vICAgICAgICAgICAgbGV0IGRhdGFHYW1lID0gZGF0YS5saXN0Z2FtZVswXTtcbi8vICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnaWNvbkdhbWUxJykuYWN0aXZlID0gZmFsc2U7XG4vLyAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2ljb25HYW1lMicpLmFjdGl2ZSA9IGZhbHNlO1xuLy8gICAgICAgICAgICBpY29uR2FtZUJpZy5zZXRJbmZvKGRhdGFHYW1lKTtcbi8vICAgICAgICB9XG4vLyAgICB9XG4vLyAgICBvblNjcm9sbEV2ZW50KCkge1xuLy8gICAgICAgIHRoaXMuaXNTaG93U3RhcnRFZmYgPSBmYWxzZTtcbi8vICAgIH1cbi8vICAgIHVwZGF0ZVNpemUoaXNIYXZlQmFubmVyKSB7XG4vLyAgICAgICAgaWYgKCFpc0hhdmVCYW5uZXIpIHtcbi8vICAgICAgICAgICAgdGhpcy5zY3JMaXN0R2FtZS5ub2RlLndpZHRoID0gMTI1MDtcbi8vICAgICAgICAgICAgdGhpcy5zY3JMaXN0R2FtZS5ub2RlLnggPSAwO1xuLy8gICAgICAgICAgICB0aGlzLnNjckxpc3RHYW1lLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuLy8gICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgIHRoaXMuc2NyTGlzdEdhbWUubm9kZS53aWR0aCA9IDk5NDtcbi8vICAgICAgICAgICAgdGhpcy5zY3JMaXN0R2FtZS5ub2RlLnggPSAxNDA7XG4vLyAgICAgICAgICAgIHRoaXMuc2NyTGlzdEdhbWUubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZXdcIikuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4vLyAgICAgICAgfVxuLy8gICAgfVxuLy8gICAgcHVibGljIGNoYW5nZVRhYkdhbWUodGFiKSB7XG4vLyAgICAgICAgdGhpcy5pc1Nob3dTdGFydEVmZiA9IHRydWU7XG4vLyAgICAgICAgdGhpcy5jdXJyZW5MaXN0R2FtZSA9IFtdO1xuLy8gICAgICAgIGlmICh0YWIgPT0gXCJnYW1lbGl2ZVwiKSB7XG4vLyAgICAgICAgICAgIHRoaXMuY3VycmVuTGlzdEdhbWUgPSB0aGlzLmxpc3RHYW1lQ29uZmlnLnNsaWNlKCk7XG4vLyAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgbGV0IHRhYkdhbWVDaG9vc2VuID0gW107XG4vLyAgICAgICAgICAgIGxldCB0YWJHYW1lTGVmdCA9IFtdO1xuLy8gICAgICAgICAgICB0aGlzLmxpc3RHYW1lQ29uZmlnLmZvckVhY2goKGRhdGEpID0+IHtcbi8vICAgICAgICAgICAgICAgIGlmIChkYXRhWyd0YWJHYW1lJ10gPT0gdGFiKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZUNob29zZW4ucHVzaChkYXRhKTtcbi8vICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgdGFiR2FtZUxlZnQucHVzaChkYXRhKTtcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgIHRoaXMuY3VycmVuTGlzdEdhbWUgPSB0YWJHYW1lQ2hvb3Nlbi5jb25jYXQodGFiR2FtZUxlZnQpO1xuLy8gICAgICAgIH1cbi8vICAgICAgICB0aGlzLnJlc2V0KCk7XG4vLyAgICAgICAgdGhpcy5sb2FkTGlzdEdhbWUoKTtcbi8vICAgIH1cbi8vICAgIHJlc2V0KCkge1xuLy8gICAgICAgIHRoaXMuY29udGVudEljb25HYW1lLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbi8vICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnbGluZV90YWInKS5hY3RpdmUgPSBmYWxzZTtcbi8vICAgICAgICB9KVxuLy8gICAgICAgIHRoaXMuc2NyTGlzdEdhbWUuc3RvcEF1dG9TY3JvbGwoKTtcbi8vICAgICAgICB0aGlzLmNvbnRlbnRJY29uR2FtZS54ID0gLXRoaXMuY29udGVudEljb25HYW1lLnBhcmVudC53aWR0aCAvIDI7XG4vLyAgICB9XG4vL1xuLy8gICAgcHVibGljIGdldEl0ZW1HYW1lV2l0aElkKGlkOiBzdHJpbmcpOiBJdGVtR2FtZSB7XG4vLyAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1HYW1lcy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICBpZiAodGhpcy5pdGVtR2FtZXNbaV0uaWQgPT0gaWQpIHtcbi8vICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1HYW1lc1tpXTtcbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgIH1cbi8vICAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgIH1cbi8vICAgIHNldEphY2twb3QoKSB7Ly91cGRhdGUgbOG6oWkgamFja3BvdCBraGkgbG9hZCBs4bqhaSBpdGVtIGdhbWU7XG4vLyAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uSXNMb2dpbiAmJiBBcHAuaW5zdGFuY2UudG9wSHVEYXRhICE9IG51bGwpIHtcbi8vICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5oYW5kbGVVcGRhdGVKUCgpO1xuLy8gICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgIEFwcC5pbnN0YW5jZS50b3BIdURhdGEgPSBKU09OLnBhcnNlKCd7XCJhdWRpdGlvblwiOntcIjEwMFwiOntcInBcIjo2NDc4MDAsXCJ4MlwiOjB9LFwiMTAwMFwiOntcInBcIjo2OTU5OTAwLFwieDJcIjowfSxcIjEwMDAwXCI6e1wicFwiOjk4MTU2MDk3LFwieDJcIjowfX0sXCJzcGFydGFuXCI6e1wiMTAwXCI6e1wicFwiOjk5MDI5NixcIngyXCI6MH0sXCIxMDAwXCI6e1wicFwiOjkyNjI0NTUsXCJ4MlwiOjB9LFwiMTAwMDBcIjp7XCJwXCI6NzM3MDY5MDQsXCJ4MlwiOjB9fSxcInBva2Vtb25cIjp7XCIxMDBcIjp7XCJwXCI6OTQxOTgxLFwieDJcIjoxfSxcIjEwMDBcIjp7XCJwXCI6NTQyMjcwNSxcIngyXCI6MX0sXCIxMDAwMFwiOntcInBcIjo1NzYzMjYxNCxcIngyXCI6MX19LFwiVEFJX1hJVVwiOntcIjBcIjp7XCJweFwiOjU2NTUyODcyMH0sXCIxXCI6e1wicHRcIjo3MTUxNzMwMTB9fSxcImJlbmxleVwiOntcIjEwMFwiOntcInBcIjo4NDcyNTcsXCJ4MlwiOjB9LFwiMTAwMFwiOntcInBcIjo3NTc4NTAwLFwieDJcIjowfSxcIjEwMDAwXCI6e1wicFwiOjYwMTU3ODg2LFwieDJcIjowfX0sXCJtYXliYWNoXCI6e1wiMTAwXCI6e1wicFwiOjY4MDM5NixcIngyXCI6MH0sXCIxMDAwXCI6e1wicFwiOjg1OTY4NzIsXCJ4MlwiOjB9LFwiMTAwMDBcIjp7XCJwXCI6MTAyNDg5NzU2LFwieDJcIjowfX0sXCJ0YW1odW5nXCI6e1wiMTAwXCI6e1wicFwiOjU4MTQ5MyxcIngyXCI6MH0sXCIxMDAwXCI6e1wicFwiOjc4NzAxMTksXCJ4MlwiOjB9LFwiMTAwMDBcIjp7XCJwXCI6NTgxMzU0MzAsXCJ4MlwiOjB9fSxcImNoaWVtdGluaFwiOntcIjEwMFwiOntcInBcIjo1MTE2MTcsXCJ4MlwiOjB9LFwiMTAwMFwiOntcInBcIjoxMDQwNDU1MCxcIngyXCI6MH0sXCIxMDAwMFwiOntcInBcIjo5ODYwMTI5NyxcIngyXCI6MH19LFwiYmlraW5pXCI6e1wiMTAwXCI6e1wicFwiOjYyNDcwMixcIngyXCI6MH0sXCIxMDAwXCI6e1wicFwiOjk3MDc1OTIsXCJ4MlwiOjB9LFwiMTAwMDBcIjp7XCJwXCI6NTA1MDM5MzIsXCJ4MlwiOjB9fSxcIm1pbmlwb2tlclwiOntcIjEwMFwiOntcInBcIjoxNzMwOTAsXCJ4MlwiOjB9LFwiMTAwMFwiOntcInBcIjoxMDUyNDYzLFwieDJcIjowfSxcIjEwMDAwXCI6e1wicFwiOjE1Nzk1Nzg2LFwieDJcIjowfX0sXCJjYW90aGFwXCI6e1wiMTAwMFwiOnt9LFwiMTAwMDBcIjp7fSxcIjUwMDAwXCI6e30sXCIxMDAwMDBcIjp7fSxcIjUwMDAwMFwiOnt9fSxcInJvbGxSb3llXCI6e1wiMTAwXCI6e1wicFwiOjg2MjQyOSxcIngyXCI6MX0sXCIxMDAwXCI6e1wicFwiOjcxMzY1MDgsXCJ4MlwiOjF9LFwiMTAwMDBcIjp7XCJwXCI6NjU0MTI1NjYsXCJ4MlwiOjF9fSxcImdhbGF4eVwiOntcIjEwMFwiOntcInBcIjo4MjkyOTQsXCJ4MlwiOjF9LFwiMTAwMFwiOntcInBcIjo3MTU1NTYzLFwieDJcIjoxfSxcIjEwMDAwXCI6e1wicFwiOjUyOTE1OTA4LFwieDJcIjoxfX0sXCJyYW5nZVJvdmVyXCI6e1wiMTAwXCI6e1wicFwiOjU0MDQ0MyxcIngyXCI6MH0sXCIxMDAwXCI6e1wicFwiOjg3NzY0OTQsXCJ4MlwiOjB9LFwiMTAwMDBcIjp7XCJwXCI6NTMzMTYzOTYsXCJ4MlwiOjB9fX0nKTtcbi8vICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5oYW5kbGVVcGRhdGVKUCgpO1xuLy8gICAgICAgIH1cbi8vICAgIH1cbi8vICAgIHB1YmxpYyB1cGRhdGVJdGVtSmFja3BvdHMoaWQ6IHN0cmluZywgajEwMDogbnVtYmVyLCB4MkoxMDA6IGJvb2xlYW4sIGoxMDAwOiBudW1iZXIsIHgySjEwMDA6IGJvb2xlYW4sIGoxMDAwMDogbnVtYmVyLCB4MkoxMDAwMDogYm9vbGVhbikge1xuLy8gICAgICAgIGxldCBpdGVtR2FtZSA9IHRoaXMuZ2V0SXRlbUdhbWVXaXRoSWQoaWQpO1xuLy8gICAgICAgIGlmIChpdGVtR2FtZSAhPSBudWxsKSB7XG4vLyAgICAgICAgICAgIGxldCBsaXN0SlAgPSBbXTtcbi8vICAgICAgICAgICAgbGV0IGRhdGFKUDEwMCA9IE9iamVjdC5jcmVhdGUoe30pO1xuLy8gICAgICAgICAgICBkYXRhSlAxMDAubnVtYmVyID0gajEwMDtcbi8vICAgICAgICAgICAgZGF0YUpQMTAwLngyID0geDJKMTAwO1xuLy8gICAgICAgICAgICBsaXN0SlAucHVzaChkYXRhSlAxMDApO1xuLy9cbi8vICAgICAgICAgICAgbGV0IGRhdGFKUDEwMDAgPSBPYmplY3QuY3JlYXRlKHt9KTtcbi8vICAgICAgICAgICAgZGF0YUpQMTAwMC5udW1iZXIgPSBqMTAwMDtcbi8vICAgICAgICAgICAgZGF0YUpQMTAwMC54MiA9IHgySjEwMDA7XG4vLyAgICAgICAgICAgIGxpc3RKUC5wdXNoKGRhdGFKUDEwMDApO1xuLy9cbi8vICAgICAgICAgICAgbGV0IGRhdGFKUDEwMDAwID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4vLyAgICAgICAgICAgIGRhdGFKUDEwMDAwLm51bWJlciA9IGoxMDAwMDtcbi8vICAgICAgICAgICAgZGF0YUpQMTAwMDAueDIgPSB4MkoxMDAwMDtcbi8vICAgICAgICAgICAgbGlzdEpQLnB1c2goZGF0YUpQMTAwMDApO1xuLy8gICAgICAgICAgICBpdGVtR2FtZS5zZXRKYWNrcG90KGxpc3RKUCk7XG4vLyAgICAgICAgfVxuLy8gICAgfVxuLy8gICAgcHVibGljIG9uQ2xpY2tHYW1lKGV2ZW4sIGRhdGEpIHtcbi8vICAgICAgICAvL1V0aWxzLkxvZyhkYXRhKTtcbi8vICAgICAgICAvL1V0aWxzLkxvZygnZXZlbi50YXJnZXQuZ2V0Q29tcG9uZW50KFwiTG9iYnkuSXRlbUdhbWVcIikuY29tbWluZ1Nvb246JyArIGV2ZW4udGFyZ2V0LmdldENvbXBvbmVudChcIkxvYmJ5Lkl0ZW1HYW1lXCIpLmNvbW1pbmdTb29uKTtcbi8vICAgICAgICBpZiAoZXZlbi50YXJnZXQuZ2V0Q29tcG9uZW50KFwiTG9iYnkuSXRlbUdhbWVcIikuY29tbWluZ1Nvb24pIHtcbi8vICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RDb21pbmdTb29uKCk7XG4vLyAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICB9XG4vLyAgICAgICAgc3dpdGNoIChkYXRhKSB7XG4vLyAgICAgICAgICAgIGNhc2UgXCJXTVwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RMb2dpbldNKCk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgY2FzZSBcIkFHXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdExvZ2luQUcoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiRUJFVFwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RMb2dpbkViZXQoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiRklTSFwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvU2hvb3RGaXNoKCk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgY2FzZSBcIklCQ1wiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RMb2dpbklCQygpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgIGNhc2UgXCJTQk9cIjpcbi8vICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0TG9naW5TQk8oKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiQ01EXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdExvZ2luQ01EKCk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgY2FzZSBcIlRIQU5CQUlcIjpcbi8vICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0R29Ub1Nsb3Q4KCk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgY2FzZSBcIlRIQU5UQUlcIjpcbi8vICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0R29Ub1Nsb3QzKCk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgY2FzZSBcIkNISUVNVElOSFwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvU2xvdDYoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiQklUQ09JTlwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvU2xvdDcoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiQklLSU5JXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdvVG9TbG90MTEoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiVEhFVEhBT1wiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvU2xvdDEwKCk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgY2FzZSBcIkNISU1ESUVOXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdvVG9TbG90NCgpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgIGNhc2UgXCJEVUFYRVwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvU2xvdDEoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiVEFJWElVXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdhbWVUYWlYaXUoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiTUlOSVBPS0VSXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdhbWVNaW5pUG9rZXIoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiQkFVQ1VBXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdhbWVCYXVDdWEoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiUElLQUNIVVwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHYW1lU2xvdDN4MygpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgIGNhc2UgXCJHRU1cIjpcbi8vICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0R2FtZVNsb3QzeDNHZW0oKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiVEFJWElVU0lFVVRPQ1wiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHYW1lVGFpWGl1U2lldVRvYygpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgIGNhc2UgXCJDQU9USEFQXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdhbWVDYW9UaGFwKCk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgY2FzZSBcIlhPQ0RJQVwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvWG9jRGlhKCk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgY2FzZSBcIkJBQ0FZXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdvVG9CYUNheSgpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vL1x0XHRcdGNhc2UgXCJNYXVCaW5oXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdvVG9NYXVCaW5oKCk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vXHRcdFx0Y2FzZSBcIkxpZW5nXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdvVG9MaWVuZygpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vL1x0XHRcdGNhc2UgXCJQb2tlclwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvUG9rZXIoKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy9cdFx0XHRjYXNlIFwiQmFpQ2FvXCI6XG4vLyAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEdvVG9CYWlDYW8oKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICBjYXNlIFwiVExNTlwiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb1RvVExNTigpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vL1x0XHRcdGNhc2UgXCJTQU1cIjpcbi8vICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0R29Ub1NhbSgpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgIGNhc2UgXCJUTE1OU09MT1wiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHYW1lVExNTlNvbG8oKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy9cdFx0XHRjYXNlIFwiWE9TT1wiOlxuLy8gICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RHb3RvTG90bygpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgfVxuLy8gICAgfVxuLy9cbi8vICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4vL31cblxuXG5pbXBvcnQgSXRlbUdhbWUsIHsgSXRlbUdhbWVUeXBlIH0gZnJvbSBcIi4vTG9iYnkuSXRlbUdhbWVcIjtcbmltcG9ydCBJdGVtU2xvdEdhbWUgZnJvbSBcIi4vTG9iYnkuSXRlbVNsb3RHYW1lXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkxvYmJ5LlRhYnNMaXN0R2FtZVRhYlwiKVxuZXhwb3J0IGNsYXNzIFRhYiB7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmTm9ybWFsOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmQWN0aXZlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cblxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFic0xpc3RHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShbVGFiXSlcbiAgICB0YWJzOiBUYWJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtJdGVtR2FtZV0pXG4gICAgaXRlbUdhbWVzOiBJdGVtR2FtZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50SWNvbkdhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgc2VsZXRlY3RJZHggPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICAgIHNjckxpc3RHYW1lOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRJY29uR2FtZS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9zSW5Xb3JsZCA9IHRoaXMuY29udGVudEljb25HYW1lLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpdGVtLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgbGV0IHBvc0luVmlldyA9IHRoaXMuY29udGVudEljb25HYW1lLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NJbldvcmxkKTtcbiAgICAgICAgICAgIGxldCBkZWx0YUxlZnQgPSAoLXRoaXMuY29udGVudEljb25HYW1lLnBhcmVudC53aWR0aCAvIDIpIC0gaXRlbS53aWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgZGVsdGFSaWdodCA9ICh0aGlzLmNvbnRlbnRJY29uR2FtZS5wYXJlbnQud2lkdGggLyAyKSArIGl0ZW0ud2lkdGggLyAyO1xuICAgICAgICAgICAgaWYgKHBvc0luVmlldy54IDwgZGVsdGFMZWZ0IHx8IHBvc0luVmlldy54ID4gZGVsdGFSaWdodCkge1xuICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MubG9nKFwiIHZhbyBkYXlcIik7XG4gICAgICAgICAgICBzZWxmLm9uU2Nyb2xsRXZlbnQoKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgb25TY3JvbGxFdmVudCgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50SWNvbkdhbWUuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvc0luV29ybGQgPSB0aGlzLmNvbnRlbnRJY29uR2FtZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaXRlbS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIGxldCBwb3NJblZpZXcgPSB0aGlzLmNvbnRlbnRJY29uR2FtZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zSW5Xb3JsZCk7XG4gICAgICAgICAgICBsZXQgZGVsdGFMZWZ0ID0gKC10aGlzLmNvbnRlbnRJY29uR2FtZS5wYXJlbnQud2lkdGggLyAyKSAtIGl0ZW0ud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IGRlbHRhUmlnaHQgPSAodGhpcy5jb250ZW50SWNvbkdhbWUucGFyZW50LndpZHRoIC8gMikgKyBpdGVtLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmIChwb3NJblZpZXcueCA8IGRlbHRhTGVmdCB8fCBwb3NJblZpZXcueCA+IGRlbHRhUmlnaHQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXBkYXRlU2l6ZShpc0hhdmVCYW5uZXIpIHtcbiAgICAgICAgaWYgKCFpc0hhdmVCYW5uZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NyTGlzdEdhbWUubm9kZS53aWR0aCA9IDEyNTA7XG4gICAgICAgICAgICB0aGlzLnNjckxpc3RHYW1lLm5vZGUueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNjckxpc3RHYW1lLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICAgICAgY2MubG9nKFwidXBkYXRlU2l6ZSBraG9uZyBjbyBiYW5uZXJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjckxpc3RHYW1lLm5vZGUud2lkdGggPSA5OTQ7XG4gICAgICAgICAgICB0aGlzLnNjckxpc3RHYW1lLm5vZGUueCA9IDE0MDtcbiAgICAgICAgICAgIHRoaXMuc2NyTGlzdEdhbWUubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZXdcIikuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBvblRhYkNoYW5nZWQoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxldGVjdElkeCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtR2FtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUdhbWVzW2ldID09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1HYW1lc1tpXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtR2FtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUdhbWVzW2ldID09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1HYW1lc1tpXS5ub2RlLmFjdGl2ZSA9IHRoaXMuaXRlbUdhbWVzW2ldLnR5cGUgPT0gSXRlbUdhbWVUeXBlLlNMT1Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtR2FtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUdhbWVzW2ldID09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1HYW1lc1tpXS5ub2RlLmFjdGl2ZSA9IHRoaXMuaXRlbUdhbWVzW2ldLnR5cGUgPT0gSXRlbUdhbWVUeXBlLkNBUkQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBjaGFuZ2VUYWJHYW1lKCkge1xuICAgICAgICBsZXQgc2NyV2lkdGggPSB0aGlzLnNjckxpc3RHYW1lLm5vZGUud2lkdGg7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGVudEljb25HYW1lLndpZHRoIDwgc2NyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudEljb25HYW1lLnggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50SWNvbkdhbWUueCA9IChzY3JXaWR0aCAvIDIpICsgKCh0aGlzLmNvbnRlbnRJY29uR2FtZS53aWR0aCAvIDIpIC0gc2NyV2lkdGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW1HYW1lV2l0aElkKGlkOiBzdHJpbmcpOiBJdGVtU2xvdEdhbWVbXSB7XG4gICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1HYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUdhbWVzW2ldID09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUdhbWVzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2godGhpcy5pdGVtR2FtZXNbaV0gYXMgSXRlbVNsb3RHYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVJdGVtSmFja3BvdHMoaWQ6IHN0cmluZywgajEwMDogbnVtYmVyLCB4MkoxMDA6IGJvb2xlYW4sIGoxMDAwOiBudW1iZXIsIHgySjEwMDA6IGJvb2xlYW4sIGoxMDAwMDogbnVtYmVyLCB4MkoxMDAwMDogYm9vbGVhbikge1xuICAgICAgICBsZXQgaXRlbUdhbWUgPSB0aGlzLmdldEl0ZW1HYW1lV2l0aElkKGlkKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtR2FtZS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAvLyBpdGVtR2FtZVtpXS5sYmxKYWNrcG90c1swXS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoajEwMCk7XG4gICAgICAgICAgICAvLyBpdGVtR2FtZVtpXS5sYmxKYWNrcG90c1sxXS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoajEwMDApO1xuICAgICAgICAgICAgLy8gaXRlbUdhbWVbaV0ubGJsSmFja3BvdHNbMl0uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGoxMDAwMCk7XG5cbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKGl0ZW1HYW1lW2ldLmxibEphY2twb3RzWzBdLCBqMTAwLCAzKVxuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8oaXRlbUdhbWVbaV0ubGJsSmFja3BvdHNbMV0sIGoxMDAwLCAzKVxuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8oaXRlbUdhbWVbaV0ubGJsSmFja3BvdHNbMl0sIGoxMDAwMCwgMylcbiAgICAgICAgICAgIC8vIGl0ZW1HYW1lW2ldLmxibEphY2twb3RzWzFdLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihqMTAwMCk7XG4gICAgICAgICAgICAvLyBpdGVtR2FtZVtpXS5sYmxKYWNrcG90c1syXS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoajEwMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=