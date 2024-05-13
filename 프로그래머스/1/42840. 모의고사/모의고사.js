function solution(answers) {
    var answer = [];
    let p1 = [1,2,3,4,5];
    let p2 = [1,3,4,5];
    let p3 = [3,1,2,4,5];
    let count = [0,0,0];
    
    for(let i=0; i<answers.length; i++){
        const a1 = p1[i%5];
        const a2 = i%2 ? p2[Math.floor(i/2)%4] : 2;
        const a3 = p3[Math.floor(i/2)%5];
        
        if(answers[i] === a1) count[0]++;
        if(answers[i] === a2) count[1]++;
        if(answers[i] === a3) count[2]++;
    }
    
    const max = Math.max(...count);
    for(let i = 0; i<count.length; i++){
        if(count[i] === max)
            answer.push(i+1);
        console.log(count[i]);
    }
    
    return answer;
}