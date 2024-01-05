import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
