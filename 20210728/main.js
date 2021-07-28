// let i = 10;
// while(i < 10){
//     //действие
//     console.log(i);
//     //действие в конце итерации
//     i += 1;
// }

// for(let i = 0; i < 10; i += 1){
//     console.log(`second ${ i }`);
// }

// for(; i-- ;){
//     console.log(`second ${ i }`);
// }
// console.log(i);

class Magic{
    count = 0;
    toString(){
        this.count += 1;
        return this.count;
    }
};

const a = new Magic();

// if (a == 1 && a == 2 && a == 3) {
//     console.log('Works')
// }

// console.log(a + 100);

// console.log(a);



// const $ = 'dollar';
// const _ = 'underscore';
// console.log($, _);

Array.prototype.so2Map = function(func){
    // console.log(this);
    const len = this.length;
    const result = [];
    for(let i = 0; i < len; i += 1){
        const el = func(this[i], i, this);
        result.push(el);
    }

    return result;
}

const arr = (new Array(100)).so2Map(() => ~~(Math.random() * 100 - 50));

// console.log(arr);

const my = arr.so2Map((el) => el * 2);
// console.log(my);
console.log(arr);
for(let el of arr){
    if(el > 0){
        continue;
    }
    console.log(el);
}

const o = {
    name : 'Lich King',
    age : 30,
    race : 'human undead',
    nationality : 'Great Britain'
};

// for(let key in o){
    // console.log(key, o[key]);
// }

// for(const [k, val] of Object.entries(o)){
//     console.log(k, val);
// }
