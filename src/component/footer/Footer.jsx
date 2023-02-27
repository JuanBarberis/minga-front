import React from 'react'
import './footer.css'
import ImageFooter from '../../assets/image/image-footer.png'
import Logo from '../../assets/image/logo-minga.png'
import Youtube from '../../assets/image/Youtube..png'
import Facebook from '../../assets/image/facebook1.png'
import Twitter from '../../assets/image/twitter1.png'
import Vimeo from '../../assets/image/vimeo1.png'
import Union from '../../assets/image/Union.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="divFoteerSup">
                <img className="imgfooter" src={ImageFooter} />
                <div className="divSubscripcion">
                    <h2 className="tituloSubcribe">Subscribe</h2>
                    <div className="seccionSubscribe">
                        <input
                            className="inputsubscribe"
                            type="text"
                            placeholder="Enter your Email"
                        />
                        <button className="botonSubscribe" type="button">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="divFooterInf">
                <div className="footerInfText">
                    <h3>Home</h3>
                    <h3>Manga</h3>
                </div>
                <div className="logofooter">
                    <img className="imglogofooter" src={Logo} />
                </div>
                <div className="rrssFooter">
                    <div className="rrsslogos">
                        <img className='logos-footer' src={Facebook}/>
                        <img className='logos-footer' src={Twitter} />
                        <img className='logos-footer' src={Vimeo} />
                        <img className='logos-footer' src={Youtube} />
                    </div>
                    <div>
                        <button className="botonDonate" type="button">
                            Donate
                            <img  className='logo-union' src={Union}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
