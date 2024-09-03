
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/RestApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14079ta+BVK+YXJ+UX/Ubvw', 'RestApi');
// Lobby/LobbyScript/Script/common/RestApi.js

"use strict";

// var UserModel = require("UserModel");
var RestApi = {
  CallGet: function CallGet(api, data, callbackSuccess) {
    var url = api; //LINK_API + api;

    console.log("CallGet:" + url);
    var xhr = cc.loader.getXMLHttpRequest(); //new XMLHttpRequest();

    xhr.open("GET", url, true); // xhr.setRequestHeader("Content-type", "application/json");
    // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    // xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
    // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    // if (UserModel.token != "")
    // {
    //     xhr.setRequestHeader("Authorization", "Bearer " + UserModel.token);
    // }

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        callbackSuccess(xhr.responseText);
      }
    };

    xhr.send();
  },
  CallPost: function CallPost(api, data, callbackSuccess, token) {
    if (token === void 0) {
      token = "";
    }

    // var url = LINK_API + api;
    var url = api;
    console.log("CallPost:" + url + ":" + JSON.stringify(data));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    if (token != "") {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        console.log("Response Success:" + api + ":" + xhr.responseText);
        callbackSuccess(xhr.responseText);
      }
    };

    xhr.send(JSON.stringify(data));
  }
};
module.exports = RestApi;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcUmVzdEFwaS5qcyJdLCJuYW1lcyI6WyJSZXN0QXBpIiwiQ2FsbEdldCIsImFwaSIsImRhdGEiLCJjYWxsYmFja1N1Y2Nlc3MiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwieGhyIiwiY2MiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsIkNhbGxQb3N0IiwidG9rZW4iLCJKU09OIiwic3RyaW5naWZ5IiwiWE1MSHR0cFJlcXVlc3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBSTtBQUNBLElBQUlBLE9BQU8sR0FBRztBQUVWQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQkMsZUFBckIsRUFBc0M7QUFDM0MsUUFBSUMsR0FBRyxHQUFHSCxHQUFWLENBRDJDLENBQzVCOztBQUNmSSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFXRixHQUF2QjtBQUNBLFFBQUlHLEdBQUcsR0FBR0MsRUFBRSxDQUFDQyxNQUFILENBQVVDLGlCQUFWLEVBQVYsQ0FIMkMsQ0FHSDs7QUFDeENILElBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLEtBQVQsRUFBZ0JQLEdBQWhCLEVBQXFCLElBQXJCLEVBSjJDLENBSzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUcsSUFBQUEsR0FBRyxDQUFDSyxrQkFBSixHQUF5QixZQUFZO0FBQ2pDLFVBQUlMLEdBQUcsQ0FBQ00sVUFBSixJQUFrQixDQUFsQixJQUF3Qk4sR0FBRyxDQUFDTyxNQUFKLElBQWMsR0FBZCxJQUFxQlAsR0FBRyxDQUFDTyxNQUFKLEdBQWEsR0FBOUQsRUFBb0U7QUFDaEVYLFFBQUFBLGVBQWUsQ0FBQ0ksR0FBRyxDQUFDUSxZQUFMLENBQWY7QUFDSDtBQUNKLEtBSkQ7O0FBTUFSLElBQUFBLEdBQUcsQ0FBQ1MsSUFBSjtBQUNILEdBdkJTO0FBeUJWQyxFQUFBQSxRQUFRLEVBQUUsa0JBQVVoQixHQUFWLEVBQWVDLElBQWYsRUFBcUJDLGVBQXJCLEVBQXNDZSxLQUF0QyxFQUFrRDtBQUFBLFFBQVpBLEtBQVk7QUFBWkEsTUFBQUEsS0FBWSxHQUFKLEVBQUk7QUFBQTs7QUFDeEQ7QUFDQSxRQUFJZCxHQUFHLEdBQUlILEdBQVg7QUFDQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBY0YsR0FBZCxHQUFvQixHQUFwQixHQUEwQmUsSUFBSSxDQUFDQyxTQUFMLENBQWVsQixJQUFmLENBQXRDO0FBQ0EsUUFBSUssR0FBRyxHQUFHLElBQUljLGNBQUosRUFBVjtBQUNBZCxJQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBUyxNQUFULEVBQWlCUCxHQUFqQixFQUFzQixJQUF0QjtBQUNBRyxJQUFBQSxHQUFHLENBQUNlLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQzs7QUFDQSxRQUFJSixLQUFLLElBQUksRUFBYixFQUNBO0FBQ0lYLE1BQUFBLEdBQUcsQ0FBQ2UsZ0JBQUosQ0FBcUIsZUFBckIsRUFBc0MsWUFBWUosS0FBbEQ7QUFDSDs7QUFDRFgsSUFBQUEsR0FBRyxDQUFDSyxrQkFBSixHQUF5QixZQUFZO0FBQ2pDLFVBQUlMLEdBQUcsQ0FBQ00sVUFBSixJQUFrQixDQUFsQixJQUF3Qk4sR0FBRyxDQUFDTyxNQUFKLElBQWMsR0FBZCxJQUFxQlAsR0FBRyxDQUFDTyxNQUFKLEdBQWEsR0FBOUQsRUFBb0U7QUFDaEVULFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFzQkwsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NNLEdBQUcsQ0FBQ1EsWUFBbEQ7QUFDQVosUUFBQUEsZUFBZSxDQUFDSSxHQUFHLENBQUNRLFlBQUwsQ0FBZjtBQUNIO0FBQ0osS0FMRDs7QUFPQVIsSUFBQUEsR0FBRyxDQUFDUyxJQUFKLENBQVNHLElBQUksQ0FBQ0MsU0FBTCxDQUFlbEIsSUFBZixDQUFUO0FBQ0g7QUE1Q1MsQ0FBZDtBQStDQXFCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLE9BQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLy8gdmFyIFVzZXJNb2RlbCA9IHJlcXVpcmUoXCJVc2VyTW9kZWxcIik7XG4gICAgdmFyIFJlc3RBcGkgPSB7XG5cbiAgICAgICAgQ2FsbEdldDogZnVuY3Rpb24gKGFwaSwgZGF0YSwgY2FsbGJhY2tTdWNjZXNzKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gYXBpOyAvL0xJTktfQVBJICsgYXBpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYWxsR2V0OlwiK3VybCk7XG4gICAgICAgICAgICBsZXQgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7Ly9uZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiLCBcIkdFVCxIRUFELE9QVElPTlMsUE9TVCxQVVRcIik7XG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLCBPcmlnaW4sQWNjZXB0LCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2Vzcy1Db250cm9sLVJlcXVlc3QtTWV0aG9kLCBBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LUhlYWRlcnNcIik7XG4gICAgICAgICAgICAvLyBpZiAoVXNlck1vZGVsLnRva2VuICE9IFwiXCIpXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgVXNlck1vZGVsLnRva2VuKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrU3VjY2Vzcyh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIENhbGxQb3N0OiBmdW5jdGlvbiAoYXBpLCBkYXRhLCBjYWxsYmFja1N1Y2Nlc3MsIHRva2VuID0gXCJcIikge1xuICAgICAgICAgICAgLy8gdmFyIHVybCA9IExJTktfQVBJICsgYXBpO1xuICAgICAgICAgICAgdmFyIHVybCA9ICBhcGk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGxQb3N0OlwiICsgdXJsICsgXCI6XCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgICAgIGlmICh0b2tlbiAhPSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2UgU3VjY2VzczpcIiArIGFwaSArIFwiOlwiICsgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrU3VjY2Vzcyh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFJlc3RBcGk7Il19