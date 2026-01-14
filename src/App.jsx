import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./Pages/MainContent";
import PortfolioContext from "./store/PortfolioContext";

function App() {
  return (
    <PortfolioContext>
      <Header />
      <MainContent />
      <Footer />
    </PortfolioContext>
  );
}

export default App;
