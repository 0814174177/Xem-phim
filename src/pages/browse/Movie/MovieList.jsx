import { useEffect, useState, useRef } from "react";
import AuthContext from "../../../Component/Context/CreateContext";
import { useContext } from "react";
import Movie from "./Movie.jsx";
import "./MovieList.css";
function MovieList({ typeMovie, typeImg, title, query }) {
  //typeImg: poster_path / backdrop_path (true/false)
  //typeMovie: fetchTrending / fetchTopRated / fetchActionMovies / ...
  const API = useContext(AuthContext);
  const [movies, setMovies] = useState([]); // Mảng các Movie
  const [valid, setValid] = useState(false);
  console.log(query);
  useEffect(() => {
    async function fetchData() {
      try {
        const URL = API.BASE_URL + API.requests[typeMovie] + query; // (*)
        const response = await fetch(URL);
        const data = await response.json();
        console.log(URL);
        setMovies(data.results);
        if (data.results.length !== 0) setValid(true); // true là có dữ liệu
        else setValid(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, [API, typeMovie, query]);
  const listRef = useRef(null);

  useEffect(() => {
    if (query === "") {
      const el = listRef.current;
      if (el) {
        // 2. Hàm xử lý sự kiện lăn chuột
        const onWheel = (e) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          // Chuyển đổi lăn dọc (deltaY) thành cuộn ngang (scrollLeft)
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 3, // Nhân 3 để cuộn nhanh hơn chút
            behavior: "smooth",
          });
        };

        // 3. Gắn sự kiện vào thẻ div
        el.addEventListener("wheel", onWheel);

        // Cleanup function khi component unmount
        return () => el.removeEventListener("wheel", onWheel);
      }
    }
  }, [query]);
  return (
    <div className="space">
      <h2 style={{ color: "#fff" }}>{title}</h2>
      <div className={`${query !== "" ? "" : "row__posters"}`} ref={listRef}>
        {movies.map((movie) => {
          return <Movie props={{ data: movie, typeImg: typeImg }} />;
        })}
        {!valid && <p className="no-result">Movie not found</p>}
      </div>
    </div>
  );
}
export default MovieList;
