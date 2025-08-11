import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div >
            <nav className='bg-[#f5f5f7] shadow-sm'>
                <Navbar/>
            </nav>
            <main className=' '>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;