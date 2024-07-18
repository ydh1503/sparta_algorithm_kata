function solution(sequence, k) {
    var answer = [];
    const temp = [];
    let start = 0;
    let sum = 0;
    
    for(let i=0; i<sequence.length; i++){
        sum += sequence[i];
        while(sum>k && start<i){
            sum -= sequence[start++];
        }
        if(sum === k){
            temp.push([start,i]);
        }
    }
    temp.sort((a,b)=>a[1]-a[0] - (b[1]-b[0]));
    answer = temp[0];
    return answer;
}