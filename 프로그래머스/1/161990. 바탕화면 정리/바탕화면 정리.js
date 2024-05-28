function solution(wallpaper) {
    var answer = [];
    let lux=wallpaper.length, luy=wallpaper[0].length;
    let rdx=0, rdy=0;
    
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#'){
                if(lux> i) lux = i;
                if(luy> j) luy = j;
                if(rdx< i+1) rdx = i+1;
                if(rdy< j+1) rdy = j+1;
            }
        }
    }
    answer.push(lux);
    answer.push(luy);
    answer.push(rdx);
    answer.push(rdy);
    return answer;
}