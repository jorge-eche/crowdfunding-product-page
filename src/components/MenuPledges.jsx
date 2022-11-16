import Cards from "./Cards"
import './MenuPledges.css'

const MenuPledges = ({menuCards}) => {

  return (
    <div className="container container-modal-cards">
      <div className="header-modalcards">
        <h1>Back this project</h1>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
      </div>
      <Cards
      menuCards={menuCards}
      />

    </div>
  )
}

export default MenuPledges