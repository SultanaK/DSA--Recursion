const powerCalculator = (base, number) => {
    if (number === 1) {
        return base
    }
    if (number === 0)
    {
       return  'number should be grater thab 0'
    }   
    else {
       console.log(base,number) 
        return  base * powerCalculator(base, number-1)
    }
}
let result = powerCalculator(10, 2)
console.log(result)