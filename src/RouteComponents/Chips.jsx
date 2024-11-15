import { Link } from "react-router-dom";
const Chips = () => {
  return (
    <>
      <p>Lays</p>
      <Link exact to="/">
        <button>Vending Machine</button>
      </Link>
    </>
  );
};

export default Chips;
