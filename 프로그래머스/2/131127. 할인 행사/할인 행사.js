function solution(want, number, discount) {
    var answer = 0;
    const discountItems = [];
    
    for(let i = 0; i<discount.length-10+1; i++){
        if(!discountItems[i]){
            discountItems[i] = {};
        }
        for(let j=0; j<10; j++){
            if(!discountItems[i][discount[i+j]]){
                discountItems[i][discount[i+j]] = 1;
            } else discountItems[i][discount[i+j]]++;
        }
    }
    
    for(const discountItem of discountItems){
        let check = true;
        for(let i=0; i<want.length; i++){
            if(discountItem[want[i]] !== number[i]){
                check = false;
                break;
            }
        }
        if(check) answer++;
    }

    
    return answer;
}