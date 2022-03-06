import React from 'react';

const NavigationMenu = ({showMenu, setShowMenu}) => {

    if(showMenu === false) {
        return null
    }
    return (
        <div>
            <div className="fixed w-full h-full bg-lightDark opacity-30 z-10"></div>
            <nav className="fixed w-1/2 h-full  top-0 right-0 z-50 text-white">
                hello    
            </nav>
        </div>
    )
}

export default NavigationMenu;