//input:
loanAmount = document.querySelector('#amount')
interest = document.querySelector('#interest')
years = document.querySelector('#years')
btn1 = document.querySelector('.btn')
gif = document.querySelector('#loading')
results = document.querySelector('#results')

btn1.addEventListener('click',function(e){
    results.style.display='none'
    gif.style.display='block'
    setTimeout(calculate,500)
    e.preventDefault()
})

let ftime = Number(years.value)*12

    function calculate()
    {
        
        monthlyPayment = document.querySelector('#monthly-payment')
        totalPayment = document.querySelector('#total-payment')
        toatalInterest = document.querySelector('#total-interest')
        if(loanAmount.value =="" || interest.value =="" || years.value =="")
        {

            gif.style.display='none'
            errorfunction()
        }
        else{
           
            let ftime = Number(years.value)*12
            let famount = totalToPay()
            totalPayment.value = Number((famount).toFixed(2))+Number(loanAmount.value)
            monthlyPayment.value =(totalPayment.value/ftime).toFixed(2)
            toatalInterest.value = ((totalPayment.value-loanAmount.value)).toFixed(2)
            gif.style.display='none'
            results.style.display='block'

        }
        
    }


function totalToPay(){
    res = (loanAmount.value)*(interest.value)*(years.value)/100
    //console.log(res)
    let time = Number(years.value)*12
    return res
}
function errorfunction(){
    const errordiv = document.createElement('div')
    const card = document.querySelector('.card')
    const head =card.children[0]
    errordiv.className = 'alert alert-danger'
    errordiv.appendChild(document.createTextNode('Enter proper values'))
    card.insertBefore(errordiv,head)
    setTimeout(errormsg,2000)
}
function errormsg()
{
    document.querySelector('.alert').remove()
}
function loading()
{
    gif.style.display="none"
}
