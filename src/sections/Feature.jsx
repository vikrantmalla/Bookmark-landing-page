import React from 'react'
import Tabs from '../components/Tabs'


const Feature = () => {

    return (

        <>
            <section className="feature">
                <div className="feature-desc">
                    <h2>
                        Features
                    </h2>
                    <p>
                        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </div>
                <div className="bloc-tabs">
                <Tabs />
                </div>


                
            </section>
        </>
    )
}

export default Feature