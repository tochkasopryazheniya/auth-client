import {Navigate} from "react-router-dom";

const PrivateRoute = ({children, isAllowed, redirectPath}) => {

    if (!isAllowed) {
        return <Navigate to={redirectPath} replace/>
    }

    return children
};

export default PrivateRoute;