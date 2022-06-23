import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Carousel from "./components/carousel";
import Main from "./components/main";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/view/:id" exact element={<Main />} />
          <Route
            path="/"
            exact
            element={<Carousel slides={7} infinite={true} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
