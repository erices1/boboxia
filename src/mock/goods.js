/*
 * @Author: wenzhicheng
 * @Date:   2018-03-07 11:47:14
 * @Last Modified by:   wenzhicheng
 * @Last Modified time: 2018-03-07 14:10:34
 */
import Mock from 'mockjs'
export default Mock.mock("http://127.1.1.0:9091", {
  "status": "0",
  "msg": "",
  'array|50-100': [{
    "id|+1": 1,
    "name": "@name",
    "account": "New York",
    "loginTime":Mock.Random.date('yyyy-MM-dd'),
    "register": Mock.Random.date('yyyy-MM-dd'),
    "class": "一级渠道",
    "under": "baidu",
    "system": "ios",
    "commissioner": Mock.Random.cname(),
    "status|0-1": 1
  }]
})
