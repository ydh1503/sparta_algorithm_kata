function solution(numbers, target) {
    var answer = 0;
    
    const ableNums = cal(numbers);
    for(const num of ableNums){
        if(num === target)
            answer++;
    }
    
    return answer;
}

function cal(numbers){
    if(numbers.length === 1){
        return [numbers[0],-numbers[0]];
    }
    const n = numbers.slice(0,1);
    const ableNums = cal(numbers.slice(1));
    const newAbleNums = [];
    for(const num of ableNums){
        newAbleNums.push(+n+num);
        newAbleNums.push(-n+num);
    }
    return newAbleNums;
}