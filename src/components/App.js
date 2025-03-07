import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Layout from "./Layout";
import Category from "./Category";
import ItemDetail from "./Item";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="category/:categoryName" element={<Category />}>
            <Route path=":itemName" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;