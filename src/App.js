import Header from "./components/Header";
import Name from "./components/Name";
import About from "./pages/About";
import Projects from "./pages/Projects/index";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App ">
      <Header />
      <Name />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
