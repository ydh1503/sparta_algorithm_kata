function solution(s) {
    var answer = 0;
    
    for(let i=0; i<s.length; i++){
        const rotate = moveLeft(s,i);
        
        if(isRight(rotate))
            answer++;
    }
    
    return answer;
}

function isRight(s){
    const parenthesis = {"(":')', "[":']', "{":'}'};
    const stack = [];
    
    for(let i=0; i<s.length; i++){
        if(Object.keys(parenthesis).includes(s[i])){
            stack.push(s[i]);
        } else {
            if(!stack) 
                return false;
            
            if(parenthesis[stack.pop()] !== s[i]) 
                return false;
        }
    }
    
    if(stack.length)
        return false;
    
    return true;
}

function moveLeft(s,n){
    const result = s.split('');
    
    for(let i=0; i<n; i++){
        const tmp = result.shift();
        result.push(tmp);
    }
    
    return result.join('');
}