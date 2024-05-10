function solution(a, b) {
    var answer = '';
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let day = b;
    
    for(let i=0; i<a-1; i++){
        day += month[i];
    }
    
    answer = week[(4+day) % 7];
    
    return answer;
}