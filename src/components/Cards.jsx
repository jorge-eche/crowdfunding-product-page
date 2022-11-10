import Card from './Card.jsx'
import './Cards.css'

const Cards = () => {
  return (
    <>
        <Card>
            <div className='card-title'>
                <h1>Bamboo Stand</h1>
                <h2>Pledge $25 or more</h2>
            </div>
            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                you’ll be added to a special Backer member list.
            </p>
            <div id="flex1">
                <div id='flex2'>
                    <p className='num-left'>101 </p>
                    <p>left</p>
                </div>
                
                <button>Select Reward</button>    
            </div>
        </Card>  

        <Card>
            <div className="card-title">
                <h1>Black Edition Stand</h1>
                <h2>Pledge $75 or more</h2>
            </div>
            <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included.
            </p>
            <div id="flex1">
                <div id='flex2'>
                    <p className='num-left'>64 </p>
                    <p>left</p>
                </div>            
                <button>Select Reward</button>  
            </div>  
        </Card>
        
        <Card
        type='no-stock'
        >
            <div className="card-title">
                <h1>Mahogany Special Edition</h1>
                <h2>Pledge $200 or more</h2>
            </div>
            <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included.
            </p>
            <div id="flex1">
                <div id='flex2'>
                    <p className='num-left'>0 </p>
                    <p>left</p>
                </div>            
                <button>Out of Stock</button>  
            </div>  
        </Card> 
    </>
  )
}

export default Cards