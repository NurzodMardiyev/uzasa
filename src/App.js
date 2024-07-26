import { Route, Routes } from "react-router-dom";
import "./App.css";
import StockLayout from "./layouts/StockLayout";
import Home from "./pages/Home";
import WhoAreWe from "./pages/WhoAreWe";
import TargetGoals from "./pages/TargetGoals";
import ContactUs from "./pages/ContactUs";
import EachCards from "./components/params/EachCards";
import EachPerson from "./components/params/EachPerson";
import EachCoompany from "./components/params/EachCompany";
import Festival from "./pages/Festival";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StockLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/whoarewe" element={<WhoAreWe />} />
          <Route path="/targetgoals" element={<TargetGoals />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/news/:id" element={<EachCards />} />
          <Route path="/person/:id" element={<EachPerson />} />
          <Route path="/company/:id" element={<EachCoompany />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
