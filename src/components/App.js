import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { ContactPage } from "../pages/ContactPage";
import { SignInPage } from "../pages/SignInPage";
import { WelcomePage } from "../pages/WelcomePage";
import Navigation from "./Navigation/Navigation";
// import Search from "./Search/Search";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index path="/" element={<WelcomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<SignInPage />} />
      </Routes>
      {/* </Suspense> */}
    </div>
  );
};
