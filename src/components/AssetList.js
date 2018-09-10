import React from 'react';
import Proptypes from 'prop-types';
import Asset from './Asset';

const AssetList = ({ assets }) => (
    <ul>
        {assets.length > 0 ?
        assets.map(asset =>
            <Asset
                key={asset.id}
                {...asset}
        />):
            <p>There are not currently any assets in the register.</p>
        }
    </ul>
)

AssetList.prototypes = {
    assets: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            name: Proptypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default AssetList