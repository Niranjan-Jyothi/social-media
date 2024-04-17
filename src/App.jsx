import "./App.css";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
