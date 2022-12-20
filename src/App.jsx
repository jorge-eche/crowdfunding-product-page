import {useState, useEffect} from 'react'
import Header from './components/Header'
import BackThisProject from './components/BackThisProject'
import Stats from './components/Stats'
import About from './components/About'
import Modal from './components/Modal'

import { options } from './data/options';

function App() {
  const [funds, setFunds] = useState(JSON.parse(localStorage.getItem('funds')) ?? 89914);
  const [backers, setBackers] = useState(JSON.parse(localStorage.getItem('backers')) ?? 5007);
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) ?? options);

  const [modal, setModal] = useState(false);

  const [menuHeader, setMenuHeader] = useState(false);

  const [isBookmark, setIsBookmark] = useState(false);
  
  const [menuCards, setMenuCards] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);


//Persist funds, backers and cards (amount of the pledges) in Local Storage
  useEffect(() => {
    localStorage.setItem('funds', JSON.stringify(funds));
  }, [funds]);

  useEffect(() => {

    localStorage.setItem('backers', JSON.stringify(backers));
  }, [backers]);

  useEffect(() => {
      localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  //Adds a pledge and updates fund and backers afterwards
  const addPledge = (money) => {
    //Updates fund state
    const updateFunds = funds + Number(money);
    setFunds(updateFunds);

    //Updates backers state
    const updateBackers = backers + 1;
    setBackers(updateBackers);
  };

  //Shows modal components
  const showMenuPledges = () => {
    setMenuHeader(false);
    setModal(true);
    setTimeout(() => {
      setMenuCards(true);
    }, 500);
  };

  const showMenuHeader = () => {
    setModal(true);
    setTimeout(() => {
      setMenuHeader(true);
    }, 500);
  };

  const showBookmarkAlert = () => {
    setModal(true);
    setTimeout(() => {
      setIsBookmark(true);
    }, 500);
  };

  const showThankYou = () => {
    setMenuCards(false);
    setTimeout(() => {
      setIsThankYou(true);
    }, 500);
  };

  return (
    <div className={modal ? 'fix' : ''}>
      <Header
        menuHeader={menuHeader}
        showMenuHeader={showMenuHeader}
        showMenuPledges={showMenuPledges}
      />
      <BackThisProject
        showMenuPledges={showMenuPledges}
        showBookmarkAlert={showBookmarkAlert}
      />
      <Stats funds={funds} backers={backers} />
      <About
        menuCards={menuCards}
        showMenuPledges={showMenuPledges}
        showThankYou={showThankYou}
        cards={cards}
        setCards={setCards}
      />

      {modal && (
        <Modal
          setModal={setModal}
          menuHeader={menuHeader}
          setMenuHeader={setMenuHeader}
          menuCards={menuCards}
          setMenuCards={setMenuCards}
          addPledge={addPledge}
          isThankYou={isThankYou}
          setIsThankYou={setIsThankYou}
          showMenuPledges={showMenuPledges}
          isBookmark={isBookmark}
          setIsBookmark={setIsBookmark}
          showThankYou={showThankYou}
          cards={cards}
          setCards={setCards}
        />
      )}
    </div>
  );
}

export default App
