function solution(board, moves) {
    var answer = 0;
    var stack = []
    for(let i = 0; i < moves.length; i++) {
        let k = moves[i]
        for(let j = 0; j < board.length; j++) {
            if(board[j][k - 1] !== 0) {
                el = board[j][k - 1]
                board[j][k - 1] = 0
                stack.push(el)
                break
            } 
        } 
        if(stack[stack.length - 1] === stack[stack.length - 2] && stack.length >= 2) {
            stack.pop()
            stack.pop()
            answer += 2
        }
    }
    return answer;
}


