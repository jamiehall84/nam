import React from 'react';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import AddAsset from './AddAsset';

configure({ adapter: new Adapter() })

describe('Add Asset', () => {
    let wrapper;
    let store;
    const initialState = {};
    const mockStore = configureStore();

    beforeEach(() => {
        store = mockStore(initialState)
        store.dispatch = jest.fn();
        wrapper = shallow(<AddAsset store={ store } />).dive();
     });

    it('renders the form', () => {
        expect(wrapper.exists()).toBe(true)
    });

    it('should not dispatch asset if the form is not valid', () => {
        const state = {
            name: '',
            description: 'The hydrant in front of the local post office',
            lat: '50.9618428',
            long: '-1.4261618',
          };
          wrapper.setState(state);
          wrapper.find('form').simulate('submit', {preventDefault: jest.fn()})
        expect(store.dispatch).not.toHaveBeenCalled();
    })

    it('should dispatch asset if form has been completed', () => {
        
        const state = {
            name: 'Fire Hydrant A13',
            description: 'The hydrant in front of the local post office',
            lat: '50.9618428',
            long: '-1.4261618',
          };
          wrapper.setState(state);
          wrapper.find('form').simulate('submit', { preventDefault: jest.fn() })
          expect(store.dispatch).toHaveBeenCalled();
    });
});

