document.addEventListener('DOMContentLoaded', () => {

    const views = document.querySelector('#qtd-of-views')
    const inputSlider = document.querySelector('#range')
    const planPrice = document.querySelector('#month-price')
    const btnDiscount = document.querySelector('#billing-type-btn')

    function addDiscount() {
        const value = inputSlider.value
        const discountActive = btnDiscount.checked
        let price = ''

        if (value <= 2) {
            discountActive ? price = '$6.00' : price = '$8.00'
        } else if (value == 3) {
            discountActive ? price = '$9.00' : price = '$12.00'
        } else if (value == 4) {
            discountActive ? price = '$12.00' : price = '$16.00'
        } else if (value == 5) {
            discountActive ? price = '$18.00' : price = '$24.00'
        } else if (value == 6) {
            discountActive ? price = '$27.00' : price = '$36.00'
        }

        planPrice.innerHTML = price
    }

    inputSlider.addEventListener('input', function () {
        const value = inputSlider.value

        if (value <= 2) {
            views.innerHTML = '10K'
        } else if (value == 3) {
            views.innerHTML = '50K'
        } else if (value == 4) {
            views.innerHTML = '100K'
        } else if (value == 5) {
            views.innerHTML = '500K'
        } else if (value == 6) {
            views.innerHTML = '1M'
        }
    })

    inputSlider.addEventListener('input', addDiscount)
    btnDiscount.addEventListener('change', addDiscount)

    // jQuery funtion to apply input range progress background
    $('input[type="range"]').change(function () {
        val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

        $(this).css('background-image',
            '-webkit-gradient(linear, left top, right top, '
            + 'color-stop(' + val + ', hsl(174, 86%, 45%)), '
            + 'color-stop(' + val + ', hsl(223, 50%, 87%))'
            + ')'
        );
    });

})

