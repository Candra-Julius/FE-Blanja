//soal 1
//1. toLowerCase()
// membuat semua huruf kecil
let contoh = "Hallo nama saya Candra"
let lowerCase = contoh.toLowerCase()
console.log(lowerCase);

//2. toUpperCase()
// membuat semua huruf besar
let upperCase = contoh.toLocaleUpperCase()
console.log(upperCase)

//3. string.indexOf
// mencari index yang memiliki kriteria tertentu
let strIndex = contoh.indexOf("saya")
console.log(strIndex);

//4. string.replace
//merubah kata yang dipilih
let strReplace = contoh.replace("saya","kamu")
console.log(strReplace);



//5. array.splice
// merubah atau menghapus value yang dipilih(start,index,replace)
let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]
let num = [1,2,3,4,5,6,7,8,9,10]
hari.splice(6,1,"minggu")
console.log(hari)

//6. array.slice
// mengambil nilai berdasarkan index(start,end)
let num1 = num.slice(2,8)
console.log(num1)

//7. array.toString
// merubah objek menjadi string
console.log(hari.toString());

//8. array.push 
// memasukan nilai baru kedalam array/objek dan diletakan dinilai akhir
hari.push("hari")
console.log(hari);

//9. array.shift
// mengambil index 0 dalam objek
let shifted = hari.shift();
console.log(shifted)



//10. number.toString
// merubah number menjadi string
let a = 123454321
let b = a.toString()
console.log(b);

//soal 2
const nama = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]   

    const searchName = (str, n, m) => {
        return nama.filter(function (lowerCased) {
            return lowerCased.toLowerCase().indexOf(str.toLowerCase())!==-1
        }).slice(m,n)
    }
    console.log(searchName("an",3));

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


