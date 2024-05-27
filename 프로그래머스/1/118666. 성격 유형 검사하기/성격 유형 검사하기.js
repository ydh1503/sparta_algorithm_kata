function solution(survey, choices) {
    var answer = '';
    const point = [];
    const personal = ['R','T','C','F','J','M','A','N'];
    
    for(const p of personal){
        point[p] = 0;
    }
    
    for(let i=0; i<choices.length; i++){
        let score = choices[i]-4;
        let category = score<0 ? survey[i][0] : survey[i][1];
        score = Math.abs(score);
        point[category] += score;
    }
    
    for(let i=0; i<personal.length; i+=2){
        let first, last;
        if(personal[i]<personal[i+1]){
            first = personal[i];
            last = personal[i+1];
        } else{
            first = personal[i+1];
            last = personal[i];
        }
        answer += point[first] < point[last] ? last : first;
    }

    return answer;
}