// function decoder (code) {

//     let good = []

//     let split = code.split('')

//     for (let i = 0; i<code.length; i++) {
//     //skip 1 - pull, skip 2 - pull, skip 3 - pull, skip 2 - pull, skip 4 - pull
//         if (i === 0) {
//             good.push(split[i + 1].slice())
//         } else if (i === 1){
//             good.push(split[i + 3].slice())
//         } else if (i === 2) {
//             good.push(split[i + 4].slice())
//         } else if (i === 3) {
//             good.push(split[i + 2].slice())
//         } else if (i === 4) {
//             good.push(split[i + 3].slice())
//         }   
//     } 
//     let final = good.join('')
//     return final
// }

function decoder(code) {

    let i = 0
    let good = []
    let split = code.split('')
 
    do {
        good.push(split[i + 1].slice())
        good.push(split[i + 3].slice())
        good.push(split[i + 4].slice())
        good.push(split[i + 2].slice())
        good.push(split[i + 3].slice())
    }
 while (i > split.length)
 let final = good.join('')
 return final
}

console.log(decoder('ju38cnl19snfpeiu03dnc92jnz7vb284njck094j5ntkfg9fj3bdi'))
