import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && (
        <div className="loader">
          <div className="b b1"></div>
          <div className="b b2"></div>
          <div className="b b3"></div>
          <div className="b b4"></div>
        </div>
      )}
      {isPending &&
        window.addEventListener("load", function () {
          const loader = document.querySelector(".loader");
          loader.className += " hidden"; // class "loader hidden"
        })}
      {isPending && <h2>Loading...</h2>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
