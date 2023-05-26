import axios from "axios";
import { useState, useEffect } from "react";

const UseFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // const options = {
  //   method: "GET",
  //   url: "https://tasty.p.rapidapi.com/recipes/list",
  //   params: {
  //     from: "0",
  //     size: "20",
  //     tags: "under_30_minutes",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "0c84987a30msh7c9a7a8fe6c8129p1a8237jsn44a9369933c5",
  //     "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  //   },
  // };

  // const options = {
  //   method: "GET",
  //   url: "https://tasty.p.rapidapi.com/recipes/list-similarities",
  //   params: { recipe_id: "8138" },
  //   headers: {
  //     "X-RapidAPI-Key": "0c84987a30msh7c9a7a8fe6c8129p1a8237jsn44a9369933c5",
  //     "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  //   },
  // };

  //const options = {
  // method: "GET",
  // url: "https://tasty.p.rapidapi.com/tips/list",
  // params: {
  //   id: "3562",
  //   from: "0",
  //   size: "30",
  // },
  // headers: {
  //   "X-RapidAPI-Key": "0c84987a30msh7c9a7a8fe6c8129p1a8237jsn44a9369933c5",
  //   "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  // },
  //;

  //const options = {
  //  method: "GET",
  //  url: "https://tasty.p.rapidapi.com/recipes/list",
  //  params: {
  //    from: "0",
  //    size: "20",
  //    tags: "under_30_minutes",
  //  },
  //  headers: {
  //    "X-RapidAPI-Key": "0c84987a30msh7c9a7a8fe6c8129p1a8237jsn44a9369933c5",
  //    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  //  },
  //};

  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list-similarities",
    params: { recipe_id: "8138" },
    headers: {
      "X-RapidAPI-Key": "0c84987a30msh7c9a7a8fe6c8129p1a8237jsn44a9369933c5",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const FetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      //console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return { isLoading, error, data };
};
export default UseFetch;
