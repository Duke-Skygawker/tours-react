import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setData(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reloadTours = () => {
    fetchData();
  };

  return (
    <>
      <main>
        <h1 className="title">Our Tours</h1>
        <hr className="title-underline" />
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <Tours array={data} />
            <button
              className="btn reload-btn"
              type="button"
              onClick={reloadTours}
            >
              Reload Tour Offers
            </button>
          </div>
        )}
      </main>
    </>
  );
};
export default App;
