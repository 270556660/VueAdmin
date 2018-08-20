let util = {};
util.title = function (title) {
    title = title || '贪玩DSP投放后台';
    window.document.title = title;
};
/*
设置localStorage
*/
util.setItem = (key, val) => {
    if (window.localStorage) {
        window.localStorage.setItem("tw_" + key, val);
    }
};

/*
获取localStorage
*/
util.getItem = (key) => {
    if (window.localStorage) {
        return window.localStorage.getItem("tw_" + key);
    } else {
        return false;
    }
};

/*
删除localStorage
*/
util.removeItem = (key) => {
    if (window.localStorage) {
        window.localStorage.removeItem("tw_" + key);
    }
};

//过滤掉对象参数值为""、null、undefined
util.dealObjectValue=(obj) =>{
    var param={};
    for(var k in obj) {
        if(obj[k] != ""){
            param[k]=obj[k]
        };
    }
    return param;
};

export default util;