function solution(topping) {
    var answer = 0;
    // const p1 = new Set();
    // const p2 = new Set();
    
//     for(let i=0; i<topping.length; i++){
//         p1.clear();
//         p2.clear();
        
//         for(let j=0; j<=i; j++){
//             p1.add(topping[j]);
//         }
//        for(let j=i+1; j<topping.length; j++){
//             p2.add(topping[j]);
//         }
//         if(p1.size === p2.size)
//             answer++;
//     }
    
//     for(let i=0; i<topping.length; i++){
//         const p1 = topping.slice(0,i);
//         const p2 = topping.slice(i);
        
//         if(getTopping(p1) === getTopping(p2))
//             answer++;
//     }
    
    const p1 = new Set();
    const p2 = new Map();
    
    for(let i=0; i<topping.length; i++){
        p2.set(topping[i], p2.has(topping[i]) ? p2.get(topping[i])+1 : 1);
    }

    for(let i=0; i<topping.length; i++){
        p1.add(topping[i]);
        
        const tmp = p2.get(topping[i]);
        if(tmp === 1){
            p2.delete(topping[i]);
        } else{
            p2.set(topping[i],tmp-1);
        }
        
        if(p1.size === p2.size)
            answer++;
        
        if(p1.size > p2.size)
            break;
    }
    
    return answer;
}

// function getTopping(piece){
//     const topping = new Set();
    
//     for(const toppingType of piece){
//         topping.add(toppingType);
//     }
    
//     return topping.size;
// }