function solution(clothes) {
    var answer = 0;
    const c = {};
    
    for(const [cloth, type] of clothes){
        c[type] = c[type] ? c[type]+1 : 1;
    }
    
    for(let i=0; i<Object.values(c).length; i++){
        let num = Object.values(c)[i];
        for(let j=i+1; j<Object.values(c).length; j++){
            num *= Object.values(c)[j]+1;
        }
        answer += num;
    }
    
    return answer;
}