function solution(lottos, win_nums) {
    var answer = [];
    var min = 0
    var max = 0
    for(const x of lottos) {
        if(x === 0) max++
        for(const y of win_nums) {
            if(x === y) {
                min++
                max++
            }
        }
    } 
    while(0 === answer.length || answer.length === 1) {
        if(min === 6 || max === 6) answer.push(1)   
        if(min === 5 || max === 5) answer.push(2) 
        if(min === 4 || max === 4) answer.push(3) 
        if(min === 3 || max === 3) answer.push(4) 
        if(min === 2 || max === 2) answer.push(5) 
        if(min === 1 || max === 1 || min === 0 || max === 0) answer.push(6)    
    }
    return answer;
}