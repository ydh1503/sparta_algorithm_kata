function solution(s) {
    var answer = [];
    const check = new Map();
    
    for(let i=0; i<s.length; i++){
        if(check.has(s[i]))
            answer.push(i-check.get(s[i]));
        else answer.push(-1);
        
        check.set(s[i],i);
    }
    return answer;
}