function solution(s) {
    var answer = '';
    
    if(s.length < 1)
        return;
    
    answer = s.split('');
    answer = answer.sort((a,b) => b.charCodeAt()-a.charCodeAt()).join('');
    
    return answer;
}