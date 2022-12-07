import {useState} from 'react'
import Header from './components/Header'
import BackThisProject from './components/BackThisProject'
import Stats from './components/Stats'
import About from './components/About'
import Modal from './components/Modal'

function App() {

  const [funds, setFunds] = useState(89914)
  const [backers, setBackers] = useState(5007)

  const [modal, setModal] = useState(false)
                                                                                                             
  const [menuHeader, setMenuHeader] = useState(false)
  const [menuCards, setMenuCards] = useState(false)
  const [ isThankYou, setIsThankYou ] = useState(false)

  const addPledge = (money)=> {
    const question = confirm(`Do you want to pledge for $${money}?`)
    if (question) {
      const updateFunds = funds + Number(money)
      setFunds(updateFunds)

      const updateBackers = backers + 1
      setBackers(updateBackers)

      setMenuCards(false)
      setIsThankYou(true)
    }

  }

  const showMenuPledges = ()=> {
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



  return (
    <div className={ modal ? 'fix' : ''}>
      <Header
      menuHeader={menuHeader}
      showMenuHeader={showMenuHeader}
      />
      <BackThisProject
      showMenuPledges={showMenuPledges}
      />
      <Stats
      funds= {funds}
      backers = {backers}
      />
      <About
      menuCards={menuCards}
      showMenuPledges={showMenuPledges}
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
      />
      )}      
      
    </div>
  )
}

export default App
