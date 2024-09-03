
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3x3Gem/Scripts/Slot3x3Gem.ItemSlot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d0aeQnEUhIJ5JtrFeiMHsr', 'Slot3x3Gem.ItemSlot');
// Slot3x3Gem/Scripts/Slot3x3Gem.ItemSlot.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemSlot = /** @class */ (function (_super) {
    __extends(ItemSlot, _super);
    function ItemSlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.spine = null;
        _this.sprAtlas = null;
        _this.id = 0;
        _this.animName = "";
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ItemSlot.prototype.setId = function (id) {
        id = id + 1;
        this.id = id;
        this.sprite.spriteFrame = this.sprAtlas.getSpriteFrame("icon" + this.id);
        this.spine.node.active = true;
        this.sprite.node.active = false;
        switch (this.id) {
            case 1:
                this.animName = "wild";
                break;
            case 2:
                this.animName = 'do';
                break;
            case 3:
                this.animName = 'xanh luc';
                break;
            case 4:
                this.animName = 'la';
                break;
            case 5:
                this.animName = 'tim';
                break;
            case 6:
                this.animName = 'xanh duong';
                break;
        }
        this.spine.setAnimation(0, this.animName, true);
    };
    ItemSlot.prototype.setBlur = function () {
        this.sprite.spriteFrame = this.sprAtlas.getSpriteFrame("icon" + (this.id + 1) + "_blur");
        this.spine.node.active = false;
        this.sprite.node.active = true;
    };
    __decorate([
        property(cc.Sprite)
    ], ItemSlot.prototype, "sprite", void 0);
    __decorate([
        property(sp.Skeleton)
    ], ItemSlot.prototype, "spine", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], ItemSlot.prototype, "sprAtlas", void 0);
    ItemSlot = __decorate([
        ccclass
    ], ItemSlot);
    return ItemSlot;
}(cc.Component));
exports.default = ItemSlot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDN4M0dlbVxcU2NyaXB0c1xcU2xvdDN4M0dlbS5JdGVtU2xvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1EQztRQWhERyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxjQUFRLEdBQUcsRUFBRSxDQUFDOztRQXVDZCxpQkFBaUI7SUFDckIsQ0FBQztJQXZDRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUNmLHdCQUFLLEdBQUwsVUFBTSxFQUFFO1FBRUosRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLFFBQVEsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNiLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQTtnQkFDdEIsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztnQkFDM0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDN0IsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQ0FDSTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNPO0lBUmYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1ENUI7SUFBRCxlQUFDO0NBbkRELEFBbURDLENBbkRxQyxFQUFFLENBQUMsU0FBUyxHQW1EakQ7a0JBbkRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtU2xvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcbiAgICBzcHJBdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuXG4gICAgaWQgPSAwO1xuICAgIGFuaW1OYW1lID0gXCJcIjtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIHNldElkKGlkKSB7XG5cbiAgICAgICAgaWQgPSBpZCArIDE7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzLmdldFNwcml0ZUZyYW1lKFwiaWNvblwiICsgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuc3BpbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaWQpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gXCJ3aWxkXCJcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gJ2RvJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gJ3hhbmggbHVjJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gJ2xhJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gJ3RpbSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9ICd4YW5oIGR1b25nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCB0aGlzLmFuaW1OYW1lLCB0cnVlKTtcbiAgICB9XG4gICAgc2V0Qmx1cigpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzLmdldFNwcml0ZUZyYW1lKFwiaWNvblwiICsgKHRoaXMuaWQgKyAxKSArIFwiX2JsdXJcIik7XG4gICAgICAgIHRoaXMuc3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=