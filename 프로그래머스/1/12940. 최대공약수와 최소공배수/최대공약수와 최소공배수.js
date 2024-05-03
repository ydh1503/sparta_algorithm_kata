function solution(n, m) {
    var answer = [];
    
    answer.push(getGCD(n,m));
    answer.push(getLCM(n,m));
    
    return answer;
}

function getPrimeFactors(n){
    let i = 2;
    let primeFactors = [];
    
    while(n>1){
        if(!(n%i)){
            primeFactors.push(i);
            n = n/i;
        } else i++;
    }
    
    return primeFactors;
}

function getGCD(n, m){
    const nPrime = getPrimeFactors(n);
    const mPrime = getPrimeFactors(m); 
    let result = 1;
    
    nPrime.forEach(e_n => {
        if(mPrime.length < 1)
            return result;
        
        let i = mPrime.findIndex(e_m => e_m === e_n);
        
        if(i !== -1){
            result *= e_n;
            mPrime.splice(0,i+1);
        }
    });
    
    return result;
}

function getLCM(n, m){
    return n*m/getGCD(n,m);
}