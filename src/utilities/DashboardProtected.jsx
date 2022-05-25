import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase.init";
import apiClient from "./axios";

const DashboardProtected = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    const { isLoading, error, data } = useQuery(
        ["Profile", user],
        async () => (await apiClient(`/user?email=${user?.email}`)).data
    );

    if (data?.user?.role !== "admin") {
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }

    return children;
};

export default DashboardProtected;
