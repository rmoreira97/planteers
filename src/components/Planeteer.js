import React, { useState } from "react";

function Planeteer({ planeteer }) {
  const [showQuote, setShowQuote] = useState(false);

  const toggleQuote = () => {
    setShowQuote((prevValue) => !prevValue);
  };

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick={toggleQuote}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">
            {showQuote ? planeteer.quote : planeteer.bio}
          </p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>{planeteer.fromUSA ? "USA-based" : "Working overseas"}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
