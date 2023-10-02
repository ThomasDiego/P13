import { Navigate } from "react-router-dom";
import { useSelector} from "react-redux";

export const UnprotectedRoute = ({ children }) => {
    const user = useSelector((state) => state.user)
    if (user.token) {
        return <Navigate to="/profile" />;
    }
    return children;
};