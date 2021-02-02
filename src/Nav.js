import React, { useState, useEffect} from 'react';
function Nav() {
    const [show, handleShow] = useState(false);
    
    /* change nav-color on scrolling */    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 80 ){
                handleShow(true)
            } else {
                handleShow(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })
    }, [])


    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img 
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Netflix Logo" />
            <img 
            src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg"
            alt="Netflix Logo"
            className="user" />
        </div>
    )
}

export default Nav
