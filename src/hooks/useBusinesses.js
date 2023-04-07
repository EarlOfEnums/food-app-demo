import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [businesses, setBusinesses] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setBusinesses(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  React.useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, businesses, errorMessage];
};
