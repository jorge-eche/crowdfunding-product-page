import {useState} from 'react'
import Header from './components/Header'
import BackThisProject from './components/BackThisProject'
import Stats from './components/Stats'
import About from './components/About'
import Menu from './components/Menu'

function App() {

  const [funds, setFunds] = useState(89914)
  const [backers, setBackers] = useState(5007)
  const [menu, setMenu] = useState(false)

  return (
    <div className={ menu ? 'fix' : ''}>
      <Header
      menu={menu}
      />
      <BackThisProject/>
      <Stats
      funds= {funds}
      backers = {backers}
      />
      <About/>

      {menu &&<Menu/>}      
      
    </div>
  )
}

export default App
