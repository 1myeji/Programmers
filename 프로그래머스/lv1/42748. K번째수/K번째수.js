function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++) {
        let newarray
        newarray = array.slice(commands[i][0] - 1, commands[i][1])
        let n = array.length
        for(let i=0; i<n-1; i++){
            let minIndex=i;
            for(let j=i+1; j<n; j++){
                if(newarray[j]<newarray[minIndex]) minIndex=j;
            }
            if(i!==minIndex){
                [newarray[i], newarray[minIndex]] = [newarray[minIndex], newarray[i]];	
            }
        }
        answer.push(newarray[commands[i][2] -1])
    }
    return answer;
}