import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
    return (
        <>
            <header className="sticky top-0 z-50">
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
