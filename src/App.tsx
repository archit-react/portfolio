import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <ScrollProgress />
      <Header />
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Home />
        <Projects />
        <About />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
