// async await must always be in front of the function
// api- application programming interface
// json - javascript object notation

const adviceContent = document.querySelector('.advice-content')
const adviceID = document.querySelector('.advice-id')
const loading = document.querySelector('.loading')
const button = document.querySelector('.circle')

async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json('')
  console.log(data);
  loading.classList.add('d-none')
  adviceContent.textContent = `"${data.slip.advice}"`
  adviceID.textContent = `Advice #${data.slip.id}` 
}

button.addEventListener('click', () => {
  location.reload()
})

setTimeout (() => {
    getData()
}, 3000)



// const getData = async () => {};
