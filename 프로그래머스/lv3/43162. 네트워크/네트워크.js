function solution(n, computers) {
    var answer = 0;
    let ch = Array(n).fill(0)
    function DFS(v) {
        for(let i = 0; i < n; i++) {
            if(computers[v][i] === 1 && ch[i] ===0) {               
                ch[i] = 1
                DFS(i)
            }
        }
    }
    for(let i = 0; i < n; i++) {
        if(ch[i] === 0) {
            answer++
            ch[i] = 1
            DFS(i)
        }
    }
    return answer;
}