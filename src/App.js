import { BrowserRouter, Routes, Route} from "react-router-dom";
import ChatBot from "react-simple-chatbot"
import {AiFillMessage} from "react-icons/ai"
import "bootstrap/dist/css/bootstrap.min.css"
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import UserPgIndex from "./pages/UserPage/UserPgIndex";

function ChatBotDiv() {
  return (
    <div style={{height: "50px", width: "50px", background: "blue", borderRadius: "15px", padding: "15px", position: "absolute", bottom: "50px", right: "50px"}}>
      <AiFillMessage />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/user/*" element={<UserPgIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
