function solution(s) {
    var answer = [];
    let binary = s;
    let count = 0;
    let deletedNum = 0;
    
    while(binary.length > 1){
        const tmp = binary.length;
        binary = binary.replaceAll('0','');
        deletedNum += tmp - binary.length;
        count++;
        binary = binary.length.toString(2);
    }
    answer.push(count, deletedNum);
    
    return answer;
}