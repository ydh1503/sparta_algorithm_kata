function solution(s) {
    var answer = '';
    const str = s.split(' ');
    
    // str.sort((a,b)=>{
    //     return +a-(+b);
    // })
    // answer = str[0]+' '+str[str.length-1];
    console.log(Math.max(...str));
    console.log(Math.min(...str));
    
    answer = Math.min(...str)+' '+Math.max(...str);
    
    return answer;
}