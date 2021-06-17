// PRIMEIRA QUESTÃO

function someFun(params, callback) {
  callback(params.someProperty)

  return 1
}

// SEGUNDA QUESTÃO

function someFn(valor) {
  const returnFunction = (num) => {
    switch (num) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return returnFunction
}

// TERCEIRA QUESTÃO

function calculator(y1, y2) {
  return callback => callback(y1, y2)
}

// QUARTA QUESTÃO

/**
 * A ordem que aparecerá no console, será a seguinte:
 * 4
 * 1
 * 5
 * 1
 */

// QUINTA QUESTÃO
function tabuada(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${resultado} X ${i} = ${resultado* i}`)
  }
}
