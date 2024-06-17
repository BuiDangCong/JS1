// let arr = new Array(1, 2, 3, 4, 5, 6);
// // cách 1 dùng for i
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }
// // cách 2 dùng for of
// for (let a of arr) {
//   console.log(a);
// }
let arr1 = [1, 2, 3, 4, 5];
// let a = arr1.shift();
// console.log(a);
// console.log(arr1);
let arr2 = arr1.slice(1, 4);
let arr3 = arr1.slice();
console.log(arr2);
console.log(arr3);
console.log(arr1.includes(1000));
