function solution(s) {
    var answer = true;
    if(s.length !== 4 && s.length !== 6) {
        answer = false   
    } else {
          for(const x of s) {
            if(isNaN(x) === true) answer = false     
          }
    }       
    return answer;
}