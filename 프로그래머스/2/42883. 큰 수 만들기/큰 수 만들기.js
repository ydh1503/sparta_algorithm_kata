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

// function solution(number, k) {
//     var answer = '';
//     let str = number;
    
//     for (let i = number.length - k; i > 0; i--) {
//         const scope = str.length - i + 1;
//         let maxNum = '0';
//         let maxIndex = 0;
        
//         for (let j = 0; j < scope; j++) {
//             if (str[j] > maxNum) {
//                 maxNum = str[j];
//                 maxIndex = j;
//             }
//         }
        
//         str = str.slice(maxIndex + 1);
//         answer += maxNum;
//     }
    
//     return answer;
// }

function solution(number, k) {
    let stack = [];
    let count = 0;

    for (let i = 0; i < number.length; i++) {
        const current = number[i];

        while (count < k && stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            count++;
        }

        stack.push(current);
    }

    // 남은 k만큼 뒤에서부터 제거
    while (count < k) {
        stack.pop();
        count++;
    }

    // 필요한 길이만큼만 반환
    return stack.slice(0, number.length - k).join('');
}
