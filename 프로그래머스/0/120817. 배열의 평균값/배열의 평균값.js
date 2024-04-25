function solution(numbers) {
    var answer = 0;
    let sum = 0;
    
    numbers.forEach(n => {
        sum += n;
    });
    answer = sum / numbers.length;
    return answer;
}