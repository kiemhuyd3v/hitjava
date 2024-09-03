"use strict";
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