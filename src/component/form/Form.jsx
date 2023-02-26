import React from 'react'
import './form.css'
import Google from '../../assets/image/Google.png'
import IconoAr from '../../assets/image/ico-ar.png'
import IconoLock from '../../assets/image/ico-lock.png'
import IconoProfile from '../../assets/image/ico-profile.png'



export default function Form() {
    return (
        <div className='div-form'>
            <div className='imagenformulario'>

            </div>
            <form className='form-container'>
                <h3 className='welcome'>Welcome!</h3>
                <h5 className='tex-form'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</h5>

                <fieldset>
                    <img src={IconoProfile} className='icono-ar' alt="" />

                    <legend>
                        Name
                    </legend>
                    <label htmlFor="name">
                        <input className='input-form' type="text" id='name' placeholder='Krowl Bell' required />
                    </label>
                </fieldset>

                <fieldset>
                    <img src={IconoAr} className='icono-ar' alt="" />
                    <legend>
                        Email
                    </legend>
                    <label htmlFor="email">
                        <input className='input-form' type="email" id='email' placeholder='DragonballZ@Krowl.com' required />
                    </label>
                </fieldset>

                <fieldset>
                    <img src={IconoLock} className='icono-ar' alt="" />

                    <legend>
                        Password
                    </legend>
                    <label htmlFor="password">
                        <input className='input-form' type="password" id='password' placeholder='*******' required />
                    </label>
                </fieldset>

                <fieldset>
                    <img src={IconoLock} className='icono-ar' alt="" />

                    <legend>
                        Confirm password
                    </legend>
                    <label htmlFor="confirm-password">
                        <input className='input-form' type="password" id='confirm-password' placeholder='*******' required />
                    </label>
                </fieldset>

                <div className='checkbox-conteiner'>
                    <input className='input-check' type="checkbox" id='notification' />
                    <label htmlFor="notification" >Send notification to my email
                    </label>
                </div>

                <input type="submit" className='button-form' value="Sing up" />

                <button className='button-form-google'><img src={Google} className='google' alt="icono-google" /> Sing in whit google </button>
                <p>Already have an account <a href="#" className='anchor-form'>Log in</a></p>
                <p>Go back to <a href="#" className='anchor-form'>Home page</a></p>
            </form>

        </div >
    )
}
