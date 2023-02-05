import { useState, useEffect } from "react";
import { axiosInstance } from "../config/config";

//pagenum sebagai offset
const usePosts = (pageNum = 0) => {
  const [dateNow, setDateNow] = useState(new Date());
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    console.log("dateNow");
    console.log(dateNow);
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    axiosInstance
      .get(`/posts?offset=${pageNum}&date=${dateNow}&limit=${3}`, { signal })
      .then((res) => {
        console.log("mydata");
        console.log(res.data);

        setResults((prev) => [...prev, ...res.data]);
        setHasNextPage(Boolean(res.data.length));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message });
      });

    return () => controller.abort();
  }, [dateNow, pageNum]);

  return { isLoading, isError, error, results, hasNextPage };
};

export default usePosts;
