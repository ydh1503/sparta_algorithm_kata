function solution(citations) {
    var answer = 0;
    let count = 0;
    
    citations.sort((a,b)=>b-a);
    
    for(let i=0; i<citations.length; i++){
        if(count >= citations[i])
            break;
        if(answer !== citations[i]){
            answer = citations[i];
            count = i+1;
        } else count++;
    }
    answer = count;
    
    return answer;
}