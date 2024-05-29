function solution(players, callings) {
    var answer = [];
    const rank = new Map();
    
    for(let i=0; i<players.length; i++){
        rank.set(players[i],i+1);
    }
    
    for(const player of callings){
        const i = rank.get(player);
        rank.set(players[i-2],i);
        rank.set(player,i-1);
        swap(players,i-1,i-2);
    }
    answer = players;
    
    return answer;
}

function swap(arr, i1, i2){
    const tmp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = tmp;
    
    return arr;
}