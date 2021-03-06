import axios from "axios";

const url = "https://api.covid19api.com/summary";

export const fetchData = async () => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
