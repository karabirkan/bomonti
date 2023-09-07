import React from "react";
import Header from "../../components/layout/header/Header";
import ProductProvider from "../../context/ProductProvider";
import { useProducts } from "../../context/ProductProvider";

export default function HomePage() {
  const products = useProducts();
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <ProductProvider>
      <div>
        <Header />
        <h1>Home & Shop Page.</h1>
        {/* Now you can access the products data */}
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </ProductProvider>
  );
}
