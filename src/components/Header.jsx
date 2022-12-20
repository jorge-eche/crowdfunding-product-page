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
          <div id="bar-crowfund">
            <img src={CrowfundIcon} alt="" />
          </div>

          <div id="bar-hamburger" onClick={showMenuHeader}>
            <img src={HamburgerIcon} alt="" />
          </div>
        </>
      )}

      <nav className="nav-bar-header">
        <ul>
          <li>
            <a href="#title">About</a>
          </li>
          <li>
            <a href="">Discover</a>
          </li>
          <li>
            <a onClick={showMenuPledges}>Get Started</a>
          </li>
        </ul>
      </nav>
    </header>
  );

  
}

export default Header