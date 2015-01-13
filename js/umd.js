(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD 格式
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // CMD 格式
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        挂载到浏览器 window 下
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //    定义几个方法
    function a{};    //    私有方法, 不暴露出去
    function b{};    //    公有方法
    function c{};    //    公有方法

    // 将公有方法暴露出去
    return {
        b: b,
        c: c
    }
}));