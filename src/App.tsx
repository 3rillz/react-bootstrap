// import "./App.css";
import MyFooter from "./layouts/footer";
import MyNavbar from "./layouts/navbar";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import FaqPage from "./pages/faq";
import HomePage from "./pages/home";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;

    case "/about":
      component = <AboutPage />;
      break;

    case "/contact":
      component = <ContactPage />;
      break;

    case "/faq":
      component = <FaqPage />;
      break;
  }
  return (
    <>
      <MyNavbar />
      {/* <HomePage /> */}
      {component}
      <MyFooter />
    </>
  );
}

export default App;
