import React from 'react';
import Button from './Button'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

describe('<Button/>', ()=>{
    const buttonDisplay = 1;
    const wrapper = shallow(<Button label={buttonDisplay} operation={
        ()=>{}
    }/>)

    it('Should display correct value', ()=>{
        expect(wrapper.text()).toContain(buttonDisplay);
    })

})
