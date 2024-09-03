"use strict";
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