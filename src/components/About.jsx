import Cards from './Cards'
import './About.css'

const About = ({
  menuCards,
  showThankYou,
  cards,
  setCards,
  activePledge,
  setActivePledge,
  showMenuPledges
}) => {
  return (
    <div className="container">
      <p id="title">About this project</p>
      <p className="about-text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="about-text">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <Cards
        menuCards={menuCards}
        showThankYou={showThankYou}
        cards={cards}
        setCards={setCards}
        activePledge={activePledge}
        setActivePledge={setActivePledge}
        showMenuPledges={showMenuPledges}
      />
    </div>
  );
};

export default About