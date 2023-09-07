import axios from "axios";
import { createContext, useContext } from "react";
import { useQuery } from "react-query";

const productContext = createContext();

export default function ProductProvider({ children }) {
  const { data, isLoading, error } = useQuery("product", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  });

  return (
    <productContext.Provider value={data}>{children}</productContext.Provider>
  );
}

export function useProducts() {
  return useContext(productContext);
}
