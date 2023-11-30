import { useState } from "react";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  return (
    <>
      <Tours {...data} />
    </>
  );
};
export default App;
