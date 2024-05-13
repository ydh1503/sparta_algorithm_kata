function solution(cards1, cards2, goal) {
    var answer = '';
    let firstcard1 = cards1.shift();
    let firstcard2 = cards2.shift();
    let check = true;
    
    for(const word of goal){
        if(word === firstcard1){
            firstcard1 = cards1.shift();
        } else if(word === firstcard2){
            firstcard2 = cards2.shift();
        } else {
            check = false;
            break;
        }
    }
    
    answer = check ? 'Yes' : 'No';
    
    return answer;
}