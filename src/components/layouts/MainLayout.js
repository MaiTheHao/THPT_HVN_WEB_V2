import React from 'react'
import Header from './part/Header'
import Footer from './part/Footer'

function MainLayout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}

export default MainLayout