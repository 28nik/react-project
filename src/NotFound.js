import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>We can't see the page you are looking for</p>
      <h1>404 error</h1>
      <Link to="/">You can go to home by clicking here</Link>
    </div>
  );
};

export default NotFound;
