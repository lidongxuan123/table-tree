/*
 * @Author: 李东轩 Dongxuan.Li@lotuscars.com.cn
 * @Date: 2023-03-27 16:56:37
 * @LastEditors: 李东轩
 * @LastEditTime: 2023-04-03 13:16:09
 * @Description: file content
 */
export default [{
    title: "数据采集",
    checked: false,
    key: 13,
    children: [{
        title: "采集资源管理",
        checked: false,
        key: 23,
        fkey: 13,
        children: [{
            title: "车辆管理",
            checked: false,
            key: 6,
            fkey: 23,
            children:[{
                title: "车辆管理1",
                checked: false,
                key: 61,
                fkey: 6
            },{
                title: "车辆管理1",
                checked: false,
                key: 62,
                fkey: 6
            }]
        }, {
            title: "人员管理",
            checked: false,
            key: 7,
            fkey: 23
        }, {
            title: "采集范围管理",
            checked: false,
            key: 8,
            fkey: 23
        }]
    }, {
        title: "采集任务管理",
        checked: false,
        key: 32,
        fkey: 13,
        children: [{
            title: "需求管理",
            checked: false,
            key: 9,
            fkey: 32,
        }, {
            title: "任务管理",
            checked: false,
            key: 10,
            fkey: 32,
        }]
    }, {
        title: "数据上传",
        checked: false,
        key: 4,
        fkey: 13,
    }, {
        title: "总揽",
        checked: false,
        key: 5,
        fkey: 13,
    }]
}]

