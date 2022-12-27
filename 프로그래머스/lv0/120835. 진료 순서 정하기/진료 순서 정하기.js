function solution(emergency) {
    let answer = [...emergency].fill(0);
    let arr = [...emergency]
    emergency.sort((a, b) => a - b)
    for(let i = 0; i < emergency.length; i++) {
        let index = arr.indexOf(emergency[i])
        answer.splice(index, 1, emergency.length - i)
    }
    
    return answer;
}