function solution(numbers) {
    var answer = -1;
    
    if(numbers.length < 1 && numbers.length > 9)
        return answer;
    
    let sum = 0;
    for (let i = 1; i<10; i++){
        if(!numbers.includes(i))
            sum += i;
    }
    answer = sum;
    
    return answer;
}