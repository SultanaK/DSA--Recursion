const stringSplit = (string , separetor )=> {
    if (string === "") { return "" }
    else if (string[0] === separetor){
        return stringSplit(string.slice(1),separetor)
    } else {
        return string[0] + stringSplit(string.slice(1), separetor) 
    }
}
let result = stringSplit('02/20/2020', '/')
console.log(result);