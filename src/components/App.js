import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "../pages/About";
import { ContactPage } from "../pages/ContactPage";
import { SignInPage } from "../pages/SignInPage";
import { WelcomePage } from "../pages/WelcomePage/WelcomePage";
import NavigationPersonal from "./Navigation/NavigationPersonal";
import NavigationRegister from "./Navigation/NavigationRegister";

// import Search from "./Search/Search";
const Navigation = () => {
  const location = useLocation();
  if (location.pathname === "/" || location.pathname === "/auth") {
    return <NavigationRegister />;
  }
  return <NavigationPersonal />;
};
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
