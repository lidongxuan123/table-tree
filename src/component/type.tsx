/*
 * @Author: 李东轩 Dongxuan.Li@lotuscars.com.cn
 * @Date: 2023-04-03 10:46:25
 * @LastEditors: 李东轩
 * @LastEditTime: 2023-04-03 10:46:47
 * @Description: file content
 */
interface MenuType {
    title: string
    checked: boolean
    key: number | string
    fkey?: number | string
    children?: MenuType[]
}
export interface TableTreeData  {
    data: MenuType[]
}