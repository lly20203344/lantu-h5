/**
 * axios配置，封装有错误码和错误描述
 */
import axios from "axios";
import { Toast } from 'vant';
let API_ROOT = process.env.API_ROOT;
export const fetch = (url, params, type) => {
    return new Promise((resolve, reject) => {
        let parmarsStr = "";
        if (JSON.stringify(params) != "{}") {
            parmarsStr += "?";
            for (const key in params) {
                parmarsStr += key + "=" + params[key] + "&";
            }
            parmarsStr = parmarsStr.substring(0, parmarsStr.length - 1);
        }

        switch (type) {
            case "post":
                axios
                .post(API_ROOT + url, params, {
                    headers: {
                        Authorization: ''
                    }
                })
                .then(
                    response => {
                        resolve(checkData(response));
                    },
                    err => {
                        reject(err);
                    }
                )
                .catch(error => {
                    reject(error);
                });
                break;
            case "get":
                axios
                    .get(API_ROOT + url + parmarsStr, {
                        headers: {
                            Authorization: ''
                        }
                    })
                    .then(
                        response => {
                            resolve(checkData(response));
                        },
                        err => {
                            reject(err);
                        }
                    )
                    .catch(error => {
                        reject(error);
                    });
                    break;
            // 外部请求，不带token
            case "out_post":
                axios
                .post(API_ROOT + url, params)
                .then(
                    response => {
                        resolve(checkData(response));
                    },
                    err => {
                        reject(err);
                    }
                )
                .catch(error => {
                    reject(error);
                });
                break;
            case "out_get":
                axios
                    .get(API_ROOT + url + parmarsStr)
                    .then(
                        response => {
                            resolve(checkData(response));
                        },
                        err => {
                            reject(err);
                        }
                    )
                    .catch(error => {
                        reject(error);
                    });
                    break;
            default:
                break;
        }
    });
}

function checkData(res){
    console.log(res);
    
    if(res && res.status ==200){
        if(res.data && res.data.code == 0){
            return res.data.data;
        }else{
            switch (res.data.code) {
                case 10010:
                    Toast(res.data.msg);
                    break;
                default:
                    break;
            }
        }
    }else{
        switch (res.status) {
            case 404:
                console.log("interface is error");
                break;
            case 500:
                console.log(res.data.msg);
            break;
            
            default:
                break;
        }
    }
}