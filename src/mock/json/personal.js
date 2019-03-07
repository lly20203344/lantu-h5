// 用户信息
import Mock from 'mockjs'
const Random = Mock.Random;
let data = Mock.mock({
    'data|1-100': [
      {
        id: '@id',
        title: '@ctitle',
        namespace: 'desctab',
        content: '@cparagraph',
        isPublish: '@boolean',
        createTime: '@datetime',
      },
    ]
})
console.log(data)
export default {
    personalData:{
        "code":0,
        "data":data,
        "msg":"success"
    }
}