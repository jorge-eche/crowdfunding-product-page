import Cards from "./Cards"
import './MenuPledges.css'

const MenuPledges = ({
  menuCards,
  addPledge,
  hideModal,
  showThankYou,
  cards,
  setCards,
}) => {
  return (
    <div
      className={`container container-modal-cards ${
        menuCards ? 'animate-menu-pledge' : undefined
      } `}
    >
      <div className="header-modalcards">
        <div id="close-menu-pledges" onClick={hideModal}>
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill="#000"
              fillRule="evenodd"
              opacity=".4"
            />
          </svg>
        </div>

        <h1>Back this project</h1>

        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>

      <Cards
        menuCards={menuCards}
        addPledge={addPledge}
        showThankYou={showThankYou}
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

export default MenuPledges