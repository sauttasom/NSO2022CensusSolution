import "./App.css";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EnumerateList from "./pages/EnumerateList";
import EnumerateDetail from "./pages/EnumerateDetail";
import OwnerList from "./pages/OwnerList";
import ControlBalance from "./pages/ControlBalance";
import List from "./pages/List";
import DetailListing from "./pages/DetailListing";
import ListingDetail from "./pages/ListingDetail";
import TriangulationList from "./pages/TriangulationList";
import TriangulationDetail from "./pages/TriangulationDetail";
import TrackingList from "./pages/TrackingList";
import TrackingDetail from "./pages/TrackingDetail";
import Appendix from "./pages/Appendix";
import OutsideDetail from "./components/OutsideDetail";


function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.REACT_APP_BASE}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/main" element={<Main />} />
          <Route path="/appendix" element={<Appendix />} />
          <Route path="/ownerList" element={<OwnerList />} />
          <Route path="/detailListing" element={<DetailListing />} />
          <Route path="/controlBalance" element={<ControlBalance />} />
          <Route path="/listingDetail" element={<ListingDetail />} />
          <Route path="/enumerateList" element={<EnumerateList />} />
          <Route path="/enumerateDetail" element={<EnumerateDetail />} />
          <Route path="/triangulationList" element={<TriangulationList />} />
          <Route path="/triangulationDetail" element={<TriangulationDetail />} />
          <Route path="/trackingList" element={<TrackingList />} />
          <Route path="/trackingDetail" element={<TrackingDetail />} />
          <Route path="/outsideDetail" element={<OutsideDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
