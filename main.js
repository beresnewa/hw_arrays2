let str = "Каждый охотник желает знать, где сидит фазан."; 
let arr = str.split('');
let filterArr = arr.filter((element, index) => {
    return (index === 0 || arr[index-1] == ' ')
});
console.log(filterArr);