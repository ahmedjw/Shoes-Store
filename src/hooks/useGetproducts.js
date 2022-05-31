import React, { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export default function useGetproducts(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [err, setErr] = useState("");
  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        const res = await response.json();
        setData(res);
        setIsloading(false);
      } catch (e) {
        setIsError(true);
        setErr(e);
      }
    }
    init();
  }, []);
  return { data, isLoading, isError, err };
}
