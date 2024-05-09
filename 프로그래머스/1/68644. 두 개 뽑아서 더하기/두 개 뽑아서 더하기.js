function solution(numbers) {
    var answer = [];
    let tmp = [];
    
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            const sum = numbers[i]+numbers[j];
            tmp.push(sum);
            // if(!answer.includes(sum))
            //     answer.push(sum);
        }
    }
    answer = [...new Set(tmp)];
    answer.sort((a,b)=>a-b);
    
    return answer;
}