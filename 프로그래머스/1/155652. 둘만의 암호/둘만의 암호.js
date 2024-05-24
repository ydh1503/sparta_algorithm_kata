function solution(s, skip, index) {
    var answer = '';

    for(let i=0; i<s.length; i++){
        let j=0;
        let tmp = s.charCodeAt(i);
        
        while(j<index){
            tmp++;
            if(tmp > 'z'.charCodeAt(0)){
                tmp -= 26;
            }
            if(!skip.includes(String.fromCharCode(tmp))){
                j++;
            } 
        }   
        answer += String.fromCharCode(tmp);
    }
    
    return answer;
}