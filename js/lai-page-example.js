var opts = {
    currentPageIndex: 0
};
var page = new window.Page(opts);

// dev tools
var Dev = {};
Dev.setRandomBgColor = function (selector) {
    $(selector).each(function () {
        var rgba = Dev.getRandomBgColor();
        $(this).css('background-color', rgba);
    })
};
Dev.getRandomBgColor = function () {
    var r = Dev.getRandomNumber(0,255);
    var g = Dev.getRandomNumber(0,255);
    var b = Dev.getRandomNumber(0,255);
    var a = Dev.getRandomNumber(50,100) / 100;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a +')';
};

Dev.getRandomNumber = function (min, max) {
    var range = max - min;
    var result = Math.floor(Math.random() * range) + min;
    return result;
};

Dev.setRandomBgColor('.page');
Dev.setRandomBgColor('.feature');
Dev.setRandomBgColor('.usage');

var Log = {};
Log.show = function (data) {
    var div = document.getElementById('log');
    if (!div) {
        div = document.createElement('div');
        div.id = 'log';
        div.style.position = 'fixed';
        div.style.zIndex = 9999;
        div.style.top = 0;
        div.style.right = 0;
        document.body.appendChild(div);
    }
    div.style.backgroundColor = Dev.getRandomBgColor();
    div.innerHTML = data;
};




