function solution(s) {
    var answer = '';
    
    // 문자열 길이 홀수
    if(s.length % 2){
        const midIndex = Math.floor(s.length/2);
        answer = s[midIndex];
    }
    // 문자열 길이 짝수
    else{
        const midIndex = s.length/2;
        answer = s[midIndex-1]+s[midIndex];
    }
    
    return answer;
}