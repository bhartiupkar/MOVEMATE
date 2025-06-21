import React from 'react'
import MovingMoveMate from './MovingMoveMate'
const ReverseMoveMate = ({classStyle,textSize}) => {
    return (
        <div className="flex justify-center">
            <div className={`${classStyle?classStyle:"flex flex-col items-center justify-center w-[42rem] rounded-[50px] h-48 bg-yellow-400 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] px-6 "}`}>
                {/* Original Text */}
                <MovingMoveMate word="M O \/ E M A T E " textSize={`${textSize?textSize:'text-7xl'}`} />

                {/* Reversed Text */}
                <MovingMoveMate word="W O /\ E W ∀ ⊥ E " dir='down' textSize={`${textSize?textSize:'text-7xl'}`} />
            </div>
        </div>
    )
}

export default ReverseMoveMate
