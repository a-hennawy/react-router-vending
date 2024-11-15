import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import stock from "./stock";

import Chips from "./RouteComponents/Chips";
import Home from "./RouteComponents/Home";
import Soda from "./RouteComponents/Soda";
import Chocolate from "./RouteComponents/Chocolate";

import Navbar from "./Navbar";
import "./VendingMachine.css";

function VendingMachine() {
  // const snackComponent = availableSnacks.map((snack) => <snack name={snack} />);
  return (
    <main>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/chips" element={<Chips />}></Route>
            <Route exact path="/Soda" element={<Soda />}></Route>
            <Route exact path="/Chocolate" element={<Chocolate />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default VendingMachine;
