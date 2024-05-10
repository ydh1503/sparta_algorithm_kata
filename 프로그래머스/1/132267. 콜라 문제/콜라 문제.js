function solution(a, b, n) {
    var answer = 0;
    
    while(n >= a){
        const tmp = Math.floor(n/a)*b;
        answer += tmp;
        n = tmp + n%a
    }
    
    return answer;
}