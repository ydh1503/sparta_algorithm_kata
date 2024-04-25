function solution(n)
{
    var answer = 0;
    let numbers = [];
    
    while(n > 0){
        numbers.unshift(n%10);
        n = Math.floor(n/10);
    }
    
    answer = numbers.reduce((a,b)=>a+b,0);

    return answer;
}