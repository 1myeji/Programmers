function solution(nums) {
    let max = Math.floor(nums.length / 2)
    let pokemon = 0; 
    let map = new Map()
    for(let i = 0; i  < nums.length; i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1
            pokemon = pokemon + 1
        }
    }
    if(pokemon < max){
        return pokemon
    }
    return max
}