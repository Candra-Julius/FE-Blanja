const dividedAndSort = (input) =>{
    let str = input.toString().split("0")
    let proc =[]
    for (let i = 0; i < str.length; i++) {
        proc.push(str[i].split("").sort((a,b)=>a-b))
    }
    const result = proc.join().replaceAll(",","")
    parseInt(result,10)
    console.log(result);
}
dividedAndSort(5956560159466056)