function solution(n) {
    var answer = 0;
    let tmp = (n+'').split('').sort((a,b)=>b-a);
    answer = tmp.join('')*1;
    
    return answer;
}