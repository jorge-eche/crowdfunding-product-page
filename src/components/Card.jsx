import { useState } from 'react'
import './Card.css'
import EnterPledge from './EnterPledge.jsx'


const Card = ({
  card,
  index,
  menuCards,
  type,
  activePledge,
  setActivePledge,
  addPledge,
  showMenuPledges
}) => {
  
  const [ cardAmount, setCardAmount ] = useState(card.amount)

  const { title, subtitle, description } = card

  const handleOnClick = () => {
    setActivePledge(index)
  }
  
  return (
  <div 
  className={
    `card-style 
    ${type} 
    ${menuCards ? 'card-style-modal' : undefined}`} 
  tabIndex='1'
  onClick={handleOnClick}
  >
    <div id='card-margin'>
      <div className='flex-row'>

          {menuCards && 
          <div id='ball'>
            <div id="green-ball"></div>
          </div>
          }

          <div className={`card-title ${menuCards ? 'card-title-modal' : undefined}`}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>          
      </div>

      <p className='pledge-description'>{description}</p>

      <div id={!menuCards ? "flex2" : undefined} className={menuCards ? 'move-numbers' : undefined}>

        <div id='flex1'>
          <p className={`num-left ${menuCards ? 'num-left-modal' : '' }`}>{cardAmount}</p>
          {subtitle && <p>left</p>}
        </div>

        {!menuCards && <button onClick={cardAmount !== 0 ? showMenuPledges : undefined}>Select Reward</button>}
      </div>  
    </div>
      {menuCards && cardAmount > 0 || menuCards && !subtitle ? (
        <EnterPledge
        card={card}
        activePledge={activePledge}
        index={index}
        addPledge={addPledge}
        />

      ) : ''} 
      
  </div>
  )}

export default Card