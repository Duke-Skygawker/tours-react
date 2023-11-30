import Tour from "./Tour";

const Tours = ({ data }) => {
  data = [{}, {}, {}];
  // setData(dataArr);
  return (
    <>
      {data.map((tour, index) => {
        return <Tour {...tour} key={tour.id || index} />;
      })}
    </>
  );
};
export default Tours;
