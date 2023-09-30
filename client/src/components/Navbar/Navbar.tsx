import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img className="logo" src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.18169-9/23754992_1726023157440074_5978733848303126604_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=w71Gzma1pLwAX9wVBR2&_nc_ht=scontent.fyyz1-2.fna&oh=00_AfBpj67B6TS2zMzM0H2Ekv-2Ayahr1kW43Fl-TzFNvk-Mw&oe=653FA580"></img>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
