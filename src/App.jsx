import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RouteNames from "./routes";

function App() {
    return (
        <>
            <header className="sticky top-0 z-50">
                <Navbar />
            </header>
            <main>
                <RouteNames />
            </main>
            <footer>
                <Footer />
            </footer>
            <>
                <ToastContainer theme="dark" />
            </>
        </>
    );
}

export default App;
