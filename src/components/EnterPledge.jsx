import './EnterPledge.css'

const EnterPledge = () => {
  return (
    <div id='enter-pledge'>

        <p>Enter your pledge</p>

        <div id='flex2'>
            <div>
                <span>$</span>
                <input type="number" />
            </div>
            <input type='submit' value='Continue'/>
        </div>

  </div>
  )
}

export default EnterPledge