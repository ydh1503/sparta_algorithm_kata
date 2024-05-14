function solution(n, m, section) {
    var answer = 1;
    let finish = section[0]+m-1;
    let i=0;

    while(i<section.length){
        if(section[i] > finish){
            answer++;
            finish = section[i]+m-1;
        }
        i++;
    }
    
    return answer;
}