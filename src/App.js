import 'antd/dist/antd.css';
import './App.css';
import CountrySearch from "./components/CountrySearch";
import CountryList from "./components/CountryList";
import { useState, useEffect } from 'react';
import { getAllCountries, getCountryByName } from "./services/countries";

function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [selection, setSelection] = useState("search");
  const [countryData, setCountryData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const handleGetAllCountries = async () => {
    setIsSearching(true);
    await getAllCountries().then(data => {
      if (data?.status === 404) {
        setCountryData([])
      } else {
        setCountryData(data)
      }
      setIsSearching(false);
      setHasSearched(true);
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
        setHasSearched(true);
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
        hasSearched={hasSearched}
        countries={countryData}
        isSearching={isSearching}
      />
    </div>
  );
}

export default App;
