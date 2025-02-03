import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Entries from "./components/Entries";
import FamilyEntry from "./components/FamilyEntry";
import FriendsEntry from "./components/FriendsEntry";
import Form from "./components/Form";
import ImageCarousel from "./components/Image";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <ImageCarousel />
      <Routes>
        <Route element={<Entries />} path={"/Entries"} />
        <Route element={<FamilyEntry />} path={"/FamilyEntry"} />
        <Route element={<FriendsEntry />} path={"/FriendsEntry"} />
      </Routes>
      <Form />
    </div>
  );
}
