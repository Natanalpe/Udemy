function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

console.log(estaEntre(0, 100, 100, true))