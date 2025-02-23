import React from "react";
import Navbar from "./components/Navbar";
import OrderPage from "./components/OrderPage";
import Footer from "./components/Footer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { NavigateBeforeOutlined } from "@mui/icons-material";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <OrderPage></OrderPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
