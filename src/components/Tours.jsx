import { useState } from "react";
import Tour from "./Tour";

const Tours = ({ array }) => {
  //   array = [{}, {}, {}];
  const [data, setData] = useState(array);
  console.log(data);

  const removeTour = (index) => {
    let newArr = [...data];
    newArr.splice(index, 1);
    setData(newArr);
  };

  return (
    <>
      <section className="tours">
        {data.map((tour, index) => {
          return (
            <Tour
              {...tour}
              key={tour.id || index}
              index={index}
              removeThis={removeTour}
            />
          );
        })}
      </section>
    </>
  );
};
export default Tours;
