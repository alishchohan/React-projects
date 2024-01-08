import "./App.css";
import { ContactForm } from "./components/ContactForm./ContactForm";
import Navbar from "./components/Navigation/Navbar";
// import { Button } from "./components/button/button";
import { ContactHeader } from "./components/contact-hrader/Contactheader";
function App() {
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <ContactHeader />
        <ContactForm />
      </main>
      {/* <Button /> */}
    </div>
  );
}

export default App;
