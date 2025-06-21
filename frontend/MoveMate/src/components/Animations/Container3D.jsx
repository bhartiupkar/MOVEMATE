import React from 'react'
import Tilt from 'react-parallax-tilt';

const Container3D = ({ children,anglex,angley,classPassed }) => {
    return (
        <Tilt tiltMaxAngleX={anglex||45} tiltMaxAngleY={angley||45} glareEnable={true} className={classPassed&&classPassed}>
            <div >
                {children}
            </div>
        </Tilt>
    )
}

export default Container3D
