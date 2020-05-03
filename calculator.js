const calculator = function (){
    function _joinArray(rest){
        return rest.reduce((res,curr)=>res.concat(curr),[]);
    };
    function sum(...rest){
        const arr = _joinArray(rest);
        return arr.reduce((prev,next)=>{
            return prev+=next;
        },0);
    };
    function subtract(...rest){
        const arr = _joinArray(rest);
        return arr.reduce((res,next)=>{
            return res-=next;
        });
    };
    function multiply(...rest){
        const arr = _joinArray(rest);
        return arr.reduce((res,next)=>{
            return res*=next;
        },1);
    };
    function divide(...rest){
        const arr = _joinArray(rest);
        return arr.reduce((res,next)=>{
            return res/=next;
        },1);
    }
    return {
        sum,
        subtract,
        multiply,
        divide
    }
}();
module.exports = calculator;
