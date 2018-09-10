import React from 'react';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import AssetList from './AssetList';
import Asset from './Asset';

configure({ adapter: new Adapter() })

describe('AssetList', () => {
   
    it('renders the asset list', () => {
        const assets = [{
            id:2,
            name: 'Pump O52',
            description: 'The local pump station',
            lat: '50.9623807',
            long: '-1.4213561'
        },
        {
            id:1,
            name: 'Fire Hydrant A13',
            description: 'The hydrant in front of the local post office',
            lat: '50.9618428',
            long: '-1.4261618'
        }]
        const wrapper = shallow(<AssetList assets={assets} />);
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(Asset).length).toBe(2)
    });

    it('should show empty message when asset register is empty', () => {
        const wrapper = shallow(<AssetList assets={[]} />);
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('p').text()).toBe('There are not currently any assets in the register.')
    })

});

