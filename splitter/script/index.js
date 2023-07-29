// jQuery
// Adds and removes classes from inputs
$('label[for="custom-tip"]').click(function () {
    $('label[for="custom-tip"]').addClass('styled-focus')
    $('input[name="tip-percentage"]:checked').prop('checked', false)
})

$('.styled-hover').click(function () {
    $('label[for="custom-tip"]').removeClass('styled-focus')
})

// -------------------------------------------------

function getTipPercentage() {
    const tipPercentage = document.querySelector('input[name="tip-percentage"]:checked')
    const customTip = document.querySelector('#custom-tip').value
    let percentage = 0

    if(tipPercentage){
        percentage = tipPercentage.value
    } else{
        percentage = customTip
    }

    return(calcTip(Number(percentage)))
}

function calcTip(percentage) {
    const bill = document.querySelector('#bill-inp').value
    const people = document.querySelector('#people').value
    const tipAmount = document.querySelector('#tip-amount-value')
    const totalValue = document.querySelector('#total-value')

    const tipAmountResult = bill / people / 100 * percentage
    const totalPeople = tipAmountResult + (bill /people)

    tipAmount.innerHTML = `$${tipAmountResult.toFixed(2)}`
    totalValue.innerHTML = `$${totalPeople.toFixed(2)}`
}
