import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/layouts/Footer";


function App() {
  return (
    <Router>

        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className="container mx-auto pb-12 px-3">Content</main>

          <Footer />
        </div>
           
    </Router>
  );
}

export default App;
