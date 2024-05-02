function solution(s) {
    var answer = '';
    
    if(s.length < 1)
        return;
    
    answer = s.split('');
    //answer = answer.sort((a,b) => b.charCodeAt()-a.charCodeAt()).join('');
    answer = answer.sort((a,b) => a < b ? 1 : -1).join('');

    return answer;
}