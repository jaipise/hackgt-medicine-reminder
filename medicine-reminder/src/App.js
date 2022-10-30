import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
