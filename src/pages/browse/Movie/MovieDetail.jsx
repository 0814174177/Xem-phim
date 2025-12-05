import react, { useContext, useEffect, useState } from "react";
import YouTube from "react-youtube";
import AuthContext from "../../../Component/Context/CreateContext";
import style from "./MovieDetail.module.css";
function MovieDetail({ data }) {
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const [videoKey, setVideoKey] = useState(true);
  const [mainData, setMainData] = useState({
    data: {},
    opts: {},
  }); // Lưu dữ liệu sau khi chọn
  const API = useContext(AuthContext);
  const URL = `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=${API.API_KEY}`;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL);
        const result = await response.json();
        console.log(result);
        function chooseData() {
          if (result.results.length === 0) {
            setVideoKey(false); // Không có Video
            setMainData({ data: data, opts: opts });
          } else {
            for (let i = 0; i < result.results.length; i++) {
              if (result.results[i].type === "Trailer") {
                setMainData({ data: result.results[i], opts: opts });
                return;
              }
            }
            for (let i = 0; i < result.results.length; i++) {
              if (result.results[i].type === "Teaser") {
                setMainData({ data: result.results[i], opts: opts });
                return;
              }
            }
            for (let i = 0; i < result.results.length; i++) {
              setMainData({ data: result.results[i], opts: opts });
              return;
            }
          }
        }
        chooseData();
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={style.detail}>
      <div>
        <h1>{data.name}</h1>
        <hr />
        <p>
          <strong>Release Date: {data.release_date}</strong>
        </p>
        <p>
          <strong>Vote: {data.vote_average}/10</strong>
        </p>
        <p>{data.overview}</p>
      </div>
      <div>
        {videoKey ? (
          <YouTube videoId={mainData.data.key} opts={mainData.data.otps} />
        ) : (
          // Fallback nếu không tìm thấy video hoặc ảnh
          <img
            src={`${API.BASE_URL_Image}${data.backdrop_path}`}
            alt="Backdrop"
            style={{ width: "100%" }}
          />
        )}
      </div>
    </div>
  );
}
export default MovieDetail;
