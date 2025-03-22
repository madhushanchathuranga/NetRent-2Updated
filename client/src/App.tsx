import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./loaders/Loader";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import AboutPage from "./pages/AboutPage";
import BusinessPage from "./pages/BusinessPage";
import ResidentialPage from "./pages/ResidentialPage";
import ResidentialView from "./pages/ResidentialView";
import { Toaster } from "react-hot-toast";
import CommercialPage from "./pages/CommercialPage";
import AgentPage from "./pages/AgentPage";
import CommercialView from "./pages/CommercialView";
import RoomingPage from "./pages/RoomingPage";
import RoomingView from "./pages/RoomingView";
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster />
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />  {/* Index route */}
            <Route path="aboutus" element={<AboutPage />} />
            <Route path="business" element={<BusinessPage />} />
            <Route path="residential" element={<ResidentialPage />} />
            <Route path="residential/:id/:title" element={<ResidentialView />} />
            <Route path="commercial" element={<CommercialPage />} />
            <Route path="commercial/:id/:title" element={<CommercialView />} />
            <Route path="agent" element={<AgentPage />} />
            <Route path="rooming" element={<RoomingPage />} />
            <Route path="rooming/:id/:title" element={<RoomingView />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App