import React from 'react'
import useForm from '../components/form/useForm'
import validate from '../components/form/validate'

const Subscribe = () => {

    const { handleInput, userInput, handleSubmit, errors } = useForm(validate);
    return (
        <>
            <section className="subscribe">
                <div className="info">
                    <p>35,000+ already joined</p>
                    <h2>Stay up-to-date with what we’re doing</h2>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className={`form-control  ${(errors.email) ? 'error' : ''}`}>
                        <input type="text" id="emailvalidation" name="email" placeholder="email@example.com" value={userInput.email} onChange={handleInput} />
                        <i className="fas fa-exclamation-circle fa-lg"></i>
                        {errors.email && <small>{errors.email}</small>}
                    </div>
                    <div>
                        <button className="form_btn" type="submit">Contact Us</button>
                    </div>
                </form>

            </section>
        </>
    )
}

export default Subscribe
