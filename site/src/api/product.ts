import axios from "axios";

interface SearchParams {
  name?: string;
  status?: string;
}

const axiosConfig = axios.create({
  headers: { Pragma: "no-cache" },
});

export const fetchProducts = async (searchParams: SearchParams) => {
  const {
    data: { results },
  } = await axiosConfig.get(`https://rickandmortyapi.com/api/character`, {
    params: searchParams,
  });
  return results;
};
