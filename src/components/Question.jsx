import React, { useState } from 'react'
import faqApi from '../api/faqApi';

const Question = () => {
    const [toggleFaq, setToggleFaq] = useState(false)
    const handleToggle = (id) => {
        if (toggleFaq === id) {
            return setToggleFaq(null);
        }
        setToggleFaq(id);
    };

    return (
        <>
            {faqApi.map((curElem) => {
                const { id, question, answer } = curElem;
                return (
                    <div className="faq-section" key={id} onClick={() => handleToggle(id)} >
                        <div className="question-section">
                            <h4>{question}</h4>
                            <div className="arrow-icon">
                                <i className={toggleFaq === id ? 'fas fa-chevron-up active' : 'fas fa-chevron-down'} />
                            </div>
                        </div>
                        <div className="answer-section">
                            {toggleFaq === id && <p>{answer}</p>}
                        </div>
                    </div>

                )
            })}
        </>
    )
}

export default Question
