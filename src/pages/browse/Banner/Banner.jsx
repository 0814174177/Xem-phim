import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Component/Context/CreateContext";
import style from "./Banner.module.css";
function Banner() {
  const API = useContext(AuthContext);
  const base_URL = "https://image.tmdb.org/t/p/original/";
  const [dataImg, setDataImg] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const URL = API.BASE_URL + API.requests.fetchNetflixOriginals;
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setDataImg(
          data.results[Math.floor(Math.random() * data.results.length)]
        );
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, [API]);
  return (
    <header className={style.banner}>
      <img
        className="img-banner"
        src={base_URL + dataImg.backdrop_path}
        alt={dataImg.name}
      />
      <div className={style.banner__contents}>
        <h1 className={style.banner__title}>
          {dataImg?.title || dataImg?.name || dataImg?.original_name}
        </h1>

        <div className={style.banner__buttons}>
          <button className={style.banner__button}>Play</button>
          <button className={style.banner__button}>My List</button>
        </div>
        <p className={style.banner__description}>{dataImg.overview}</p>
      </div>
    </header>
  );
}
export default Banner;
