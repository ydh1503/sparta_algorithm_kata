function solution(nums) {
    //const sum = [];
    let count = 0;
    
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                //sum.push(nums[i]+nums[j]+nums[k]);
                if(isPrime(nums[i]+nums[j]+nums[k]))
                    count++;
            }
        }
    }
    
    // for(let i=0; i<sum.length; i++){
    //     if(isPrime(sum[i])) count++;
    // }
    
    return count;
}

function isPrime(n){
    for(let i=2; i<=Math.sqrt(n); i++)
        if(!(n%i)) return false;
    return true;
}