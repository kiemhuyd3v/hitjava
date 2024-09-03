
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/Add-on/DatePicker/resources/UIDatePicker/UIItemDay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '252a5nAq6pLOITqXWwWN/H/', 'UIItemDay');
// Loading/Add-on/DatePicker/resources/UIDatePicker/UIItemDay.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    lbDay: cc.Label,
    spSel: cc.Sprite,
    button: cc.Button
  },
  setDay: function setDay(index, day, sel, cb) {
    this.index = index;
    this.day = day;
    this.cb = cb;
    this.lbDay.string = day;
    this.spSel.enabled = sel;
  },
  onClickItem: function onClickItem() {
    if (this.cb) {
      this.cb(this.index, this.day);
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcQWRkLW9uXFxEYXRlUGlja2VyXFxyZXNvdXJjZXNcXFVJRGF0ZVBpY2tlclxcVUlJdGVtRGF5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGJEYXkiLCJMYWJlbCIsInNwU2VsIiwiU3ByaXRlIiwiYnV0dG9uIiwiQnV0dG9uIiwic2V0RGF5IiwiaW5kZXgiLCJkYXkiLCJzZWwiLCJjYiIsInN0cmluZyIsImVuYWJsZWQiLCJvbkNsaWNrSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxLQURGO0FBRVJDLElBQUFBLEtBQUssRUFBRU4sRUFBRSxDQUFDTyxNQUZGO0FBR1JDLElBQUFBLE1BQU0sRUFBRVIsRUFBRSxDQUFDUztBQUhILEdBSFA7QUFTTEMsRUFBQUEsTUFUSyxrQkFTRUMsS0FURixFQVNTQyxHQVRULEVBU2NDLEdBVGQsRUFTbUJDLEVBVG5CLEVBU3VCO0FBQ3hCLFNBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtFLEVBQUwsR0FBVUEsRUFBVjtBQUVBLFNBQUtWLEtBQUwsQ0FBV1csTUFBWCxHQUFvQkgsR0FBcEI7QUFDQSxTQUFLTixLQUFMLENBQVdVLE9BQVgsR0FBcUJILEdBQXJCO0FBQ0gsR0FoQkk7QUFrQkxJLEVBQUFBLFdBbEJLLHlCQWtCUztBQUNWLFFBQUksS0FBS0gsRUFBVCxFQUFhO0FBQ1QsV0FBS0EsRUFBTCxDQUFRLEtBQUtILEtBQWIsRUFBb0IsS0FBS0MsR0FBekI7QUFDSDtBQUNKO0FBdEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiRGF5OiBjYy5MYWJlbCxcbiAgICAgICAgc3BTZWw6IGNjLlNwcml0ZSxcbiAgICAgICAgYnV0dG9uOiBjYy5CdXR0b25cbiAgICB9LFxuXG4gICAgc2V0RGF5KGluZGV4LCBkYXksIHNlbCwgY2IpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmRheSA9IGRheTtcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xuXG4gICAgICAgIHRoaXMubGJEYXkuc3RyaW5nID0gZGF5O1xuICAgICAgICB0aGlzLnNwU2VsLmVuYWJsZWQgPSBzZWw7XG4gICAgfSxcblxuICAgIG9uQ2xpY2tJdGVtKCkge1xuICAgICAgICBpZiAodGhpcy5jYikge1xuICAgICAgICAgICAgdGhpcy5jYih0aGlzLmluZGV4LCB0aGlzLmRheSk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=