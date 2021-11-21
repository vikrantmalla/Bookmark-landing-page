import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-left">
                    <img src="images/logo-bookmark-footer.svg" alt="footer_logo" />
                    <ul>
                        <li>Feature</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="social_media">
                        <i className="fab fa-facebook-square" alt="facebook" />
                        <i className="fab fa-twitter" alt="twitter" />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Footer
