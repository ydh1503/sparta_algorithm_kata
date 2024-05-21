function solution(n, lost, reserve) {
    var answer = 0;
    
//     lost.sort((a,b)=>a-b);
//     reserve.sort((a,b)=>a-b);
    
//     for(let i=0; i<lost.length; i++){
//         // const tmp = reserve.indexOf(lost[i]);
//         // if(tmp !== -1) {reserve.splice(tmp,1); lost.splice(i,1); i--;}
//         for(let j=0; j<reserve.length; j++){
//             if(lost[i] === reserve[j]){
//                 lost.splice(i,1);
//                 reserve.splice(j,1);
//                 i--;
//                 break;
//             }
//         }
//     }
    
//     for(const i of lost){
//         for(let j = 0; j<reserve.length; j++){
//             if(reserve[j] === i-1 || reserve[j] === i+1){
//                 answer++;
//                 reserve.splice(j,1);
//                 break;
//             }
//         }
//     }
    
//     answer = n - lost.length + answer;
    
    const suit = new Array(n);
    suit.fill(1);
    for(const i of lost)
        suit[i-1]--;
    for(const i of reserve)
        suit[i-1]++;
    
    for(let i=0; i<n; i++){
        if(!suit[i]){
            if(i && suit[i-1] === 2){
                suit[i-1] = 1;
                suit[i] = 1;
                answer++;
            } else if(i !== n-1 && suit[i+1] === 2){
                suit[i+1] = 1;
                suit[i] = 1;
                answer++;
            }
        } else if(suit[i] >= 1) answer++;
    }
    
    return answer;
}