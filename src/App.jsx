// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

const handleSearch = () => {};

function App() {
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App;
