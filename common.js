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
    },
    /**
     * 排序(从大到小)
     */
    rank_big:function (array) {
        let num;
        for (var i = 0; i < array.length; i++) {
            for (var k=0; k < array.length-i; k++) {
                if (array[k] < array[k+1]) {
                    num = array[k+1];
                    array[k+1] = array[k];
                    array[k] = num;
                }
            }

        }
        console.log(array)
    },
    /**
     * 排序(从小到大)
     */
    rank_small:function () {
        let num;
        for (var i = 0; i < arguments.length; i++) {
            var flag;
            if (flag) flag = true;
            for (var k=0; k < arguments.length-i; k++) {
                if (arguments[k] > arguments[k+1]) {
                    num = arguments[k+1];
                    arguments[k+1] = arguments[k];
                    arguments[k] = num;
                }
                flag = false;
            }
            flag = true;
        }
        console.log(Array.from(arguments))
    }
}
// common.even(1,5,7,2,6,8,4,3,1);
// common.odd(3,5,8,4,6,9,11,25);
// common.rank_big([5,2,3,4,8,6]);
common.rank_small(2,5,4,6,8,3,4)