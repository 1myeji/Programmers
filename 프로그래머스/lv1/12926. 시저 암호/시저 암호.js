function solution(s, n) {
    let str = s.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let answer = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' '){
            answer = answer + str[i]
            continue
        }
        let index = alphabet.indexOf(str[i])
        let newindex = index + n
        if(newindex > 25) newindex = newindex - 26
        if(s[i] === s[i].toUpperCase()){
            answer = answer + alphabet[newindex].toUpperCase()
        }else {
            answer = answer + alphabet[newindex]
        }
    }
    return answer;
}