import { useEffect, useState } from "react";
import { fetchImages } from "./services/api";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        console.log("data", data);
        setImages((prev) => [...prev, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  // const handleChangePage = () => {
  //   setPage((prev) => prev + 1);
  // };

  const handleSetQuery = (searchValue) => {
    setQuery(searchValue);
    setImages([]);
    setPage(0);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {!!images.length && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </>
  );
}

export default App;
