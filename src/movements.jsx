function Movements(Marray, movimiento) {
  const array = Marray
  let fila = 0
  let pos = 0
  let temp = 0

  function replaceAt(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length)
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].includes('p')) {
      pos = array[i].indexOf('p')
      fila = i
    }
  }

  if (movimiento === 'UP') {
    temp = array[fila - 1][pos]
    if (temp !== '-' && temp !== '+' && temp !== '|') {
      if (temp === 'g') {
        array[fila] = replaceAt(array[fila], pos, ' ')
        alert('You Win!')
      } else {
        array[fila - 1] = replaceAt(array[fila - 1], pos, 'p')
        array[fila] = replaceAt(array[fila], pos, ' ')
      }
    } else {
      alert('Auch! A Wall!')
    }
  } else if (movimiento === 'DOWN') {
    temp = array[fila + 1][pos]

    if (temp !== '-' && temp !== '+' && temp !== '|') {
      if (temp === 'g') {
        array[fila] = replaceAt(array[fila], pos, ' ')
        alert('You Win!')
      } else {
        array[fila - 1] = replaceAt(array[fila + 1], pos, 'p')
        array[fila] = replaceAt(array[fila], pos, ' ')
      }
    } else {
      alert('Auch! A Wall!')
    }
  } else if (movimiento === 'LEFT') {
    temp = array[fila][pos - 1]

    if (temp !== '-' && temp !== '+' && temp !== '|') {
      if (temp === 'g') {
        array[fila] = replaceAt(array[fila], pos, ' ')
        alert('You Win!')
      } else {
        array[fila] = replaceAt(array[fila], pos - 1, 'p')
        array[fila] = replaceAt(array[fila], pos, ' ')
      }
    } else {
      alert('Auch! A Wall!')
    }
  } else if (movimiento === 'RIGHT') {
    temp = array[fila][pos + 1]

    if (temp !== '-' && temp !== '+' && temp !== '|') {
      if (temp === 'g') {
        array[fila] = replaceAt(array[fila], pos, ' ')
        alert('You Win!')
      } else {
        array[fila] = replaceAt(array[fila], pos + 1, 'p')
        array[fila] = replaceAt(array[fila], pos, ' ')
      }
    } else {
      alert('Auch! A Wall!')
    }
  }

  return array
}

export default Movements
