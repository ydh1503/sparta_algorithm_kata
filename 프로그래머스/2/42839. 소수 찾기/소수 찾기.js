function solution(numbers) {
    var answer = 0;
    const nums = numbers.split('');
    
    answer = dfs('',nums,new Set());
    
    return answer;
}
    
function dfs(n, nums, visit){
    let count = 0;
    
    if(n !== '' && !visit.has(+n)){
        if(isPrime(+n))
            count++;
        visit.add(+n);
    }
    
    for(const num of nums){
        const index = nums.indexOf(num);
        const leftNums = nums.slice(0,index).concat(nums.slice(index+1));
        const curN = n+num;
        count += dfs(curN, leftNums, visit);
    }
    
    return count;
}

const isPrime = (function (){
    const primes = [2];

    function check(n){
        if(n<2)
            return false;
        
        if(Math.sqrt(primes[primes.length-1]) >= n){
            if(primes.includes(n))
                return true;
            return false;
        }
        
        for(let i=0; i<primes.length; i++){
            if(n === primes[i])
                return true;
            if(!(n%primes[i]))
                return false;
        }
        for(let i=Math.ceil(Math.sqrt(primes[primes.length-1])); i<=Math.sqrt(n); i++){
            check(i);
            if(!(n%i))
                return false;
        }
        primes.push(n);
        return true;
    }
    return check;
})();

