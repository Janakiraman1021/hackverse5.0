import React from 'react'
// import Navbar from './Navbar'
import SecureTransaction from './SecureTransaction';
import Footer from './Footer';
import Navbar from './Navbar';
// import Dashboard from './Dashboard';

const Home = () => {
    return (
        <div className='bg-white dark:bg-[#001938]'>
            <div>
                <SecureTransaction/>
            </div>
            {/* <div className='text-black mt-10 mb-4'>

            </div> */}
            <div className='pt-10'>
                {/* <Footer/> */}
                <Footer/>
            </div>
        </div>
    )
}

export default Home;
