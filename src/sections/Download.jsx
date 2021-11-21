import React from 'react'
import Extension from '../components/Extension'

const Download = () => {
    return (
        <>
            <section className="download">
                <div className="download-desc">
                    <h2>Download the extension</h2>
                    <p>  We’ve got more browsers in the pipeline. Please do let us know if you’ve
                        got a favourite you’d like us to prioritize.</p>
                </div>
                <section className="extension-cards">
                    <Extension />
                </section>
            </section>
        </>
    )
}

export default Download
