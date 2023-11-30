import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const tours = await response.json();
        console.log(tours);
        setData(tours);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const reloadTours = () => {
    console.log("tryna reload offers innit");
  };

  return (
    <>
      <main>
        <button
          className="btn"
          type="button"
          onClick={() => setIsLoading(!isLoading)}
        >
          Loading Swap
        </button>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <Tours {...data} />
            <button className="btn" type="button" onClick={reloadTours}>
              Reload Tour Offers
            </button>
          </div>
        )}
      </main>
    </>
  );
};
export default App;
