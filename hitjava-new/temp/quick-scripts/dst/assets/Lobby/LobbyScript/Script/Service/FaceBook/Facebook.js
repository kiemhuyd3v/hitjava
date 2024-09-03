
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/Service/FaceBook/Facebook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '061353hwd9MlqQac055EzDR', 'Facebook');
// Lobby/LobbyScript/Script/Service/FaceBook/Facebook.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facebookSdk = /** @class */ (function () {
    function facebookSdk(AppId, Scope, Callback) {
        window.fbAsyncInit = function () {
            FB.init({
                appId: AppId,
                xfbml: true,
                version: 'v3.1'
            });
            function statusChangeCallback(data) {
                if (data.status === 'connected') {
                    Callback({ status: 200, response: data });
                }
                else if (data.status === 'not_authorized') {
                    Callback({ status: 404, response: "The person is logged into Facebook, but not your app." });
                }
                else {
                    Callback({ status: 500, response: "They are logged into this app or not" });
                }
            }
            FB.getLoginStatus(function (data) {
                Callback({ status: 301, response: "wait" });
                if (data.status === 'connected') {
                    Callback({ status: 200, response: data });
                }
                else if (data.status === 'not_authorized') {
                    FB.login(function (statusChangeCallback) {
                        Callback({ status: 200, response: statusChangeCallback });
                    }, { scope: Scope });
                }
                else {
                    FB.login(function (statusChangeCallback) {
                        Callback({ status: 200, response: statusChangeCallback });
                    }, { scope: Scope });
                }
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.com/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
        ;
    }
    return facebookSdk;
}());
exports.default = facebookSdk;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXFNlcnZpY2VcXEZhY2VCb29rXFxGYWNlYm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQ0kscUJBQVksS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRO1FBQzlCLE1BQU0sQ0FBQyxXQUFXLEdBQUc7WUFDakIsRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDSixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsSUFBSTtnQkFDWCxPQUFPLEVBQUUsTUFBTTthQUNsQixDQUFDLENBQUM7WUFDSCxTQUFTLG9CQUFvQixDQUFDLElBQUk7Z0JBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7b0JBQzdCLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQzdDO3FCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsRUFBRTtvQkFDekMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsdURBQXVELEVBQUUsQ0FBQyxDQUFDO2lCQUNoRztxQkFBTTtvQkFDSCxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxzQ0FBc0MsRUFBRSxDQUFDLENBQUM7aUJBQy9FO1lBQ0wsQ0FBQztZQUNELEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBQyxJQUFJO2dCQUNuQixRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO29CQUM3QixRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QztxQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssZ0JBQWdCLEVBQUU7b0JBQ3pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBQyxvQkFBb0I7d0JBQzFCLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztvQkFDOUQsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBQyxvQkFBb0I7d0JBQzFCLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztvQkFDOUQsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ3hCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFDRixDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ04sSUFBSSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQ3JDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDcEMsRUFBRSxDQUFDLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1FBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmFjZWJvb2tTZGsge1xuICAgIGNvbnN0cnVjdG9yKEFwcElkLCBTY29wZSwgQ2FsbGJhY2spIHtcbiAgICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgRkIuaW5pdCh7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IEFwcElkLFxuICAgICAgICAgICAgICAgIHhmYm1sOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZlcnNpb246ICd2My4xJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBzdGF0dXNDaGFuZ2VDYWxsYmFjayhkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgICAgICBDYWxsYmFjayh7IHN0YXR1czogMjAwLCByZXNwb25zZTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIENhbGxiYWNrKHsgc3RhdHVzOiA0MDQsIHJlc3BvbnNlOiBcIlRoZSBwZXJzb24gaXMgbG9nZ2VkIGludG8gRmFjZWJvb2ssIGJ1dCBub3QgeW91ciBhcHAuXCIgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ2FsbGJhY2soeyBzdGF0dXM6IDUwMCwgcmVzcG9uc2U6IFwiVGhleSBhcmUgbG9nZ2VkIGludG8gdGhpcyBhcHAgb3Igbm90XCIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBDYWxsYmFjayh7IHN0YXR1czogMzAxLCByZXNwb25zZTogXCJ3YWl0XCIgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgICAgICBDYWxsYmFjayh7IHN0YXR1czogMjAwLCByZXNwb25zZTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIEZCLmxvZ2luKChzdGF0dXNDaGFuZ2VDYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ2FsbGJhY2soeyBzdGF0dXM6IDIwMCwgcmVzcG9uc2U6IHN0YXR1c0NoYW5nZUNhbGxiYWNrIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCB7IHNjb3BlOiBTY29wZSB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBGQi5sb2dpbigoc3RhdHVzQ2hhbmdlQ2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbGxiYWNrKHsgc3RhdHVzOiAyMDAsIHJlc3BvbnNlOiBzdGF0dXNDaGFuZ2VDYWxsYmFjayB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgeyBzY29wZTogU2NvcGUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICgoZCwgcywgaWQpID0+IHtcbiAgICAgICAgICAgIHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcbiAgICAgICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xuICAgICAgICAgICAganMuc3JjID0gXCIvL2Nvbm5lY3QuZmFjZWJvb2suY29tL2VuX1VTL3Nkay5qc1wiO1xuICAgICAgICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xuICAgICAgICB9KGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJykpO1xuICAgIH1cbn0iXX0=