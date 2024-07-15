function solution(order) {
    var answer = 0;
    const subBelt = [];
    let i=0;
    let j=1;
    
    while(i<order.length){
        while(j<order[i]){
            subBelt.push(j++);
        }
        if(j === order[i]){
            i++;
            j++;
            answer++;
        } else if(subBelt.pop() === order[i]){
            i++;
            answer++;
        } else {
            break;
        }
        
    }
    
    return answer;
}