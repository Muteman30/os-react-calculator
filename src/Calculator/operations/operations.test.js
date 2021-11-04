import * as op from './operations'

describe('Addition Operation tests', ()=>{
    test('Addition with numbers', ()=>{
        expect(op.add(1,1)).toEqual(2);
        expect(op.add(1.5, 1.5)).toEqual(3);
        expect(op.add(1, -1)).toEqual(0)
    })

    test('Addition With Strings', ()=>{
        expect(op.add('1','1')).toEqual(2);
        expect(op.add('1.5', '1.5')).toEqual(3);
        expect(op.add('1', '-1')).toEqual(0);
        expect(()=> {
            op.add('a', 'b')
        }).toThrowError();
    })

    test('Addition using non-primitive data', ()=>{
        expect(()=>{
            op.add({},{})
        }).toThrowError();
        expect(()=>{
            op.add([],[])
        }).toThrowError();
        expect(()=>{
            op.add(()=>{}, ()=>{})
        }).toThrowError();

    })
})
describe('Subtraction Operation tests', ()=>{
    test('Subtraction with numbers', ()=>{
        expect(op.subtract(5,2)).toEqual(3);
        expect(op.subtract(5.5, 1.5)).toEqual(4);
        expect(op.subtract(5, -1)).toEqual(6)
    })

    test('Subtraction With Strings', ()=>{
        expect(op.subtract('5','1')).toEqual(4);
        expect(op.subtract('5.5', '1.5')).toEqual(4);
        expect(op.subtract('5', '-1')).toEqual(6);
        expect(()=> {
            op.subtract('a', 'b')
        }).toThrowError();
    })

    test('Subtraction using non-primitive data', ()=>{
        expect(()=>{
            op.subtract({},{})
        }).toThrowError();
        expect(()=>{
            op.subtract([],[])
        }).toThrowError();
        expect(()=>{
            op.subtract(()=>{}, ()=>{})
        }).toThrowError();

    })
})
describe('Multiplication Operation tests', ()=>{
    test('Multiplication with numbers', ()=>{
        expect(op.multiply(5,2)).toEqual(10);
        expect(op.multiply(5.5, 2.5)).toEqual(13.75);
        expect(op.multiply(4, -2)).toEqual(-8)
    })

    test('Multiplication With Strings', ()=>{
        expect(op.multiply('5','2')).toEqual(10);
        expect(op.multiply('5.5', '2.5')).toEqual(13.75);
        expect(op.multiply('4', '-2')).toEqual(-8);
        expect(()=> {
            op.multiply('a', 'b')
        }).toThrowError();
    })

    test('Multiplication using non-primitive data', ()=>{
        expect(()=>{
            op.multiply({},{})
        }).toThrowError();
        expect(()=>{
            op.multiply([],[])
        }).toThrowError();
        expect(()=>{
            op.multiply(()=>{}, ()=>{})
        }).toThrowError();

    })
})
describe('Division Operation tests', ()=>{
    test('Division with numbers', ()=>{
        expect(op.divide(10,2)).toEqual(5);
        expect(op.divide(10.5, 2.5)).toEqual(4.2);
        expect(op.divide(10, -5)).toEqual(-2)
    })

    test('Division With Strings', ()=>{
        expect(op.divide('10','2')).toEqual(5);
        expect(op.divide('10.5', '2.5')).toEqual(4.2);
        expect(op.divide('10', '-5')).toEqual(-2);
        expect(()=> {
            op.divide('a', 'b')
        }).toThrowError();
    })

    test('Division using non-primitive data', ()=>{
        expect(()=>{
            op.divide({},{})
        }).toThrowError();
        expect(()=>{
            op.divide([],[])
        }).toThrowError();
        expect(()=>{
            op.divide(()=>{}, ()=>{})
        }).toThrowError();

    })
})
