function decoder (code) {

    let good = []

    let split = code.split('')

    for (let i = 0; i<code.length; i++) {
    //skip 1 - pull, skip 2 - pull, skip 3 - pull, skip 2 - pull, skip 4 - pull
        if (i === 0) {
            good.push(split[i + 1].slice())
        } else if (i === 1){
            good.push(split[i + 3].slice())
        } else if (i === 2) {
            good.push(split[i + 4].slice())
        } else if (i === 3) {
            good.push(split[i + 2].slice())
        } else if (i === 4) {
            good.push(split[i + 3].slice())
        }   
    } 
    let final = good.join('')
    return final
}

console.log(decoder('8g3ijf0ij30jf'))