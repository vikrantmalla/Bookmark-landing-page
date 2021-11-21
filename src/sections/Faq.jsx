import React from 'react'
import Question from '../components/Question'
import FaqButton from '../utillits/FaqButton';

const Faq = () => {

    return (
        <>

            <section className="faq">
                <div className="faq-text">
                    <h2>Frequently Asked Questions</h2>
                    <p>Here are some of our FAQs. If you have any other questions you’d like
                        answered please feel free to email us.</p>
                </div>
                <div className="faq-container">
                <Question />   
                </div>
                <FaqButton/>
            </section>


        </>
    )
}

export default Faq


