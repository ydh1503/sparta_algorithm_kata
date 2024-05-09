function solution(s) {
    var answer = s;
    const enNum = {'zero':0,'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9,};
    
    // for(let i=0; i<Object.keys(enNum).length; i++){
    //     answer = answer.replaceAll(Object.keys(enNum)[i],Object.values(enNum)[i]);
    // }
    
    for(const [key, value] of Object.entries(enNum)){
        answer = answer.replaceAll(key, value);
    }
    
    return +answer;
}