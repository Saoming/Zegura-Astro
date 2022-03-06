import React from "react"

const MenuButton = ({children, link}) => {


return (
        <li className="desktop-list grid items-end border-r border-lightWhite dark:border-lightGray relative">
            <a href={link} className="text-2xl font-normal dark:text-white dark:hover:text-white text-black">
                {children}
            </a>
        </li>
    )   
}

export default MenuButton