import { useState, useEffect } from 'react'
import './Card.css'
import EnterPledge from './EnterPledge.jsx'


const Card = ({
  card,
  index,
  menuCards,
  activePledge,
  setActivePledge,
  addPledge,
  showMenuPledges,
  showThankYou
}) => {
  
  const [ cardAmount, setCardAmount ] = useState(card.amount)

  const { title, subtitle, description } = card


  // useEffect(() => {
  //   const cardAmountSL = JSON.parse(localStorage.getItem('cardAmount'));
  //   if (cardAmountSL) setCardAmount(cardAmountSL);
  // }, []);

  // useEffect(() => {
  //   if (cardAmount !== card.amount)
  //   localStorage.setItem('cardAmount', JSON.stringify(cardAmount));
  // }, [cardAmount]);
  
    
  const handleOnClick = () => {
    setActivePledge(index)
  }

  const substractAmount = ()=> {
    const updateAmount = cardAmount - 1
    setCardAmount(updateAmount)
  }
  
  return (
    <div 
    className={
      `card-style 
      ${menuCards ? 'card-style-modal' : undefined}
      ${cardAmount === 0 ? 'no-stock' : ''}`
      } 
    tabIndex='1'
    onClick={menuCards ? handleOnClick : undefined}
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
          substractAmount={substractAmount}
          showThankYou={showThankYou}
          />

        ) : ''} 
        
    </div>
  )}

export default Card