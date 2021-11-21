import React, { useState, useEffect } from 'react'
import Header from '../sections/Header'
import Feature from '../sections/Feature'
import Download from '../sections/Download'
import Faq from '../sections/Faq'
import Subscribe from '../sections/Subscribe'
import Footer from '../sections/Footer'



const Home = () => {
    const [active, setactive] = useState(false);
    const toggleClass = () => {
        setactive(!active);
    };
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    useEffect(() => {
        if (width > 900) {
            setactive(false);
        }
    }, [width, active]);
    return (
        <>
            <div className={active ? "App active" : "App"}>
                <div className="nav_dekstop">
                    <img className="logo" src="images/logo-bookmark.svg" alt="logo-bookmark" />
                    <div className="dekstop_navItems">
                        <ul>
                            <li className='nav-item'>
                                Features
                            </li>
                            <li className='nav-item'>
                                Pricing
                            </li>
                            <li className='nav-item'>
                                Contact
                            </li>
                        </ul>
                        <button>LOGIN</button>
                    </div>
                </div>
                <div className={active ? "nav active" : "nav"}>
                    <img className="logo" src={active ? "images/mobnav_logo.svg" : "images/logo-bookmark.svg"} alt="logo-bookmark" />
                    <div className="ham" onClick={() => { toggleClass() }}>
                        <i className={active ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className={active ? "nav_active active" : "nav_active"}>
                        <div className="mobile_navItems">
                            <ul>
                                <li className='nav-item'>
                                    Features
                                </li>
                                <li className='nav-item'>
                                    Pricing
                                </li>
                                <li className='nav-item'>
                                    Contact
                                </li>
                            </ul>
                            <button>LOGIN</button>
                            <div className="social-media">
                                <i className="fab fa-facebook-square" alt="facebook"/>
                                <i className="fab fa-twitter" alt="twitter"/>
                            </div>
                        </div>

                    </div>
                </div>
                <Header />
                <Feature />
                <Download />
                <Faq />
                <Subscribe />
                <Footer />
            </div>

        </>
    )
}

export default Home
