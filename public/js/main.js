const bdaySelect = document.querySelector('#birthdate-select')
const countrySelect = document.querySelector('#birthplace-select')
const demoDisplayMonth = document.querySelector('.demo-month')
const demoDisplayCountry = document.querySelector('.demo-country')

let countryChosen
// listen for birthdate selected
bdaySelect.addEventListener('change', date => {
    let bdayChosen = date.target.value
    let monthChosen = Number(bdayChosen.substring(5, 7))
    numberToMonth(monthChosen)
})

// listen for country selected
countrySelect.addEventListener('change', country => {
    countryChosen = country.target.value.toLowerCase()
    fetchCountry(countryChosen)
})

function numberToMonth(monthChosen) {
    const date = new Date();
    date.setMonth(monthChosen - 1);
    month = date.toLocaleString('en-US', {
        month: 'long',
    }).toLowerCase()
    console.log(month)
    fetchMonth(month)
}

function fetchMonth(month) {
    fetch('/api')
        .then(res => res.json())
        .then(data => {
            console.log(month)
            console.log(data.byMonth[month])
            demoDisplayMonth.textContent = data.byMonth[month].month
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function fetchCountry(country) {
    fetch('/api')
        .then(res => res.json())
        .then(data => {
            demoDisplayCountry.textContent = data.byCountry[country].country
            console.log(data.byCountry)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}