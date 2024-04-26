function solution(n) {
    var answer = [];
    
    answer = (n+'').split('').reverse().map(num => parseInt(num));

    return answer;
}