// nodemon node热更新的插件，修改内容然后刷新
const query = require('./data/getPersonMsg');
const express = require('express')
const app = express()
// 然后就可以直接写接口啦
app.get('/getPersonMsg', (req, res) => { // 当请求为get请求，url路径为 / 的时候，返回如下数据
  res.header('Access-Control-Allow-Origin', '*'); // 处理跨域问题，后端用的是注解
  let pageIndex = req.query.pageIndex // 取参数 
  let pageSize = req.query.pageSize // 取参数
  res.send(query(pageIndex, pageSize))
})
app.get('/getNewMsg', (req, res) => { // 当请求为get请求，url路径为 / 的时候，返回如下数据
  res.header('Access-Control-Allow-Origin', '*');
  // 带状态码的结构
  let data = {
    msg: '成功',
    status: 12,
    code: 200,
    data: {
      name: '三岁',
      adress: '上海杨浦路104弄'
    }
  }
  res.send(data)
})
app.get('/getOptions', (req, res) => { // 当请求为get请求，url路径为 / 的时候，返回如下数据
  res.header('Access-Control-Allow-Origin', '*');
  // 带状态码的结构
  let data = [
    {
      va: 'bubbles',
      la: '奶黄泡泡'
    }, {
      va: 'clouds',
      la: '七彩云层'
    }
  ]
  res.send(data)
})
app.get('/getOptionsCity', (req, res) => { // 当请求为get请求，url路径为 / 的时候，返回如下数据
  res.header('Access-Control-Allow-Origin', '*');
  // 带状态码的结构
  let data = [
    {
      va: 'beijing',
      la: '北京',
    }, {
      va: 'shanghai',
      la: '上海',
    }
  ]
  res.send(data)
})
app.get('/getOptionsAndDeepOptions', (req, res) => { // 当请求为get请求，url路径为 / 的时候，返回如下数据
  res.header('Access-Control-Allow-Origin', '*');
  let cityVal = req.query.cityVal
  let Dict = {
    'beijing': [
      {
        va: 'chang',
        la: '八达岭',
      },
      {
        va: 'tiananmen',
        la: '天安门',
      }
    ],
    "shanghai": [
      {
        va: 'minxing',
        la: '闵行区',
      },
      {
        va: 'pufong',
        la: '浦东新区',
      }
    ]
  }
  res.send(Dict[cityVal])
})
app.get('/getSelectOptions', (req, res) => { // 当请求为get请求，url路径为 / 的时候，返回如下数据
  res.header('Access-Control-Allow-Origin', '*');
  let pageIndex = req.query.pageIndex // 多少页 2
  let pageSize = req.query.pageSize // 当页多少条 10
  res.send(query(pageIndex, pageSize))
})

// 在9999端口上启动后端服务
app.listen(9999, (req, res) => {
  console.log('后端服务端口地址为：localhost://9999');
})

