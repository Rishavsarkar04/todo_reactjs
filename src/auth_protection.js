import { useEffect } from "react";
import { useMycontext } from "./context";
import { useNavigate } from "react-router-dom";

export default function Authprovider({ children }) {
  let { user } = useMycontext();
  let navigate = useNavigate();
  let isauthenticated = user.isauthenticated;

  useEffect(() => {
    if (!isauthenticated) {
      navigate("/login");
    }
  }, [isauthenticated, navigate]);

  return isauthenticated ? children : null;
}
