let util = {};
util.title = function (title) {
    title = title || 'DSP后台';
    window.document.title = title;
};
/*
设置localStorage
*/
util.setItem = (key, val) => {
    if (window.localStorage) {
        window.localStorage.setItem("fa_" + key, val);
    }
};

/*
获取localStorage
*/
util.getItem = (key) => {
    if (window.localStorage) {
        return window.localStorage.getItem("fa_" + key);
    } else {
        return false;
    }
};

/*
删除localStorage
*/
util.removeItem = (key) => {
    if (window.localStorage) {
        window.localStorage.removeItem("fa_" + key);
    }
};

//过滤掉对象参数值为""、null、undefined
util.dealObjectValue = (obj) => {
    var param = {};
    for (var k in obj) {
        if (obj[k] != "") {
            param[k] = obj[k]
        };
    }
    return param;
};

// 清除无权限菜单
util.filterNemu = (arr, nemu) => {
    arr.forEach((item, i) => {
        //是否存在菜单名
        var activit = false;
        nemu.forEach(v => {
            if (item.name == v) {
                activit = true;
            }
        })
        // 清除不存在菜单
        if (!activit) {
            arr.splice(i, 1);
        }
        // 递归检测
        if (item.children) {
            util.filterNemu(item.children, nemu);
        }
    })
}

export default util;