import { useLocation, useNavigate } from 'react-router-dom';
import {
    MenuOpenIcon,
    BaseLogoIcon,
    BellIcon,
} from '../assets/icons';
import { useEffect, useState } from 'react';

export default function Header({ setMobileMenuOpen }) {
    const navigate = useNavigate();
    const [pageName, setPageName] = useState('');
    const location = useLocation();

    useEffect(() => {
        const pagePath = location.pathname.split('/');
        setPageName(pagePath[1] || 'Home');
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem("email");
        navigate('/');

    }
    return (
        <header className='w-full grid grid-cols-[1fr_auto]  items-center py-3 px-4 tablet:px-8 gap-4'>
            <div className='flex items-center gap-2 tablet:gap-4'>
                <div
                    className='block tablet:hidden text-black-12'
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <MenuOpenIcon width={24} height={24} />
                </div>
                    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Type to search.....'/>
                <div className='flex gap-3 items-center w-[150px] md:hidden'>
                    <span className='flex items-center text-white-10 font-bold text-3xl gap-2 pb-8'>
                        Dunlin <BaseLogoIcon />
                    </span>  
                </div>
            </div>
            <div className='flex items-center justify-end tablet:gap-6 text-black-30 gap-4 '>
                <BellIcon />
                <img src="/logout.svg" alt="logout" className='h-6 w-6' onClick={handleLogout} />
                <div className='flex justify-center items-center gap-4'>
                    <div className='flex-row text-right '>
                    <h1 className='font-normal text-md'>Thomas Anree</h1>
                    <p className='font-normal text-xs'> Ux Designer </p>
                    </div>
                    <div>
                        <img src="/mask.png" alt='mask' className='w-10 h-10 rounded-full' />
                    </div>
                   
                </div>
            </div>
        </header>
    );
}
