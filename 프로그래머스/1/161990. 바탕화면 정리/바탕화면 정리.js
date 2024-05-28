function solution(wallpaper) {
    var answer = [];
    let lux=wallpaper.length, luy=wallpaper[0].length;
    let rdx=0, rdy=0;
    
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#'){
                if(lux> i) lux = i;
                if(luy> j) luy = j;
                if(rdx< i) rdx = i;
                if(rdy< j) rdy = j;
            }
        }
    }
    answer.push(lux);
    answer.push(luy);
    answer.push(rdx+1);
    answer.push(rdy+1);
    return answer;
}