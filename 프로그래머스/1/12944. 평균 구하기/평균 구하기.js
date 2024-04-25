function solution(arr) {
    var answer = 0;
    answer = arr.reduce((n1,n2)=>n1+n2, 0) / arr.length;
    return answer;
}