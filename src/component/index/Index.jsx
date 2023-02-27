import React from 'react'
import './index.css'
import Background from '../background/Background'
import Divboton from '../divBoton/Divboton'
import Form from '../form/Form'
import Hero1 from '../hero1/Hero1'
import Footer from '../footer/Footer'



export default function Index() {
    return (
        <>
            <div className='home'>

                <div className='hero'>
                    <Hero1 />
                    <Background />
                    <Divboton />
                </div>
                <div className='conteiner-hero2'>
                    <Form />
                    <Footer />
                </div>
            </div>


        </>

    )
}
