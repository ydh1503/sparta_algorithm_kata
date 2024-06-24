function solution(progresses, speeds) {
    var answer = [];
    const complete = [];
    const END = 100;
    
    for(let i=0; i<progresses.length; i++){
        complete[i] = Math.ceil((END - progresses[i]) / speeds[i]);
    }

    let distribution = complete[0];
    let count = 1;
    
    for(let i=1; i<complete.length; i++){
        if(distribution < complete[i]){
            answer.push(count);
            distribution = complete[i];
            count = 1;
        } else count++;
    }
    answer.push(count);
    
    return answer;
}