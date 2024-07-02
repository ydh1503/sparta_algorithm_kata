function solution(word) {
    var answer = 0;
    const alpha = ['A','E','I','O','U'];
    const lengthSize = [];
    let num = 0;
    
    for(let i=0; i<alpha.length; i++){
        num += alpha.length ** i
        lengthSize[i] = num;
    }
    
    for(let i=0; i<word.length; i++){
        answer += alpha.indexOf(word[i]) * lengthSize[alpha.length - i - 1] + 1;
    }
    
    return answer;
}