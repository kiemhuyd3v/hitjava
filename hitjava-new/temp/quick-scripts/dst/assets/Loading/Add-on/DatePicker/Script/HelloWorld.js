
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/Add-on/DatePicker/Script/HelloWorld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18fae+0JotI76IMbz0XKZNb', 'HelloWorld');
// Loading/Add-on/DatePicker/Script/HelloWorld.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    pfbDatePicker: cc.Prefab
  },
  onLoad: function onLoad() {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.day = date.getDate();
    this.updateDate();
  },
  onClickDate: function onClickDate() {
    var _this = this;

    var node = cc.instantiate(this.pfbDatePicker);
    node.parent = this.node;
    var datePicker = node.getComponent("UIDatePicker");
    datePicker.setDate(this.year, this.month, this.day);
    datePicker.setPickDateCallback(function (year, month, day) {
      _this.year = year;
      _this.month = month;
      _this.day = day;

      _this.updateDate();
    });
  },
  updateDate: function updateDate() {
    this.label.string = cc.js.formatStr("%s-%s-%s", this.year, this.month + 1, this.day);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcQWRkLW9uXFxEYXRlUGlja2VyXFxTY3JpcHRcXEhlbGxvV29ybGQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbCIsInR5cGUiLCJMYWJlbCIsInBmYkRhdGVQaWNrZXIiLCJQcmVmYWIiLCJvbkxvYWQiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidXBkYXRlRGF0ZSIsIm9uQ2xpY2tEYXRlIiwibm9kZSIsImluc3RhbnRpYXRlIiwicGFyZW50IiwiZGF0ZVBpY2tlciIsImdldENvbXBvbmVudCIsInNldERhdGUiLCJzZXRQaWNrRGF0ZUNhbGxiYWNrIiwic3RyaW5nIiwianMiLCJmb3JtYXRTdHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZOLEtBREM7QUFLUkMsSUFBQUEsYUFBYSxFQUFFUCxFQUFFLENBQUNRO0FBTFYsR0FIUDtBQVdMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsUUFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBWDtBQUNBLFNBQUtDLElBQUwsR0FBWUYsSUFBSSxDQUFDRyxXQUFMLEVBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFKLElBQUksQ0FBQ0ssUUFBTCxFQUFiO0FBQ0EsU0FBS0MsR0FBTCxHQUFXTixJQUFJLENBQUNPLE9BQUwsRUFBWDtBQUVBLFNBQUtDLFVBQUw7QUFDSCxHQWxCSTtBQW9CTEMsRUFBQUEsV0FBVyxFQUFFLHVCQUFXO0FBQUE7O0FBQ3BCLFFBQUlDLElBQUksR0FBR3BCLEVBQUUsQ0FBQ3FCLFdBQUgsQ0FBZSxLQUFLZCxhQUFwQixDQUFYO0FBQ0FhLElBQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjLEtBQUtGLElBQW5CO0FBQ0EsUUFBSUcsVUFBVSxHQUFHSCxJQUFJLENBQUNJLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBakI7QUFDQUQsSUFBQUEsVUFBVSxDQUFDRSxPQUFYLENBQW1CLEtBQUtiLElBQXhCLEVBQThCLEtBQUtFLEtBQW5DLEVBQTBDLEtBQUtFLEdBQS9DO0FBQ0FPLElBQUFBLFVBQVUsQ0FBQ0csbUJBQVgsQ0FBK0IsVUFBQ2QsSUFBRCxFQUFPRSxLQUFQLEVBQWNFLEdBQWQsRUFBb0I7QUFDL0MsTUFBQSxLQUFJLENBQUNKLElBQUwsR0FBWUEsSUFBWjtBQUNBLE1BQUEsS0FBSSxDQUFDRSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxNQUFBLEtBQUksQ0FBQ0UsR0FBTCxHQUFXQSxHQUFYOztBQUNBLE1BQUEsS0FBSSxDQUFDRSxVQUFMO0FBQ0gsS0FMRDtBQU1ILEdBL0JJO0FBaUNMQSxFQUFBQSxVQWpDSyx3QkFpQ1M7QUFDVixTQUFLZCxLQUFMLENBQVd1QixNQUFYLEdBQW9CM0IsRUFBRSxDQUFDNEIsRUFBSCxDQUFNQyxTQUFOLENBQWdCLFVBQWhCLEVBQTRCLEtBQUtqQixJQUFqQyxFQUF1QyxLQUFLRSxLQUFMLEdBQWEsQ0FBcEQsRUFBdUQsS0FBS0UsR0FBNUQsQ0FBcEI7QUFDSDtBQW5DSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIHBmYkRhdGVQaWNrZXI6IGNjLlByZWZhYixcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLm1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLmRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZSgpO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrRGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZmJEYXRlUGlja2VyKTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gbm9kZS5nZXRDb21wb25lbnQoXCJVSURhdGVQaWNrZXJcIik7XG4gICAgICAgIGRhdGVQaWNrZXIuc2V0RGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGgsIHRoaXMuZGF5KTtcbiAgICAgICAgZGF0ZVBpY2tlci5zZXRQaWNrRGF0ZUNhbGxiYWNrKCh5ZWFyLCBtb250aCwgZGF5KT0+e1xuICAgICAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICAgICAgICAgIHRoaXMubW9udGggPSBtb250aDtcbiAgICAgICAgICAgIHRoaXMuZGF5ID0gZGF5O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB1cGRhdGVEYXRlICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBjYy5qcy5mb3JtYXRTdHIoXCIlcy0lcy0lc1wiLCB0aGlzLnllYXIsIHRoaXMubW9udGggKyAxLCB0aGlzLmRheSk7XG4gICAgfVxufSk7XG4iXX0=