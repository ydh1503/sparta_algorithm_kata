function solution(n, left, right) {
    var answer = [];
//     const nnArr = [];
//     for(let i=0; i<n; i++){
//         nnArr[i] = new Array(n);
//     }
    
//     for(let i=0; i<nnArr.length; i++){
//         for(let j=0; j<i; j++){
//             nnArr[i][j] = i+1;
//             nnArr[j][i] = i+1;
//         }
//         nnArr[i][i] = i+1;
//     }
//     const nArr = nnArr.reduce((acc,cur)=>acc.concat(cur));

//     answer = nArr.slice(left,right+1);
    
    for(let k=left; k<right+1; k++){
        const i = Math.floor(k/n);
        const j = k%n;
        answer.push(Math.max(i,j)+1);
    }
    
    return answer;
}