import axios from "axios";

export const GetProducts = async () => {
  const url =
    "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC";
  try {
    const result = await axios.get(url).then((response) => {
      return { data: response.data.products, status: response.status };
    });
    return result;
  } catch (error) {
    console.log("Error: " + error);
  }
};
