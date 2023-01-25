import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PageProtected({ children, needLogin = false, guestOnly = false }) {
  let navigate = useNavigate();
  // permasalahannya dia mengecek diglobal state akan tetapi saat refresh web global state menghilang jadi harus baca ke local storage
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
  }, []);
  return children;
}

export default PageProtected;
