function solution(t, p) {
    var answer = 0;
//    let tmp = [];
    
//     for(let i=0; i<t.length-p.length+1; i++){
//         let temp = t.substring(i,i+p.length);
//         tmp.push(temp);
//     }

//     for(let i=0; i<tmp.length; i++){
//         if(+tmp[i] <= +p)
//             answer++;
//     }
    
    for(let i=0; i<t.length-p.length+1; i++){
        let temp = t.substring(i,i+p.length);
        if(+temp <= +p)
            answer++;
    }
    
    return answer;
}