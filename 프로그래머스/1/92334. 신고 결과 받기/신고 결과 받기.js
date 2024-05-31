function solution(id_list, report, k) {
    var answer = [];
    const reportedUsers = {};
    const mailCount = {};
    
    report.forEach(e=>{
        const tmp = e.split(' ');
        const user = tmp[0];
        const target = tmp[1];
        
        if(!reportedUsers[target])
            reportedUsers[target] = new Array(user);
        else if(!reportedUsers[target].includes(user))
            reportedUsers[target].push(user);
    });

    for(const reportedUser in reportedUsers){
        const byUsers = reportedUsers[reportedUser];
        if(byUsers.length < k)
            continue;
        
        for(const byUser of byUsers){
            mailCount[byUser] = mailCount[byUser] ? mailCount[byUser]+1 : 1 ;
        }
    }
    
    id_list.forEach(id=>{
        const count = mailCount[id] ? +mailCount[id] : 0;
        answer.push(count);
    });
        
    
    
    return answer;
}