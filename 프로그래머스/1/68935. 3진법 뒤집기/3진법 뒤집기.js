function solution(n) {
    var answer = 0;
    let tmp = [];
    
    tmp = sam(n);
    tmp.reverse();
    answer = samTosip(tmp);    
    
    return answer;
}

function sam(n){
    let result = [];
    
    while(n>0){
        result.push(n%3);
        n = Math.floor(n/3);
    }
    
    return result.reverse();
}

function samTosip(arr){
    let result = 0;
    
    result = arr.reduce((acc, cur, i) =>{
        return acc + (cur * 3**(arr.length-i-1));
    },result);
    
    return result;
}