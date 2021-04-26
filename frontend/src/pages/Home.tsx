import React, { useContext, useEffect } from "react";
import Button from "../components/Button/";
import Loading from "../components/Loading/Loading";
import SearchField from "../components/SearchField/";
import Table from "../components/Table/";
import AdressesContext from "../contexts/adresses";
import "./Home.css";

const Home = () => {
  const { adresses, isLoading, getAddress } = useContext(AdressesContext);
  useEffect(() => {
    getAddress();
  }, []);
  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container__searchAndButton">
            <SearchField />
            <Button />
          </div>
          <Table adresses={adresses} />
        </>
      )}
    </div>
  );
};
export default Home;
