function solution(x) {
    var answer = true;
    let sum = 0;
    let tmp = x;
    
    while(tmp > 0){
        sum += tmp%10;
        tmp = Math.floor(tmp/10);
    }
    if(x%sum)
        answer = false;
    
    return answer;
}