/**
 * App.tsx
 * ---------------------------------------------------------------------------
 * Routes. Every page renders inside MainLayout (header/footer/quick-nav).
 * Routes mirror navigationConfig + mobileQuickNav so links never dead-end.
 * ---------------------------------------------------------------------------
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import {
  Fixtures,
  Results,
  Ladder,
  Clubs,
  MatchCentre,
  FanHub,
  Juniors,
  Sponsors,
  News,
  Store,
  About,
  Contact,
  NotFound,
} from "./pages/pages";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match-centre" element={<MatchCentre />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/results" element={<Results />} />
          <Route path="/ladder" element={<Ladder />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/fanhub" element={<FanHub />} />
          <Route path="/juniors" element={<Juniors />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/news" element={<News />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
