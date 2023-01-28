const nameData = require('./controller')
console.log(nameData('John'))

const getData = async () => {
  const data = await nameData('John')
  console.log('aqui data', data)
}

nameData('John')
  .then((response) => console.log('response', response))

getData()