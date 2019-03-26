const common = {
    /**
     * 求偶数
     */
    even: function () {
        let num = [];
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i]%2===0) {
                num.push(arguments[i])
            }
        }
        console.log(num);
    },
    /**
     * 求奇数
     */
    odd: function () {
        let num = [];
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i]%2!==0) {
                num.push(arguments[i]);
            };
        }
        console.log(num);
    }
}
common.even(1,5,7,2,6,8,4,3,1);
common.odd(3,5,8,4,6,9,11,25);