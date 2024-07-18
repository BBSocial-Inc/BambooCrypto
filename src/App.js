import "./App.scss";
import Reserveyourusername from "./components/Reserveyourusername/Reserveyourusername.js";
import Landing from "./components/landing/Landing.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Premium from "./components/Premium/Premium.js";
import Individual from "./components/Individual/Individual";
import Projects from "./components/Projects/Projects";
import ProjectPayments from "./components/Projects/Payments";
import IndividualPayments from "./components/Individual/individualPayment";
import CommunityPayments from "./components/Community/Payments";
import PaymentSuccess from "./components/PaymentSuccess";
import Community from "./components/Community/community";
import Invest from "./components/Invest/index";
import Influencer from "./components/Infulencer/index";
import Buyer from "./components/Buyer/Buyer";
import TokenPreSales from "./components/TokenPreSales/TokenPreSales";
import SupportUs from "./components/Support/SupportUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="/reserveyourusername"
            element={<Reserveyourusername />}
          />
          <Route exact path="/premium" element={<Premium />} />
          <Route exact path="/buyer" element={<Buyer />} />
          <Route exact path="/individual" element={<Individual />} />
          <Route
            path="/individual/pre-sale/success"
            element={<PaymentSuccess />}
          />
          <Route
            exact
            path="/individual/pre-sale"
            element={<IndividualPayments />}
          />
          <Route exact path="/community" element={<Community />} />
          <Route
            exact
            path="/community/pre-sale"
            element={<CommunityPayments />}
          />
          <Route exact path="/project" element={<Projects />} />
          <Route exact path="/token" element={<TokenPreSales />} />
          <Route exact path="/project/pre-sale" element={<ProjectPayments />} />
          <Route exact path="/invest" element={<Invest />} />
          <Route exact path="/influencer" element={<Influencer />} />
          <Route exact path="/support-us" element={<SupportUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
