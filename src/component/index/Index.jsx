import React from 'react'
import './index.css'
import Background from '../background/Background'
import Divboton from '../divBoton/Divboton'
import Form from '../form/Form'
import Hero1 from '../hero1/Hero1'
import NavBar from '../navbar/NavBar'



export default function Index() {
    return (
        <>
            <div className='home'>
                <NavBar />
                <div className='hero'>
                    <Hero1 />
                    <Background />
                    <Divboton />
                </div>
                <div className='conteiner-hero2'>
                    <Form />
                </div>
            </div>
        </>

    )
}
