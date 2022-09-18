import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home.js";
import Edit from "./student/Edit.js";
import View from "./student/View.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view/:id" element={<View />} />
          <Route exact path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
