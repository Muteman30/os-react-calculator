import React from 'react';
import Calculator from './Calculator';
import Button from './Button/Button'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

let wrapper, butn2, butn4, butn0;

describe('<Calculator/>', ()=>{

    beforeEach(()=>{
        wrapper = mount(<Calculator/>);
        butn2 = wrapper.find('#calc-2')
        butn4 = wrapper.find('#calc-4')
        butn0 = wrapper.find('#calc-0')
    });

    describe('Calculator display', ()=>{
        it('renders 20 Buttons', ()=>{
            expect(wrapper.find(Button)).toHaveLength(20);
        });

        it('Display will show Err if the number is over 14 digits', ()=>{
            butn2.simulate('click');
            for(let i=0; i<=13; i++){
                butn0.simulate('click');
            }
            expect(wrapper.find('.display').text()).toBe('Err');
        });
    })

    describe('Element rendering', ()=>{
        it('Adds the active class to the operation', ()=>{
            wrapper.find('#calc-add').simulate('click');
            expect(wrapper.find('#calc-add').hasClass('active')).toBe(true);
        });
    })

    describe('Calculator interaction', ()=>{
        it('Clicking number buttons changes the display for small numbers', ()=>{
            butn2.simulate('click');
            butn0.simulate('click');
            butn0.simulate('click');
            expect(wrapper.find('.display').text()).toBe('200');
        });

        it('Clicking number buttons changes the display for large numbers', ()=>{
            butn2.simulate('click');
            butn0.simulate('click');
            butn0.simulate('click');
            butn0.simulate('click');
            expect(wrapper.find('.display').text()).toBe('2,000');
        });

        it('Clicking number buttons changes the display with decimals', ()=>{
            butn2.simulate('click');
            butn0.simulate('click');
            wrapper.find('#calc-decimal').simulate('click');
            butn0.simulate('click');
            wrapper.find('#calc-1').simulate('click');
            expect(wrapper.find('.display').text()).toBe('20.01');
        });

        it('clicking the clear buttons will clear the display', ()=>{
            wrapper.find('#calc-3').simulate('click');
            expect(wrapper.find('.display').text()).toBe('3');
            wrapper.find('#calc-c').simulate('click');
            expect(wrapper.find('.display').text()).toBe('0');
            wrapper.find('#calc-3').simulate('click');
            expect(wrapper.find('.display').text()).toBe('3');
            wrapper.find('#calc-ac').simulate('click');
            expect(wrapper.find('.display').text()).toBe('0');
        });

        it('correctly displays calculation for small numbers', ()=>{
            butn4.simulate('click');
            wrapper.find('#calc-multiply').simulate('click');
            butn4.simulate('click');
            wrapper.find('#calc-equal').simulate('click');
            expect(wrapper.find('.display').text()).toBe('16')
        })

        it('correctly displays calculation for large numbers', ()=>{
            butn4.simulate('click');
            butn0.simulate('click');
            wrapper.find('#calc-multiply').simulate('click');
            butn4.simulate('click');
            butn0.simulate('click');
            wrapper.find('#calc-equal').simulate('click');
            expect(wrapper.find('.display').text()).toBe('1,600')
        })

        it('correctly displays extremely large numbers', ()=>{
            butn4.simulate('click');
            for(let i=0; i<=13; i++){
                butn0.simulate('click');
            }
            wrapper.find('#calc-multiply').simulate('click');            
            butn4.simulate('click');
            for(let i=0; i<=13; i++){
                butn0.simulate('click');
            }
            wrapper.find('#calc-equal').simulate('click');
            expect(wrapper.find('.display').text()).toBe('Err')            
        })
    })
})
