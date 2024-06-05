function solution(n) {
    var answer = 0;
    const f = new Map();
    
    f.set(0,0);
    f.set(1,1);
    
    function fibonachi(n){
        if(f.get(n) !== undefined) return f.get(n);
        for(let i = 2; i<n+1; i++){
            f.set(i,(f.get(i-1)+f.get(i-2))%1234567);
        }
        
        return f.get(n);
    }
    
    answer = fibonachi(n);
    
    return answer;
}
