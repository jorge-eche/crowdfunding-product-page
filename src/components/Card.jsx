import './Card.css'

const Card = ({
  card,
  type}) => {
  
  const { title, subtitle, description, amount } = card
  
  return (
    <div className={`card-style ${type}`}>
      <div className='card-title'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      <p>{description}</p>



      <div id="flex1">
        {amount && (
            <div id='flex2'>
              <p className='num-left'>{amount}</p>
              <p>left</p>
            </div>      
        )}              
        <button>Select Reward</button>    
      </div>
    </div>
  )}

export default Card