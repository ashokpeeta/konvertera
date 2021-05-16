import 'antd/dist/antd.css';
import './App.css';
import CountrySearch from "./components/CountrySearch";
import CountryList from "./components/CountryList";
import { useState, useEffect } from 'react';
import { getAllCountries, getCountryByName } from "./services/countries";

function App() {
  const [selection, setSelection] = useState("search");
  const [countryData, setCountryData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const handleGetAllCountries = async () => {
    await getAllCountries().then(data => {
      if (data?.status === 404) {
        setCountryData([])
      } else {
        setCountryData(data)
      }
      setIsSearching(false);
    });
  }
  useEffect(() => {
    if (selection === 'all') {
      handleGetAllCountries()
    }
  }, [selection])
  const onSearch = async (value) => {
    setIsSearching(true);
    if (value.trim() === '' || selection === "all") {
      await handleGetAllCountries()
    } else {
      getCountryByName(value).then(data => {
        if (data?.status === 404) {
          setCountryData([])
        } else {
          setCountryData(data)
        }
        setIsSearching(false);
      });
    }
  }
  return (
    <div className="app">
      <CountrySearch
        selection={selection}
        onSearchTypeSelection={setSelection}
        isSearching={isSearching}
        onSearch={onSearch}
      />
      <CountryList
        countryData={countryData}
        isSearching={isSearching}
      />
    </div>
  );
}

export default App;
