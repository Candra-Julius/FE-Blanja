// soal1

const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay =['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error(`Hari ${day} bukan hari kerja`))
            }
        },3000)
    })
}
// // then catch
// cekHariKerja("minggu")
// .then((result) => {
//     console.log(`Hari ${result} adalah hari kerja`)
// }).catch((err) => {
//     console.log(err);
// });

// // try catch
const handleHariKerja = async(day) =>{
    try {
        const result = await cekHariKerja(day)
        console.log(`Hari ${result} adalah hari kerja`)
    } catch (error) {
        console.log(error)
    }
}
handleHariKerja("sabtu")