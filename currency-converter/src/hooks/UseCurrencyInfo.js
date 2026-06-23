import { useEffect, useState } from "react";

function useCurrecnyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/14e476cf26a11eaa8dd1323f/latest/{currency}`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency])
  console.log(data);
  return data;
}

export default useCurrecnyInfo;

//https://v6.exchangerate-api.com/v6/14e476cf26a11eaa8dd1323f/latest/USD
