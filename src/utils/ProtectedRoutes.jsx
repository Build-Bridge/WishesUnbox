import { children, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === false) {
      navigate("/signup", { replace: true });
    }
  }, [user, navigate]);

  return children;
};

export default ProtectedRoutes;
