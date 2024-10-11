import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/layout";
import { Home, About, Contact, Products, ProductPage, Error404 } from "./pages";
import Provider from "./provider";
function App() {
  return (
    <Provider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<Error404 />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:slug" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
