/* eslint-disable react/jsx-no-target-blank */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";

function App() {
  return (
    <>
      <article>
        <BrowserRouter>
          <header className="header-container">
            <h1>Creatorverse</h1>
            <div className="header-buttons">
              <Link to="/">
                <button> Get All Creators</button>
              </Link>
              <Link to="/add-creator">
                <button>Add Creator</button>
              </Link>
            </div>
          </header>
          <Routes>
            <Route path="/edit-creator/:id" element={<EditCreator />} />
            <Route path="/add-creator" element={<AddCreator />} />
            <Route path="/" element={<ShowCreators />} />
            <Route path="/view-creator/:id" element={<ViewCreator />} />
          </Routes>
        </BrowserRouter>
      </article>
    </>
  );
}

export default App;
