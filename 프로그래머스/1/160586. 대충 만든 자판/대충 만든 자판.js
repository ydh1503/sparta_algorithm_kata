function solution(keymap, targets) {
    var answer = [];
    //let countKey = [];
    
    for(const target of targets){
        let sumCount = 0;
        for(let i=0; i<target.length; i++){
            let minCount = -1;
            for(const key of keymap){
                const count = key.indexOf(target[i]);
                if(count !== -1){
                    if(minCount === -1) 
                        minCount = count + 1;
                    else
                        minCount = minCount < count+1 ? minCount : count+1;
                }
                // countKey.push(count);
                // console.log(countKey);
                // console.log('minCount:',minCount);
            }
            if(minCount === -1){
                sumCount = -1;
                break;
            } else {
                sumCount += minCount;
            }
        }
        answer.push(sumCount);
    }
    
    return answer;
}