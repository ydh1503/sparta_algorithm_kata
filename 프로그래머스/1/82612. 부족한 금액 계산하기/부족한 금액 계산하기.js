function solution(price, money, count) {
    var answer = -1;
    let total = 0;

    // for(let i = 1; i < count+1; i++){
    //     total += price * i;
    // }
    total = price * count * (count + 1) / 2;
    
    answer = money < total ? total - money : 0;
    
    return answer;
}