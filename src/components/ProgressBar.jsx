import { useState, useEffect } from 'react'
import { roundNumber } from '../helpers'
import './ProgressBar.css'

const ProgressBar = ({funds}) => {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const percentage = (funds * 100) / 100000
    let roundedPercentage = roundNumber(percentage)
    if (roundedPercentage > 100) roundedPercentage = 100
    setProgress(roundedPercentage)
  }, [funds])
  

  return (
    <div id="bar">
    <div id="progress" style={{ width: `${progress}%`}} ></div>
    </div>
  )
}

export default ProgressBar