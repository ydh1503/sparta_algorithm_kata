function solution(array, commands) {
    var answer = [];
    
    for(const [i,j,k] of commands){
        const tmp = array.slice(i-1,j);
        tmp.sort((a,b)=>a-b);
        answer.push(tmp[k-1]);
    }
    
    return answer;
}