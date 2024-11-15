import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Choose a snack</h1>
      <div className="Home-container">
        <Link exact to="/chips">
          <button>Chips</button>
        </Link>
        <Link exact to="/soda">
          <button>Soda</button>
        </Link>
        <Link exact to="/chocolate">
          <button>Chocolate</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
