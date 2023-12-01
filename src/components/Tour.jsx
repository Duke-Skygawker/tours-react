import { useState } from "react";
import logo from "../../public/vite.svg";
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius esse, aliquam, repellat unde ad debitis cumque architecto eum delectus, odio corporis sequi omnis numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius esse, aliquam, repellat unde ad debitis cumque architecto eum delectus, odio corporis sequi omnis numquam!";

const Tour = ({ name, info, image, price, removeThis, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <article className="single-tour">
      <div>
        <img className="img" src={image || logo} alt={name || "tour photo"} />
        <p className="tour-price">${price || "$9,999"}</p>
      </div>
      <div className="tour-info">
        <h5>{name || "Journey to the center of the Earth"}</h5>
        <p className={isExpanded ? "expanded" : "collapsed"}>{info || lorem}</p>
        <button
          className="info-btn"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Show less" : "Read More"}
        </button>
        <button
          className="btn delete-btn"
          type="button"
          onClick={() => removeThis(index)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
