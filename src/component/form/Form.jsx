import { useRef } from 'react'
import './form.css'
import axios from 'axios'
import Google from '../../assets/image/Google.png'
import IconoAr from '../../assets/image/ico-ar.png'
import IconoLock from '../../assets/image/ico-lock.png'
import IconoProfile from '../../assets/image/ico-profile.png'



export default function Form() {
    let name = useRef()
    let email = useRef()
    let password = useRef()
    
    let form= document.querySelector("form")

    
    async function handleSubmit(event) {
        event.preventDefault()
        

        let data = {
            [name.current.name]: name.current.value,
            [email.current.name]: email.current.value,
            [password.current.name]: password.current.value,
          


        }
       
        let url = 'http://localhost:8080/users'
        try {
          await  axios.post(url,data)
          form.reset()
        } catch (error){
            console.log(error)
            console.log('ocurrio un error')
            
        }
    }

    return (
        <div className='div-form'>
            <div className='imagenformulario'>

            </div>
            <form className='form-container' onSubmit={handleSubmit}>
                <h3 className='welcome'>Welcome!</h3>
                <h5 className='tex-form'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</h5>

                <fieldset>
                    <img src={IconoProfile} className='icono-ar' alt="" />
                    <legend>
                        Name
                    </legend>
                    <label htmlFor="name">
                        <input ref={name} className='input-form' type="text" id='name' name='name' placeholder='Krowl Bell' required />
                    </label>
                </fieldset>

                <fieldset>
                    <img src={IconoAr} className='icono-ar' alt="" />
                    <legend>
                        Email
                    </legend>
                    <label htmlFor="email">
                        <input ref={email} className='input-form' type="email" id='email' name='email' placeholder='DragonballZ@Krowl.com' required />
                    </label>
                </fieldset>

                <fieldset>
                    <img src={IconoLock} className='icono-ar' alt="" />
                    <legend>
                        Password
                    </legend>
                    <label htmlFor="password">
                        <input ref={password} className='input-form' type="password" id='password' name='password' placeholder='*******' required />
                    </label>
                </fieldset>

                <fieldset>
                    <img src={IconoLock} className='icono-ar' alt="" />
                    <legend>
                        Confirm password
                    </legend>
                    <label htmlFor="confirm-password">
                        <input  className='input-form' type="password" id='confirm-password' name='confirm-password' placeholder='*******' required />
                    </label>
                </fieldset>

                <div className='checkbox-conteiner'>
                    <input  className='input-check' type="checkbox" id='notification' name='confirmEmail' />
                    <label htmlFor="notification" >Send notification to my email
                    </label>
                </div>

                <input type="submit" className='button-form' value="Sing up" name='submit' />

                <button className='button-form-google'><img src={Google} className='google' alt="icono-google" /> Sing in whit google </button>
                <p>Already have an account <a href="#" className='anchor-form'>Log in</a></p>
                <p>Go back to <a href="#" className='anchor-form'>Home page</a></p>
            </form>

        </div >
    )
}
