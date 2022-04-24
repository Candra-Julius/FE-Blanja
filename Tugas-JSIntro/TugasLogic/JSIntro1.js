//cek Palindrom
const checkPalindrome = (str) =>{
    if (typeof(str)!=="string") {
        return console.log('bukan string')
    } else {
        let hasil =""
        let str1 = str.toLocaleLowerCase()
        for (let i = str1.length-1; i >= 0 ; i--) {
            hasil += str1[i];
        }
        if (str1 === hasil) {
            console.log("Palindrome")
        } else {
            console.log("Non-Palindrome");
        }
    }
}
checkPalindrome("hallo")


// reverse
const reverseString = (str) =>{
    if (typeof(str)!=="string") {
        return console.log('bukan string')
    } else {
        let hasil =""
        let reverse = str.split(" ")
        for (let i = reverse.length-1; i >= 0 ; i--) {
            hasil += reverse[i] + " ";
        }
        console.log(hasil)
    }
}
reverseString("hallo saya belajar javascript")