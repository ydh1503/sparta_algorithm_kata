function solution(queue1, queue2) {
    var answer = 0;
    let sum1, sum2;
    // const limit = 2**(2*(queue1.length-1));
    const limit = queue1.length*3;
    
    sum1 = queue1.reduce((acc,cur)=>acc+cur);
    sum2 = queue2.reduce((acc,cur)=>acc+cur);
    
    const avg = (sum1+sum2)/2;
    
    let q1Start = 0, q2Start = 0;
    
    while(sum1 !== avg && answer < limit+1){
        if(sum1>sum2){
            // const tmp = move(queue1,queue2);
            const tmp = queue1[q1Start++];
            sum2 += tmp;
            sum1 -= tmp;
            queue2.push(tmp);
        } else {
            // const tmp = move(queue2,queue1);
            const tmp = queue2[q2Start++];
            sum1 += tmp;
            sum2 -= tmp;
            queue1.push(tmp);
        }
        answer++;
    }
    if(answer === limit+1)
        answer = -1;
    
    return answer; 
}

// function move(q1, q2){
//     const tmp = q1.shift();
//     q2.push(tmp);
    
//     return tmp;
// }

