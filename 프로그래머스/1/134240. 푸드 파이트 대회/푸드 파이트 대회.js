function solution(food) {
    var answer = '';
    const tmp = [];
    
    for(let i=1; i<food.length; i++){
        for(let j=0; j<Math.floor(food[i]/2); j++){
            tmp.push(i); 
        }
    }
    answer = tmp.join('')+'0'+tmp.reverse().join('');
    
    return answer;
}