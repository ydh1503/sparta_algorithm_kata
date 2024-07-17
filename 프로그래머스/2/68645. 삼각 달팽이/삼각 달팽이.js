function solution(n) {
    var answer = [];
    const snail = [];
    let i=1;
    let x=-1, y=0;
    let routine = 0;
    
    while(n>0){
        for(let j=0; j<n; j++){
            switch(routine){
                case 0: x++; break;
                case 1: y++; break;
                case 2: x--; y--; break;
            }
            snail[x] ??= [];
            snail[x][y] = i++;
        }
        routine++;
        routine %= 3;
        n--;
    }
    answer = snail.reduce((acc,cur)=>[...acc,...cur],[]);
    
    return answer;
}