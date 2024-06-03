function solution(s) {
    var answer = '';
    let str = s.toLowerCase().split(' ');
    
    answer = str.reduce((acc,cur)=>{
        let tmp = cur;
        if(cur[0] >= 'a' && cur[0] <= 'z')
            tmp = cur.replace(cur[0],cur[0].toUpperCase());
        return acc+' '+tmp;
    },'');
    
    answer = answer.slice(1);
    
    return answer;
}