import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Watchlist from "./components/Watchlist";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<SearchResults />}></Route>
        <Route exact path="/watchlist" element={<Watchlist />}></Route>
      </Routes>
    </>
  );
}

export default App;
