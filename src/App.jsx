import "./App.css";

import ContactList from "./components/WatchList/ContactList";
import ContactForm from "./components/WatchForm/ContactForm";
import ContactBtns from "./components/ContactBtns/ContactBtns";
// import { nanoid } from "nanoid";
// import api from "./api/contact-service";

// const INITIAL_CONTACT = {
//   id: null,
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
// };

const App = () => {
  return (
    <div className="site">
      <h1>Contact list</h1>
      <div className="items">
        <ContactList />
        <ContactForm />
      </div>
      <ContactBtns />
    </div>
  );
};

export default App;
