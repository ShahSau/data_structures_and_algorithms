// encodecd  number to string
let Dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789"
let dic = Dictionary.split("")
const reverseWord = (str)=>{
    let reversed =""
    for(let i=str.length-1; i>=0; i--){
        reversed+=str.charAt(i)
    }
    return reversed
}
const encoded=(num)=>{
    let base = dic.length
    let encodecd =""

    if(num === 0){
        return dic[0]
    }
    while(num>0){
        encodecd += dic[(num%base)]
        num = Math.floor(num/base)
    }
    return reverseWord(encodecd)
}

//decoded string to number
const decoded=(id)=>{
    let base = dic.length
    let decoded =0

    for(let index=0;index<id.split("").length; index++){
        decoded = decoded * base +dic.indexOf(id.charAt(index))
    }
    return decoded
}