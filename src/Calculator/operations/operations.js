export function add(a,b){
    if(!isNaN(a) && !isNaN(b)){
        return parseFloat(a) + parseFloat(b)
    }
    throw new Error(`ADD: Not Numbers detected (${a}, ${b})`)
}
export function subtract(a,b){
    if(!isNaN(a) && !isNaN(b)){
        return parseFloat(a) - parseFloat(b)
    }
    throw new Error(`SUBTRACT: Not Numbers detected (${a}, ${b})`)
}
export function multiply(a,b){
    if(!isNaN(a) && !isNaN(b)){
        return parseFloat(a) * parseFloat(b)
    }
    throw new Error(`MULTIPLY: Not Numbers detected (${a}, ${b})`)
}
export function divide(a,b){
    if(!isNaN(a) && !isNaN(b)){
        return parseFloat(a) / parseFloat(b)
    }
    throw new Error(`DIVIDE: Not Numbers detected (${a}, ${b})`)
}
