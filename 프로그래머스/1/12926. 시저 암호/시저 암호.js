function solution(s, n) {
    var answer = '';
    
    for(let i=0; i<s.length; i++){
        if(s[i] === ' '){
            answer = answer.concat(' ');
        } else {
            let tmp = s.charCodeAt(i)+n;
            
            if(s[i] <= 'z' && tmp > 'z'.charCodeAt(0)){
                tmp = tmp - 26;
            }else if(s[i] <= 'Z' && tmp > 'Z'.charCodeAt(0)){
                tmp = tmp - 26;
            }
            
            answer = answer.concat(String.fromCharCode(tmp));
        }
    }

    return answer;
}