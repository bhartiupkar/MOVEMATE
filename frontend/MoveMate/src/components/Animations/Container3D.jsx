import React from 'react'
import Tilt from 'react-parallax-tilt';

const Container3D = ({ children }) => {
    return (
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true}>
            <div >
                {children}
            </div>
        </Tilt>
    )
}

export default Container3D
