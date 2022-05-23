import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddReview from "./Dashboard/AddReview";
import Orders from "./Dashboard/Orders";
import Profile from "./Dashboard/Profile";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Purchase from "./Purchase";
import Signup from "./Signup";
import PrivateRoute from "./utilities/PrivateRoute";

function App() {
    return (
        <>
            <header className="sticky top-0 z-50">
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route
                        path="purchase/:id"
                        element={
                            <PrivateRoute>
                                <Purchase />
                            </PrivateRoute>
                        }
                    />
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route index element={<Profile />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="add-review" element={<AddReview />} />
                    </Route>
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
