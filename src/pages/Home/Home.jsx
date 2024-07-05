import React from 'react'
import Hero1 from '../../components/A_Hero1/Hero1'
import Hero2 from '../../components/A_Hero2/Hero2'
import Category from '../../components/A_Category/Category'
import Comment from '../../components/A_Comment/Comment'
import Navbar from '../../components/B_Navbar/Navbar'
import Video from '../../components/A_Video/Video'
import Footer from '../../components/B_Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Category />
      <Comment/>
      <Video />
      <Footer />
      
    </div>
  )
}

export default Home