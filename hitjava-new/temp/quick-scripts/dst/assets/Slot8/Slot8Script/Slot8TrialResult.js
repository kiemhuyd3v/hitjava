
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8TrialResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da21cmkBcFOQZjfeACZG1zc', 'Slot8TrialResult');
// Slot8/Slot8Script/Slot8TrialResult.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot4TrialResult = /** @class */ (function () {
    function Slot4TrialResult() {
    }
    Slot4TrialResult.results = [
        {
            ref: 3541,
            result: 3,
            matrix: "2,0,1,6,1,0,5,0,3,0,4,5,1,0,6",
            linesWin: "1,2,2,4,5,6,8,8,9,9,10,12,12,13,14,17,18,20",
            haiSao: "",
            prize: 516700,
            currentMoney: 1706231246
        },
        {
            ref: 3542,
            result: 5,
            matrix: "6,2,2,2,2,5,0,4,5,3,1,2,3,0,6",
            linesWin: "2,6,8,9,17,19",
            haiSao: "1,0,1,1,1,1,1,1,1,1,1",
            prize: 19200,
            currentMoney: 1706248446
        },
        {
            ref: 3543,
            result: 5,
            matrix: "4,5,2,1,1,1,5,2,2,0,1,4,5,2,5",
            linesWin: "1,2,2,4,6,6,7,8,8,9,9,10,10,11,13,13,13,14,15,16,17,17,19,19",
            haiSao: "0,1,1,1,1,1,1,1,0,1,1,1",
            prize: 21000,
            currentMoney: 1706267446
        },
        {
            ref: 3546,
            result: 1,
            matrix: "5,1,3,2,4,1,2,6,3,0,5,2,4,1,4",
            linesWin: "3,4,10,10,10,13,14,14,17,17,17,18,18,18,20",
            haiSao: "",
            prize: 8300,
            currentMoney: 1706781306
        },
        {
            ref: 3547,
            result: 1,
            matrix: "1,6,6,0,1,1,5,2,6,6,3,6,6,3,3",
            linesWin: "2,2,3,4,5,6,6,7,8,8,10,12,16,17,18,20",
            haiSao: "",
            prize: 5800,
            currentMoney: 1706785106
        },
        {
            ref: 3549,
            result: 1,
            matrix: "6,2,1,5,4,2,3,2,3,6,2,4,3,5,0",
            linesWin: "4,5,8,11,12,14,17",
            haiSao: "",
            prize: 2200,
            currentMoney: 1706804406
        },
        {
            ref: 3555,
            result: 1,
            matrix: "1,4,4,0,5,1,5,0,5,2,6,5,3,6,6",
            linesWin: "2,6,12,13,16,17",
            haiSao: "",
            prize: 1800,
            currentMoney: 1706823006
        },
        {
            ref: 3560,
            result: 1,
            matrix: "3,4,1,0,3,5,3,4,6,1,3,4,3,6,4",
            linesWin: "2,4,5,7,8,9,11,12,13,14,16,17,17,20",
            haiSao: "",
            prize: 5400,
            currentMoney: 1707335746
        },
        {
            ref: 3568,
            result: 2,
            matrix: "1,4,0,6,3,0,1,1,1,4,3,5,5,4,3",
            linesWin: "1,1,4,4,5,5,6,6,7,11,11,12,12,14,15,16,19,20,20",
            haiSao: "",
            prize: 57200,
            currentMoney: 1707941766
        },
        {
            ref: 3569,
            result: 1,
            matrix: "4,2,0,0,6,5,0,0,6,5,1,5,3,1,1",
            linesWin: "3,3,7,7,9,9,11,15,18,19,20,20,20",
            haiSao: "",
            prize: 20700,
            currentMoney: 1707960466
        },
        {
            ref: 3578,
            result: 1,
            matrix: "6,3,2,3,1,5,3,4,1,3,6,4,3,4,4",
            linesWin: "1,2,3,4,5,6,7,8,10,12,15,16,16,17,19,20",
            haiSao: "",
            prize: 9800,
            currentMoney: 1708507826
        },
        {
            ref: 3605,
            result: 1,
            matrix: "0,1,0,4,4,6,6,6,1,6,6,1,4,4,2",
            linesWin: "1,2,2,3,4,5,6,8,8,10,12,13,14,15,18,19",
            haiSao: "",
            prize: 5700,
            currentMoney: 1709815386
        },
        {
            ref: 3615,
            result: 1,
            matrix: "3,0,4,3,2,0,4,4,6,4,0,3,6,3,4",
            linesWin: "1,4,8,11,15",
            haiSao: "",
            prize: 1100,
            currentMoney: 1709866486
        },
        {
            ref: 3634,
            result: 1,
            matrix: "2,2,6,2,5,3,0,5,6,5,5,0,2,3,5",
            linesWin: "2,6,10",
            haiSao: "",
            prize: 1200,
            currentMoney: 1711120986
        },
        {
            ref: 3656,
            result: 1,
            matrix: "1,0,6,3,6,0,6,2,4,1,5,1,3,6,5",
            linesWin: "8,10,10,13,13,13,14,17,18,18",
            haiSao: "",
            prize: 4300,
            currentMoney: 1711713906
        },
        {
            ref: 3693,
            result: 2,
            matrix: "3,3,0,1,1,0,6,3,0,1,3,3,1,3,2",
            linesWin: "1,2,2,3,4,5,6,7,8,9,9,10,10,12,12,13,13,14,16,17,17,18,18,19,20",
            haiSao: "",
            prize: 78800,
            currentMoney: 1713716007
        },
        {
            ref: 3848,
            result: 5,
            matrix: "2,3,5,3,2,5,5,1,1,1,3,0,4,0,5",
            linesWin: "1,4,5,5,6,6,7,9,10,11,12,13,13,14,14,15,15,16,17,18,19",
            haiSao: "1,1,1,1,1,1,1,1,0,2,0,1",
            prize: 15200,
            currentMoney: 1721477607
        },
        {
            ref: 3568,
            result: 2,
            matrix: "1,4,0,6,3,0,1,1,1,4,3,5,5,4,3",
            linesWin: "1,1,4,4,5,5,6,6,7,11,11,12,12,14,15,16,19,20,20",
            haiSao: "",
            prize: 57200,
            currentMoney: 0
        }
    ];
    Slot4TrialResult = __decorate([
        ccclass
    ], Slot4TrialResult);
    return Slot4TrialResult;
}());
exports.default = Slot4TrialResult;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OFRyaWFsUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBQTtJQXVLQSxDQUFDO0lBcktVLHdCQUFPLEdBQUc7UUFDYjtZQUNJLEdBQUcsRUFBRSxJQUFJO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsK0JBQStCO1lBQ3ZDLFFBQVEsRUFBRSw2Q0FBNkM7WUFDdkQsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsTUFBTTtZQUNiLFlBQVksRUFBRSxVQUFVO1NBQzNCO1FBQ0Q7WUFDSSxHQUFHLEVBQUUsSUFBSTtZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLCtCQUErQjtZQUN2QyxRQUFRLEVBQUUsZUFBZTtZQUN6QixNQUFNLEVBQUUsdUJBQXVCO1lBQy9CLEtBQUssRUFBRSxLQUFLO1lBQ1osWUFBWSxFQUFFLFVBQVU7U0FDM0I7UUFDRDtZQUNJLEdBQUcsRUFBRSxJQUFJO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsK0JBQStCO1lBQ3ZDLFFBQVEsRUFBRSw4REFBOEQ7WUFDeEUsTUFBTSxFQUFFLHlCQUF5QjtZQUNqQyxLQUFLLEVBQUUsS0FBSztZQUNaLFlBQVksRUFBRSxVQUFVO1NBQzNCO1FBQ0Q7WUFDSSxHQUFHLEVBQUUsSUFBSTtZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLCtCQUErQjtZQUN2QyxRQUFRLEVB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UUFDRDtZQUNJLEdBQUcsRUFBRSxJQUFJO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsK0JBQStCO1lBQ3ZDLFFBQVEsRUFBRSxpRUFBaUU7WUFDM0UsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsS0FBSztZQUNaLFlBQVksRUFBRSxVQUFVO1NBQzNCO1FBQ0Q7WUFDSSxHQUFHLEVBQUUsSUFBSTtZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLCtCQUErQjtZQUN2QyxRQUFRLEVBQUUsd0RBQXdEO1lBQ2xFLE1BQU0sRUFBRSx5QkFBeUI7WUFDakMsS0FBSyxFQUFFLEtBQUs7WUFDWixZQUFZLEVBQUUsVUFBVTtTQUMzQjtRQUNEO1lBQ0ksR0FBRyxFQUFFLElBQUk7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSwrQkFBK0I7WUFDdkMsUUFBUSxFQUFFLGlEQUFpRDtZQUMzRCxNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxLQUFLO1lBQ1osWUFBWSxFQUFFLENBQUM7U0FDbEI7S0FDSixDQUFBO0lBdEtnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXVLcEM7SUFBRCx1QkFBQztDQXZLRCxBQXVLQyxJQUFBO2tCQXZLb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90NFRyaWFsUmVzdWx0IHtcblxuICAgIHN0YXRpYyByZXN1bHRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICByZWY6IDM1NDEsXG4gICAgICAgICAgICByZXN1bHQ6IDMsXG4gICAgICAgICAgICBtYXRyaXg6IFwiMiwwLDEsNiwxLDAsNSwwLDMsMCw0LDUsMSwwLDZcIixcbiAgICAgICAgICAgIGxpbmVzV2luOiBcIjEsMiwyLDQsNSw2LDgsOCw5LDksMTAsMTIsMTIsMTMsMTQsMTcsMTgsMjBcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiA1MTY3MDAsXG4gICAgICAgICAgICBjdXJyZW50TW9uZXk6IDE3MDYyMzEyNDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVmOiAzNTQyLFxuICAgICAgICAgICAgcmVzdWx0OiA1LFxuICAgICAgICAgICAgbWF0cml4OiBcIjYsMiwyLDIsMiw1LDAsNCw1LDMsMSwyLDMsMCw2XCIsXG4gICAgICAgICAgICBsaW5lc1dpbjogXCIyLDYsOCw5LDE3LDE5XCIsXG4gICAgICAgICAgICBoYWlTYW86IFwiMSwwLDEsMSwxLDEsMSwxLDEsMSwxXCIsXG4gICAgICAgICAgICBwcml6ZTogMTkyMDAsXG4gICAgICAgICAgICBjdXJyZW50TW9uZXk6IDE3MDYyNDg0NDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVmOiAzNTQzLFxuICAgICAgICAgICAgcmVzdWx0OiA1LFxuICAgICAgICAgICAgbWF0cml4OiBcIjQsNSwyLDEsMSwxLDUsMiwyLDAsMSw0LDUsMiw1XCIsXG4gICAgICAgICAgICBsaW5lc1dpbjogXCIxLDIsMiw0LDYsNiw3LDgsOCw5LDksMTAsMTAsMTEsMTMsMTMsMTMsMTQsMTUsMTYsMTcsMTcsMTksMTlcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCIwLDEsMSwxLDEsMSwxLDEsMCwxLDEsMVwiLFxuICAgICAgICAgICAgcHJpemU6IDIxMDAwLFxuICAgICAgICAgICAgY3VycmVudE1vbmV5OiAxNzA2MjY3NDQ2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogMzU0NixcbiAgICAgICAgICAgIHJlc3VsdDogMSxcbiAgICAgICAgICAgIG1hdHJpeDogXCI1LDEsMywyLDQsMSwyLDYsMywwLDUsMiw0LDEsNFwiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiMyw0LDEwLDEwLDEwLDEzLDE0LDE0LDE3LDE3LDE3LDE4LDE4LDE4LDIwXCIsXG4gICAgICAgICAgICBoYWlTYW86IFwiXCIsXG4gICAgICAgICAgICBwcml6ZTogODMwMCxcbiAgICAgICAgICAgIGN1cnJlbnRNb25leTogMTcwNjc4MTMwNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZWY6IDM1NDcsXG4gICAgICAgICAgICByZXN1bHQ6IDEsXG4gICAgICAgICAgICBtYXRyaXg6IFwiMSw2LDYsMCwxLDEsNSwyLDYsNiwzLDYsNiwzLDNcIixcbiAgICAgICAgICAgIGxpbmVzV2luOiBcIjIsMiwzLDQsNSw2LDYsNyw4LDgsMTAsMTIsMTYsMTcsMTgsMjBcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiA1ODAwLFxuICAgICAgICAgICAgY3VycmVudE1vbmV5OiAxNzA2Nzg1MTA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogMzU0OSxcbiAgICAgICAgICAgIHJlc3VsdDogMSxcbiAgICAgICAgICAgIG1hdHJpeDogXCI2LDIsMSw1LDQsMiwzLDIsMyw2LDIsNCwzLDUsMFwiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiNCw1LDgsMTEsMTIsMTQsMTdcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiAyMjAwLFxuICAgICAgICAgICAgY3VycmVudE1vbmV5OiAxNzA2ODA0NDA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogMzU1NSxcbiAgICAgICAgICAgIHJlc3VsdDogMSxcbiAgICAgICAgICAgIG1hdHJpeDogXCIxLDQsNCwwLDUsMSw1LDAsNSwyLDYsNSwzLDYsNlwiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiMiw2LDEyLDEzLDE2LDE3XCIsXG4gICAgICAgICAgICBoYWlTYW86IFwiXCIsXG4gICAgICAgICAgICBwcml6ZTogMTgwMCxcbiAgICAgICAgICAgIGN1cnJlbnRNb25leTogMTcwNjgyMzAwNlxuICAgICAgICB9LFxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHJlZjogMzU2MCxcbiAgICAgICAgICAgIHJlc3VsdDogMSxcbiAgICAgICAgICAgIG1hdHJpeDogXCIzLDQsMSwwLDMsNSwzLDQsNiwxLDMsNCwzLDYsNFwiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiMiw0LDUsNyw4LDksMTEsMTIsMTMsMTQsMTYsMTcsMTcsMjBcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiA1NDAwLFxuICAgICAgICAgICAgY3VycmVudE1vbmV5OiAxNzA3MzM1NzQ2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogMzU2OCxcbiAgICAgICAgICAgIHJlc3VsdDogMixcbiAgICAgICAgICAgIG1hdHJpeDogXCIxLDQsMCw2LDMsMCwxLDEsMSw0LDMsNSw1LDQsM1wiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiMSwxLDQsNCw1LDUsNiw2LDcsMTEsMTEsMTIsMTIsMTQsMTUsMTYsMTksMjAsMjBcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiA1NzIwMCxcbiAgICAgICAgICAgIGN1cnJlbnRNb25leTogMTcwNzk0MTc2NlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZWY6IDM1NjksXG4gICAgICAgICAgICByZXN1bHQ6IDEsXG4gICAgICAgICAgICBtYXRyaXg6IFwiNCwyLDAsMCw2LDUsMCwwLDYsNSwxLDUsMywxLDFcIixcbiAgICAgICAgICAgIGxpbmVzV2luOiBcIjMsMyw3LDcsOSw5LDExLDE1LDE4LDE5LDIwLDIwLDIwXCIsXG4gICAgICAgICAgICBoYWlTYW86IFwiXCIsXG4gICAgICAgICAgICBwcml6ZTogMjA3MDAsXG4gICAgICAgICAgICBjdXJyZW50TW9uZXk6IDE3MDc5NjA0NjZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVmOiAzNTc4LFxuICAgICAgICAgICAgcmVzdWx0OiAxLFxuICAgICAgICAgICAgbWF0cml4OiBcIjYsMywyLDMsMSw1LDMsNCwxLDMsNiw0LDMsNCw0XCIsXG4gICAgICAgICAgICBsaW5lc1dpbjogXCIxLDIsMyw0LDUsNiw3LDgsMTAsMTIsMTUsMTYsMTYsMTcsMTksMjBcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiA5ODAwLFxuICAgICAgICAgICAgY3VycmVudE1vbmV5OiAxNzA4NTA3ODI2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogMzYwNSxcbiAgICAgICAgICAgIHJlc3VsdDogMSxcbiAgICAgICAgICAgIG1hdHJpeDogXCIwLDEsMCw0LDQsNiw2LDYsMSw2LDYsMSw0LDQsMlwiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiMSwyLDIsMyw0LDUsNiw4LDgsMTAsMTIsMTMsMTQsMTUsMTgsMTlcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiA1NzAwLFxuICAgICAgICAgICAgY3VycmVudE1vbmV5OiAxNzA5ODE1Mzg2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogMzYxNSxcbiAgICAgICAgICAgIHJlc3VsdDogMSxcbiAgICAgICAgICAgIG1hdHJpeDogXCIzLDAsNCwzLDIsMCw0LDQsNiw0LDAsMyw2LDMsNFwiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiMSw0LDgsMTEsMTVcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiAxMTAwLFxuICAgICAgICAgICAgY3VycmVudE1vbmV5OiAxNzA5ODY2NDg2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogMzYzNCxcbiAgICAgICAgICAgIHJlc3VsdDogMSxcbiAgICAgICAgICAgIG1hdHJpeDogXCIyLDIsNiwyLDUsMywwLDUsNiw1LDUsMCwyLDMsNVwiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiMiw2LDEwXCIsXG4gICAgICAgICAgICBoYWlTYW86IFwiXCIsXG4gICAgICAgICAgICBwcml6ZTogMTIwMCxcbiAgICAgICAgICAgIGN1cnJlbnRNb25leTogMTcxMTEyMDk4NlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZWY6IDM2NTYsXG4gICAgICAgICAgICByZXN1bHQ6IDEsXG4gICAgICAgICAgICBtYXRyaXg6IFwiMSwwLDYsMyw2LDAsNiwyLDQsMSw1LDEsMyw2LDVcIixcbiAgICAgICAgICAgIGxpbmVzV2luOiBcIjgsMTAsMTAsMTMsMTMsMTMsMTQsMTcsMTgsMThcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiA0MzAwLFxuICAgICAgICAgICAgY3VycmVudE1vbmV5OiAxNzExNzEzOTA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogMzY5MyxcbiAgICAgICAgICAgIHJlc3VsdDogMixcbiAgICAgICAgICAgIG1hdHJpeDogXCIzLDMsMCwxLDEsMCw2LDMsMCwxLDMsMywxLDMsMlwiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiMSwyLDIsMyw0LDUsNiw3LDgsOSw5LDEwLDEwLDEyLDEyLDEzLDEzLDE0LDE2LDE3LDE3LDE4LDE4LDE5LDIwXCIsXG4gICAgICAgICAgICBoYWlTYW86IFwiXCIsXG4gICAgICAgICAgICBwcml6ZTogNzg4MDAsXG4gICAgICAgICAgICBjdXJyZW50TW9uZXk6IDE3MTM3MTYwMDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVmOiAzODQ4LFxuICAgICAgICAgICAgcmVzdWx0OiA1LFxuICAgICAgICAgICAgbWF0cml4OiBcIjIsMyw1LDMsMiw1LDUsMSwxLDEsMywwLDQsMCw1XCIsXG4gICAgICAgICAgICBsaW5lc1dpbjogXCIxLDQsNSw1LDYsNiw3LDksMTAsMTEsMTIsMTMsMTMsMTQsMTQsMTUsMTUsMTYsMTcsMTgsMTlcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCIxLDEsMSwxLDEsMSwxLDEsMCwyLDAsMVwiLFxuICAgICAgICAgICAgcHJpemU6IDE1MjAwLFxuICAgICAgICAgICAgY3VycmVudE1vbmV5OiAxNzIxNDc3NjA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogMzU2OCxcbiAgICAgICAgICAgIHJlc3VsdDogMixcbiAgICAgICAgICAgIG1hdHJpeDogXCIxLDQsMCw2LDMsMCwxLDEsMSw0LDMsNSw1LDQsM1wiLFxuICAgICAgICAgICAgbGluZXNXaW46IFwiMSwxLDQsNCw1LDUsNiw2LDcsMTEsMTEsMTIsMTIsMTQsMTUsMTYsMTksMjAsMjBcIixcbiAgICAgICAgICAgIGhhaVNhbzogXCJcIixcbiAgICAgICAgICAgIHByaXplOiA1NzIwMCxcbiAgICAgICAgICAgIGN1cnJlbnRNb25leTogMFxuICAgICAgICB9XG4gICAgXVxufVxuIl19