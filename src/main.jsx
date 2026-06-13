import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, } from "react-router";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";
import App from "./App.jsx";

// Forhindrer browser-swipe-navigation (tilbage/frem) på touchskærme globalt
document.addEventListener("touchmove", (e) => {
  e.preventDefault();
}, { passive: false });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
);
