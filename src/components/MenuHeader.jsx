import './MenuHeader.css'
import CrowfundIcon from '../img/logo.svg'
import CloseMenu from '../img/icon-close-menu.svg' 

const MenuHeader = ({
  setModal,
  hideModal,
  showMenuPledges,
  setMenuHeader
}) => {


  const goToAbout = ()=> {
      setModal(false)
      setMenuHeader(false)     
  } 

  return (
    <>
        <div className='menu-icons'>
            <div id='menu-crowfund'>
                <img src={CrowfundIcon} alt="Crowfund Logo" />
            </div>

            <div id='close-menu' onClick={hideModal}>
                <img  src={CloseMenu} alt="Close Menu" />
            </div>
        </div>

      <nav className='container container-menu'>
        <ul>
          <a href='#title' onClick={goToAbout}>
            <li className="menu-item" >
              <span>About</span>
            </li>
          </a>

          <a>
            <li className="menu-item">
              <span>Discover</span>
            </li>
          </a>

          <a>
            <li
            className="menu-item" 
            onClick={showMenuPledges}
            >
              <span>Get Started</span>
            </li>
          </a>           
        </ul>
      </nav>   
    </>
  )
}

export default MenuHeader