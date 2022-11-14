import {useState} from 'react'
import Header from './components/Header'
import BackThisProject from './components/BackThisProject'
import Stats from './components/Stats'
import About from './components/About'
import Modal from './components/Modal'

function App() {

  const [funds, setFunds] = useState(89914)
  const [backers, setBackers] = useState(5007)

  const [modal, setModal] = useState(true)
  const [menuHeader, setMenuHeader] = useState(false)
  const [menuCards, setMenuCards] = useState(true)


  return (
    <div className={ modal ? 'fix' : ''}>
      <Header
      menuHeader={menuHeader}
      />
      <BackThisProject/>
      <Stats
      funds= {funds}
      backers = {backers}
      />
      <About
      menuCards={menuCards}
      />

      {modal && (
      <Modal
      menuHeader={menuHeader}
      menuCards={menuCards}
      />
      )}      
      
    </div>
  )
}

export default App
