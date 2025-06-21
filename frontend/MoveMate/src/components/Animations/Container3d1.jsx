import React from 'react'
import Tilt from 'react-parallax-tilt';

const Container3D1 = ({ children,anglex,angley }) => {
    return (
        <Tilt tiltMaxAngleX={anglex||45} tiltMaxAngleY={angley||45} glareEnable={true} className='shadow-'>
            <div >
                {children}
            </div>
        </Tilt>
    )
}

export default Container3D1