const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const msg1 = document.getElementById('msg1')
const msg2 = document.getElementById('msg2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    var url = '/weather?address=' + location

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                msg2.textContent = data.error
            } else {
                msg1.textContent = data.location + ', ' + data.forecast
                console.log(data.location);

                console.log(data.forecast);
            }
        })
    })
    console.log(location);
})