import React from 'react'
import Navbar from '../../components/B_Navbar/Navbar'
import ProductHero from '../../components/B_ProductHero/ProductHero'
import Filter from '../../components/B_Filter/Filter'
import FilterMobile from '../../components/B_Filter/FilterMobile'
import CardMapping from '../../components/B_CartContainer/CartContainer'
import ChangePage from '../../components/B_Pagination/Pagination'
import Footer from '../../components/B_Footer/Footer'


const ProductPage = () => {
  
 

  return (
    <div>
      <Navbar />
      <ProductHero />
      <div className="flex flex-col lg:flex-row w-full lg:justify-center">
        <div className="w-full lg:w-[432px] lg:flex lg:justify-start hidden ">
          <Filter />
        </div>
        <div className="w-full flex justify-center lg:hidden">
          <FilterMobile />
        </div>
        <div className="w-full lg:w-[1168px]">
          {/* <CardMapping productList={productList}/> */}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <ChangePage />
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage