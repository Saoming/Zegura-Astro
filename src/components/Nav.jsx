import React from 'react';

const NavigationMenu = ({showMenu, setShowMenu}) => {

    if(showMenu == false) {
        return null
    }

    return (
        <div className='w-full h-full z-50'>
            <div className="fixed top-0 left-0 w-full h-full bg-lightDark opacity-30 z-10"></div>
            <nav className="fixed w-1/2 h-full  top-0 right-0 z-50 text-black text-5xl bg-white">
                <div className='relative w-full h-full'>
                    <button className='absolute top-0 right-0' onClick={() => setShowMenu(false)}> Close </button>
                    hello    
                </div>
            </nav>
        </div>
    )
}

export default NavigationMenu;