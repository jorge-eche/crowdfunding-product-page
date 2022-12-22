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
  showMenuPledges,
  setIsBookmark,
  showThankYou,
  cards,
  setCards,
  activePledge,
  setActivePledge
}) => {
  const hideModal = () => {
    setActivePledge(null) 
    setMenuCards(false);
    setMenuHeader(false);
    setIsThankYou(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      {menuHeader && (
        <MenuHeader
          setModal={setModal}
          hideModal={hideModal}
          showMenuPledges={showMenuPledges}
          setMenuHeader={setMenuHeader}
        />
      )}

      {menuCards && (
        <MenuPledges
          menuCards={menuCards}
          addPledge={addPledge}
          hideModal={hideModal}
          showThankYou={showThankYou}
          cards={cards}
          setCards={setCards}
          activePledge={activePledge}
          setActivePledge={setActivePledge}
        />
      )}

      {isThankYou && <ThankYou hideModal={hideModal} />}

    </div>
  );
};

export default Modal