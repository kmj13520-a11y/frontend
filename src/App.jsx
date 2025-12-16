import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
