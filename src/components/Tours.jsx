import Tour from "./Tour";

const Tours = ({ data }) => {
  data = [{}, {}, {}];
  // setData(dataArr);
  return (
    <>
      {data.map((tour) => {
        return <Tour {...tour} key={tour.id} />;
      })}
    </>
  );
};
export default Tours;
