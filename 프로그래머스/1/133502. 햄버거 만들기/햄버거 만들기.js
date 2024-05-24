function solution(ingredient) {
    var answer = 0;
    const burger = [1,2,3,1];
    let burgerIndex = 0;
    
    for(let i=0; i<ingredient.length; i++){
        if(ingredient[i] === burger[burgerIndex]){
            //console.log('i:',i,'bI:',burgerIndex);
            burgerIndex++;
            if(burgerIndex === burger.length){
                ingredient.splice(i-burger.length+1,burger.length);
                answer++;
                burgerIndex = 0;
                
                // i-burger.length가 음수이면 오류 발생 가능
                // Array.lastIndexOf(searchElement, fromIndex): 음수 인덱스는 배열 끝에서부터 다시 계산됩니다. 만약 fromIndex < 0 이라면, fromIndex + array.length가 사용됩니다.
                // const restartIndex = ingredient.lastIndexOf(burger[0],i-burger.length);
                const restartIndex = ingredient.lastIndexOf(burger[0],i-burger.length < 0 ? 0:i-burger.length);
                i = restartIndex < 0 ? i-burger.length : restartIndex-1;
                //console.log(ingredient,i,restartIndex);
            }
        } else if (ingredient[i] === burger[0])
            burgerIndex = 1;
        else burgerIndex = 0;
    }
    
    return answer;
}