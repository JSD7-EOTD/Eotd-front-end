import React from 'react'
import Navbar from '../../components/B_Navbar/Navbar'
import Footer from '../../components/B_Footer/Footer'
import Error from '../../components/D_Error/Error'

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <Error />
      <Footer />
    </div>
  )
}

export default ErrorPage