function solution(today, terms, privacies) {
    var answer = [];    
    const termsMap = new Map();
    
    terms.forEach(e=>{
        const tmp = e.split(' ');
        termsMap.set(tmp[0],+tmp[1]);
    });
    
    for(let i=0; i<privacies.length; i++){
        const privacy = privacies[i].split(' ');
        const expired = dayAfterMonth(privacy[0],termsMap.get(privacy[1]));
        if(!compareDay(today,expired)){
            answer.push(i+1);
        }
    }
    
    return answer;
}

// YYYY.MM.DD 날짜 비교(day1 <= day2 ? true : false)
function compareDay(day1, day2){
    const d1 = day1.split('.');
    const d2 = day2.split('.');
    
    for(let i=0; i<3; i++){
        if(+d1[i] === +d2[i]) continue;
        else if(+d1[i]<+d2[i]) return true;
        else return false;
    }
    //Day가 같을 경우 true
    return true;   
}

// YYYY.MM.DD 날짜 + Month 이후 YYYY.MM.DD 날짜 반환
function dayAfterMonth(day,month){
    const d = day.split('.');
    for(let i=0; i<3; i++){
        d[i] = +d[i];
    }
    d[1] += month;
    while(d[1] > 12){
        d[0]++;
        d[1] -= 12;
    }
    d[2]--;
    if(d[2] < 1){
        d[1]--;
        d[2] = 28;
        if(d[1] < 1){
            d[0]--;
            d[1]=12;
        }
    }
    for(let i=0; i<3; i++){
        d[i] = String(d[i]);
    }
    if(+d[1]<10) d[1]='0'+d[1];
    if(+d[2]<10) d[2]='0'+d[2];
    return d.join('.');
}