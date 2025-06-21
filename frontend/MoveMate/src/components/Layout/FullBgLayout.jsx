import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BackgroundEffect = () => {
  return (
    <div className="absolute w-full h-min-screen flex inset-0  opacity-60 z-0">
      <div className="w-[25%] bg-gray-600 "></div>
      <div className="w-[75%] bg-white"></div>
    </div>
  );
};

export { BackgroundEffect };

const FullBgLayout = ()=>(WrappedComponent) => {
    return (props)=>{

        return (
            <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffect />
      <div className="relative z-10 flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-1  min-h-screen">
            <WrappedComponent {...props}/>
         </main>
        <Footer />
      </div>
    </div>
  );
}
};

export default FullBgLayout;
