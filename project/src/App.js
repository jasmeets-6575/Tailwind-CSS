import "./App.css";
import Experts from "./components/Experts";
import NewsLetter from "./components/NewsLetter";
import Plans from "./components/Plans";
import Banner from "./components/banner";
import Header from "./components/header";


function App() {
  return (
    <>
      <Header />
      <Banner />
      <Experts />
      <NewsLetter />
      <Plans/>
    </>
  );
}

export default App;
