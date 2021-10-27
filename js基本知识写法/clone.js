
var obj = {
    name:'ji',
    hobby:{
        game:'1',
        run:'1',
        eat:{
            rice:'米饭',
            vegetable:'蔬菜'
        }
    }
}

// var obj2 = obj  
// 直接赋值的形式，修改obj2的形式，obj也会跟着改变
// var obj2 ={...obj}
// 通过 扩展操作符的写法  只能实现第一层的深克隆， 二层三层的话不能实现深克隆的效果
// obj2.name='li'
// obj2.hobby.game='6'

// console.log(obj,'obj');
// console.log(obj2,'obj2');


  function deepObjectClone(obj){
    let obj2  = Array.isArray(obj)?[]:{}
    if(Object.prototype.toString.call(obj)==='[object Object]'||Object.prototype.toString.call(obj)==='[object Array]'){
        for(let i in obj){
            if(Object.prototype.toString.call(obj[i])==='[object Object]'||Object.prototype.toString.call(obj[i])==='[object Array]'){
                obj2[i]={...deepObjectClone(obj[i])}
            }else{
                obj2[i] = obj[i]
            }
        }
    }
    return obj2

  }

//   var a = deepObjectClone(obj)
//   a.name ='fafa'
//   a.hobby.game ='9999'
//   a.hobby.eat.rice ='面条'
//   console.log(obj,'obj');
//   console.log(a,'a');

//  var arr =[1,{a:1,b:{c:2}},3];

//  var arr2 = deepObjectClone(arr)
// arr2[1].a=5
// arr2[1].b.c =6
// console.log(arr,'arr');
// console.log(arr2,'arr2');

function deepClone222(obj){
    　　let objClone =  Array.isArray(obj) ? [] : {};
    　　if (obj && typeof obj === 'object') {
    　　　　for(let key in obj){
    　　　　　　if (obj[key] && typeof obj[key] === 'object'){
    　　　　　　　　objClone[key] = deepClone(obj[key]);
    　　　　　　}else{
    　　　　　　　　objClone[key] = obj[key]
    　　　　　　}
    　　　　}
    　　}
    　　return objClone;
}

function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{}
    if(obj&&typeof obj==='object'){
        for(let key in obj){
            if(obj[key]&&typeof obj[key]==='object'){
                objClone[key] = deepClone(obj[key])
            }else{
                objClone[key] = obj[key]
            }
        }
    }
    return objClone
}
// var obj = {
//     name:'ji',
//     hobby:{
//         game:'1',
//         run:'1',
//         eat:{
//             rice:'米饭',
//             vegetable:'蔬菜'
//         }
//     }
// }
var a = deepClone(obj)
a.name='li'
a.hobby.game='2'
a.hobby.eat.vegetable='4'
console.log(a,'a');
console.log(obj,'obj');
  


