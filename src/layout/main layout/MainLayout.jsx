import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'

export default function MainLayout(props) {
    let {children} = props
    return (
    <div>
      <Header/>
      <Footer/>
      {children}
    </div>
  )
}
