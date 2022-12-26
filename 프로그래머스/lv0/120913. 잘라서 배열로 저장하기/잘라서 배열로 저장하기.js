function solution(my_str, n) {
    var answer = [];
    for(let i = 0; i < my_str.length; i++) {
    let string = ""
    string = my_str.substr(i * n, n)
    if(string.length > 0) answer.push(string)
    }
    return answer;
}
