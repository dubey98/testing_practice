const encrypt = function (str,offset){
    offset = offset%26;
    const arr = (str.toLowerCase()).split("").map((c)=>{
        if(c.charCodeAt(0)-"a".charCodeAt(0)>=0 && c.charCodeAt(0)-"a".charCodeAt(0)<=25){
            let res = (c.charCodeAt(0)-"a".charCodeAt(0)+offset)%26;
            return String.fromCharCode(res+"a".charCodeAt(0));
        }else{
            return c;
        }
    });
    return arr.join('');
}
module.exports = encrypt;
