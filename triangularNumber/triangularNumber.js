const triangularNUmber = num => {
    if (num === 1)
    {
        return num;
    } else {
        return num + triangularNUmber(num -1 )
    }


}
let result = triangularNUmber(4)
console.log(result)