import logo from "../../public/vite.svg";
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius esse, aliquam, repellat unde ad debitis cumque architecto eum delectus, odio corporis sequi omnis numquam!";

const Tour = ({ name, info, image, price, removeThis }) => {
  return (
    <article>
      <div>
        <img src={image || logo} alt={name || "tour photo"} />
        <p>{price || "$9,999"}</p>
      </div>
      <div>
        <h4>{name || "Journey to the center of the Earth"}</h4>
        <p>{info || lorem}</p>
        <button>Read More</button>
      </div>
      <button className="btn" type="button" onClick={removeThis}>
        Not interested
      </button>
    </article>
  );
};
export default Tour;
