import './Header.css'
import CrowfundIcon from '../img/logo.svg'
import HamburgerIcon from '../img/icon-hamburger.svg'

const Header = ({
  menuHeader,
  showMenuHeader
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
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </header>
  )

  
}

export default Header