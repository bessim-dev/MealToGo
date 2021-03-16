import React, {
  useState,
  useMemo,
  useEffect,
  createContext,
  useContext,
} from "react";
import { LocationContext } from "./location/location.context";
import {
  restaurantDataTransform,
  restaurantRequest,
} from "./restaurants.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retrieveData = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantRequest(loc)
        .then(restaurantDataTransform)
        .then((result) => {
          setRestaurants(result);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveData(locationString);
    }
  }, [location]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
