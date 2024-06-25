function solution(priorities, location) {
    var answer = 0;
    let process;
    let cnt = 0;
    let check = true;
    
    while(priorities.length>0){
        process = priorities.shift();
        if(Math.max(...priorities)>process){
            priorities.push(process);
            check = false;
        } else {
            answer++;
            check = true;
        }
        if(cnt === location){
            if(check)
                break;
            else{
                location = priorities.length-1;
                cnt = -1;
            }
        }
        cnt++;
    }
    
    
    return answer;
}