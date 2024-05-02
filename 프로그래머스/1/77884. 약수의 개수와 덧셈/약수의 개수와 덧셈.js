function solution(left, right) {
    var answer = 0;
    
    if(left < 1 || left > right || right > 1000)
        return -1;
    
    for(let i = left; i <=right; i++){
        answer += getNumOfFactor(i) % 2 ? -i : i;
    }
    
    return answer;
}

function getNumOfFactor(num){
    let result=0;
    
    for(let i = 1; i<Math.sqrt(num); i++){
        if(!(num % i))
            result++;
    }
    result *= 2;
    if(Number.isInteger(Math.sqrt(num)))
        result++;
    
    return result;
}