# lantu-h5

> lantu h5 project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for test with minification
npm run test

# build for production and view the bundle analyzer report
npm run build --report
```

``` bash
#style,UI组件
less
Vant
#加密
md5加密
#统计，友盟统计
npm install vue-uweb --save

#bigjs介绍
import Big from 'big.mjs';

new Big().abs()     绝对数
plus()              加法
minus()             减法
times()             乘法
div()               除法
mod()               取余
eq()                是否相等
gt()                大于
gte()               大于等于
lt()                小于
lte()               小于等于
pow()               次方
sqrt()              开方
round()             
toString()       科学计数法转string

#数字精度使用类库
js-big-decimal

#安装、引入
npm install --save js-big-decimal
import bigDecimal from "js-big-decimal";

bigDecimal.add(p1,p2);          //加法
bigDecimal.subtract(p1,p2);     //减法
bigDecimal.multiply(p1,p2);     //乘法
bigDecimal.divide(p1,p2);       //除法
bigDecimal.divide('45', '4', 2); // quotient = 11.25
bigDecimal.round(p1, 2)         //数字格式化 123.00
bigDecimal.getPrettyValue("12345.6789"); // value = "12,345.6789"

#**_可接第三个参数，表示保留几位小数_**
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
