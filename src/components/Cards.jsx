import { useState } from 'react';
import Card from './Card.jsx';

const Cards = ({
  menuCards,
  addPledge,
  showMenuPledges,
  showThankYou,
  cards,
  setCards,
}) => {
  const [activePledge, setActivePledge] = useState(null);

  const filteredCards = cards.filter((card) => card.subtitle);

  return (
    <>
      {menuCards ? (
        <>
          {cards.map((card, index) => (
            <Card
              key={card.title}
              card={card}
              index={index}
              menuCards={menuCards}
              type={card.amount === 0 ? 'no-stock' : ''}
              activePledge={activePledge}
              setActivePledge={setActivePledge}
              addPledge={addPledge}
              showThankYou={showThankYou}
              cards={cards}
              setCards={setCards}
            />
          ))}
        </>
      ) : (
        <>
          {filteredCards.map((card) => (
            <Card
              key={card.title}
              card={card}
              menuCards={menuCards}
              showMenuPledges={showMenuPledges}
              showThankYou={showThankYou}
              cards={cards}
              setCards={setCards}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Cards;
