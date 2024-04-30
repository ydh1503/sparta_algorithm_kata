function solution(arr, divisor) {
    var answer = [];
    
    answer = arr.filter(e=>!(e%divisor))
    
    answer.length ? answer.sort((a,b) => a-b) : answer = [-1];

    return answer;
}