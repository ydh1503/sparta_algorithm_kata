function solution(k, dungeons) {
    var answer = 0;
    
    /* 어떠한 던전을 탐험 후 남은 피로도를 기준으로 들어갈 수 있는 다음 던전의 수를 구하여 그 수가 가장 많은 던전을 탐색하는 방식
    => 오류 발생
    => k=30, dungeons=[[30,20],[10,10],[10,10],[10,10]] 일 때 해당 방식으로는 이후 탐색 가능한 던전의 수가 3인 i=0의 던전을 탐색하게 됨
    이 경우 총 탐색 가능한 던전의 수는 2개로 i=1(or 2,3)인 던전을 탐색했을 경우 총 탐색 가능한 던전의 수인 3개보다 적은 수를 반환한다.
    */
//     while(true){
//         const countDungeons = [];
        
//         for(let i=0; i<dungeons.length; i++){
//             const [minFatigue,consumeFatigue] = dungeons[i];
            
//             if(k < minFatigue)
//                 continue;
            
//             const remainFatigue = k - consumeFatigue;
            
//             const count = dungeons.reduce((acc,cur,idx)=>{
//                 const [minFatigue,consumeFatigue] = cur;
//                 if(remainFatigue < minFatigue || i === idx)
//                     return acc;
//                 return acc + 1;
//             },0);
//             countDungeons[i] = count;
//         }
        
//         console.log(k, dungeons, countDungeons);
        
//         let maxCount = 0;
//         let maxIndex = 0;
//         for(let i=0; i<countDungeons.length; i++){
//             if(!countDungeons[i])
//                 continue;
//             if(countDungeons[i]>maxCount){
//                 maxCount = countDungeons[i];
//                 maxIndex = i;
//             } else if(countDungeons[i] === maxCount){
//                 maxIndex = dungeons[i][0] > dungeons[maxIndex][0] ? i : maxIndex;
//             }
//         }
        
//         k -= dungeons[maxIndex][1];
//         dungeons.splice(maxIndex,1);
//         answer++;
        
//         if(!dungeons.length || dungeons.some(([minFatigue,consumeFatigue])=>k<minFatigue))
//             break;
//     }

    const countArr = [];
    let count = 0;
    let fatigue = k;
    let visitBoongi = [];
    let remainD = dungeons.slice();
    const boongi = [[count, fatigue, remainD]];
    
    // 모든 분기점을 다 돌때까지 반복, 처음 분기점은 피로도=k, remainD=dungeons일 때
    while(boongi.length){
        [count, fatigue, remainD] = boongi.pop();
        visitBoongi.push([count, fatigue, remainD.slice()]);
        // 한 분기점에서 더 이상 들어갈 던전이 없을 때까지 반복
        while(remainD.length){
            console.log('c',count,'f',fatigue,'r',remainD);
            const dungeon = remainD.shift();

            // 분기점 생성
            // 남은 던전의 수가 없을 경우 분기점 생성 안함
            if(remainD.length){
                const tRemainD = remainD.slice();
                tRemainD.push(dungeon);
                const newBoongi = [count, fatigue, tRemainD];
                // 이미 생성된 분기점과 동일한 분기점은 생성하지 말아야 함
                if(!visitBoongi.some((e)=>{
                    if(e[0] !== newBoongi[0])
                        return false;
                    if(e[1] !== newBoongi[1])
                        return false;
                    for(let i=0; i<e[2].length; i++){
                        if(e[2][i] !== newBoongi[2][i])
                            return false;
                    }
                    return true;
                })){    
                    boongi.push(newBoongi);
                }
            }
            
            // 들어갈 수 없는 던전이면 해당 탐색은 끝
            if(fatigue < dungeon[0]){
                // countArr.push(count);
                // continue;
                break;
            }
            
            // 특정 던전 입장
            count++;
            fatigue -= dungeon[1];
        }
        countArr.push(count);
    }
    answer = Math.max(...countArr);
    
    return answer;
}