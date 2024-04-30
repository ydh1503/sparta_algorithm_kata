function solution(a, b) {
    var answer = 0;
    
    if(a===b)
        answer = a;
    else if(a<b)
        answer = sum(a,b);
    else if(a>b)
        answer = sum(b,a);
    
    return answer;
}

function sum(min,max){
    let result = 0;
    for(let i=min; i<=max; i++)
        result += i;
    return result;
}