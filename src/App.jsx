import {useState, useEffect} from 'react'
import Header from './components/Header'
import BackThisProject from './components/BackThisProject'
import Stats from './components/Stats'
import About from './components/About'
import Modal from './components/Modal'

function App() {

  const [ funds, setFunds ] = useState(89914)
  const [ backers, setBackers ] = useState(5007)

  const [ modal, setModal ] = useState(false)
                                                                                                             
  const [ menuHeader, setMenuHeader ] = useState(false)

  const [ menuCards, setMenuCards ] = useState(false)

  const [ isThankYou, setIsThankYou ] = useState(false)

  const [ isBookmark, setIsBookmark ] = useState(false)

  useEffect(() => {
    const fundsLS = JSON.parse(localStorage.getItem('funds'));

    if ( fundsLS !== null ) setFunds(fundsLS);
  }, []);

  useEffect(() => {
    const backersLS = JSON.parse(localStorage.getItem('backers'));
    if (backersLS) setBackers(backersLS);
  }, []);

  useEffect(() => {
    if (funds !== 89914)
    localStorage.setItem('funds', JSON.stringify(funds));
  }, [funds]);

  useEffect(() => {
    if (backers !== 5007)
    localStorage.setItem('backers', JSON.stringify(backers));
  }, [backers]);

  const addPledge = (money)=> {
      //Updates fund state
      const updateFunds = funds + Number(money)
      setFunds(updateFunds)

      //Updates backers state
      const updateBackers = backers + 1
      setBackers(updateBackers)
  }

  const showMenuPledges = ()=> {
    setMenuHeader(false)
    setModal(true)
    setTimeout(() => {
      setMenuCards(true)
    }, 500);
  }

  const showMenuHeader = ()=> {
    setModal(true)
    setTimeout(() => {
      setMenuHeader(true)
    }, 500);
  }

  const showBookmarkAlert = () => {
    setModal(true)
    setTimeout(() => {
      setIsBookmark(true)
    }, 500);
  }

  const showThankYou = () => {
    setMenuCards(false)
    setTimeout(() => {
      setIsThankYou(true)
    }, 500);
  }

  return (
    <div className={ modal ? 'fix' : ''}>
      <Header
      menuHeader={menuHeader}
      showMenuHeader={showMenuHeader}
      showMenuPledges={showMenuPledges}
      />
      <BackThisProject
      showMenuPledges={showMenuPledges}
      showBookmarkAlert={showBookmarkAlert}
      />
      <Stats
      funds= {funds}
      backers = {backers}
      />
      <About
      menuCards={menuCards}
      showMenuPledges={showMenuPledges}
      showThankYou={showThankYou}
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
      />
      )}      
      
    </div>
  )
}

export default App
