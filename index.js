const numberAdvice = document.getElementById('number-advice')
const paragraph= document.getElementById('para-advice')
const btnDiceIcon = document.querySelector('.dice-icon')
// With Promise
// const promiseFunction = ()=>{
//     const para =fetch('https://api.adviceslip.com/advice')
//     para.then(response=>response.json())
//     .then(response=>{
//         numberAdvice.innerText=response.slip.id
//         paragraph.innerText=`"${response.slip.advice}"`
//     })
//     .catch(e=>console.error(e))
// }

// With async await
const asyncFunction = async ()=>{
    try {
        const para = await fetch('https://api.adviceslip.com/advice')
        const response = await para.json()
        numberAdvice.innerText=response.slip.id
        paragraph.innerText=`"${response.slip.advice}"`
    } catch (error) {
        console.error(error)
    }
}

document.addEventListener("DOMContentLoaded",e=>{
    asyncFunction()
    btnDiceIcon.addEventListener('click',e=>asyncFunction())
})