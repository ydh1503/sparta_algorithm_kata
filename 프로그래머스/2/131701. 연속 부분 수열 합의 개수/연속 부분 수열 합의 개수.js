function solution(elements) {
    var answer = 0;
    const set = new Set();
    const likeCircle = elements.concat(elements);
    
    for(let i=1; i<elements.length+1; i++){
        for(let j=0; j<elements.length; j++){
            let sum = 0;
            for(let k=j; k<i+j; k++){
                sum += likeCircle[k];
            }
            set.add(sum);
        }
    }
    answer = set.size;
    return answer;
}