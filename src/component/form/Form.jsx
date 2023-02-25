import React from 'react'
import './form.css'

export default function Form() {
    return (
        <div className='div-form'>
            <div className='imagenformulario'>

            </div>
            <form className='form-container'>
                <h3 className='welcome'>Welcome!</h3>
                <h5 className='tex-form'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</h5>

                <fieldset>
                    <legend>
                        Name
                    </legend>
                    <label htmlFor="name">
                        <input type="text" id='name' required />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>
                        Email
                    </legend>
                    <label htmlFor="email">
                        <input type="email" id='email' required />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>
                        Password
                    </legend>
                    <label htmlFor="password">
                        <input type="password" id='password' required />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>
                        Confirm password
                    </legend>
                    <label htmlFor="confirm-password">
                        <input type="password" id='confirm-password' required />
                    </label>
                </fieldset>
                
                <label htmlFor="notification" className='checkbox-form'>Send notification to my email
                    <input type="checkbox" id='notification' />
                </label>
                
                <input type="submit" className='button-form' value="Sing up" />
                
                <button className='button-form-google'><img src={require('../../assets/image/Google.png')} className='google' alt="icono-google" /> Sing in whit google </button>
                <p>Already have an account <a href="#" className='anchor-form'>Log in</a></p>
                <p>Go back to <a href="#" className='anchor-form'>Home page</a></p>
            </form>

        </div >
    )
}
