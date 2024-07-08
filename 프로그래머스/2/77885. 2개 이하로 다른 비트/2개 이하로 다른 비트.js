function solution(numbers) {
    var answer = [];
    
    for(const num of numbers){
        let bit = num.toString(2);
        const index = bit.lastIndexOf('0');
        if(index === -1){
            //bit[0] = '0';
            bit = bit.slice(1);
            bit = '10'.concat(bit);
        } else {
            // bit[index] = '1';
            bit = bit.slice(0,index) + '1' + bit.slice(index+1);
            if(index < bit.length-1){
                bit = bit.slice(0,index+1) + '0' + bit.slice(index+2);
            }
        }
        const minNum = parseInt(bit,2);
        answer.push(minNum);
    }
    
    return answer;
}