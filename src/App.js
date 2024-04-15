import Aos from "aos";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/sass/index.scss";
import {
  About,
  AddEvent,
  Advancing,
  Advantages,
  BinaryPlant,
  BlogList,
  Contact,
  CookiePolicy,
  Dashboard,
  DashboardPage,
  DrySteam,
  ESG,
  EventDetailPage,
  EventList,
  EventPage,
  FlashSteam,
  Insights,
  Investor,
  LeadingProgram,
  Login,
  News,
  Orc,
  OurPortfolio,
  PortfolioPartner,
  RegisterEvent,
  Scicat,
  Technology,
} from "./components";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Layout from "./components/layout";
import { Legaldisclaimer, PrivacyPolict, TermsOfUse } from "./components/terms";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/*' element={<ComingSoon />}> */}
        <Route path="/*" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="technology" element={<Technology />} />
          <Route path="technology/orc-plant" element={<DrySteam />} />
          <Route path="technology/flash-steam" element={<FlashSteam />} />
          <Route path="technology/binary-plant" element={<BinaryPlant />} />
          {/* <Route path='team' element={<TeamPage />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="partners" element={<PortfolioPartner />} />
          <Route path="esg" element={<ESG />} />
          <Route path="advantages" element={<Advantages />} />
          <Route path="investor" element={<Investor />} />
          <Route path="news" element={<News />} />
          <Route path="leading-program" element={<LeadingProgram />} />
          <Route path="event" element={<EventPage />} />
          <Route path="event/details/:id" element={<EventDetailPage />} />
          <Route path="event/register" element={<RegisterEvent />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="legal-disclaimer" element={<Legaldisclaimer />} />
          <Route path="privacy-policy" element={<PrivacyPolict />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="our-portfolio" element={<OurPortfolio />} />

          <Route path="admin" element={<Login />} />
          <Route path="admin/event-list" element={<EventList />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/add-event" element={<AddEvent />} />
          <Route path="admin/blog" element={<BlogList />} />
          <Route path="home" element={<DashboardPage />} />
          <Route path="technology/orc" element={<Orc />} />
          <Route path="technology/scicat" element={<Scicat />} />
          <Route path="advancing" element={<Advancing />} />
          <Route path="insights" element={<Insights />} />
          <Route path="about" element={<About />} />
          <Route path="contact/us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;