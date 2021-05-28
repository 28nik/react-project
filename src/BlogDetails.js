import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && (
        <div className="loader">
          <div className="b b1"></div>
          <div className="b b2"></div>
          <div className="b b3"></div>
          <div className="b b4"></div>
        </div>
      )}

      {isPending && <h2>Loading...</h2>}
      {error && <div className="error">{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="blog-body">{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
      {isPending &&
        window.addEventListener("load", function () {
          const loader = document.querySelector(".loader");
          loader.className += " hidden"; // class "loader hidden"
        })}
    </div>
  );
};

export default BlogDetails;
