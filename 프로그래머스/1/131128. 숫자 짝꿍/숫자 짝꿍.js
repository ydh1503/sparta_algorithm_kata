function solution(X, Y) {
    var answer = '';
    let same = [];
    //const x = X.split('');
    //const y = Y.split('');
    const x = new Array(10);
    const y = new Array(10);
    x.fill(0);
    y.fill(0);
    
//     for(const n of X){
//         const i = Y.indexOf(n);
        
//         if(i !== -1){
//             same.push(n);
//             //y.splice(i,1);
//             Y = Y.substring(0,i)+Y.substring(i+1);
//         }
//     }
    
    for(const n of X){
        x[parseInt(n)]++;
    }
    for(const n of Y){
        y[parseInt(n)]++;
    }
    for(let i=0; i<=9; i++){
        const count = x[i] < y[i] ? x[i] : y[i];
        for(let j=0; j<count; j++)
            same.push(i);
    }
    
    if(!same.length)
        answer = '-1';
    else if(!same.some(n=>n!==0))
        answer = '0';
    else{
        answer = same.sort((a,b)=>b-a).join('');
    }
    
    return answer;
}