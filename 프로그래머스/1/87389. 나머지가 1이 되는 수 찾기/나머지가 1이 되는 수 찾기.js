function solution(n) {
    var answer = 0;
    
    if(n < 3 || n > 1000000)
        return -1;
    for(let i=2; i<n; i++){
        if(n%i === 1){
            answer = i;
            break;
        }
    }
    return answer;
}