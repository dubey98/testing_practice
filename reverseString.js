const reverseString = function(str){
    const arr = str.split('');
    const res =[];
    for(let i=arr.length-1;i>=0;i--){
        res.push(arr[i]);
    }
    return res.join('');
}

module.exports = reverseString;