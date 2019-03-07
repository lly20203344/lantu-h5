/**
 * 纯数字校验
 */

export const checkIsNumber = value => {
  const numberReg = /^[0-9]*$/;
  return numberReg.test(value);
 }
/**
 * 密码安全登记校验
 */
export const pswLeve = [
    {
      reg: /\d+/
    },
    {
      reg: /[a-z]+/
    },
    {
      reg: /[A-Z]+/
    },
    {
      reg: /[~!@#\$%^&*\(\)\{\};,.\?\/'"]/
    }
  ];

/**
 * 检测设备
 */
export const IsPC = () => {
    let userAgentInfo = navigator.userAgent;
    let Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    ];
    let flag = true; //true 代表PC false代表移动端
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) != -1) {
        flag = false;
        break;
      }
    }
    return flag;
  };


/**
 * 获取连接后的参数
 */
export const urlParams = () => {
  const fullUrl = location.href;
  const url = fullUrl.substr(fullUrl.indexOf("?")); //获取url中"?"符后的字串
  const theRequest = new Object();
  if (url.indexOf("?") != -1) {
    const str = url.substr(1);
    const strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
};

/**
 * 时间戳格式化
 * @param time 需要转化的时间戳
 * @param split 以特定符号分割
 */

export const formatTime = (time, split) => {
    let date = new Date(time - 0);
    let s = split;
    if (!s) {
        s = '-'
    }
    let year = date.getFullYear(),
        month = date.getMonth() + 1, //月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    let newTime =
        year +
        s +
        (month < 10 ? "0" + month : month) +
        s +
        (day < 10 ? "0" + day : day) +
        " " +
        (hour < 10 ? "0" + hour : hour) +
        ":" +
        (min < 10 ? "0" + min : min) +
        ":" +
        (sec < 10 ? "0" + sec : sec);

    return newTime;
}


/**
 * 获取cookie信息
 * @param key 键名
 */

export const getCookie=(key)=>{
  const cookies = document.cookie;
  cookies.replace(/\s+/g,"");
  const cookiesArr = cookies.split(';');
  let cookiesObj = {};
  cookiesArr.map(item=>{
    if(item.indexOf('=') != -1){
      const everyCookie = item.split("=");
      const keykey = everyCookie[0];
      cookiesObj[keykey] = everyCookie[1];
    }
  })
  return cookiesObj[key];
}

/**
 * 存储cookie
 */
export const saveCookie = (cookieName,cookieValue,cookieDates) =>{
	var d = new Date();
	d.setDate(d.getDate()+cookieDates);
	document.cookie = cookieName+"="+cookieValue+";expires="+d.toGMTString();
}

//删除cookie
export const removeCookie=(cookieName) => {
      document.cookie=encodeURIComponent(cookieName)+"=; expires=" + new Date();
}

/**
 * @param string 要处理的字符串
 * @param type 1：所有空格 2：前后空格 3：前空格 4：后空格
 */
export const removeSpace = (string,type) =>{
  switch (type){
    case 1:return string.replace(/\s+/g,"");
    case 2:return string.replace(/(^\s*)|(\s*$)/g, ""); 
    case 3:return string.replace(/(^\s*)/g, ""); 
    case 4:return string.replace(/(\s*$)/g, ""); 
    default:return string; 
  }
}


/**
* 倒计时（默认开始时间为当前时间）
* @param endTime 结束时间
* @returns 时间对象
*/
 const getEndTime =(startTime,endTime)=>{
  const startDate = startTime || new Date();                     //开始时间，当前时间
  const endDate = new Date(endTime);                //结束时间，需传入时间参数
  const t = endDate.getTime() - startDate.getTime();  //时间差的毫秒数
  let d=0,h=0,m=0,s=0;
  if(t>=0){
    d=Math.floor(t/1000/3600/24) > 10 ? Math.floor(t/1000/3600/24) : '0' + Math.floor(t/1000/3600/24);
    h=Math.floor(t/1000/60/60%24) > 10 ? Math.floor(t/1000/60/60%24) > 10 : '0' + Math.floor(t/1000/60/60%24) > 10;
    m=Math.floor(t/1000/60%60) > 10 ? Math.floor(t/1000/60%60) : '0' + Math.floor(t/1000/60%60);
    s=Math.floor(t/1000%60) > 10 ? Math.floor(t/1000%60) : '0' + Math.floor(t/1000%60);
  } 
  return {
    day:d,
    hour:h,
    minute:m,
    second:s
  }
}

/**
 * 获取localStorage
 * @param parms localStorage key名
 * @returns {*}
 */
export const getStorage = (key) => {
  if(localStorage.getItem(key) && localStorage.getItem(key) != "{}")
      return JSON.parse(localStorage.getItem(key));
  else
      return null;
}

/**
*设置localStorage
* @param key localStorage key 名
* @param data 数据
*/

export const setStorage = (key,data) => {
  localStorage.setItem(key,JSON.stringify(data));
}

/**
* 移除localStorage
* @param key localStorage key名
*/

export const removeStorage = (key) => {
  localStorage.removeItem(key);
}
