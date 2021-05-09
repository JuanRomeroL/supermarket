import axios from "axios";

const axiosConfig = axios.create({
  headers: { Pragma: "no-cache" },
});

export const fetchProducts = async () => {
  const {
    data: { results },
  } = await axiosConfig.get(`https://rickandmortyapi.com/api/character`);
  return results;
};
