
function reverseString (str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Hi,my dear friend!'));



function averageСost(arr) {
    return arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length;
}

console.log(averageСost([3, 6, 2,10]));




let user = ['name', 'Jhon', 'lastname:', 'Black', 'age', '23']
let objUser ={}
for (let i = 0; i < user.length; i+= 2){
    let keys = user [i];
    let data  = user [i+ 1];
    objUser[keys] = data;
}
console.log(objUser)




let array   = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", 'пкцйк', null, `uioo`];
let arr ={}
array.forEach(item => {
    let itemType = typeof item;
    if (!arr[itemType]) {
        arr[itemType] = [];
    }
    arr[itemType].push(item);
});
let sortedArrays = Object.values(arr).sort((a, b) => a.length - b.length);
console.log(sortedArrays);

