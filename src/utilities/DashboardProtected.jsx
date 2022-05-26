import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase.init";
import Loading from "./Loading";
import useFetch from "./useFetch";

const DashboardProtected = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    const { data, isLoading, error } = useFetch(
        `/user?email=${user?.email}`,
        user
    );

    if (loading || isLoading) {
        return <Loading />;
    }

    if (data?.user?.role !== "admin") {
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }

    return children;
};

export default DashboardProtected;
