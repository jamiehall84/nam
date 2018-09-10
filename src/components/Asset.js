import React from 'react';
import Proptypes from 'prop-types';

const Asset = ({ name, description, location }) => (
    <li>{name} - {description} - Lat: {location.latitude} Lon: {location.longitude}</li>
)

Asset.prototypes = {
    name: Proptypes.string.isRequired
}

export default Asset