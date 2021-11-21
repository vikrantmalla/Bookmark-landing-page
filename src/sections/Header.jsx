import React from 'react'
import Button from '../utillits/Button'

const Header = () => {
    return (
        <>
            <section className="banner-header">
                <div className="banner">
                <img src="images/illustration-hero.svg" alt="banner-img"/>
                <div className="banner-desc">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <Button />
                </div>
                </div>
            </section>

        </>
    )
}

export default Header


