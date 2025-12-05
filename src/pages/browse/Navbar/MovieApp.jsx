function MovieApp() {
  function HomeHandler() {
    console.log("Home clicked");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div
      onClick={HomeHandler}
      style={{ color: "#FF0000", cursor: "pointer", fontWeight: "bold" }}
    >
      Movie App
    </div>
  );
}
export default MovieApp;
