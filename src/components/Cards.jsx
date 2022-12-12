import { useState } from 'react'
import Card from './Card.jsx'

const Cards = ({
    menuCards,
    addPledge,
    showMenuPledges,
    options,
}) => {

    const [cards, setCards] = useState(options)

    const [activePledge, setActivePledge] = useState(null)
    
    const filteredCards = cards.filter(card => 
        card.subtitle
    )

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
                        />
                ))}

            </>
        ) : (
            <>
                {
                filteredCards.map(card => (
                    <Card
                    key={card.title}
                    card={card}
                    menuCards={menuCards}
                    type={card.amount === 0 ? 'no-stock' : ''}
                    showMenuPledges={showMenuPledges}
                    />
                ))}
            </>
        )
        }
    </>
    )}

export default Cards