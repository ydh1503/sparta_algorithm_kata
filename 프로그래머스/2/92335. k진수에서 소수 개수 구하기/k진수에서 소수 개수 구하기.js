function solution(n, k) {
    var answer = 0;
    const nkStr = n.toString(k);
    const nums = nkStr.split('0');
    let num;

    for(const num of nums){
        if(isPrime(+num))
            answer++;
    }
    
    // console.log(A());
    // console.log(A());
    // console.log(AA());
    // console.log(AA()());
    // console.log(AA()());
    // console.log(B());
    // console.log(B());
    
    return answer;
}
const isPrime = test();

function test(){
    const primes = [2];

    function check(n){
        if(n<2)
            return false;
        
        // if(primes[primes.length-1] >= n){
        //     if(primes.includes(n))
        //         return true;
        //     return false;
        // }
        if(primes.includes(n))
            return true;
        
        for(let i=0; i<primes.length; i++){
            if(!(n%primes[i]))
                return false;
        }
        for(let i=primes[primes.length-1]+1; i<=Math.sqrt(n); i++){
            // check(i);
            if(!(n%i))
                return false;
        }
        primes.push(n);
        return true;
    }
    return check;
}

// const A = a();
// function AA(){
//     return a();
// }
// const B = AA();

// function a(){
//     let cnt = 0;
//     const test = [];

//     function b(){
//         test.push(++cnt);
//         return test;
//     }
//     return b;
// }

// const increase = (function () {
//   // 카운트 상태 변수
//   let num = 0;

//   // 클로저
//   return function () {
//     return ++num;
//   };
// })();


