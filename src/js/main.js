import { get } from './utils'

const input = get('input[name=todo]')
const form = get('form')

form.addEventListener('submit', postData)

function postData(event) {
  event.preventDefault()
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: input.value }),
  })
    .then(res => res.json())
    .then(data => console.log(data))
}
