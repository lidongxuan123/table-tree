/*
 * @Author: 李东轩 Dongxuan.Li@lotuscars.com.cn
 * @Date: 2023-04-03 10:13:51
 * @LastEditors: 李东轩
 * @LastEditTime: 2023-04-06 18:50:11
 * @Description: file content
 */
/**
 * 创建react
 */

import data from "./data"
var React = require('react')
var TableTree = require('table-tree')
var ReactDom = require('react-dom')

ReactDom.render(<TableTree data={data} />, document.getElementById('root'))