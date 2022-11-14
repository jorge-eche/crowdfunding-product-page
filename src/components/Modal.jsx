import MenuHeader from "./MenuHeader"
import MenuPledges from "./MenuPledges"
import './Modal.css'

const Modal = ({
    menuHeader,
    menuCards
}) => {
  return (
    <div className="modal">
       {menuHeader && <MenuHeader/>}
       {menuCards && <MenuPledges menuCards={menuCards}/>}
    </div>
  )
}

export default Modal