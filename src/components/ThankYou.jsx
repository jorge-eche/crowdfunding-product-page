import './ThankYou.css'
import Check from '../img/icon-check.svg'

const ThankYou = ({hideModal}) => {
  return (
    <div className='container container-thankyou'>
      <img id='check-img' src={Check} alt="Image" />

      <h1>Thanks for your support!</h1>

      <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.</p>

      <button onClick={hideModal}>Got it!</button>
    </div>
  )
}

export default ThankYou