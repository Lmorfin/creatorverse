/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Card({ name, url, desc, img, link }) {
  return (
    <div className="card">
      <div className="card-name">
        <h1 id="name">{name}</h1>
      </div>
      <div className="card-url">
        <a href={url}>
          <h2>{url}</h2>
        </a>
      </div>
      <div className="card-desc">
        <h3>{desc}</h3>
      </div>
      <div className="card-img-container">
        <img className="card-img" src={img} />
      </div>
      <Link to={`/edit-creator/${link}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default Card;
