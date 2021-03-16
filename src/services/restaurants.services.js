import { mocks, mockImages } from "./mock_data/index";

import camelize from "camelize";
export const restaurantRequest = (location) =>
  new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      return reject("not found");
    }
    resolve(mock);
  });
export const restaurantDataTransform = ({ results = [] }) => {
  const mapedRes = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mapedRes);
};
