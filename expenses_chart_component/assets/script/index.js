document.addEventListener('DOMContentLoaded', () => {
    const data = fetch('./assets/script/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data
        })

    const chartContainer = document.querySelector('.spending-chart-container')

    data.then(data => {
        data.forEach(item => {
            let chart = document.createElement('div')
            chart.classList.add('spending-bar-box')

            const height = (item.amount / 7).toFixed(1)

            let value = ""
            if (item.day == "wed") {
                value = `<div class="bar active" style="height:${height}em"></div>`
            } else {
                value = `<div class="bar" style="height:${height}em"></div>`;
            }

            chart.innerHTML = `<div class="chart-wrapper">$${item.amount}</div>
            ${value}
            <div class="chart-title">${item.day}</div>`;

            chartContainer.appendChild(chart);
        })
    })
})