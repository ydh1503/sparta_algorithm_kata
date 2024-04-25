function solution(angle) {
    var answer = 0;
    
    if(angle > 0 && angle <= 180){
        if(angle < 90)
            answer = 1;
        else if(angle === 90)
            answer = 2;
        else if(angle < 180)
            answer = 3;
        else
            answer = 4;
    }
    else
        answer = -1;    // angle 범위 밖
    return answer;
}