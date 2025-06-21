import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Founder from '../Cards/Founder'
import Review from '../Cards/Review'

const AppLayout = ({founder=false, review=false}={}) => (WrappedComponent)=>{
    // console.log("founder -- > ", founder)
    return (props)=>{


        return (
            <div className='flex flex-col min-h-screen'>
            <Navbar/>
            {/* <div> */}
            <main className='flex-1'>

                <WrappedComponent {...props} />
            </main>
            {/* </div> */}
            {review && <Review/>}
            {founder && <Founder/>}
            <Footer/>
      
    </div>
  )
}
}

export default AppLayout
