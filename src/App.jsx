import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <div className="book">
        <div id="up-black"></div>
        <div className="background-gray"></div>
        <div id="up-black-two"></div>
        <div id="up-black-3"></div>
        <div id="up-black-4"></div>
        <div id="up-black-5"></div>
        <div id="up-black-3-1"></div>
        <div id="up-black-5-1"></div>
        <div id="up-black-two-1"></div>
        <div id="up-black-two-2"></div>
        <div id="up-black-two-3"></div>
        <div id="up-black-6"></div>
        <div id="up-black-7"></div>
        <div id="up-black-8"></div>
        <div className="contact">
          {selectedContactId ? (
            <SelectedContact
              selectedContactId={selectedContactId}
              setSelectedContactId={setSelectedContactId}
            />
          ) : (
            <ContactList setSelectedContactId={setSelectedContactId} />
          )}
        </div>
        <div id="up-black-9"></div>
        <div id="up-black-10"></div>
        <div id="up-black-11"></div>
        <div id="up-black-12"></div>
        <div id="up-black-13"></div>
        <div id="up-black-14"></div>
        <div id="up-black-15"></div>
        <div id="up-black-16"></div>
        <div id="up-black-17"></div>
        <div id="up-black-18"></div>
        <div id="up-black-19"></div>
        <div id="up-black-20"></div>
        <div id="up-black-21"></div>
        <div id="up-black-22"></div>
        <div id="up-black-23"></div>
        <div id="up-black-24"></div>
        <div id="up-black-25"></div>
        <div id="up-black-26"></div>
        <div id="up-black-27"></div>
        <div id="up-black-28"></div>
        <div id="up-black-29"></div>
      </div>
    </>
  );
};
export default App;
