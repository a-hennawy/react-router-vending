import { Link } from "react-router-dom";

const Chocolate = () => {
  return (
    <>
      <p>Chocolate</p>
      <Link exact to="/">
        <button>Vending Machine</button>
      </Link>
    </>
  );
};
export default Chocolate;
