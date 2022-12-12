import { useState, useEffect } from 'react'
import { roundNumber } from '../helpers'
import './ProgressBar.css'

const ProgressBar = ({funds}) => {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const percentage = (funds * 100) / 100000
    const roundedPercentage = roundNumber(percentage)
    setProgress(roundedPercentage)
  }, [funds])
  

  return (
    <div id="bar">
    <div id="progress" style={{ width: `${progress}%`}} ></div>
    </div>
  )
}

export default ProgressBar