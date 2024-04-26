function solution(n) {
    var answer = [];
    
    answer = (n+'').split('').reverse();
    for(let i=0; i<answer.length; i++)
        answer[i] = parseInt(answer[i]);

    return answer;
}