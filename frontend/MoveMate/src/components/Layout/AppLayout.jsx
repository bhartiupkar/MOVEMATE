import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Founder from '../Cards/Founder'
import Review from '../Cards/Review'

const AppLayout = ({founder=false, review=false}={}) => (WrappedComponent)=>{
    console.log("founder -- > ", founder)
    return (props)=>{


        return (
            <div>
            <Navbar/>
            {/* <div> */}
                <WrappedComponent {...props} />
            {/* </div> */}
            {founder && <Founder/>}
            {review && <Review/>}
            <Footer/>
      
    </div>
  )
}
}

export default AppLayout
