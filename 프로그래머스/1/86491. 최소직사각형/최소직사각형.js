function solution(sizes) {
    var answer = 0;
    let w = sizes[0][0];
    let h = sizes[0][1];
    let long;
    let short;
    
    if(w < h){
        long = h;
        short = w;
    } else{
        long = w;
        short = h;
    }
    
    for(let i = 1; i < sizes.length; i++){
        w = sizes[i][0];
        h = sizes[i][1];
        
        if(w < h){
            long = Math.max(long,h);
            short = Math.max(short,w);
        } else{
            long = Math.max(long,w);
            short = Math.max(short,h);
        }
    }
    
    answer = long * short;
    
    return answer;
}