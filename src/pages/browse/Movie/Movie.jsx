import React from "react";
import AuthContext from "../../../Component/Context/CreateContext";
import { useContext, useState, useEffect, useRef } from "react";
import MovieDetail from "./MovieDetail.jsx";
import "./MovieList.css";
function Movie({ props }) {
  // Component này sẽ quyết định xuất dữ liệu hình ảnh loại nào
  const API = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // False: đóng, True: mở
  const sideRef = useRef();
  const clickHandler = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    const handlerClickOutSide = (event) => {
      if (
        sideRef.current &&
        !sideRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handlerClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handlerClickOutSide);
    };
  }, [isOpen]);
  return (
    <>
      <img
        className="row__poster"
        onClick={clickHandler}
        key={props.data.id}
        src={`${API.BASE_URL_Image}${
          props.typeImg ? props.data.poster_path : props.data.backdrop_path
        }`}
        alt={props.data.name}
      />
      {isOpen && (
        <div
          ref={sideRef}
          style={{
            position: "fixed",
            top: "360px",
            left: "-20px",
            width: "100vw",
            height: "100vh",
            zIndex: "1000", // Đảm bảo nổi lên trên cùng
            boxShadow: "0 0 15px rgba(0,0,0,0.8)", // Đổ bóng cho đẹp
          }}
        >
          <MovieDetail data={props.data} />
        </div>
      )}
    </>
  );
}
export default Movie;
