import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Pro from "./pages/Pro";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Test />} />
          <Route path="*" element={<NotFound />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="pro" element={<Pro />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
