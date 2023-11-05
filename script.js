const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const reset = document.getElementById('reset')
const increment = document.getElementById('increment')
const number = document.getElementById('number')

add.addEventListener('click',function(e){
    number.innerText=parseInt(number.innerText)+parseInt(increment.value)
})

subtract.addEventListener('click',function(e){
    number.innerText=parseInt(number.innerText)-parseInt(increment.value)
    //number.innerText=Math.max(parseInt(number.innerText)-parseInt(increment.value),0)
})

reset.addEventListener('click',function(e){
    number.innerText=0
})