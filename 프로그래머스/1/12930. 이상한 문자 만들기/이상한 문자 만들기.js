function solution(s) {
    var answer = '';
    
    answer = s.split(' ').map(word => trans(word)).join(' ');
    
    return answer;
}

function trans(s){
    let result = [];
    
    for(let i = 0; i<s.length; i++){
        result[i] = i%2 ? s[i].toLowerCase() : s[i].toUpperCase();
    }

    return result.join('');
}