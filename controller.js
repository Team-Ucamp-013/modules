
const users = require('./data');
module.exports = async (name) => {
  const nameData = await users.find(item => item.name === name)
  console.log(nameData)

  if (!nameData) {
    console.error('El usuario no existe')
  } else if (!nameData.phone) {
    console.error('El usuario no tiene numero telefonico')
  }
  return nameData
}

