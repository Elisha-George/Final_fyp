import React, { Children } from 'react'
import {Footer}  from './Footer'
import Header from './Header'

export const Layout = ({children}) => {
  return (
    <>
    <Header />   
      <main>
      {children}
      </main>
       
    </>
  )
}
