import logo from "../../public/images/brand_logo.png";
import "../App.css";

function Navigation() {
  return (
    <nav className="container">
      <div className="logo">
        <img src={logo} alt="logo of the brand" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
}
export default Navigation;
