import { Route, Routes } from "react-router-dom";
import NotFound from "../404/NotFound";
import Dashboard from "../Dashboard";
import AddProduct from "../Dashboard/AddProduct";
import AddReview from "../Dashboard/AddReview";
import MakeAdmin from "../Dashboard/MakeAdmin";
import ManageProduct from "../Dashboard/ManageProduct";
import MyOrders from "../Dashboard/MyOrders";
import Orders from "../Dashboard/Orders";
import Profile from "../Dashboard/Profile";
import Home from "../Home";
import Login from "../Login";
import Payment from "../Payment";
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
            <Route path="payment" element={<Payment />} />
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
                <Route path="my-orders" element={<MyOrders />} />
                <Route path="add-review" element={<AddReview />} />
                <Route
                    path="orders"
                    element={
                        <DashboardProtected>
                            <Orders />
                        </DashboardProtected>
                    }
                />
                <Route
                    path="add-product"
                    element={
                        <DashboardProtected>
                            <AddProduct />
                        </DashboardProtected>
                    }
                />
                <Route
                    path="manage-products"
                    element={
                        <dashboardProtected>
                            <ManageProduct />
                        </dashboardProtected>
                    }
                />
                <Route
                    path="make-admin"
                    element={
                        <DashboardProtected>
                            <MakeAdmin />
                        </DashboardProtected>
                    }
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RouteNames;
