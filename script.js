const scriptURL = 'https://script.google.com/macros/s/AKfycbykreJjT4kGyVgv6XQq4zo5WVhJWSG0Ad0b0iHp-d-JSrpcZc2HgJztuayYhUZ7MO_m/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})