import './Card.css'

const Card = ({children, type}) => {
  return (
    <div className={`card-style ${type}`}>
        {children}
    </div>
  )
}

export default Card