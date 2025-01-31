import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Entries from "./components/Entries";
import FamilyEntry from "./components/FamilyEntry";
import FriendsEntry from "./components/FriendsEntry";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Entries />} path={"/Entries"} />
        <Route element={<FamilyEntry />} path={"/FamilyEntry"} />
        <Route element={<FriendsEntry />} path={"/FriendsEntry"} />
      </Routes>
    </>
  );
}
