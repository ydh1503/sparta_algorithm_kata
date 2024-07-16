// function solution(number, k) {
//     var answer = '';
//     let str = number;
    
//     for(let i = number.length - k; i > 0; i--) {
//         const scope = str.length - i + 1;
//         const tmp = str.slice(0, scope).split('').map(e=>+e);
//         const maxNum = Math.max(...tmp);
//         const maxIndex = tmp.indexOf(maxNum);
//         answer += str[maxIndex];
//         str = str.slice(maxIndex + 1);
//         if(str.length === i-1){
//             answer+=str;
//             break;
//         }
//     }
    
//     return answer;
// }

function solution(number, k) {
    var answer = '';
    const stack = [];
    let count = 0;
    
    for(let i=0; i<number.length; i++){
        while(stack.length && stack[stack.length-1] < number[i] && count<k){
            stack.pop();
            count++;
        }
        if(count === k){
            answer = stack.join('')+number.slice(i);
            break;
        }
        stack.push(number[i]);
    }
    if(count<k){
        stack.splice(-(k-count));
        answer = stack.join('');
    }
    return answer;
}
