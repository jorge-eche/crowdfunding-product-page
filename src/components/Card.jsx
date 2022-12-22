import './Card.css';
import EnterPledge from './EnterPledge.jsx';

const Card = ({
  card,
  index,
  menuCards,
  activePledge,
  setActivePledge,
  addPledge,
  showThankYou,
  cards,
  setCards,
  showMenuPledges
}) => {

  const { title, subtitle, description, amount } = card;
  
  const handleOnClick = () => {
    setActivePledge(index);
  };

  const updatePledges = () => {
    if (card.amount) {
      const cardClone = { ...card, amount: card.amount - 1 };

      const updatedList = cards.map((item) =>
        item.title === cardClone.title ? cardClone : item
      );
      setCards(updatedList);
    }
  };

  const openMenuPledges = () => {
    setActivePledge(index + 1);
    showMenuPledges()
  };

  return (
    <div
      className={`card-style 
      ${menuCards ? 'card-style-modal' : undefined}
      ${amount === 0 ? 'no-stock' : ''}`}
      tabIndex="1"
      onClick={menuCards ? handleOnClick : undefined}   
    >
      <div id="card-margin">
        <div className="flex-row">
          {menuCards && (
            <div id="ball">
              {activePledge === index && <div id="green-ball"></div>}
            </div>
          )}

          <div
            className={`card-title ${
              menuCards ? 'card-title-modal' : undefined
            }`}
          >
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
        </div>

        <p className="pledge-description">{description}</p>

        <div
          id={!menuCards ? 'flex2' : undefined}
          className={menuCards ? 'move-numbers' : undefined}
        >
          <div id="flex1">
            <p className={`num-left ${menuCards ? 'num-left-modal' : ''}`}>
              {amount}
            </p>

            {subtitle && <p>left</p>}
          </div>

          {!menuCards && (
            <button onClick={amount !== 0 ? openMenuPledges : undefined}>
              Select Reward
            </button>
          )}
        </div>
      </div>
      {(menuCards && amount > 0) || (menuCards && !subtitle) ? (
        <EnterPledge
          card={card}
          activePledge={activePledge}
          index={index}
          addPledge={addPledge}
          showThankYou={showThankYou}
          updatePledges={updatePledges}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Card;
