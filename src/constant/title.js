/**
 * ajax请求接口地址常量
 */


const TITLE = {
    '#/': '首页',
}

function getTitle(route) {
    return TITLE[route] || '';
}

export default getTitle;
