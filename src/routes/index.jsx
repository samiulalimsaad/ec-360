import { Route, Routes } from "react-router-dom";
import NotFound from "../404/NotFound";
import Dashboard from "../Dashboard";
import AddReview from "../Dashboard/AddReview";
import Orders from "../Dashboard/Orders";
import Profile from "../Dashboard/Profile";
import Home from "../Home";
import Login from "../Login";
import Purchase from "../Purchase";
import Signup from "../Signup";
import DashboardProtected from "../utilities/DashboardProtected";
import PrivateRoute from "../utilities/PrivateRoute";

const RouteNames = () => {
    return (
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
            <Route
                path="dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            >
                <Route index element={<Profile />} />
                <Route
                    path="orders"
                    element={
                        <DashboardProtected>
                            <Orders />
                        </DashboardProtected>
                    }
                />
                <Route
                    path="add-review"
                    element={
                        <DashboardProtected>
                            <AddReview />
                        </DashboardProtected>
                    }
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RouteNames;
