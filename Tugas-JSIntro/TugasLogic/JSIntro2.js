const pijarFood = (harga, voucher, jarak, ppn) =>{
    let pajak
    let diskon
    let ongkir
    console.log(`harga      :       ${harga}`);
    if (voucher === "PIJAR5" && harga >= 50000) {
        if (harga * 50/100 < 50000) {
            diskon = harga * 50/100
        } else {
            diskon = 50000
        }
    } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
        if (harga * 60/100 < 30000) {
            diskon = harga * 60/100
        } else {
            diskon = 30000
        }
    }else{
        diskon = 0
    }
    console.log(`diskon     :       ${diskon}`);
    if (jarak > 2) {
        ongkir = 5000 + (jarak - 2) * 3000
    } else {
        ongkir = 5000
    }
    console.log(`ongkir     :       ${ongkir}`);
    if (ppn === true) {
        pajak = harga * 5/100
    } else {
        pajak = 0
    }
    console.log(`pajak      :       ${pajak}`)
    console.log(`--------------------------`)
    const subtotal = harga - diskon + ongkir + pajak
    console.log(`subtotal   :       ${subtotal}`);
}
// PIJAR5 DITRAKTIRPIJAR
pijarFood(50000, "PIJAR5", 2, true)