import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_types from "./redux/auth/types";
import routes from "./routes/routes";
function App() {
  const dispatch = useDispatch();
  const saveDataUser = localStorage.getItem("user_data");

  if (saveDataUser) {
    const parseDataUser = JSON.parse(saveDataUser);
    dispatch({
      type: user_types.USER_LOGIN,
      payload: parseDataUser,
    });
  }

  return (
    <>
      <Routes>
        {routes.map((val, key) => {
          return (
            <Route exact path={val.path} element={val.element} key={key} />
          );
        })}
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/massandz" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default App;
