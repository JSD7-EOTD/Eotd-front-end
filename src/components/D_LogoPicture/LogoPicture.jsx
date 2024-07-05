import React from 'react'

const LogoPicture = () => {
  return (
    <div className="flex flex-col items-center md:justify-center text-center md:w-1/2 bg-gradient-to-r from-[#794222] to-[#BD8356] text-white p-6">
    <img src="../../public/images/icon/logo-white.png" alt="Logo" className="w-20 md:w-40" />
    <h1 className="font-bold md:text-4xl text-2xl mt-4">Welcome to PUEY PUEY!</h1>
    <p className="text-center mt-4 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ut laoreet velit ma.</p>
  </div>
  )
}

export default LogoPicture