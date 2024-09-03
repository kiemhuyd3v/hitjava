
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/VersionConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4432dTxaiNCLKzaQM0wvnBN', 'VersionConfig');
// Loading/src/VersionConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VersionConfig = /** @class */ (function () {
    function VersionConfig() {
    }
    VersionConfig.CP_NAME_F69 = "F69";
    VersionConfig.ENV_DEV = "dev";
    VersionConfig.ENV_PROD = "prod";
    VersionConfig.DOMAIN_DEV = "FANVIN.wIN";
    VersionConfig.DOMAIN_PRO = "FANVIN.wIN";
    VersionConfig.VersionName = "";
    VersionConfig.CPName = "";
    VersionConfig.ENV = VersionConfig.ENV_DEV;
    return VersionConfig;
}());
exports.default = VersionConfig;
if (cc.sys.isNative) {
    var versionConfig = cc.sys.localStorage.getItem("VersionConfig");
    if (versionConfig != null) {
        versionConfig = JSON.parse(versionConfig);
        VersionConfig.VersionName = versionConfig["VersionName"];
        VersionConfig.CPName = versionConfig["CPName"];
    }
    else {
        VersionConfig.VersionName = "1.0.0";
        VersionConfig.CPName = VersionConfig.CP_NAME_F69;
    }
}
else {
    VersionConfig.VersionName = "1.0.0";
    VersionConfig.CPName = VersionConfig.CP_NAME_F69;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxWZXJzaW9uQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQVVBLENBQUM7SUFUbUIseUJBQVcsR0FBRyxLQUFLLENBQUM7SUFDcEIscUJBQU8sR0FBRyxLQUFLLENBQUM7SUFDaEIsc0JBQVEsR0FBRyxNQUFNLENBQUM7SUFDbEIsd0JBQVUsR0FBRyxZQUFZLENBQUM7SUFDMUIsd0JBQVUsR0FBRyxZQUFZLENBQUM7SUFFbkMseUJBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsb0JBQU0sR0FBRyxFQUFFLENBQUM7SUFDWixpQkFBRyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDdkMsb0JBQUM7Q0FWRCxBQVVDLElBQUE7a0JBVm9CLGFBQWE7QUFXbEMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtJQUNqQixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO1FBQ3ZCLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELGFBQWEsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2xEO1NBQUk7UUFDRCxhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUNwQyxhQUFhLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7S0FDcEQ7Q0FDSjtLQUFNO0lBQ0gsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDcEMsYUFBYSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO0NBQ3BEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyc2lvbkNvbmZpZyB7XG4gICAgc3RhdGljIHJlYWRvbmx5IENQX05BTUVfRjY5ID0gXCJGNjlcIjtcbiAgICBzdGF0aWMgcmVhZG9ubHkgRU5WX0RFViA9IFwiZGV2XCI7XG4gICAgc3RhdGljIHJlYWRvbmx5IEVOVl9QUk9EID0gXCJwcm9kXCI7XG4gICAgc3RhdGljIHJlYWRvbmx5IERPTUFJTl9ERVYgPSBcIkZBTlZJTi53SU5cIjtcbiAgICBzdGF0aWMgcmVhZG9ubHkgRE9NQUlOX1BSTyA9IFwiRkFOVklOLndJTlwiO1xuXG4gICAgc3RhdGljIFZlcnNpb25OYW1lID0gXCJcIjtcbiAgICBzdGF0aWMgQ1BOYW1lID0gXCJcIjtcbiAgICBzdGF0aWMgRU5WID0gVmVyc2lvbkNvbmZpZy5FTlZfREVWO1xufVxuaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgIGxldCB2ZXJzaW9uQ29uZmlnID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVmVyc2lvbkNvbmZpZ1wiKTtcbiAgICBpZiAodmVyc2lvbkNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgIHZlcnNpb25Db25maWcgPSBKU09OLnBhcnNlKHZlcnNpb25Db25maWcpO1xuICAgICAgICBWZXJzaW9uQ29uZmlnLlZlcnNpb25OYW1lID0gdmVyc2lvbkNvbmZpZ1tcIlZlcnNpb25OYW1lXCJdO1xuICAgICAgICBWZXJzaW9uQ29uZmlnLkNQTmFtZSA9IHZlcnNpb25Db25maWdbXCJDUE5hbWVcIl07XG4gICAgfWVsc2V7XG4gICAgICAgIFZlcnNpb25Db25maWcuVmVyc2lvbk5hbWUgPSBcIjEuMC4wXCI7XG4gICAgICAgIFZlcnNpb25Db25maWcuQ1BOYW1lID0gVmVyc2lvbkNvbmZpZy5DUF9OQU1FX0Y2OTtcbiAgICB9XG59IGVsc2Uge1xuICAgIFZlcnNpb25Db25maWcuVmVyc2lvbk5hbWUgPSBcIjEuMC4wXCI7XG4gICAgVmVyc2lvbkNvbmZpZy5DUE5hbWUgPSBWZXJzaW9uQ29uZmlnLkNQX05BTUVfRjY5O1xufSJdfQ==