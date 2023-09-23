import { createContext } from "react";
import Phones from "../../components/Phones/Phones";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
export const DataContext = createContext();

const Home = () => {
  const phonesData = useLoaderData();
  return (
    <DataContext.Provider value={phonesData}>
      <div>
        <Banner></Banner>
        <Phones></Phones>
      </div>
    </DataContext.Provider>
  );
};

export default Home;
