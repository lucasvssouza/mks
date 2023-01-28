export const GetProducts = async () => {
  const url =
    "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log("Error: " + error);
  }
};
