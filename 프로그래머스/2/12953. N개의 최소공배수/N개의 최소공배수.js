function solution(arr) {
    var answer = 0;
    
    while(true){
        answer += arr[0];
        
        let i;
        for(i=1; i<arr.length; i++){
            if(answer%arr[i]) break;
        }
        
        if(i===arr.length)
            break;
    }
    
    return answer;
}