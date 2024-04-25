function reverseStr(str) {
    let rvStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rvStr = rvStr.concat(str[i]);
    }
    return rvStr;
}

//console.log(reverseStr("hello"));

function summaryStr(str) {
    let lastChar = str[0];
    let count = 1;
    let result = "";

    for (let i = 1; i < str.length; i++) {
        if (lastChar === str[i]) {
            count++;
        }
        else {
            result = result.concat(lastChar, count, '/');
            lastChar = str[i];
            count = 1;
        }
    }
    result = result.concat(lastChar, count);

    return result;
}

// console.log(summaryStr("aaabbbc"));
// console.log(summaryStr("ahhhhzhh"));

function isPrimeNum(n) {
    let isPrime = true;

    // n이 1인 경우
    if(n === 1)
        isPrime = false;
    // n이 1 또는 2가 아닌 경우
    else if (!(n === 2)) {
        // n이 홀수인 경우
        if (n % 2) {
            // 개선 방안 : i를 소수인 숫자로만 하는 방법?
            for (let i = 3; i < Math.sqrt(n) + 1; i += 2) {
                if (!(n % i)) {
                    isPrime = false;
                    break;
                }
            }
        }
        // n이 짝수인 경우
        else
            isPrime = false;
    }

    return isPrime;
}

let testArray = [1, 2, 3, 4, 5, 7, 9, 13, 15, 17, 49, 51, 113, 114, 115, 117, 127];

testArray.forEach(n => {
    console.log(n, ':', isPrimeNum(n));
});
