function solution(phone_number) {
    var answer = '';
    const length = phone_number.length;
    
    for(let i=0; i<length-4; i++)
        answer += '*';
    
    answer += phone_number.substring(length-4);
    
    return answer;
}