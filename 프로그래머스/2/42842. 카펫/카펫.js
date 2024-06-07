function solution(brown, yellow) {
    var answer = [];
    
    const y = ((2+brown/2)+Math.sqrt((2+brown/2)**2-4*(brown+yellow)))/2;
    const x = (brown+yellow)/y;
    
    answer = x < y ? [y,x] : [x,y];
    
    return answer;
}