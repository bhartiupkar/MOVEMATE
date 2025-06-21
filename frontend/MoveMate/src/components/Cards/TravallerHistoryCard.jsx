import React from 'react'
import ShowTravellerHistoryCard from './ShowTravellerHistoryCard'
import { travellerHistory } from '../../assets/lists/travellerHistory'
const TravallerHistoryCard = () => {
    console.log(travellerHistory)
  return (
    <div>
        <div className='flex border-1 mx-4 rounded-4xl flex-col overflow-y-hidden'>
            {
                travellerHistory.map((item, index) =>{
                    return (
                    <ShowTravellerHistoryCard key={index} item={item} />
                    )
                }
                )
            }
        </div>
    </div>
  )
}

export default TravallerHistoryCard
