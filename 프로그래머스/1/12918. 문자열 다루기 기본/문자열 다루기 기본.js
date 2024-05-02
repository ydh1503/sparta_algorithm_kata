function solution(s) {
    var answer = true;
    
    if(!(s.length === 4 || s.length === 6))
        answer = false;
    else{
        for(let i=0; i<s.length; i++)
           if(!Number.isInteger(+s[i])){
                answer = false;
                break;
            }
    }
    console.log(typeof(+'a'));
    console.log(Number.isInteger(+'a'));
    return answer;
}