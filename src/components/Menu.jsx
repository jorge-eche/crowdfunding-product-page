import './Menu.css'
import CrowfundIcon from '../img/logo.svg'
import CloseMenu from '../img/icon-close-menu.svg' 

const Menu = () => {
  return (
    <div className='menu'>
        <div className='menu-icons'>
            <div id='menu-crowfund'>
                <img src={CrowfundIcon} alt="Crowfund Logo" />
            </div>

            <div id='close-menu' >
                <img  src={CloseMenu} alt="Close Menu" />
            </div>
        </div>

      <nav className='container container-menu'>
        <ul>
          <li className="menu-item"><span>About</span></li>
          <li className="menu-item"><span>Discover</span></li>
          <li className="menu-item"><span>Get Started</span></li>
        </ul>
      </nav>   
    </div>

  )
}

export default Menu