import React from "react";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Pages } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;

/* <ul>
        <li>
          <NavLink to={ROUTES.HOME}>home</NavLink>
        </li>
      </ul> */
