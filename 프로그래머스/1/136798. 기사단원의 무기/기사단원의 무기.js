function solution(number, limit, power) {
    var answer = 0;
    
    for(let i=1; i<number+1; i++){
        const weaponPower = countDivisor(i);
        answer += (weaponPower > limit) ? power : weaponPower;
    }
    
    return answer;
}

function countDivisor(n){
    let count = 0;
    
    for(let i=1; i<Math.sqrt(n); i++){
        if(!(n%i)) count++;
    }
    count *= 2;
    
    if(Number.isInteger(Math.sqrt(n))) count++;
    
    return count;
}