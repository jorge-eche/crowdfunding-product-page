import './Bookmark.css'

const BookmarkModal = ({hideModal}) => {
  return (
    <div className="container container-bookmark">
    
        <h1>Press <span>"Ctrl + D"</span> to bookmark us!</h1>

        <button onClick={hideModal}>Got it!</button>
    </div>
  )
}

export default BookmarkModal