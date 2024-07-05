function solution(x, y, n) {
    var answer = 0;
    const visit = {};
    const queue = [{x,count:answer}];
    let cur, index = 0;
    const MAX_QUEUE_SIZE = 128;
    
    do{
        // cur = queue.shift();
        cur = queue[index++];
        
        if(index > MAX_QUEUE_SIZE){
            queue.splice(0,index);
            index = 0;
        }
        
        if(cur.x === y){
            answer = cur.count;
            break;
        }
        
        if(visit[cur.x] || cur.x > y)
            continue;
        
        queue.push({x:cur.x+n,count:cur.count+1});
        queue.push({x:cur.x*2,count:cur.count+1});
        queue.push({x:cur.x*3,count:cur.count+1});
        visit[cur.x] = true;
    // }while(queue.length);
    }while(index<queue.length);
    
    // if(!queue.length && cur.x !==y)
    if(index === queue.length && cur.x !==y)
        answer = -1;

    return answer;

//     const cal = function (x,y,n){
//         if(x > y)
//             return -1;
//         else if(x===y)
//             return 0;

//         let s;
        
//         if(visit[x])
//             s = visit[x];
//         else{
//             s = [cal(x*3,y,n),cal(x*2,y,n),cal(x+n,y,n)];
//             visit[x] = s;
//         }
//         const min = s.filter((e)=>e !== -1);

//         if(!min.length)
//             return -1;

//         return  Math.min(...min) + 1;
//     };
    
    // return cal(x,y,n);
}