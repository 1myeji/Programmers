function solution(d, budget) {
    var answer = 0;
    var sum = 0
    d.sort((a, b) => a - b)
    for(const x of d) {
        sum = sum + x
        if(budget >= sum) answer++
        else break
    }
    return answer
}