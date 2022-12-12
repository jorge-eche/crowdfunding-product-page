import MenuHeader from "./MenuHeader"
import MenuPledges from "./MenuPledges"
import ThankYou from "./ThankYou"
import BookmarkModal from "./BookmarkModal"
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
    showMenuPledges,
    isBookmark,
    setIsBookmark,
    options
}) => {

  const hideModal = ()=> {
    setMenuCards(false)
    setMenuHeader(false)
    setIsThankYou(false)
    setIsBookmark(false)

    setTimeout(() => {
      setModal(false)      
    }, 500);
  }

    return (
    <div className="modal">
       {menuHeader && 
       <MenuHeader
       setModal={setModal}
       hideModal={hideModal}
       showMenuPledges={showMenuPledges}
       setMenuHeader={setMenuHeader}
       />}

       {menuCards && 
       <MenuPledges 
        menuCards={menuCards}
        addPledge={addPledge}
        hideModal={hideModal}
        options={options}
       />}

       {isThankYou && <ThankYou hideModal={hideModal}/>}

       {isBookmark && <BookmarkModal hideModal={hideModal}/>}

    </div>
  )
}

export default Modal