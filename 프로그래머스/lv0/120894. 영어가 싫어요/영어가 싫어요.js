function solution(numbers) {
    let arr =  ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"] 
    // 배열로 넣어주고 replace(answer[i], i)
    for(let i = 0; i < arr.length; i++) {
        numbers = numbers.replaceAll(arr[i], i)
    }
    return Number(numbers)
}