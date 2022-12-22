import { useState } from "react";
import "./BackThisProject.css";
import MastercraftLogo from "../img/logo-mastercraft.svg";

const BackThisProject = ({
  showMenuPledges
}) => {

  const [ isBookmarked, setIsBookmarked ] = useState(false)

  const changeBookmarkBtn = ()=> {

    setIsBookmarked(prevIsBookmarked => !prevIsBookmarked)
  }

  return (
    <div className="container">
      <div id="mastercraft-logo">
        <img src={MastercraftLogo} alt="Mastercraft Logo" />
      </div>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautifully handcrafted monitor stand to reduce neck and eye strain
      </p>
      <div className="flex-wrapper">
        <button
        onClick={showMenuPledges}
        >
          Back this project
        </button>
        <label htmlFor="bookmark" className="flex-wrapper-bookmark">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
            >
              <g fill="none" fillRule="evenodd">
                <circle id={isBookmarked ? "bookmark-circle" : undefined} fill="#2F2F2F" cx="28" cy="28" r="28" />
                <path id={isBookmarked ? "bookmark-path" : undefined} fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
            <button id="bookmark" className={isBookmarked ? "bookmark-btn" : undefined} onClick={changeBookmarkBtn}>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</button>
        </label>
      </div>
    </div>
  );
};

export default BackThisProject;
