(function () {
    Date.prototype.format = function (format) {
        if (!format) {
            format = "YYYY-MM-DD hh:mm:ss";
        }
        var date = {
            "Y+": this.getFullYear(),
            "M+": this.getMonth() + 1,
            "D+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds()
        };
        if (new RegExp("(" + "Y+" + ")").test(format)) {
            format = format.replace(RegExp.$1, ("" + date["Y+"]).substr(4 - RegExp.$1.length));
        }
        for (var key in date) {
            if (new RegExp("(" + key + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[key] : ("00" + date[key]).substr(("" + date[key]).length));
            }
        }
        return format;
    };
})();
