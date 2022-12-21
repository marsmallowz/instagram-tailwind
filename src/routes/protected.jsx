import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PageProtected({
  children,
  needLogin = false,
  guestOnly = false,
  authRoles = [],
}) {
  let navigate = useNavigate();
  const userSelector = useSelector((state) => state.auth);

  useEffect(() => {
    //wajib login
    if (needLogin && !userSelector?.id) {
      return navigate("/login", { replace: true });
    }

    //guest only, ga boleh login
    if (guestOnly && userSelector.id) {
      return navigate("/", { replace: true });
    }

    //hanya yang punya role ini
    if (authRoles.length && !authRoles.includes(userSelector.role)) {
      return navigate("/login", { replace: true });
    }
  }, []);
  return children;
}

export default PageProtected;
