import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Wedding Enries</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/entries"}>Entries</Link>
      <Link to={"/familyentry"}>Family Entries</Link>
      <Link to={"/friendsentry"}>Friends Entries</Link>
    </>
  );
}
