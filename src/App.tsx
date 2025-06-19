import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/600.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HeroSection } from "./components/HeroSection.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
