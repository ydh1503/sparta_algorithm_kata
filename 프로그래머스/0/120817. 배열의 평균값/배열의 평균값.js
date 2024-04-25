function solution(numbers) {
    var answer = 0;
//     let sum = 0;
    
//     numbers.forEach(n => {
//         sum += n;
//     });
//     answer = sum / numbers.length;
    let sum = numbers.reduce((n1,n2)=>n1+n2, 0);
    
    answer = sum / numbers.length;
    
    return answer;
}