import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Wedding Entries</h1>
      <nav className="navigation">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/entries"} className="nav-link">
          All Entries
        </Link>
        <Link to={"/familyentry"} className="nav-link">
          Family Entries
        </Link>
        <Link to={"/friendsentry"} className="nav-link">
          Friends Entries
        </Link>
      </nav>
    </header>
  );
}
