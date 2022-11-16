import './Card.css'
import EnterPledge from './EnterPledge.jsx'

const Card = ({
  card,
  menuCards,
  type}) => {
  
  const { title, subtitle, description, amount } = card
  
  return (
  <div className={`card-style ${type}`} tabIndex='1'>

      <div className='flex-row'>
        {menuCards && 
        <div id='ball'>
          <div id="green-ball"></div>
        </div>
        }
        <div className='card-title'>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>

      <p>{description}</p>
        
      <div id='flex1'>
        <p className={`num-left ${menuCards ? 'num-left-modal' : '' }`}>{amount}</p>

        {subtitle && <p>left</p>}
      </div>

      {menuCards && amount > 0 ? (
        <EnterPledge/>

      ) : (
      <button>Select Reward</button>

      )} 
      
  </div>


  )}

export default Card