import React from 'react';
import Navigations from './navigation';
import FlashMessage from 'react-native-flash-message';


const Foresite = () => {
    return (
        <>
            <Navigations />
            <FlashMessage duration={4000} position="top" />
        </>

    );
};

export default Foresite;