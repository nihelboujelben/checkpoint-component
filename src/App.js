import React from 'react';
import './App.css';

import ProfilPhoto from './profile/ProfilPhoto.js'
import FulName from './profile/FullName.js'
import Address from './profile/Address.js'
const Main = () => {
    return (
        <div>
            <ProfilPhoto/>
            <FulName/>
            <Address/>
        </div>
    )
}

export default Main;