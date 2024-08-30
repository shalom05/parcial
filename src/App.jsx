import { useState } from 'react'
import ScreenTravel from './Screen/Screen'


function TravelApp() {
  const [, setCount] = useState(0)

  return (
    <>
      <div id='screen'>
        <ScreenTravel></ScreenTravel>
      </div>
    </>
  )
}

export default TravelApp
