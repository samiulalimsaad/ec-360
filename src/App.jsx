import { Route, Routes } from "react-router-dom";
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
            <footer></footer>
        </>
    );
}

export default App;
