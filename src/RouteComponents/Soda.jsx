import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <>
      <p>Soda</p>
      <Link exact to="/">
        <button>Vending Machine</button>
      </Link>
    </>
  );
};
export default Soda;
