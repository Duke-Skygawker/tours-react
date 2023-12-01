import { useState } from "react";
import Tour from "./Tour";

const Tours = ({ array }) => {
  const [data, setData] = useState(array);
  console.log(data);

  const removeTour = (id) => {
    const newArr = data.filter((tour) => tour.id !== id);

    setData(newArr);
  };

  return (
    <>
      <section className="tours">
        {data.map((tour) => {
          return (
            <Tour {...tour} key={tour.id || index} removeThis={removeTour} />
          );
        })}
      </section>
    </>
  );
};
export default Tours;
