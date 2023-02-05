import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const userSelector = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  // const [noRespond, setNoRespond] = useState(false);
  useEffect(() => {
    // const myTimeout = setTimeout(() => {
    //   setNoRespond(true)
    // }, 5000);


    // const myTimeout2 = setTimeout(() => {
    //   localStorage.removeItem("token")
    //   setIsLoading(false)

    // }, 8000);
    // console.log("before clear");
    // console.log(isLoading);
    // if (userSelector.id) {
    // clearTimeout(myTimeout);
    // console.log("noRespond 1");
    // console.log(noRespond);

    // clearTimeout(myTimeout2);
    // console.log("after clear");
    // console.log(isLoading);
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 100);
    // }
    // else {
    // console.log("noRespond 2");
    // console.log(noRespond);

    //   setIsLoading(true)
    // }
  }, [userSelector])


  return (
    <>
      {/* {console.log("isLoading && noRespond")}
      {console.log(`${isLoading}  ${noRespond}`)} */}
      {
        // isLoading && !noRespond ? <div>Loading</div> :
        // noRespond ? <div>error</div> :
        // isLoading ? <div>Loading</div> :
        <Routes>
          {routes.map((val, key) => {
            return (
              <Route exact path={val.path} element={val.element} key={key} />
            );
          })}
        </Routes>}
    </>
  );
}

export default App;
