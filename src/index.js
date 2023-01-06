import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Footer from "./Footer";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Navbar />
        <App />
        <Footer />
    </>
);
