import "./App.css";

import ContactList from "./components/WatchList/ContactList";
import ContactForm from "./components/WatchForm/ContactForm";

const App = () => {
  return (
    <div className="site">
      <h1>Contact list</h1>
      <div className="items">
        <ContactList />
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
