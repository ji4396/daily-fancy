// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
console.log(1);


function fn(arr,target){
    let sum = new Map(),obj2={};
    for(let i =0;i<arr.length;i++){
        // if(sum.has(target-arr[i])){
        //     return [sum.get(target-arr[i]),i]
        // }else{
        //     sum.set(arr[i],i)
        // }
        if(obj2.hasOwnProperty(target-arr[i])){
            console.log(obj2,'obj2');
            return [obj2[target-arr[i]],i]
        }else{
            obj2[arr[i]]=i
        }
    }
}

console.log(fn([2,7,11,15],9));