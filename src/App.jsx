import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Curriculum from "./Components/CurriculumSection/Curriculum";
import Refund from "./Components/Refundsection/Refund";
import Topcompanies from "./Components/TopCompanies/Topcompanies";

import Certificates from "./Components/Certificates/Certificates";
import Enroll from "./Components/EnrollmentSection/Enroll";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Curriculum />
      <Refund />
      <Topcompanies />
      {/* <Certificates /> */}
      {/* <Enroll /> */}
    </>
  );
}

export default App;
