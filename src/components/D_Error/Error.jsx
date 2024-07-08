import React from 'react'

const Error = () => {
  return (
    <div className="md:flex relative mt-24 md:p-40 p-20 place-content-center gap-5 space-y-4">
      <div>
        <img src="../../../public/images/delivery.png" alt="order success" className="md:h-[200px]"/>
      </div>
      <div className="content-center text-center space-y-4">
        <h1 class="text-3xl font-bold text-[#794222]">ERROR</h1>
<div><a href="#" class=" hover:bg-[#794222] hover:text-white border rounded-2xl p-2 font-bold">Back to main menu</a></div>
      </div>
    </div>
  )
}

export default Error