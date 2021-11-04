import React from 'react';
import Controls from './Controls'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

describe('<Controls/>', ()=>{
    const children = 'This is a test';
    const wrapper = shallow(<Controls>{children}</Controls>)

    it('Renders with children', ()=>{
        expect(wrapper.children().text()).toEqual(children);
    })
})
