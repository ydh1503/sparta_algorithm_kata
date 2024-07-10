function solution(numbers) {
    var answer = '';
    
    numbers = numbers.map((e)=>e.toString());
    numbers.sort((a,b)=>{
        if(a.length > b.length) {
            return compare(b,a);
        } else 
            return compare(a,b) * -1;
    });
    
    answer = numbers.join('');
    if(answer.split('').every(e=>e==='0'))
        answer = '0';
    
    return answer;
}

function compare(short, long) {
    for(let i=0; i<long.length; i++){
        const shortIndex = i < short.length ? i : 0;
        if(short[shortIndex]>long[i])
            return 1;
        else if(short[shortIndex]<long[i])
            return -1;
    }
    for(let i=1; i<short.length; i++){
        if(short[i] > short[0])
            return 1;
        else if(short[i] < short[0])
            return -1;
    }
    return 0;
}