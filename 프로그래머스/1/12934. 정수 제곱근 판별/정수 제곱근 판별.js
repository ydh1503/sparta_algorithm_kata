function solution(n) {
    var answer = 0;
    
    if(isSquare(n))
        answer = (Math.sqrt(n)+1)**2;
    else
        answer = -1;
    
    return answer;
}

function isSquare(n){
    return Number.isInteger(Math.sqrt(n));
}