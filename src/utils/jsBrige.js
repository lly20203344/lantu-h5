//JS调App名称
export function callApp(native, code, params) {
    // APP的回調函數
    // var native = function (data) { };
    // native回調函數 obj參數對象
    console.log(native);
    let obj = {
        code: code,
        data: JSON.stringify(params)
    };
    return nativeInteractive(native, obj);
}
// callPhone(str) {
//     console.log(str);
//     var native = function (data) {
//         console.log(data);
//     };
//     return this.nativeInteractive(native, str);
// }
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];

    var WVJBIframe = document.createElement("iframe");
    WVJBIframe.style.display = "none";
    WVJBIframe.src = "wvjbscheme://__BRIDGE_LOADED__";
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe);
    }, 0);
}

//App调JS名称
function nativeInteractive(fn, obj) {
    setupWebViewJavascriptBridge(function(bridge) {
        if (obj) {
            bridge.callHandler("jsCallback", obj, function(response) {});
        }
        bridge.registerHandler("sendJsAction", function(data, response) {
            fn(data);
        });
    });
    if (window.citex && obj) {
        var str = JSON.stringify(obj);
        window.citex.jsCallback();
    }

    window.sendJsAction = function(data) {
        var obj = eval("(" + data + ")");
        fn(obj);
    };
}