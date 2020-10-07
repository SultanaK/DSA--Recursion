const stringSplit = string => {
    if (string === "") { return "" }
    else {
        return string[0]+ stringSplit(string.substr(1))
    }
}
