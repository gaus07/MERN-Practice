import React from "react";
import { Routes, Route, } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ErrorPage from "./Components/Errorpage";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
