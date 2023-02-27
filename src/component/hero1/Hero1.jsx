import React from 'react'
import './hero1.css'

export default function Hero1() {
    return (
        <div className='hero1'>
            <div className='part1'>
                <img className='personaje' src={require('../../assets/image/manga.png')} alt="manga" />
                <img className='image3' src={require('../../assets/image/image3.png')} alt="card" />

                <div className='text-conteiner'>
                    <h1 className='h1-hero'>Trigun Stampede</h1>
                    <h2 className='h2-hero'>Manga</h2>
                    <p className='p-hero'>TRIGUN is a popular action manga by Yasuhiro Nightow that follows the story of Vash Stampede, a legendary gunfighter and pacifist with a huge bounty on his head.</p>
                </div>
            </div>

        </div>
    )
}
