
import Mock from 'mockjs'
import indexMock from './json/index'
import personalMock from './json/personal'
import productMock from './json/product'

Mock.mock('/getUser', 'post', () => {
  return indexMock.baseInfo
})
Mock.mock('/getpersonalData', 'get', () => {
  return personalMock.personalData
})
