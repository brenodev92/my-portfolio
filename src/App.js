import React from "react";
import { CssBaseline } from "@material-ui/core";

import Routes from "./routes";

import "./App.css";
import 'react-vertical-timeline-component/style.min.css';

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
