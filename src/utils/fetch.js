/**
 * axios配置，封装有错误码和错误描述
 */
import axios from "axios";
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
        if (type == "post") {
            axios
                .post(API_ROOT + url, params, {
                    headers: {
                        Authorization: ''
                    }
                })
                .then(
                    response => {
                        resolve(response.data);
                    },
                    err => {
                        reject(err);
                    }
                )
                .catch(error => {
                    reject(error);
                });
        } else {
            axios
                .get(API_ROOT + url + parmarsStr, {
                    headers: {
                        Authorization: ''
                    }
                })
                .then(
                    response => {
                        resolve(response.data);
                    },
                    err => {
                        reject(err);
                    }
                )
                .catch(error => {
                    reject(error);
                });
        }
    });
}