//soal 1
let contoh = "Hallo nama saya Candra"

//1. toLowerCase()
// membuat semua huruf kecil
let lowerCase = contoh.toLowerCase()
console.log(lowerCase);

//2. toUpperCase()
// membuat semua huruf besar
let upperCase = contoh.toLocaleUpperCase()
console.log(upperCase)

//3. string.indexOf
// mencari index yang memiliki kriteria tertentu
let strIndex = contoh.indexOf("saya")!==-1
console.log(strIndex);

//4. string.replace
//merubah kata yang dipilih
let strReplace = contoh.replace("saya","kamu")
console.log(strReplace);


let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]
let num = [1,2,3,4,5,6,7,8,9,10]

// 5. array.splice
// merubah atau menghapus value yang dipilih(start,index,replace)
hari.splice(3,1)
console.log(hari.splice(3,1))

//6. array.slice
// mengambil nilai berdasarkan index(start,end)
let num1 = num.slice(2,8)
console.log(num1)

//7. array.toString
// merubah objek menjadi string
let hari1 = hari.toString()
console.log(typeof(hari1));

//8. array.push 
// memasukan nilai baru kedalam array/objek dan diletakan dinilai akhir
hari.push("minggu")
console.log(hari);

//9. array.shift
// mengambil index 0 dalam objek
let shifted = hari.shift();
console.log(hari)



//10. number.toString
// merubah number menjadi string
let a = 123454321
let b = a.toString()
console.log(typeof(b));

//soal 2
const nama = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]   

    const searchName = (str, n, callback) => {
        let result = []
        result = nama.filter(function (lowerCased) {
            return lowerCased.toLowerCase().indexOf(str.toLowerCase())!==-1
        }).slice(0,n)

        callback(result)

    }

    printHasil = (arr) => {
        console.log(arr)
    }
    searchName("an",3,printHasil)

// soal 3

const data = [2, 25, 4, 14, 17, 30, 8]

const seleksiNilai = (nilaiAwal, nilaiAkhir)=>{
    if(typeof(nilaiAwal)!="number" | nilaiAwal > nilaiAkhir |typeof(nilaiAkhir)!="number"){
        return console.log("nilai akhir harus lebih besar dari nilai awal")
    }else if (data.length < 5) {
        return console.log("jumlah data array harus lebih dari 5")
    }else {
        const checkData = (angka)=>{
            return angka >= nilaiAwal && angka <= nilaiAkhir
        }
        return result = data.filter(checkData)
        }
    }

console.log(seleksiNilai(5,20))