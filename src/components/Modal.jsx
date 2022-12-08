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
    isThankYou,
    setIsThankYou,
    showMenuPledges
}) => {

  const hideModal = ()=> {
    setMenuCards(false)
    setMenuHeader(false)
    setIsThankYou(false)

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
       showMenuPledges={showMenuPledges}
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
       <ThankYou
       hideModal={hideModal}
       />
       }

    </div>
  )
}

export default Modal