export function add(a,b){
    if(!isNaN(a)
        && !isNaN(b)
        && typeof a !== 'object'
        && typeof b !== 'object'
        && typeof a !== 'function'
        && typeof b !== 'function'
    ){
        return parseFloat( (parseFloat(a) + parseFloat(b)).toString().substring(0,13) )
    }
    throw new Error(`ADD: Not Numbers detected (${a}, ${b})`)
}
export function subtract(a,b){
    if(!isNaN(a)
        && !isNaN(b)
        && typeof a !== 'object'
        && typeof b !== 'object'
        && typeof a !== 'function'
        && typeof b !== 'function'
    ){
        return parseFloat(a) - parseFloat(b)
    }
    throw new Error(`SUBTRACT: Not Numbers detected (${a}, ${b})`)
}
export function multiply(a,b){
    if(!isNaN(a)
        && !isNaN(b)
        && typeof a !== 'object'
        && typeof b !== 'object'
        && typeof a !== 'function'
        && typeof b !== 'function'
    ){
        return parseFloat( (parseFloat(a) * parseFloat(b) ).toString().substring(0,13) )
    }
    throw new Error(`MULTIPLY: Not Numbers detected (${a}, ${b})`)
}
export function divide(a,b){
    if(!isNaN(a)
        && !isNaN(b)
        && typeof a !== 'object'
        && typeof b !== 'object'
        && typeof a !== 'function'
        && typeof b !== 'function'
    ){
        return parseFloat( (parseFloat(a) / parseFloat(b) ).toString().substring(0,13));
    }
    throw new Error(`DIVIDE: Not Numbers detected (${a}, ${b})`)
}
