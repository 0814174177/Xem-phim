import React from "react";
import Magnifier from "../../../Component/UI/Magnifier";
import MovieApp from "./MovieApp.jsx";
import { useState, useEffect } from "react";
import style from "./NavBar.module.css";
export default function NavBar({ img }) {
  const [change, setChange] = useState(() => {
    // Nếu chưa cuộn (<=100) thì true (trong suốt), ngược lại là false (đen)
    return window.scrollY <= 100;
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setChange(false); // Kéo xuống > 100px thì đổi màu đen
      } else {
        setChange(true); // Ở trên đỉnh thì trong suốt
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${change ? style.navbar : style.navbar__black} ${
          style.form
        }`}
      >
        <MovieApp />
        <Magnifier
          img={img}
          style={{ color: "#000" }}
          className="none-border"
        />
      </div>
    </>
  );
}
