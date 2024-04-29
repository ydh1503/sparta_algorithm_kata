function solution(n) {
    var answer = 0;
    let tmp = (n+'').split('').sort((a,b)=>b-a);
    answer = parseFloat(tmp.join(''));
    
    return answer;
}