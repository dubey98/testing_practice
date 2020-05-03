const getLength = function(arr){
    return arr.length;
}

const getAverage = function(arr){
    return parseInt(arr.reduce((prev,num)=>{
        return prev+=num;
    },0)/arr.length);
}

const getMax = function(arr){
    let max = -Infinity;
    for(let num of arr){
        max = Math.max(max,num);
    }
    return max;
}

const getMin = function(arr){
    let min = Infinity;
    for(let num of arr){
        min = Math.min(min,num);
    }
    return min;
}

const fun = function(arr){
    return ({
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length,
    });
}
module.exports = fun;