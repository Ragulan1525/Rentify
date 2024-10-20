import HeroSection from "./HeroSection.jsx";
import Navbar from "./Navbar.jsx";
// import Login from "./Login.jsx";
// import SignUp from "./SignUp.jsx";
// import Request from "./Request.jsx"; // import ReqSign from "./ReqSign.jsx";
// import Bookmark from "./Bookmark.jsx";
// import Button from "./Button.jsx";

import Stackedcards from "./Stackedcards.jsx";
import Stats from "./Stats.jsx";
import Steps from "./Steps.jsx";
import FAQ from "./FAQ.jsx";
// import Testimonals from "./Testimonals.jsx";
import Footers from "./Footers.jsx";
// import Popup from "./Popup.jsx";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <Login/>
      <SignUp/>
      <Button/>
      <Request/>
      <Bookmark/>  */}
      
      <Stats/>
      <Stackedcards/>
      <Steps/>
      {/* <Testimonals/> */}
      <FAQ/>
      <Footers/>
      {/* <Popup/>     */}

    </>
  );
}

export default App;
