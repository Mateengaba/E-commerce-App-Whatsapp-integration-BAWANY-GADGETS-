import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Productsdetail from './components/Productsdetail';
import Header from './components/Header';
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { IconButton } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/Productsdetail/:id" element={<Productsdetail />} />

      </Routes>
      
      <Footer />
       {/* whatsapp code    */}
       <div className="WhatsAppWidgetContainer">
  <WhatsAppWidget
    phoneNumber="+923108227222"
    companyName="Bawany Gadgets"
    size="50px"  // Adjust size as needed
    onClick={() => {
      // Apne WhatsApp number ko redirect karein
      window.location.href = "whatsapp://send?phone=+923108227222";
    }}
  >
    <IconButton
      variant="outlined"
      sx={{
        px: "1rem",
        py: "1rem",
        bgcolor: "#25D366",
        "&:hover": { bgcolor: "#075E54" },
        mt: "1rem",
      }}
    >
      <WhatsApp />
    </IconButton>
  </WhatsAppWidget>
</div>


{/* end */}

    </>
  );
}

export default App;
