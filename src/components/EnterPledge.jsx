import { useState, useEffect } from "react";
import "./EnterPledge.css";

const EnterPledge = ({ 
  card, 
  activePledge, 
  index,
  addPledge,
  showThankYou,
  updatePledges
 }) => {

  const [price, setPrice] = useState(0) 

  useEffect(() => {
    if (activePledge === index) {
        setPrice(card.pledge)
    }
  }, [activePledge])
  
  const enforceMin = ()=> {
    if (price < card.pledge) {
      setPrice(card.pledge)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    const question = confirm(`Do you want to pledge for $${price}?`)
    if (question) {
      addPledge(price)

      updatePledges()

      showThankYou()
    }
  }

  return (
    activePledge === index && (
      <div id="enter-pledge">
          <form 
          id="form-enter-pledge" 
          onSubmit={handleSubmit}
          >
            <p>Enter your pledge</p>
            
            <div id="flex-input-button">
              <div
              id="div-input-pledge">
                
                <span>$</span>                
                <input 
                type="number" 
                value={price} 
                min={card.pledge}
                onChange={e => setPrice(e.target.value)}
                onKeyUp={enforceMin}
                autoFocus
                />
              </div>             

              <input type="submit" value="Continue" />
            </div>
          </form>          
      </div>
    )
  );
};

export default EnterPledge;
