import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

// src/App.jsx
export default function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">Content</main>
        <Footer />
      </div>
    </Router>
  );
}
