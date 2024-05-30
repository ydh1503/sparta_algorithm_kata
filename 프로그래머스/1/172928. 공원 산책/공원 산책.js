function solution(park, routes) {
    var answer = [];
    let dog = [];
    
    for(let i=0; i<park.length; i++){
        for(let j=0; j<park[0].length; j++){
            if(park[i][j]==="S"){
                dog.push(i);
                dog.push(j);
                break;
            }
        }
    }
    
    for(const route of routes){
        const tmp = route.split(' ');
        const op = tmp[0];
        const n = +tmp[1];
        
        dog = move(dog, park, op, n);
    }
    
    answer = dog;
    return answer;
}

function move(pos, space, op, n){
    switch(op){
            case 'N':
                for(let i=1; i<n+1; i++){
                    if(pos[0]-i < 0 || space[pos[0]-i][pos[1]]==='X')
                        return pos;
                }
                pos[0] -= n;
                break;
            
            case 'S':
                for(let i=1; i<n+1; i++){
                    if(pos[0]+i > space.length-1 || space[pos[0]+i][pos[1]]==='X')
                        return pos;
                }
                pos[0] += n;
                break;
            
            case 'W':
                for(let i=1; i<n+1; i++){
                    if(pos[1]-i < 0 ||space[pos[0]][pos[1]-i]==='X')
                        return pos;
                }
                pos[1] -= n;
                break;
            
            case 'E':
                for(let i=1; i<n+1; i++){
                    if(pos[1]+i > space[0].length-1 ||space[pos[0]][pos[1]+i]==='X')
                        return pos;
                }
                pos[1] += n;
                break;
        }
    return pos;
}