import { useEffect, useState } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearched(data);
      });
  }, []);
  return [products, searched, setSearched];
};

export default useFetch;
