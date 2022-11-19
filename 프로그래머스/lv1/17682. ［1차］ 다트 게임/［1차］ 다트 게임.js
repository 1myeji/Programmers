function solution(dartResult) {
    var answer = []
    var output = 0
    for(let i = 0; i < dartResult.length; i++) {
        var el
        var last = answer[answer.length - 1]
        var last2 = answer[answer.length - 2]
        if(dartResult[i] === '1' && dartResult[i + 1] === '0') {
            answer.push(10)
            i++
            continue
        }
        if(!isNaN(dartResult[i])) answer.push(dartResult[i])
        if(dartResult[i] === 'S') {
            el = answer[answer.length - 1] ** 1
            answer.splice(answer.indexOf(last), 1, el)
        } 
        if(dartResult[i] === 'D') {
            el = answer[answer.length - 1] ** 2 
            answer.splice(answer.indexOf(last), 1, el)
        }
        if(dartResult[i] === 'T') {
            el = answer[answer.length - 1] ** 3
            answer.splice(answer.indexOf(last), 1, el)  
        }
        if(dartResult[i] === '*') {
            if(answer.length === 1) {
                el = answer[answer.length - 1] * 2
               answer.splice(answer.indexOf(last), 1, el)
            } else {
                el = answer[answer.length - 1] * 2
                answer.splice(answer.indexOf(last), 1, el)
                el = answer[answer.length - 2] * 2   
                answer.splice(answer.indexOf(last2), 1, el)
            }
        }
        if(dartResult[i] === '#') {
            el = answer[answer.length - 1] * (-1)
            answer.splice(answer.indexOf(last), 1, el)
        }
    }
    for(const x of answer) {
        output += x
    }
    return output;
}