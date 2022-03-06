import React from 'react';

const NavigationMenu = ({showMenu, setShowMenu}) => {

    return (
        { showMenu ? (  <div>
            <div className="fixed w-full h-full bg-lightDark opacity-30 z-10"></div>
            <nav className="fixed w-1/2 h-full  top-0 right-0 z-50 text-white">
                hello    
            </nav>
        </div>
        ) : null};
    )
}

export default NavigationMenu;