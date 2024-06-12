function solution(k, tangerine) {
    var answer = 0;
    const count = [];
    
    for(const e of tangerine){
        if(!count[e]) count[e] = 1;
        else count[e]++;
    }

    count.sort((a,b)=>b-a);
    
    let acc = 0;
    for(const n of count){
        answer++;
        acc += n;
        if(acc >= k) break;
    }
    
    return answer;
}