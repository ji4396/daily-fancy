
function Point() {

}
Point.prototype.toA = function () {
    console.log('toA');
}

console.log(Object.keys(Point.prototype), 'keys1');

console.log(Point === Point.prototype.constructor);

class Box {
    constructor() {
    }
    get aa(){
        return 112
    }
      c = 1
     static run() {
        return 1
    }
    _run(){
        return 2
    }
}
// console.log(Box.prototype, 'box-prototype');
// console.log(Object.keys(Box.prototype), 'keys2');
// console.log(a instanceof Box,'a instanceof box');
// console.log(new Box(),'new box(');

function Zhuang(target){
    target.name='装饰器'
}

@Zhuang
class Fox extends Box{
    constructor(){
        super()
        console.log(super.aa,'ccccc');
    }
    he(){
        console.log('22');
    }
}
// let b =new Fox()
// console.log(new Fox(),'fox');