import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext"; // Correct path if not in parent dir

function App() {
  return (
    <AppProvider>
      <Navbar />
      <AppRoutes />
      <Footer />
    </AppProvider>
  );
}

export default App;
