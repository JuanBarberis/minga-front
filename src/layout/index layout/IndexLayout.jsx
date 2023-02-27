import React from 'react'
import Header from '../../component/header/Header'

export default function IndexLayout(props) {
 let {children} = props

    return (
    <>
   
      <Header/>
      {children}
    </>
  )
}
