import Card from './Card.jsx';

const Cards = ({
  menuCards,
  addPledge,
  showThankYou,
  cards,
  setCards,
  activePledge,
  setActivePledge,
  showMenuPledges
}) => {


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
          {filteredCards.map((card, index) => (
            <Card
              key={card.title}
              card={card}
              index={index}
              menuCards={menuCards}
              showThankYou={showThankYou}
              cards={cards}
              setCards={setCards}
              activePledge={activePledge}
              setActivePledge={setActivePledge}
              showMenuPledges={showMenuPledges}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Cards;
