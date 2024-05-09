function solution(strings, n) {
    var answer = [...strings];

    answer.sort(function(str1, str2){
        //인덱스에 해당하는 문자가 같을 경우
        if(str1[n] === str2[n])
            //전체 문자열로 비교
            return (str1<str2) ? -1 : 1;
        
        //그 외의 경우 인덱스에 해당하는 문자를 기준으로 정렬
        return (str1[n]<str2[n]) ? -1 : 1;
    });

    return answer;
}