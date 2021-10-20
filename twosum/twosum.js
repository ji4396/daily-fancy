
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

var nums2 = [2,1,3,4,6,15], target2 = 10;


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // 设立一个存储空间去存储
    map = new Map()
    for(let i = 0; i < nums.length; i++) {
        //精准获取目标元素
        x = target - nums[i]
        //含有目标元素
        if(map.has(x)) {
            return [map.get(x),i]
        }
        map.set(nums[i],i)
    }
};
 var twoSum2 = function(nums, target) {
    // 设立一个存储空间去存储
    map = {}
    for(let i = 0; i < nums.length; i++) {
        //精准获取目标元素
        x = target - nums[i]
        //含有目标元素
        if(map.hasOwnProperty(x)) {
            return [map[x],i]
        }
        map[nums[i]] = i
    }
};


// var nums2 = [2,71,3,11,6,15], target2 = 9;



console.log(twoSum2(nums2,target2));

