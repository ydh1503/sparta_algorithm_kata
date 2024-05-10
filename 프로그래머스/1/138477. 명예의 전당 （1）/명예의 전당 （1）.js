function solution(k, score) {
    var answer = [];
    let rank = [];
    
    for(s of score){
        rank.push(s);
        rank.sort((a,b)=>b-a);
        
        if(rank.length <= k){
            answer.push(rank[rank.length-1]);
        } else {
            rank.pop();
            answer.push(rank[k-1]);
        }
    }
    
    
    return answer;
}