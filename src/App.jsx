import ProductProvider from "./context/ProductProvider";
import Root from "./router/Root";
function App() {
  return (
    <ProductProvider>
      <Root />
    </ProductProvider>
  );
}

export default App;
