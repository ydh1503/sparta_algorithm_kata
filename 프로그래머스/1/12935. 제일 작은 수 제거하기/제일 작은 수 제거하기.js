function solution(arr) {
    var answer = [];
    
    if(arr.length <= 1)
        answer = [-1];
    else{
        let min = 0;
        for(let i = 1; i<arr.length; i++)
            if(arr[min] > arr[i])
                min = i;
        //answer = arr.toSpliced(min, 1);
        answer = arr.slice();
        answer.splice(min,1);
    }
    
    return answer;
}