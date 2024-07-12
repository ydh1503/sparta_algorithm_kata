function solution(arr) {
    var answer = [0,0];
    const queue = [arr];
    const cnt = count(arr);
    if(cnt !== -1)
        answer[cnt]++;
    else{
    while(queue.length){
        const curArr = queue.shift();
        const newArrs = sliceArr(curArr);
        for(const arr of newArrs){
            const cnt = count(arr);
            
            if(cnt !== -1)
                answer[cnt]++;
            else{
                queue.push(arr);
            }
        }
    }
    }
    return answer;
}

function sliceArr(arr) {
    const slicedArrs = [];
    const n = arr.length/2;
    
    if(n<1)
        return null;
    
    for(let i=0; i<2; i++){
        for(let j=0; j<2; j++){
            const newArr = [];
            for(let k=n*i; k<n*(i+1); k++){
                newArr.push(arr[k].slice(n * j,n * (j+1)));
            }
            slicedArrs.push(newArr);
        }
    }
    
    return slicedArrs;
}

function count(arr) {
    if(arr.length === 1){
        return arr[0];
    }
    if(arr.every(innerArr=>innerArr.every(e=>e===arr[0][0])))
        return arr[0][0] === 0 ? 0 : 1;
    return -1; 
}