import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import CompanyContext from "./context/CompanyContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import people from "./data/company.json";
function App() {
  let appTheme = "light";
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    appTheme = "dark";
  }
  return (
    <div data-bs-theme={appTheme}>
      <Header />
      <CompanyContext.Provider value={people.data}>
        <div className="contentsContainer w-100">
          <LandingPage />
        </div>
      </CompanyContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
