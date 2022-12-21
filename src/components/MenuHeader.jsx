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
          <li className="menu-item" >
            <a className='link-menu-header' href='#title' onClick={goToAbout}>
              <span>About</span>
            </a>
          </li>

          <li className="menu-item">
            <a>
              <span>Discover</span>
            </a>
          </li>

          <li
            className="menu-item" 
            onClick={showMenuPledges}
            >
              <a>
                <span>Get Started</span>
              </a>
          </li>         
        </ul>
      </nav>   
    </>
  )
}

export default MenuHeader