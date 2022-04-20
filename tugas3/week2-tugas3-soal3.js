//1.
const checkZooAnimal = (animal) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let animalList = ["Cat", "Dog", "Parrot", "Rabbit", "Lion", "Tiger", "Flaminggo", "Rinho", "Bat"]
            let check = animalList.filter((items)=>{
                return items.toLowerCase().includes((animal.toLowerCase()))
            })
            if (!check.length) {
                reject(new Error(`Pencarian tidak ditemukan`))
            } else {
                resolve(check)
            }
            })
        },500)
    }

    checkZooAnimal("rat")
    .then(result => console.log(result))
    .catch(err => console.log(err));


//2.
const conditionTest = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            condition = false
            result = "kondisi berhasil"
            if (condition) {
                resolve(result)
            } else {
                reject(new Error ('coba cek lagi'))
            }
        },0)
    })
}

conditionTest()
.then(result => console.log(result))
.catch(err => console.log(err))