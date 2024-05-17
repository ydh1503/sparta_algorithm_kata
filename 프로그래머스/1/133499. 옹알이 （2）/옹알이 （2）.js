function solution(babbling) {
    var answer = 0;
    const able = ["aya","ye","woo","ma"];
    
    for(let word of babbling){
        let check;
        let lastIndex = -1;
        
        do{
            check = false;
            for(let i=0; i<able.length; i++){
                if(lastIndex !== i && word.startsWith(able[i])){
                    word = word.substring(able[i].length);
                    lastIndex = i;
                    check = true;
                    break;
                }
            }
        }while(check);
        if(!word.length) answer++;
    }
    
    return answer;
}