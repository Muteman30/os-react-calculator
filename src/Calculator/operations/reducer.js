import * as operation from './operations';

export default function slotReducer(state, action){
    switch(action){
        case 'C':
            return clearCurrentSlot(state)

        case 'AC':
            return clearAllSlots(state);

        case '+/-':
            return invertAbsolution(state)

        case '=':
            if(state.slots[0] !== undefined && state.slots[1] !== undefined){
                let result = calculate(state);
                return {
                    ...state,
                    activeOperation: undefined,
                    slots:[result, undefined]
                }
            } else {
                return {...state};
            }

        case '+':
        case '-':
        case 'X':
        case '/':
            return precalculate(state, action)

        default:
            if(!isNaN(action) || action === '.'){
                return addToDisplay(state, action)
            }
    }
    return {...state};
}

const setActiveOperation = (state, action)=>{
    return {
        ...state,
        activeOperation: action
    }
}
const calculate = (state)=>{
    let result;
    switch(state.activeOperation){
        case'+':
            result = operation.add(state.slots[0], state.slots[1])
            break;
        case'-':
            result = operation.subtract(state.slots[0], state.slots[1])
            break;
        case'X':
            result = operation.multiply(state.slots[0], state.slots[1])
            break;
        case'/':
            result = operation.divide(state.slots[0], state.slots[1])
            break;
    }
    return result;
}

const precalculate=(state, action)=>{
    if(state.slots[1] === undefined){
        //do nothing
    } else if(state.activeOperation === undefined){
        state = moveSlots(state);
    } else {
        let number = calculate(state);
        state = {
            ...state,
            slots:[number, undefined]
        }
    }
    state = setActiveOperation(state, action)
    return state;
}

const moveSlots = (state)=>{
    if(!state.slots[1]){
        state.slots[1] = '0'
    }
    return {
        ...state,
        slots:[state.slots[1], '0']
    }
}

const clearCurrentSlot = (state)=>{
    const amendedSlots = [...state.slots];
    amendedSlots[1] = 0;
    return{
        ...state,
        slots:amendedSlots
    }
}
const clearAllSlots = (state)=>{
    return {
        ...state,
        activeOperation: undefined,
        slots: [undefined, '0']
    }
}

const invertAbsolution = (state)=>{
    const amendedSlots = [...state.slots];
    amendedSlots[1] = amendedSlots[1]*-1;
    return {...state, slots:amendedSlots}
}

const addToDisplay = (state, num)=>{
    const amendedSlots = [...state.slots];
    amendedSlots[1] = amendedSlots[1]===undefined ? '' : amendedSlots[1];
    if(amendedSlots[1].toString().indexOf('.') > -1 && num === '.'){
        //do nothing
    } else {
        amendedSlots[1] = (amendedSlots[1].toString()+num.toString()).replace(/^0+/, '');

    }
    return {...state, slots:amendedSlots};
}
