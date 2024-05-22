function solution(s) {
    var answer = 0;
    
    // 문제 이해 실수
//     let x, xCount;
//     let last;
//     let count = 0;
//     let endX = true;
//     const tmp = [];
//     let tmpIndex = 0;
    
    // for(let i=0; i<s.length; i++){
    //     if(endX){
    //         if(!x){
    //             x = s[i];
    //             count = 1;
    //             endX = false;
    //         } else if(s[i] === last){
    //             count++;
    //         } else {
    //             last = s[i];
    //             count = 1;
    //         }
    //     } else {
    //         if(s[i] === x)
    //             count++;
    //         else{
    //             endX = true;
    //             xCount = count;
    //             last = s[i];
    //             count = 1;
    //         }
    //     }
    //     if(xCount === count){
    //         answer++;
    //         tmp.push(s.substring(tmpIndex,i+1));
    //         tmpIndex = i+1;
    //         x = null;
    //         xCount = 0;
    //     }
    // }
    // if(x){
    //     answer++;
    //     tmp.push(s.substring(tmpIndex));
    // }
    //console.log(tmp);
    
    let x, xCount = 0;
    let last, lastCount = 0;
    let tmp = [];
    let tmpIndex = 0;
    
    for(let i=0; i<s.length; i++){
        if(!x){
            x = s[i];
            xCount = 1;
        } else if(s[i] === x){
            xCount++;
        } else {
            lastCount++;
        }
        if(xCount === lastCount){
            answer++;
            x = null;
            lastCount = 0;
            tmp.push(s.substring(tmpIndex,i+1));
            tmpIndex = i+1;
        }
    }
    if(x){
        answer++;
        tmp.push(s.substring(tmpIndex));
    }
    console.log(tmp);
    return answer;
}