import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {

    const navigation = useNavigation();
    const isNavigatig = Boolean(navigation.location);

    return (
        <div>
            <Header></Header>
            <div className='flex gap-10'>
                <Sidebar></Sidebar>
                {isNavigatig && <span className='text-4xl'>Loading................</span>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;