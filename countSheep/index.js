const countSheep = num => {
     if (num === 0) return "no more sheep are left."
        console.log(`Another sheep jumps over the fence`) 
        return countSheep(num - 1)
}
let result = countSheep(3)
console.log(result)