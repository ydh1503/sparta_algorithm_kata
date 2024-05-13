function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a,b)=>a-b);
    while(score.length >= m){
        const box = score.splice(-m);
        answer += box[0]*m;
    }
    
    return answer;
}