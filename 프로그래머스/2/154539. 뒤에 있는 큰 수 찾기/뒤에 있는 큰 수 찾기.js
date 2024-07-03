function solution(numbers) {
    var answer = [];
//     const check = new Array(numbers.length);
//     check.fill(1);
    
//     for(let i=0; i<numbers.length; i++){
//         for(let j=0; j<i; j++){
//             if(!check[j])
//                 continue;
//             if(numbers[i]>numbers[j]){
//                 check[j] = 0;
//                 answer[j] = numbers[i];
//             }
//         }
//     }
    
//     for(let i=0; i<check.length; i++){
//         if(check[i])
//             answer[i] = -1;
//     }
    
    const index = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=index.length-1; j>=0; j--){
            if(numbers[i]>numbers[index[j]]){
                answer[index[j]] = numbers[i];
                index.pop();
            } else break;
        }
        index.push(i);
    }
    
    for(let i=0; i<index.length; i++){
        answer[index[i]] = -1;
    }
    
    return answer;
}