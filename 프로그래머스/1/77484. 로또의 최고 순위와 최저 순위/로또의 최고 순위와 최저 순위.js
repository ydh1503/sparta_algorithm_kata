function solution(lottos, win_nums) {
    var answer = [];
    let count = 0;
    let chance = 0;
    const rank = [6,5,4,3,2,1];
    
    for(n of lottos){
        if(n === 0) chance++;
        else if(win_nums.includes(n)) count++;
    }
    
    answer.push(rank[count+chance-1 < 0 ? 0 : count+chance-1]);
    answer.push(rank[count-1 < 0 ? 0: count-1]);
    
    return answer;
}