const capitalize = function(str){
    const arr = str.split(' ');
    const mod = arr.map((s)=>{
        if(s.length===0)return s;
        return  s[0].toUpperCase() + s.slice(1);
    })
    return mod.join(' ');
}

module.exports = capitalize;