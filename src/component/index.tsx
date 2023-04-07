/*
 * @Author: 李东轩 Dongxuan.Li@lotuscars.com.cn
 * @Date: 2023-04-03 10:33:14
 * @LastEditors: 李东轩
 * @LastEditTime: 2023-04-03 13:20:25
 * @Description: file content
 */
import React, { ReactElement, useEffect } from 'react'
import {TableTreeData} from './type'
import "./index.css"
const TableTree = React.memo((props:TableTreeData)=> {
    const box = (data: any, container: any) => {
        data.map((element: any, index: number) => {
            if (element.children) {
                var div = document.createElement('div')
                var div1 = document.createElement('div')
                var div2 = document.createElement('div')
                div.innerHTML = `<input id=${element.key} name=${element.key}  data=${JSON.stringify(element)} type="checkbox" ${element.checked ? 'checked' : ''} > ${element.title}</input>`
                div.classList.add('divLeft')
                div1.classList.add('divRight')
                div2.classList.add('divmain')
                container.appendChild(div2)
                div2.appendChild(div)
                div2.appendChild(div1)
                box(element.children, div1)
            } else {
                var div = document.createElement('div')
                div.classList.add('divother')
                div.innerHTML = `<input  id=${element.key} name=${element.key}  data=${JSON.stringify(element)} type="checkbox" ${element.checked ? 'checked' : ''} > ${element.title}</input>`
                container.appendChild(div)
                return div
            }
        })
    }
       // node是当前节点  
       const changeFatherState = (node: any, state?: any, list?: any) => {
        if (!node.fkey) {
            return
        } else {
            list.map((element: any, index: number) => {
                if (element.key == node.fkey) {
                    // 判断当前下面是否还有选中的数据，如果有则继续选中，如果无，则当前项不选择
                    let val: any;
                    if (element.children) {
                        val = judgeChild(element.children, state)
                    }
                    element.checked = val;
                    setTimeout(() => {
                        console.log(element.key);
                        console.log(document.getElementById(element.key));
                        (document.getElementById(element.key) as any).checked = val;
                    }, 0);
                    changeFatherState(element, state, props.data)
                } else {
                    if (element.children) {
                        changeFatherState(node, state, element.children)
                    }
                }
            })
        }
    }
       // 向上寻找
    // 当选择时需要判断是否被选中 向上和向下寻找
    // 判断下面是否有选中的数据，如果有则继续
    const judgeChild = (node: any, state: any) => {
        for (let i = 0; i < node.length; i++) {
            if (node[i].checked) {
                return true
            }
        }
        // 如果后代和子三孙都为被选中，则为false
        return false
    }
     // 向下寻找
     const changeChildState = (node: any, state?: any) => {
        node.map((element: any, index: number) => {
            element.checked = state;
            (document.getElementById(element.key) as any).checked = state;
            (document.getElementById(element.key) as any).setAttribute('checked', state);
            if (element.children) {
                changeChildState(element.children, state)
            }
        })
    }
    const setList = (curdata: any, key: any, state?: any) => {
        console.log('key:' + key)
        curdata.map((element: any, index: number) => {
            if (element.key == key) {
                element.checked = state;
                changeFatherState(element, state, props.data);
                (document.getElementById(element.key) as any).checked = state;
                if (element.children) {
                    changeChildState(element.children, state)
                } else {
                    element.checked = state;
                    (document.getElementById(element.key) as any).checked = state;
                }
                return
            }
            if (element.children) {
                setList(element.children, key, state)
            }
        })
    }
    useEffect(()=> {
        const container:HTMLElement = document.getElementById('container')
        box(props.data, container)
        container.addEventListener('click', (e: any) => {
            if (e.target.id) {
                setList(props.data, e.target.id, e.target.checked)   // 元素被选中
            }
        });
    },[])

    return <div id="container" className='container'></div>
})
export default TableTree