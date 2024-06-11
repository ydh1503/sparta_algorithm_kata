function solution(n) {
    var answer = 0;
    const way = [0,1,2];
    
    function cal(n) {
        for(let i=3; i<n+1; i++){
            if(!way[i])
                way[i] = (way[i-2]+way[i-1])%1234567;
        }
        
        return way[n];
    }
    
    answer = cal(n);
    
    return answer;
}