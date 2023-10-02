import { Navigate } from "react-router-dom";
import { useSelector} from "react-redux";

export const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.user)
    if (!user.token) {
        return <Navigate to="/login" />;
    }
    return children;
};