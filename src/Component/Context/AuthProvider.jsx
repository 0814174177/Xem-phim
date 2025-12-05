import AuthContext from "./CreateContext";
import { useState, useCallback } from "react";
// Hàm này sẽ định nghĩa một component Provider
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const addItemHandler = useCallback((newItem) => {
    setUser(newItem);
  }, []);
  const API_KEY = "8d1666a283ac5dd8d27e8f010f02cb9a";
  const API_ReadAccess =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDE2NjZhMjgzYWM1ZGQ4ZDI3ZThmMDEwZjAyY2I5YSIsIm5iZiI6MTc2MDExMDAzOS42MSwic3ViIjoiNjhlOTI1ZDc4NDJjMzQzMmY0ZTZhZDIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.IHsiYYQL0MQfjIHp-aB_ZSjZ7XB-sDli8ACe53D43UI";
  const BASE_URL = "https://api.themoviedb.org/3";
  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US&query=`,
  };
  let data = {
    data: user,
    requests: requests,
    API_KEY: API_KEY,
    BASE_URL: BASE_URL,
    BASE_URL_Image: "https://image.tmdb.org/t/p/original/",
    API_ReadAccess: API_ReadAccess,
    setData: addItemHandler,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
