import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import Category from "./Category";
import Item from "./Item";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:categoryName" element={<Category />}>
            <Route path=":itemName" element={<Item />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
