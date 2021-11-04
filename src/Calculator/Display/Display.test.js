import React from 'react';
import Display from './Display'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

describe('<Display/>', ()=>{
    const smallNumber = 100;
    const smallExpect = '100';
    const largeNumber = 1000;
    const largeExpect = '1,000';
    const veryLargeNumber = 1000000;
    const veryLargeExpect = '1,000,000';
    const extremelyLargeNumber = 100000000000000;
    const extremelyLargeExpect = 'Err';

    it('Displays small numbers', ()=>{
        const wrapper = shallow(<Display displayValue={smallNumber}/>)
        expect(wrapper.text()).toEqual(smallExpect);
    })
    it('Displays large numbers', ()=>{
        const wrapper = shallow(<Display displayValue={largeNumber}/>)
        expect(wrapper.text()).toEqual(largeExpect);
    })
    it('Displays very large numbers', ()=>{
        const wrapper = shallow(<Display displayValue={veryLargeNumber}/>)
        expect(wrapper.text()).toEqual(veryLargeExpect);
    });
    it('Errors on numbers over 14 digits', ()=>{
        const wrapper = shallow(<Display displayValue={extremelyLargeNumber}/>)
        expect(wrapper.text()).toEqual(extremelyLargeExpect);
    })
})
