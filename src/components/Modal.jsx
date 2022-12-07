import MenuHeader from "./MenuHeader"
import MenuPledges from "./MenuPledges"
import ThankYou from "./ThankYou"
import './Modal.css'

const Modal = ({
    setModal,
    menuHeader,
    setMenuHeader,
    menuCards,
    setMenuCards,
    addPledge,
    isThankYou
}) => {

  const hideModal = ()=> {
    setMenuCards(false)
    setMenuHeader(false)

    setTimeout(() => {
      setModal(false)      
    }, 500);
  }

  return (
    <div className="modal">
       {menuHeader && 
       <MenuHeader
       setModal={setModal}
       setMenuHeader={setMenuHeader}
       setMenuCards={setMenuCards}
       hideModal={hideModal}
       />}

       {menuCards && 
       <MenuPledges 
        setModal={setModal}
        setMenuHeader={setMenuHeader}
        menuCards={menuCards}
        setMenuCards={setMenuCards}
        addPledge={addPledge}
        hideModal={hideModal}
       />}

       {isThankYou &&
       <ThankYou/>
       }

    </div>
  )
}

export default Modal