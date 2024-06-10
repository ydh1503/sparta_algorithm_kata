function solution(n,a,b)
{
    var answer = 0;

    while(true){
        answer++;
        
        for(let i=2; i<=n; i+=2){
            if(a === i || a === i-1) a = i/2;
            if(b === i || b === i-1) b = i/2;
        }
        
        if(a===b) break;
    }

    return answer;
}