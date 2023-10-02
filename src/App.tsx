import "./App.scss";
import Lenis from "@studio-freight/lenis";
import Header from "./Components/Header";
import Page from "./Components/Page";
import Footer from "./Components/Footer";
import ActiveSectionContextProvider from "./context/activeElementContext";

function App() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <ActiveSectionContextProvider>
        <Header />
        <Page />
        <Footer />
      </ActiveSectionContextProvider>
    </>
  );
}

export default App;
