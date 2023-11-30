import logo from "../../public/vite.svg";

const Tour = ({ name, info, image, price, removeThis }) => {
  return (
    <article>
      <div>
        <img src={image || logo} alt={name} />
        <p>{price}</p>
      </div>
      <div>
        <h4>{name}</h4>
        <p>{info}</p>
        <button>Read More</button>
      </div>
      <button className="btn" type="button" onClick={removeThis}>
        Not interested
      </button>
    </article>
  );
};
export default Tour;
