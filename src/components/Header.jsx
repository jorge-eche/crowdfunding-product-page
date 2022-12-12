import './Header.css'
import CrowfundIcon from '../img/logo.svg'
import HamburgerIcon from '../img/icon-hamburger.svg'

const Header = ({
  menuHeader,
  showMenuHeader,
  showMenuPledges
}) => {
  
  return (
    <header className="header">

      {!menuHeader && (
        <>
          <div id='bar-crowfund'>
            <img src={CrowfundIcon} alt="" />
          </div>

          <div id='bar-hamburger' onClick={showMenuHeader} >
            <img  src={HamburgerIcon} alt="" />
          </div>
        </> 
      )}
      

      <nav className='nav-bar-header'>
        <ul>
          <a href="#title"><li>About</li></a> 
          <a href=""><li>Discover</li></a>      
          <a ><li onClick={showMenuPledges}>Get Started</li></a>         
                   
        </ul>
      </nav>
    </header>
  )

  
}

export default Header