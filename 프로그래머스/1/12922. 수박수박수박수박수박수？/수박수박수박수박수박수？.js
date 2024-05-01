function solution(n) {
    var answer = '';
    
    for(let i = 1; i<n+1; i++){
        answer += i%2 ? '수' : '박';
    }
    
    return answer;
}