let str = "Каждый охотник желает знать, где сидит фазан."; 
let arr = str.split(' ');
let newArr = [];
arr.filter(element => {
    newArr.push(element[0]);
    return newArr;
})
console.log(newArr);